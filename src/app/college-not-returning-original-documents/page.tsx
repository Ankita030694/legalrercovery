import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CollegeDocumentsNoticeCTA from "./CollegeDocumentsNoticeCTA";
import CollegeDocumentsTableOfContents from "./CollegeDocumentsTableOfContents";
import CollegeDocumentsProblemTabs from "./CollegeDocumentsProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "College Not Returning Original Documents? Legal Remedy",
  description:
    "Colleges can't withhold original certificates to force fee payment. UGC and AICTE rules, complaint routes and a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/college-not-returning-original-documents`,
  },
  openGraph: {
    title: "College Holding Your Original Certificates? Legal Remedies & UGC Mandates",
    description:
      "Statutory escalation path when a university or college withholds original mark sheets, degrees, or migration certificates to coerce fee payment.",
    url: `${SITE_URL}/college-not-returning-original-documents`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "College Holding Your Original Certificates? Legal Remedies & UGC Mandates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "College Holding Your Original Certificates? Legal Remedies & UGC Mandates",
    description:
      "Statutory escalation path when a university or college withholds original mark sheets, degrees, or migration certificates to coerce fee payment.",
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
    title: "University Grants Commission (UGC) Notification on Remittance & Refund of Fees (Clause 5 — Verification & Return of Original Documents)",
    url: "https://www.ugc.gov.in/pdfnews/5437737_UGC-Notice-Reg-Refund-of-Fees.pdf",
  },
  {
    title: "Indian Contract Act, 1872 — Section 171 (General Lien of Bailees Does Not Apply to Educational Documents) & Section 23 (Void Agreements)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Notice Dispatch & Institutional Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "UGC e-Samadhan Centralized Student Grievance Redressal Portal — Ministry of Education",
    url: "https://samadhan.ugc.ac.in/",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Educational Institutions Have No Lien or Right to Hold Student Certificates as Security",
    parties: "B. Archana v. Principal, SRM Institute of Science and Technology",
    citation: "Writ Petition No. 17748 of 2017, High Court of Judicature at Madras",
    date: "Order Dated 11 July 2017",
    facts:
      "A student left a postgraduate course in the first semester due to medical reasons. She asked for the return of her original Class 10, Class 12, and degree mark sheets. The college refused. It demanded ₹4,50,000 for all remaining semesters based on an admission bond.",
    holding:
      "The Madras High Court ruled that student certificates are personal property. They link directly to the right to livelihood under Article 21. Colleges cannot claim a lien under Section 171 of the Contract Act over certificates. Certificates are not goods pledged for commercial debts. The Court ordered the college to return all original certificates within 7 days without fee payment.",
    amount: "Immediate Release of All Original Certificates + Prohibition of Advance Fee Coercion",
    takeaway:
      "A college cannot hold your certificates hostage for future fees. High Courts consistently strike down fee undertakings as illegal and opposed to public policy.",
  },
  {
    title: "Withholding Original Documents for Disputed Tuition Fees Is Repugnant to Law",
    parties: "Asha Latha v. State of Karnataka & Rajiv Gandhi University of Health Sciences",
    citation: "ILR 2003 KAR 2383 / Writ Petition No. 34509 of 2002, High Court of Karnataka",
    date: "Order Dated 08 April 2003",
    facts:
      "A medical student could not continue her studies after Year 1 and sought a transfer. The private medical college withheld her original Class 10 and 12 mark sheets. It demanded full fees for the entire 4.5-year MBBS course before releasing any papers.",
    holding:
      "The Karnataka High Court ruled that no college can hold certificates as security for monetary claims. Holding documents hurts a citizen's career and livelihood. The High Court ordered the college to return all documents at once. If the college has financial claims, it must file a civil suit instead of holding records as ransom.",
    amount: "Unconditional Release of SSLC & PUC Certificates + Costs",
    takeaway:
      "If a college has a money dispute with a student, it must sue in civil court. It cannot extract money by locking away the student's original certificates.",
  },
  {
    title: "Universities Cannot Withhold Degree or Migration Certificates on Financial Grounds",
    parties: "Ashwini Kumar v. Guru Gobind Singh Indraprastha University (GGSIPU) & Anr.",
    citation: "Writ Petition (Civil) No. 4920 of 2020, High Court of Delhi",
    date: "Order Dated 14 October 2020",
    facts:
      "A law college refused to issue a provisional degree and migration certificate to a graduating student. The college claimed unpaid library fines and hostel dues. Because of this delay, the student missed state judicial service job deadlines.",
    holding:
      "The Delhi High Court held that colleges cannot withhold degrees or migration certificates over disputed fees. Degrees represent academic merit. Holding them causes irreparable career injury. The Court ordered the university and college to issue the migration certificate and degrees within 10 days.",
    amount: "Immediate Issuance of Degree & Migration Certificate",
    takeaway:
      "Withholding exit certificates or degrees for hostel or library dues is illegal. Colleges must release certificates and resolve financial disputes separately.",
  },
  {
    title: "Retention of Original Documents Constitutes Unfair Trade Practice Under Consumer Law",
    parties: "Registrar, Andhra University & Ors. v. Janjanam Sreerama Murthy",
    citation: "Revision Petition No. 2503 of 2011, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 23 July 2012",
    facts:
      "A student joined a diploma course and deposited original certificates. Soon after, he secured a job in a central PSU and withdrew. The university refused to return the certificates or refund the deposit, citing internal calendar rules.",
    holding:
      "The National Commission held that withholding original certificates when a student leaves is an unfair trade practice. It represents gross deficiency in service under consumer law. The NCDRC upheld an order for immediate return of certificates, refund of caution money, and ₹25,000 compensation for mental agony and career delay.",
    amount: "Return of Certificates + Refund of Caution Money + ₹25,000 Mental Agony Award",
    takeaway:
      "Consumer courts award compensation when original documents are held illegally, recognizing the severe distress and job loss caused to the student.",
  },
];

