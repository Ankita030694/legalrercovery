import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CompanyDirectorsNoticeCTA from "./CompanyDirectorsNoticeCTA";
import CompanyDirectorsTableOfContents from "./CompanyDirectorsTableOfContents";
import CompanyDirectorsProblemTabs from "./CompanyDirectorsProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Company Cheque Bounce: Are Directors Liable (s.141)?",
  description:
    "Section 141 makes officers in charge liable for company cheque bounces. Who can be named, the company-as-party rule and notice tips.",
  alternates: {
    canonical: `${SITE_URL}/cheque-bounce-case-against-company-directors`,
  },
  openGraph: {
    title: "Company Cheque Bounce: Are Directors Liable (s.141)?",
    description:
      "Statutory guide on Section 141 NI Act vicarious liability: Aneeta Hada company arraignment mandate, Managing Director vs sleeping director liabilities, and notice procedure.",
    url: `${SITE_URL}/cheque-bounce-case-against-company-directors`,
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
    title: "Negotiable Instruments Act, 1881 — Section 138 (Dishonour of Cheque) & Section 141 (Offences by Companies)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Companies Act, 2013 — Section 149(12) (Liability of Non-Executive & Independent Directors) & Section 168 (Resignation of Directors)",
    url: "https://www.indiacode.nic.in/handle/123456789/2114",
  },
  {
    title: "Aneeta Hada v. Godfather Travels & Tours Pvt. Ltd. (2012) 5 SCC 661 — Supreme Court 3-Judge Bench on Company Arraignment Mandate",
    url: "https://main.sci.gov.in/judgment/judis/39294.pdf",
  },
  {
    title: "SMS Pharmaceuticals Ltd. v. Neeta Bhalla & Anr. (2005) 8 SCC 89 — Supreme Court 3-Judge Bench on Specific Averments Against Directors",
    url: "https://main.sci.gov.in/judgment/judis/27187.pdf",
  },
  {
    title: "S.P. Mani & Mohan Dairy v. Snehalatha Elangovan (2023) SCC OnLine SC 1238 — Supreme Court on Quashing Threshold for Accused Directors",
    url: "https://main.sci.gov.in/supremecourt/2022/28807/28807_2022_10_1502_44754_Judgement_16-May-2023.pdf",
  },
  {
    title: "Sunita Palita & Ors. v. Panchami Stone Quarry (2022) 10 SCC 152 — Supreme Court Protection for Non-Executive Independent Directors",
    url: "https://main.sci.gov.in/supremecourt/2022/19448/19448_2022_13_1502_37350_Judgement_01-Aug-2022.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of MCA Records & Digital Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Company Must Be Arraigned as Accused Party (The Indispensable Prerequisite)",
    parties: "Aneeta Hada v. Godfather Travels & Tours Pvt. Ltd.",
    citation: "Criminal Appeal No. 838 of 2008, (2012) 5 SCC 661 (3-Judge Bench)",
    date: "Judgment Dated 27 April 2012",
    facts:
      "A cheque issued on behalf of an authorized company was dishonoured for insufficient funds. The payee served a statutory notice and filed a criminal complaint under Section 138 of the Negotiable Instruments Act arraying only the authorized signatory and directors in their personal capacity, omitting the company itself from the memo of parties. The directors petitioned the High Court to quash the proceedings.",
    holding:
      "A three-judge bench of the Supreme Court held that the commission of the offence by the company is an express statutory condition precedent to attract vicarious liability under Section 141. For maintaining the prosecution against the director, arraigning the company as an accused party is imperative. Vicarious liability arises only when the principal offender (the company) is formally prosecuted alongside its officers in charge.",
    amount: "Doctrine of Strict Vicarious Liability (Company Arraignment Mandate)",
    takeaway:
      "Never file a Section 138 complaint solely against a Managing Director, CEO, or signatory without naming the corporate entity as Accused No. 1. Omitting the company renders the entire prosecution fatal and liable to immediate quashing under Section 528 BNSS / Section 482 CrPC.",
  },
  {
    title: "Managing Director & Signatory Liable; Other Directors Require Specific Averments",
    parties: "SMS Pharmaceuticals Ltd. v. Neeta Bhalla & Anr.",
    citation: "Criminal Appeal No. 885 of 2005, (2005) 8 SCC 89 (3-Judge Bench)",
    date: "Judgment Dated 20 September 2005",
    facts:
      "The complainant filed a Section 138 complaint naming multiple non-executive directors alongside the corporate drawer, making only a sweeping statement that all directors were responsible for company operations, without specifying their exact day-to-day administrative functions.",
    holding:
      "The Supreme Court settled three definitive legal propositions: (1) Mere holding of the office of director does not make a person vicariously liable under Section 141; (2) The complaint must contain clear, specific averments establishing that the director was in charge of, and responsible to the company for, the conduct of its business at the time the offence occurred; and (3) A Managing Director (MD), Joint MD, or the person who physically signed the dishonoured cheque leaf is deemed by statutory position to be in charge, requiring no detailed averments beyond their designation.",
    amount: "Specific Averment Standard Established Across All Indian Magisterial Courts",
    takeaway:
      "While Managing Directors and cheque signatories are presumed to be in charge of the business, implicating other directors requires concrete averments detailing how they participated in the transaction, debt creation, or commercial operations.",
  },
  {
    title: "Quashing Petitions Cannot Routinely Stifle Pre-Trial Trial Proceedings",
    parties: "S.P. Mani & Mohan Dairy v. Snehalatha Elangovan",
    citation: "Criminal Appeal No. 3438 of 2023, 2023 SCC OnLine SC 1238",
    date: "Judgment Dated 16 May 2023",
    facts:
      "The accused partner/director sought early quashing of a cheque bounce complaint before the High Court under Section 482 CrPC, contending that the averments attributing responsibility to her were generic. The High Court quashed the summons.",
    holding:
      "The Supreme Court reversed the High Court, holding that once a complainant makes a primary averment that an accused director was in charge of the day-to-day affairs of the company when the transaction occurred, the High Court cannot conduct a mini-trial at the threshold. Unless the accused produces unimpeachable public documentation (such as an MCA Form DIR-12 showing resignation well before cheque issuance), the question of whether a director was actually in charge is a triable defence that must be adjudicated during trial.",
    amount: "Protection of Creditors Against Frivolous Early Discharge Petitions",
    takeaway:
      "If your complaint includes specific factual averments tying the director to business operations, courts will not quash the complaint unless the director presents uncontroverted official government filings proving complete detachment.",
  },
  {
    title: "Non-Executive & Independent Directors Protected from Blanket Harassment",
    parties: "Sunita Palita & Ors. v. Panchami Stone Quarry",
    citation: "Criminal Appeal No. 1114 of 2022, (2022) 10 SCC 152",
    date: "Judgment Dated 01 August 2022",
    facts:
      "The complainant roped in non-executive and independent directors in a Section 138 prosecution for cheques issued by an operational manager. The non-executive directors had no executive powers and were based in different cities, as confirmed by Ministry of Corporate Affairs public disclosures.",
    holding:
      "The Supreme Court held that magistrates must exercise judicial caution before issuing process under Section 204. A non-executive director who does not participate in day-to-day management cannot be mechanically summoned to face criminal trial. Impleading independent directors without documentary evidence of their active connivance is an abuse of judicial process and must be quashed.",
    amount: "Statutory Shield Under Section 149(12) Companies Act Affirmed",
    takeaway:
      "Do not indiscriminately name every board member found on the MCA portal. Focus legal notices and criminal complaints on executive directors, MDs, whole-time directors, and the cheque signatory to ensure swift prosecution without quashing delays.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "You can file a cheque bounce case solely against the Managing Director who signed the cheque without naming the company.",
    fact: "Legally Fatal. Under the Supreme Court 3-Judge Bench in Aneeta Hada (2012), the company is the primary offender. If the corporate drawer is omitted from the memo of parties as Accused No. 1, the prosecution against all directors collapses immediately.",
    authority: "Section 141(1) NI Act; Aneeta Hada (2012) 5 SCC 661",
  },
  {
    myth: "Every director whose name appears on the MCA portal is automatically criminally liable for a company cheque bounce.",
    fact: "False. Under SMS Pharmaceuticals (2005) and Sunita Palita (2022), mere directorship does not create criminal liability. Complainants must specifically plead that the director was in charge of and responsible for the company's business at the time of the offence.",
    authority: "Section 141(1) NI Act; SMS Pharmaceuticals (2005) 8 SCC 89",
  },
  {
    myth: "A director who resigned before the cheque was issued can still be prosecuted if their resignation is disputed.",
    fact: "Incorrect. If a director resigned prior to the cheque issuance date and the resignation was recorded with the Registrar of Companies via MCA Form DIR-12, proceedings against them must be quashed based on unimpeachable public records.",
    authority: "Section 168 Companies Act 2013; S.P. Mani Dairy (2023) SC",
  },
  {
    myth: "The Managing Director and the signatory of the cheque can claim they were unaware of fund shortages and escape liability.",
    fact: "Untrue. The Supreme Court has repeatedly affirmed that Managing Directors, Joint Managing Directors, and authorised cheque signatories are statutorily presumed to be in charge of company affairs. No elaborate averments are required to prosecute them.",
    authority: "Section 141(2) NI Act; National Small Industries Corp. (2010)",
  },
  {
    myth: "Serving a Section 138 legal notice only to the company's registered office is always enough to convict individual directors.",
    fact: "High Risk. While serving the corporate registered office is service on the company, serving separate, individual statutory demand notices to each accused director at their MCA residential address eliminates claims of non-service under Section 138(b).",
    authority: "Section 138(b) NI Act; Kirshna Texport & Capital Markets (2015)",
  },
  {
    myth: "Directors are personally liable to pay the debt out of their personal property in a Section 138 criminal proceeding.",
    fact: "Nuanced. Section 138 is a quasi-criminal penal proceeding. Courts can sentence directors to imprisonment up to 2 years and levy fines up to twice the cheque amount. However, for civil recovery from personal assets, corporate veil-piercing must be established.",
    authority: "Section 138 & 143A NI Act; P. Mohanraj v. Shah Brothers (2021)",
  },
  {
    myth: "Non-executive and independent directors can be jailed just like executive directors.",
    fact: "Protected by Law. Section 149(12) of the Companies Act, 2013 specifically shields independent and non-executive directors from criminal liability unless an offence occurred with their express knowledge, consent, or demonstrable gross neglect.",
    authority: "Section 149(12) Companies Act 2013; Sunita Palita (2022)",
  },
];

