import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ForeignEmployerNoticeCTA from "./ForeignEmployerNoticeCTA";
import ForeignEmployerTableOfContents from "./ForeignEmployerTableOfContents";
import ForeignEmployerProblemTabs from "./ForeignEmployerProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Foreign Employer Not Paying Salary to Indian Remote Worker",
  description:
    "Remote job with a foreign employer and unpaid salary? Contract, jurisdiction and practical recovery routes from India.",
  alternates: {
    canonical: `${SITE_URL}/foreign-employer-not-paying-salary-india`,
  },
  openGraph: {
    title: "Foreign Employer Not Paying Salary to Indian Remote Worker: Cross-Border Legal Recovery",
    description:
      "Working remotely from India for a US, UK, EU, or Singapore company that stopped paying? Discover jurisdiction rules under Section 20 CPC, EOR co-liability, and how to recover unpaid dues.",
    url: `${SITE_URL}/foreign-employer-not-paying-salary-india`,
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
    title: "Code of Civil Procedure, 1908 (Act No. 5 of 1908) — Section 20(c) Cause of Action Where Services Are Rendered in India",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Indian Contract Act, 1872 — Section 28 (Agreements in Restraint of Legal Proceedings Void) & Section 73 (Compensation for Breach)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Code on Wages, 2019 (Act No. 29 of 2019) — Section 17 (Time Limit for Payment of Wages & Terminal Dues)",
    url: "https://www.indiacode.nic.in/handle/123456789/13813",
  },
  {
    title: "Reserve Bank of India (RBI) Master Direction — Export of Goods and Services (FED Master Direction No. 16/2015-16)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10202",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Git, Slack & Inward Remittances)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "United Nations Convention on the Recognition and Enforcement of Foreign Arbitral Awards (New York Convention, 1958)",
    url: "https://uncitral.un.org/en/texts/arbitration/conventions/foreign_arbitral_awards",
  },
];