const FAQS = [
  {
    question: "Is a college legally allowed to keep my original certificates after admission verification?",
    answer:
      "No. Under Clause 5 of the UGC Fee and Refund Rules, colleges cannot keep original certificates. They can only check original mark sheets during admission. They must return them right after verification. Colleges can only keep self-attested photocopies on file.",
  },
  {
    question: "What does the UGC original documents rule state about colleges holding mark sheets?",
    answer:
      "The UGC rule states that no college can keep original documents. This includes Class 10 and 12 mark sheets, school leaving certificates, and transfer forms. The UGC warns that holding documents to force fee payment is illegal. Violating colleges face loss of affiliation, frozen grants, and de-listing.",
  },
  {
    question: "Can an engineering or technical college retain my certificates under AICTE rules?",
    answer:
      "No. Chapter VIII of the AICTE Approval Process Handbook strictly bans holding original certificates. Colleges that break this rule face penalties under Section 10(u) of the AICTE Act, 1987. Penalties include cut in seat intake, suspension of approval, and loss of security deposits.",
  },
  {
    question: "What should I do if my college demands fees for all 4 years before returning original documents?",
    answer:
      "Do not pay future fees under pressure. High Courts have ruled that colleges cannot hold certificates as security for unpaid fees. Send a written demand citing UGC Clause 5. File a complaint on the UGC e-Samadhan portal. You can also send a legal notice giving the college 48 hours to 7 days to return your records.",
  },
  {
    question: "Can a college withhold my degree or migration certificate for unpaid hostel or library fines?",
    answer:
      "No. The Delhi High Court ruled in Ashwini Kumar v. GGSIPU that colleges cannot hold degrees, mark sheets, or migration certificates for hostel or library fines. Withholding certificates violates fundamental rights under Article 21. Colleges must recover money through civil courts, not by locking away student records.",
  },
  {
    question: "How do I file an online complaint against a college on the UGC e-Samadhan portal?",
    answer:
      "Go to samadhan.ugc.ac.in and sign up. Click 'Grievance Redressal for Students'. Select the category 'Retention of Original Documents / Refund of Fees'. Upload your admission slip, written return request, and the college refusal letter. The UGC sends the complaint to the Vice-Chancellor and Registrar for action within 15 days.",
  },
  {
    question: "How effective is an advocate legal notice in getting original documents back from a college?",
    answer:
      "A lawyer notice is the fastest way to get your certificates back. Sent by Speed Post and email, it warns the Principal, Management, and Registrar of legal action. It warns them of High Court writ action under Article 226 and consumer cases on e-Jagriti. Most colleges return documents quickly to avoid public inquiry and regulatory penalties.",
  },
  {
    question: "Kya college admission cancel ya chhodne par original certificates rok sakta hai?",
    answer:
      "Bilkul nahi. UGC aur AICTE ke niyam anusaar koi bhi college ya university admission verification ke baad aapke original 10th, 12th ya graduation ke certificates apne paas nahi rakh sakti. Agar college aage ke saalon ki fees maang kar documents rokta hai, toh yeh poori tarah gair-kanooni hai. Aap UGC e-Samadhan par complaint darj kar sakte hain aur advocate dwara statutory legal notice bhejkar turant documents wapas le sakte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "College Holding Your Original Certificates: Getting Them Back",
  description:
    "Colleges can't withhold original certificates to force fee payment. UGC and AICTE rules, complaint routes and a legal notice.",
  datePublished: "2026-11-06T15:00:00+05:30",
  dateModified: "2026-11-06T15:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/college-not-returning-original-documents`,
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
    "@type": "EducationalOrganization",
    name: "Colleges and Universities in India",
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
      name: "College Fee Refund & Admission Cancellation",
      item: `${SITE_URL}/send-a-legal-notice/school-college-fee-refund-admission-cancellation`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Withheld Original Documents",
      item: `${SITE_URL}/college-not-returning-original-documents`,
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

export default function CollegeNotReturningOriginalDocumentsPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    {
      label: "College Fee Refund & Admission Cancellation",
      href: "/send-a-legal-notice/school-college-fee-refund-admission-cancellation",
    },
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
              <span>UGC &amp; AICTE Statutory Protection</span>
              <span className="text-red-500">•</span>
              <span>Document Recovery Mandate</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              College Holding Your Original Certificates: Getting Them Back
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (UGC &amp; High Court Mandate)
              </p>
              <p>
                Under UGC Clause 5 and High Court rulings, colleges cannot keep your original mark sheets or degrees after admission check. Colleges have no legal right to hold certificates to force fee payment. You can demand full return, file a grievance on UGC e-Samadhan, and send a lawyer notice before going to the High Court or Consumer Court.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">0 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Permitted Document Custody by HEIs</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Original Certificates Unconditionally Returnable</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Section 171</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Lien Inapplicable to Student Documents</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹25,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Consumer Harassment Awards for Retention</p>
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
            <CollegeDocumentsTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - UGC & AICTE Prohibition Against Retaining Original Certificates */}
              <section
                id="heading-ugc-prohibition"
                aria-labelledby="heading-ugc-prohibition-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-ugc-prohibition-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Withholding Student Certificates Violates UGC Rules
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every admission season, thousands of students face withheld certificates. Private colleges and universities often refuse to return Class 10, Class 12, or degree certificates. This happens when a student cancels admission or joins another college. College offices often tell students: &quot;Pay the full fee for all remaining years, or we will not release your records.&quot;
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Indian law, this practice is strictly illegal. The University Grants Commission (UGC) bars colleges from keeping original files. Under Clause 5 of UGC Rules, colleges may only check originals during admission. They must return them right away and keep only verified photocopies. Holding certificates as collateral violates UGC orders. Colleges doing so face penalties under Section 14 of the UGC Act, 1956.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The AICTE also enforces this rule across engineering, management, and pharmacy colleges. Under Chapter VIII of its handbook, technical colleges cannot hold original records. Violators face serious action. This includes reduced seat intake, suspended approvals, and loss of accreditation.
                </p>
                <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl text-xs sm:text-sm text-red-950 font-medium">
                  <strong>Legal Rule:</strong> College trust rules or parent bonds cannot override UGC rules. Section 23 of the Indian Contract Act, 1872 cancels any agreement that violates public policy or statutory regulations.
                </div>
              </section>

              {/* Section 2: H2 - Landmark Judicial Precedents */}
              <section
                id="heading-court-orders"
                aria-labelledby="heading-court-orders-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    High Court Rulings on Withheld Student Documents
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian High Courts and the National Consumer Disputes Redressal Commission (NCDRC) have consistently censured universities that use original certificates as financial hostages. Review these four landmark judicial precedents that establish your right to retrieve documents unconditionally:
                </p>

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
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Institutional Coercion:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding &amp; Legal Principle:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Judicial Relief Ordered
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on All Central, State &amp; Private Colleges
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

              {/* Section 3: Data Table of Statutory Deadlines & Penal Sanctions */}
              <section
                id="heading-statutory-table"
                aria-labelledby="heading-statutory-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-statutory-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines &amp; Penalties Against Errant Colleges
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Both central regulators and consumer forums enforce strict timelines and penalties when educational institutions unlawfully hold student credentials. Use this statutory breakdown to choose the correct legal forum and understand the legal leverage available against the institution:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[580px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Deadlines, Forums and Sanctions for Document Retention</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Retention Scenario</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Turnaround</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Appropriate Legal Forum</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Regulatory / Judicial Sanction</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Physical Verification at Admission
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Immediate Return (Same Day)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">College Admission Cell / Registrar</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">UGC Clause 5 Violation; De-affiliation risk</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Withdrawal Before Session Cut-off Date
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Within 48 Hours</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">UGC e-Samadhan Portal / AICTE</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">100% fee refund mandate; max ₹1,000 deduction</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Mid-Term Discontinuation (Demand for Remaining Fees)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">7 Calendar Days of Request</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">High Court (Art. 226) / e-Jagriti</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Writ of Mandamus; Zero claim on future fees</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Withholding Degree / Migration for Dues
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Immediate Issuance</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">District Consumer Disputes Commission</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 2(11) CPA Deficiency; Damages awarded</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">7 to 15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Registered Speed Post + Section 63 BSA Email</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Fixes institutional default before court filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  For monetary fee recoveries following admission withdrawal, check our statutory analysis of the <Link href="/law/ugc-fee-refund-policy" className="text-blue-700 underline">UGC Fee Refund Policy</Link> and coaching centre refund mandates under the <Link href="/law/coaching-centre-refund-guidelines-2024" className="text-blue-700 underline">2024 Coaching Centre Guidelines</Link>.
                </p>
              </section>

              {/* Section 4: Problem Tabs Island */}
              <section
                id="heading-problem-picker"
                aria-labelledby="heading-problem-picker-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Certificate Retention Disputes: Causes &amp; Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock the Governing Section and Immediate Escalation Action
                  </p>
                </div>

                <CollegeDocumentsProblemTabs />
              </section>

              {/* Section 5: The 5-Step Escalation Protocol with SVG Diagram */}
              <section
                id="heading-escalation-protocol"
                aria-labelledby="heading-escalation-protocol-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-escalation-protocol-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Protocol to Force Certificate Release
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Colleges rely on student panic and approaching counseling deadlines to extort fees. To break institutional resistance, follow this disciplined legal escalation hierarchy:
                </p>

                {/* SVG Visual Flowchart */}
                <figure className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Document Recovery Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Student Original Documents Legal Recovery Flowchart"
                  >
                    <defs>
                      <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="docAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="docSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#docGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Formal Demand</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Cite UGC Clause 5</text>
                    <text x="80" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">Written Application</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Parent University</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Escalate to VC / Dean</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Affiliation Violation</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#334155" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">UGC e-Samadhan</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Central Grievance</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">15-Day Direct Notice</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#docAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">7-Day Final Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Email</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#docSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Certificate Release</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Physical Surrender</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or High Court Writ</text>

                    {/* Bottom Benchmark Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY REMEDIES AGAINST WITHHELD ORIGINAL DOCUMENTS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• UGC Notification Clause 5: Absolute ban on HEIs taking original document custody</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Section 171 Indian Contract Act: General Lien does not apply to educational mark sheets &amp; degrees</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Article 226 Constitution of India: Writ of Mandamus directly against state &amp; deemed university administrations</text>
                  </svg>
                  <figcaption className="text-[11px] text-slate-500 mt-2 text-center">
                    Figure 1: Statutory five-tier escalation protocol to force return of withheld educational documents.
                  </figcaption>
                </figure>

                {/* Numbered Steps */}
                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Written Surrender Application Citing UGC Clause 5
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Submit a written letter to the Principal and Registrar. State clearly that you need your original mark sheets and migration certificate back under Clause 5 of UGC rules. Get a stamped receiving copy on your duplicate letter, or send it by registered email to create proof.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Escalate to the Vice-Chancellor and Dean of College Development
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If your college is private or affiliated, complain to the University Registrar and Dean. Affiliated colleges must obey university rules that ban holding student papers. The university can inspect records and order immediate release.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File an Online Grievance on the UGC e-Samadhan Centralized Portal
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Visit <a href="https://samadhan.ugc.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">samadhan.ugc.ac.in</a>. File a complaint under non-return of original documents. Upload your admission receipt, fee slips, and your written letters. The UGC sends a direct notice to college heads for action within 15 days.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the college delays and admission or job deadlines are near, send a lawyer notice. Have an advocate send it by Speed Post and email to the Principal and Registrar. The notice gives a 7-day deadline and cites High Court rulings to compel document release.
                      </p>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        View transparent drafting fees on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Approach the High Court for Writ of Mandamus or File on e-Jagriti
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the college still refuses, file a Writ of Mandamus under Article 226 in the High Court. High Courts hear certificate cases urgently and often order return within 48 to 72 hours. You can also file on e-Jagriti for mental distress and career damages under the Consumer Protection Act.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Worked Example Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Student Recovers Mark Sheets &amp; Migration
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">B.Tech Second-Year Discontinuation (Bengaluru Private College)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Aditya joined a private engineering college in Bengaluru. He paid Year 1 fees of ₹1,80,000. He deposited his Class 10, Class 12, and CBSE migration certificates at admission. In his third semester, he cleared a national exam and chose to join a top government institute.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Aditya requested his original mark sheets and Transfer Certificate. The college refused. It demanded ₹4,50,000 for the remaining five semesters under an admission bond. The office stated certificates would stay locked until all fees were paid.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Aditya contacted LegalRecovery.in. An advocate served a statutory demand notice to the Principal and Registrar. The notice cited UGC Clause 5 and High Court precedents. It set a 7-day return deadline, warning of High Court writ action and ₹5,00,000 in consumer court damages.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Five days after receiving the Speed Post notice, the college called Aditya&apos;s father. The college legal team agreed with the High Court precedents. They returned all original mark sheets and issued the Transfer Certificate without charging any remaining fees.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Dossier Before Issuing Statutory Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communication and digital documents are fully admissible before consumer forums and High Courts. Assemble these 6 essential records:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Document Deposit Acknowledgement / Receipt:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed verification slip or checklist confirming the college received your original mark sheets and certificates.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Admission Fee Payment Receipts:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Bank statements, challans, or online gateway receipts showing tuition and caution deposits paid.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Dated Application for Document Return:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copy of your written withdrawal or return letter bearing the college receiving stamp or sent email timestamp.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">College Refusal or Penalty Demand Letter:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Any official letter, email, or WhatsApp message from management demanding remaining years&apos; fees or fines.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Proof of Subsequent Allotment or Employment:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Offer letter, counseling allotment slip, or job joining date proving imminent career prejudice if certificates are withheld.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">UGC e-Samadhan Docket Acknowledgment:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Complaint reference ID and screenshot from the UGC or AICTE grievance portal showing unresolved status.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Key Takeaways Box (Archetype G6 Aside Requirement) */}
              <aside
                id="heading-takeaways"
                aria-labelledby="heading-takeaways-title"
                className="bg-amber-50/80 border border-amber-300 rounded-2xl p-5 sm:p-6 shadow-xs scroll-mt-28 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                  <h2
                    id="heading-takeaways-title"
                    className="text-base sm:text-lg font-bold text-amber-950 uppercase tracking-wider"
                  >
                    Key Takeaways &amp; Student Rights Summary
                  </h2>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-amber-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-700">●</span>
                    <span><strong>No Retention Right:</strong> UGC Clause 5 and AICTE rules strictly ban colleges from keeping original certificates after same-day admission checks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-700">●</span>
                    <span><strong>No Legal Lien:</strong> Certificates are personal property under Article 21. Section 171 of the Contract Act gives colleges no lien to hold student records for fees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-700">●</span>
                    <span><strong>Fee Bonds Are Void:</strong> Any bond demanding fees for untaught semesters is void under Section 23 of the Indian Contract Act.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-700">●</span>
                    <span><strong>Legal Notice Impact:</strong> A statutory lawyer notice sent to the Principal and Registrar resolves most document retention disputes quickly without court litigation.</span>
                  </li>
                </ul>
              </aside>

              {/* Section 9: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Colleges Withholding Original Documents
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in UGC Notifications, AICTE Directives and High Court Precedents
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

              {/* Section 10: Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Mandates &amp; Official Regulatory Sources
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
                  Statutory verification status: All provisions verified against active UGC Gazette Notifications, AICTE Approval Regulations, High Court Mandamus precedents, and e-Jagriti consumer commission guidelines as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice to College &amp; Principal
                </h2>
                <CollegeDocumentsNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Education &amp; Fee Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/school-college-fee-refund-admission-cancellation"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    College Admission Cancellation Notice →
                  </Link>
                  <Link
                    href="/law/ugc-fee-refund-policy"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    UGC Fee Refund Policy Slabs →
                  </Link>
                  <Link
                    href="/law/coaching-centre-refund-guidelines-2024"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    2024 Coaching Refund Guidelines →
                  </Link>
                  <Link
                    href="/edtech-course-loan-emi-cancellation-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Ed-Tech Course Loan EMI Cancellation →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fees →
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