const FAQS = [
  {
    question: "Can I file a cheque bounce case directly against company directors under Section 138?",
    answer:
      "Yes, but only if you array the company itself as Accused No. 1 in the complaint. Under Section 141 of the Negotiable Instruments Act and the Supreme Court 3-Judge Bench ruling in Aneeta Hada (2012), the company is the principal offender. Individual directors are prosecuted vicariously. A complaint filed only against directors without impleading the company is fatally defective and will be summarily quashed by the High Court under Section 528 BNSS / Section 482 CrPC.",
  },
  {
    question: "Which company directors can be held criminally liable under Section 141 NI Act?",
    answer:
      "Under Section 141, every person who at the time the offence was committed was in charge of, and was responsible to the company for the conduct of its business, is liable. In practice, the Managing Director, Joint Managing Director, Whole-Time Directors, and the authorized signatory who signed the cheque are directly liable by virtue of their position. Ordinary or sleeping directors can only be prosecuted if the complaint contains specific factual averments detailing their active day-to-day role in the debt or transaction.",
  },
  {
    question: "What specific averments must be pleaded in a Section 141 cheque bounce complaint?",
    answer:
      "The complaint must clearly state: (1) The exact status of the company (Private Limited, Public Limited, or LLP); (2) That Accused No. 1 is the company and individual accused are officers in charge; (3) That at the time of issuance and dishonour, the named directors were in charge of and actively responsible for the day-to-day business operations; (4) The specific role played by each director in negotiating the contract, placing orders, or issuing the cheque; and (5) That the cheque was issued to discharge a legally enforceable debt with their consent, connivance, or neglect.",
  },
  {
    question: "Can a director escape liability by showing that they resigned from the company?",
    answer:
      "A director can escape criminal liability only if their resignation took effect and was officially filed with the Registrar of Companies (ROC) via MCA Form DIR-12 (or Form 32) prior to the date the cheque was drawn or issued. If the resignation was executed after the cheque was issued, or if Form DIR-12 was filed belatedly after dishonour, the magistrate will not discharge the director at the threshold, and the director must prove their non-involvement during regular trial.",
  },
  {
    question: "Is an independent director or non-executive director liable for a company cheque bounce?",
    answer:
      "No, except in rare cases of proven direct conspiracy. Under Section 149(12) of the Companies Act, 2013, independent and non-executive directors are statutorily protected and can only be held liable for acts of omission or commission that occurred with their knowledge, consent, or connivance. In Sunita Palita v. Panchami Stone Quarry (2022), the Supreme Court ruled that summoning independent directors without specific proof of managerial control is an abuse of judicial process.",
  },
  {
    question: "How should a Section 138 statutory notice be served on a company and its directors?",
    answer:
      "Within 30 calendar days of receiving the bank dishonour memo, send a formal advocate statutory demand notice via Registered Speed Post with postal tracking. Address one notice to the Company Registered Office (as listed on the MCA portal) and separate individual notices to each director at their residential address (extracted via DIN records). In addition, transmit digital copies via official corporate email and WhatsApp with delivery audit reports, satisfying Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
  },
  {
    question: "Can interim compensation under Section 143A be ordered against company directors?",
    answer:
      "Yes. Under Section 143A of the Negotiable Instruments Act, the trial court has the discretionary authority to direct the accused drawer (the company) and prosecuted directors to deposit up to 20% of the bounced cheque amount as interim compensation within 60 days of framing charges. This statutory tool provides immediate financial relief to payees during the pendency of summary trial proceedings.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bounced Company Cheque: When Directors Can Be Prosecuted",
  description:
    "Section 141 makes officers in charge liable for company cheque bounces. Who can be named, the company-as-party rule and notice tips.",
  datePublished: "2026-11-04T10:00:00+05:30",
  dateModified: "2026-11-04T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/cheque-bounce-case-against-company-directors`,
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
    name: "Section 141 Negotiable Instruments Act Company Director Liability",
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
      name: "Cheque Bounce Laws",
      item: `${SITE_URL}/cheque-bounce-notice-timeline-section-138`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Company Director Liability (s.141)",
      item: `${SITE_URL}/cheque-bounce-case-against-company-directors`,
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

export default function CompanyDirectorsChequeBouncePage() {
  const breadcrumbItems = [
    { label: "Cheque Bounce Laws", href: "/cheque-bounce-notice-timeline-section-138" },
    { label: "Company Director Liability (s.141)", href: "/cheque-bounce-case-against-company-directors" },
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
        {/* Hero Section strictly matching site theme and irctc layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 138 &amp; 141 NI Act</span>
              <span className="text-red-500">•</span>
              <span>Supreme Court Company Arraignment Mandate</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Bounced Company Cheque: When Directors Can Be Prosecuted
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 141 NI Act &amp; Director Liability Rule)
              </p>
              <p>
                Under Section 141 of the Negotiable Instruments Act and the Supreme Court&apos;s landmark <em>Aneeta Hada</em> ruling, prosecuting directors for a bounced company cheque requires naming the company itself as Accused No. 1. Managing Directors and cheque signatories are statutorily presumed in charge of operations, while prosecuting other directors requires specific factual averments demonstrating their active management role.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Accused #1</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Company Arraignment Rule</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">MD &amp; Signer</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Presumed Vicariously Liable</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Up to 20%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Section 143A Interim Relief</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">2 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Max Jail Term + 2x Fine</p>
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
            <CompanyDirectorsTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview of Section 141 NI Act */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Section 141 NI Act: Corporate Cheque Bounce Liability
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In commercial commerce across India, corporate entities regularly issue cheques to settle vendor supplies, contractual retainers, service invoices, or credit facilities. When a company cheque bounces due to insufficient funds, stopped payment, or frozen accounts, creditors encounter a distinct legal challenge: a company is an artificial legal person that cannot be physically arrested or imprisoned.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To prevent corporate fraudsters from hiding behind the veil of incorporation, Parliament enacted <strong>Section 141 of the Negotiable Instruments Act, 1881</strong>. This statutory provision introduces criminal vicarious liability, stipulating that whenever an offence under Section 138 is committed by a company, every person who at the time the offence was committed was in charge of, and was responsible to the company for the conduct of the business of the company, as well as the company itself, is deemed guilty of the offence.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, prosecuting corporate officers requires surgical legal precision. Unlike individual cheque dishonour cases where the drawer is singular and obvious, corporate cheque prosecutions are governed by strict Supreme Court benchmarks regarding mandatory party array, statutory demand service, and factual averment standards. A single procedural lapse can lead to the complaint being quashed under Section 528 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 482 CrPC).
                </p>
              </section>

              {/* Section 2: Archetype G5 Core - Myth vs Fact Comparison Grid */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs Fact: 7 Misconceptions in Company Cheque Cases
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Reality vs SERP Myths
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Creditors frequently rely on generic online advice or well-meaning business associates, leading to flawed complaints that are dismantled by corporate defence lawyers during initial summoning. Here is the verified statutory reality:
                </p>

                <div className="grid grid-cols-1 gap-4" role="table" aria-label="Myth vs Fact Section 141 Analysis">
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
                          <div className="p-3.5 bg-red-50/70 border border-red-200/70 rounded-xl">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 block mb-1">
                              ✕ Common Myth &amp; Ser Misbelief:
                            </span>
                            <p className="text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                              {item.myth}
                            </p>
                          </div>

                          <div className="p-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
                              ✓ Statutory Legal Fact:
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
                    Landmark Supreme Court Precedents on Section 141 Director Liability
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
                            <span className="text-sm sm:text-base font-black text-slate-900">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Judicial Precedent Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All High Courts &amp; Magisterial Benches
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

              {/* Section 4: Director Liability & Corporate Role Matrix */}
              <section id="heading-liability-matrix" aria-labelledby="heading-liability-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-liability-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Corporate Hierarchy Liability Matrix: Who Can and Cannot Be Named
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before serving your statutory demand notice, audit the company&apos;s board composition on the Ministry of Corporate Affairs (MCA) portal. Understanding the distinction between executive management and non-executive oversight is vital:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Section 141 Corporate Officer Liability Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Corporate Officer / Designation</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Liability Under Section 141</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Averment Threshold Required</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Judicial Benchmark</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Managing Director (MD) / Joint MD
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-extrabold">Strictly Liable</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Presumed in charge by statutory office; minimal averments needed</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">SMS Pharma (2005) 8 SCC 89</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Cheque Signatory (Authorised Officer)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-extrabold">Strictly Liable</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Direct act of drawing cheque; prima facie liable regardless of designation</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">KK Ahuja v. VK Vora (2009) 10 SCC 48</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Whole-Time Executive Director
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Conditionally Liable</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Requires specific averments showing day-to-day administrative supervision</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">S.P. Mani &amp; Mohan Dairy (2023) SC</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Ordinary Non-Executive Director
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600 font-semibold">Not Routinely Liable</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Must prove direct consent, connivance, or active negotiation of debt</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Pooja Ravinder Devidasani (2014)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Independent &amp; Nominee Director
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Statutorily Exempt</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Exempt under Section 149(12) Companies Act unless express fraud proved</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Sunita Palita (2022) 10 SCC 152</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Company Secretary (CS) / CFO
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Officer with Neglect</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Only liable under s.141(2) if specific connivance or signature is proved</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Section 141(2) NI Act</td>
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
                  Statutory Resolution Flow: From Dishonour Memo to Director Prosecution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Navigating corporate cheque dishonour requires rigorous adherence to statutory timelines and procedural checkpoints:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Dishonour Memo Receipt</h3>
                    <p className="text-xs text-slate-200 mt-1">Receive bank return memo stating insufficient funds, stop payment, etc.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">MCA Director Audit</h3>
                    <p className="text-xs text-amber-900 mt-1">Extract company CIN, DIN records, and verify active directors vs resigned.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Section 138/141 Notice</h3>
                    <p className="text-xs text-slate-700 mt-1">Dispatch dual notice via Speed Post + Email/WhatsApp within 30 days.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">15-Day Statutory Cure Period</h3>
                    <p className="text-xs text-red-900 mt-1">Wait 15 calendar days for company or directors to clear full cheque amount.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">File Section 142 Complaint</h3>
                    <p className="text-xs text-emerald-900 mt-1">File complaint within 30 days of cause of action naming Company + MD + Signer.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram with Smooth Horizontal Scroll */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Section 141 Company Cheque Bounce Prosecution Flowchart"
                  >
                    <defs>
                      <linearGradient id="corpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="corpAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="corpSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#corpGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Dishonour Memo</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Bank Return Slip</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">30-Day Notice Clock Starts</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">MCA &amp; DIN Audit</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Verify Active Directors</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Check Signatory &amp; DIR-12</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Demand Notice</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">To Company + Officers</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Speed Post + BSA 63 Mail</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#corpAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">15-Day Cure Period</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Statutory Grace Window</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Cause of Action on Day 16</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#corpSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Court Complaint</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Co. (A1) + MD + Signatory</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">20% Sec 143A Interim Relief</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY DEADLINES UNDER SECTION 138 &amp; 142 NI ACT:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Legal Notice Dispatch: Strictly within 30 calendar days from receipt of the bank return memo</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Statutory Cure Window: Exactly 15 calendar days from delivery date before cause of action arises</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Section 142 Filing Limit: Exactly 1 calendar month from the 16th day following notice delivery</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Action Playbook to Prosecute Company Directors Successfully
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow this structured pre-litigation protocol designed to survive aggressive Section 482 CrPC / Section 528 BNSS quashing challenges and lock in director liability:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Preserve Original Cheque Leaf and Official Bank Return Memo
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Collect the original dishonoured cheque and the bank return slip specifying reason codes such as &quot;Funds Insufficient&quot;, &quot;Account Closed&quot;, or &quot;Payment Stopped by Drawer&quot;. Note the exact date of receipt: under Section 138(b), your non-extendable 30-day statutory notice clock begins on the date you receive this return memo. If the return reason is stop payment, check our analysis on{" "}
                        <Link href="/stop-payment-cheque-bounce-case" className="text-blue-700 underline font-semibold">
                          stop payment cheque bounce liability
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
                        Conduct MCA Portal Due Diligence &amp; Identify Officers in Charge
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Search the Ministry of Corporate Affairs (mca.gov.in) portal with the corporate drawer&apos;s Corporate Identification Number (CIN). Download the public Company Master Data and Signatory Details. Identify: (1) The Managing Director and Whole-Time Directors; (2) The specific individual who signed the cheque leaf; and (3) Verify whether any claimed resignation is backed by an MCA Form DIR-12 filed before the cheque issuance date.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve Dual Statutory Demand Notice via Speed Post &amp; Electronic Channels
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage a verified advocate to draft a composite Section 138 and Section 141 statutory demand notice. Dispatch the notice via Registered Speed Post with postal tracking to the Company Registered Office AND to each individual director&apos;s residential address. Simultaneously transmit digital copies via corporate email and WhatsApp, backed by an evidentiary certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Review transparent drafting fees on our{" "}
                        <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">
                          legal notice charges
                        </Link>{" "}
                        page, or see ready Hindi templates at{" "}
                        <Link href="/templates/cheque-bounce-notice-format-hindi" className="text-blue-700 underline font-semibold">
                          cheque bounce notice format Hindi
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Monitor the 15-Day Cure Window &amp; Calculate Cause of Action
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Under Section 138(c), the corporate drawer and its directors have exactly 15 calendar days from the date of notice delivery to pay the full demanded amount. Do not file the complaint prematurely: filing before the expiration of the 15th day renders the complaint premature and non-maintainable. The statutory cause of action arises on the 16th calendar day. Calculate your exact deadlines using our{" "}
                        <Link href="/tools/cheque-bounce-deadline-calculator" className="text-blue-700 underline font-semibold">
                          cheque bounce deadline calculator
                        </Link>{" "}
                        or consult our{" "}
                        <Link href="/cheque-bounce-notice-timeline-section-138" className="text-blue-700 underline font-semibold">
                          cheque bounce notice timeline guide
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Criminal Complaint Under Section 142 with Section 143A Application
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Within 30 calendar days from the date cause of action arises, file a formal criminal complaint under Section 142 before the Judicial Magistrate of First Class (JMFC) or Metropolitan Magistrate having territorial jurisdiction where your payee bank branch is located (Section 142(2)). Array the company as Accused No. 1, followed by the MD and signatories. File an interim application under Section 143A seeking a mandatory order directing the accused to deposit 20% interim compensation.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Fact Table of Statutory Deadlines & Benchmarks */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Deadlines in Company Cheque Bounce Prosecutions
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every stage of Section 138 and 141 proceedings operates under non-negotiable statutory timelines. Courts will dismiss delayed actions unless exceptional condonation is proved under Section 142(1)(b):
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Section 138 and 141 Statutory Deadlines Table</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Procedural Milestone</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Provision</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Consequence of Non-Compliance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Dispatch of Statutory Demand Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 30 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 138(b) NI Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Forfeiture of criminal prosecution remedy</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Cure Window for Payment
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 138(c) NI Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Early filing deemed premature and dismissed</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Filing Criminal Complaint in Court
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">1 Month from Cause of Action</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 142(1)(b) NI Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Requires formal condonation application</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Interim Compensation Order Deposit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">60 Days (Extendable by 30)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 143A(3) NI Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Recovery enforceable as a land revenue fine</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Territorial Jurisdiction of Court
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Payee Bank Branch Location</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 142(2)(a) NI Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Return of complaint for proper presentation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  For a detailed walkthrough on counting days in Hindi, see our guide on{" "}
                  <Link href="/hi/cheque-bounce-notice-kitne-din-mein" className="text-blue-700 underline font-medium">
                    cheque bounce notice kitne din mein dena chahiye
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
                    Common Section 141 Defence Bottlenecks &amp; Tactical Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock the Statutory Precedent and Judicial Solution
                  </p>
                </div>

                <CompanyDirectorsProblemTabs />
              </section>

              {/* Section 9: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹24.5L from Bounced Company Cheque
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Commercial Case Study
                    </span>
                    <span className="text-xs text-slate-400">Gurugram Industrial Hub (Industrial Raw Materials)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Commercial Transaction:</strong> Vihan Polymers LLP supplied industrial polymer pellets worth ₹24,50,000 to Zenora Logistics &amp; Manufacturing Private Limited. Against certified delivery invoices, Zenora issued a corporate cheque dated 12 October drawn on HDFC Bank, signed by its Whole-Time Director and authorised signatory. Upon presentation at the payee&apos;s ICICI Bank branch in Gurugram, the cheque was returned dishonoured with the memo &quot;Exceeds Arrangement / Insufficient Funds&quot;.
                    </p>
                    <p>
                      <strong>The Defence Strategy:</strong> When informal reminders yielded empty promises, the Managing Director claimed that the company was facing working capital stress and that individual directors could not be held personally liable for corporate debts under the Companies Act. Zenora further claimed that its non-executive board had not approved the cheque.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Vihan Polymers engaged LegalRecovery.in. An advocate conducted an immediate MCA portal audit, obtaining certified master data and DIR-12 filings. Within 18 days of the return memo, a statutory demand notice was dispatched via Registered Speed Post to: (1) Zenora Logistics Pvt. Ltd. at its registered office; (2) The Managing Director at his residential address; and (3) The authorised Whole-Time Director who signed the cheque. Notices were simultaneously transmitted via email and WhatsApp with delivery certificates under Section 63 BSA 2023.
                    </p>
                    <p>
                      <strong>The Court Trial &amp; Section 143A Pressure:</strong> When the 15-day cure window expired with zero payment, a Section 142 complaint was filed before the JMFC Gurugram, arraying Zenora as Accused No. 1, the MD as Accused No. 2, and the signatory as Accused No. 3. Complainant inserted specific averments detailing how both directors negotiated the credit terms. The court issued summons and allowed an application under Section 143A, directing the accused to deposit 20% interim compensation (₹4,90,000) within 60 days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Confronted with imminent Section 143A recovery and the prospect of non-bailable warrants against the MD personally, Zenora approached the court for compounding under Section 147 NI Act. The company cleared the principal debt of ₹24,50,000 alongside ₹1,50,000 as agreed litigation costs, resulting in complete financial recovery without protracted multi-year litigation.
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
                  Evidence Checklist: 6 Documents to Prosecute Directors
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic and physical documentation must be rigorously maintained to withstand quashing petitions:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Bounced Cheque Leaf:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing corporate drawer rubber stamp, company bank account details, and signature.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Bank Dishonour Return Memo:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Stamped by the collecting bank showing exact return date, reason code, and CTS transaction ID.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">MCA Company Master Data &amp; DIR-12 Extracts:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified printouts from mca.gov.in verifying active directorships, DIN numbers, and residential addresses.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 138/141 Statutory Notice Copy:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Advocate demand notice addressed to Company + Officers in Charge specifying 15-day cure demand.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Speed Post Postal Receipts &amp; Tracking PODs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Consignment receipts and India Post online delivery confirmation reports confirming physical delivery.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Underlying Invoices, Contracts &amp; Ledger Statements:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Purchase orders, delivery challans, and acknowledged ledger balances proving legally enforceable debt.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Section 141 Director Liability &amp; Cheques
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Legal Guidance Grounded in Supreme Court Rulings and the Negotiable Instruments Act
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

              {/* Section 12: Primary Sources Block */}
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
                  Statutory verification status: All provisions verified against active India Code statutes, Supreme Court reported judgments, and MCA corporate filing rules as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Section 138/141 Statutory Notice to Company &amp; Directors
                </h2>
                <CompanyDirectorsNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Cheque Bounce &amp; Debt Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Timeline &amp; Section 138 Deadlines →
                  </Link>
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Deadline Calculator →
                  </Link>
                  <Link
                    href="/stop-payment-cheque-bounce-case"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Stop Payment Cheque Bounce Case →
                  </Link>
                  <Link
                    href="/law/cheque-bounce-supreme-court-guidelines-2025"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Supreme Court 2025/2026 Guidelines (Sanjabij Tari) →
                  </Link>
                  <Link
                    href="/templates/cheque-bounce-notice-format-hindi"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Notice Format in Hindi →
                  </Link>
                  <Link
                    href="/hi/cheque-bounce-notice-kitne-din-mein"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    चेक बाउंस नोटिस कितने दिन में भेजें →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Schedule →
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
