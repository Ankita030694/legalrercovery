import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import GovernmentContractorTableOfContents from "./GovernmentContractorTableOfContents";
import GovernmentContractorScenarioTabs from "./GovernmentContractorScenarioTabs";
import GovernmentContractorCTA from "./GovernmentContractorCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "PWD, Municipal, JJM & NHAI Contractor Bill Recovery Guide",
  description:
    "Completed JJM, PWD, or Municipal works with certified bills stuck for 'lack of funds'? Enforce Supreme Court Surya Constructions Writ Mandamus + interest.",
  alternates: {
    canonical: `${SITE_URL}/nhai-cpwd-pwd-railways-municipal-tender-payment-recovery-contractors`,
  },
  openGraph: {
    title: "PWD, Municipal, JJM & NHAI Contractor Bill Recovery Guide",
    description:
      "Completed JJM, PWD, or Municipal works with certified bills stuck for 'lack of funds'? Enforce Supreme Court Surya Constructions Writ Mandamus + interest.",
    url: `${SITE_URL}/nhai-cpwd-pwd-railways-municipal-tender-payment-recovery-contractors`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "PWD, Municipal, JJM and NHAI Contractor Bill Recovery Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PWD, Municipal, JJM & NHAI Contractor Bill Recovery Guide",
    description:
      "Completed JJM, PWD, or Municipal works with certified bills stuck for 'lack of funds'? Enforce Supreme Court Surya Constructions Writ Mandamus + interest.",
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
    title: "Code of Civil Procedure, 1908 (Section 80 — Mandatory 60-Day Notice to Government & Public Officers)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Constitution of India (Articles 226 & 300A — High Court Writ of Mandamus & Constitutional Right to Property)",
    url: "https://www.indiacode.nic.in/handle/123456789/15240",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Sections 9, 11, 21, 29A & 36 — Interim Relief, Appointment & Enforcement)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for e-MB & Portal Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "General Financial Rules, 2017 (Rules 130 & 132 — Sanction of Works & Budget Execution in Public Procurement)",
    url: "https://doe.gov.in/order-type/general-financial-rules",
  },
  {
    title: "Interest Act, 1978 (Section 3 — Power of Court to Allow Commercial Interest on Withheld Debts)",
    url: "https://www.indiacode.nic.in/handle/123456789/1802",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court: Government Cannot Evade Admitted MB Bills Citing Lack of Funds or Non-Release of Budget",
    parties: "M/s Surya Constructions v. State of U.P. & Ors.",
    citation: "(2019) 12 SCC 594, Supreme Court of India",
    date: "Judgment Dated 07 February 2019",
    facts:
      "The contractor completed civil construction works for a government department under a formal tender. The Executive Engineer certified the final Measurement Book (MB) and passed the bill. However, payment was withheld for years with the sole defense that the State Government had not released the budgetary grant or financial sanction to the disbursing division. The High Court dismissed the contractor's writ petition, directing them to file a 5-year civil suit.",
    holding:
      "Setting aside the High Court order, the Supreme Court held that where the state authority or municipality unequivocally admits the execution of work and the certified value in the Measurement Book, the plea of 'lack of budget or financial sanction' is completely untenable in law. The High Court has full jurisdiction under Article 226 of the Constitution to issue a Writ of Mandamus directing immediate disbursement along with interest, and relegating the contractor to an ordinary civil suit in undisputed cases is an error of law.",
    amount: "Doctrine Established: Admitted Public Works Dues Recoverable via Article 226 Mandamus",
    takeaway:
      "Contractors holding certified Measurement Books cannot be turned away with the excuse of 'grant not received from State/Centre'; High Courts can directly order treasury disbursement with interest under Article 226.",
  },
  {
    title: "Supreme Court: Presence of Arbitration Clause Does Not Oust High Court Writ Jurisdiction Under Article 226",
    parties: "Unitech Limited & Ors. v. Telangana State Industrial Infrastructure Corporation (TSIIC)",
    citation: "2021 SCC OnLine SC 99, Supreme Court of India",
    date: "Judgment Dated 17 February 2021",
    facts:
      "TSIIC withheld substantial admitted funds from Unitech arising out of an infrastructure development agreement. The state instrumentality argued that because the contract contained an arbitration clause, the High Court was barred under Article 226 from exercising writ jurisdiction and the developer must undergo multi-year arbitration.",
    holding:
      "A 3-Judge Bench of the Supreme Court held that the existence of an arbitration clause does not act as an absolute bar to the maintainability of a writ petition under Article 226. Where a state instrumentality acts arbitrarily, unreasonably, or contrary to the public law mandate of Article 14 by refusing to disburse admitted liability, High Courts are duty-bound to intervene and enforce payment.",
    amount: "Constitutional Precedent: State Arbitrariness in Withholding Dues Overrides Arbitration Bar",
    takeaway:
      "Even when standard CPWD, NHAI, or Railway tender agreements contain an arbitration clause, contractors can directly invoke Article 226 if departmental officers act with gross arbitrariness regarding admitted bills.",
  },
  {
    title: "Supreme Court: Departmental Delays and Budget Lapses Cannot Exonerate Government from Contract Liabilities",
    parties: "State of Uttar Pradesh & Ors. v. Harish Chandra & Co.",
    citation: "(1999) 1 SCC 63, Supreme Court of India",
    date: "Judgment Dated 17 November 1998",
    facts:
      "The State Government delayed payments to an infrastructure contractor, arguing that delays in obtaining administrative sanctions, legislative budget approvals, and departmental inter-division clearances exonerated the state from compensating the contractor for financing costs and interest.",
    holding:
      "The Supreme Court affirmed that an employer state department cannot plead its own administrative bureaucracy, inter-departmental delays, or budget lapse to escape contractual liabilities. Once works are measured and accepted, the state is bound by commercial equity and must compensate the contractor for commercial interest and damages incurred due to delayed disbursement.",
    amount: "Administrative Defense Quashed: Internal Budget Clearance Is No Shield Against Claims",
    takeaway:
      "Contractors can legally demand commercial interest on delayed payments even if the tender conditions contain generic departmental exemption clauses.",
  },
  {
    title: "Supreme Court: Maintainability of Writ Petition in Contractual Monetary Claims Against State Bodies",
    parties: "M/s ABL International Ltd. v. Export Credit Guarantee Corporation of India Ltd. (ECGC)",
    citation: "(2004) 3 SCC 553, Supreme Court of India",
    date: "Judgment Dated 18 December 2003",
    facts:
      "ECGC repudiated insurance and monetary claims arising from an international trade contract. The respondent claimed that monetary and contractual disputes could not be adjudicated under the extraordinary writ jurisdiction of Article 226.",
    holding:
      "The Supreme Court settled the law by ruling that a writ petition under Article 226 is maintainable in contractual matters involving the State or its instrumentalities. When money is withheld arbitrarily without valid factual controversy, the High Court can direct payment, eliminating the necessity of forcing the creditor into protracted civil litigation.",
    amount: "Landmark Jurisprudence: Monetary Relief Adjudicable via Public Law Writ Remedy",
    takeaway:
      "Where measurements and execution are not disputed on facts, the High Court has the constitutional authority to decree monetary recovery under public law.",
  },
];