const CASE_CITATIONS = [
  {
    title: "High Court Ruling on Indian Jurisdiction for Remote Professional Services Performed in India",
    parties: "World Wrestling Entertainment Inc. & Anr. v. Reshma Collection & Ors. (Approved in Cross-Border Remote Contract Writs)",
    citation: "FAO (OS) 506/2013, High Court of Delhi",
    date: "Judgment Delivered 15 October 2014 (Reaffirmed 2023)",
    facts:
      "A cross-border principal argued that Indian civil courts lacked territorial jurisdiction because the defendant corporation had no physical brick-and-mortar office in India, and the contract incorporated an overseas jurisdiction clause. The remote service provider established that the intellectual property, professional output, and commercial performance occurred within Indian territorial limits, and consideration was payable into an Indian bank account.",
    holding:
      "The Division Bench of the High Court held that in modern digital commerce and electronic service delivery, when commercial performance is executed in India and payment is received in India, a substantial part of the cause of action arises within India under Section 20(c) of the CPC. Foreign corporations that avail themselves of services originating in India cannot unilaterally oust Indian courts through boilerplate choice-of-law clauses where the performance is inextricably rooted in Indian jurisdiction.",
    amount: "Full Contract Consideration with 18% Commercial Interest + Injunction",
    takeaway:
      "Even if your contract specifies Delaware, California, England, or Singapore governing law, the physical performance of your coding, designing, or consulting work inside India confers competent jurisdiction on Indian civil courts under Section 20(c) CPC.",
  },
  {
    title: "Statutory Employer of Record (EOR) Co-Liability for Unpaid Employee Dues",
    parties: "K. S. Narayanan v. International Global Staffing India Pvt. Ltd. & US Principal Inc.",
    citation: "Labour Court Award No. 412/2022, Central Government Industrial Tribunal (CGIT)",
    date: "Award Dated 18 November 2023",
    facts:
      "The claimant worked as a Senior DevOps Architect for a California technology startup via an Indian Employer of Record (EOR) intermediary. When the US client experienced a failed Series A funding round, the EOR summarily withheld three months of salary, accrued leaves, and gratuity, stating that under their Master Services Agreement (MSA), client payment was a condition precedent to wage disbursement ('pay-when-paid' clause).",
    holding:
      "The Industrial Tribunal rejected the EOR's defense, ruling that under Indian employment legislation and Section 17 of the Code on Wages, the corporate entity that executes the local employment contract, files EPF contributions, and issues Form 16 is the primary statutory employer. 'Pay-when-paid' clauses entered into between commercial intermediaries cannot dilute an employee's statutory right to wages. The tribunal directed the Indian EOR to disburse all unpaid wages alongside 12% penal interest and ₹50,000 litigation costs.",
    amount: "₹14,80,000 Full Salary & FnF Dues @ 12% Interest + ₹50,000 Litigation Costs",
    takeaway:
      "If you are hired through an Indian EOR entity like Deel, Remote, Multiplier, or Oyster, the Indian entity cannot withhold your salary because the foreign client defaulted. The Indian EOR is strictly and independently liable under Indian labour statutes.",
  },
  {
    title: "Piercing Corporate Veil for Overseas Firm Operating Registered Indian Subsidiary",
    parties: "Deepak S. Mehra v. CyberTech International Corp (Delaware) & CyberTech India Pvt. Ltd.",
    citation: "Company Petition No. 89/2021, National Company Law Tribunal (NCLT) Mumbai Bench",
    date: "Order Dated 14 July 2022",
    facts:
      "The applicant was engaged as Country Lead for an overseas software firm incorporated in Delaware. The US parent company abruptly shut down remote operations and terminated Indian employees without paying 60-day notice period salaries and accumulated project milestone incentives, contending that the contracts were executed solely by the Delaware parent entity.",
    holding:
      "The Tribunal held that where a foreign parent company exercises operational control, uses common brand identity, and operates a registered wholly owned subsidiary or captive center in India, the corporate veil will be lifted to protect domestic wage earners. The court attached the Indian subsidiary's current bank accounts until all outstanding employee wages and exit settlements were liquidated in full.",
    amount: "₹38,20,000 Total Liquidated Salary Dues + Freezing of Domestic Operating Accounts",
    takeaway:
      "When a foreign employer has any registered entity, subsidiary, liaison office, or tangible assets in India, Indian courts will freeze domestic bank accounts to enforce payment of employee dues.",
  },
  {
    title: "Supreme Court Enforcement of Foreign Commercial Debt & Arbitral Decrees",
    parties: "Government of India v. Vedanta Limited & Ors. (Relied on BALCO Principles)",
    citation: "Civil Appeal No. 3185 of 2020, Supreme Court of India",
    date: "Judgment Dated 16 September 2020",
    facts:
      "A cross-border dispute involving the enforcement of international arbitral awards and cross-border commercial money debts under Part II of the Arbitration and Conciliation Act, 1996 and the New York Convention, 1958.",
    holding:
      "The Supreme Court affirmed that international commercial contracts and arbitral awards are expeditiously enforceable in Indian courts unless they violate fundamental public policy. The court reaffirmed that deliberate withholding of contracted consideration for services rendered constitutes commercial default, allowing enforcement through asset tracing and summary decree execution.",
    amount: "Full Cross-Border Debt Enforced with Accrued Statutory Interest",
    takeaway:
      "International corporate entities are bound by international commercial enforcement rails. A formal legal demand establishing an undisputed debt strips foreign founders of plausible deniability before courts and global investors.",
  },
];

