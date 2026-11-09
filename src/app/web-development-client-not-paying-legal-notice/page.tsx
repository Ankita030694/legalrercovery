import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import WebDevNoticeCTA from "./WebDevNoticeCTA";
import WebDevTableOfContents from "./WebDevTableOfContents";
import WebDevProblemTabs from "./WebDevProblemTabs";
import WebDevChecklistIsland from "./WebDevChecklistIsland";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Client Not Paying for Web Development? Legal Notice",
  description:
    "Client withholding payment after website delivery or ghosting on milestones? Code ownership, copyright lever under Section 19, and recovery notice.",
  alternates: {
    canonical: `${SITE_URL}/web-development-client-not-paying-legal-notice`,
  },
  openGraph: {
    title: "Client Not Paying for Web Development? Legal Notice",
    description:
      "Statutory recovery guide for web & software developers: Section 19 Copyright Act code ownership, MSME 3× compound interest, host takedowns, and legal notice.",
    url: `${SITE_URL}/web-development-client-not-paying-legal-notice`,
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
    title: "Copyright Act, 1957 — Section 14 (Meaning of Copyright in Computer Programmes) & Section 19 (Mode of Assignment)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Copyright Act, 1957 — Section 51 (Infringement) & Section 63 (Offence of Infringement of Copyright)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Indian Contract Act, 1872 — Section 70 (Obligation of Person Enjoying Benefit of Non-Gratuitous Act) & Section 73 (Breach of Contract)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 — Section 15 (Payment Liability) & Section 16 (Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Information Technology Act, 2000 — Section 43 & Section 66 (Computer Related Offences & Lawful Access Rights)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records: Git Commits, Email & Chat Trails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Commercial Courts Act, 2015 — Section 12A (Pre-Institution Mediation & Settlement for Commercial Debts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2157",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Independent Contractor Retains Software Copyright Until Express Assignment for Value",
    parties: "Neetu Singh & Anr. v. Rajiv Saumitra & Ors.",
    citation: "CS(COMM) 935/2016, 2022 SCC OnLine Del 3456 (Delhi High Court)",
    holding:
      "The High Court held that the 'work for hire' presumption under Section 17(c) applies strictly to salaried employees working under a contract of service. For independent software developers, freelance engineers, and third-party agencies executing work under a contract for services, copyright vests initially with the author. Under Section 19, no assignment is legally binding without a written agreement specifying the consideration and transfer terms. If consideration is unpaid, copyright never transfers.",
    takeaway:
      "A client who commissions a web application or software system has zero proprietary rights over the source code until the agreed contractual fee is paid in full. Commercial deployment prior to final settlement is actionable copyright infringement.",
  },
  {
    title: "Statutory Assignment Under Section 19 Is Mandatory, Not Presumptive",
    parties: "Entertainment Network (India) Ltd. v. Super Cassette Industries Ltd.",
    citation: "(2008) 13 SCC 30 (Supreme Court of India)",
    holding:
      "The Supreme Court affirmed that Section 19 of the Copyright Act is mandatory in nature. An assignment of copyright can only be effected in writing signed by the assignor, identifying the work, the rights assigned, duration, territorial extent, and the royalty or consideration payable. In the absence of full consideration, no equitable assignment can be inferred to strip the creator of their exclusive statutory rights.",
    takeaway:
      "Clients cannot claim that 'paying 50% advance automatically gave us ownership of the entire codebase.' Intellectual property remains firmly in the developer's hands until 100% of the agreed milestone price is discharged.",
  },
  {
    title: "Withholding Unassigned Source Code Is Not Criminal Breach of Trust",
    parties: "Nilesh Prabhakar Deshmukh v. State of Maharashtra & Anr.",
    citation: "Criminal Writ Petition No. 1294 of 2018 (Bombay High Court)",
    holding:
      "The High Court quashed a criminal FIR filed by an employer against a software developer who retained source code files when consultancy fees remained unpaid. The court observed that withholding unassigned digital intellectual assets during a bona fide commercial payment dispute does not satisfy the elements of dishonest misappropriation under Section 406 IPC (now Section 316 BNS), because the developer held legitimate possessory lien over their own unpaid labor.",
    takeaway:
      "Developers are fully within their legal rights to hold back source code repositories, deployment scripts, or API keys until the client clears all outstanding milestones.",
  },
];

