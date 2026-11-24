import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ForeignClientSoftexRecoveryTableOfContents from "./ForeignClientSoftexRecoveryTableOfContents";
import ForeignClientSoftexScenarioTabs from "./ForeignClientSoftexScenarioTabs";
import ForeignClientSoftexRecoveryCTA from "./ForeignClientSoftexRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/us-uk-uae-client-unpaid-software-invoice-softex-fema-recovery";
const EXACT_H1 =
  "Foreign Client Defaulted on Software/SaaS Invoices? Cross-Border Legal Demand + Clearing Unrealized STPI SOFTEX in RBI EDPMS";
const META_TITLE = "US / UK / UAE Unpaid IT Invoice: Recovery & SOFTEX Write-Off";
const META_DESCRIPTION =
  "Recover unpaid software invoices from US, UK & UAE clients while serving statutory legal notices to clear unrealized STPI SOFTEX bills in RBI EDPMS.";

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
        alt: formatAltText("US UK UAE Client Unpaid Software Invoice SOFTEX Recovery"),
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

const STATUTORY_MATRIX = [
  {
    remedy: "FEMA 9-Month SOFTEX Realization & AD Bank Write-Off SOP",
    statute: "Foreign Exchange Management Act, 1999 & RBI Master Direction on Export of Goods and Services",
    timing: "Mandatory within 9 months from export invoice date; extension or write-off application at Month 9",
    mechanism: "Serve formal Fact-Verified Legal Demand Notice on overseas buyer; compile certified proof of non-realization and deliver statutory write-off request to Authorized Dealer (AD) Bank under Regulation 16/Master Direction",
    relief: "Closes open SOFTEX shipping bills in RBI EDPMS, preventing company caution-listing and loss of export IEC benefits; legal proof enables write-off without penal inquiries",
    suitability: "All Indian IT exporters, STPI units, SEZ tech companies, and SaaS exporters with open SOFTEX forms exceeding 9 months",
    tone: "emerald",
  },
  {
    remedy: "Direct Execution of Indian Decrees in Reciprocating Territories (CPC s.44A)",
    statute: "Code of Civil Procedure, 1908 (Section 44A) & Ministry of Law Bilateral Notifications",
    timing: "Post Commercial Court money decree under Section 12A / Commercial Courts Act 2015",
    mechanism: "Obtain money decree in Indian Commercial Court; transmit certified decree to High Court of Justice (UK), UAE Federal / Dubai Courts, or Singapore Supreme Court for direct asset attachment",
    relief: "Direct attachment of overseas corporate bank accounts and receivables without re-litigating liability or substantive facts abroad",
    suitability: "Delinquent buyers incorporated in the United Kingdom, United Arab Emirates (Dubai, Abu Dhabi), Singapore, New Zealand, Hong Kong",
    tone: "slate",
  },
  {
    remedy: "US Pre-Litigation State Demand, UCC Breach & Registered Agent Notice",
    statute: "Uniform Commercial Code (UCC Article 2) & US State Contract Jurisprudence (Delaware, CA, NY)",
    timing: "Served at 15–30 days post invoice default prior to filing in US District or State Court",
    mechanism: "Serve formal cross-border statutory demand upon Delaware/California Registered Agent, corporate officers, and VC board members citing unjust enrichment, breach of implied covenant of good faith, and wire fraud",
    relief: "Immediate commercial settlement or corporate resolution; creates personal legal exposure for officers and clouds Series A/B fundraising due diligence",
    suitability: "US Delaware C-Corps, California LLCs, New York enterprises, and venture-backed tech startups defaulting on custom engineering or SaaS fees",
    tone: "emerald",
  },
  {
    remedy: "Copyright Act Section 19 IP Ownership Lien & Extraterritorial Injunctions",
    statute: "Indian Copyright Act, 1957 (Sections 17 & 19) & Berne Convention for the Protection of Literary and Artistic Works",
    timing: "Invoked immediately upon client repudiation or non-payment of software milestone",
    mechanism: "Enforce the Pine Labs doctrine: software IP remains the absolute property of the Indian author until 100% agreed consideration is paid. Serve cease-and-desist notices and DMCA takedowns to AWS, Azure, Google Cloud, and GitHub",
    relief: "Immediate shutdown of client's cloud-hosted applications, mobile app store delisting, and freeze on commercial deployment until full invoice payment",
    suitability: "Custom web development, mobile apps, enterprise AI/ML architectures, and proprietary software modules built under unpaid milestones",
    tone: "emerald",
  },
  {
    remedy: "UK Pre-Action Protocol Letter Before Claim & Statutory Late Payment Interest",
    statute: "UK Civil Procedure Rules (CPR) Pre-Action Protocol & Late Payment of Commercial Debts Act 1998",
    timing: "Served providing 14–30 days before initiating London High Court claim or winding-up petition",
    mechanism: "Serve formal Letter Before Claim demanding debt principal plus statutory interest at 8% over Bank of England base rate, notifying company directors of winding-up petition under UK Insolvency Act 1986",
    relief: "Compels settlement to avoid director personal liability, frozen corporate credit ratings, and compulsory company liquidation",
    suitability: "UK registered Private Limited (Ltd) companies and LLPs operating in England, Wales, or Scotland",
    tone: "slate",
  },
  {
    remedy: "BSA 2023 Section 63 Certified Cross-Border Digital Audit Dossier",
    statute: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63)",
    timing: "Compiled alongside first notice dispatch and AD Bank regulatory filing",
    mechanism: "Generate SHA-256 hash verified repositories of Git commits, Jira sprint completions, AWS deployment trails, Slack sign-offs, and SMTP server email transmission headers backed by Section 63 certificate",
    relief: "Admissible evidence in both Indian Commercial Courts and foreign adjudicatory forums, dismantling debtor pretexts of non-delivery or scope defects",
    suitability: "All offshore cross-border software contracts, staff augmentation timesheets, and milestone delivery disputes",
    tone: "slate",
  },
];

