import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import Section80NoticeCTA from "./Section80NoticeCTA";
import Section80TableOfContents from "./Section80TableOfContents";
import Section80ScenarioTabs from "./Section80ScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Section 80 CPC Notice to Government: Format & Rules",
  description:
    "Claims against a government department need a Section 80 CPC notice first. Contents, the 2-month wait, exceptions and a format.",
  alternates: {
    canonical: `${SITE_URL}/law/section-80-cpc-notice-to-government`,
  },
  openGraph: {
    title: "Suing the Government or a PSU? Mandatory Section 80 CPC Notice Rules & Format",
    description:
      "Statutory guide to serving a Section 80 CPC notice before suing a Central or State Government department, Railways, or public officer: 60-day waiting period, designated addressees, Section 80(2) urgent leave, and notice format.",
    url: `${SITE_URL}/law/section-80-cpc-notice-to-government`,
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
    title: "Code of Civil Procedure, 1908 (Act No. 5 of 1908) — Section 79 (Suits by or against Government), Section 80 (Notice) & Order XXVII",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Limitation Act, 1963 (Act No. 36 of 1963) — Section 15(2) (Exclusion of statutory notice period in computing limitation)",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title: "Supreme Court of India Benchmark Judgment: Bihari Chowdhary & Anr. v. State of Bihar & Ors., (1984) 2 SCC 627",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Supreme Court of India Ruling on Section 80(3) Substantial Compliance: Ghanshyam Dass & Ors. v. Dominion of India, (1984) 3 SCC 46",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Sections 15–18 & Section 24 (Overriding Effect on Government Tenders)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records, e-Tenders, GeM CRAC & Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Benchmark on Mandatory 2-Month Waiting Period Under Section 80(1) CPC",
    parties: "Bihari Chowdhary & Anr. v. State of Bihar & Ors.",
    citation: "(1984) 2 SCC 627, Supreme Court of India",
    date: "Judgment Dated 20 March 1984",
    facts:
      "The appellants instituted a civil suit involving immovable property against the State of Bihar after issuing a notice under Section 80 CPC, but filed the plaint in court prior to the expiration of the statutory two-month period from the date of delivery of the notice. The trial court and the Patna High Court held that the suit was premature and unsustainable in law.",
    holding:
      "A 3-Judge Bench of the Supreme Court affirmed that the language of Section 80(1) CPC is imperative and admits of no exception (save where urgent leave is granted under Section 80(2)). A suit instituted before the expiry of two months next after notice has been delivered is barred by law, compelling the court to reject the plaint under Order VII Rule 11(d) CPC. The Court explained that the legislative public policy behind Section 80 is to grant the Government two full months to scrutinize the claim through its law officers and settle just demands without wasting public money on litigation.",
    amount: "Plaint Prematurely Filed Before 60 Days Barred Under Order VII Rule 11(d) CPC",
    takeaway:
      "Never file a regular recovery suit against a Central or State Government department on Day 45 or Day 58 after serving your Section 80 notice. Count 60 clear days from the postal delivery date recorded on the India Post acknowledgment card before presenting the plaint.",
  },
  {
    title: "Supreme Court 3-Judge Ruling Against Hyper-Technical Rejection of Section 80 Notices",
    parties: "Ghanshyam Dass & Ors. v. Dominion of India & Ors.",
    citation: "(1984) 3 SCC 46, Supreme Court of India",
    date: "Judgment Dated 19 March 1984",
    facts:
      "A military contractor supplied charcoal to the Military Authorities at Agra under a written government contract and raised bills for escalated contractual rates. Before suing for unpaid dues, the contractor served a detailed Section 80 CPC notice during his lifetime, but died before filing the suit. When his legal heirs instituted the recovery suit, the Government argued that the notice was invalid because the heirs had not served a fresh Section 80 notice in their own names.",
    holding:
      "The Supreme Court reversed the High Court and decreed the contractor's claim logic, holding that a Section 80 CPC notice must not be read pedantically like a statute or strict pleading. Highlighting the 1976 insertion of Section 80(3) CPC, the Bench held that as long as the notice substantially informs the Government of the nature of the claim, the cause of action, and the relief sought so as to enable investigation, technical defects or hyper-technical objections by state counsel must be rejected.",
    amount: "Full Contractual Escalation Claim Restored for Adjudication on Merits",
    takeaway:
      "Government departments frequently instruct state pleaders to nitpick clerical errors in a vendor's notice. Under Section 80(3) CPC and Ghanshyam Dass, your suit cannot be dismissed for minor errors in description so long as the claimant's identity, cause of action, and demanded sum were clearly communicated.",
  },
  {
    title: "Supreme Court Verdict on Waiver of Section 80 Notice in Government Contractor Disputes",
    parties: "State of Andhra Pradesh & Ors. v. Pioneer Builders, A.P.",
    citation: "(2006) 12 SCC 119, Supreme Court of India",
    date: "Judgment Dated 25 September 2006",
    facts:
      "An engineering contractor executed major irrigation works for the State of Andhra Pradesh. When disputes arose over unpaid work bills and extra items, the contractor initiated proceedings before the subordinate judge. After contesting the claim on merits without raising a proper threshold issue, the State belatedly sought to defeat the contractor's claim on the ground of defective compliance with Section 80 CPC.",
    holding:
      "The Supreme Court held that while service of a notice under Section 80 CPC is a condition precedent to the institution of a suit against the Government, the notice requirement is a procedural privilege enacted solely for the protection and benefit of the Government. Consequently, the Government can waive the objection. If the State fails to plead want of Section 80 notice in its written statement or raises it at a belated appellate stage after contesting the contractor's bills on merits, the objection is deemed waived.",
    amount: "Contractor's Arbitral & Monetary Recovery Protected Against Belated State Objection",
    takeaway:
      "While you should always serve a watertight Section 80 notice before suing a government department, if a department participates in proceedings without objecting at the threshold, it cannot ambush you years later with a Section 80 plea.",
  },
  {
    title: "Supreme Court Ruling on Mandatory Procedure for Urgent Leave Under Section 80(2) CPC",
    parties: "State of Kerala & Ors. v. Sudhir Kumar Sharma & Ors.",
    citation: "(2013) 10 SCC 178, Supreme Court of India",
    date: "Judgment Dated 18 September 2013",
    facts:
      "The plaintiffs instituted a civil suit against the State of Kerala and its officers seeking urgent declaratory and injunctive relief without serving a two-month notice under Section 80(1) CPC. Although the plaintiffs filed an application under Section 80(2) CPC seeking leave of the court to sue without notice, the trial court proceeded to consider merits and interim prayers without first passing a formal order granting or refusing leave under Section 80(2).",
    holding:
      "The Supreme Court held that filing an application under Section 80(2) CPC is not an empty formality. Before entertaining the suit or any application for temporary injunction under Order XXXIX CPC, the court is statutorily bound to first decide the Section 80(2) application after evaluating whether genuine urgency exists. If the court concludes that no immediate or urgent relief is warranted, it cannot keep the suit pending; it must return the plaint to the plaintiff for presentation after serving the mandatory two-month notice under Section 80(1).",
    amount: "Mandatory Pre-Condition Enforced: Section 80(2) Application Must Be Decided First",
    takeaway:
      "If you invoke the Section 80(2) urgency exception to stop a government bank guarantee invocation or blacklisting order, ensure your advocate moves a separate numbered interlocutory application and obtains an explicit judicial order granting leave on day one.",
  },
];