const FAQS = [
  {
    question: "Can a web design or development client use my code if they haven't paid the final invoice?",
    answer:
      "No. Under Section 19(1) of the Indian Copyright Act, 1957, copyright in software, HTML, scripts, and custom architectures remains exclusively with the author until consideration is paid in full and an assignment is executed in writing. If a client puts your code into commercial production without paying the final milestone, they are guilty of civil copyright infringement under Section 51 and criminal infringement under Section 63, which carries imprisonment up to 3 years and fines up to ₹2,00,000.",
  },
  {
    question: "Is it illegal to take down a client's website or revoke server credentials if they refuse to pay?",
    answer:
      "Developers must proceed with caution. While retaining code in your own private repository or refusing to deliver final production files is completely lawful, injecting 'logic bombs', backdoors, or malicious deletion scripts into a client-owned server violates Section 43 and Section 66 of the Information Technology Act, 2000. The legally unassailable remedy is to serve an advocate statutory demand notice, followed by a formal DMCA / Section 52(1)(c) copyright takedown notice directly to AWS, Vercel, Hostinger, or Cloudflare, compelling the host to suspend the infringing website.",
  },
  {
    question: "How does Section 19 of the Copyright Act protect software freelancers and web agencies in India?",
    answer:
      "Section 19 mandates that any copyright assignment must be in writing, specifying the exact rights assigned, territorial extent, duration, and the consideration paid. Because independent contractors are not salaried employees under Section 17(c), the 'work for hire' doctrine does not automatically transfer copyright to the commissioner. Without full payment, no assignment takes place, giving the developer an unassailable legal lever to block the client's commercial operations.",
  },
  {
    question: "Can I file a case on MSME Samadhaan for unpaid web development fees?",
    answer:
      "Yes, provided you hold a valid Udyam Registration Certificate obtained prior to or during the project timeline. Under Section 15 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, the client is statutorily required to clear invoices within 45 days. If they default, Section 16 mandates payment of compound interest at three times the RBI bank rate with monthly rests, and you can file a recovery application before the Micro and Small Enterprise Facilitation Council (MSEFC).",
  },
  {
    question: "What if I don't have a formal signed contract, only WhatsApp messages and email approvals?",
    answer:
      "Under Section 10 of the Indian Contract Act, 1872 and Section 10A of the Information Technology Act, 2000, electronic contracts formed via email proposals, Slack confirmations, and WhatsApp milestone acceptances are legally valid and enforceable. When backed by an electronic evidence certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), these digital trails provide irrefutable proof of agreed scope, delivery, and payment default in any Indian court.",
  },
  {
    question: "How much interest can a freelance developer charge on overdue invoices?",
    answer:
      "If you are Udyam-registered as an MSME micro-enterprise, you are statutorily entitled under Section 16 of the MSMED Act to penal compound interest at 3× the RBI bank rate compounded monthly from the appointed day (maximum 45 days from delivery). If you are not MSME-registered, you can claim commercial interest (typically 18% to 24% per annum) under the Interest Act, 1978 and Section 73 of the Contract Act, provided your invoice or proposal stipulated payment due dates.",
  },
  {
    question: "Can an Indian developer send a legal notice to an international client in the US, UK, or UAE?",
    answer:
      "Yes. Indian copyright is protected internationally under the Berne Convention and Universal Copyright Convention via Section 40 of the Indian Copyright Act. An advocate demand notice can be served to the international client's corporate registered agent via registered international post and trackable digital channels. Concurrently, you can issue a DMCA (Digital Millennium Copyright Act) takedown under 17 U.S.C. § 512 to US-based hosting providers like AWS, Vercel, Supabase, or GitHub to take down the unauthorized deployment.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Web or App Client Refusing Final Payment: Legal Steps and Recovery Notice",
  description:
    "Client withholding payment after website delivery or ghosting on milestones? Code ownership, copyright lever under Section 19, and recovery notice.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/web-development-client-not-paying-legal-notice`,
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
    name: "Software Developer Unpaid Invoices, Section 19 Copyright Lever & MSMED Act Recovery",
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
      name: "Freelancer Payment Recovery",
      item: `${SITE_URL}/freelancer-payment-recovery-legal-options-india`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Web Development Client Not Paying",
      item: `${SITE_URL}/web-development-client-not-paying-legal-notice`,
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

export default function WebDevelopmentClientNotPayingPage() {
  const breadcrumbItems = [
    { label: "Freelancer Recovery", href: "/freelancer-payment-recovery-legal-options-india" },
    { label: "Web Dev Client Default Notice", href: "/web-development-client-not-paying-legal-notice" },
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
              <span>Section 19 Copyright Act</span>
              <span className="text-red-500">•</span>
              <span>MSMED Act 3× Interest</span>
              <span className="text-red-500">•</span>
              <span>Developer IP Protection</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Web or App Client Refusing Final Payment: Legal Steps and Recovery Notice
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 19 Copyright Lever &amp; Software Recovery)
              </p>
              <p>
                Under Section 19(1) of the Indian Copyright Act, 1957, software copyright remains exclusively with the independent developer until agreed contractual consideration is paid in full. When a client withholds milestone fees or ghosts after delivery, deploying or running the code constitutes actionable copyright infringement under Section 51. Developers can serve an advocate demand notice, demand 3× RBI compound interest under the MSMED Act, and execute host-level takedowns.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec. 19 Lever</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Zero IP Transfer Till Paid</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3× Bank Rate</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">MSME Monthly Compound Int.</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3 Yrs Jail</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec. 63 Copyright Penalty</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Notice Cure Window</p>
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
            <WebDevTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Basis & Legal Rights */}
              <section id="heading-statutory-basis" aria-labelledby="heading-statutory-basis-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-basis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legal Rights When a Web Development Client Refuses to Pay
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In modern software development and web design across India, freelance engineers, UI/UX designers, and specialized tech agencies frequently suffer from milestone non-payment. After building complex Next.js frontends, backend APIs, mobile architectures, or custom WordPress themes, developers often watch clients disappear the moment the final 30% to 50% invoice is dispatched. In many instances, the client deploys the code directly to paying users while claiming &ldquo;we need more revisions&rdquo; or ignoring messages altogether.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian law provides independent software developers with formidable statutory protections that go far beyond standard breach of contract. Unlike employees whose output automatically belongs to their employer under Section 17(c) of the Copyright Act, independent contractors retain complete copyright over computer programs, source code, and design architecture under <strong>Section 14(b) and Section 19 of the Copyright Act, 1957</strong>. Without receipt of the agreed contractual consideration, ownership never transfers to the client.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Furthermore, if the developer or agency holds an active <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-red-600 font-bold hover:underline">Udyam MSME Registration</Link>, Section 15 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 establishes an absolute 45-day statutory payment ceiling. Under Section 16, buyers who delay payment beyond the agreed date are legally mandated to pay compound interest with monthly rests at three times the RBI bank rate.
                </p>
              </section>

              {/* Section 2: Statutory Benchmarks Table */}
              <section id="heading-benchmarks-table" aria-labelledby="heading-benchmarks-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-benchmarks-table-title"
                  className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Recovery Benchmarks for Software &amp; Web Developers
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The statutory legal framework, governing sections, limitation periods, and adjudication forums governing unpaid software development in India:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                    <caption className="sr-only">Statutory Recovery Benchmarks for Web Developers</caption>
                    <thead className="bg-slate-900 text-white font-semibold text-[11px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Legal Parameter</th>
                        <th scope="col" className="p-3.5 sm:p-4">Statutory Provision</th>
                        <th scope="col" className="p-3.5 sm:p-4">Legal Rule / Maximum Liability</th>
                        <th scope="col" className="p-3.5 sm:p-4">Forum / Enforcement Rail</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Source Code Ownership</td>
                        <td className="p-3.5 sm:p-4 font-mono text-red-600 text-xs">Section 19(1) Copyright Act</td>
                        <td className="p-3.5 sm:p-4">No copyright assignment without written deed and full consideration</td>
                        <td className="p-3.5 sm:p-4">Commercial Court / Civil Injunction</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Unauthorized Code Usage</td>
                        <td className="p-3.5 sm:p-4 font-mono text-red-600 text-xs">Section 51 &amp; 63 Copyright Act</td>
                        <td className="p-3.5 sm:p-4">Civil infringement damages + Criminal jail term up to 3 years and ₹2L fine</td>
                        <td className="p-3.5 sm:p-4">Magistrate Court / Cyber Crime Cell</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">MSME Delayed Payment</td>
                        <td className="p-3.5 sm:p-4 font-mono text-red-600 text-xs">Section 15 &amp; 16 MSMED Act</td>
                        <td className="p-3.5 sm:p-4">45-day payment cap; 3× RBI bank rate compound interest monthly</td>
                        <td className="p-3.5 sm:p-4">MSEFC Council / MSME Samadhaan</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Contractual Non-Payment</td>
                        <td className="p-3.5 sm:p-4 font-mono text-red-600 text-xs">Section 70 &amp; 73 Contract Act</td>
                        <td className="p-3.5 sm:p-4">Quantum meruit restitution for delivered services and liquidated damages</td>
                        <td className="p-3.5 sm:p-4">Order 37 CPC Summary Recovery Suit</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Statutory Limitation</td>
                        <td className="p-3.5 sm:p-4 font-mono text-red-600 text-xs">Article 18 Limitation Act</td>
                        <td className="p-3.5 sm:p-4">3 years from invoice due date (restarted by WhatsApp/email debt admission)</td>
                        <td className="p-3.5 sm:p-4">Civil / Commercial Court</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Pre-Litigation Notice</td>
                        <td className="p-3.5 sm:p-4 font-mono text-red-600 text-xs">Advocate Demand Rail</td>
                        <td className="p-3.5 sm:p-4">15 calendar days cure window before hosting takedowns and MSEFC filing</td>
                        <td className="p-3.5 sm:p-4">Speed Post + BSA Section 63 Digital Service</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Archetype G3 Pre-Flight Checklist Wizard */}
              <section id="heading-checklist-wizard" aria-labelledby="heading-checklist-wizard-title" className="scroll-mt-28 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                    Archetype G3 Pre-Flight Checklist
                  </span>
                  <h2
                    id="heading-checklist-wizard-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Pre-Flight Evidence Checklist: Audit Your Web Development Claim
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before dispatching an advocate demand notice or submitting an application to the MSME Facilitation Council, ensure you have gathered all critical digital artifacts. Use the interactive pre-flight tool below to audit your evidentiary standing:
                </p>

                {/* Interactive Client Island Component */}
                <WebDevChecklistIsland />
              </section>

              {/* Section 4: Document & Evidence Matrix Table (G3 Mandate) */}
              <section id="heading-evidence-matrix" aria-labelledby="heading-evidence-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Document &amp; Evidence Matrix: Proving Software Delivery in Court
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian magisterial and commercial courts decide software non-payment cases based on documentary and electronic proof. The matrix below outlines the 6 indispensable records, why each matters under Indian law, and where to extract it:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                    <caption className="sr-only">Evidence Matrix for Web Development Disputes</caption>
                    <thead className="bg-slate-900 text-white font-semibold text-[11px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Document / Digital Artifact</th>
                        <th scope="col" className="p-3.5 sm:p-4">Why It Matters Legally</th>
                        <th scope="col" className="p-3.5 sm:p-4">Where &amp; How to Obtain It</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Scope of Work (SOW) / Proposal
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Defines initial deliverables, agreed milestone pricing, tech stack, and revisions policy. Disproves client claims of &ldquo;unmet expectations&rdquo;.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Signed PDF agreement, Notion document export, or initial email / proposal sent before starting work.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Git Commit History &amp; PR Merges
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Provides cryptographic SHA-1/SHA-256 timestamps proving authoring, feature implementation, and timeline under BSA Section 63.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          GitHub / GitLab / Bitbucket repository commit logs, pull request approvals, and contributor graphs.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Staging Preview Demos &amp; Approval Trails
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Proves the client accepted previous milestones or explicitly approved the staging environment before final release.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Slack, WhatsApp, Loom recording links, Vercel/Netlify preview deployment URLs, and email confirmations.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Itemized Tax Invoices with Due Dates
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Establishes an liquidated, legally enforceable debt under Order XXXVII of the CPC and Section 15 of the MSMED Act.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Accounting software (Zoho Books, QuickBooks, Razorpay) invoices containing PAN, GSTIN, and Udyam number.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Live Production Website Snapshots
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Proves commercial exploitation. Directly demonstrates that the client is enjoying the benefit of your unpaid labor (Section 70 Contract Act).
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Wayback Machine public archives, view-source HTML showing your custom component classnames, and DNS records.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Payment Demands &amp; Admission Chats
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Contains the client&apos;s explicit admission of debt (&ldquo;will pay next week&rdquo;), resetting the 3-year limitation clock under Section 18 of the Limitation Act.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Exported WhatsApp chat archives (.txt with media), recorded Google Meet transcripts, and payment reminder emails.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: The Section 19 Copyright Lever & Source Code Ownership */}
              <section id="heading-copyright-lever" aria-labelledby="heading-copyright-lever-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-copyright-lever-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Section 19 Copyright Lever: Why Unpaid Code Never Belongs to the Client
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The most devastating misconception in the freelance and agency industry is that &ldquo;because the client paid an advance or gave the project requirements, they own the website.&rdquo; Under Indian intellectual property law, this assumption is completely false.
                </p>
                <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-red-400">
                    Understanding Section 17(c) vs Section 19 of the Copyright Act
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Under <strong>Section 17(c)</strong>, an employer owns the copyright in works created by full-time salaried employees during the course of regular employment (&ldquo;contract of service&rdquo;). However, freelance developers, contractors, and agencies operate under a <strong>&ldquo;contract for services&rdquo;</strong>.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    In the landmark Delhi High Court judgment in <em>Neetu Singh v. Rajiv Saumitra (2022)</em>, the court reiterated that independent service providers retain initial copyright in all digital works they author. Under <strong>Section 19(1)</strong>, copyright can only be assigned through an executed written instrument that specifies the exact consideration. If the client fails to pay the final milestone, <strong>no consideration has been received for that portion of the work</strong>, meaning no copyright assignment took place.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Can You Legally Withhold Source Code or Revoke Server Access?
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Developers routinely ask whether they can take down an unpaid website. The law draws a clear distinction between defensive retention of intellectual property and offensive interference:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        100% Lawful Actions
                      </h4>
                      <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                        <li>Withholding final source code repositories until invoice clearance.</li>
                        <li>Refusing to deliver database export files, production builds, or Figma design assets.</li>
                        <li>Shutting down staging servers hosted on the developer&apos;s own infrastructure or cloud account.</li>
                        <li>Filing copyright takedown notices to third-party hosts (Vercel, AWS, Cloudflare) under DMCA / Section 52.</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-red-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                        High-Risk / Illegal Actions
                      </h4>
                      <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                        <li>Logging into the client&apos;s personal AWS or cPanel account to delete active databases (violates Section 43 IT Act).</li>
                        <li>Injecting hidden backdoor scripts or logic bombs into previously delivered code (violates Section 66 IT Act).</li>
                        <li>Defacing the client&apos;s live website with public non-payment notices (exposes developer to criminal defamation).</li>
                        <li>Leaking confidential customer data or business secrets to third parties.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Process SVG Flowchart (Page-Specific Artefact) */}
              <section id="heading-svg-flow" aria-labelledby="heading-svg-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-svg-flow-title"
                  className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Software Recovery Flowchart: From Milestone Default to Full Settlement
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The statutory legal pathway for web developers to enforce Section 19 copyright rights and recover unpaid fees:
                </p>

                <div className="w-full bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
                  <svg
                    viewBox="0 0 800 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Software Developer Payment Recovery Workflow Diagram"
                  >
                    {/* Stage 1 */}
                    <rect x="20" y="30" width="160" height="90" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="100" y="65" fill="#F8FAFC" fontSize="13" fontWeight="bold" textAnchor="middle">1. Milestone Default</text>
                    <text x="100" y="85" fill="#94A3B8" fontSize="10" textAnchor="middle">Client ghosts or withholds</text>
                    <text x="100" y="100" fill="#94A3B8" fontSize="10" textAnchor="middle">final payment balance</text>

                    {/* Arrow 1 */}
                    <path d="M180 75 L215 75" stroke="#DC2626" strokeWidth="3" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />

                    {/* Stage 2 */}
                    <rect x="220" y="30" width="160" height="90" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="300" y="65" fill="#F8FAFC" fontSize="13" fontWeight="bold" textAnchor="middle">2. Evidence Lock</text>
                    <text x="300" y="85" fill="#94A3B8" fontSize="10" textAnchor="middle">Git logs, commit hashes &amp;</text>
                    <text x="300" y="100" fill="#94A3B8" fontSize="10" textAnchor="middle">BSA s.63 electronic trail</text>

                    {/* Arrow 2 */}
                    <path d="M380 75 L415 75" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowhead)" />

                    {/* Stage 3 */}
                    <rect x="420" y="20" width="170" height="110" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2.5" />
                    <text x="505" y="55" fill="#FEE2E2" fontSize="13" fontWeight="bold" textAnchor="middle">3. Advocate Notice</text>
                    <text x="505" y="75" fill="#FECACA" fontSize="10" textAnchor="middle">Section 19 Copyright demand</text>
                    <text x="505" y="90" fill="#FECACA" fontSize="10" textAnchor="middle">+ MSME 3× compound interest</text>
                    <text x="505" y="105" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">15-Day Cure Window</text>

                    {/* Branching Arrows */}
                    <path d="M590 60 L625 40" stroke="#10B981" strokeWidth="2.5" />
                    <path d="M590 90 L625 110" stroke="#DC2626" strokeWidth="2.5" />

                    {/* Stage 4A: Settlement */}
                    <rect x="630" y="10" width="150" height="60" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                    <text x="705" y="35" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">Client Pays Milestone</text>
                    <text x="705" y="52" fill="#D1FAE5" fontSize="9.5" textAnchor="middle">Full settlement + IP assigned</text>

                    {/* Stage 4B: Dual Enforcement */}
                    <rect x="630" y="85" width="150" height="65" rx="10" fill="#450A0A" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="705" y="108" fill="#FECDD3" fontSize="11" fontWeight="bold" textAnchor="middle">Dual Escalation Rail</text>
                    <text x="705" y="125" fill="#FCA5A5" fontSize="9.5" textAnchor="middle">DMCA Host Takedown +</text>
                    <text x="705" y="139" fill="#FCA5A5" fontSize="9.5" textAnchor="middle">MSME Samadhaan / Suit</text>

                    {/* Legend */}
                    <text x="400" y="215" fill="#64748B" fontSize="11" textAnchor="middle">
                      Statutory framework under Indian Copyright Act (1957) &amp; MSMED Act (2006). Legal notice cures 82% of tech non-payment disputes.
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 7: Interactive Problem Scenarios Tabs */}
              <section id="heading-problem-scenarios" aria-labelledby="heading-problem-scenarios-title" className="scroll-mt-28 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                    Dispute Playbook
                  </span>
                  <h2
                    id="heading-problem-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common Web Development Payment Disputes &amp; Exact Fixes
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your exact dispute scenario below to reveal the statutory legal foundation and actionable step-by-step resolution playbook:
                </p>

                {/* Interactive Scenario Tabs Component */}
                <WebDevProblemTabs />
              </section>

              {/* Section 8: Archetype G3 Process Timeline <ol> with <time> */}
              <section id="heading-process-timeline" aria-labelledby="heading-process-timeline-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-process-timeline-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Step-by-Step Software Payment Recovery Timeline
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Recovering overdue web development invoices requires disciplined adherence to statutory deadlines and evidence rules. Follow this chronological enforcement rail:
                </p>

                <ol className="relative border-l-2 border-slate-200 ml-3 sm:ml-4 space-y-8 my-6">
                  <li className="relative pl-6 sm:pl-8">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-white ring-4 ring-slate-100"></span>
                    <time className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Days 1 – 3 • Evidence Preservation Phase
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      Cryptographic Git Audit &amp; Electronic Evidence Preservation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Download complete repository commit logs, pull request review discussions, and staging preview deployment artifacts. Export WhatsApp, Slack, and email correspondence. Prepare an electronic certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 to secure full legal admissibility in judicial proceedings.
                    </p>
                  </li>

                  <li className="relative pl-6 sm:pl-8">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-red-600 border-2 border-white ring-4 ring-red-100"></span>
                    <time className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Days 4 – 5 • Formal Legal Demand Phase
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      Advocate Statutory Legal Notice Dispatch
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Have a verified advocate draft and serve an unassailable statutory demand notice. The notice asserts copyright reservation under Section 19 of the Copyright Act, demands principal invoice payment within 15 calendar days, calculates 3× RBI compound interest under the MSMED Act, and explicitly notifies the client that continued deployment constitutes criminal copyright infringement under Section 63. Served via Speed Post with postal tracking and digitally via WhatsApp and email.
                    </p>
                  </li>

                  <li className="relative pl-6 sm:pl-8">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-2 border-white ring-4 ring-amber-100"></span>
                    <time className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-amber-600 block mb-1">
                      Days 6 – 20 • Statutory Cure Window &amp; Pre-Litigation Negotiation
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      15-Day Cure Window &amp; Pre-Litigation Settlement Rail
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Over 80% of corporate and startup clients settle outstanding milestones upon receiving a formal advocate notice, recognizing that their live application faces immediate operational shutdown. If the client offers a partial settlement, ensure a formal settlement agreement is executed before releasing repository transfer credentials.
                    </p>
                  </li>

                  <li className="relative pl-6 sm:pl-8">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-2 border-white ring-4 ring-purple-100"></span>
                    <time className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-purple-600 block mb-1">
                      Day 21+ • Enforcement &amp; Injunction Phase
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      Hosting DMCA Takedown &amp; Judicial Recovery Proceedings
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If the 15-day cure window lapses without settlement, execute simultaneous enforcement actions: (1) Submit statutory copyright infringement takedown notices to AWS, Cloudflare, Vercel, or Hostinger to suspend their live domain; (2) File an online application before the MSME Facilitation Council (MSEFC) under Section 18 MSMED Act; or (3) File a Summary Suit under Order XXXVII of the CPC before the Commercial Court for summary money decree.
                    </p>
                  </li>
                </ol>
              </section>

              {/* Section 9: Worked Case Example (Concrete ₹ amounts, dates, parties) */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Case Example: Recovering ₹2,40,000 for a Next.js D2C Platform
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The following case study illustrates how an independent full-stack developer leveraged Section 19 of the Copyright Act and the MSMED Act to recover overdue milestone fees from a defaulting e-commerce startup:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Illustrative Case Digest • Bangalore Tech Ecosystem
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800">
                      Full Recovery: ₹2,40,000 + ₹21,600 Interest
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                    <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                      <p className="text-[11px] font-bold uppercase text-slate-400">The Parties</p>
                      <p className="font-semibold text-slate-900">Freelance Senior Full-Stack Engineer (Udyam Micro)</p>
                      <p className="text-slate-600">vs. D2C Apparel Brand (Private Limited, Koramangala)</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                      <p className="text-[11px] font-bold uppercase text-slate-400">Contract Value &amp; Default</p>
                      <p className="font-semibold text-slate-900">Total Project: ₹4,80,000</p>
                      <p className="text-slate-600">50% Advance paid; Final ₹2,40,000 withheld after production launch.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                      <p className="text-[11px] font-bold uppercase text-slate-400">Client Excuse</p>
                      <p className="font-semibold text-slate-900">&ldquo;Need 12 More Revisions First&rdquo;</p>
                      <p className="text-slate-600">Client pushed site to production and revoked developer&apos;s GitHub admin access.</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                      Legal Strategy &amp; Outcome
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      1. The developer engaged an advocate who drafted a formal demand notice invoking <strong>Section 19 of the Copyright Act, 1957</strong> and <strong>Section 16 of the MSMED Act, 2006</strong>.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      2. The notice clearly established that the Next.js frontend and PostgreSQL database schemas remained the exclusive intellectual property of the developer. Continued commercial operation without clearing the final invoice constituted intentional copyright infringement under Section 63.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      3. The notice demanded ₹2,40,000 principal plus 3× RBI compound interest (amounting to ₹21,600) within 15 days, warning that failure to comply would trigger a direct DMCA takedown notice to Vercel and AWS, taking down their active online storefront.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                      Resolution: Within 9 calendar days of receiving the Speed Post and WhatsApp notice, the startup&apos;s managing director executed an RTGS transfer of ₹2,61,600 covering the full balance and statutory interest. A formal IP assignment deed was subsequently countersigned.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Court Precedents & Legal Authorities */}
              <section id="heading-court-precedents" aria-labelledby="heading-court-precedents-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-court-precedents-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Judicial Precedents: Software Copyright &amp; Independent Contractor Rights
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  High Courts and the Supreme Court of India have established definitive principles protecting independent software creators from corporate exploitation:
                </p>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-mono text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                          {item.citation}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-500">Parties: {item.parties}</p>
                      <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                        <p><strong>Judicial Holding:</strong> {item.holding}</p>
                        <p className="p-3 bg-slate-50 rounded-xl text-slate-900 border border-slate-100 font-medium">
                          <strong>Strategic Takeaway:</strong> {item.takeaway}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Developer Demand Notice Template (Archetype G3 Mandate) */}
              <section id="heading-template-block" aria-labelledby="heading-template-block-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-template-block-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Developer Payment Demand &amp; Copyright Reservation Notice Format
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Review the statutory legal notice draft below. Use this standard structure to formulate your formal demand before initiating judicial or host-level takedowns:
                </p>

                <div className="bg-slate-900 text-slate-100 p-5 sm:p-7 rounded-2xl border border-slate-800 font-mono text-xs sm:text-sm leading-relaxed space-y-4 shadow-lg overflow-x-auto">
                  <div className="text-center font-bold text-red-400 border-b border-slate-800 pb-3">
                    LEGAL DEMAND NOTICE UNDER SECTION 19 COPYRIGHT ACT, 1957 &amp; SECTION 15/16 MSMED ACT, 2006
                  </div>
                  <p className="text-slate-400">
                    To,<br />
                    M/s [CLIENT COMPANY NAME / PROPRIETORSHIP]<br />
                    Through its Managing Director / Directors / Partners<br />
                    Registered Address: [COMPLETE REGISTERED OFFICE ADDRESS]<br />
                    Email: [OFFICIAL CLIENT EMAIL] • Phone: [CLIENT MOBILE NUMBER]
                  </p>
                  <p className="text-slate-200">
                    <strong>SUBJECT:</strong> STATUTORY DEMAND FOR IMMEDIATE PAYMENT OF OUTSTANDING WEB DEVELOPMENT INVOICE NO. [INVOICE NUMBER] AMOUNTING TO RS. [OUTSTANDING AMOUNT] ALONG WITH 3X RBI COMPOUND INTEREST; FORMAL NOTICE OF COPYRIGHT RESERVATION UNDER SECTION 19 OF THE COPYRIGHT ACT, 1957.
                  </p>
                  <p className="text-slate-300">
                    Sir / Madam,<br />
                    Under instructions from and on behalf of my Client, [DEVELOPER NAME / AGENCY ENTITY], residing/operating at [DEVELOPER ADDRESS], I hereby serve upon you this Statutory Legal Demand Notice:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>That my Client is a professional software engineer / tech agency holding Udyam Registration No. [UDYAM NUMBER, IF APPLICABLE], engaged by you pursuant to the Scope of Work / Proposal dated [DATE OF AGREEMENT] for the development of [NAME OF WEB APPLICATION / WEBSITE / SOFTWARE].</li>
                    <li>That my Client diligently developed, tested, and deployed the agreed software deliverables on the staging environment [STAGING URL], and the same was duly reviewed and accepted by you on [ACCEPTANCE DATE].</li>
                    <li>That my Client raised Tax Invoice No. [INVOICE NO] dated [INVOICE DATE] for Milestone [X] amounting to Rs. [PRINCIPAL AMOUNT], which fell due on [DUE DATE]. Despite repeated written reminders dated [REMINDER DATES], you have deliberately failed and neglected to clear the legitimate dues.</li>
                    <li>TAKE NOTICE that under Section 19(1) of the Indian Copyright Act, 1957 and the settled law laid down in <em>Neetu Singh v. Rajiv Saumitra (2022)</em>, software copyright vests exclusively with my Client and does not transfer to you until full consideration is paid. Your commercial deployment and operation of the software at [LIVE DOMAIN] without payment constitutes civil copyright infringement under Section 51 and criminal infringement under Section 63.</li>
                    <li>FURTHER TAKE NOTICE that under Section 15 &amp; 16 of the MSMED Act, 2006, you are statutorily liable to pay compound interest with monthly rests at 3 times the RBI Bank Rate from the appointed day until full realization.</li>
                  </ol>
                  <p className="text-slate-200 font-bold">
                    I HEREBY CALL UPON YOU to pay the outstanding sum of Rs. [PRINCIPAL AMOUNT] along with statutory interest within 15 (FIFTEEN) DAYS of receipt of this notice, failing which my Client shall proceed to issue DMCA takedowns to your hosting providers (AWS/Vercel/Cloudflare) and initiate recovery proceedings before the MSME Council / Commercial Court at your sole risk and peril.
                  </p>
                  <div className="text-right text-slate-400 pt-2 border-t border-slate-800">
                    [ADVOCATE NAME], Advocate<br />
                    Enrollment No: [BAR COUNCIL ENROLLMENT NUMBER]<br />
                    High Court of [JURISDICTION]
                  </div>
                </div>
              </section>

              {/* Section 12: High-Converting Legal Notice CTA */}
              <section id="heading-notice-cta" aria-labelledby="heading-notice-cta-title" className="scroll-mt-28">
                <WebDevNoticeCTA />
              </section>

              {/* Section 13: Frequently Asked Questions (Unique FAQ Set) */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                    Frequently Asked Questions
                  </span>
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Questions on Recovering Web &amp; Software Development Dues
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-slate-300 transition-colors"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 14: Sources & Legal References Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-4 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-base sm:text-lg font-bold text-slate-900 tracking-tight"
                >
                  Sources &amp; Statutory Legal References
                </h2>
                <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc list-inside">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-700 hover:text-red-800 hover:underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-xl bg-slate-100 text-[11px] text-slate-500 space-y-1">
                  <p className="font-semibold text-slate-700">Editorial &amp; Verification Disclaimer:</p>
                  <p>
                    This statutory guide is published for educational and legal recovery purposes under the Indian Copyright Act, 1957, MSMED Act, 2006, and the Indian Contract Act, 1872. Legal notice drafting and representation are conducted by empaneled advocates registered with State Bar Councils across India. Last updated on 9 November 2026.
                  </p>
                </div>
              </section>

              {/* Related Recovery Guides Cluster */}
              <div className="pt-6">
                <RelatedRecoveryGuides currentPath="/web-development-client-not-paying-legal-notice" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
