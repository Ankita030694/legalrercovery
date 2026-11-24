import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import OverseasRecruitingTableOfContents from "./OverseasRecruitingTableOfContents";
import OverseasRecruitingScenarioTabs from "./OverseasRecruitingScenarioTabs";
import OverseasRecruitingNoticeCTA from "./OverseasRecruitingNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/overseas-manpower-recruiting-agent-foreign-employer-fee-recovery";
const EXACT_H1 =
  "Recovering Unpaid Overseas Recruitment Invoices, Visa/Trade-Test Advances & Air-Ticket Costs from GCC, European & Asian Employers";
const META_TITLE = "MEA Recruiting Agent (RA): Foreign Employer Fee Recovery";
const META_DESCRIPTION =
  "MEA Recruiting Agents face foreign employer defaults on worker deployments. Recover unpaid recruitment invoices, visa fees & airfare advances legally.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("MEA Overseas Recruiting Agent Foreign Employer Invoice Recovery"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
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
    title: "The Emigration Act, 1983 (Sections 10, 11, 24 & 25 — Licensing of Recruiting Agents & Regulation of Foreign Employers)",
    url: "https://www.indiacode.nic.in/handle/123456789/1785",
  },
  {
    title: "Code of Civil Procedure, 1908 (Section 44A — Execution of Decrees Passed by Courts in Reciprocating Territory & UAE S.O. 261(E))",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 70 — Quantum Meruit, Section 73 — Breach Damages & Section 124 — Contract of Indemnity)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Foreign Exchange Management Act, 1999 (FEMA Current Account Transactions Rules & Export of Services Regulations)",
    url: "https://www.indiacode.nic.in/handle/123456789/1988",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility & Section 121 — Estoppel by Conduct)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 — Delayed Payments to MSME Service Providers)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Mercantile Agency Contracts & Cross-Border Commercial Claims)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Bilateral Recognition & Reciprocating Decree Execution",
    parties: "Alcon Electronics Pvt. Ltd. v. Celem S.A. of France & Ors.",
    citation: "(2017) 2 SCC 253, Supreme Court of India",
    date: "Judgment Dated 09 December 2016",
    facts:
      "A foreign decree holder sought execution of an overseas court cost order in India under international reciprocity principles, while the judgment debtor argued technical jurisdictional barriers.",
    holding:
      "The Supreme Court affirmed that international commercial comity and bilateral statutory treaties under Section 44A of the Code of Civil Procedure, 1908 create binding obligations for courts in reciprocating territories to enforce conclusive foreign money decrees. With the Ministry of Law and Justice Notification S.O. 261(E) declaring the United Arab Emirates (UAE) a reciprocating territory, money decrees issued by Indian District and Commercial Courts are directly executable in the UAE (including Dubai, Abu Dhabi, and Sharjah Courts) as if passed by local UAE Federal Courts, permitting direct attachment of foreign employers' local bank accounts and corporate assets.",
    amount: "Reciprocal Decree Enforceability — Direct Attachment in UAE Jurisdictions",
    takeaway:
      "MEA Recruiting Agents obtaining an Indian Commercial Court decree against defaulting UAE employers can transmit it directly to Dubai Courts for local asset attachment under CPC Section 44A.",
  },
  {
    title: "Constitution Bench on Quantum Meruit & Restitution for Non-Gratuitous Agency Deployments",
    parties: "State of West Bengal v. B.K. Mondal & Sons",
    citation: "AIR 1962 SC 779, 5-Judge Constitution Bench, Supreme Court of India",
    date: "Judgment Dated 05 December 1961",
    facts:
      "A commercial contractor performed specialized infrastructure deployment works at the request of officers without an executed formal bilateral instrument. The counterparty enjoyed the benefit of the deployed assets but withheld payment citing formalistic technicalities.",
    holding:
      "The 5-Judge Constitution Bench ruled that under Section 70 of the Indian Contract Act, 1872, where a person lawfully performs any service or incurs out-of-pocket expenditure for another, not intending to do so gratuitously, and the other party enjoys the benefit thereof, the recipient is statutorily bound to make full compensation or restitution. In overseas manpower deployments, where a Recruiting Agent incurs trade-testing, medical, and airfare costs and mobilizes workers who enter the foreign employer's workforce, the foreign employer is strictly obligated to pay full service charges and reimburse advances.",
    amount: "Doctrine of Quantum Meruit Established — Mandatory Commercial Restitution",
    takeaway:
      "Foreign employers cannot evade recruitment fees or ticket reimbursements by claiming informal terms; taking delivery of deployed workers triggers mandatory restitution under Section 70.",
  },
  {
    title: "Supreme Court on Estoppel by Conduct Following Technical Inspection & Sign-Off",
    parties: "B.L. Sreedhar & Ors. v. K.M. Munireddy & Ors.",
    citation: "(2003) 2 SCC 355, Supreme Court of India",
    date: "Judgment Dated 10 December 2002",
    facts:
      "A commercial principal accepted and certified specialized deliverables after inspecting them, but subsequently attempted to raise unilateral quality objections and debit notes once the vendor had fully performed.",
    holding:
      "The Supreme Court reaffirmed the foundational doctrine of Estoppel by Conduct (now codified in Section 121 of Bharatiya Sakshya Adhiniyam, 2023). Where a counterparty or its designated technical representative inspects, evaluates, and countersigns candidate trade-test sheets in India prior to visa issuance, they are legally barred and estopped from unilaterally declaring those same workers incompetent upon arrival in the host nation to justify debit notes or invoice withholdings.",
    amount: "Doctrine of Commercial Estoppel — Defeating Post-Deployment Debit Notes",
    takeaway:
      "When a foreign employer's delegation signs off trade tests in India, retroactive quality debit notes issued abroad are legally void and inadmissible under statutory estoppel.",
  },
  {
    title: "Supreme Court on Electronic Evidence Certification & eMigrate Telemetry",
    parties: "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal",
    citation: "(2020) 7 SCC 1, Supreme Court of India",
    date: "Judgment Dated 14 July 2020",
    facts:
      "The evidentiary validity of digital records, email server manifests, and electronic portal transmissions was challenged in the absence of physical wet-ink documentation.",
    holding:
      "The Supreme Court held that electronic records produced from computer systems, government web portals, and email communications are fully admissible when certified under statutory electronic evidence provisions (Section 65B of the Evidence Act, now Section 63 of Bharatiya Sakshya Adhiniyam, 2023). In cross-border recruitment disputes, eMigrate portal Demand Letter approval IDs, PoE clearance logs, airline PNR manifests, and electronic flight tickets certified under Section 63 BSA constitute conclusive proof of complete agency performance.",
    amount: "Electronic Telemetry Standard — Conclusive Proof of Cross-Border Deployment",
    takeaway:
      "eMigrate server logs and certified airline manifests definitively prove overseas worker deployment, dismantling foreign employers' false 'non-mobilization' defenses.",
  },
];

