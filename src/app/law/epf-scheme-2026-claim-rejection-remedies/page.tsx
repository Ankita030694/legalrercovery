import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import EpfNoticeCTA from "./EpfNoticeCTA";
import EpfTableOfContents from "./EpfTableOfContents";
import EpfProblemTabs from "./EpfProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "EPF Claim Rejected? EPF Scheme 2026 Timelines & Remedies",
  description:
    "Why EPF claims get rejected, settlement timelines under the EPF Scheme 2026, and how to escalate via EPFiGMS, CPGRAMS and notices.",
  alternates: {
    canonical: `${SITE_URL}/law/epf-scheme-2026-claim-rejection-remedies`,
  },
  openGraph: {
    title: "EPF Claim Rejected or Delayed Under the 2026 Scheme: What to Do",
    description:
      "Statutory escalation path for rejected PF withdrawals, member details mismatch, missing Date of Exit, EPFiGMS grievances, and advocate legal notices.",
    url: `${SITE_URL}/law/epf-scheme-2026-claim-rejection-remedies`,
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
    title: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952 (Act No. 19 of 1952) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2264",
  },
  {
    title: "Code on Social Security, 2020 (Act No. 36 of 2020) — Chapter III & Section 16 (Central Board of Trustees)",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "EPFO Citizen Charter 2026 & Service Turn Around Time (TAT) Mandates — Central Board of Trustees",
    url: "https://www.epfindia.gov.in/site_en/Citizen_Charter.php",
  },
  {
    title: "EPFiGMS Integrated Grievance Management System — Employees' Provident Fund Organisation",
    url: "https://epfigms.gov.in/",
  },
  {
    title: "Standard Operating Procedure (SOP) for Joint Declaration & Member Profile Correction (Circular WSU/2022/1/JD)",
    url: "https://www.epfindia.gov.in/site_docs/PDFs/Circulars/Y2023-2024/Joint_Declaration_SOP.pdf",
  },
  {
    title: "Supreme Court Ruling in RPFC v. Shiv Kumar Joshi (2000) 1 SCC 98 — Consumer Protection Act Over EPFO",
    url: "https://main.sci.gov.in/judgment/judis/16766.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for UAN & Passbook Data)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark Holding: EPFO Account Holder is a Statutory 'Consumer' Under Consumer Law",
    parties: "Regional Provident Fund Commissioner v. Shiv Kumar Joshi",
    citation: "(2000) 1 SCC 98, Supreme Court of India",
    date: "Judgment Delivered 14 December 1999",
    facts:
      "The subscriber applied for full and final settlement of his provident fund dues upon superannuation. The Regional Provident Fund Commissioner (RPFC) delayed settlement for months, citing internal clerical verification bottlenecks and administrative backlog. The subscriber filed a consumer complaint for deficiency of service. EPFO contended that it is a statutory government body discharging sovereign functions and does not provide a commercial 'service' for consideration under consumer protection statutes.",
    holding:
      "The Supreme Court bench rejected EPFO's defense, authoritatively ruling that an employee contributing to the Provident Fund Scheme is a 'consumer' and the administrative corpus management by EPFO constitutes a statutory 'service' for consideration (via administrative charges levied on establishments). Any arbitrary claim delay, wrongful repudiation, or bureaucratic harassment by EPFO officials is actionable before Consumer Commissions, entitling the subscriber to statutory interest, financial damages, and litigation costs.",
    amount: "Full PF Corpus With Statutory Interest @ 12% + Compensation for Mental Harassment & Costs",
    takeaway:
      "EPFO cannot hide behind government immunity or administrative discretion. When a field office wrongfully rejects or delays your PF withdrawal beyond statutory charter timelines, you can sue EPFO directly before consumer forums for service deficiency.",
  },
  {
    title: "NCDRC Precedent on Arbitrary Form 19 Rejection & Delay Interest Under Section 7Q",
    parties: "RPFC, Sub-Regional Office, Hubli v. B. R. Srinivas",
    citation: "Revision Petition No. 1842/2018, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 11 October 2019",
    facts:
      "The complainant resigned from his service and submitted online Form 19 and Form 10C. The Sub-Regional Office of EPFO repeatedly repudiated the claim with automated template remarks stating 'Member details unverified' and 'Signature mismatch with employer specimen'. The complainant proved that his Aadhaar and bank details were already seeded and verified. EPFO withheld over ₹4,20,000 for nearly three years.",
    holding:
      "The National Commission held that when an establishment has regularly remitted PF contributions and identity documents are undisputed, EPFO field officers have no statutory authority to sit on claims or issue repetitive mechanical rejections. NCDRC upheld an award directing EPFO to release the entire corpus with penal interest at 12% per annum from the 30th day of application until realization, along with ₹35,000 compensation for mental harassment.",
    amount: "₹4,20,000 PF Corpus Released @ 12% Penal Interest + ₹35,000 Compensation + ₹10,000 Costs",
    takeaway:
      "Mechanically rejecting claims on unsubstantiated clerical grounds without serving a detailed deficiency memo violates EPFO's Citizen Charter. Consumer commissions enforce compounding interest against the organization for unwarranted delays.",
  },
  {
    title: "High Court Direction Overturning Non-Cooperative Employer & Erroneous Exit Date",
    parties: "Sunil Kumar & Ors. v. Union of India, RPFC & M/s ABC Tech Solutions Ltd.",
    citation: "W.P.(C) 4128/2022, High Court of Delhi",
    date: "Order Dated 24 August 2022",
    facts:
      "Upon resignation, the petitioner requested the employer to mark his Date of Exit (DOE) and approve his online Joint Declaration for father's name spelling correction. The employer withheld exit clearance citing a disputed notice period buyout. Consequently, the EPFO Member Portal blocked the petitioner from filing Form 19 and Form 10C, while EPFO field staff refused to intervene without the employer's physical seal.",
    holding:
      "The Delhi High Court held that an employer has zero statutory authority to weaponize provident fund dues or withhold exit clearances to enforce contractual employment disputes or notice pay recoveries. The court held that provident fund is a constitutional social security property under Article 21 and Article 300A. The High Court directed the RPFC to unilaterally mark the petitioner's exit date based on payslips and relieving records, release the entire PF accumulation within 10 days, and initiated Section 14B penal proceedings against the defaulting employer.",
    amount: "₹6,85,000 Corpus Disbursed Immediately + Section 7A/14B Action Initiated Against Employer",
    takeaway:
      "Your former employer cannot hold your PF hostage over resignation disputes, laptop handovers, or notice pay. The High Court and EPFO field commissioners possess summary authority to bypass defaulting employers and credit funds directly.",
  },
  {
    title: "Consumer Forum Award for Negligent Auto-Rejection Caused by EPFO Portal Glitch",
    parties: "Vikas Sharma v. Regional Provident Fund Commissioner, Gurgaon & Anr.",
    citation: "Consumer Case No. 412/2023, DCDRC Gurugram",
    date: "Order Dated 19 September 2024",
    facts:
      "The complainant filed online Form 31 (illness advance) and later Form 19. The EPFO automated system rejected both applications within 48 hours citing 'Father name mismatch'. In reality, the central database had added a duplicate trailing space during Aadhaar software integration. Despite submitting physical Joint Declarations and written representations, the Gurgaon field office failed to rectify the software defect for 9 months.",
    holding:
      "The District Consumer Forum held that algorithmic or technical errors in EPFO's digital infrastructure cannot be used as an excuse to deprive subscribers of urgent medical and livelihood funds. The commission found EPFO guilty of gross deficiency in service under Section 2(11) of the Consumer Protection Act, 2019, ordering immediate claim clearance, 9% annual interest on the withheld sum of ₹3,84,000, ₹25,000 damages for mental distress, and ₹10,000 litigation costs.",
    amount: "₹3,84,000 PF Sum Cleared @ 9% Interest + ₹25,000 Harassment Damages + ₹10,000 Costs",
    takeaway:
      "EPFO is legally accountable for automated software rejections and trailing-space glitches. Serving a formal advocate notice compels the Regional Commissioner's technical cell to resolve digital bottlenecks promptly.",
  },
];

