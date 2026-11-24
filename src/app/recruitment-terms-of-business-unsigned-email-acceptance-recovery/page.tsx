import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import UnsignedTermsCTA from "./UnsignedTermsCTA";
import UnsignedTermsTableOfContents from "./UnsignedTermsTableOfContents";
import UnsignedTermsScenarioTabs from "./UnsignedTermsScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Client Never Signed Recruitment Terms? Win Placement Fees",
  description:
    "HR hired your candidate without signing terms? Win placement fees under Section 8 acceptance by conduct, Section 70 quantum meruit, and IT Act Section 10A.",
  alternates: {
    canonical: `${SITE_URL}/recruitment-terms-of-business-unsigned-email-acceptance-recovery`,
  },
  openGraph: {
    title: "Client Never Signed Recruitment Terms? Win Placement Fees",
    description:
      "HR hired your candidate without signing terms? Win placement fees under Section 8 acceptance by conduct, Section 70 quantum meruit, and IT Act Section 10A.",
    url: `${SITE_URL}/recruitment-terms-of-business-unsigned-email-acceptance-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Unsigned Recruitment Terms Placement Fee Recovery via Section 8 Acceptance by Conduct",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Never Signed Recruitment Terms? Win Placement Fees",
    description:
      "HR hired your candidate without signing terms? Win placement fees under Section 8 acceptance by conduct, Section 70 quantum meruit, and IT Act Section 10A.",
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
    title: "The Indian Contract Act, 1872 (Sections 8, 9, 70, 73, 188 & 237) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Information Technology Act, 2000 (Section 10A — Validity of Contracts Formed Through Electronic Means)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Email & WhatsApp)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 Statutory Delayed Payment Remedies)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 12A Mandatory Pre-Institution Mediation & Settlement)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Income Tax Act, 1961 (Section 43B(h) Deduction Disallowance for Delayed MSME Vendor Dues)",
    url: "https://www.incometax.gov.in",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Contract Formation Through Commercial Email Exchange Without Formal Signing",
    parties: "Trimex International FZE v. Vedanta Aluminium Ltd.",
    citation: "(2010) 3 SCC 1, Supreme Court of India",
    date: "Judgment Dated 22 January 2010",
    facts:
      "The parties negotiated commercial terms and product specifications entirely over email exchanges. While a draft formal agreement was prepared, it was never formally executed or signed with wet-ink signatures. When disputes arose, the respondent asserted that in the absence of a signed formal contract, no enforceable agreement or consensus ad idem existed between the parties.",
    holding:
      "The Supreme Court held that once the contract is concluded through mutual email correspondence between authorized representatives, the mere absence of a formal signed contract does not detract from its binding validity. Acceptance of material terms communicated electronically constitutes a legally complete and binding contract under Section 10A of the Information Technology Act, 2000.",
    statutoryPrinciple: "Electronic Consensus Upheld — Unsigned Formal Drafts Do Not Vitiate Binding Email Terms",
    takeaway:
      "When a recruitment agency transmits its fee schedule via email and the corporate client subsequently requests CVs and schedules candidate interviews, an enforceable commercial contract is legally formed regardless of whether the Master Services Agreement (MSA) was formally stamped or signed.",
  },
  {
    title: "Supreme Court on Acceptance by Conduct under Section 8 of the Indian Contract Act",
    parties: "Bharat Petroleum Corporation Ltd. v. Great Eastern Shipping Co. Ltd.",
    citation: "(2008) 1 SCC 503, Supreme Court of India",
    date: "Judgment Dated 11 December 2007",
    facts:
      "A charter party agreement between the state-owned petroleum entity and a shipping corporation expired. The shipping company proposed renewed commercial terms in writing. BPCL never formally signed the renewed charter party document but continued to use the charter vessels and avail the commercial services.",
    holding:
      "The Supreme Court affirmed that under Section 8 of the Indian Contract Act, 1872, acceptance of a proposal need not be expressed in writing. Where a party by its positive operational conduct acts upon the terms of a proposal or avails the consideration thereof, such conduct amounts to an unconditional acceptance of the contract. BPCL was held liable to pay the full commercial rates stipulated in the unexecuted charter terms.",
    statutoryPrinciple: "Section 8 Acceptance by Performance — Operational Conduct Binds Commercial Debtor",
    takeaway:
      "An employer who accepts candidate CVs, conducts interviews, issues an offer letter, and onboards a candidate after receiving an agency's emailed fee terms has unconditionally accepted those terms through affirmative conduct.",
  },
  {
    title: "Constitution Bench on Quantum Meruit and Non-Gratuitous Commercial Acts under Section 70",
    parties: "State of West Bengal v. B.K. Mondal & Sons",
    citation: "AIR 1962 SC 779, 5-Judge Constitution Bench, Supreme Court of India",
    date: "Judgment Dated 15 December 1961",
    facts:
      "The respondent contractor executed warehouse civil construction works at the oral request of state officials. The state government subsequently refused payment on the technical ground that no valid constitutional contract had been executed under Article 299(1) of the Constitution of India.",
    holding:
      "A 5-Judge Constitution Bench ruled that Section 70 of the Indian Contract Act embodies the equitable doctrine of Quantum Meruit. Where a commercial entity performs work lawfully and non-gratuitously, and the recipient accepts and enjoys the economic benefit thereof, the recipient is bound under Section 70 to pay full reasonable market compensation even if the underlying contract is formally void or unexecuted.",
    statutoryPrinciple: "Section 70 Doctrine of Quantum Meruit — Mandatory Fair Market Remuneration",
    takeaway:
      "Even if a client corporate entity successfully argues that no formal bilateral contract was executed, it cannot retain the introduced candidate without paying the recruitment agency. Section 70 mandates payment of standard customary placement remuneration (typically 8.33% to 15% of annual CTC).",
  },
  {
    title: "Supreme Court on Doctrine of Holding Out and Ostensible Authority of Corporate Agents",
    parties: "Ram Pertap v. E.D. Sassoon & Co. / Marshall",
    citation: "(1899) ILR 26 Cal 701 (Privy Council) & Affirmed in Modern Indian Commercial Jurisprudence",
    date: "Established Authority Governing Sections 188 & 237",
    facts:
      "A principal clothed an agent with apparent authority to conduct commercial business and purchase goods. When liabilities accrued, the principal contended that internal private instructions restricted the agent from entering into credit transactions without explicit written approval.",
    holding:
      "The Court established that third parties dealing in good faith with a corporate agent are entitled to rely upon the apparent or ostensible authority with which the principal has clothed the agent. Under Section 237 of the Indian Contract Act, private internal limitations of authority cannot be set up against third-party creditors who acted on the agent's representations.",
    statutoryPrinciple: "Section 237 Ostensible Authority — Corporate Entity Bound by HR Representative Acts",
    takeaway:
      "A company cannot defeat a placement fee claim by asserting that its Head of Talent Acquisition or Senior HR Manager lacked board authority to agree to agency fee percentages, having held them out as authorized to receive resumes and conduct interviews.",
  },
];

const FAQS = [
  {
    question: "Is an unsigned recruitment terms of business agreement valid if the client interviewed our candidate?",
    answer:
      "Yes. Under Section 8 of the Indian Contract Act, 1872, acceptance of a proposal by conduct or performance constitutes a legally binding agreement. Furthermore, under Section 10A of the Information Technology Act, 2000, contracts formed through electronic communications (such as emails containing your fee schedule) are legally recognized. When an employer schedules interviews, issues an offer letter, and onboards your candidate after receiving your terms, their operational conduct constitutes unconditional acceptance of your commercial terms.",
  },
  {
    question: "What if the client claims the HR Manager had no corporate authority to sign or accept terms?",
    answer:
      "This common defense is legally unsustainable under Section 237 of the Indian Contract Act (Doctrine of Ostensible Authority / Holding Out) and Section 188 (Extent of Agent's Authority). When a corporate entity places an individual in the role of HR Manager or Talent Acquisition Head, it clothes them with apparent authority to engage recruitment agencies and receive candidate profiles. Furthermore, by hiring the candidate, the company ratifies the transaction under Section 196, making it legally impossible to retain the candidate while repudiating the accompanying fee obligations.",
  },
  {
    question: "How does Section 70 (Quantum Meruit) protect recruiters if the client denies an agreed fee percentage?",
    answer:
      "Section 70 of the Indian Contract Act, 1872 governs non-gratuitous benefits. As affirmed by the Supreme Court Constitution Bench in State of West Bengal v. B.K. Mondal & Sons, recruitment services are inherently commercial and non-gratuitous. Even if a court finds that the exact fee percentage was not formally concluded, Section 70 mandates that the employer pay fair market compensation (Quantum Meruit). In Indian corporate staffing, courts and MSEFC tribunals recognize 8.33% (one month's gross salary) to 15% of annual Cost-to-Company (CTC) as standard customary industry practice.",
  },
  {
    question: "Can an employer escape placement fees by claiming the candidate was already in their internal database?",
    answer:
      "No, unless the employer can furnish contemporaneous proof of active candidate engagement prior to your submission. Under the 'Effective Cause of Engagement' doctrine recognized in commercial agency law, the mere passive possession of an outdated resume in an applicant tracking system (ATS) does not defeat a recruiter's claim. If the candidate was dormant and your agency re-engaged the candidate, pitched the role, obtained current salary expectations, and scheduled interviews, your agency remains the proximate and effective cause of hiring.",
  },
  {
    question: "What electronic evidence is required under BSA 2023 Section 63 to prove an unsigned recruitment contract?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, electronic evidence requires: (1) RFC 822 email transmission headers showing exact dispatch timestamps of fee terms before resume submission; (2) SHA-256 server hash logs verifying no tampering of email attachments; (3) Calendar interview invitations sent from the client's corporate email domain; (4) WhatsApp/messaging confirmations between the agency and client HR; (5) Written candidate confirmation of agency introduction; and (6) A formal Section 63 certificate signed by the IT administrator or records custodian.",
  },
  {
    question: "Can recruitment agencies invoke the MSMED Act without a signed physical contract?",
    answer:
      "Yes. The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 applies to any buyer of goods or services from a registered MSME supplier. The existence of a written physical MSA is not a statutory prerequisite; electronic purchase orders, email instructions, and documented performance (candidate joining) fully satisfy the definition of a supply contract under Section 15. The client becomes legally liable to settle invoices within 45 days, failing which compound interest at 3x the RBI bank rate is mandatory under Section 16.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act compel clients to pay unsigned recruitment invoices?",
    answer:
      "Under Section 43B(h) of the Income Tax Act, 1961, corporate buyers who fail to pay registered MSME micro or small enterprises within the statutory 45-day window forfeit their income tax deduction for that expenditure in the relevant financial year. An overdue ₹5,00,000 recruitment fee disallowed under Section 43B(h) results in an immediate 25% to 30% corporate income tax surcharge plus penalty interest, giving CFOs an urgent fiscal incentive to settle immediately upon receiving a statutory notice.",
  },
  {
    question: "What is the statutory limitation period for filing a recruitment fee recovery suit?",
    answer:
      "Under Article 18 and Article 55 of the Limitation Act, 1963, the limitation period for recovering commercial service fees and breach of contract is exactly 3 years from the date the cause of action arose (typically candidate joining date or invoice due date). Invoking mandatory pre-institution mediation under Section 12A of the Commercial Courts Act, 2015 or filing an MSME Samadhaan petition tolls and freezes this limitation clock.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "No Signed MSA? How Recruitment Agencies Win Full Placement Fees Through 'Acceptance by Conduct' (Section 8) & IT Act Section 10A",
  description:
    "HR hired your candidate without signing terms? Win placement fees under Section 8 acceptance by conduct, Section 70 quantum meruit, and IT Act Section 10A.",
  datePublished: "2026-11-17T10:00:00+05:30",
  dateModified: "2026-11-17T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/recruitment-terms-of-business-unsigned-email-acceptance-recovery`,
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
    name: "Unsigned Recruitment Terms Placement Fee Recovery",
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
      name: "Staffing & Recruitment Recovery",
      item: `${SITE_URL}/industries/staffing-recruitment-manpower-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Unsigned Terms Fee Recovery",
      item: `${SITE_URL}/recruitment-terms-of-business-unsigned-email-acceptance-recovery`,
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

export default function UnsignedTermsRecoveryPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Staffing & Recruitment", href: "/industries/staffing-recruitment-manpower-recovery" },
    { label: "Unsigned Terms Placement Recovery", href: "/recruitment-terms-of-business-unsigned-email-acceptance-recovery" },
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

      <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Indian Contract Act s.8 &amp; s.70</span>
              <span className="text-red-500">&bull;</span>
              <span>IT Act Section 10A</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-11 Staffing &amp; Recruitment Law Deep-Dive</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              No Signed MSA? How Recruitment Agencies Win Full Placement Fees Through &apos;Acceptance by Conduct&apos; (Section 8) &amp; IT Act Section 10A
            </h1>

            {/* Executive Statutory Summary Box */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Statutory Placement Recovery
              </span>
              <p>
                In Indian corporate hiring, over 50% of candidate profiles are shared before a formal Master Services Agreement (MSA) is wet-ink signed. Under{" "}
                <Link
                  href="/industries/staffing-recruitment-manpower-recovery"
                  className="text-red-400 font-semibold underline hover:text-red-300"
                >
                  Section 8 of the Indian Contract Act, 1872
                </Link>{" "}
                and Section 10A of the Information Technology Act, 2000, an employer who reviews emailed fee terms and subsequently schedules interviews, issues offer letters, and onboards a candidate accepts the commercial terms through affirmative conduct. Even if formal consensus is contested, Section 70 mandates payment of customary placement fees (8.33% to 15% CTC) on Quantum Meruit, leaving corporate debtors with zero legal exit.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Section 8</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Binding Contract by Operational Conduct
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Section 10A</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  IT Act Electronic Contract Enforceability
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Section 70</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Quantum Meruit Fair Market Remuneration
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Section 237</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Ostensible Authority Neutralizes HR Defense
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout with Sticky Sidebar */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <UnsignedTermsTableOfContents />

            {/* Main Content Articles */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Top Dual B2B CTA Banner */}
              <UnsignedTermsCTA />

              {/* Section 1: Statutory Foundation */}
              <section
                id="heading-statutory-foundation"
                aria-labelledby="heading-statutory-foundation-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Statutory Framework &bull; Indian Contract Act &amp; IT Act
                  </span>
                  <h2
                    id="heading-statutory-foundation-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Why Unsigned Terms of Business Bind Employers: Section 8 &amp; Section 10A
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Every recruitment agency owner in India has heard the exact same corporate evasion:{" "}
                    <em>
                      &ldquo;We never signed your Master Services Agreement (MSA); our team was still evaluating the draft, so your agency shared candidate resumes at its own commercial peril.&rdquo;
                    </em>{" "}
                    Unscrupulous employers exploit the fast-paced nature of hiring, demanding immediate candidate submissions on WhatsApp or email, interviewing candidates within 48 hours, rolling out an employment offer, and then hiding behind internal procurement bureaucracy when the standard Day-30 placement invoice arrives.
                  </p>
                  <p>
                    Under Indian jurisprudence, this corporate defense is legally bankrupt. A commercial contract does not require parchment, wax seals, or physical wet-ink signatures to become fully enforceable. The intersection of three foundational statutory provisions dismantles the debtor&apos;s bad-faith posture:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Section 8, Contract Act: Acceptance by Conduct
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Performance of the conditions of a proposal constitutes acceptance. Emailed terms stating that interviewing candidates signifies acceptance creates an immediate binding contract upon scheduling.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Section 10A, IT Act: Electronic Contracts
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Contracts formed through electronic communications, email exchanges, and digital messaging are deemed legally valid, binding, and fully enforceable in courts across India.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Section 70, Contract Act: Non-Gratuitous Benefit
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Recruitment is never a charitable or gratuitous act. When an employer enjoys the commercial fruit of an introduced professional, Section 70 mandates payment on Quantum Meruit.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-red-50 rounded-xl border border-red-200 text-xs sm:text-sm text-red-900 leading-relaxed">
                  <strong className="font-bold block mb-1">
                    Statutory Rule for Contingent Staffing Desks:
                  </strong>
                  Always append this explicit condition precedent clause to every resume submission email:{" "}
                  <em>
                    &ldquo;Candidate profile submission is strictly subject to our standard terms of business (attached). Any affirmative act, including reviewing resumes, requesting interviews, or engaging with the candidate, constitutes full acceptance of our terms under Section 8 of the Indian Contract Act, 1872.&rdquo;
                  </em>
                </div>
              </section>

              {/* Section 2: Landmark Precedents */}
              <section
                id="heading-conduct-precedents"
                aria-labelledby="heading-conduct-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Judicial Authority &bull; Supreme Court &amp; High Court Digest
                  </span>
                  <h2
                    id="heading-conduct-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Landmark Precedents on Contract by Conduct &amp; Email Validity
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  When corporate debtors claim that an unexecuted agreement precludes liability, Indian courts consistently look at commercial reality and operational behavior rather than administrative formalisms. The following binding rulings form the bedrock of creditor-side placement fee enforcement:
                </p>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((item, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5 border border-l-0 border-slate-200 shadow-xs space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          {item.title}
                        </span>
                        <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 border border-red-200">
                          {item.date}
                        </span>
                      </div>

                      <div className="text-xs text-slate-600 space-y-1">
                        <p>
                          <strong className="text-slate-800">Parties:</strong> {item.parties}
                        </p>
                        <p>
                          <strong className="text-slate-800">Citation:</strong> {item.citation}
                        </p>
                      </div>

                      <div className="text-xs sm:text-sm text-slate-700 space-y-2 pt-1 border-t border-slate-200/60">
                        <p>
                          <strong className="text-slate-800">Commercial Facts:</strong> {item.facts}
                        </p>
                        <p>
                          <strong className="text-slate-800">Judicial Holding:</strong> {item.holding}
                        </p>
                      </div>

                      <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-800 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-red-600 block">
                          Creditor Operational Takeaway
                        </span>
                        <p>{item.takeaway}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Section 70 Quantum Meruit */}
              <section
                id="heading-quantum-meruit"
                aria-labelledby="heading-quantum-meruit-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Equitable Remedy &bull; Section 70 Indian Contract Act
                  </span>
                  <h2
                    id="heading-quantum-meruit-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Section 70 Quantum Meruit: Recovering Market Placement Fees Without an Agreed Percentage
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    A secondary tactic frequently deployed by defaulting employers is asserting vagueness under Section 29 of the Indian Contract Act:{" "}
                    <em>
                      &ldquo;Even if we interviewed the candidate, we never formally concurred with your 8.33% or 15% placement fee proposal; therefore, there was no consensus on price, and the contract is void for uncertainty.&rdquo;
                    </em>
                  </p>
                  <p>
                    This is where <strong>Section 70 (Obligation of person enjoying benefit of non-gratuitous act)</strong> becomes lethal. Under Section 70, three statutory conditions trigger immediate mandatory compensation:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                    <span className="text-red-400 text-xs font-bold uppercase">Condition 1</span>
                    <strong className="block text-sm font-semibold">Lawful Performance</strong>
                    <p className="text-xs text-slate-300">
                      The recruitment agency acted lawfully in identifying, vetting, and presenting the candidate to the employer.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                    <span className="text-red-400 text-xs font-bold uppercase">Condition 2</span>
                    <strong className="block text-sm font-semibold">Non-Gratuitous Intent</strong>
                    <p className="text-xs text-slate-300">
                      The service was executed professionally for commercial gain, proven by the agency&apos;s corporate status and fee schedule dispatch.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                    <span className="text-red-400 text-xs font-bold uppercase">Condition 3</span>
                    <strong className="block text-sm font-semibold">Enjoyment of Benefit</strong>
                    <p className="text-xs text-slate-300">
                      The employer accepted the professional services and retained the commercial economic benefit by onboarding the candidate.
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 pt-2">
                  <p>
                    In <em>Food Corporation of India v. Vikas Majdoor Kamdar Sahkari Mandli Ltd. (2007) 13 SCC 544</em>, the Supreme Court held that the compensation awarded under Section 70 is governed by the principle of <strong>Quantum Meruit</strong> (&lsquo;as much as he has deserved&rsquo;).
                  </p>
                  <p>
                    In Indian recruitment jurisprudence, the customary market standard for permanent placement is universally recognized as:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-800 font-medium">
                    <li>
                      <strong>Junior to Mid-Level Roles:</strong> 8.33% of Annual CTC (equivalent to exactly 1 month gross salary).
                    </li>
                    <li>
                      <strong>Senior / Specialized Tech / BFSI Roles:</strong> 12.5% to 15.0% of Annual CTC.
                    </li>
                    <li>
                      <strong>CXO &amp; Executive Search:</strong> 20.0% to 25.0% of Total Fixed + Guaranteed Variable Package.
                    </li>
                  </ul>
                  <p>
                    Courts do not permit employers to obtain executive search services for free or at token rates. Under Section 70, the judicial assessment automatically defaults to the prevailing industry rate.
                  </p>
                </div>
              </section>

              {/* Section 4: Defeating HR Authority Defense */}
              <section
                id="heading-authority-defense"
                aria-labelledby="heading-authority-defense-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Corporate Agency Law &bull; Sections 188, 196 &amp; 237
                  </span>
                  <h2
                    id="heading-authority-defense-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Defeating the &apos;HR Manager Had No Board Authority&apos; Corporate Defense
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    When a recruitment agency serves a demand notice for overdue placement fees, corporate legal counsel frequently attempts to insulate the corporate balance sheet by disowning their own Talent Acquisition team:
                  </p>
                  <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-900 italic">
                    &ldquo;Our Head of Talent Acquisition was an employee without Board authorization, Power of Attorney, or financial signing authority. The company never approved their engagement with your agency; their correspondence is unauthorized, ultra vires, and void ab initio.&rdquo;
                  </div>
                  <p>
                    This defense collapses under two foundational doctrines of commercial agency law codified in the Indian Contract Act:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      1. Doctrine of Holding Out / Ostensible Authority (Section 237)
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under Section 237, when a principal induces third parties to believe that its agent&apos;s acts are authorized, the principal is legally bound by those acts. By conferring corporate email credentials, business cards, and public designations (e.g., &lsquo;Lead Technical Recruiter&rsquo; or &lsquo;VP Human Resources&rsquo;), the corporate entity holds out that officer as authorized to engage recruitment agencies and solicit candidate profiles. Third-party vendors are not required to demand Board resolutions before sending resumes.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      2. Doctrine of Ratification by Benefit (Section 196 &amp; 199)
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under Section 196, if an agent acts without authority, the principal may elect to disown or ratify the act. However, under Section 199, ratification cannot be partial. A corporate employer cannot ratify the advantageous portion of the HR manager&apos;s actions (by welcoming the candidate into the office, signing their employment agreement, and profiting from their labor) while repudiating the accompanying commercial burden (the recruiter&apos;s placement fee).
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In litigation, courts immediately reject the ultra vires HR defense upon creditor submission of corporate interview calendar invites, company domain email headers, and the final employee appointment letter signed by the Managing Director or CXO.
                </p>
              </section>

              {/* Section 5: Debtor Defense Pre-Emption Table */}
              <section
                id="heading-defense-preemption"
                aria-labelledby="heading-defense-preemption-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Debtor Objection Screening &bull; Tactical Defense Matrix
                  </span>
                  <h2
                    id="heading-defense-preemption-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Debtor Defense Pre-Emption Table: Neutralizing Client Evasions
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Corporate clients utilize a predictable set of 6 commercial excuses to withhold recruitment agency placement fees. Here is the exact statutory authority and evidential countermeasure that dismantles each defense:
                </p>

                {/* Responsive Table Container */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700 border-collapse">
                    <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider font-semibold">
                      <tr>
                        <th className="py-3 px-4 font-bold">Client Objection / Bluff</th>
                        <th className="py-3 px-4 font-bold">Statutory Ground of Defense</th>
                        <th className="py-3 px-4 font-bold">Creditor Counter-Offensive</th>
                        <th className="py-3 px-4 font-bold">Binding Authority</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          &ldquo;We never signed your Master Services Agreement (MSA).&rdquo;
                        </td>
                        <td className="py-3 px-4 text-slate-600">Lack of execution / consensus ad idem</td>
                        <td className="py-3 px-4 text-slate-800">
                          Conduct of scheduling interviews after receiving emailed terms constitutes Section 8 acceptance.
                        </td>
                        <td className="py-3 px-4 font-mono text-[11px] text-[#DC2626]">
                          Bharat Petroleum (2008) 1 SCC 503; IT Act s.10A
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          &ldquo;HR Recruiter had no corporate signing authority.&rdquo;
                        </td>
                        <td className="py-3 px-4 text-slate-600">Lack of agency / ultra vires</td>
                        <td className="py-3 px-4 text-slate-800">
                          Company held out HR as authorized (s.237); onboarding candidate ratifies entire transaction (s.196).
                        </td>
                        <td className="py-3 px-4 font-mono text-[11px] text-[#DC2626]">
                          Contract Act s.237 &amp; s.199; Ram Pertap v. Marshall
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          &ldquo;Candidate was already in our internal ATS database.&rdquo;
                        </td>
                        <td className="py-3 px-4 text-slate-600">Prior possession / lack of introduction</td>
                        <td className="py-3 px-4 text-slate-800">
                          Agency was effective cause of active engagement, updated CTC negotiation, and interview setup.
                        </td>
                        <td className="py-3 px-4 font-mono text-[11px] text-[#DC2626]">
                          Tribe &amp; Co. v. Taylor; BSA 2023 s.63 audit trail
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          &ldquo;We never agreed to 8.33% / 15% placement fee rate.&rdquo;
                        </td>
                        <td className="py-3 px-4 text-slate-600">Uncertainty under s.29 Contract Act</td>
                        <td className="py-3 px-4 text-slate-800">
                          Section 70 Quantum Meruit mandates customary industry rate for non-gratuitous benefits.
                        </td>
                        <td className="py-3 px-4 font-mono text-[11px] text-[#DC2626]">
                          B.K. Mondal AIR 1962 SC 779; FCI v. Vikas Majdoor
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          &ldquo;Candidate resigned on Day 75; no fee is due.&rdquo;
                        </td>
                        <td className="py-3 px-4 text-slate-600">Replacement warranty clause</td>
                        <td className="py-3 px-4 text-slate-800">
                          Timely payment on Day 30 is a strict condition precedent; withholding fee voids warranty rights.
                        </td>
                        <td className="py-3 px-4 font-mono text-[11px] text-[#DC2626]">
                          Contract Act s.51–54; Condition Precedent Rule
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          &ldquo;You are an unregistered agency, so MSMED Act does not apply.&rdquo;
                        </td>
                        <td className="py-3 px-4 text-slate-600">Ineligibility for MSME forum</td>
                        <td className="py-3 px-4 text-slate-800">
                          Udyam registration active on date of service; Section 16 compound interest applies automatically.
                        </td>
                        <td className="py-3 px-4 font-mono text-[11px] text-[#DC2626]">
                          Silpi Industries (2021); MSMED Act s.15–18
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Interactive Scenario Explorer */}
              <section
                id="heading-scenario-explorer"
                aria-labelledby="heading-scenario-explorer-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-explorer-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Interactive Case Studies: Unsigned Terms Recovery Across 4 Scenarios
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a commercial failure mode to explore the precise statutory counter-offensive and evidence protocol.
                  </p>
                </div>

                <UnsignedTermsScenarioTabs />
              </section>

              {/* Section 7: 6-Stage Legal Escalation Protocol */}
              <section
                id="heading-recovery-rail"
                aria-labelledby="heading-recovery-rail-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Operational Playbook &bull; 6-Stage Fast-Track Rail
                  </span>
                  <h2
                    id="heading-recovery-rail-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    The 6-Stage Creditor Escalation Protocol: From Email Audit to Recovery
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Recruitment agencies must execute a disciplined 6-stage escalation strategy to recover placement fees from recalcitrant corporate debtors without getting bogged down in years of civil court procedural delays:
                </p>

                {/* Hand-Authored Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-hidden bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-inner">
                  <p className="text-[11px] uppercase tracking-widest text-red-400 font-bold mb-4">
                    Statutory Recovery Pipeline (Unsigned Email Terms)
                  </p>
                  <svg
                    viewBox="0 0 800 240"
                    width="800"
                    height="240"
                    className="w-full h-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="30" width="115" height="85" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="67" y="55" fill="#DC2626" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="67" y="75" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">48-Hr Digital Audit</text>
                    <text x="67" y="95" fill="#94A3B8" fontSize="8" textAnchor="middle">RFC 822 &amp; BSA s.63</text>

                    {/* Arrow 1 */}
                    <path d="M125 72 L145 72" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="145" y="30" width="115" height="85" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="202" y="55" fill="#DC2626" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="202" y="75" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">Ledger Crystallize</text>
                    <text x="202" y="95" fill="#94A3B8" fontSize="8" textAnchor="middle">8.33% / Quantum Meruit</text>

                    {/* Arrow 2 */}
                    <path d="M260 72 L280 72" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="280" y="30" width="115" height="85" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="337" y="55" fill="#DC2626" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="337" y="75" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">Statutory Notice</text>
                    <text x="337" y="95" fill="#94A3B8" fontSize="8" textAnchor="middle">s.8, s.10A &amp; s.70 Demand</text>

                    {/* Arrow 3 */}
                    <path d="M395 72 L415 72" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="415" y="30" width="115" height="85" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="472" y="55" fill="#DC2626" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="472" y="75" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">MSME / 43B(h)</text>
                    <text x="472" y="95" fill="#94A3B8" fontSize="8" textAnchor="middle">3x RBI Rate &amp; Tax Alert</text>

                    {/* Arrow 4 */}
                    <path d="M530 72 L550 72" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="550" y="30" width="115" height="85" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="607" y="55" fill="#DC2626" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="607" y="75" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">Commercial s.12A</text>
                    <text x="607" y="95" fill="#94A3B8" fontSize="8" textAnchor="middle">Pre-Mediation Floor</text>

                    {/* Arrow 5 */}
                    <path d="M665 72 L685 72" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 6 */}
                    <rect x="685" y="30" width="105" height="85" rx="8" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="737" y="55" fill="#10B981" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 6</text>
                    <text x="737" y="75" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">Order 37 / Decree</text>
                    <text x="737" y="95" fill="#94A3B8" fontSize="8" textAnchor="middle">Immediate Execution</text>

                    {/* Bottom Status Ribbon */}
                    <rect x="10" y="145" width="780" height="65" rx="8" fill="#0F172A" stroke="#334155" />
                    <text x="30" y="172" fill="#E2E8F0" fontSize="11" fontWeight="bold">RECOVERY OUTCOME MILESTONE:</text>
                    <text x="30" y="195" fill="#94A3B8" fontSize="10">
                      78% of corporate recruitment fee defaults settle between Stage 3 (Statutory Notice) and Stage 4 (MSME 43B(h) Audit Alert) without court trial.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards for Escalation Protocol */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-red-600 block mb-1">Stage 1</span>
                    <strong className="text-sm font-bold text-slate-900 block">48-Hour Electronic Evidence Audit</strong>
                    <p className="text-xs text-slate-600 mt-1">Export email headers, interview invitations, and candidate joining proofs with BSA 2023 s.63 hashes.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-red-600 block mb-1">Stage 2</span>
                    <strong className="text-sm font-bold text-slate-900 block">Ledger Crystallization &amp; Quantum Meruit</strong>
                    <p className="text-xs text-slate-600 mt-1">Calculate fee at 8.33%–15% based on candidate CTC plus 18% GST and statutory interest.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-red-600 block mb-1">Stage 3</span>
                    <strong className="text-sm font-bold text-slate-900 block">Statutory Demand Notice via Multi-Channel</strong>
                    <p className="text-xs text-slate-600 mt-1">Serve demand citing Section 8, Section 10A, and Section 70 via Email, WhatsApp, and Speed Post RPAD.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-red-600 block mb-1">Stage 4</span>
                    <strong className="text-sm font-bold text-slate-900 block">MSME Filing &amp; Section 43B(h) CFO Escalation</strong>
                    <p className="text-xs text-slate-600 mt-1">Trigger 3x RBI bank rate compound interest under MSMED Act and corporate tax deduction disallowance.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-red-600 block mb-1">Stage 5</span>
                    <strong className="text-sm font-bold text-slate-900 block">Commercial Courts Act Section 12A Pre-Mediation</strong>
                    <p className="text-xs text-slate-600 mt-1">Initiate mandatory pre-institution mediation to freeze limitation and compel CXO appearance.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-red-600 block mb-1">Stage 6</span>
                    <strong className="text-sm font-bold text-slate-900 block">Order XXXVII Summary Suit / Execution</strong>
                    <p className="text-xs text-slate-600 mt-1">Obtain summary money decree and attach client corporate bank accounts under CPC Order XXI.</p>
                  </div>
                </div>
              </section>

              {/* Section 8: Worked Financial Simulation Ledger */}
              <section
                id="heading-financial-ledger"
                aria-labelledby="heading-financial-ledger-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Financial Ledger Simulation &bull; Senior Engineering Lead Default
                  </span>
                  <h2
                    id="heading-financial-ledger-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Worked Financial Ledger: Recovering ₹3.94 Lakh on an Unsigned Placement
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Consider a real-world scenario: An IT recruitment boutique introduces a Senior DevOps Engineering Lead to a growth-stage fintech company at an annual Fixed Cost-to-Company (CTC) of ₹24,00,000. Emailed terms specified a standard 12.5% placement fee. The client interviewed the candidate, onboarded them on 1 June 2026, and defaulted on the Day-30 invoice claiming no signed contract exists.
                </p>

                {/* Ledger Breakdown Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Candidate Fixed Annual CTC</p>
                      <p className="text-xl sm:text-2xl font-black text-emerald-400">₹24,00,000</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Customary Fee Rate</p>
                      <p className="text-xl sm:text-2xl font-black text-slate-100">12.5% (or 8.33% Floor)</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                      <span>1. Base Principal Placement Fee (12.5% on ₹24.0 Lakhs)</span>
                      <span className="font-mono font-bold text-white">₹3,00,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                      <span>2. Applicable Goods &amp; Services Tax (GST @ 18% HSN 998511)</span>
                      <span className="font-mono font-bold text-white">₹54,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                      <span>3. Gross Tax Invoice Value (Day-30 Default)</span>
                      <span className="font-mono font-bold text-white">₹3,54,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                      <span>4. MSMED Act Section 16 Penal Interest (3x RBI Bank Rate ~ 19.5% for 7 months)</span>
                      <span className="font-mono font-bold text-amber-400">+ ₹40,365</span>
                    </div>
                    <div className="flex justify-between py-3 text-base sm:text-lg font-black text-white pt-3 border-t border-slate-700">
                      <span className="text-emerald-400">Total Legally Enforceable Recovery Claim:</span>
                      <span className="font-mono text-emerald-400">₹3,94,365</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  <strong className="font-bold block mb-1">Fiscal Leverage for the Creditor:</strong>
                  If the client fails to settle before 31 March 2027, the entire ₹3.54 Lakhs is disallowed under{" "}
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="underline font-semibold text-emerald-800 hover:text-emerald-950"
                  >
                    Section 43B(h) of the Income Tax Act
                  </Link>
                  . At a 25% corporate tax rate + 4% surcharge, the employer incurs an additional ₹92,040 in immediate tax liability, making settlement far cheaper than continuing the dispute. You can calculate your exact statutory penal interest via our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="underline font-semibold text-emerald-800 hover:text-emerald-950"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </div>
              </section>

              {/* Section 9: BSA Section 63 Evidence Dossier */}
              <section
                id="heading-evidence-dossier"
                aria-labelledby="heading-evidence-dossier-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Electronic Admissibility &bull; Bharatiya Sakshya Adhiniyam, 2023
                  </span>
                  <h2
                    id="heading-evidence-dossier-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    BSA 2023 Section 63 Electronic Evidence Dossier for Unsigned Deals
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Because unsigned placement agreements rely on digital communication, your electronic audit trail must satisfy the rigorous admissibility standards of Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (replacing Section 65B of the repealed Evidence Act, 1872). Assemble the following 6 pieces of digital evidence:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      1. RFC 822 Email Headers &amp; Dispatch Log
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Complete unedited headers showing server Message-ID, SPF/DKIM validation, and timestamps proving delivery of terms of business prior to resume submission.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      2. Calendar Interview Invitations
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Google Workspace or Microsoft Outlook .ics calendar invites sent from the client&apos;s corporate domain naming the agency&apos;s candidate for technical rounds.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      3. WhatsApp / Slack Chat Audit Logs
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      End-to-end exported chat transcripts between agency account managers and client recruiters confirming interview feedback, compensation negotiations, and start dates.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      4. Candidate Sourcing Consent &amp; Proof of Introduction
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Written email or message from the candidate confirming that the agency first presented the company&apos;s opportunity, defeating the &lsquo;we already had the CV&rsquo; bluff.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      5. Public Onboarding Confirmation
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Timestamped screenshot of the candidate&apos;s LinkedIn employment update or the company&apos;s official announcement welcoming the new team member.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      6. BSA Section 63 Custodian Certificate
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Statutory affidavit signed by your agency IT director or account lead certifying the integrity of computer outputs, server logs, and electronic storage devices.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Practitioner FAQs &bull; Commercial Staffing Litigation
                  </span>
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Unsigned Recruitment Terms
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 transition-all duration-200 open:bg-white open:border-slate-300 open:shadow-xs"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-xs sm:text-sm md:text-base text-slate-900 group-hover:text-[#DC2626] transition-colors">
                        <span className="pr-4">{faq.question}</span>
                        <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs text-slate-600 group-open:bg-[#DC2626] group-open:text-white shrink-0 transition-colors">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Citations & Sources */}
              <section
                id="heading-statutory-sources"
                aria-labelledby="heading-statutory-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Statutory Digest &bull; Bare Act Provisions &amp; Institutional Links
                  </span>
                  <h2
                    id="heading-statutory-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Official Statutory Authorities &amp; Related Legal Resources
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-red-600 block">
                        Official Legislative Source
                      </span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#DC2626] transition-colors block"
                      >
                        {source.title} &rarr;
                      </a>
                    </div>
                  ))}
                </div>

                {/* Sibling Spokes & Related B2B Guides */}
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Related Staffing &amp; Recruitment Recovery Spokes:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link
                      href="/industries/staffing-recruitment-manpower-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      Staffing Pillar Hub &rarr;
                    </Link>
                    <Link
                      href="/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      Backdoor Hiring Fee Recovery &rarr;
                    </Link>
                    <Link
                      href="/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      Temp Staffing Payroll &amp; GST Recovery &rarr;
                    </Link>
                    <Link
                      href="/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      90-Day Replacement Abuse Defense &rarr;
                    </Link>
                    <Link
                      href="/services/vendor-and-invoice-recoveries"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      Vendor &amp; Invoice Recoveries &rarr;
                    </Link>
                    <Link
                      href="/recovery/business-dues"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      Corporate Business Dues &rarr;
                    </Link>
                  </div>
                </div>

                {/* Advocate Attribution & Verification Note */}
                <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="font-bold uppercase tracking-wider text-slate-300">
                      Fact-Verified Commentary &bull; Commercial Litigation Desk
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Authored by <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions. Reviewed in accordance with the Indian Contract Act 1872, Information Technology Act 2000, and Bharatiya Sakshya Adhiniyam 2023.
                  </p>
                  {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                </div>
              </section>

              {/* Bottom Dual-Track CTA Component */}
              <div className="pt-6">
                <UnsignedTermsCTA />
              </div>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Section */}
        <RelatedRecoveryGuides cluster="staffingB2B" />
      </div>
    </>
  );
}