const FAQS = [
  {
    question: "Why do Indian software exporters face RBI EDPMS trouble when an overseas client defaults?",
    answer:
      "Under the Foreign Exchange Management Act, 1999 (FEMA) and RBI Master Direction on Export of Goods and Services, every software export declared via STPI SOFTEX forms must be realized in convertible foreign currency within 9 months from the invoice date. When a US, UK, or UAE client defaults, the export bill remains 'unrealized' on the RBI's Export Data Processing and Monitoring System (EDPMS). If not regularized, your Authorized Dealer (AD) Bank is legally mandated to report your company on the RBI Caution List, which freezes future export credit, halts bank guarantees, and invites regulatory show-cause notices from the Directorate of Enforcement (ED).",
  },
  {
    question: "Why does my Authorized Dealer (AD) Bank insist on legal notice proof to permit a SOFTEX write-off?",
    answer:
      "Under RBI Master Direction (Section C.16 on Write-Off of Unrealized Export Bills), an Authorized Dealer (AD) Bank can write off unrealized software export bills up to 10% of total export proceeds realized during the preceding calendar year (or 5% for self-write-off). However, AD Banks cannot process a write-off simply on the exporter's oral assertion that a client refused to pay. The bank's internal compliance committee and concurrent auditors strictly require verifiable evidence that the exporter has exhausted all legal remedies to recover the funds. A formal, fact-verified Cross-Border Statutory Demand Notice served on the overseas entity—complete with electronic delivery receipts under BSA 2023 Section 63—constitutes the primary regulatory proof required to sanction an EDPMS write-off.",
  },
  {
    question: "Can an Indian software agency legally recover money from a US entity registered in Delaware or California?",
    answer:
      "Yes. Indian software companies have robust legal remedies against US entities. First, under the Uniform Commercial Code (UCC Article 2) and US state contract law, accepting delivered code without paying is an actionable breach of contract and unjust enrichment. Second, serving an advocate demand notice upon the entity's Registered Agent in Delaware or California triggers mandatory corporate board review and exposes officers during fundraising diligence. Third, because the software copyright has not transferred under Section 19 of the Indian Copyright Act, 1957, the agency can file DMCA takedown notices with AWS, Azure, Google Cloud, and Apple/Google App Stores to freeze the client's commercial operations.",
  },
  {
    question: "How does Section 44A CPC allow Indian court decrees to be directly executed in the UK and UAE?",
    answer:
      "Under Section 44A of the Code of Civil Procedure, 1908 (CPC), the Government of India has notified specific foreign nations as 'Reciprocating Territories'—notably the United Kingdom, the United Arab Emirates (notified in 2020 via S.O. 261(E)), and Singapore. When an Indian Commercial Court passes a final money decree against a UK Ltd or Dubai LLC, the decree-holder does not need to file a fresh lawsuit abroad. Instead, a certified copy of the Indian decree is filed directly in the High Court of Justice in London or the Dubai/UAE Federal Courts for immediate execution, asset attachment, and bank garnishment, treating the Indian judgment as if it were passed by the foreign court itself.",
  },
  {
    question: "Does a foreign client own the software code if they defaulted on the final milestone payment?",
    answer:
      "No. Under Section 19 of the Indian Copyright Act, 1957 and the authoritative doctrine affirmed by Indian High Courts (such as Pine Labs v. Gemalto), an assignment or transfer of copyright does not take legal effect until the contractually agreed consideration is discharged in full. Even if the Master Services Agreement contains a 'Work-for-Hire' or 'IP Assignment' clause, non-payment of the agreed contract value renders the assignment void or inoperative. The Indian agency remains the sole legal copyright holder and can initiate copyright infringement proceedings under the Berne Convention in the client's home country.",
  },
  {
    question: "What should an IT agency do if an Upwork or Toptal client moves off-platform and then stops paying?",
    answer:
      "While moving off-platform breaches freelance platform Terms of Service, the direct commercial contract, email exchange, and Statements of Work (SOWs) executed directly between your agency and the client remain 100% legally binding and enforceable in civil and commercial courts. You can serve a formal Cross-Border Statutory Demand Notice demanding full principal payment plus interest. Furthermore, because direct wires leave you with open STPI SOFTEX declarations and zero platform escrow protection, serving formal legal notices is critical to satisfy your AD Bank's EDPMS write-off requirements.",
  },
  {
    question: "What is the timeline for applying for an RBI EDPMS extension or SOFTEX write-off?",
    answer:
      "The statutory realization window under FEMA is 9 months from the invoice date. By Month 6–7 post-default, the IT exporter must serve a formal Advocate Legal Demand Notice on the overseas debtor. If payment is not received by Month 8, the exporter compiles the legal notice, tracking proof, correspondence logs, and an ETD (Extension of Time) application to the AD Bank under Form ETX. If the debt proves definitively unrecoverable, the exporter submits a formal Write-Off Application supported by the advocate notice and Chartered Accountant (CA) certificate before Month 9 expires.",
  },
  {
    question: "What electronic evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)?",
    answer:
      "To enforce cross-border tech claims and satisfy bank auditors, Indian exporters must maintain electronic evidence certified under BSA 2023 Section 63. This includes: (1) Git commit histories with developer cryptographic timestamps, (2) Jira/Trello sprint acceptance logs and issue sign-offs, (3) AWS/Vercel/Heroku server deployment trails, (4) email and Slack communications showing deliverable handover and unfulfilled payment promises, and (5) STPI SOFTEX filing numbers paired with EDPMS Shipping Bill numbers. When accompanied by a Section 63 certificate signed by the IT head or Managing Director, these records hold undisputed evidential weight.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Foreign Exchange Management Act, 1999 (FEMA Section 7 & 8 — Export of Goods and Services & Realization)",
    url: "https://www.indiacode.nic.in/handle/123456789/1988",
  },
  {
    title: "RBI Master Direction — Export of Goods and Services (FED Master Direction No. 16/2015-16, Section C.16 Write-Off)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10202",
  },
  {
    title: "Software Technology Parks of India (STPI) — SOFTEX Guidelines & Certification Manual",
    url: "https://www.stpi.in",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Section 44A — Execution of Decrees Passed by Courts in Reciprocating Territory)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Ministry of Law and Justice Notification S.O. 261(E) — UAE Declared Reciprocating Territory under CPC s.44A",
    url: "https://egazette.gov.in",
  },
  {
    title: "Copyright Act, 1957 (Sections 17, 19, 51 & 63 — Ownership, Assignment & Infringement of Computer Software)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

export default function ForeignClientSoftexRecoveryPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "IT & SaaS Recovery", href: "/industries/it-saas-software-recovery" },
    {
      label: "Foreign Client Default & SOFTEX",
      href: PAGE_URL,
    },
  ];

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${PAGE_URL}#article`,
    headline: EXACT_H1,
    description: META_DESCRIPTION,
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
    datePublished: "2026-11-16T12:00:00+05:30",
    dateModified: "2026-11-16T12:00:00+05:30",
    mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
    about: {
      "@type": "Thing",
      name: "Cross-Border Software Invoice Recovery and RBI EDPMS SOFTEX Write-Off",
    },
    citation: PRIMARY_SOURCES.map((s) => s.url),
  };

  const HOWTO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${SITE_URL}${PAGE_URL}#howto`,
    name: "How to Recover Unpaid Software Invoices from Foreign Clients & Clear Unrealized STPI SOFTEX in RBI EDPMS",
    description:
      "A 5-stage operational and legal playbook for Indian software exporters to enforce cross-border contracts in the US, UK, and UAE, assert Copyright Act s.19 IP liens, and secure Authorized Dealer Bank approval for RBI EDPMS SOFTEX write-offs.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Export Invoices, STPI SOFTEX Filings & EDPMS Ledger Aging",
        text: "Extract certified STPI SOFTEX numbers, AD Bank Shipping Bill references, Foreign Inward Remittance Certificates (FIRCs), and master service agreements. Determine the exact FEMA 9-month realization deadline in RBI's EDPMS database.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Serve Formal Cross-Border Statutory Demand Notice",
        text: "Issue a fact-verified legal demand notice to the foreign debtor's registered office (Delaware/California Registered Agent, UK Companies House address, or Dubai mainland office). Invoke US UCC Article 2, UK Pre-Action Protocol, or UAE Commercial Law, paired with Section 19 Copyright Act ownership liens.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "File AD Bank Extension of Time (ETD) Application with Legal Proof",
        text: "Before the 9-month FEMA deadline lapses, submit Form ETX to your Authorized Dealer Bank enclosing the advocate legal demand notice and BSA 2023 s.63 electronic proof of service, requesting a formal 6-month extension to forestall caution-listing.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Trigger Copyright Liens, DMCA Notices & Overseas Court Execution",
        text: "If non-payment persists, serve formal DMCA takedown notices on AWS, GitHub, or App Stores citing Section 19 Copyright Act non-assignment. Simultaneously, file a Section 12A commercial suit in India for direct execution abroad under CPC Section 44A (for UK, UAE, or Singapore debtors).",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Submit Formal SOFTEX Write-Off Docket to AD Bank",
        text: "Compile the advocate notice, debtor refusal logs, CA certificate, and Board Resolution to request AD Bank write-off under RBI Master Direction Section C.16, closing open EDPMS bills and clearing your company's export compliance record.",
      },
    ],
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}${PAGE_URL}#faq`,
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${PAGE_URL}#breadcrumb`,
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
        name: "IT & SaaS Recovery",
        item: `${SITE_URL}/industries/it-saas-software-recovery`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Foreign Client Default & SOFTEX",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>B2B-072 Priority Playbook</span>
              <span className="text-red-500">&bull;</span>
              <span>FEMA &amp; RBI Master Direction Compliant</span>
              <span className="text-red-500">&bull;</span>
              <span>CPC Section 44A Global Enforcement</span>
            </div>

            {/* Verbatim H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Answer Box (First 250 words contains Hub link) */}
            <div
              aria-label="Executive Statutory Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Software Export Recovery &amp; EDPMS Write-Off
              </span>
              <p>
                When overseas tech clients in the US, UK, or UAE default on custom software development or SaaS invoices, Indian tech exporters face a dual liability: unrecovered revenue and punitive regulatory action under the Foreign Exchange Management Act, 1999 (FEMA). Under RBI export regulations, all STPI SOFTEX declarations must be realized within 9 months. To prevent Authorized Dealer (AD) Banks from reporting your company on RBI&apos;s EDPMS Caution List, exporters must serve fact-verified cross-border statutory demand notices. This establishes mandatory legal recovery effort required for an AD Bank write-off while enforcing Copyright Act Section 19 IP liens and CPC Section 44A bilateral enforcement. Explore our comprehensive sector guidance at the{" "}
                <Link
                  href="/industries/it-saas-software-recovery"
                  className="text-red-400 hover:text-red-300 font-bold underline decoration-red-400/50 underline-offset-2"
                >
                  IT Services &amp; SaaS Recovery Hub
                </Link>
                .
              </p>
            </div>

            {/* 4-Card Hero Metric Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">FEMA Export Clock</span>
                <p className="text-xl sm:text-2xl font-black text-red-400 mt-0.5">9 Months</p>
                <span className="text-[10px] text-slate-400 block mt-0.5">Mandatory SOFTEX Realization</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">AD Bank Write-Off Rule</span>
                <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5">100% Notice</p>
                <span className="text-[10px] text-slate-400 block mt-0.5">Legal Demand Proof Required</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">UK / UAE Enforcement</span>
                <p className="text-xl sm:text-2xl font-black text-slate-100 mt-0.5">CPC s.44A</p>
                <span className="text-[10px] text-slate-400 block mt-0.5">Direct Foreign Decree Execution</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">Unpaid Code Ownership</span>
                <p className="text-xl sm:text-2xl font-black text-amber-400 mt-0.5">Section 19</p>
                <span className="text-[10px] text-slate-400 block mt-0.5">Copyright Lien &amp; Berne Treaty</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          {/* 2-Column Split: Left Sticky TOC + Right Content */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Sticky Sidebar TOC */}
            <ForeignClientSoftexRecoveryTableOfContents />

            {/* Main Content Articles */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview & RBI EDPMS SOFTEX Threat */}
              <section
                id="heading-softex-edpms-traps"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      01
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Export Compliance Crisis
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    Why Foreign Client Non-Payment Triggers Serious RBI EDPMS Penalties
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    For Indian software development agencies, SaaS vendors, and digital engineering firms, cross-border client defaults represent an acute existential threat that domestic defaults do not: <strong>the Foreign Exchange Management Act, 1999 (FEMA) regulatory trap</strong>.
                  </p>
                  <p>
                    Whenever your agency delivers custom code, engineering hours, or cloud licenses to a foreign buyer in the United States, United Kingdom, United Arab Emirates, or European Union, your compliance team files an electronic <strong>STPI SOFTEX form</strong> (or SEZ equivalent). The moment that SOFTEX form is certified by the Software Technology Parks of India (STPI), it automatically synchronizes with the Reserve Bank of India&apos;s centralized <strong>Export Data Processing and Monitoring System (EDPMS)</strong> under an allocated Shipping Bill number.
                  </p>
                  <p>
                    Under <strong>Regulation 9 of the FEMA (Export of Goods and Services) Regulations</strong> read with the <strong>RBI Master Direction on Export of Goods and Services (FED Master Direction No. 16/2015-16)</strong>, the exporter has a mandatory statutory obligation to realize 100% of the declared invoice value in freely convertible foreign currency (such as USD, GBP, or EUR) through an Authorized Dealer Category-I (AD) Bank within <strong>nine (9) months</strong> from the invoice date.
                  </p>
                  <p>
                    When an overseas buyer refuses to wire funds—whether exploiting cross-border distance, asserting frivolous post-delivery defect claims, or experiencing bankruptcy—the bill sits open on the RBI EDPMS portal. At Month 9, if the inward remittance is missing and no Foreign Inward Remittance Certificate (FIRC) is matched, the AD Bank is obligated by RBI directives to issue a regulatory warning and place the IT company on the <strong>RBI Caution List</strong>.
                  </p>

                  <div className="p-4 sm:p-5 rounded-xl bg-red-50 border border-red-200 text-red-950 space-y-2">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-red-700 flex items-center gap-1.5">
                      <span>⚠️</span> The Dire Consequences of an Open EDPMS SOFTEX Default:
                    </p>
                    <ul className="text-xs sm:text-sm space-y-1.5 list-disc pl-5 text-red-900">
                      <li>
                        <strong>Freezing of Packing Credit &amp; Working Capital:</strong> Scheduled commercial banks freeze export packing credit lines and foreign currency overdraft limits.
                      </li>
                      <li>
                        <strong>Loss of IEC Benefits &amp; Mandatory 100% Advance:</strong> Future export consignments cannot be shipped on credit; customs and STPI mandate 100% upfront foreign remittance.
                      </li>
                      <li>
                        <strong>Directorate of Enforcement (ED) Inquiries:</strong> Unresolved foreign exchange non-realizations above statutory thresholds are referred for FEMA investigation under Section 13 penalties (up to 3x the unrealized amount).
                      </li>
                      <li>
                        <strong>AD Bank Refusal of Write-Off Without Legal Notice:</strong> Exporters cannot simply &quot;write off&quot; bad offshore debts in accounting ledgers; AD Banks legally refuse to close EDPMS entries without verified proof of legal pursuit.
                      </li>
                    </ul>
                  </div>

                  <p>
                    This is why every Indian tech exporter facing an overseas default must execute a two-track strategy: <strong>(1) aggressively pursuing the foreign debtor in their home jurisdiction</strong>, while <strong>(2) serving the formal statutory demand notice required by Indian AD Banks to justify an EDPMS extension or bad debt write-off</strong>. For wider institutional contract recovery across staff augmentation and SaaS lines, review our companion guides on{" "}
                    <Link
                      href="/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery"
                      className="text-red-600 hover:text-red-700 font-bold underline"
                    >
                      IT Staff Augmentation Recovery
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/b2b-saas-annual-subscription-early-cancellation-unpaid-invoice-recovery"
                      className="text-red-600 hover:text-red-700 font-bold underline"
                    >
                      B2B SaaS Annual Contract Breach
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 2: 5-Stage Cross-Border Recovery Protocol */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      02
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Operational Playbook
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    5-Stage Cross-Border Recovery &amp; EDPMS SOFTEX Regularization Protocol
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Navigating an offshore software default requires a synchronized operational pipeline that bridges international commercial litigation with domestic Indian exchange control regulations:
                </p>

                {/* Desktop SVG Workflow Diagram */}
                <div className="hidden md:block w-full p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-inner">
                  <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-4 text-center">
                    Cross-Border Tech Recovery &amp; STPI SOFTEX Resolution Architecture
                  </p>
                  <svg
                    viewBox="0 0 900 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    width="900"
                    height="240"
                    aria-label="5-Stage Cross-Border Software Recovery and SOFTEX Resolution Workflow"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="20" width="160" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                    <circle cx="90" cy="50" r="18" fill="#DC2626" />
                    <text x="90" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">01</text>
                    <text x="90" y="90" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">Audit &amp; SOFTEX</text>
                    <text x="90" y="110" fill="#94A3B8" fontSize="10" textAnchor="middle">Extract STPI No.</text>
                    <text x="90" y="125" fill="#94A3B8" fontSize="10" textAnchor="middle">EDPMS Aging Check</text>
                    <text x="90" y="145" fill="#E2E8F0" fontSize="10" fontWeight="600" textAnchor="middle">Day 0–30 Default</text>
                    <text x="90" y="175" fill="#38BDF8" fontSize="9" textAnchor="middle">BSA s.63 Git Dossier</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M175 115 H190" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="190" y="20" width="160" height="190" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <circle cx="270" cy="50" r="18" fill="#DC2626" />
                    <text x="270" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">02</text>
                    <text x="270" y="90" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">Cross-Border Demand</text>
                    <text x="270" y="110" fill="#94A3B8" fontSize="10" textAnchor="middle">Delaware / UK Ltd / UAE</text>
                    <text x="270" y="125" fill="#94A3B8" fontSize="10" textAnchor="middle">Registered Agent Service</text>
                    <text x="270" y="145" fill="#E2E8F0" fontSize="10" fontWeight="600" textAnchor="middle">Day 30–60 Post Default</text>
                    <text x="270" y="175" fill="#F87171" fontSize="9" textAnchor="middle">Copyright s.19 Warning</text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M355 115 H370" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 3 */}
                    <rect x="370" y="20" width="160" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                    <circle cx="450" cy="50" r="18" fill="#DC2626" />
                    <text x="450" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">03</text>
                    <text x="450" y="90" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">AD Bank Form ETX</text>
                    <text x="450" y="110" fill="#94A3B8" fontSize="10" textAnchor="middle">Submit Legal Proof</text>
                    <text x="450" y="125" fill="#94A3B8" fontSize="10" textAnchor="middle">Request 6M Extension</text>
                    <text x="450" y="145" fill="#E2E8F0" fontSize="10" fontWeight="600" textAnchor="middle">Month 7–8 FEMA Stop</text>
                    <text x="450" y="175" fill="#34D399" fontSize="9" textAnchor="middle">Shields Caution-List</text>

                    {/* Arrow 3 -> 4 */}
                    <path d="M535 115 H550" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 4 */}
                    <rect x="550" y="20" width="160" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                    <circle cx="630" cy="50" r="18" fill="#DC2626" />
                    <text x="630" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">04</text>
                    <text x="630" y="90" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">IP Lien &amp; DMCA</text>
                    <text x="630" y="110" fill="#94A3B8" fontSize="10" textAnchor="middle">AWS/GitHub Takedown</text>
                    <text x="630" y="125" fill="#94A3B8" fontSize="10" textAnchor="middle">CPC s.44A Suit Filed</text>
                    <text x="630" y="145" fill="#E2E8F0" fontSize="10" fontWeight="600" textAnchor="middle">Month 8–10 Escalation</text>
                    <text x="630" y="175" fill="#FBBF24" fontSize="9" textAnchor="middle">App Store Freeze</text>

                    {/* Arrow 4 -> 5 */}
                    <path d="M715 115 H730" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 5 */}
                    <rect x="730" y="20" width="160" height="190" rx="12" fill="#1E293B" stroke="#059669" strokeWidth="2" />
                    <circle cx="810" cy="50" r="18" fill="#059669" />
                    <text x="810" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">05</text>
                    <text x="810" y="90" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">EDPMS Write-Off</text>
                    <text x="810" y="110" fill="#94A3B8" fontSize="10" textAnchor="middle">Master Dir. Sec C.16</text>
                    <text x="810" y="125" fill="#94A3B8" fontSize="10" textAnchor="middle">CA Certificate &amp; Proof</text>
                    <text x="810" y="145" fill="#E2E8F0" fontSize="10" fontWeight="600" textAnchor="middle">Bills Closed in EDPMS</text>
                    <text x="810" y="175" fill="#34D399" fontSize="9" textAnchor="middle">100% Compliant File</text>
                  </svg>
                </div>

                {/* Mobile Cards Stack */}
                <div className="grid grid-cols-1 md:hidden gap-3.5">
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-950 text-red-400">
                      Stage 1 &bull; Day 0–30 Default
                    </span>
                    <p className="text-sm font-bold text-white">Export Audit &amp; STPI SOFTEX Verification</p>
                    <p className="text-xs text-slate-300">
                      Identify certified SOFTEX numbers, verify EDPMS Shipping Bill aging, and assemble cryptographic Git commit logs under BSA 2023 Section 63.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-950 text-red-400">
                      Stage 2 &bull; Day 30–60 Default
                    </span>
                    <p className="text-sm font-bold text-white">Cross-Border Advocate Statutory Demand</p>
                    <p className="text-xs text-slate-300">
                      Serve formal notice on Registered Agents in Delaware/California, London, or Dubai citing UCC, CPR, CPC s.44A, and Section 19 Copyright liens.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-950 text-red-400">
                      Stage 3 &bull; Month 7–8 Default
                    </span>
                    <p className="text-sm font-bold text-white">AD Bank Extension of Time (Form ETX)</p>
                    <p className="text-xs text-slate-300">
                      Deliver formal legal demand proof to the Authorized Dealer Bank to secure a 6-month realization extension, forestalling EDPMS caution-listing.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-950 text-red-400">
                      Stage 4 &bull; Month 8–10 Default
                    </span>
                    <p className="text-sm font-bold text-white">IP Takedown &amp; Section 44A Court Action</p>
                    <p className="text-xs text-slate-300">
                      Issue DMCA notices to AWS/GitHub over unpaid software code; initiate Commercial Summary Suit for direct enforcement in UK/UAE reciprocating courts.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-950 text-emerald-400">
                      Stage 5 &bull; Resolution &amp; Closure
                    </span>
                    <p className="text-sm font-bold text-white">AD Bank SOFTEX Write-Off Sanction</p>
                    <p className="text-xs text-slate-300">
                      Present complete legal recovery dossier and CA certificate to execute a formal bad-debt write-off under RBI Master Direction Section C.16, closing EDPMS bills.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      03
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Comparative Legal Matrix
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    Cross-Border Legal Enforcement Matrix: US, UK, UAE &amp; Singapore Forums
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Cross-border debt collection differs radically from domestic debt recovery. Creditors must match the overseas debtor&apos;s legal jurisdiction with bilateral treaties and extraterritorial IP remedies:
                </p>

                {/* Dark-Header Comparison Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="py-3 px-3.5 font-bold uppercase tracking-wider text-[11px] border-b border-slate-800">
                          Jurisdiction &amp; Remedy
                        </th>
                        <th className="py-3 px-3.5 font-bold uppercase tracking-wider text-[11px] border-b border-slate-800">
                          Governing Statute &amp; Treaty
                        </th>
                        <th className="py-3 px-3.5 font-bold uppercase tracking-wider text-[11px] border-b border-slate-800">
                          Trigger Window
                        </th>
                        <th className="py-3 px-3.5 font-bold uppercase tracking-wider text-[11px] border-b border-slate-800">
                          Enforcement Mechanism &amp; Relief
                        </th>
                        <th className="py-3 px-3.5 font-bold uppercase tracking-wider text-[11px] border-b border-slate-800">
                          EDPMS Regulatory Impact
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {STATUTORY_MATRIX.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/70" : "bg-white"}>
                          <td className="py-3 px-3.5 font-bold text-slate-900 align-top">
                            <span className="block text-slate-900">{item.remedy}</span>
                            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
                              {item.suitability}
                            </span>
                          </td>
                          <td className="py-3 px-3.5 text-slate-700 align-top text-xs font-medium">
                            {item.statute}
                          </td>
                          <td className="py-3 px-3.5 text-slate-600 align-top text-xs font-semibold whitespace-nowrap">
                            {item.timing}
                          </td>
                          <td className="py-3 px-3.5 text-slate-700 align-top text-xs leading-relaxed">
                            {item.mechanism}
                          </td>
                          <td className="py-3 px-3.5 text-slate-700 align-top text-xs leading-relaxed">
                            <strong className="text-emerald-700 block mb-0.5">Relief:</strong>
                            {item.relief}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-500 italic">
                  Note: For cross-border consultancy and tech advisory services without physical deliverables, compare statutory remedies at our dedicated guide on{" "}
                  <Link href="/recovery/consultancy-fees" className="text-red-600 hover:text-red-700 font-semibold underline">
                    Consultancy Fee Debt Recovery
                  </Link>
                  .
                </p>
              </section>

              {/* Section 4: 4 Offshore Default Scenarios (Interactive Tabs) */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      04
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Interactive Scenarios
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    4 Cross-Border Default Scenarios: Delaware, UK Ltd, UAE &amp; Direct Escrow
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Offshore defaults follow distinct operational profiles depending on the debtor&apos;s corporate structure and geographic location. Select a scenario below to inspect the debtor pretext, legal reality, statutory hook, and immediate creditor action protocol:
                </p>

                {/* Client Interactive Component */}
                <ForeignClientSoftexScenarioTabs />
              </section>

              {/* Section 5: The STPI SOFTEX Write-Off SOP */}
              <section
                id="heading-softex-write-off-sop"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      05
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Regulatory SOP
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    The STPI SOFTEX Write-Off SOP: Satisfying AD Bank &amp; RBI Criteria
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    A critical misunderstanding among Indian tech founders and CFOs is assuming that bad debts can simply be written off through a Board Resolution and a Chartered Accountant entry in audited financial accounts. <strong>Under FEMA, an accounting write-off has zero legal standing until the Authorized Dealer (AD) Bank formally closes the corresponding Shipping Bill entry in the RBI EDPMS system.</strong>
                  </p>
                  <p>
                    Under <strong>Section C.16 of the RBI Master Direction on Export of Goods and Services</strong>, Authorized Dealer Banks are granted statutory powers to sanction the write-off of unrealized software export bills up to <strong>10% of total export proceeds realized during the preceding calendar year</strong> (or up to 5% for self-write-off by the exporter, provided the exporter is not on the Caution List).
                  </p>

                  {/* 4 Mandatory AD Bank Evidentiary Tests */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                        1. Genuine Commercial Export &amp; No Hawala Collusion
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        The AD Bank must be satisfied that software services were genuinely rendered under a bona fide contract, verified by certified STPI SOFTEX declarations and inward remittance history.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                        2. Exhaustion of Recovery Efforts &amp; Advocate Notice
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        The exporter must demonstrate that all reasonable recovery channels were pursued. A fact-verified statutory legal demand notice served via international courier/registered email is mandatory audit proof.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                        3. Debtor Insolvency, Closure, or Formal Repudiation
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        The file must contain documentary evidence establishing that the debtor has become insolvent, ceased trading (UK Companies House dissolution or US corporate status void), or definitively refused payment.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                        4. CA Certificate &amp; Exporter Declaration
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A certificate issued by an independent Chartered Accountant certifying that the write-off amount falls within the permissible 10% ceiling and does not violate transfer pricing or related-party norms.
                      </p>
                    </div>
                  </div>

                  <p>
                    Without an advocate-issued legal demand notice and verified proof of service under Bharatiya Sakshya Adhiniyam, 2023 Section 63, the AD Bank&apos;s concurrent auditors will reject the write-off request, leaving the open bill in EDPMS to trigger automatic RBI caution-listing.
                  </p>
                </div>
              </section>

              {/* Section 6: Enforcing Copyright Liens */}
              <section
                id="heading-copyright-ip-lien"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      06
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Intellectual Property Leverage
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    Enforcing Copyright Liens: Why Foreign Clients Do Not Own Unpaid Code
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Foreign clients often boast: <em>&quot;Our contract states that all deliverables are Work-for-Hire, so we own the software code the moment you commit it to GitHub. You cannot touch our production systems!&quot;</em>
                  </p>
                  <p>
                    <strong>This assertion is legally false.</strong> Under <strong>Section 19 of the Indian Copyright Act, 1957</strong>, an assignment of copyright in any work is legally void and ineffective unless supported by the actual receipt of the contractually agreed consideration.
                  </p>
                  <p>
                    In the landmark Delhi High Court ruling in <em>Pine Labs Pvt. Ltd. v. Gemalto Terminals India Pvt. Ltd.</em>, the Court established that where a commercial contract stipulates payment as a condition precedent for intellectual property transfer, non-payment leaves the copyright strictly vested with the author/software development agency. Even if the Master Services Agreement contains generic &quot;Work-for-Hire&quot; language, Indian copyright law (the place of creation) governs the transfer.
                  </p>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white space-y-3">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-red-400">
                      The Berne Convention Extraterritorial IP Sword:
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Both India and the United States, United Kingdom, and UAE are signatories to the <strong>Berne Convention for the Protection of Literary and Artistic Works</strong>. Under Article 5(1) of the Berne Convention, software created in India enjoys the exact same copyright protections in the foreign debtor&apos;s home territory as if it were authored domestically.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Because the foreign client does not own the code due to Section 19 non-payment, their continued hosting, distribution, or commercial exploitation of the software constitutes <strong>actionable copyright infringement</strong> under Title 17 of the US Code (U.S. Copyright Act) and the UK Copyright, Designs and Patents Act 1988.
                    </p>
                  </div>

                  <p>
                    When our legal recovery desk serves a Section 19 Copyright Revocation notice, foreign debtors suddenly face catastrophic exposure: <strong>DMCA takedown notices issued directly to Amazon Web Services (AWS), Microsoft Azure, Google Cloud, and Apple/Google App Stores</strong>. Foreign founders and investors quickly realize that paying the outstanding software invoice is far cheaper than having their live SaaS production application frozen overnight. For deeper insights on IP lien mechanics, read our dedicated treatise on{" "}
                    <Link
                      href="/copyright-not-transferred-until-paid-freelancer"
                      className="text-red-600 hover:text-red-700 font-bold underline"
                    >
                      Copyright Not Transferred Until Paid
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 7: Worked Export Recovery Ledger */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      07
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Financial Quantification
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    Worked Export Recovery Ledger: $65,000 Default &amp; EDPMS Resolution
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  The following case study illustrates an Indian SaaS engineering company recovering an unremitted $65,000 software export milestone while simultaneously insulating its business from RBI EDPMS caution-listing:
                </p>

                {/* Financial Ledger Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Illustrative Export Recovery &amp; Write-Off Ledger
                    </span>
                    <span className="text-xs text-slate-400">Currency: USD ($) &amp; INR (&rupee; @ 84.00)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Contracted Software Export Milestone Value (USD)</span>
                      <strong className="text-white font-mono">$65,000.00 (&rupee;54,60,000)</strong>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">STPI SOFTEX Certified Shipping Bill Date</span>
                      <span className="text-slate-200">15 January 2026</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">FEMA Mandatory 9-Month EDPMS Realization Cut-Off</span>
                      <strong className="text-amber-400 font-mono">15 October 2026</strong>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Debtor Profile</span>
                      <span className="text-slate-200">Delaware C-Corp, San Francisco CA (Series Seed)</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Pre-Litigation Cross-Border Demand Notice Dispatched</span>
                      <span className="text-emerald-400 font-semibold">10 July 2026 (Month 6 Post Default)</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Section 19 Copyright Revocation &amp; DMCA Warning</span>
                      <span className="text-red-400 font-semibold">Served on Registered Agent &amp; AWS</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Negotiated Pre-Litigation Commercial Wire Settlement</span>
                      <strong className="text-emerald-400 font-mono">$48,000.00 (&rupee;40,32,000) Wired</strong>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Balance Shortfall Submitted for AD Bank Write-Off</span>
                      <strong className="text-slate-300 font-mono">$17,000.00 (&rupee;14,28,000)</strong>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-200 font-bold">Net Outcome &bull; Financial &amp; Regulatory Status</span>
                      <span className="text-emerald-400 font-bold">100% EDPMS Clean &bull; Zero Caution-List</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  <strong>Strategic Commercial Takeaway:</strong> By serving a formal cross-border demand notice at Month 6, the exporter recovered $48,000 (74% of the debt) through an immediate pre-litigation settlement. For the remaining $17,000 balance, the advocate notice and formal settlement agreement provided the AD Bank with conclusive legal documentation to execute a clean EDPMS write-off under RBI Master Direction Section C.16, protecting the company&apos;s banking lines without incurring FEMA penalties.
                </div>
              </section>

              {/* Section 8: BSA 2023 s.63 Cross-Border Evidence Dossier */}
              <section
                id="heading-bsa-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      08
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Evidentiary Standard
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    BSA 2023 s.63 Cross-Border Evidence &amp; Digital Audit Dossier
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (Section 63)</strong>, electronic evidence must meet stringent standards of integrity, system custody, and cryptographic verification to be admissible in Indian courts and cross-border proceedings.
                  </p>
                  <p>
                    When preparing a cross-border tech recovery notice and AD Bank EDPMS write-off application, the following 7-pillar evidentiary dossier is assembled:
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        1
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 block font-bold">
                          Certified STPI SOFTEX Forms &amp; EDPMS Shipping Bills
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          STPI certification approval letters, electronic SOFTEX numbers, and AD Bank Shipping Bill generation slips establishing export declaration.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        2
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 block font-bold">
                          Executed Master Services Agreement (MSA) &amp; SOWs
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          DocuSign / Adobe Sign audit logs, IP assignment conditionality clauses, milestone payment schedules, and jurisdiction covenants.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        3
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 block font-bold">
                          Git Repository Commit Trails &amp; Cryptographic Timestamps
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          GitHub / GitLab pull request approvals, merge histories, commit SHAs, and developer contributions proving timely technical delivery.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        4
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 block font-bold">
                          Cloud Infrastructure Deployment Logs (AWS/GCP/Azure)
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          CloudTrail deployment events, container deployment manifests, and production release tags verifying that software is operational and utilized by client users.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        5
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 block font-bold">
                          Jira Sprint Sign-Offs &amp; Written Acceptance Communications
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Jira ticket transitions to &quot;Done&quot;, Slack communications celebrating milestone completion, and email chains confirming deliverable receipt.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        6
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 block font-bold">
                          Foreign Inward Remittance History (Previous FIRCs)
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          SWIFT MT103 wire messages and FIRCs for earlier milestones, proving a consistent commercial payment course prior to the sudden default.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        7
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 block font-bold">
                          Section 63 Compliance Certificate
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Formal certificate executed by the Chief Technology Officer or Managing Director validating hash checksums and uninterrupted electronic custody.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Dual-Track B2B Legal Desk CTA */}
              <section id="heading-cta" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      09
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Enterprise Legal Desk
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    Institutional Cross-Border Software Recovery &amp; EDPMS Desk
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Select your operational track below to launch a fact-verified cross-border notice or ingest aged offshore tech receivables in bulk.
                  </p>
                </div>

                {/* Dual-Track CTA Component */}
                <ForeignClientSoftexRecoveryCTA />
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      10
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Executive FAQ
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    Frequently Asked Questions on Offshore Defaults &amp; SOFTEX Write-Off
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 rounded-xl border border-slate-200 p-4 open:bg-white open:shadow-xs transition-colors"
                    >
                      <summary className="font-bold text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-180 transition-transform">
                          ▾
                        </span>
                      </summary>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory References */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      11
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Legal Authorities
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    Statutory References, Cross-Border Treaties &amp; Regulatory Circulars
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The statutory protocols, bilateral enforcement mechanisms, and exchange control write-off procedures outlined in this guide are grounded in the following verified legal authorities:
                </p>

                <div className="space-y-2.5">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                    >
                      <span className="text-xs font-semibold text-slate-800 pr-3">{source.title}</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[11px] font-bold text-[#DC2626] hover:text-[#B91C1C] shrink-0 underline"
                      >
                        Official Source &rarr;
                      </a>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <span>
                    Reviewed &amp; Certified by: <strong>{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
                  </span>
                  <span>Last Updated: November 2026 &bull; FEMA Regulation 16 &amp; CPC s.44A Compliant</span>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Component */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