const FAQS = [
  {
    question: "What is a Section 80 CPC notice and when is it mandatory in India?",
    answer:
      "A Section 80 CPC notice is a mandatory two-month pre-litigation statutory notice under the Code of Civil Procedure, 1908 that must be delivered before filing any civil or commercial suit against the Central Government, any State Government (including Jammu & Kashmir), Indian Railways, or a public officer in respect of any act purporting to be done in their official capacity. Under Section 80(1) CPC, no suit can be instituted until the expiration of 60 days next after the notice in writing has been delivered to or left at the office of the designated statutory authority.",
  },
  {
    question: "Who is the exact authority to whom a Section 80 CPC notice must be addressed?",
    answer:
      "Section 80(1) CPC specifies four exact statutory recipients depending on the defendant: (a) for a suit against the Central Government (except Railways), it must be delivered to a Secretary to that Government; (b) for a suit against the Central Government involving Indian Railways, it must be delivered to the General Manager of that Zonal Railway; (bb) for a suit against the Government of Jammu and Kashmir, to the Chief Secretary or authorized officer; and (c) for a suit against any other State Government, to a Secretary to that Government or the District Collector of the district where the cause of action arose.",
  },
  {
    question: "Is a Section 80 CPC notice required before suing a PSU like NTPC, BHEL, ONGC, or a Municipal Corporation?",
    answer:
      "Strictly speaking, Public Sector Undertakings (PSUs) incorporated as government companies under the Companies Act (such as NTPC Ltd., BHEL, ONGC, SAIL, or Coal India) have an independent corporate legal personality distinct from 'the Government' under Section 79 and Section 80 CPC, so a 60-day Section 80 notice is not statutorily mandatory unless the parent ministry is also impleaded as a defendant. However, statutory corporations (like Municipal Corporations, Development Authorities, Port Trusts, or Housing Boards) usually have an identical 30-day or 60-day pre-suit notice requirement embedded in their parent enactment (for example, Section 478 of the Delhi Municipal Corporation Act). Serving a formal statutory notice on the Managing Director or Commissioner is always recommended.",
  },
  {
    question: "Does the 2-month Section 80 notice waiting period reduce my 3-year limitation period to file a recovery suit?",
    answer:
      "No. Under Section 15(2) of the Limitation Act, 1963, in computing the period of limitation for any suit of which notice has been given in accordance with the requirements of any law for the time being in force, the period of that statutory notice (2 months / 60 days under Section 80 CPC) shall be excluded. Effectively, if you serve a valid Section 80 notice before your 3-year limitation expires, your total limitation window to file the recovery suit against the government department extends to 3 years and 2 months.",
  },
  {
    question: "Can I file an urgent suit against a government department without waiting 2 months under Section 80(2) CPC?",
    answer:
      "Yes. Under Section 80(2) CPC (inserted by the 1976 Amendment), a suit to obtain an urgent or immediate relief against the Government or any public officer (such as stopping an imminent wrongful Bank Guarantee invocation, arbitrary blacklisting, or demolition) may be instituted with the explicit leave of the Court without serving a two-month notice. However, the proviso to Section 80(2) mandates that the court shall not grant any interim relief or stay, whether ex-parte or otherwise, without giving the Government a reasonable opportunity of showing cause in respect of the relief prayed for.",
  },
  {
    question: "How can a government contractor recover pending bills if the department says 'funds/budget not available'?",
    answer:
      "Lack of internal budgetary allocation or delayed grant from the Finance Department is not a valid legal defense to withhold payment for undisputed work recorded in the Measurement Book (MB). A contractor should first serve a statutory notice under Section 80 CPC on the Departmental Secretary and District Collector (copying the Chief Engineer and Executive Engineer) demanding principal plus commercial interest. If the contractor is a Udyam-registered Micro or Small Enterprise (MSE), they can simultaneously invoke Sections 15–18 of the MSMED Act, 2006 to claim compound interest at 3 times the RBI bank rate via the MSME ODR Portal.",
  },
  {
    question: "Sarkari department ya PWD contractor ka pending bill na de toh Section 80 CPC notice kaise bheje?",
    answer:
      "Agar koi sarkari vibhag (jaise PWD, CPWD, Nagar Nigam, Irrigation, ya Railways) kaam pura hone aur Measurement Book (MB) mein entry hone ke baad bhi aapka running ya final bill, EMD, ya security deposit rok kar rakha hai, toh civil court mein case dalne se pehle Section 80 CPC ke tehat 60 din ka legal notice dena kanoonan zaroori hai. LegalRecovery.in par verified advocate aapke work order, MB entries aur completion certificate ke aadhar par Secretary aur District Collector ko Registered Post A.D. aur email se pakka Section 80 CPC notice bhejte hain, jisse aksar bina court gaye departmental payment pass ho jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Suing the Government or a PSU? The Section 80 CPC Notice You Must Send First",
  description:
    "Claims against a government department need a Section 80 CPC notice first. Contents, the 2-month wait, exceptions and a format.",
  datePublished: "2026-11-04T10:55:00+05:30",
  dateModified: "2026-11-04T10:55:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/section-80-cpc-notice-to-government`,
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
    "@type": "Legislation",
    name: "Code of Civil Procedure, 1908 — Section 80 (Notice to Government or Public Officer)",
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
      name: "Business & MSME Recovery",
      item: `${SITE_URL}/msme-delayed-payment-recovery-samadhan-vs-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Section 80 CPC Notice to Government",
      item: `${SITE_URL}/law/section-80-cpc-notice-to-government`,
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

export default function Section80CpcNoticePage() {
  const breadcrumbItems = [
    { label: "Business & MSME Recovery", href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice" },
    { label: "Section 80 CPC Notice to Government", href: "/law/section-80-cpc-notice-to-government" },
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

      <main className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching IRCTC & Law Page Theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Code of Civil Procedure, 1908 • Section 80</span>
              <span className="text-red-500">•</span>
              <span>
                In Force Since <time dateTime="1909-01-01">1 Jan 1909</time> (Amended by <time dateTime="1977-02-01">Act 104 of 1976</time>)
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Suing the Government or a PSU? The Section 80 CPC Notice You Must Send First
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 80 CPC Pre-Suit Notice Mandate)
              </p>
              <p>
                Under Section 80(1) of the Code of Civil Procedure, 1908, no civil suit may be instituted against the Central Government, a State Government, Indian Railways, or a public officer for official acts until two months (60 days) have expired after delivering a written statutory notice to the designated Secretary, District Collector, or General Manager. Only urgent injunctions qualify for court leave under Section 80(2).
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">2 Months</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Wait Under s.80(1) CPC</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">+60 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Added to Limitation (s.15(2) Act)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 80(2)</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Court Leave for Urgent Injunctions</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">3x RBI Rate</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">MSME Interest on Govt Tenders</p>
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
            <Section80TableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statute Overview */}
              <section id="heading-statute-overview" aria-labelledby="heading-statute-overview-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
                    Part IV • Suits in Particular Cases
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Sections 79 &amp; 80, Code of Civil Procedure, 1908 • Last Verified <time dateTime="2026-11-04">November 2026</time>
                  </span>
                </div>
                <h2
                  id="heading-statute-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why You Cannot Directly Sue a Government Department Without a Section 80 CPC Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In private commercial disputes, a creditor or supplier can technically institute a civil recovery suit the very next day after an invoice defaults, though serving a 15-day demand notice is standard legal practice. When your debtor is the <strong>Union of India</strong>, a <strong>State Government department</strong> (such as CPWD, State PWD, Irrigation, Public Health Engineering, Medical Directorate, or Municipal Administration), <strong>Indian Railways</strong>, or a public officer acting in an official capacity, the law erects a mandatory statutory barrier under <strong>Section 80 of the Code of Civil Procedure, 1908 (CPC)</strong>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If a contractor, supplier, or citizen files a civil suit against the Government without first serving a written Section 80 notice—or files the plaint even one day before the mandatory <strong>two-month (60-day) waiting period</strong> expires—the court is legally bound to reject the plaint at the threshold under <strong>Order VII Rule 11(d) CPC</strong> as barred by law. The legislative rationale articulated by the Supreme Court is straightforward: unlike a private litigant, the State handles thousands of contracts through rotating officers, and public revenue should not be squandered on court fees and litigation if a valid claim can be examined by the Law Secretary or District Collector and settled administratively within 60 days.
                </p>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <strong>Why Section 80 CPC Is Your Best Pre-Litigation Weapon for Pending Contractor Bills:</strong> Because every Departmental Secretary, Chief Engineer, and District Collector knows that ignoring a Section 80 notice triggers personal scrutiny from the Law Department and exposes the treasury to post-notice commercial interest and court costs, a properly drafted advocate notice under Section 80 CPC forces the file out of the Executive Engineer&apos;s drawer and onto the sanctioning authority&apos;s desk.
                </div>
              </section>

              {/* Section 2: Clause-by-Clause Statutory Annotation (Archetype L1 Mandatory Blockquote + Annotation Pairs) */}
              <section id="heading-clause-annotation" aria-labelledby="heading-clause-annotation-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-clause-annotation-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Clause-by-Clause Statutory Annotation: Section 80(1), Section 80(2) &amp; Section 80(3) CPC Explained
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every sub-section of Section 80 CPC governs a distinct procedural requirement. Below is the exact statutory text paired with its practical meaning and real-world illustration:
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Clause 1: Section 80(1) Pre-Suit Bar & Addressees */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 inline-block">
                      Statutory Text • Section 80(1) CPC (The 2-Month Bar &amp; Designated Recipients)
                    </span>
                    <blockquote
                      cite="https://www.indiacode.nic.in/handle/123456789/2191"
                      className="border-l-4 border-[#DC2626] pl-4 italic text-sm sm:text-base text-slate-800 bg-slate-50 py-3 pr-3 rounded-r-lg"
                    >
                      &quot;Save as otherwise provided in sub-section (2), no suit shall be instituted against the Government (including the Government of the State of Jammu and Kashmir) or against a public officer in respect of any act purporting to be done by such public officer in his official capacity, until the expiration of two months next after notice in writing has been delivered to, or left at the office of— (a) in the case of a suit against the Central Government, except where it relates to a railway, a Secretary to that Government; (b) in the case of a suit against the Central Government where it relates to a railway, the General Manager of that railway; ... (c) in the case of a suit against any other State Government, a Secretary to that Government or the Collector of the district...&quot;
                    </blockquote>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <p>
                        <strong>What it means:</strong> Sending reminders only to the Junior Engineer, Assistant Engineer, or Executive Engineer who signed your work order does <em>not</em> satisfy Section 80(1) CPC. The statute mandates that the written notice must be delivered to the office of the <strong>Secretary to the concerned Ministry/Department</strong> (or the <strong>District Collector</strong> for a State Government suit, or the <strong>General Manager</strong> for Zonal Railways), and you must wait two full calendar months from the date of delivery before filing the plaint.
                      </p>
                      <p>
                        <strong>Practical Example:</strong> A road contractor in Lucknow has ₹28,50,000 stuck with the Uttar Pradesh Public Works Department (UP PWD). The contractor&apos;s advocate dispatches the Section 80 CPC notice via Registered Post A.D. to: (1) The Principal Secretary, Public Works Department, Govt. of UP; (2) The District Collector / District Magistrate, Lucknow; and (3) The Executive Engineer, Construction Division-II, UP PWD. Postal delivery is confirmed on 10th November. The two-month period expires on 10th January, making the suit maintainable from 11th January onward.
                      </p>
                    </div>
                  </div>

                  {/* Clause 2: Section 80(1) Mandatory Contents & Plaint Averment */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 inline-block">
                      Statutory Text • Section 80(1) Concluding Part (Mandatory Notice Ingredients &amp; Plaint Statement)
                    </span>
                    <blockquote
                      cite="https://www.indiacode.nic.in/handle/123456789/2191"
                      className="border-l-4 border-[#DC2626] pl-4 italic text-sm sm:text-base text-slate-800 bg-slate-50 py-3 pr-3 rounded-r-lg"
                    >
                      &quot;...stating the cause of action, the name, description and place of residence of the plaintiff and the relief which he claims; and the plaint shall contain a statement that such notice has been so delivered or left.&quot;
                    </blockquote>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <p>
                        <strong>What it means:</strong> Every valid Section 80 notice must explicitly state three statutory pillars: (i) the complete <strong>name, legal constitution/description, and registered address</strong> of the claimant; (ii) the chronological <strong>cause of action</strong> (tender number, work order date, Measurement Book entry, invoice numbers, and date of default); and (iii) the exact <strong>relief claimed</strong> (principal sum, interest rate, and damages). Furthermore, when the suit is eventually filed, the plaint must contain a specific paragraph pleading that the Section 80 notice was duly delivered, annexing the postal receipt and tracking report.
                      </p>
                      <p>
                        <strong>Practical Example:</strong> If a medical equipment supplier demands ₹12,00,000 principal in the Section 80 notice, they should also explicitly state their claim for 18% per annum pendente lite interest and refund of ₹1,20,000 Earnest Money Deposit in the notice&apos;s relief prayer so the State cannot later argue that the additional heads of claim were never notified.
                      </p>
                    </div>
                  </div>

                  {/* Clause 3: Section 80(2) Urgent Leave Exception */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 inline-block">
                      Statutory Text • Section 80(2) CPC (Urgent or Immediate Relief Exception — Added in 1976)
                    </span>
                    <blockquote
                      cite="https://www.indiacode.nic.in/handle/123456789/2191"
                      className="border-l-4 border-[#DC2626] pl-4 italic text-sm sm:text-base text-slate-800 bg-slate-50 py-3 pr-3 rounded-r-lg"
                    >
                      &quot;A suit to obtain an urgent or immediate relief against the Government... or any public officer in respect of any act purporting to be done by such public officer in his official capacity, may be instituted, with the leave of the Court, without serving any notice as required by sub-section (1); but the Court shall not grant relief in the suit, whether interim or otherwise, except after giving to the Government or public officer, as the case may be, a reasonable opportunity of showing cause in respect of the relief prayed for in the suit: Provided that the Court shall, if it is satisfied, after hearing the parties, that no urgent or immediate relief need be granted in the suit, return the plaint for presentation to it after complying with the requirements of sub-section (1).&quot;
                    </blockquote>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <p>
                        <strong>What it means:</strong> Where waiting 60 days would cause irreversible harm, the plaintiff can file the suit immediately alongside an application under Section 80(2) CPC seeking <strong>Leave of the Court</strong> to dispense with prior notice. However, two strict statutory safeguards apply: first, the judge <em>cannot</em> grant an ex-parte interim stay without issuing notice and hearing the Government Pleader; second, if the judge finds no genuine urgency, the plaint must be returned to first serve a 60-day notice.
                      </p>
                      <p>
                        <strong>Practical Example:</strong> A municipal corporation issues an arbitrary notice on Friday threatening to encash a contractor&apos;s ₹25,00,000 Performance Bank Guarantee or demolish a commercial warehouse on Monday morning. Waiting two months is impossible. The contractor files a suit on Saturday morning with a Section 80(2) leave petition, serves the Standing Counsel in court, and secures a bi-parte interim stay order the same afternoon.
                      </p>
                    </div>
                  </div>

                  {/* Clause 4: Section 80(3) Protection Against Technical Dismissal */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 inline-block">
                      Statutory Text • Section 80(3) CPC (Substantial Compliance Shield — Added in 1976)
                    </span>
                    <blockquote
                      cite="https://www.indiacode.nic.in/handle/123456789/2191"
                      className="border-l-4 border-[#DC2626] pl-4 italic text-sm sm:text-base text-slate-800 bg-slate-50 py-3 pr-3 rounded-r-lg"
                    >
                      &quot;No suit instituted against the Government or against a public officer in respect of any act purporting to be done by such public officer in his official capacity shall be dismissed merely by reason of any error or defect in the notice referred to in sub-section (1), if in such notice— (a) the name, description and the residence of the plaintiff had been so given as to enable the appropriate authority or the public officer to identify the person serving the notice and such notice had been delivered or left at the office of the appropriate authority specified in sub-section (1), and (b) the cause of action and the relief claimed by the plaintiff had been substantially indicated.&quot;
                    </blockquote>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <p>
                        <strong>What it means:</strong> Prior to the 1976 CPC Amendment, government pleaders routinely got meritorious contractor suits dismissed after 8 years of trial over trivial typographical errors in the Section 80 notice (such as a slight calculation discrepancy in interest or a minor misdescription of a firm&apos;s partnership status). Section 80(3) forbids courts from dismissing a suit for technical defects in the notice so long as the claimant was identifiable, the notice reached the designated office, and the cause of action and relief were substantially indicated.
                      </p>
                      <p>
                        <strong>Practical Example:</strong> A proprietorship concern serves a Section 80 notice claiming ₹9,42,000 for supply of hospital furniture, accidentally typing Work Order No. 412/2025 instead of 421/2025 while annexing the exact invoice and delivery challan. Under Section 80(3), the State cannot get the suit dismissed over the transposed digit because the invoice and delivery receipt clearly identified the transaction.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Table 1 - Who Is Covered vs Not Covered & Designated Statutory Addressees (Archetype L1 Table 1) */}
              <section id="heading-designated-officers" aria-labelledby="heading-designated-officers-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-designated-officers-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Who Must Receive Your Section 80 CPC Notice? Designated Officers vs PSU Rules
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Addressing your notice to the wrong official—or confusing an autonomous corporate PSU with a sovereign Government Ministry—is the single most common procedural mistake in government recovery litigation. Under <strong>Section 79 and Section 80(1) CPC</strong>, here is who is covered, who is exempt, and the exact statutory addressee for each entity type:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[660px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Addressees Under Section 80(1) CPC and Coverage of Government vs PSU Entities</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Defendant Entity / Authority</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Is s.80 CPC Mandatory?</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Recipient (s.80(1))</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">How Defendant Is Named in Suit (s.79)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Central Government Ministry / Dept (CPWD, Defence, MES, Income Tax, GST)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Yes — 2 Months Mandatory</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          <strong>Secretary to the Government of India</strong> in the concerned Ministry + Executing Head of Dept
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">&quot;Union of India, through Secretary, Ministry of [...]&quot;</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Indian Railways (Zonal Railways, Railway Construction / Stores)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Yes — 2 Months Mandatory</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          <strong>General Manager (GM)</strong> of the concerned Zonal Railway (s.80(1)(b)) + DRM
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">&quot;Union of India, through General Manager, [...] Railway&quot;</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          State Government Department (State PWD, Irrigation, PHED, Health, Education)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Yes — 2 Months Mandatory</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          <strong>Secretary to the State Government</strong> OR <strong>Collector of the District</strong> (s.80(1)(c))
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">&quot;State of [Name], through Principal Secretary / District Collector&quot;</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Government of Jammu &amp; Kashmir / Union Territory Administrations
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Yes — 2 Months Mandatory</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          <strong>Chief Secretary</strong> to the Govt. or Administrator / Lt. Governor Secretariat (s.80(1)(bb))
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">&quot;UT of [...] / Union of India, through Chief Secretary&quot;</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Public Officer (Executive Engineer, DDO, Collector, Tehsildar, Commissioner)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Yes — For Official Acts</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Delivered to the <strong>Public Officer personally</strong> or left at their official office
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Official designation + Government as co-defendant (Order XXVII Rule 5A)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Municipal Corporations, Development Authorities (DDA, BDA) &amp; Housing Boards
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Governed by Parent Act (1–2 Months)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          <strong>Municipal Commissioner / Vice-Chairman / CEO</strong> under special statutory notice section
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Statutory Corporation in its own corporate name</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Corporate PSUs / Government Companies (NTPC, BHEL, ONGC, SAIL, Coal India)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Not Mandatory (Unless Ministry Impleaded)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          <strong>Managing Director / Company Secretary</strong> at Registered Office (15–30 day notice advised)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Company name Ltd. (Distinct corporate entity under Companies Act)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  <strong>Best Practice Tip (Order XXVII Rule 5A CPC):</strong> Whenever you sue a public officer for damages or unlawful withholding of bills in their official capacity, Order XXVII Rule 5A mandates that the <strong>Government shall be joined as a party to the suit</strong>. Therefore, always serve your Section 80 notice on <em>both</em> the officer (e.g., Executive Engineer / Chief Engineer) and the Secretary / District Collector.
                </p>
              </section>

              {/* Section 4: Table 2 - Deadlines, Limitation Exclusion & Statutory Remedies (Archetype L1 Table 2) */}
              <section id="heading-deadlines-limitation" aria-labelledby="heading-deadlines-limitation-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-limitation-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 2-Month Waiting Period, Limitation Exclusion (Section 15(2)) &amp; Statutory Benchmarks
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Contractors and businesses frequently worry that waiting 60 days for the Section 80 notice period to expire will cause their 3-year limitation period to run out. <strong>Section 15(2) of the Limitation Act, 1963</strong> specifically protects claimants by excluding the statutory notice period from the limitation calculation:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Section 80 CPC Statutory Timelines, Limitation Exclusions &amp; Parallel Remedies</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Procedural Stage / Remedy</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Timeframe</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Provision</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Effect / Consequence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Mandatory Pre-Suit Waiting Period
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">2 Full Months (60 Days)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 80(1) CPC, 1908</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Runs from the exact date the notice is delivered to the designated office</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Exclusion of Notice Period from Limitation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">+2 Months Added (Total 3 Yrs 2 Mos)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 15(2), Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">60-day notice period is excluded if notice is served within the 3-year limitation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Written Acknowledgment / Part-Payment by Dept
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Fresh 3-Year Limitation Reset</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sections 18 &amp; 19, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Running bill part-payment or official letter admitting dues restarts 3-year clock</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Commercial Suit Pre-Institution Mediation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">3 Months (Extendable by 2 Months)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 12A, Commercial Courts Act 2015</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory for commercial disputes &ge; ₹3 Lakh where no urgent relief is sought</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          MSME Supplier Payment Cap on Govt Tenders
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Max 45 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sections 15 &amp; 16, MSMED Act 2006</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Triggers 3&times; RBI Bank Rate monthly compound interest; see{" "}
                          <Link href="/law/msmed-amendment-act-2026" className="text-blue-700 underline font-semibold">
                            MSMED Amendment Act 2026
                          </Link>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Execution of Money Decree Against Government
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">3 Months Reporting Window</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 82(1) &amp; (2) CPC, 1908</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">If decree remains unsatisfied for 3 months, court issues execution attachment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Landmark Supreme Court Orders (IRCTC-style <article> cards) */}
              <section id="heading-landmark-orders" aria-labelledby="heading-landmark-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-landmark-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Supreme Court Rulings on Section 80 CPC Notices, Waiver &amp; Urgent Leave
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Supreme Court Precedents
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
                              Judicial Ratio / Outcome
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
                              Binding Under Article 141 Across All Indian Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for you:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Pattern Analysis (IRCTC-style green checkmark cards) */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: 5 Legal Strategies That Force Government Departments to Clear Pending Bills
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Unlike bare format dumps on generic legal portals, our analysis of successful government contractor recoveries and High Court decrees shows five tactical elements that turn a Section 80 CPC notice from a routine formality into an immediate payment trigger:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Simultaneous Service on the Ministry Secretary, District Collector &amp; Executing Engineer:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        While the local Executive Engineer or Divisional Officer may sit on your bill for months, serving the Section 80(1) notice directly on the Principal Secretary of the Ministry and the District Collector triggers a formal &quot;Parawise Comments&quot; requisition from the Secretariat Law Cell. Division officers frequently clear undisputed bills within 30 days rather than explain in writing to the Principal Secretary why an admitted bill was held up.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Highlighting Personal Accountability for Avoidable Interest Burden on the Public Exchequer:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Central Vigilance Commission (CVC) guidelines and state financial codes stipulate that when a government department is forced to pay court-decreed interest (9% to 18% p.a.) due to deliberate or negligent withholding of an admitted bill, the interest loss to the public exchequer can be recovered from the erring Drawing and Disbursing Officer (DDO). Putting the DDO on formal notice of this personal liability breaks administrative inertia immediately.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Combining Section 80 CPC with MSMED Act Section 16 Compound Interest for Registered MSEs:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        If your business holds an Udyam Registration as a Micro or Small Enterprise, you do not have to rely solely on a slow civil suit. Serving a composite notice citing both Section 80 CPC and{" "}
                        <Link href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice" className="text-blue-700 underline font-medium">
                          Sections 15–18 of the MSMED Act, 2006
                        </Link>{" "}
                        puts the department on notice of mandatory compound interest at 3 times the RBI Bank Rate and binding arbitration via the MSME ODR portal.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Extracting Certified Measurement Book (MB) &amp; Sanction Notes via RTI Before Notice:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Before or alongside your Section 80 notice, filing a targeted Right to Information (RTI) application for certified copies of the Measurement Book (MB) pages, quality test reports, and file noting sheets prevents the department from fabricating backdated &quot;quality defect&quot; letters after receiving your legal notice.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Invoking Order XXXVII Summary Suit or Writ Jurisdiction for Undisputed Bills:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Once the 60-day Section 80 notice period expires, if the bill amount is liquidated and admitted in the Measurement Book, the contractor can institute an expedited{" "}
                        <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-medium">
                          Order XXXVII CPC summary suit
                        </Link>{" "}
                        or, where liability is 100% admitted and only budget allocation is cited, approach the High Court under Article 226 relying on <em>ABL International Ltd. v. Export Credit Guarantee Corporation</em> and <em>Surya Constructions v. State of UP</em>.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 7: Resolution Rail Flowchart (IRCTC-style Mobile Cards + Hand-Authored SVG) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Escalation Hierarchy: From Unpaid Government Work Order to Civil Decree
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this five-stage statutory timeline to preserve limitation under Section 15(2), comply with Section 80(1) CPC, and compel departmental disbursement:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Work Completion &amp; MB Entry</h3>
                    <p className="text-xs text-slate-200 mt-1">Secure Measurement Book (MB) abstract, GeM CRAC, or completion certificate.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Serve Section 80(1) CPC Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">Deliver written notice to Secretary / Collector / Railway GM via Regd. Post A.D.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">60-Day Statutory Wait Window</h3>
                    <p className="text-xs text-slate-700 mt-1">Law Cell seeks parawise comments; 60 days excluded from 3-yr limitation (s.15(2)).</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">Civil / Commercial Suit or MSME ODR</h3>
                    <p className="text-xs text-red-900 mt-1">Institute suit after Day 60 (or s.80(2) urgent leave) / MSME ODR arbitration.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Section 82 CPC Decree Execution</h3>
                    <p className="text-xs text-emerald-900 mt-1">Treasury sanction or attachment after 3-month satisfaction window under s.82 CPC.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Section 80 CPC Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    width="840"
                    height="260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Section 80 CPC Notice to Government and Recovery Suit Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="sec80Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="sec80Alert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="sec80Succ" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#sec80Grad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Dues Crystallized</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">MB Entry / GeM CRAC</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">RTI File Noting Copy</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Section 80 Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">To Secretary/Collector</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Regd. Post AD + Email</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">60-Day Wait Clock</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Law Dept Scrutiny</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">+60d Limitation s.15(2)</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#sec80Alert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Suit / MSME ODR</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Filed Day 61 Onward</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Or Urgent Leave s.80(2)</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#sec80Succ)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Treasury Payout</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Principal + Interest</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">s.82 CPC Execution</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY BENCHMARKS FOR SUITS AGAINST GOVERNMENT &amp; PUBLIC OFFICERS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Mandatory Waiting Period: 2 Months (60 Days) from delivery of written notice to Secretary / Collector / GM (Section 80(1) CPC)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Limitation Protection: Full 60-day notice period is excluded from 3-year limitation calculation (Section 15(2) Limitation Act)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Urgent Relief Exception: Immediate filing permitted with Court Leave under Section 80(2) CPC (Bi-parte hearing required)</text>
                  </svg>
                </div>
              </section>

              {/* Section 8: The 5-Step Escalation Playbook (Archetype L1 Numbered Enforcement Steps) */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  How to Enforce a Claim Against the Government: The 5-Step Escalation Playbook
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow these five sequential steps to ensure your Section 80 CPC notice is immune to technical objections by State Standing Counsel and maximizes out-of-court bill clearance:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Compile Work Order, Measurement Book (MB) Abstract &amp; GeM CRAC
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Gather the tender acceptance letter, formal Agreement/Work Order, signed Measurement Book (MB) abstracts or GeM Consignee Receipt and Acceptance Certificates (CRAC), tax invoices, and completion certificate. If the Subdivision or Division office refuses to share the MB entry number, file a short RTI application under the Right to Information Act, 2005 requesting certified copies of the MB pages and bill pass-order noting sheets.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Identify the Exact Statutory Addressees Under Section 79 &amp; Section 80(1) CPC
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Never address a Section 80 notice solely to the Junior or Executive Engineer. Address Noticee No. 1 as the <strong>Union of India / State Government through the Principal Secretary</strong> of the concerned department, Noticee No. 2 as the <strong>District Collector</strong> (for State suits) or <strong>General Manager</strong> (for Railways), and Noticee No. 3 as the Chief Engineer / Executive Engineer / Drawing &amp; Disbursing Officer (DDO).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch the Section 80 CPC Notice via Registered Post A.D. &amp; Official Email
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Have an advocate draft and sign the statutory notice setting out your full name, description, registered residence/office address, chronological cause of action, and itemized relief (principal, security deposit refund, and interest). Dispatch physical copies to each addressee via India Post Registered Post with Acknowledgment Due (RPAD) / Speed Post, and preserve the postal receipts and signed delivery tracking cards. Simultaneously transmit PDF copies to the official NIC (`@gov.in` / `@nic.in`) email addresses.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Check our transparent advocate drafting fees on our{" "}
                        <Link href="/legal-notice-charges" className="text-blue-700 underline">
                          legal notice charges
                        </Link>{" "}
                        page.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge Parallel CPGRAMS Grievance During the 60-Day Statutory Wait
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        While the mandatory 60-day clock runs from the postal delivery date, upload the stamped Section 80 CPC notice and postal tracking proof onto the Centralised Public Grievance Redress and Monitoring System (<strong>CPGRAMS — pgportal.gov.in</strong>) or the State CM Helpline portal. Combining a formal Section 80 notice with a CPGRAMS docket forces time-bound review by the Nodal Joint Secretary within 21 to 30 days.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Institute Civil / Commercial Recovery Suit or MSME ODR Reference on Day 61
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the department fails to release payment within two clear months of notice delivery, institute your recovery suit in the competent Civil / Commercial Court, explicitly pleading compliance with Section 80(1) CPC and claiming the 60-day limitation exclusion under Section 15(2) of the Limitation Act, 1963. If you are a Udyam-registered MSE, you can directly initiate statutory conciliation and arbitration on the{" "}
                        <Link href="/msme-odr-portal-delayed-payment-guide" className="text-blue-700 underline font-medium">
                          MSME ODR Portal
                        </Link>
                        .
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 9: Interactive Scenario Tabs */}
              <section id="heading-scenario-tabs" aria-labelledby="heading-scenario-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Government &amp; PSU Dispute Scenarios: Pending Contractor Bills, EMD Forfeiture &amp; Urgent Injunctions
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Dispute Type Below to See the Exact Legal Position and 3-Step Recovery Plan
                  </p>
                </div>

                <Section80ScenarioTabs />
              </section>

              {/* Section 10: Copyable Section 80 CPC Legal Notice Format */}
              <section id="heading-notice-format" aria-labelledby="heading-notice-format-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-notice-format-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Drafting Template: Mandatory Section 80 CPC Legal Notice Format to Government Department
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Below is a courtroom-tested statutory notice skeleton incorporating every mandatory element required under Section 80(1) and Section 80(3) of the Code of Civil Procedure, 1908:
                  </p>
                </div>

                <div className="bg-slate-900 text-slate-200 rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-lg font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto space-y-3">
                  <div className="text-red-400 font-bold pb-2 border-b border-slate-800 uppercase tracking-wider text-[11px]">
                    // STATUTORY PRE-SUIT NOTICE UNDER SECTION 80 OF THE CODE OF CIVIL PROCEDURE, 1908
                  </div>
                  <p className="text-slate-300">
                    <strong>REGISTERED POST WITH ACKNOWLEDGMENT DUE (RPAD) / SPEED POST / EMAIL</strong>
                    <br />
                    Date: [DD Month YYYY]
                  </p>
                  <p className="text-slate-300">
                    <strong>TO (NOTICEE AUTHORITIES UNDER SECTION 80(1) CPC):</strong>
                    <br />
                    1. <strong>The Union of India / State of [State Name]</strong>,<br />
                    &nbsp;&nbsp;&nbsp;Through the Secretary / Principal Secretary, Ministry / Department of [Name of Department],<br />
                    &nbsp;&nbsp;&nbsp;[Full Secretariat Address, City, PIN Code].<br />
                    2. <strong>The District Collector / District Magistrate</strong> [Or General Manager, ____ Railway],<br />
                    &nbsp;&nbsp;&nbsp;Collectorate Office, District [District Name, State, PIN Code].<br />
                    3. <strong>The Chief Engineer / Executive Engineer</strong>,<br />
                    &nbsp;&nbsp;&nbsp;[Name of Division / Circle Office, Department Name, Full Address, PIN Code].
                  </p>
                  <p className="text-amber-300 font-bold">
                    SUBJECT: STATUTORY LEGAL NOTICE UNDER SECTION 80 OF THE CODE OF CIVIL PROCEDURE, 1908 FOR RECOVERY OF ₹[TOTAL AMOUNT] TOWARDS UNPAID FINAL BILLS &amp; SECURITY DEPOSIT UNDER WORK ORDER NO. [NUMBER] DATED [DATE].
                  </p>
                  <p className="text-slate-300">
                    Sir / Madam,<br />
                    Under instructions from and on behalf of my client:<br />
                    <strong>Name &amp; Description of Claimant (Plaintiff):</strong> [M/s Firm/Company Name, a Proprietorship/Partnership/Company through its Proprietor/Authorized Director Mr./Ms. Full Name]<br />
                    <strong>Place of Residence / Registered Office:</strong> [Complete Street Address, District, State, PIN Code]<br />
                    I hereby serve upon you the following mandatory statutory notice under Section 80(1) of the Code of Civil Procedure, 1908:
                  </p>
                  <div className="pl-3 border-l-2 border-slate-700 space-y-2 text-slate-300">
                    <p>
                      <strong>1. CAUSE OF ACTION &amp; CONTRACTUAL DETAILS:</strong> That pursuant to Tender Notice No. [Ref] and Work Order / Agreement No. [Ref] dated [Date], my client successfully executed the work of [Brief Description of Civil Work / Supply of Goods] for Noticee No. 3.
                    </p>
                    <p>
                      <strong>2. COMPLETION &amp; MEASUREMENT BOOK (MB) RECORD:</strong> That the entire work was completed on [Date] strictly in accordance with specifications without any defect, and the measurements were duly recorded and verified by the Assistant/Executive Engineer in Measurement Book (MB) No. [MB Number] at Pages [Page Nos.]. Work Completion Certificate dated [Date] was duly issued.
                    </p>
                    <p>
                      <strong>3. UNLAWFUL WITHHOLDING OF ADMITTED DUES:</strong> That my client submitted RA / Final Bill Invoice No. [Invoice No.] dated [Date] for a liquidated sum of ₹[Principal Amount], alongside refundable Earnest Money / Security Deposit (EMD/SD) of ₹[SD Amount]. Despite repeated written representations dated [Dates], the said admitted sum of ₹[Total Principal] remains unpaid on the untenable pretext of &quot;non-allocation of departmental budget grant&quot;.
                    </p>
                    <p>
                      <strong>4. STATUTORY LIABILITY FOR INTEREST:</strong> That under Section 70 and Section 73 of the Indian Contract Act, 1872 [and Sections 15–16 of the MSMED Act, 2006, my client being Udyam-registered MSE No. UDYAM-XX-00-0000000], you are legally liable to pay interest @ [18% p.a. / 3x RBI Bank Rate compounded monthly] from the due date until realization, amounting to ₹[Interest Amount] as on date.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-800/90 rounded-lg border-l-2 border-red-500 text-slate-200">
                    <span className="text-red-400 font-bold block mb-1">5. RELIEF CLAIMED &amp; 2-MONTH STATUTORY DEMAND:</span>
                    You are hereby called upon to release and remit the total sum of <strong>₹[Total Claim Amount]</strong> (comprising ₹[Principal] towards Final Bill + ₹[SD Amount] towards Security Deposit + ₹[Interest] towards accrued interest) along with ₹[Notice Fee] towards costs of this notice, within <strong>TWO MONTHS (60 DAYS)</strong> from the date of delivery of this notice, failing which my client shall institute a civil/commercial recovery suit against you in the court of competent jurisdiction at your entire risk as to court fees, pendente lite interest, and exemplary costs, without further reference.
                  </div>
                  <p className="text-slate-400 text-xs">
                    Yours faithfully,<br />
                    <strong>[Advocate Name &amp; Bar Council Enrolment No.]</strong><br />
                    Counsel for Claimant (Copy retained in chamber with Original Postal Receipts)
                  </p>
                </div>
              </section>

              {/* Section 11: Worked Case Study (IRCTC-style Dark Slate Card) */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Civil Contractor Recovers ₹18,40,000 Pending PWD Bill + ₹2,10,000 Security Deposit After Section 80 Notice
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Contractor Recovery Scenario
                    </span>
                    <span className="text-xs text-slate-400">State PWD Building Division (Bhopal, MP)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> M/s Vindhya Infra Works, a Bhopal-based civil engineering firm, completed renovation and waterproofing work for a State Government hospital building under a PWD Work Order dated 14 January 2025. The final bill of ₹18,40,000 was verified and recorded in Measurement Book (MB) No. 842/B on 18 May 2025, and the 6-month Defect Liability Period expired on 18 November 2025, entitling the contractor to a further ₹2,10,000 Security Deposit refund.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> For 9 months, the Executive Engineer&apos;s accounts branch repeatedly deferred payment stating <em>&quot;Letter of Credit (LOC) / budget limit not received from Finance Department&quot;</em>. Informal visits and letters yielded zero disbursement.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> On 12 February 2026, the contractor engaged an advocate through LegalRecovery.in to serve a formal statutory notice under <strong>Section 80(1) CPC</strong>. The notice was dispatched via Registered Post A.D. to: (1) The Principal Secretary, Public Works Department, Vallabh Bhawan; (2) The District Collector, Bhopal; and (3) The Executive Engineer, PWD Division-I. The notice demanded ₹20,50,000 (Final Bill + SD) plus 18% interest, explicitly citing Supreme Court precedent that lack of internal budget allocation is no defense and putting the DDO on notice of personal liability for avoidable interest burden on the state exchequer.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Within 19 days of delivery, the Principal Secretary&apos;s Law Cell issued a mandatory direction to the Chief Engineer demanding an action-taken report before the 60-day litigation clock expired. To avoid defending an indefensible commercial suit and facing audit objections over court-awarded interest, the Division released a special LOC sanction on Day 44, crediting the entire ₹18,40,000 bill and ₹2,10,000 Security Deposit (total ₹20,50,000) directly into the contractor&apos;s current account via PFMS/RTGS without filing a suit.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: Government Claim Evidence Checklist (IRCTC-style 6-card grid) */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Government Claim Evidence Checklist: 6 Critical Documents Before Serving a Section 80 Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Order VII Rule 14 CPC and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), assemble these six evidentiary records before your advocate dispatches a Section 80 CPC notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Notice Inviting Tender (NIT) &amp; Signed Work Order / PO:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Complete copy of the contract agreement, schedule of quantities (BOQ), and payment terms.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Measurement Book (MB) Entries / GeM CRAC:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified MB abstract pages or online GeM Consignee Receipt &amp; Acceptance Certificate proving accepted delivery.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Work Completion &amp; Defect Liability Clearance Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed certificate from the Subdivision/Executive Engineer confirming satisfactory completion and DLP expiry.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Acknowledged Running (RA) &amp; Final GST Tax Invoices:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Invoices bearing the inward diary stamp of the division office along with GSTR-1 / GSTR-3B tax remittance proof.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">EMD / FDR / Performance Bank Guarantee Copies:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proof of security deposit deducted from running bills or fixed deposit receipts pledged with the department.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">RPAD Postal Receipts &amp; Signed Acknowledgment Cards:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">India Post Registered/Speed Post receipts and delivery tracking logs proving exact date of Section 80 service.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 13: Honest Scope Block (Mandatory per Prompt §7) */}
              <section id="heading-scope" aria-labelledby="heading-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  What LegalRecovery Can and Cannot Do for Your Government or PSU Claim
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block">
                      ✓ What We Do
                    </span>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside leading-relaxed">
                      <li>Verify your tender work order, Measurement Book records, and limitation timeline under Section 15(2) of the Limitation Act.</li>
                      <li>Identify the exact statutory addressees required under Section 79 and Section 80(1) CPC (Ministry Secretary, District Collector, Railway GM, or PSU MD).</li>
                      <li>Draft and dispatch a court-compliant Section 80 CPC notice (and composite MSMED Act Section 16 notice for MSEs) via Registered Speed Post and official email.</li>
                      <li>Provide the complete postal dispatch dossier and Section 63 BSA electronic service certificate required to institute a civil/commercial suit or MSME ODR claim if the department defaults past 60 days.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-rose-50/70 border border-rose-200 rounded-2xl space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-rose-800 block">
                      ✕ What We Cannot Do
                    </span>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside leading-relaxed">
                      <li>We cannot waive the statutory 60-day waiting period mandated by Parliament under Section 80(1) CPC—only a civil court judge can grant urgent leave under Section 80(2).</li>
                      <li>We do not engage in informal lobbying or liaisoning with departmental engineers or treasury officers; our intervention is strictly through formal statutory legal process.</li>
                      <li>Where a government contract contains a mandatory arbitration clause and the claimant is not an MSME, recovery after the notice period proceeds via Section 21 / Section 11 of the Arbitration and Conciliation Act rather than a regular civil suit.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 14: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Section 80 CPC Notices, Waiting Periods &amp; Suits Against Government
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Code of Civil Procedure, 1908, Limitation Act, 1963 &amp; Supreme Court Rulings
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

              {/* Section 15: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Legal Sources, Code of Civil Procedure Citations &amp; Supreme Court References
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
                  Statutory verification status: All statutory provisions verified against India Code (Code of Civil Procedure, 1908 as amended by Act 104 of 1976; Limitation Act, 1963; MSMED Act, 2006) and Supreme Court civil judgments as of <time dateTime="2026-11-04">November 2026</time>.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Section 80 CPC Legal Notice to a Government Department or PSU
                </h2>
                <Section80NoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster (Includes all mandatory row internal_links + contextual B2B links) */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Business, MSME &amp; Statutory Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME Delayed Payment: Samadhaan vs Legal Notice →
                  </Link>
                  <Link
                    href="/law/msmed-amendment-act-2026"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSMED Amendment Act 2026 &amp; ODR Rules →
                  </Link>
                  <Link
                    href="/msme-odr-portal-delayed-payment-guide"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME ODR Portal Delayed Payment Guide →
                  </Link>
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Distributor &amp; Dealer Dues Recovery →
                  </Link>
                  <Link
                    href="/legal-notice-to-vendor-for-refund-of-advance-payment"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Advance Payment Refund Legal Notice →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Advocate Legal Notice Charges &amp; Fees →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order XXXVII Summary Suit Recovery Guide →
                  </Link>
                  <Link
                    href="/recovery-of-unpaid-dues-for-my-business"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    B2B Unpaid Invoice Recovery Portal →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