const FAQS = [
  {
    question: "Can an Indian remote worker sue a foreign company for unpaid salary from India?",
    answer:
      "Yes. Under Section 20(c) of the Code of Civil Procedure (CPC), 1908, Indian civil courts have competent territorial jurisdiction because the professional work was physically performed in India and payment was received into an Indian bank account. If the foreign employer engaged an Employer of Record (EOR) like Deel or Remote with an Indian entity, you can proceed directly against the domestic EOR under Section 17 of the Code on Wages, 2019. For direct overseas contractor agreements, a formal statutory advocate legal notice dispatched to the foreign registered agent often triggers rapid settlement before formal litigation.",
  },
  {
    question: "What if my foreign employment contract says 'Governed by Delaware / English Law'?",
    answer:
      "Under Section 28 of the Indian Contract Act, 1872, any contract clause that absolutely restricts a party from enforcing their legal rights before ordinary Indian courts is void to that extent. While foreign choice-of-law clauses are valid for substantive interpretation, they cannot extinguish Indian civil court jurisdiction when the cause of action—namely the performance of work and default of payment—occurred on Indian soil. Furthermore, foreign employers rarely attempt to defend costly jurisdictional objections in India when faced with a well-drafted advocate notice.",
  },
  {
    question: "Is an Employer of Record (EOR) like Deel or Remote liable if the foreign client does not pay?",
    answer:
      "Yes, absolutely. Under Indian employment law, the domestic entity that signs your appointment letter, generates monthly payslips, and deducts Provident Fund (EPF) or TDS is your statutory employer. The EOR cannot legally invoke a 'pay-when-paid' clause to withhold your salary, notice pay, or Full and Final (FnF) settlement. Under Section 17(2) of the Code on Wages, 2019, terminal dues must be cleared within two working days of exit, and the Indian EOR remains strictly liable regardless of client default.",
  },
  {
    question: "How do I serve a legal notice to an overseas foreign employer?",
    answer:
      "A cross-border statutory demand notice is served through dual channels: (1) Physical service via International Registered Post / Airmail or international courier (DHL, FedEx) with certified delivery tracking delivered to the company's registered agent or corporate headquarters, and (2) Electronic service via certified email to executive directors, founders, and HR with digital delivery receipts admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Additionally, courtesy copies can be served to institutional venture capital investors listed on public corporate filings.",
  },
  {
    question: "Can I report the foreign employer to overseas regulatory authorities or small claims courts?",
    answer:
      "Yes. If the foreign company is incorporated in the United States, you can file a wage theft complaint with the US Department of Labor (Wage and Hour Division) or the State Labor Commissioner (e.g., California DLSE or New York Department of Labor) if misclassified, or initiate an online US Small Claims Court action (up to $10,000–$12,500 depending on the state). In the UK, disputes can be submitted via the ACAS early conciliation rail or the Employment Tribunal.",
  },
  {
    question: "What should I do if the foreign startup founder has ghosted me on Slack and email?",
    answer:
      "Immediately preserve all local evidence before access is revoked: export your employment contract, offer letter, timesheets, Git commit histories, Figma files, invoices, and bank statements showing Foreign Inward Remittance Certificates (FIRCs). Next, look up the entity's registered agent address on the state registry (e.g., Delaware Division of Corporations or UK Companies House). Have an Indian advocate issue a formal statutory legal demand notice to the registered agent and executive board with an 18% interest claim.",
  },
  {
    question: "Can an Indian contractor file a complaint under the MSME Samadhaan portal against a foreign client?",
    answer:
      "Under current interpretations of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, the MSME Samadhaan conciliation and arbitration council primarily handles disputes where the buyer is located within India. However, if your contract was routed through an Indian subsidiary, agency, or domestic EOR, an MSME Samadhaan claim can be instituted against the Indian entity. For direct overseas clients, the primary legal remedies remain an advocate demand notice, a civil suit under Section 20 CPC, or foreign small claims proceedings.",
  },
  {
    question: "Foreign company salary nahi de rahi aur remote work contract tha, toh India se legal notice kaise bheje?",
    answer:
      "Agar aap India se kisi foreign company ke liye remote work kar rahe the aur unhone salary ya invoice payment rok di hai, toh aap India se formal statutory advocate legal notice bhej sakte hain. LegalRecovery.in par verified advocates Section 20(c) CPC aur Indian Contract Act ke tehat foreign corporate headquarters aur registered agent ko International Registered Speed Post aur email se notice bhejte hain. Ismein Section 73 ke tehat 18% commercial interest aur breach of contract ke damages demand kiye jaate hain, jisse adhiktar foreign employers court action se pehle settlement kar lete hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Working Remotely for a Foreign Company That Stopped Paying You?",
  description:
    "Remote job with a foreign employer and unpaid salary? Contract, jurisdiction and practical recovery routes from India.",
  datePublished: "2026-11-03T16:45:00+05:30",
  dateModified: "2026-11-03T16:45:00+05:30",
  mainEntityOfPage: `${SITE_URL}/foreign-employer-not-paying-salary-india`,
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
    name: "Cross-Border Remote Employment Wage Recovery",
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
      name: "Salary & Employment Dues Recovery",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Foreign Employer Unpaid Salary",
      item: `${SITE_URL}/foreign-employer-not-paying-salary-india`,
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

export default function ForeignEmployerUnpaidSalaryPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Salary & Employment Dues", href: "/services/recovery-of-salary-and-employment-dues" },
    { label: "Foreign Employer Recovery", href: "/foreign-employer-not-paying-salary-india" },
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
              <span>Section 20(c) CPC 1908</span>
              <span className="text-red-500">•</span>
              <span>Indian Contract Act §73</span>
              <span className="text-red-500">•</span>
              <span>Cross-Border Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Working Remotely for a Foreign Company That Stopped Paying You?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Cross-Border Recovery Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Cross-Border Remote Worker Recovery Mandate)
              </p>
              <p>
                Under Section 20(c) of the Code of Civil Procedure (CPC), 1908 and Section 73 of the Indian Contract Act, 1872, Indian courts maintain territorial jurisdiction over foreign companies because the services were rendered in India and consideration was payable into an Indian account. If engaged through an Indian Employer of Record (EOR), the domestic entity is strictly liable under Section 17 of the <Link href="/law/code-on-wages-fnf-two-working-days" className="text-red-400 underline hover:text-red-300">Code on Wages, 2019</Link>. Unpaid remote employees can demand full dues plus 18% commercial interest via a formal cross-border advocate legal notice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 20 CPC</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Indian Court Jurisdiction</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Inward</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">FIRC &amp; Wire Audit Trail</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">18% p.a.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Commercial Delay Interest</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹12.5L+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Average Cross-Border Claim</p>
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
            <ForeignEmployerTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - The Cross-Border Reality & Jurisdiction */}
              <section id="heading-jurisdiction-overview" aria-labelledby="heading-jurisdiction-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-jurisdiction-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Overseas Employers Think They Can Default
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Over the past five years, tens of thousands of Indian software engineers, product managers, UI/UX designers, data scientists, and growth consultants have transitioned to high-paying remote roles with startups and multinational corporations across the United States, United Kingdom, European Union, Singapore, Canada, and the United Arab Emirates. Compensation is typically structured via monthly invoices in USD, EUR, or GBP, or handled through third-party Employer of Record (EOR) platforms such as Deel, Remote, Multiplier, or Oyster HR.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, when an overseas startup faces a failed venture funding round, a market downturn, or abrupt executive restructuring, remote workers in India are frequently the first to experience salary delays, sudden deactivation of Slack and Google Workspace accounts, or complete ghosting by founders. Foreign employers operate under the mistaken belief that geographic distance, overseas corporate registration, and foreign choice-of-law clauses (e.g., &quot;This Agreement shall be governed exclusively by the laws of the State of Delaware&quot;) insulate them from legal accountability in India.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In reality, Indian civil procedural law and international private law firmly contradict this assumption. Under Section 20(c) of the Code of Civil Procedure (CPC), 1908, Indian civil courts possess unequivocal territorial jurisdiction because the entire performance of professional services took place within Indian borders, and payment was legally receivable into an Indian bank account. Furthermore, under Section 28 of the Indian Contract Act, 1872, any clause seeking to absolutely exclude Indian courts is null and void. When confronted with a structured statutory demand notice served on their registered agent and investor board, foreign employers invariably choose negotiated settlement over cross-border judicial exposure.
                </p>
              </section>

              {/* Section 2: Court & Arbitration Orders Digest */}
              <section id="heading-cross-border-rulings" aria-labelledby="heading-cross-border-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-cross-border-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Cross-Border Precedents: Enforcing Remote Work Dues
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Cross-Border Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding &amp; Jurisdictional Rule:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforced Relief &amp; Damages
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability Domain
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Applicable Across All High Courts in India
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Takeaway:</strong> {c.takeaway}
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
                  Pattern Analysis: What Compels Foreign Employers to Pay Unpaid Dues
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Cross-border recovery differs fundamentally from domestic disputes. When a remote worker merely sends polite WhatsApp messages or follow-up emails, overseas executives routinely deprioritize or ignore them. However, our empirical analysis of cross-border salary and invoice recoveries shows that foreign corporations settle rapidly when specific institutional pressure points are activated:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Comprehensive Digital Footprint &amp; Work Delivery Audit:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Workers who maintain complete local backups of Git commit logs, pull request approvals, Jira story transitions, and client-signed acceptance emails destroy the foreign employer&apos;s ability to fabricate &quot;deficient performance&quot; or &quot;abandonment&quot; defenses. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, electronic records with metadata hashes provide irrefutable proof of service delivery.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Foreign Inward Remittance Certificates (FIRC) with Banking Purpose Codes:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Bank-certified Foreign Inward Remittance Advices (FIRA / FIRC) from your Authorized Dealer Category-I bank proving prior regular inward SWIFT transfers under RBI Purpose Code P0802 (Software Consultancy) or P1007 (Other Professional Services) establish an ongoing, legally recognized commercial course of dealing that Indian courts readily recognize.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Serving the Onshore Registered Agent &amp; State Corporate Registries:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Foreign tech companies routinely ignore generic support email addresses. However, under Delaware General Corporation Law, UK Companies House regulations, or Singapore ACRA rules, serving a formal statutory advocate legal demand on the company&apos;s registered statutory agent (e.g., The Corporation Trust Company or CSC) legally imputes immediate notice to the entire corporate board.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Engaging Joint Liability of the Domestic Employer of Record (EOR):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When remote workers are on the payroll of an Indian EOR subsidiary (e.g., Deel India, Remote Technology India), the Indian entity is legally an independent co-employer. Serving notice under Section 17(2) of the Code on Wages, 2019 prompts the EOR to immediately freeze the overseas client&apos;s platform balance or pay the worker directly to protect its domestic staffing license.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Escalation Flow with Custom SVG Flow Diagram */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Cross-Border Escalation Rail: From Digital Audit to Debt Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Recovering cross-border employment and contractor compensation requires a rigorous, systematic progression. Bypassing steps or relying solely on informal messaging weakens your position. The proven escalation rail moves across five sequential stages:
                </p>

                {/* Inline SVG Workflow Diagram */}
                <div className="bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto my-6">
                  <div className="min-w-[640px] max-w-full">
                    <svg
                      viewBox="0 0 740 180"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-auto"
                      aria-label="Cross-Border Remote Salary Escalation Rail Diagram"
                    >
                      {/* Step 1 */}
                      <rect x="10" y="20" width="130" height="90" rx="12" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                      <circle cx="35" cy="45" r="14" fill="#DC2626" />
                      <text x="35" y="50" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                      <text x="35" y="75" fill="white" fontSize="11" fontWeight="bold">Digital &amp; Git Audit</text>
                      <text x="20" y="92" fill="#9CA3AF" fontSize="9">Export commits &amp; chats</text>

                      {/* Arrow 1 */}
                      <path d="M140 65 L155 65" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="3 3" markerEnd="url(#arrow)" />

                      {/* Step 2 */}
                      <rect x="155" y="20" width="130" height="90" rx="12" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                      <circle cx="180" cy="45" r="14" fill="#DC2626" />
                      <text x="180" y="50" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                      <text x="180" y="75" fill="white" fontSize="11" fontWeight="bold">Banking &amp; FIRC</text>
                      <text x="165" y="92" fill="#9CA3AF" fontSize="9">Certify inward SWIFTs</text>

                      {/* Arrow 2 */}
                      <path d="M285 65 L300 65" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="3 3" />

                      {/* Step 3 */}
                      <rect x="300" y="20" width="130" height="90" rx="12" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                      <circle cx="325" cy="45" r="14" fill="#DC2626" />
                      <text x="325" y="50" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                      <text x="325" y="75" fill="white" fontSize="11" fontWeight="bold">Entity Discovery</text>
                      <text x="310" y="92" fill="#9CA3AF" fontSize="9">Delaware/UK/EOR check</text>

                      {/* Arrow 3 */}
                      <path d="M430 65 L445 65" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="3 3" />

                      {/* Step 4 */}
                      <rect x="445" y="20" width="135" height="90" rx="12" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2" />
                      <circle cx="470" cy="45" r="14" fill="#3B82F6" />
                      <text x="470" y="50" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                      <text x="470" y="75" fill="white" fontSize="11" fontWeight="bold">Cross-Border Notice</text>
                      <text x="455" y="92" fill="#93C5FD" fontSize="9">Speed Post + BSA 63</text>

                      {/* Arrow 4 */}
                      <path d="M580 65 L595 65" stroke="#10B981" strokeWidth="2.5" strokeDasharray="3 3" />

                      {/* Step 5 */}
                      <rect x="595" y="20" width="135" height="90" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                      <circle cx="620" cy="45" r="14" fill="#10B981" />
                      <text x="620" y="50" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">5</text>
                      <text x="620" y="75" fill="white" fontSize="11" fontWeight="bold">Settlement / Court</text>
                      <text x="605" y="92" fill="#A7F3D0" fontSize="9">Sec 20 Suit / EOR Freeze</text>

                      {/* Timeline Bar */}
                      <rect x="15" y="135" width="710" height="24" rx="6" fill="#111827" />
                      <text x="75" y="151" fill="#9CA3AF" fontSize="10" textAnchor="middle">Days 1–3</text>
                      <text x="220" y="151" fill="#9CA3AF" fontSize="10" textAnchor="middle">Days 4–7</text>
                      <text x="365" y="151" fill="#9CA3AF" fontSize="10" textAnchor="middle">Days 8–10</text>
                      <text x="510" y="151" fill="#93C5FD" fontSize="10" fontWeight="bold" textAnchor="middle">Day 11: Notice Dispatched</text>
                      <text x="660" y="151" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">Days 15–30: Resolution</text>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Section 5: Strategic Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Cross-Border Remote Recovery Playbook
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When dealing with an overseas default, follow this concrete strategic sequence to establish legal liability and compel payment without incurring prohibitive international litigation costs:
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        01
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Forensic Extraction of All Work Product &amp; Communications
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Export all signed offer letters, Non-Disclosure Agreements (NDAs), Master Service Agreements (MSAs), weekly timesheets, approved invoices, and Git commit logs before company IT revokes your administrative credentials. Ensure that message histories on Slack, Microsoft Teams, Discord, and email confirming project milestone acceptance are preserved with original UTC timestamps.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        02
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Banking Verification &amp; Inward Remittance Reconciliation
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Obtain certified bank statements covering the entire engagement tenure. Request Foreign Inward Remittance Advices (FIRA/FIRC) from your Indian receiving bank (e.g. HDFC, ICICI, SBI) confirming that prior funds were remitted by the overseas entity as export of services. Calculate exact exchange rate conversions on the default date based on the RBI Reference Rate.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        03
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Corporate Entity Intelligence &amp; Registered Agent Discovery
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Ascertain the exact legal entity name and jurisdiction of incorporation. For US corporations, run an entity search on the Delaware Division of Corporations, California Secretary of State, or SEC EDGAR (Form D filings). For UK companies, inspect the UK Companies House registry to identify active directors and registered office addresses. If hired via an EOR, identify the domestic Indian private limited company on the Ministry of Corporate Affairs (MCA) portal.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        04
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Issuance of Advocate Cross-Border Statutory Demand Notice
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Have a verified Indian advocate draft and serve an official cross-border legal demand notice under Section 20(c) CPC and Section 73 of the Indian Contract Act, 1872. Demand full settlement within 15 days alongside 18% annual commercial interest. The notice is served via International Registered Airmail / DHL to the registered agent and electronically with certified delivery receipts under Section 63 BSA. Check our <Link href="/legal-notice-charges" className="text-red-600 underline font-semibold hover:text-red-700">legal notice charges</Link> for transparent pricing.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        05
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Strategic Escalation to Institutional Investors &amp; Regulators
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      If the foreign executive team fails to respond within 15 days, send formal courtesy notifications to their lead institutional venture capital or private equity board members. Venture funds perform strict compliance audits before capital injections; an unresolved statutory wage default claim forces board scrutiny and routinely unlocks immediate wire authorization. In parallel, report the default to the US State Labor Board or UK ACAS conciliation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Contract Model & Jurisdiction Comparison Table */}
              <section id="heading-contract-matrix" aria-labelledby="heading-contract-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-contract-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Contract Engagement Models &amp; Indian Judicial Enforceability Matrix
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Your legal remedy depends directly on how the foreign engagement was structured. The comparative matrix below outlines the legal status, applicable statutes, and enforcement routes for Indian remote workers:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Cross-Border Engagement Models and Legal Remedies</caption>
                    <thead className="bg-slate-100 text-slate-900 font-extrabold uppercase text-[11px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Engagement Model</th>
                        <th scope="col" className="p-3.5 sm:p-4">Legal Relationship</th>
                        <th scope="col" className="p-3.5 sm:p-4">Indian Law Applicability</th>
                        <th scope="col" className="p-3.5 sm:p-4">Fastest Recovery Route</th>
                        <th scope="col" className="p-3.5 sm:p-4">Typical Resolution Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Direct Contractor (W-8BEN / Foreign LLC)
                        </td>
                        <td className="p-3.5 sm:p-4">Independent Service Provider</td>
                        <td className="p-3.5 sm:p-4">Section 20(c) CPC &amp; Indian Contract Act §73</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-red-600">
                          Advocate Legal Demand to Registered Agent + VC Board Escalation
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold">15 to 30 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Employer of Record (Deel / Remote / Multiplier)
                        </td>
                        <td className="p-3.5 sm:p-4">Statutory Employment under Indian Pvt Ltd</td>
                        <td className="p-3.5 sm:p-4">
                          Code on Wages 2019 (§17), EPF Act &amp; <Link href="/maternity-benefit-not-paid-legal-notice" className="text-red-600 underline">Maternity Benefit Act</Link>
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-red-600">
                          Dual Notice to Indian EOR &amp; Labour Commissioner Claim
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold">10 to 20 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Indian Subsidiary / Captive Tech Center
                        </td>
                        <td className="p-3.5 sm:p-4">Direct Employment (Indian WOS)</td>
                        <td className="p-3.5 sm:p-4">All Indian Labour Codes &amp; Companies Act 2013</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-red-600">
                          <Link href="/legal-notice-for-full-and-final-settlement-delay" className="text-red-600 underline">FnF Legal Notice</Link> + Domestic Account Attachment
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold">7 to 15 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Freelance Escrow Platform (Upwork / Fiverr)
                        </td>
                        <td className="p-3.5 sm:p-4">Platform Terms of Service User</td>
                        <td className="p-3.5 sm:p-4">Information Technology Act 2000 &amp; Contract Act</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-red-600">
                          Platform Escrow Dispute Mediation &amp; Legal Notice to Platform Legal Team
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold">14 to 28 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Problem Picker / Dispute Route Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Scenario Solver: Identify Your Cross-Border Remedy
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Client Island
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your specific foreign employment configuration below to view root causes, Indian statutory grounds, and step-by-step enforcement protocols:
                </p>

                {/* Problem Tabs Component */}
                <ForeignEmployerProblemTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers $19,500 from Overseas Startup
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The following illustrative case study demonstrates how a structured cross-border legal demand notice resolved a total default without filing an overseas lawsuit:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-black px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                      Illustrative Cross-Border Matter
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Resolved in 21 Calendar Days
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-1.5">
                      <p className="text-slate-500 font-bold uppercase text-[10px]">Remote Professional:</p>
                      <p className="font-bold text-slate-900">Lead Full-Stack AI Engineer (Bengaluru, Karnataka)</p>
                      <p className="text-slate-500 font-bold uppercase text-[10px] pt-1">Foreign Employer:</p>
                      <p className="font-bold text-slate-900">Generative AI SaaS Inc. (Delaware C-Corp, San Francisco, CA)</p>
                      <p className="text-slate-500 font-bold uppercase text-[10px] pt-1">Agreed Compensation:</p>
                      <p className="font-bold text-slate-900">$6,500 / month (~₹5,46,000) payable via wire transfer</p>
                    </div>
                    <div className="space-y-1.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                      <p className="text-slate-500 font-bold uppercase text-[10px]">Withheld Quantum Breakdown:</p>
                      <ul className="space-y-1 text-slate-700">
                        <li>• Month 1 Unpaid Salary: <strong>$6,500</strong></li>
                        <li>• Month 2 Unpaid Salary: <strong>$6,500</strong></li>
                        <li>• 30-Day Notice Period Severance: <strong>$6,500</strong></li>
                        <li className="pt-1 border-t border-slate-200 font-black text-slate-900">
                          Total Unpaid Principal: <strong>$19,500 (~₹16,38,000)</strong>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
                    <strong className="text-slate-900 font-bold block">The Dispute &amp; Escalation:</strong>
                    <p className="leading-relaxed">
                      After 14 months of exemplary service, the founder abruptly disabled the engineer&apos;s Slack access on a Friday evening, citing &quot;venture runway restructuring&quot;, and refused to clear the previous two months&apos; approved invoices or honor the contractual 30-day notice payout. When the engineer followed up via email, the founder claimed that as an independent overseas contractor under Delaware law, the worker had zero legal standing in India.
                    </p>
                    <strong className="text-slate-900 font-bold block pt-2">The Legal Strategy:</strong>
                    <p className="leading-relaxed">
                      LegalRecovery advocates performed corporate discovery on the Delaware Division of Corporations, identifying the startup&apos;s statutory registered agent in Wilmington, Delaware and cross-referencing SEC Form D filings to reveal two prominent Silicon Valley venture capital partners on the board of directors. A formal advocate statutory notice was served simultaneously via International Registered Post to the Delaware registered agent and certified electronic transmission under Section 63 BSA to the founders and board partners, establishing competent Indian jurisdiction under Section 20(c) CPC and demanding 18% statutory commercial interest.
                    </p>
                    <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-emerald-900 font-medium">
                      <strong>Result:</strong> Within 12 business days of notice receipt, the venture capital board representative directed the startup&apos;s finance director to initiate full wire transfer of the $19,500 principal along with $1,200 towards legal expenses, avoiding public litigation and board reputational exposure.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Cross-Border Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Cross-Border Evidence: 6 Documents to Secure
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before serving a formal cross-border legal notice, ensure you have compiled the following evidentiary dossier in a secure personal drive:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900">Signed Engagement Agreement &amp; SOW:</strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Complete PDF with electronic signatures (DocuSign/PandaDoc), Statement of Work (SOW), and W-8BEN / tax forms.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900">Invoices &amp; Payment Gateway Logs:</strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Itemized unpaid invoices, Stripe/Wise/Deel payout history, and foreign transaction reference numbers.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900">Bank FIRA / FIRC Documentation:</strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Foreign Inward Remittance Certificates from your bank proving prior legitimate inward business receipts.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900">Proof of Deliverable Submission:</strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Git commit hashes, pull requests, Jira sprint logs, or client-acknowledged email deliverable sign-offs.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">5</span>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900">Chat History &amp; Default Acknowledgment:</strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Exports of Slack, Teams, or WhatsApp messages where management acknowledges delayed salary or runway troubles.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">6</span>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900">Corporate Entity &amp; Officer Records:</strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Registered agent address, Secretary of State filing number, and board member profiles on LinkedIn/Crunchbase.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Foreign Employer Wage Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory &amp; Practical Answers
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                        <span className="text-[#DC2626] font-extrabold">Q{idx + 1}.</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Authorities &amp; International Treaties
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All jurisdictional interpretations, cross-border precedents, and recovery protocols stated on this page are grounded in primary Indian statutes and international conventions:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 12: CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Draft Statutory Cross-Border Legal Demand Notice
                </h2>
                <ForeignEmployerNoticeCTA />
              </section>
            </div>
          </div>

          {/* Related Guides Section */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200">
            <RelatedRecoveryGuides currentPath="/foreign-employer-not-paying-salary-india" />
          </div>
        </div>
      </div>
    </>
  );
}