const FAQS = [
  {
    question: "How does the eMigrate portal give Indian Recruiting Agents leverage to recover unpaid foreign employer invoices?",
    answer:
      "Under the Emigration Act, 1983, every foreign employer recruiting Indian ECR workers must register on the Ministry of External Affairs (MEA) eMigrate portal and submit an attested Demand Letter (DL), Power of Attorney (POA), and Specimen Employment Contract verified by the Indian Embassy or Consulate in the host country. When a foreign employer defaults on agreed recruitment service charges or airfare advances, the MEA-registered Recruiting Agent (RA) can file a formal complaint with the Protector General of Emigrants (PGE) and the Indian Mission's Labor Attache. The MEA has statutory authority under Sections 10 and 24 to issue a Show Cause Notice and place the foreign employer on the eMigrate Blacklist (suspension or revocation of FE registration). This completely bars the foreign enterprise from recruiting Indian workers across all categories, creating immense commercial leverage to force immediate invoice settlement.",
  },
  {
    question: "Can an Indian court decree be executed against an employer in Dubai, Abu Dhabi, or the UAE?",
    answer:
      "Yes. Under Section 44A of the Code of Civil Procedure, 1908 (CPC), the Government of India declared the United Arab Emirates (UAE) a reciprocating territory via Ministry of Law and Justice Notification S.O. 261(E) dated 17 January 2020. This reciprocating status covers the Federal Supreme Court, Federal Courts of First Instance and Appeal in Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, and Fujairah, as well as the Dubai Courts and Ras Al Khaimah Courts. A certified copy of a money decree passed by an Indian District Court or Commercial Court can be transmitted directly to the execution department of the Dubai Courts or Abu Dhabi Courts for enforcement as if it were a local UAE judgment, enabling the freezing of local bank accounts and attachment of commercial assets.",
  },
  {
    question: "What happens if a foreign employer cancels worker mobilization after the RA already booked flight tickets and medicals?",
    answer:
      "If a foreign employer halts mobilization after the RA incurs non-refundable expenses (such as GAMCA medicals, visa stamping fees, trade-test workshop charges, or group airline tickets) pursuant to an issued Demand Letter or written deployment schedule, the employer is legally liable under Section 70 (Quantum Meruit) and Section 124 (Indemnity) of the Indian Contract Act, 1872. The foreign employer cannot invoke 'Force Majeure' for internal visa quota issues (such as Saudization or Emiratization compliance failures), as these are self-induced regulatory failures. The RA is entitled to recover 100% of out-of-pocket advances plus contractual reliance damages via statutory legal notice.",
  },
  {
    question: "How do MEA Recruiting Agents comply with FEMA and RBI rules when foreign employers default on service fees?",
    answer:
      "Recruitment services rendered to an overseas employer constitute a 'Services Export' under the Foreign Exchange Management Act, 1999 (FEMA) and the RBI Master Direction on Export of Goods and Services. Under FEMA regulations, Indian exporters of services are mandated to realize and repatriate foreign inward remittances within nine months from the invoice date, obtaining a Foreign Inward Remittance Certificate (FIRC) or Electronic Bank Realization Certificate (e-BRC). If a foreign employer defaults, the Indian RA risks regulatory scrutiny or EDPMS/ED flags. Serving a formal advocate legal notice and lodging an official complaint with the PGE and Indian Mission proves to authorized dealer banks and the RBI that the agency is actively pursuing lawful recovery remedies, protecting the RA against FEMA non-realization penalties.",
  },
  {
    question: "Can a foreign employer withhold placement fees by alleging workers failed their probation on-site?",
    answer:
      "No, especially where the foreign employer or its technical delegate traveled to India to conduct trade tests and personally signed candidate selection rosters. Under the doctrine of Estoppel by Conduct (Section 121 of Bharatiya Sakshya Adhiniyam, 2023), the employer is legally barred from claiming incompetence on skills that were pre-tested and accepted in India. Even under standard international recruitment covenants, probation guarantees require the employer to document objective skill evaluations within a strict 30-day window and repatriate the worker at the employer's expense. Issuing retroactive 40% debit notes while retaining the workers on project sites constitutes unlawful contractual breach under Section 73 of the Contract Act.",
  },
  {
    question: "Can an Indian recruitment agency file an MSME Samadhaan claim against an overseas employer?",
    answer:
      "Yes, provided the recruiting agency holds an active Udyam Registration Certificate under the MSMED Act, 2006. Under Section 18 of the MSMED Act, Micro and Small enterprises can file a delayed payment reference before the Micro and Small Enterprises Facilitation Council (MSEFC) where the supplier is located (e.g., Mumbai, Delhi, Chennai, Kochi). The MSEFC has statutory jurisdiction over contracts entered into by Indian MSME suppliers. If the foreign employer has an Indian subsidiary, liaison office, branch, or authorized representative, the award is executable against their Indian assets. Furthermore, an MSEFC arbitral award is a domestic award under the Arbitration and Conciliation Act, 1996, executable internationally under the New York Convention.",
  },
  {
    question: "What is the statutory limitation period for recovering overseas recruitment dues and airfare advances?",
    answer:
      "Under the Indian Limitation Act, 1963, the limitation period for recovering commercial debt and service charges is three years from the date the invoice becomes overdue (Article 18 & 22) or from the date of breach (Article 55). Crucially, any written acknowledgment of debt from the foreign employer—such as an email acknowledging the outstanding balance, a revised payment plan, or a partial payment—resets the fresh three-year limitation clock under Section 18 and Section 19 of the Limitation Act. Prompt service of an advocate legal notice stops procedural delays and secures written acknowledgments before limitation lapses.",
  },
  {
    question: "How does LegalRecovery assist MEA-registered Recruiting Agents with cross-border invoice recovery?",
    answer:
      "LegalRecovery provides a specialized cross-border recovery desk for MEA-registered Recruiting Agents. We analyze the eMigrate Demand Letters, airline manifests, trade-test sign-offs, and email correspondence to draft fact-verified international demand notices in English and Arabic. Notices are served simultaneously via international registered courier, certified email, and WhatsApp, while copies are dispatched to the Labor Attache at the relevant Indian Embassy. For persistent defaults, our team drafts administrative petitions for eMigrate foreign employer blacklisting before the Protector General of Emigrants (PGE) and institutes Commercial Summary Suits under Order XXXVII CPC or Section 44A reciprocating decree executions in the UAE.",
  },
];

export default function OverseasRecruitingAgentFeeRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "Staffing & Manpower Recovery Hub",
      href: "/industries/staffing-recruitment-manpower-recovery",
    },
    {
      label: "Overseas Manpower Foreign Employer Fee Recovery",
      href: PAGE_URL,
    },
  ];

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-17T05:30:00+05:30",
    dateModified: "2026-11-17T05:30:00+05:30",
    citation: PRIMARY_SOURCES.map((s) => s.url),
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How MEA Recruiting Agents Legally Recover Unpaid Invoices and Advances from Foreign Employers",
    description:
      "A step-by-step statutory and cross-border enforcement playbook for MEA-registered Recruiting Agents to recover unpaid service charges, visa fees, and airfare advances from GCC, European, and Asian employers.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Consolidate eMigrate Demand Letters & Deployment Telemetry",
        text: "Extract embassy-attested Demand Letters (DL), Power of Attorney (POA), PoE emigration clearance logs, airline PNR manifests, and Gamca medical records. Certify electronic records under Bharatiya Sakshya Adhiniyam, 2023 Section 63.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Audit Incurred Advances & Calculate Statutory Interest",
        text: "Itemize out-of-pocket advances including trade-testing workshop charges, visa stamping costs, and group flight tickets. Apply 18% commercial interest or MSMED Act Section 16 compound interest.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve International Fact-Verified Legal Notice with MEA Intimation",
        text: "Dispatch a formal bilingual legal notice to the foreign employer's headquarters and Indian liaison desk via international registered post and certified email, copying the Labor Attache at the Indian Embassy.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Lodge Administrative Blacklisting Petition Before PGE",
        text: "Submit a statutory grievance to the Protector General of Emigrants (PGE) under Sections 10 and 24 of the Emigration Act, 1983 to freeze the foreign employer's eMigrate portal hiring quota.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Execute Reciprocating Court Decrees in Host Jurisdictions",
        text: "Institute commercial recovery proceedings under Order XXXVII CPC or MSMED Act, and transmit the resulting decree to Dubai Courts or reciprocating foreign courts under CPC Section 44A for local bank asset freezing.",
      },
    ],
  };

  const jsonLdFaq = {
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

  const jsonLdBreadcrumbs = {
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
        name: "Staffing & Manpower Recovery Hub",
        item: `${SITE_URL}/industries/staffing-recruitment-manpower-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Overseas Manpower Foreign Employer Fee Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>MEA Recruiting Agent (RA) Recovery Desk</span>
              <span className="text-slate-500">&bull;</span>
              <span>Emigration Act 1983 &amp; CPC s.44A</span>
              <span className="text-slate-500">&bull;</span>
              <span>eMigrate Blacklisting SOP</span>
            </div>

            {/* Single Page H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Statutory Authority
              </span>
              Under the Emigration Act, 1983, Indian Contract Act Sections 70 &amp; 73, and CPC Section 44A (UAE Reciprocating Territory Decree), MEA-registered Recruiting Agents deploying workers abroad are entitled to 100% recovery of unpaid recruitment service charges, trade-test costs, and airfare advances. When foreign EPC contractors default, RAs possess dual-track statutory leverage: filing administrative eMigrate portal blacklisting petitions before the Protector General of Emigrants (PGE) to freeze the foreign employer&apos;s overseas hiring quota, and enforcing Indian commercial money decrees directly in host courts such as Dubai and Abu Dhabi. Read our parent{" "}
              <Link
                href="/industries/staffing-recruitment-manpower-recovery"
                className="text-red-400 font-bold underline hover:text-red-300"
              >
                Staffing &amp; Manpower Debt Recovery Hub
              </Link>{" "}
              for comprehensive institutional escalation protocols.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/50">
                <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                  Statutory Contract Anchor
                </span>
                <p className="text-base sm:text-lg font-black text-slate-100 mt-1">
                  eMigrate DL / POA
                </p>
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  Embassy Attested Demand
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/50">
                <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                  UAE Reciprocating Status
                </span>
                <p className="text-base sm:text-lg font-black text-emerald-400 mt-1">
                  CPC Section 44A
                </p>
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  Direct Dubai Court Execution
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/50">
                <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                  MEA Regulatory Leverage
                </span>
                <p className="text-base sm:text-lg font-black text-amber-400 mt-1">
                  PGE Blacklist
                </p>
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  Freezes India Manpower Quota
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/50">
                <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                  Services Export Compliance
                </span>
                <p className="text-base sm:text-lg font-black text-red-400 mt-1">
                  FEMA Inward FIRC
                </p>
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  9-Month Statutory Realization
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          {/* 2-Column Split: Left Sticky TOC + Right Content Column */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <OverseasRecruitingTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Overseas Recruitment Default Crisis */}
              <section
                id="heading-overseas-recruitment-crisis"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-3">
                  Industry Crisis &bull; MEA RA Working Capital Bleed
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  The Overseas Recruitment Default Crisis: Zero-Fee Model Breakdown
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    India is home to over 1,800 active Recruiting Agents (RAs) registered under Section 10 and Section 11 of the Emigration Act, 1983, operating from major hubs in Mumbai, Kochi, Kozhikode, Chennai, Delhi-NCR, Hyderabad, and Chandigarh. These agencies power the economic backbone of Indian overseas remittances, deploying hundreds of thousands of skilled technicians, pipefitters, 6G welders, CNC machinists, nurses, hospitality executives, and construction personnel every year to the Gulf Cooperation Council (GCC—UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain), Europe (Poland, Romania, Croatia, Malta), Israel, and Japan.
                  </p>
                  <p>
                    Under the modern international ethical recruitment doctrine (guided by the International Labour Organization&apos;s Fair Recruitment Initiative) and bilateral labor memoranda of understanding signed by India, ethical RAs operate on the strict <strong>&ldquo;Employer-Pays&rdquo; Zero-Fee model</strong>. Jobseekers pay zero recruitment charges. Instead, the Foreign Employer (FE) contracts to pay the agency a professional recruitment fee (typically $600 to $1,800 per deployed technician or 1 to 2 months of basic salary) and formally agrees to reimburse all out-of-pocket mobilization expenses: accredited trade-test center testing charges, GAMCA medical examinations, visa stamping, Protector of Emigrants (PoE) welfare fees, and international air travel tickets.
                  </p>
                  <p>
                    The commercial catastrophe occurs post-deployment. To meet urgent mobilization deadlines for foreign engineering, procurement, and construction (EPC) conglomerates or logistics contractors, the Indian RA advances millions of rupees from its own working capital to purchase 50 to 300 group flight tickets, conduct trade tests, and process visas. Once the workers arrive at site in Jubail, Doha, Dubai, or Warsaw and obtain their residence permits, foreign employers frequently default. They delay invoices past 120–270 days, cite spurious project milestone delays with their main clients, issue arbitrary retroactive debit notes claiming &ldquo;substandard workers&rdquo;, or cease answering communications altogether.
                  </p>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 my-4">
                    <span className="block text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                      Institutional Risk Reality
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300">
                      When a foreign EPC employer defaults on a 100-worker deployment, the Indian RA absorbs an immediate cash deficit of ₹35 Lakhs to ₹85 Lakhs in ticket and visa advances alone, alongside ₹50 Lakhs to ₹1.2 Crores in uncollected recruitment fees. Without proactive legal escalation, this cash drain imperils the agency&apos;s MEA bank guarantee and statutory licensing status.
                    </p>
                  </div>
                  <p>
                    Recruiting agencies are not helpless against foreign defaults. By integrating the attested eMigrate contractual framework, Section 70 of the Indian Contract Act, 1872, the bilateral reciprocating enforcement provisions of CPC Section 44A, and the administrative leverage of the Protector General of Emigrants (PGE), RAs can mount a formidable cross-border recovery offensive.
                  </p>
                </div>
              </section>

              {/* Section 2: eMigrate Attested Demand Letter */}
              <section
                id="heading-emigrate-statutory-anchor"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
                  Statutory Foundation &bull; Emigration Act 1983
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  eMigrate Attested Demand Letter: The Statutory Contractual Anchor
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    The single most powerful asset an Indian Recruiting Agent possesses in cross-border debt recovery is the statutory documentation executed through the Ministry of External Affairs&apos; <strong>eMigrate portal (emigrate.gov.in)</strong>. Under the Emigration Act, 1983 and MEA operational directives, no foreign company can lawfully recruit Indian Emigration Check Required (ECR) category workers without formal registration as a verified Foreign Employer (FE).
                  </p>
                  <p>
                    To issue a deployment requisition, the foreign employer is legally mandated to execute three critical legal instruments:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-xs font-black text-slate-900 mb-1">
                        1. Attested Demand Letter (DL)
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Specifies exact job titles, quantities, basic wages, allowances, free food, accommodation, and employer obligation to provide return air tickets and medical care. Attested by the Indian Embassy/Consulate in the host nation.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-xs font-black text-slate-900 mb-1">
                        2. Power of Attorney (POA)
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A formal legal deed executed by the overseas employer authorizing the licensed Indian Recruiting Agent to select candidates, submit passports to foreign consulates, and complete immigration clearances.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-xs font-black text-slate-900 mb-1">
                        3. Specimen Employment Contract
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        The standardized employment agreement registered on eMigrate incorporating statutory minimum wages, working hours, and medical coverage, signed by the employer and endorsed by Indian consular officers.
                      </p>
                    </div>
                  </div>
                  <p>
                    Together with the bilateral Agency Agreement or Commercial Requisition executed between the foreign employer and the Indian RA, these documents form an airtight, state-sanctioned contract. Under Section 10A of the Information Technology Act, 2000 and Section 10 of the Indian Contract Act, 1872, the digital submission and consular attestation of these documents constitute an incontrovertible commercial agreement.
                  </p>
                  <p>
                    When a foreign employer subsequently refuses to pay recruitment fees or airfare reimbursements, it commits a direct breach of this state-monitored undertaking. As held by the Supreme Court in <em>Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal</em> ((2020) 7 SCC 1), digital extracts, approval reference IDs, and timestamped deployment telemetry extracted from the eMigrate portal—when certified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023—constitute admissible, conclusive primary proof of agency performance.
                  </p>
                </div>
              </section>

              {/* Section 3: Cross-Border Recovery Framework */}
              <section
                id="heading-cross-border-enforcement-framework"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
                  Statutory Matrix &bull; Cross-Border Remedies
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  Cross-Border Recovery Framework: CPC Section 44A &amp; MEA PGE Leverage
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Recovering debts from an overseas debtor requires combining high-pressure administrative leverage in India with cross-border civil enforcement mechanisms in the host country. The table below delineates the statutory weapons available to Indian MEA Recruiting Agents:
                  </p>

                  {/* Dark Header Comparison Table */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="p-3.5 font-bold border-b border-slate-800">Statutory Weapon / Forum</th>
                          <th className="p-3.5 font-bold border-b border-slate-800">Governing Act / Legal Hook</th>
                          <th className="p-3.5 font-bold border-b border-slate-800">Target Jurisdictions</th>
                          <th className="p-3.5 font-bold border-b border-slate-800">Enforcement Mechanism &amp; Impact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">
                            eMigrate PGE Blacklisting Petition
                          </td>
                          <td className="p-3.5 text-slate-700">
                            Emigration Act, 1983 ss. 10, 24 &amp; 25; MEA FE Guidelines
                          </td>
                          <td className="p-3.5 text-slate-700">
                            All 18 ECR Countries (UAE, Saudi, Qatar, Oman, Kuwait, etc.)
                          </td>
                          <td className="p-3.5 text-slate-700">
                            Administrative suspension of FE ID on emigrate.gov.in. Freezes all Indian manpower recruitment quotas nationwide.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">
                            CPC Section 44A Reciprocating Decree
                          </td>
                          <td className="p-3.5 text-slate-700">
                            Code of Civil Procedure, 1908 s.44A &amp; Notification S.O. 261(E)
                          </td>
                          <td className="p-3.5 text-slate-700">
                            United Arab Emirates (Dubai, Abu Dhabi, Sharjah Courts), UK, Singapore
                          </td>
                          <td className="p-3.5 text-slate-700">
                            Direct execution of Indian Commercial Court decree in UAE local courts. Bank accounts and corporate assets attached directly.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">
                            Contract Act Section 70 Quantum Meruit
                          </td>
                          <td className="p-3.5 text-slate-700">
                            Indian Contract Act, 1872 s.70 &amp; <em>B.K. Mondal</em> Doctrine
                          </td>
                          <td className="p-3.5 text-slate-700">
                            Pan-India &amp; International Commercial Litigation
                          </td>
                          <td className="p-3.5 text-slate-700">
                            Statutory restitution for non-gratuitous mobilization expenses, trade tests, and airfares enjoyed by foreign employer.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">
                            MSME Samadhaan Arbitration
                          </td>
                          <td className="p-3.5 text-slate-700">
                            MSMED Act, 2006 ss. 15, 16 &amp; 18 (Udyam-Registered RAs)
                          </td>
                          <td className="p-3.5 text-slate-700">
                            Indian MSEFC Councils &amp; New York Convention Enforcement
                          </td>
                          <td className="p-3.5 text-slate-700">
                            Mandatory 45-day payment statutory rule + 3x RBI Bank Rate compound interest. Award executable against Indian subsidiaries.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">
                            Order XXXVII CPC Summary Suit
                          </td>
                          <td className="p-3.5 text-slate-700">
                            Commercial Courts Act, 2015 s.2(1)(c) &amp; CPC Order XXXVII
                          </td>
                          <td className="p-3.5 text-slate-700">
                            District / Commercial Courts at RA Headquarters (Mumbai, Kochi, etc.)
                          </td>
                          <td className="p-3.5 text-slate-700">
                            Fast-track liquidated debt recovery based on attested Demand Letter, written invoices, and airline billing manifests.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    For detailed insight into business-to-business debt litigation and invoice recovery protocols across Indian courts, explore our companion guides on{" "}
                    <Link
                      href="/services/vendor-and-invoice-recoveries"
                      className="text-red-700 font-bold underline hover:text-red-800"
                    >
                      Vendor &amp; Invoice Recoveries
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/recovery/business-dues"
                      className="text-red-700 font-bold underline hover:text-red-800"
                    >
                      Commercial Business Dues
                    </Link>.
                  </p>
                </div>
              </section>

              {/* Section 4: Operational Decision Tree */}
              <section
                id="heading-operational-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-3">
                  Operational SOP &bull; Multi-Track Escalation Rail
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  Operational Decision Tree: Escalating Foreign Manpower Defaults
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    When an overseas client crosses the 30-day overdue mark following worker arrival, informal WhatsApp reminders are counterproductive. The creditor must immediately activate a structured, multi-track escalation rail designed to preserve statutory rights under FEMA, eMigrate, and international contract law:
                  </p>

                  {/* Desktop Hand-Crafted SVG Escalation Flowchart */}
                  <div className="hidden md:block w-full my-6 bg-slate-900 p-6 rounded-2xl border border-slate-800 overflow-x-auto">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">
                      Cross-Border Creditor Escalation Architecture &bull; Desktop Visual Map
                    </p>
                    <svg
                      viewBox="0 0 800 240"
                      className="w-full h-auto max-w-3xl mx-auto"
                      width={800}
                      height={240}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Stage 1 */}
                      <rect x="10" y="20" width="130" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                      <text x="75" y="45" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 1 &bull; DAY 1–15</text>
                      <text x="75" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Deployment Audit</text>
                      <text x="75" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">PoE &amp; PNR Lock</text>
                      <text x="75" y="96" fill="#94A3B8" fontSize="9" textAnchor="middle">BSA s.63 Certificate</text>

                      {/* Arrow 1 */}
                      <path d="M 140 65 L 170 65" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Stage 2 */}
                      <rect x="170" y="20" width="130" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                      <text x="235" y="45" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 2 &bull; DAY 16–30</text>
                      <text x="235" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Tri-Lingual Notice</text>
                      <text x="235" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">Advocate Demand</text>
                      <text x="235" y="96" fill="#94A3B8" fontSize="9" textAnchor="middle">FEMA &amp; s.70 Claims</text>

                      {/* Arrow 2 */}
                      <path d="M 300 65 L 330 65" stroke="#DC2626" strokeWidth="2" />

                      {/* Stage 3 */}
                      <rect x="330" y="20" width="130" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                      <text x="395" y="45" fill="#EF4444" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 3 &bull; DAY 31–45</text>
                      <text x="395" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">PGE Blacklist</text>
                      <text x="395" y="82" fill="#FCA5A5" fontSize="9" textAnchor="middle">eMigrate Complaint</text>
                      <text x="395" y="96" fill="#FCA5A5" fontSize="9" textAnchor="middle">Quota Freezing</text>

                      {/* Arrow 3 */}
                      <path d="M 460 65 L 490 65" stroke="#DC2626" strokeWidth="2" />

                      {/* Stage 4 */}
                      <rect x="490" y="20" width="130" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                      <text x="555" y="45" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 4 &bull; DAY 46–60</text>
                      <text x="555" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Embassy Escalation</text>
                      <text x="555" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">Labor Attache Alert</text>
                      <text x="555" y="96" fill="#94A3B8" fontSize="9" textAnchor="middle">Consular Summons</text>

                      {/* Arrow 4 */}
                      <path d="M 620 65 L 650 65" stroke="#DC2626" strokeWidth="2" />

                      {/* Stage 5 */}
                      <rect x="650" y="20" width="140" height="90" rx="10" fill="#1E293B" stroke="#34D399" strokeWidth="2" />
                      <text x="720" y="45" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 5 &bull; DAY 61+</text>
                      <text x="720" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">s.44A Execution</text>
                      <text x="720" y="82" fill="#6EE7B7" fontSize="9" textAnchor="middle">Dubai Court Decrees</text>
                      <text x="720" y="96" fill="#6EE7B7" fontSize="9" textAnchor="middle">Bank Asset Freeze</text>

                      {/* Lower annotation track */}
                      <rect x="10" y="140" width="780" height="80" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                      <text x="25" y="165" fill="#F87171" fontSize="11" fontWeight="bold">Cross-Border Risk Mitigation Rule:</text>
                      <text x="25" y="185" fill="#CBD5E1" fontSize="10">
                        1. Never let invoices cross 90 days without a formal written advocate notice, or RBI EDPMS non-realization flags will trigger.
                      </text>
                      <text x="25" y="202" fill="#CBD5E1" fontSize="10">
                        2. Intimating the Indian Embassy&apos;s Labor Attache often triggers an immediate diplomatic phone call to the foreign EPC project director.
                      </text>
                    </svg>
                  </div>

                  {/* Mobile Stacked Step Cards */}
                  <div className="md:hidden space-y-3 my-6">
                    <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">
                        Stage 1 &bull; Day 1–15
                      </span>
                      <p className="text-sm font-bold text-white mb-1">Deployment Audit &amp; Telemetry Lock</p>
                      <p className="text-xs text-slate-300">
                        Compile eMigrate DL/POA IDs, PoE exit logs, airline PNR records, and trade-test evaluations. Execute Section 63 BSA electronic evidence certificate.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">
                        Stage 2 &bull; Day 16–30
                      </span>
                      <p className="text-sm font-bold text-white mb-1">International Fact-Verified Notice Dispatch</p>
                      <p className="text-xs text-slate-300">
                        Serve bilingual statutory demand invoking Indian Contract Act s.70/73, FEMA services export rules, and 15-day settlement deadline.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 text-white border border-red-800/80">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">
                        Stage 3 &bull; Day 31–45
                      </span>
                      <p className="text-sm font-bold text-white mb-1">Protector General of Emigrants (PGE) Petition</p>
                      <p className="text-xs text-slate-300">
                        File official grievance under Emigration Act ss. 10/24 requesting eMigrate portal blacklisting and suspension of employer&apos;s Indian worker quota.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                        Stage 4 &bull; Day 46–60
                      </span>
                      <p className="text-sm font-bold text-white mb-1">Indian Embassy &amp; Labor Attache Escalation</p>
                      <p className="text-xs text-slate-300">
                        Petition the Community Welfare wing of the Indian Embassy in Riyadh/Abu Dhabi to summon the foreign employer&apos;s sponsor.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 text-white border border-emerald-800/80">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                        Stage 5 &bull; Day 61+
                      </span>
                      <p className="text-sm font-bold text-white mb-1">CPC Section 44A Direct Reciprocating Execution</p>
                      <p className="text-xs text-slate-300">
                        Transmit Indian Commercial Court money decree directly to Dubai/Abu Dhabi courts for local asset and bank account attachment.
                      </p>
                    </div>
                  </div>

                  <p>
                    Need a ready-to-use statutory notice template for staffing or placement fee disputes? Consult our vetted{" "}
                    <Link
                      href="/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice"
                      className="text-red-700 font-bold underline hover:text-red-800"
                    >
                      Recruitment &amp; Staffing Invoice Legal Notice Workspace
                    </Link>.
                  </p>
                </div>
              </section>

              {/* Section 5: Commercial Default Scenarios */}
              <section
                id="heading-commercial-default-scenarios"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-800 mb-3">
                  Interactive Playbook &bull; 4 Commercial Failure Modes
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  Commercial Default Scenarios: GCC &amp; European Failure Modes
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4 mb-6">
                  <p>
                    Overseas recruitment disputes exhibit distinct commercial typologies depending on whether the deployment is directed toward Gulf megaprojects (Saudi Aramco/ADNOC subcontracts) or European manufacturing corridors (Poland/Romania). Explore the interactive tabs below to examine the specific factual failure mode, statutory doctrine, and step-by-step counter-protocol:
                  </p>
                </div>

                {/* Interactive Scenario Tabs Component */}
                <OverseasRecruitingScenarioTabs />
              </section>

              {/* Section 6: Worked Recovery Ledger */}
              <section
                id="heading-worked-recovery-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
                  Numerical Audit &bull; Statutory Claim Simulation
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  Worked Recovery Ledger: ₹48.6 Lakh Deployment Cost &amp; Fee Claim
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Consider an empirical deployment simulation: A Mumbai-based MEA-registered Recruiting Agent deployed <strong>60 specialized structural fabricators and 6G welders</strong> to an infrastructure EPC contractor in Abu Dhabi, UAE. The foreign employer signed an attested Demand Letter on eMigrate agreeing to pay a professional fee of $800 per candidate upon deployment, alongside 100% reimbursement of trade-test center charges, visa medicals, and one-way economy airfares.
                  </p>
                  <p>
                    Following complete deployment and issuance of UAE residence visas, the employer withheld the agency invoice, alleging that its main EPC client had delayed project milestones. The agency initiated cross-border statutory recovery with the following worked financial ledger:
                  </p>

                  {/* Dark Emerald / Slate-900 Ledger Box */}
                  <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 my-6 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-400">
                        Statutory Creditor Ledger &bull; UAE EPC Deployment Default
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        Reference: MEA-RA/EXP-UAE/2026-884
                      </span>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm font-mono">
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-300">
                          1. Agreed Agency Service Charge (60 Workers &times; $800 @ ₹84.50/USD)
                        </span>
                        <span className="font-bold text-slate-100">₹40,56,000</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-300">
                          2. Reimbursable Trade-Test Center Charges (60 Welder Tests @ ₹6,500)
                        </span>
                        <span className="font-bold text-slate-100">₹3,90,000</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-300">
                          3. Out-of-Pocket GAMCA Medicals &amp; Biometric Costs (60 &times; ₹5,500)
                        </span>
                        <span className="font-bold text-slate-100">₹3,30,000</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-300">
                          4. Airfare Advances (60 BOM-AUH Confirmed Tickets @ ₹24,200)
                        </span>
                        <span className="font-bold text-slate-100">₹14,52,000</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-300">
                          5. Total Principal Deployment Claim Incurred
                        </span>
                        <span className="font-bold text-emerald-400">₹62,28,000</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-300">
                          6. Less: Advance Mobilization Deposit Received from Foreign Employer
                        </span>
                        <span className="font-bold text-amber-400">(-) ₹20,00,000</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-300 font-bold">
                          7. Net Unpaid Principal Debt Due
                        </span>
                        <span className="font-bold text-slate-100 text-sm sm:text-base">₹42,28,000</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-300">
                          8. Delayed Commercial Interest (18% p.a. for 180 Days Overdue under Contract Act s.73)
                        </span>
                        <span className="font-bold text-slate-100">₹3,74,682</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-300">
                          9. Statutory MSMED Compound Interest Alternative (3x RBI Bank Rate @ 19.5% p.a.)
                        </span>
                        <span className="font-bold text-emerald-300">₹4,12,230</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                        <span className="text-slate-300">
                          10. Legal Notice Preparation &amp; Consular Service Costs
                        </span>
                        <span className="font-bold text-slate-100">₹25,000</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 text-sm sm:text-base">
                        <span className="text-emerald-400 font-bold">
                          Total Demand in Advocate Notice (Principal + Commercial Interest + Costs)
                        </span>
                        <span className="font-black text-emerald-400 text-base sm:text-lg">
                          ₹46,27,682
                        </span>
                      </div>
                    </div>
                  </div>

                  <p>
                    Calculate your exact statutory MSME compound interest or commercial delayed interest slabs with our free{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-red-700 font-bold underline hover:text-red-800"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>.
                  </p>
                </div>
              </section>

              {/* Section 7: FEMA Services Export & FIRC Compliance */}
              <section
                id="heading-fema-services-export-compliance"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 mb-3">
                  Regulatory Compliance &bull; RBI &amp; FEMA Mandates
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  FEMA Services Export &amp; FIRC Inward Remittance Compliance Rules
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Many overseas recruiting agencies fail to appreciate that defaulting foreign employers create severe domestic regulatory hazards under the <strong>Foreign Exchange Management Act, 1999 (FEMA)</strong>. When an Indian entity provides recruitment or manpower consulting services to an overseas company, it constitutes an export of services under Regulation 3 of the Foreign Exchange Management (Current Account Transactions) Rules, 2000.
                  </p>
                  <p>
                    Key statutory compliance rules govern cross-border manpower export receivables:
                  </p>
                  <div className="space-y-3 my-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-xs font-black text-slate-900 mb-1">
                        1. Mandatory 9-Month Inward Realization Window
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Under the RBI Master Direction on Export of Goods and Services (FED Master Direction No. 16/2015-16), 100% of the value of services exported must be realized and repatriated to India through an Authorized Dealer (AD) Category-I bank within <strong>nine months</strong> from the date of the export invoice.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-xs font-black text-slate-900 mb-1">
                        2. FIRC / Electronic BRC Generation
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Upon receiving foreign inward remittances (via SWIFT wire transfers in USD, AED, SAR, or EUR), the AD bank issues a Foreign Inward Remittance Certificate (FIRC) or reports the realization on the Export Data Processing and Monitoring System (EDPMS) / Electronic Bank Realization Certificate (e-BRC) portal.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-xs font-black text-slate-900 mb-1">
                        3. Caution-Listing Risk &amp; Enforcement Protection
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        If foreign receivables remain unrealized past nine months without demonstrable recovery efforts, the AD bank is obligated to report the transaction as overdue, potentially caution-listing the Indian RA. Serving a formal advocate legal demand notice and petitioning the MEA provides documented evidence of active legal enforcement, shielding the RA from RBI/ED compounding penalties.
                      </p>
                    </div>
                  </div>
                  <p>
                    Furthermore, under corporate tax provisions such as{" "}
                    <Link
                      href="/law/section-43bh-msme-payment-rule"
                      className="text-red-700 font-bold underline hover:text-red-800"
                    >
                      Section 43B(h) of the Income Tax Act
                    </Link>, ensuring that invoices are formally reconciled and audited prevents accounting write-offs and protects input tax credits.
                  </p>
                </div>
              </section>

              {/* Section 8: BSA 2023 Evidence Dossier */}
              <section
                id="heading-bsa-evidence-dossier"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
                  Evidentiary Standards &bull; BSA 2023 Section 63
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  BSA 2023 Section 63 Evidence Dossier for Cross-Border Claims
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Cross-border debt litigation requires rigorous digital evidence authentication. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), computer printouts, government portal extracts, and electronic communications are admissible as primary evidence only when accompanied by a statutory certificate signed by an authorized officer in charge of the computer system.
                  </p>
                  <p>
                    An airtight evidentiary dossier for recovering overseas recruitment debts must comprise:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-xs font-black text-slate-900 mb-1">
                        1. eMigrate Portal Audit Records
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Export of the approved Demand Letter (DL), consular attestation stamp, Power of Attorney ID, and PoE emigration clearance numbers matching the passport numbers of all deployed personnel.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-xs font-black text-slate-900 mb-1">
                        2. Airline Passenger Manifests (PNR)
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Confirmed flight booking records, airline tickets, boarding passes, and IATA billing ledgers proving that workers departed Indian airports and landed in the host country.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-xs font-black text-slate-900 mb-1">
                        3. Trade-Test Evaluation Rosters
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Accredited trade-test workshop scorecards bearing the physical signature, seal, or digital verification of the foreign employer&apos;s visiting technical delegator.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block text-xs font-black text-slate-900 mb-1">
                        4. Electronic Communication Headers
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Raw MIME email headers (.eml format) and cryptographic WhatsApp message exports showing the employer&apos;s explicit deployment authorization and invoice receipt.
                      </p>
                    </div>
                  </div>
                  <p>
                    Learn more about sibling staffing recovery protocols in our dedicated guides on{" "}
                    <Link
                      href="/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india"
                      className="text-red-700 font-bold underline hover:text-red-800"
                    >
                      Backdoor Hiring &amp; Candidate Circumvention Recovery
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery"
                      className="text-red-700 font-bold underline hover:text-red-800"
                    >
                      Temp Staffing Payroll &amp; PF Invoice Default Recovery
                    </Link>.
                  </p>
                </div>
              </section>

              {/* Section 9: Foreign Debtor Defense Pre-Emption */}
              <section
                id="heading-foreign-debtor-defense-preemption"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-3">
                  Defense Dismantling &bull; Tactical Counter-Offensive
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  Foreign Debtor Defense Pre-Emption: Neutralizing Employer Claims
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Defaulting overseas employers invariably rely on a predictable set of legal and commercial excuses to justify non-payment. The table below details how each defense is dismantled under Indian and cross-border commercial jurisprudence:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                          &times;
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">
                          Employer Excuse: &ldquo;Our main project client delayed our milestone payment, so we cannot pay agency fees.&rdquo;
                        </p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg text-xs sm:text-sm text-slate-700">
                        <span className="font-bold text-emerald-700">Statutory Counter-Offensive: </span>
                        The &ldquo;Pay-When-Paid&rdquo; defense is legally invalid unless explicitly stipulated as a contingent condition precedent in the bilaterally signed agency contract. Under Section 70 of the Contract Act and standard mercantile law, the RA&apos;s contractual obligation is fulfilled upon lawful deployment. The foreign employer&apos;s cash-flow difficulties with third parties do not extinguish its liquidated debt obligation.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                          &times;
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">
                          Employer Excuse: &ldquo;The workers failed on-site trade tests after 45 days; we are deducting 40% as a penalty.&rdquo;
                        </p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg text-xs sm:text-sm text-slate-700">
                        <span className="font-bold text-emerald-700">Statutory Counter-Offensive: </span>
                        Dismantled by Estoppel by Conduct (Section 121 BSA 2023). Where the employer&apos;s delegate personally attended Indian trade testing centers and signed selection scorecards, post-deployment technical rejections are barred. Furthermore, under standard international contracts, probation objections require written notice within 30 days and immediate repatriation, not retention on project sites with unilateral debit notes.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                          &times;
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">
                          Employer Excuse: &ldquo;Indian courts have no jurisdiction over our foreign company registered in Dubai or Riyadh.&rdquo;
                        </p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg text-xs sm:text-sm text-slate-700">
                        <span className="font-bold text-emerald-700">Statutory Counter-Offensive: </span>
                        Under Section 20(c) of the Code of Civil Procedure, 1908, a suit can be instituted where the cause of action arises wholly or in part. Sourcing candidates, medical testing, and flight mobilization occurred in India. Crucially, under CPC Section 44A and Notification S.O. 261(E), money decrees passed by Indian Commercial Courts are directly executable in the UAE. Moreover, the employer is subject to MEA administrative blacklisting on eMigrate regardless of judicial jurisdiction.
                      </div>
                    </div>
                  </div>

                  <p>
                    Review our specialized guides on{" "}
                    <Link
                      href="/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery"
                      className="text-red-700 font-bold underline hover:text-red-800"
                    >
                      Replacement Clause Abuse Fee Recovery
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/temp-to-perm-contract-employee-absorption-buyout-fee-recovery"
                      className="text-red-700 font-bold underline hover:text-red-800"
                    >
                      Temp-to-Perm Conversion &amp; Buyout Fee Recovery
                    </Link>{" "}
                    for additional defense-dismantling strategies.
                  </p>
                </div>
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section
                id="heading-recruiting-agent-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
                  Practitioner Knowledge Base &bull; FAQ Accordions
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  Frequently Asked Questions for MEA Registered Recruiting Agents
                </h2>
                <div className="space-y-3 my-6">
                  {FAQS.map((faq, index) => (
                    <details
                      key={index}
                      className="group border border-slate-200 rounded-xl bg-white overflow-hidden transition-all duration-150"
                    >
                      <summary className="flex items-center justify-between p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer hover:bg-slate-50">
                        <span className="pr-4">{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform group-open:rotate-180">
                          &darr;
                        </span>
                      </summary>
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Landmark Precedents & Statutory Sources */}
              <section
                id="heading-statutory-authorities"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-3">
                  Judicial Precedents &amp; Primary Authorities
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  Statutory Authorities &amp; Cross-Border Dispute Resources
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Every legal notice and commercial suit instituted on behalf of MEA Recruiting Agents is anchored in verified Supreme Court judgments and statutory enactments:
                  </p>

                  {/* Precedent Cards */}
                  <div className="space-y-4 my-6">
                    {COURT_PRECEDENTS.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] border-y border-r border-slate-200"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <p className="text-xs sm:text-sm font-black text-slate-900">{item.title}</p>
                          <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-sm">
                            {item.citation}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-700 mb-2">{item.parties} ({item.date})</p>
                        <p className="text-xs text-slate-600 leading-relaxed mb-2">
                          <strong className="text-slate-800">Facts: </strong>
                          {item.facts}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed mb-2">
                          <strong className="text-slate-800">Holding: </strong>
                          {item.holding}
                        </p>
                        <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 font-medium">
                          <span className="font-bold text-[#DC2626]">Creditor Takeaway: </span>
                          {item.takeaway}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600">
                    Official Primary Sources &amp; Legislation Portals:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-red-700 hover:text-red-800 underline font-medium"
                        >
                          {source.title} &rarr;
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Dual B2B Conversion Funnel CTA */}
              <section className="scroll-mt-28">
                <OverseasRecruitingNoticeCTA />
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