const FAQS = [
  {
    question: "Can a government department legally withhold certified bills by claiming 'budget not received'?",
    answer:
      "No. The Supreme Court of India in M/s Surya Constructions v. State of U.P. (2019) 12 SCC 594 explicitly held that once works are executed and certified in the Measurement Book (MB), a government department or municipal corporation cannot withhold payment on the pretext that the State or Central Government has not released the budgetary grant. Inter-governmental funding or treasury token allocations are internal administrative matters that cannot extinguish the contractor's constitutional right to receive payment for completed work.",
  },
  {
    question: "What is a Section 80 CPC Notice and why is it mandatory before suing the Government?",
    answer:
      "Section 80 of the Code of Civil Procedure, 1908 mandates that no civil suit can be instituted against the Central Government, State Government, Railways, or a public officer in respect of an official act until the expiration of two months (60 days) after delivering a written statutory notice. Serving a Section 80 CPC notice delivers immense leverage: it puts the Principal Secretary, Chief Engineer, and District Collector on statutory notice, calculates commercial penal interest, and prevents the department from claiming lack of notice in subsequent court proceedings.",
  },
  {
    question: "Can an infrastructure contractor file a High Court Writ under Article 226 if the contract has an arbitration clause?",
    answer:
      "Yes. In Unitech Limited v. TSIIC (2021 SCC OnLine SC 99) and ABL International Ltd. (2004) 3 SCC 553, the Supreme Court confirmed that the presence of an arbitration clause does not oust the High Court's jurisdiction under Article 226 of the Constitution of India. Where the liability is admitted through certified Measurement Books, passing orders, or departmental letters, withholding payment constitutes arbitrary state action violating Article 14, entitling the contractor to seek a Writ of Mandamus.",
  },
  {
    question: "How do contractors recover pending Jal Jeevan Mission (JJM) water supply bills?",
    answer:
      "Jal Jeevan Mission (JJM) projects involve 50:50 matching grants between the Union Ministry of Jal Shakti and State Governments. Contractors frequently face delays when state finance departments do not release their counterpart funding. The recovery SOP involves: (1) extracting verified e-MB and Joint Inspection Sheets, (2) issuing a Section 80 CPC notice to the State Jal Nigam / Public Health Engineering Department (PHED) and Union Ministry, (3) issuing PFMS escalation intimations, and (4) filing an Article 226 Writ Petition citing Surya Constructions to obtain a High Court directive for treasury token release within 4 to 8 weeks.",
  },
  {
    question: "What should a contractor do if the department threatens blacklisting or debarment after demanding dues?",
    answer:
      "Retaliatory threats of blacklisting or debarment when a contractor demands legitimate dues are illegal and unconstitutional. Under Supreme Court rulings in Kulja Industries Ltd. and Gorkha Security Services, blacklisting causes 'civil death' and cannot be used as coercive leverage against commercial claims. Contractors can immediately file an Article 226 petition in the High Court to stay any debarment proceedings and obtain orders compelling the department to deposit the admitted bill value in court.",
  },
  {
    question: "Can government contractors claim interest on delayed payments if the tender says 'no interest payable'?",
    answer:
      "Yes. Generic 'no interest' clauses in government tenders are routinely challenged and overcome. Courts and arbitral tribunals hold that when the delay in payment is caused solely by departmental defaults (such as delayed budget approval or administrative inaction), the contractor is entitled to commercial interest under Section 3 of the Interest Act, 1978 and Section 31(7) of the Arbitration Act. Furthermore, if the contractor is registered as an MSME prior to contract execution, Section 16 of the MSMED Act mandates 3x RBI compound monthly interest, which statutorily overrides contrary tender terms.",
  },
  {
    question: "How does the Dispute Resolution Committee (DRC) work under CPWD GCC Clause 25?",
    answer:
      "Under Clause 25 of the CPWD General Conditions of Contract (GCC), any dispute must first be referred to the Dispute Resolution Committee (DRC) within statutory time limits (typically 30 to 60 days). However, if the DRC fails to give its recommendation within the stipulated period, or if either party is dissatisfied with the decision, departmental conciliation is legally exhausted. The contractor can immediately serve a notice under Section 21 of the Arbitration and Conciliation Act, 1996 and approach the High Court under Section 11(6) for the appointment of an independent sole arbitrator, bypassing biased internal departmental rosters pursuant to Perkins Eastman.",
  },
];

export default function GovernmentContractorPaymentRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository. Attributing author to legal recovery advocate panel.
  const pageHeadline =
    "Government Department Saying 'Budget/Grant Not Received' on Certified Bills? Section 80 CPC, High Court Writ (*Surya Constructions*) & Arbitration Guide";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageHeadline,
    description:
      "Completed JJM, PWD, or Municipal works with certified bills stuck for 'lack of funds'? Enforce Supreme Court Surya Constructions Writ Mandamus + interest.",
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: "2026-11-16T00:00:00+05:30",
    dateModified: "2026-11-16T00:00:00+05:30",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      affiliation: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/nhai-cpwd-pwd-railways-municipal-tender-payment-recovery-contractors`,
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Recover Unpaid Government & Municipal Contractor Bills",
    description:
      "Statutory 5-step legal protocol for civil, road, water supply, and infrastructure contractors to recover admitted bills withheld by government departments citing budget non-availability.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Secure Admission & Reconcile Measurement Books (MB)",
        text: "Obtain certified extracts of the Measurement Book (MB / e-MB), passing orders, test-check certificates from Sub-Divisional Officers and Divisional Accounts Officers, and written acknowledgments confirming work completion and bill certification.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Serve 60-Day Section 80 CPC Statutory Notice",
        text: "Issue a comprehensive statutory legal notice under Section 80 CPC to the Principal Secretary, Chief Engineer, and District Collector, dismantling the budget unavailability defense and claiming 18% commercial penal interest.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "File High Court Article 226 Writ Petition for Mandamus",
        text: "For admitted undisputed bills, invoke High Court writ jurisdiction under Article 226 citing Supreme Court Surya Constructions and Unitech precedents to secure an immediate directive for treasury token release.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Exhaust DRC Conciliation & Invoke Section 21 Arbitration",
        text: "Where departmental committees (DRC/DRB under CPWD Clause 25 or NHAI GCC) stall conciliation, formally serve a Section 21 Arbitration Act notice demanding an independent arbitral tribunal.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Section 11 Arbitrator Appointment & Award Execution",
        text: "Petition the High Court under Section 11(6) to eliminate unilateral departmental arbitral panels per Perkins Eastman, secure a binding award, and execute via Section 36 CPC Order XXI attachment.",
      },
    ],
  };

  const faqSchema = {
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

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Construction & EPC Recovery",
        item: `${SITE_URL}/industries/construction-epc-contractor-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Government Contractor Bill Recovery",
        item: `${SITE_URL}/nhai-cpwd-pwd-railways-municipal-tender-payment-recovery-contractors`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Supreme Court *Surya Constructions* Doctrine</span>
            <span>&bull;</span>
            <span>Section 80 CPC Notice</span>
            <span>&bull;</span>
            <span>Article 226 Writ Mandamus</span>
          </div>

          {/* Exact PDF H1 Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Government Department Saying &apos;Budget/Grant Not Received&apos; on Certified Bills? Section 80 CPC, High Court Writ (*Surya Constructions*) &amp; Arbitration Guide
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Statutory Answer
            </span>
            Under the landmark Supreme Court ruling in <em>M/s Surya Constructions v. State of U.P.</em> (2019) 12 SCC 594, once civil works are certified in departmental Measurement Books, the defense of &quot;budget not received or grant pending from State/Centre&quot; is legally void. When government bodies withhold admitted dues, contractors can bypass multi-year civil suits by serving a 60-day Section 80 CPC statutory notice and securing High Court Writ Mandamus disbursement under Article 226 with commercial interest. Read our complete{" "}
            <Link
              href="/industries/construction-epc-contractor-recovery"
              className="text-red-400 underline font-bold hover:text-red-300"
            >
              Construction &amp; EPC Contractor Recovery Playbook
            </Link>{" "}
            for complete multi-tier infrastructure recovery strategies.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                &#8377;10L&ndash;&#8377;50Cr+
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                Stuck Tender Dues Scope
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                60 Days
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                Section 80 CPC Notice Window
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                Art. 226 Writ
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                Mandamus on Admitted Dues
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-lg sm:text-2xl font-black text-red-400">
                12%&ndash;18% p.a.
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                Commercial Penal Interest
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Navigation */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Construction & EPC Recovery",
                href: "/industries/construction-epc-contractor-recovery",
              },
              {
                label: "Government Contractor Bill Recovery",
                href: "/nhai-cpwd-pwd-railways-municipal-tender-payment-recovery-contractors",
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sticky Sidebar TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column: Sticky Table of Contents */}
          <GovernmentContractorTableOfContents />

          {/* Right Column: Editorial Sections */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  The Public Procurement Bottleneck
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                The &apos;Budget Not Received&apos; Trap Facing Government Contractors
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                Across India, thousands of civil engineering, road, bridge, water supply, and municipal contractors find their working capital paralyzed after successfully executing public infrastructure projects. From the State Public Works Department (PWD) and Central PWD (CPWD) to the National Highways Authority of India (NHAI), Indian Railways, and Jal Jeevan Mission (JJM) State Water &amp; Sanitation Missions (SWSM), a familiar bureaucratic wall greets the contractor upon bill submission.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                The Executive Engineer (EE), Assistant Engineer (AE), or Divisional Accounts Officer (DAO) stamps and signs the Measurement Book (MB), acknowledges that the project is executed satisfactorily, and issues passing vouchers. Yet months turn into years with no disbursement. When the contractor seeks payment, departmental officers shrug and state: <em>&quot;The budget has not been released by the State Finance Department,&quot; &quot;Central matching grants for Jal Jeevan Mission have not arrived,&quot;</em> or <em>&quot;If you have a grievance, go file a 5-year civil suit in the local court.&quot;</em>
              </p>
              <div className="p-4 sm:p-5 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl my-5">
                <p className="text-xs sm:text-sm text-amber-900 font-semibold mb-1">
                  The Bureaucratic Bluff: Relegating Creditors to Decades of Civil Backlog
                </p>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Government departments routinely exploit contractors&apos; fear of court delays. An ordinary civil money suit takes 4 to 8 years, requires ad-valorem court fees of up to 5% to 10% upfront, and risks political retaliation. However, established Supreme Court jurisprudence provides high-velocity enforcement routes that bypass ordinary civil suits completely.
                </p>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                If your enterprise is dealing with unpaid Running Account (RA) bills or unreleased security deposits, explore our targeted guides on{" "}
                <Link
                  href="/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Unpaid RA Bills &amp; Measurement Book Certification
                </Link>
                ,{" "}
                <Link
                  href="/retention-money-recovery-after-defect-liability-period-dlp-expiry"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Retention Money Recovery Post-DLP Expiry
                </Link>
                , and our interactive{" "}
                <Link
                  href="/tools/construction-retention-dlp-escalation-claim-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Construction Retention &amp; Escalation Calculator
                </Link>
                . For formal statutory invocation, review our{" "}
                <Link
                  href="/templates/construction-ra-bill-retention-money-arbitration-notice"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Construction RA Bill Arbitration Notice Format
                </Link>
                .
              </p>
            </section>

            {/* Section 2: Statutory Hook & Surya Constructions */}
            <section
              id="heading-statutory-defense"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  Supreme Court Constitutional Doctrine
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Why &apos;Lack of Budget&apos; Is Legally Void: The Surya Constructions Mandate
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                The foundational legal breakthrough for public works contractors was delivered by the Supreme Court of India in <strong>M/s Surya Constructions v. State of U.P. &amp; Ors. (2019) 12 SCC 594</strong>. In that case, a government contractor completed civil development works for the Uttar Pradesh Jal Nigam. The departmental engineers certified that the work was executed satisfactorily and recorded the liability in the Measurement Book.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                Despite clear certification, the department refused payment for several years, arguing that funds had not been allocated or released by the State Government. When the contractor filed an Article 226 Writ Petition, the Allahabad High Court dismissed it, observing that monetary claims arising under a contract cannot be recovered through a writ petition and that the contractor must institute a civil suit.
              </p>

              {/* Landmark Callout */}
              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 my-6 border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Supreme Court In Surya Constructions (2019) 12 SCC 594
                  </p>
                </div>
                <blockquote className="text-xs sm:text-sm md:text-base italic text-slate-200 leading-relaxed border-l-2 border-red-500 pl-4 my-2">
                  &quot;It is well settled that where the liability is admitted and there is no dispute as to the amount payable, the High Court in exercise of its jurisdiction under Article 226 of the Constitution of India can certainly direct the State or its authorities to make payment... The plea that funds have not been released by the State Government cannot be a valid defense to deny the contractor their rightful payment for work duly completed.&quot;
                </blockquote>
                <p className="text-xs text-slate-400 mt-3">
                  Holding confirmed in <em>Unitech Limited v. TSIIC</em> (2021 SCC OnLine SC 99) and <em>ABL International Ltd.</em> (2004) 3 SCC 553.
                </p>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                The 3 Core Pillars of the Supreme Court Mandate:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    1. Admitted Liability Rule
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Once the Measurement Book (MB) is certified by the Executive Engineer, the claim transitions from a disputed contractual claim to an admitted sovereign debt.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    2. Internal Budget Shield Rejected
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Grant sharing, legislative supplementary budget approvals, and treasury token clearances are internal departmental workflows that cannot bind or prejudice the contractor.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    3. Writ of Mandamus Enforceability
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    High Courts possess unfettered constitutional power under Article 226 to issue a Writ of Mandamus ordering the Finance Secretary and Disbursing Officer to release funds within weeks.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, under Rules 130 and 132 of the General Financial Rules (GFR) 2017, no public authority is legally permitted to tender or execute works without prior administrative approval and expenditure sanction. Therefore, when a department asserts that &quot;budget is not available,&quot; it is either admitting an illegal tender award or misrepresenting administrative bookkeeping. In either case, the contractor is entitled to immediate relief.
              </p>
            </section>

            {/* Section 3: Statutory Remedy Matrix */}
            <section
              id="heading-remedy-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  Comparative Forum Analysis
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Government Contractor Recovery Remedy Matrix: Comparing Legal Paths
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                When public authorities default on certified tender dues, contractors must evaluate their recovery options across speed, cost, evidentiary burden, and judicial finality:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5 sm:p-4">Recovery Forum / Mechanism</th>
                      <th className="p-3.5 sm:p-4">Governing Statute / Hook</th>
                      <th className="p-3.5 sm:p-4">Timeline to Recovery</th>
                      <th className="p-3.5 sm:p-4">Court Fee / Upfront Cost</th>
                      <th className="p-3.5 sm:p-4">Optimal Scenario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        High Court Article 226 Writ Petition (Mandamus)
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Constitution Art. 226 read with <em>Surya Constructions</em> &amp; <em>Unitech</em>
                      </td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">
                        2 to 6 Months
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Nominal Fixed Writ Court Fee (&#8377;250&ndash;&#8377;1,000)
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Admitted Measurement Books (MB) where department claims &quot;budget constraint&quot;
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        Section 80 CPC Notice + Commercial Suit
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Code of Civil Procedure, 1908 (s. 80, Order VII &amp; XXI)
                      </td>
                      <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">
                        12 to 24 Months (Commercial Court)
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Ad-valorem Court Fee (1% to 8% depending on State)
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Disputed variation claims, extra items, or where writ jurisdiction is declined
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        CPWD Clause 25 / NHAI DRB Conciliation
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Standard GCC Clause 25 / NHAI EPC Model Schedule
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700 font-semibold">
                        60 to 90 Days (Statutory Limit)
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Nominal Departmental Filing Fee
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Mandatory contractual pre-condition before invoking arbitration
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        Institutional Fast-Track Arbitration
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Arbitration Act, 1996 (ss. 11, 21, 29A &amp; 36)
                      </td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">
                        12 Months (Statutory Mandate)
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Arbitrator Fees per 4th Schedule (Shared)
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700">
                        Price escalation, prolongation damages, and wrongful Liquidated Damages (LD)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Strategic Note:</strong> Learn more about preparing statutory notices in our dedicated analysis of{" "}
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Section 80 CPC Notice Requirements &amp; Format
                  </Link>
                  , or explore broader recovery remedies at{" "}
                  <Link
                    href="/recovery/contractor-payment"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Contractor Payment &amp; Project Dues Recovery in India
                  </Link>
                  . If you are an unpaid tier-2 contractor, see{" "}
                  <Link
                    href="/subcontractor-payment-recovery-india"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Subcontractor Payment Recovery Against Main Contractors
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 4: Decision Tree Flowchart */}
            <section
              id="heading-decision-flowchart"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  Operational Workflow Architecture
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Operational Decision Tree: From Withheld Bill to Bank Disbursement
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Follow this sequential statutory roadmap to determine whether your recovery should proceed via immediate Article 226 High Court Writ Mandamus or institutional arbitration under Section 21:
              </p>

              {/* Hand-authored SVG Architecture Flowchart (Desktop/Tablet) */}
              <div className="hidden md:block w-full bg-slate-950 p-6 rounded-2xl border border-slate-800 my-6 shadow-xl">
                <div className="text-center mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-red-400 bg-red-950/60 px-3 py-1 rounded-full border border-red-800/60">
                    Statutory Recovery Escalation Pipeline
                  </span>
                </div>
                <svg
                  viewBox="0 0 880 340"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={880}
                  height={340}
                  aria-label="Government Contractor Payment Recovery Operational Decision Tree"
                >
                  {/* Step 1 */}
                  <rect x="20" y="40" width="180" height="100" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="110" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1: ADMISSION</text>
                  <text x="110" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Reconcile e-MB</text>
                  <text x="110" y="110" textAnchor="middle" fill="#94A3B8" fontSize="10">Secure Passing Order &amp;</text>
                  <text x="110" y="124" textAnchor="middle" fill="#94A3B8" fontSize="10">DAO Measurement Extract</text>

                  {/* Arrow 1 to 2 */}
                  <path d="M200 90 L240 90" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                  {/* Decision Diamond / Box 2 */}
                  <rect x="240" y="40" width="180" height="100" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="330" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 2: 60-DAY NOTICE</text>
                  <text x="330" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Section 80 CPC Notice</text>
                  <text x="330" y="110" textAnchor="middle" fill="#94A3B8" fontSize="10">Served on Secretary &amp;</text>
                  <text x="330" y="124" textAnchor="middle" fill="#94A3B8" fontSize="10">Demand 18% Commercial Int.</text>

                  {/* Split Arrows */}
                  <path d="M420 70 L480 70" stroke="#10B981" strokeWidth="3" />
                  <path d="M420 110 L480 110 L480 200 L500 200" stroke="#F59E0B" strokeWidth="3" />

                  {/* Branch A: Undisputed / Admitted (Writ Mandamus) */}
                  <rect x="480" y="20" width="180" height="100" rx="12" fill="#064E3B" stroke="#059669" strokeWidth="2" />
                  <text x="570" y="48" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">PATH A: UNDISPUTED</text>
                  <text x="570" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">High Court Art. 226</text>
                  <text x="570" y="88" textAnchor="middle" fill="#D1FAE5" fontSize="10">Writ of Mandamus citing</text>
                  <text x="570" y="104" textAnchor="middle" fill="#D1FAE5" fontSize="10">Surya Constructions (2-4 mo)</text>

                  {/* Branch B: Disputed / Technical Extra Items (Arbitration) */}
                  <rect x="500" y="150" width="180" height="100" rx="12" fill="#451A03" stroke="#D97706" strokeWidth="2" />
                  <text x="590" y="178" textAnchor="middle" fill="#FCD34D" fontSize="11" fontWeight="bold">PATH B: DISPUTED / ESCALATION</text>
                  <text x="590" y="198" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Section 21 Arbitration</text>
                  <text x="590" y="218" textAnchor="middle" fill="#FEF3C7" fontSize="10">Bypass biased panel via</text>
                  <text x="590" y="234" textAnchor="middle" fill="#FEF3C7" fontSize="10">High Court s.11(6) Judge</text>

                  {/* Final Destination Arrow */}
                  <path d="M660 70 L720 70 L720 120 L740 120" stroke="#10B981" strokeWidth="3" />
                  <path d="M680 200 L720 200 L720 160 L740 160" stroke="#F59E0B" strokeWidth="3" />

                  {/* Stage 4 Final Box */}
                  <rect x="740" y="90" width="120" height="100" rx="12" fill="#1E1B4B" stroke="#6366F1" strokeWidth="2" />
                  <text x="800" y="125" textAnchor="middle" fill="#A5B4FC" fontSize="11" fontWeight="bold">DISBURSEMENT</text>
                  <text x="800" y="145" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Treasury Token</text>
                  <text x="800" y="165" textAnchor="middle" fill="#C7D2FE" fontSize="10">PFMS / Bank Payout</text>

                  {/* Marker definitions */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Process Cards */}
              <div className="md:hidden space-y-3 my-4">
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    Step 1: Measurement Book Audit
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    Extract e-MB &amp; Passing Order
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Obtain certified Measurement Book entries, SDO test check certificates, and written acknowledgments confirming physical execution.
                  </p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    Step 2: Section 80 CPC Notice
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    60-Day Statutory Notice to Secretary &amp; CE
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Serve notice under Section 80 CPC dismantling the &quot;budget not received&quot; defense and putting personal accountability on disbursing officers with 18% interest.
                  </p>
                </div>
                <div className="p-4 bg-emerald-950 text-white rounded-xl border border-emerald-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Step 3A: High Court Writ Mandamus (Undisputed)
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    Article 226 Writ Petition Under *Surya Constructions*
                  </p>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    Where liability is admitted in the MB, secure an expedited High Court order commanding the State Finance Department to release treasury tokens within 4 to 8 weeks.
                  </p>
                </div>
                <div className="p-4 bg-amber-950 text-white rounded-xl border border-amber-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Step 3B: Section 21 Arbitration (Disputed Extra Items)
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    High Court Section 11(6) Independent Arbitrator
                  </p>
                  <p className="text-xs text-amber-200 leading-relaxed">
                    Exhaust DRC/DRB conciliation and petition the High Court to appoint an independent sole arbitrator, bypassing biased internal departmental rosters.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-operational-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  Real-World Failure Modes
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Commercial Failure Modes in Public Infrastructure Contracts
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Explore the operational strategies, Supreme Court precedents, and immediate advocate counter-actions for 4 major public sector payment withholding scenarios:
              </p>

              <GovernmentContractorScenarioTabs />
            </section>

            {/* Section 6: Worked Financial Ledger */}
            <section
              id="heading-financial-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  06
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  Numerical Quantum Analysis
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Worked Financial Ledger: &#8377;4.85 Crore Jal Jeevan Mission Default
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                To understand the compounding financial cost of waiting for departmental &quot;budget allocations,&quot; consider a representative Class-I infrastructure contractor who executed a &#8377;4.85 Crore rural piped water supply package under the Jal Jeevan Mission (JJM):
              </p>

              {/* Financial Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 my-5">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5 sm:p-4">Claim Component / Financial Exposure</th>
                      <th className="p-3.5 sm:p-4">Basis &amp; Statutory Authority</th>
                      <th className="p-3.5 sm:p-4 text-right">Passive Delay (18 Mos)</th>
                      <th className="p-3.5 sm:p-4 text-right">Advocate Writ Recovery</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        Principal Certified MB Value
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-600">
                        Passed RA Bills &amp; Final Measurement Book Extracts
                      </td>
                      <td className="p-3.5 sm:p-4 text-right font-mono text-slate-900">
                        &#8377;4,85,00,000
                      </td>
                      <td className="p-3.5 sm:p-4 text-right font-mono text-emerald-700 font-bold">
                        &#8377;4,85,00,000
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        Commercial Interest (12% p.a. for 18 Months)
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-600">
                        *Surya Constructions* &amp; Interest Act, 1978 (s. 3)
                      </td>
                      <td className="p-3.5 sm:p-4 text-right font-mono text-red-600">
                        &#8377;0 (Unclaimed Loss)
                      </td>
                      <td className="p-3.5 sm:p-4 text-right font-mono text-emerald-700 font-bold">
                        &#8377;87,30,000
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        Bank Guarantee Prolongation &amp; Margin Costs
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-600">
                        PBG Commission (2% p.a.) + 100% Cash Margin Lock-in
                      </td>
                      <td className="p-3.5 sm:p-4 text-right font-mono text-red-600">
                        -&#8377;14,55,000 (Sunk Cost)
                      </td>
                      <td className="p-3.5 sm:p-4 text-right font-mono text-emerald-700 font-bold">
                        Recovered / BG Discharged
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                        Site Overhead &amp; Machinery Idling Losses
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-600">
                        Contract Act Section 73 (*Hudson / Emden Formula*)
                      </td>
                      <td className="p-3.5 sm:p-4 text-right font-mono text-red-600">
                        -&#8377;24,25,000 (Absorbed)
                      </td>
                      <td className="p-3.5 sm:p-4 text-right font-mono text-emerald-700 font-bold">
                        &#8377;24,25,000
                      </td>
                    </tr>
                    <tr className="bg-slate-900 text-white font-bold">
                      <td className="p-3.5 sm:p-4" colSpan={2}>
                        Total Net Realization / Recoverable Quantum
                      </td>
                      <td className="p-3.5 sm:p-4 text-right font-mono text-red-400">
                        &#8377;4,46,20,000 (Eroded)
                      </td>
                      <td className="p-3.5 sm:p-4 text-right font-mono text-emerald-400 text-base">
                        &#8377;5,96,55,000 (+&#8377;1.50 Cr Gain)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <p className="text-xs sm:text-sm text-emerald-900 font-semibold mb-1">
                  The Cost of Inaction: How Bureaucratic Delays Destroy Profit Margins
                </p>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  A contractor who passively waits 18 months for &quot;grants to arrive&quot; suffers severe financial bleeding through non-interest inflation erosion, recurring bank guarantee renewal commissions, and blocked credit limits. Enforcing High Court writ orders not only secures the principal &#8377;4.85 Crore, but captures over &#8377;87 Lakh in judicial interest and discharges trapped bank guarantees.
                </p>
              </div>
            </section>

            {/* Section 7: Supreme Court Precedents */}
            <section
              id="heading-supreme-court-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  07
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  Judicial Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Landmark Supreme Court &amp; High Court Precedents on Public Works Dues
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                When drafting Section 80 CPC notices or petitioning the High Court under Article 226, citing authoritative Supreme Court precedents completely neutralizes the department&apos;s routine defense objections:
              </p>

              <div className="space-y-6">
                {COURT_PRECEDENTS.map((prec, i) => (
                  <div
                    key={i}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-slate-100 gap-1">
                      <p className="text-base sm:text-lg font-bold text-slate-900">
                        {prec.parties}
                      </p>
                      <span className="text-xs font-mono text-[#DC2626] font-semibold">
                        {prec.citation}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium mb-3">
                      {prec.title} &bull; {prec.date}
                    </p>
                    <div className="space-y-2 mb-3">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Facts of the Dispute:{" "}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-700">
                          {prec.facts}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                          Judicial Holding:{" "}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-800 font-medium">
                          {prec.holding}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-red-50/70 border border-red-100 rounded-xl mt-3">
                      <p className="text-[11px] font-bold text-slate-900">
                        Contractor Takeaway:{" "}
                        <span className="font-normal text-slate-700">
                          {prec.takeaway}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: BSA 2023 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  08
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  Evidentiary Architecture
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Digital Evidence &amp; BSA 2023 Section 63 Certification for Contractors
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</strong>, electronic records generated from government procurement portals, e-Measurement Books, and digital treasury communications are fully admissible in court provided they are accompanied by a compliant electronic certificate.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Assemble the following 6-point evidentiary dossier before dispatching statutory notices or filing writ petitions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      Certified Measurement Book (MB / e-MB) Extracts
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Signed copies of physical Measurement Books or hash-verified digital exports from State PWD/CPWD ERP portals showing itemized quantities recorded by the Junior Engineer (JE) and test-checked by the SDO/EE.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      Divisional Passing Orders &amp; Bill Vouchers
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Passing orders endorsed by the Divisional Accounts Officer (DAO) and Executive Engineer confirming that the voucher is verified, statutory deductions (TDS, GST-TDS, Labour Cess) computed, and queued for disbursement.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      PFMS &amp; GeM Portal Payment Logs
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Timestamped status printouts from the Public Financial Management System (PFMS), State IFMS Treasury portals, or GeM CRAC (Consignee Receipt and Acceptance Certificate) indicating voucher generation and budget queue status.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      4
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      Written Departmental Budget Admissions
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Official letters, meeting minutes (MoM), and internal notes obtained via RTI or communications wherein the Chief Engineer or Executive Engineer admits that bills are pending exclusively due to &quot;fund non-availability from Government.&quot;
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      5
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      Joint Inspection &amp; Completion Certificates
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Provisional Completion Certificates (PCC), Final Handover Certificates, and Third-Party Quality Inspection (TPI) agency sign-offs establishing that works meet technical specifications and no defect liability claims exist.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      6
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      BSA Section 63 Electronic Evidence Certificate
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Formal statutory affidavit signed by the contractor&apos;s authorized IT/Commercial Head certifying the integrity, server hash, and uninterrupted system operation of devices containing emails, WhatsApp messages, and portal PDFs.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  Practical Clarifications
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions on Government Tender Payment Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct answers to critical questions faced by Class-I, road, water supply, and municipal contractors across India:
              </p>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 open:bg-white open:shadow-xs transition-colors"
                  >
                    <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-xs sm:text-sm md:text-base">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-mono text-lg shrink-0 ml-2 group-open:rotate-45 transition-transform duration-200">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Sources */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  Verified Legislative Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Statutory Framework, Bare Act Citations &amp; Official References
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                All legal principles, limitation timelines, and constitutional powers outlined in this recovery guide are derived directly from official government repositories and primary statutory bare acts:
              </p>

              <div className="space-y-3">
                {PRIMARY_SOURCES.map((src, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">
                      {src.title}
                    </p>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-xs font-bold text-[#DC2626] hover:underline shrink-0 inline-flex items-center gap-1"
                    >
                      Official Source &rarr;
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-slate-100/80 rounded-xl text-xs text-slate-500 leading-relaxed">
                <p>
                  <strong>Disclaimer &amp; Professional Attribution:</strong> This guide is authored for institutional infrastructure contractors, EPC promoters, and commercial heads by the dispute resolution panel at LegalRecovery.in and AMA Legal Solutions (Advocate Anuj Anand Malik, Bar Council of Delhi). Content is published for statutory awareness and litigation readiness. Specific public tender disputes require tailored evaluation of General Conditions of Contract (GCC), Special Conditions (SCC), and Measurement Book records.
                </p>
              </div>
            </section>

            {/* Dual B2B Conversion Funnel CTAs */}
            <div className="pt-4">
              <GovernmentContractorCTA />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Outside Main */}
      <RelatedRecoveryGuides currentPath="/nhai-cpwd-pwd-railways-municipal-tender-payment-recovery-contractors" />
    </div>
  );
}