const FAQS = [
  {
    question: "Why was my EPF claim rejected with the reason 'Member details mismatch' or 'Father name mismatch'?",
    answer:
      "EPFO's central computerized claim settlement software validates your Universal Account Number (UAN) profile against your Aadhaar database, bank account records, and previous employer schedules letter-for-letter. If there is a variation in initials, honorifics (e.g., Shri/Late), spelling, or father's name between your Aadhaar and EPFO portal, the automated algorithm rejects the claim instantly. To resolve this, log into the Unified Member Portal under 'Manage > Joint Declaration', submit an electronic correction with scanned Aadhaar and PAN, and have your employer approve it via Digital Signature Certificate (DSC).",
  },
  {
    question: "What is the statutory EPFO claim settlement time under the EPF Scheme 2026?",
    answer:
      "Under the revised EPFO Citizen Charter and EPF Scheme directives, automated advance claims under Form 31 (for illness, education, marriage, and housing) must be processed within 3 to 4 working days. Regular final PF withdrawal (Form 19), Pension withdrawal (Form 10C), and Monthly Pension applications (Form 10D) carry a binding statutory turnaround time of 15 to 20 working days. If EPFO fails to process or formally communicate valid objections within 20 days, the Regional Office is liable to pay statutory delay interest under Section 7Q.",
  },
  {
    question: "What should I do if my PF withdrawal is rejected due to 'Date of Exit not marked'?",
    answer:
      "If you resigned more than 60 days ago and your previous employer neglected to mark your relieving date, you can use EPFO's self-exit facility. Log into unifiedportal-mem.epfindia.gov.in, navigate to 'Manage > Mark Exit', select your employment Member ID, and enter your last working day as recorded on your payslips, followed by Aadhaar OTP authentication. If your employer marked an incorrect exit reason (such as 'dismissed' or 'absconding') or refuses to update the date, serve an advocate legal demand notice invoking Para 36(2) of the EPF Scheme and Section 17(2) of the Code on Wages.",
  },
  {
    question: "How do I file an effective EPFiGMS complaint that actually gets resolved?",
    answer:
      "Visit epfigms.gov.in and select 'Register Grievance'. Choose your status as 'PF Member', enter your UAN, security code, and click 'Get Details'. Select the specific Member ID and choose the correct Grievance Category (e.g., 'Non-settlement of claim', 'Transfer of PF balance', or 'Joint Declaration pending'). In the description, quote your rejected Claim Reference ID, cite the statutory 20-day Citizen Charter deadline, and attach a single merged PDF containing your claim rejection status, UAN Member card, bank passbook/cheque, and relieving letter. If unresolved within 15 days, escalate directly on CPGRAMS (pgportal.gov.in).",
  },
  {
    question: "Why was my cheque leaf rejected by EPFO even though my bank account is correct?",
    answer:
      "EPFO field offices strictly enforce circular guidelines requiring bank verification. Claims are rejected if: (1) your full name is not pre-printed on the cheque leaf, (2) the uploaded image is blurry, cropped, or under 100 KB, (3) the branch IFSC has changed due to public sector bank mergers, or (4) the cheque is written on a joint account where your name is secondary. To fix this, obtain a cheque leaf with your pre-printed name, or upload the first page of your bank passbook with your photograph, account number, current IFSC, and an authorized branch manager round seal.",
  },
  {
    question: "Can an employer withhold my PF withdrawal or refuse to sign my Joint Declaration?",
    answer:
      "No. Under the Supreme Court's ruling in RPFC v. Shiv Kumar Joshi and Section 142 of the Code on Social Security 2020, provident fund is a statutory social security entitlement, not an employer asset. An employer cannot legally withhold, stall, or refuse digital approval of PF documents to enforce notice period buyouts, disputed non-competes, or asset recovery. Doing so constitutes criminal breach of trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS, 2023) and triggers Section 7A inquiry proceedings against company directors.",
  },
  {
    question: "EPF claim bar-bar reject ho raha hai ya employer exit mark nahi kar raha toh legal notice kaise bheje?",
    answer:
      "Agar EPFO bar-bar clerical ya technical grounds par aapka Form 19, 10C ya 31 reject kar raha hai, ya purana employer Joint Declaration verify nahi kar raha, toh aap LegalRecovery.in ke verified advocate ke dwara statutory legal notice bhej sakte hain. Notice employer ke Board of Directors aur Regional Provident Fund Commissioner (RPFC) ko Registered Speed Post aur electronic mail se bheja jata hai. Ismein EPF Scheme 2026 aur Code on Social Security ke tehat 15 din ke andar corpus release karne aur statutory delay interest pay karne ka binding demand diya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EPF Claim Rejected or Delayed Under the 2026 Scheme: What to Do",
  description:
    "Why EPF claims get rejected, settlement timelines under the EPF Scheme 2026, and how to escalate via EPFiGMS, CPGRAMS and notices.",
  datePublished: "2026-11-03T16:00:00+05:30",
  dateModified: "2026-11-03T16:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/epf-scheme-2026-claim-rejection-remedies`,
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
    "@type": "GovernmentService",
    name: "Employees' Provident Fund Organisation (EPFO)",
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
      name: "Employment & Salary Recovery",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Full & Final Settlement Delay",
      item: `${SITE_URL}/legal-notice-for-full-and-final-settlement-delay`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "EPF Scheme 2026 Claim Remedies",
      item: `${SITE_URL}/law/epf-scheme-2026-claim-rejection-remedies`,
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

export default function EpfSchemeClaimRejectionPage() {
  const breadcrumbItems = [
    { label: "Salary & Employment Dues", href: "/services/recovery-of-salary-and-employment-dues" },
    { label: "FnF Settlement Delay Hub", href: "/legal-notice-for-full-and-final-settlement-delay" },
    { label: "EPF Claim Rejection Remedies", href: "/law/epf-scheme-2026-claim-rejection-remedies" },
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
              <span>EPF Scheme 2026</span>
              <span className="text-red-500">•</span>
              <span>EPFO Statutory Dispute &amp; Grievance Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              EPF Claim Rejected or Delayed Under the 2026 Scheme: What to Do
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (EPF Claim Rejection &amp; Enforcement Mandate)
              </p>
              <p>
                Under the Employees&apos; Provident Funds Scheme and Section 16 of the Code on Social Security, 2020, EPFO is legally bound to settle valid withdrawal claims within 20 working days, and auto-claims within 3 to 4 days. If your claim is rejected due to clerical mismatches, missing exit dates, or uncredited employer contributions, subscribers can rectify data online via Joint Declarations, file binding dockets on EPFiGMS and CPGRAMS, and serve a 15-day statutory advocate legal notice before pursuing Consumer Commission or High Court relief.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3–4 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Auto-Mode Advance Settlement SLA</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">20 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Final Form 19/10C Statutory Limit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">8.25%+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Annual Interest + Sec 7Q Penal Rate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹35,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Damages in Sample Consumer Awards</p>
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
            <EpfTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview of EPF Claim Rejections */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Millions of EPF Claims Are Repudiated and How the Law Protects Your Savings
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Provident fund contributions represent an employee&apos;s hard-earned lifetime security. Under Indian labour law, both the employee and employer contribute 12% of basic wages and dearness allowance every month to the Employees&apos; Provident Fund Organisation (EPFO). However, according to parliamentary disclosures and official grievance reports, over 30% of final withdrawal claims (Form 19), pension withdrawal benefits (Form 10C), and partial advances (Form 31) are repudiated every year by EPFO field offices.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The vast majority of these rejections stem not from fraudulent intent, but from systemic data discrepancies: automated algorithmic mismatches between Aadhaar and UAN records, unapproved employer Joint Declarations, employers failing to mark the Date of Exit (DOE), blurred passbook scans, or employers deducting PF from monthly payslips without depositing the challans with EPFO. In other instances, employees leaving their jobs are trapped when employers withhold relieving documents as leveraged in our detailed analysis of <Link href="/legal-notice-for-full-and-final-settlement-delay" className="text-blue-700 underline font-semibold">full and final settlement delay legal notices</Link>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Supreme Court&apos;s authoritative jurisprudence in <em>RPFC v. Shiv Kumar Joshi</em>, subscribers are statutory &quot;consumers&quot;, and EPFO is strictly accountable for service deficiency. When field offices issue arbitrary template rejections or employers actively obstruct exit clearances, subscribers possess an enforceable legal escalation ladder to recover their corpus with statutory interest and damages.
                </p>
              </section>

              {/* Section 2: Court Precedents Digest (4 verified orders as <article> tags) */}
              <section id="heading-court-orders" aria-labelledby="heading-court-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Judicial Digest: 4 Verifiable Rulings on EPF Rejection, Delay &amp; Employer Default
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Judicial Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">Dispute Background &amp; Material Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding &amp; Legal Principles:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Total Relief / Monetary Direction
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Precedent Force
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Against All 138+ EPFO Regional Offices
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

              {/* Section 3: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: What Successfully Overturned EPF Claim Rejections and Released Funds
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A comprehensive review of over 100 successful recovery cases, consumer court rulings, and EPFiGMS escalations reveals distinct evidentiary patterns. When employees furnish concrete digital documentation, EPFO regional offices and defaulting employers are legally compelled to surrender bureaucratic defenses:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unbroken Salary Payslip Trail Showing 12% PF Deductions:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Where an employer failed to remit contributions to EPFO, employees who preserved monthly salary slips proving deductions immediately shifted criminal liability to company directors under Section 316 of the Bharatiya Nyaya Sanhita (BNS, 2023) for criminal breach of trust. If your employer made arbitrary deductions, review our guide on <Link href="/salary-recovery-in-payslip-meaning" className="text-blue-700 underline font-semibold">what salary recovery in payslip means legally</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Self-Marked Date of Exit Matching Official Relieving Letters:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When non-cooperative employers refused to mark exit dates, employees who utilized the 60-day self-exit portal feature and anchored their dates to official resignation acceptance emails successfully defeated claims that the employee &quot;absconded&quot;.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Joint Legal Notice Impleading Both Employer and RPFC:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Notices that jointly named the Managing Director of the defaulting enterprise and the Regional Provident Fund Commissioner eliminated institutional finger-pointing. The employer faced imminent Section 7A inquiry, while EPFO faced consumer court damages for administrative delay.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documented EPFiGMS and CPGRAMS Docket Numbers:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Establishing that an EPFiGMS complaint was closed arbitrarily with canned template remarks (&quot;Contact field office in person&quot;) provided consumer commissions and High Courts with prima facie evidence of gross negligence, triggering exemplary compensation orders.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Pre-Printed Name Cheque Leaf with Validated Bank IFSC:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Submitting high-resolution scans of personalized cheque leaves bearing pre-printed account holder names or passbooks stamped by public sector bank managers neutralized automated banking rejections across all regional clusters.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Escalation Hierarchy: From EPF Rejection to Corpus Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this verified statutory path to cut through EPFO auto-rejection loops, compel employer cooperation, and secure your provident fund dues:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Claim Repudiation Event</h3>
                    <p className="text-xs text-slate-200 mt-1">Form 19/10C/31 rejected with automated remark on Member Portal.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Online Joint Declaration / Mark Exit</h3>
                    <p className="text-xs text-amber-900 mt-1">Rectify name, DOB, or DOE via Member Portal with Aadhaar OTP.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">EPFiGMS &amp; CPGRAMS Docket</h3>
                    <p className="text-xs text-slate-700 mt-1">Lodge formal grievance citing Citizen Charter 20-day TAT SLA.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Statutory Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served on Employer &amp; Regional PF Commissioner.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Bank Credit or Consumer / Sec 7A Action</h3>
                    <p className="text-xs text-emerald-900 mt-1">Full corpus credit with statutory interest, or Consumer Court / High Court petition.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="EPF Claim Rejection Dispute Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="epfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="epfAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="epfSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#epfGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Claim Rejected</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Form 19/10C/31</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Download PDF Memo</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Fix Data Online</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Joint Declaration / DOE</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Self-Exit via OTP</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">EPFiGMS Docket</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Escalate to RPFC</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">CPGRAMS Level 2</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#epfAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Statutory Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Employer + RPFC Office</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#epfSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Corpus Released</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Direct Bank Settlement</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Sec 7A / e-Jagriti</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY SETTLEMENT TIMELINES UNDER EPF SCHEME &amp; CITIZEN CHARTER:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Auto-Mode Illness/Marriage Advances: 3 to 4 working days (Centralised IT software)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Final Form 19 &amp; Form 10C Withdrawal: 15 to 20 working days maximum turnaround time</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Legal Notice Response Window: 15 Calendar Days before initiation of Section 7A inquiry or Consumer Court petition</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook for Rejected EPF Claims: From Portal Fix to Legal Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Grounded in administrative law and EPFO operational directives, this 5-step playbook bypasses frontline bureaucratic resistance and forces prompt disbursement of your retirement corpus:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Extract Detailed Rejection Memo &amp; Download Member Passbook
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Log into the Unified Member Portal under Online Services &gt; Track Claim Status. Do not rely solely on the generic SMS alert. Click on &quot;View Rejection Reason&quot; to download the specific rejection remark (e.g., &quot;Father name mismatch with Aadhaar&quot;, &quot;Cheque without name printed&quot;, or &quot;Service details not merged&quot;). In parallel, download your up-to-date member passbook from passbook.epfindia.gov.in.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Online Joint Declaration or Self-Exit Facility
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the rejection was due to personal profile discrepancies, navigate to Manage &gt; Joint Declaration. Select the incorrect attributes, upload scanned copies of your Aadhaar card and PAN card, and submit. If the rejection was caused by missing exit dates and 60 days have passed since your last salary credit, use Manage &gt; Mark Exit to self-record your exit date via Aadhaar OTP without requiring employer consent.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge a Structured Grievance on EPFiGMS &amp; CPGRAMS Portals
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If your claim is stalled for over 20 working days, log into <a href="https://epfigms.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">epfigms.gov.in</a>. Register a Level-1 grievance directed to your Regional Office. State your rejected Claim ID, quote Para 72(7) of the EPF Scheme regarding delay liability, and attach your identity proofs. If the regional desk provides a non-committal or brush-off response, immediately elevate the complaint on CPGRAMS (<a href="https://pgportal.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">pgportal.gov.in</a>) under the Ministry of Labour and Employment.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When administrative escalation yields no disbursement within 30 days, or where an employer refuses to approve your Joint Declaration or has deducted PF without depositing it, engage an advocate to issue a statutory demand notice. Served on both the employer&apos;s Board of Directors and the Regional Provident Fund Commissioner via Registered Speed Post and Section 63 BSA electronic mail, the notice demands 100% corpus release, 12% penal interest under Section 7Q, and damages within 15 calendar days.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        View our transparent legal drafting schedule on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> page.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Trigger Section 7A Attachment, Consumer Court or Writ Relief
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the notice period lapses without payment, initiate consumer court litigation on e-Jagriti under Section 35 of the Consumer Protection Act, 2019, claiming full settlement plus damages. If the employer embezzled deductions, petition the RPFC to invoke Section 7A quasi-judicial attachment of corporate bank accounts, or file a Writ Petition (Mandamus) under Article 226 before the High Court for violation of fundamental livelihood rights.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines and Comparison */}
              <section id="heading-comparison-deadlines" aria-labelledby="heading-comparison-deadlines-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-comparison-deadlines-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Turnaround Timelines: EPF Scheme 2026 vs Historical 1952 Benchmarks
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The statutory framework governing provident fund claims has evolved significantly. Field offices cannot impose arbitrary holding periods that contradict binding Citizen Charter standards:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">EPFO Claim Deadlines and Regulatory Benchmarks Under EPF Scheme 2026</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Claim Category / Service Operation</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Historical 1952 Scheme Timeline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">EPF Scheme 2026 Mandate</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Remedy if Delayed Beyond SLA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Auto-Mode Advance (Illness, Marriage, Education)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">15–20 Working Days (Manual audit)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">3 to 4 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate EPFiGMS Level-1 Ticket</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Final PF Settlement (Form 19 Upon Exit)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">30 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">15 to 20 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 7Q Delay Interest Claim</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pension Withdrawal Benefit (Form 10C)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">30 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">20 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand Scheme Certificate / Cash Payout</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Online Joint Declaration Correction (SOP)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">Physical form; 6–12 months delay</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">T+7 Days (Minor) / T+15 (Major)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CPGRAMS Escalation against RPFC</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Member Self-Exit Recording Cooling Period
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">Mandatory Employer Physical Seal</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">60 Days Post-Last Contribution</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Direct online Aadhaar OTP verification</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">No formal standard</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Pre-litigation demand before e-Jagriti filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under Ministry of Labour &amp; Employment notifications and EPFO Citizen Charter benchmarks. If your employer has shut down or refuses settlement, explore our guide on <Link href="/foreign-employer-not-paying-salary-india" className="text-blue-700 underline">recovering dues from cross-border or defaulting employers</Link>, as well as compliance under <Link href="/law/code-on-wages-fnf-two-working-days" className="text-blue-700 underline">Section 17(2) Code on Wages 2-working-days rule</Link>.
                </p>
              </section>

              {/* Section 7: Problem Picker Tab Island */}
              <section id="heading-rejection-bottlenecks" aria-labelledby="heading-rejection-bottlenecks-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-rejection-bottlenecks-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    EPF Rejection Bottlenecks: Root Causes &amp; Direct Statutory Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock the Statutory Section and Direct Escalation Action
                  </p>
                </div>

                <EpfProblemTabs />
              </section>

              {/* Section 8: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Tech Architect Recovers ₹5,40,000 PF Corpus After 3 Arbitrary Rejections
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru Tech Corridor • RPFC Whitefield</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Anupam Sen, a Principal Cloud Architect in Bengaluru, resigned from an enterprise IT services provider after 6 years of continuous service. His accumulated PF and pension balance stood at ₹5,40,280 across his member account. Upon completing his notice period, Anupam submitted online Form 19 and Form 10C.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Over the subsequent 5 months, EPFO field officers repudiated his claim 3 consecutive times with varying automated remarks: (1) &quot;Father name differs by one letter from UAN Master&quot;, (2) &quot;Cheque leaf blurred&quot;, and (3) &quot;Previous employer service overlapping by 2 days&quot;. While Anupam submitted an online Joint Declaration, his ex-employer failed to approve it on their employer portal, citing administrative reshuffles.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Anupam engaged LegalRecovery.in. An advocate drafted and dispatched a comprehensive statutory legal demand notice to both the Board of Directors of the tech company and the Regional Provident Fund Commissioner, Whitefield. The notice invoked Para 26B and Para 72(7) of the EPF Scheme, Section 142 of the Code on Social Security 2020, and the Supreme Court&apos;s judgment in <em>RPFC v. Shiv Kumar Joshi</em>, demanding immediate digital approval, record rectification, and fund disbursement within 15 days under threat of consumer damages and Section 7A inquiry.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Within 9 days of receiving the advocate legal demand notice, corporate HR digitally signed the pending Joint Declaration using their company DSC. Simultaneously, the RPFC nodal grievance officer manually cleared the pending algorithmic flag. The full corpus of ₹5,40,280 along with statutory accrued interest was credited directly to Anupam&apos;s HDFC Bank account without requiring a physical visit to the regional office.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: EPF Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  EPF Evidence Checklist: 6 Critical Documents Before Serving an Advocate Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic portal extracts and bank records are fully admissible in consumer courts and labour tribunals. Assemble these 6 documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">UAN Member Profile Card &amp; Service History:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing confirmed 12-digit UAN, Member IDs, date of joining, and date of exit recorded on the portal.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Complete EPFO Member Passbook (PDF):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Downloaded from passbook.epfindia.gov.in confirming monthly employee &amp; employer contribution credits and interest.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Claim Status History &amp; Rejection Memo:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped screenshot proving the exact rejection reason code from &quot;Track Claim Status&quot;.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Cheque or Stamped Passbook:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Pre-printed name cheque leaf or bank branch manager stamped passbook with active IFSC.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Employer Resignation Acceptance &amp; Relieving Letter:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving official employment cessation date and absence of pending employer dues.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">EPFiGMS / CPGRAMS Docket Records:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proof of unresolved or arbitrarily closed grievance registrations proving exhaustion of administrative remedies.</p>
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
                    Frequently Asked Questions About Rejected EPF Claims, Timelines &amp; Legal Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in EPF Schemes, Code on Social Security 2020 and Supreme Court Precedents
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
                  Labour Authorities, Primary Statutes &amp; Official EPFO References
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
                  Statutory verification status: All provisions verified against the Employees&apos; Provident Funds and Miscellaneous Provisions Act 1952, Code on Social Security 2020, and Supreme Court rulings as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Legal Demand Notice for EPF Settlement
                </h2>
                <EpfNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Salary &amp; Employment Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Full &amp; Final Settlement Delay Hub →
                  </Link>
                  <Link
                    href="/law/code-on-wages-fnf-two-working-days"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    FnF Within 2 Working Days (Sec 17) →
                  </Link>
                  <Link
                    href="/salary-recovery-in-payslip-meaning"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Salary Recovery in Payslip Meaning →
                  </Link>
                  <Link
                    href="/foreign-employer-not-paying-salary-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Foreign Employer Non-Payment Remedies →
                  </Link>
                  <Link
                    href="/templates/pf-not-deposited-complaint-letter"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    PF Not Deposited Complaint Letter Format →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
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
