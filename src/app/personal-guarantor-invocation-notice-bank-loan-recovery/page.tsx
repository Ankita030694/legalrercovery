import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import GuaranteeTableOfContents from "./GuaranteeTableOfContents";
import GuaranteeScenarioTabs from "./GuaranteeScenarioTabs";
import GuaranteeInvocationCTA from "./GuaranteeInvocationCTA";

export const revalidate = 86400;

const PAGE_PATH = "/personal-guarantor-invocation-notice-bank-loan-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Invoking Personal & Corporate Guarantees in Bank Defaults: Limitation Triggers, Section 128 & IBC Form B";
const META_TITLE = "Personal Guarantee Invocation Notice: s.128 & IBC Part III";
const META_DESCRIPTION =
  "Crucial bank guide to invoking continuing guarantees properly: triggering limitation on demand, co-extensive liability under s.128 & IBC Section 95 Form B.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "Personal & Corporate Guarantee Invocation Notice Guide for Indian Banks"
        ),
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
    title:
      "The Indian Contract Act, 1872 — Chapter VIII (Sections 126, 128, 129, 130, 133–135 & 141) on Contracts of Guarantee",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Insolvency and Bankruptcy Code (IBC), 2016 — Part III (Sections 60(2), 95, 96, 97, 99 & 100) for Personal Guarantors to Corporate Debtors",
    url: "https://www.indiacode.nic.in/handle/123456789/2154",
  },
  {
    title:
      "IBBI — Insolvency and Bankruptcy (Application to Adjudicating Authority for Insolvency Resolution Process for Personal Guarantors to Corporate Debtors) Rules, 2019 (Rule 7(1) Form B & Form C)",
    url: "https://ibbi.gov.in/en/legal-framework/rules",
  },
  {
    title:
      "The Limitation Act, 1963 — Sections 18, 19 & Schedule Articles 55 and 113 (Three-Year Limitation on Breach & On-Demand Deeds)",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 — Section 63 & Statutory Schedule (Electronic Evidence Certificate for Notices & CBS Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "National Company Law Tribunal (NCLT) e-Filing Portal & National E-Governance Services Ltd. (NeSL) Information Utility",
    url: "https://nclt.gov.in/",
  },
];

const DECISION_STAGES = [
  {
    step: "01",
    title: "Deed & Covenant Audit",
    window: "Day 0–2",
    detail:
      "Inspect the executed Deed of Guarantee for 'on-demand' wording, continuing guarantee clauses (s.129), variance waivers (ss.133–135), stamp duty adequacy, and MCA Board/Special Resolutions (for corporate guarantors).",
  },
  {
    step: "02",
    title: "Explicit Invocation Notice",
    window: "Day 3–10",
    detail:
      "Serve a standalone Guarantee Invocation Notice directly on the guarantor (never a borrower recall 'CC') quoting deed date, itemized arrears, and a firm 7-to-15-day payment deadline to trigger the limitation clock.",
  },
  {
    step: "03",
    title: "Default Crystallization",
    window: "Day 11–18",
    detail:
      "Upon expiry of the invocation window without full discharge, the guarantor's independent Date of Default legally crystallizes under Channaveerappa Beleri; record the default with NeSL Information Utility (Form D).",
  },
  {
    step: "04",
    title: "IBC Rule 7(1) Form B",
    window: "Day 19–33",
    detail:
      "For personal guarantors to corporate debtors (default ≥ ₹1 Crore), serve statutory Form B Demand Notice granting 14 clear days via Speed Post RPAD and registered email under Rule 7(1) of the 2019 PG Rules.",
  },
  {
    step: "05",
    title: "NCLT Form C / e-DRT OA",
    window: "Day 34+",
    detail:
      "File Section 95 Form C at NCLT (triggering instant s.96 interim moratorium over personal assets), Section 7 CIRP against Corporate Guarantors, or implead jointly in an e-DRT Section 19 OA.",
  },
];

const SUPREME_COURT_PRECEDENTS = [
  {
    citation: "(2006) 11 SCC 506 — Supreme Court of India",
    caseName: "Syndicate Bank v. Channaveerappa Beleri & Ors.",
    principle: "Limitation Starts Strictly on Formal Demand Invocation",
    holding:
      "Where a continuing guarantee deed stipulates that the guarantor shall pay 'on demand', the guarantor's obligation does not arise merely because the principal borrower's account turns NPA or irregular. A breach by the guarantor occurs—and the 3-year limitation under Article 55/113 begins—ONLY when the bank serves a formal, unequivocal invocation demand and the guarantor fails to honour it.",
    sambAction:
      "Never rely on a borrower recall letter marked 'CC: Guarantor' to prove default in NCLT or DRT. Always dispatch a direct invocation demand expressly invoking the guarantee deed.",
  },
  {
    citation: "(2021) 9 SCC 321 — Supreme Court of India",
    caseName: "Lalit Kumar Jain v. Union of India & Ors.",
    principle: "CIRP Resolution Plan Does Not Discharge Personal Guarantors",
    holding:
      "Upholding the November 15, 2019 IBC notification for Personal Guarantors to Corporate Debtors, the Supreme Court held that approval of a CIRP Resolution Plan under Section 31 IBC does NOT ipso facto discharge a personal guarantor. Because the corporate borrower's release occurs by involuntary operation of insolvency law rather than voluntary creditor release under s.134 Contract Act, banks retain full statutory rights to recover the unrecovered haircut from personal guarantors.",
    sambAction:
      "Draft an express carve-out in every CoC Resolution Plan preserving personal and third-party corporate guarantees, then pursue the residual deficiency via Form B and Section 95.",
  },
  {
    citation: "(1992) 3 SCC 159 & (2009) 9 SCC 478 — Supreme Court of India",
    caseName:
      "State Bank of India v. Indexport Registered & IIBI v. Biswanath Jhunjhunwala",
    principle: "Co-Extensive Liability Without Exhausting Borrower Assets",
    holding:
      "Construing Section 128 of the Indian Contract Act, 1872, the Supreme Court affirmed that a guarantor's liability is co-extensive, joint, several, and immediate. A bank is legally entitled to proceed directly against the guarantor or execute a decree against the guarantor's personal estate without first exhausting mortgaged collateral or waiting for execution against the principal debtor to fail.",
    sambAction:
      "When borrower plant machinery is encumbered by labour claims or SARFAESI litigation delays, invoke the solvent promoter's personal guarantee immediately to accelerate cash OTS.",
  },
  {
    citation: "(2021) 8 SCC 481 — Supreme Court of India",
    caseName: "Laxmi Pat Surana v. Union Bank of India & Anr.",
    principle: "Section 7 IBC Maintainable Directly Against Corporate Guarantor",
    holding:
      "A financial creditor can initiate Corporate Insolvency Resolution Process (CIRP) under Section 7 IBC directly against a Corporate Guarantor upon default, even when the principal borrower is a proprietorship, partnership, or non-corporate entity outside IBC's corporate ambit. Liability under s.128 makes the corporate guarantor a 'corporate debtor' the moment the guarantee is invoked and unpaid.",
    sambAction:
      "For group-company guarantees backing MSME partnership firms, invoke the Corporate Guarantee formally and trigger Section 7 CIRP on default ≥ ₹1 Crore.",
  },
  {
    citation: "(2024) 5 SCC 435 — 3-Judge Bench, Supreme Court of India",
    caseName: "Dilip B. Jiwrajka v. Union of India & Ors.",
    principle: "Sections 95–100 IBC & Automatic Section 96 Moratorium Upheld",
    holding:
      "Dismissing over 380 constitutional challenges by promoter guarantors, the Supreme Court upheld Sections 95 to 100 of the IBC. Filing a Section 95 petition automatically triggers the Section 96 interim moratorium without requiring a prior adjudicatory hearing; the Resolution Professional's Section 99 report is recommendatory, and the guarantor's full adjudicatory hearing occurs at the Section 100 admission stage.",
    sambAction:
      "Eliminate procedural defects in the pre-filing Invocation Notice and 14-day Form B so the RP's Section 99 report recommends clean admission under Section 100 without adjournments.",
  },
];

const FAQS = [
  {
    question:
      "Why does merely marking 'CC to Guarantor' on a bank loan recall notice ruin an IBC Section 95 petition?",
    answer:
      "Under Syndicate Bank v. Channaveerappa Beleri (2006) 11 SCC 506, liability under an 'on-demand' guarantee deed arises only when the bank makes an explicit, unequivocal demand calling upon the guarantor to pay. A loan recall letter addressed solely to the borrower with a passive 'CC: Promoter Guarantor' is repeatedly held by NCLT and NCLAT benches to be mere intimation—not formal invocation—leading to dismissal of multi-crore Section 95 petitions for absence of a crystallized default date.",
  },
  {
    question:
      "Can a bank invoke a personal guarantee and proceed under Section 128 without first auctioning mortgaged assets?",
    answer:
      "Yes. Section 128 of the Indian Contract Act, 1872 makes the surety's liability co-extensive with that of the principal debtor unless the deed expressly restricts it. Following SBI v. Indexport Registered (1992) and IIBI v. Biswanath Jhunjhunwala (2009), a bank can serve an invocation notice, file an e-DRT Original Application, or initiate IBC Part III insolvency against the personal guarantor simultaneously—without exhausting SARFAESI auctions against the borrower first.",
  },
  {
    question:
      "When does the 3-year limitation period start against a personal or corporate guarantor?",
    answer:
      "For standard 'on-demand' continuing bank guarantees, the 3-year limitation period under Article 55 or Article 113 of the Limitation Act, 1963 does NOT start on the borrower's NPA date. It starts on the date the guarantor refuses or fails to honour the bank's formal Guarantee Invocation Notice. However, banks must invoke the guarantee while the underlying debt against the principal borrower remains legally alive (not time-barred) or kept alive via Section 18 acknowledgments.",
  },
  {
    question:
      "Can an IBC Rule 7(1) Form B Demand Notice double as the bank's first Guarantee Invocation Notice?",
    answer:
      "No—combining first-time invocation and Form B into a single document is a frequent cause of NCLT dismissal. Form B under Rule 7(1) of the 2019 Personal Guarantor Rules presupposes that the guarantee has ALREADY been invoked and a 'date of default' has occurred after the guarantor failed to pay. Best SAMB practice is a strict two-step sequence: (1) formal Guarantee Invocation Notice (7–15 days), followed upon non-payment by (2) statutory 14-day Form B Demand Notice.",
  },
  {
    question:
      "What happens if a promoter sends a Section 130 notice revoking a continuing guarantee before NPA?",
    answer:
      "Under Section 130 of the Indian Contract Act, revocation of a continuing guarantee operates ONLY prospectively as to future transactions. It never discharges the guarantor's liability for loans, Cash Credit drawings, or devolved Letters of Credit already extended before receipt of the revocation notice. Immediately upon receiving a s.130 letter, the branch must rule off the CC/OD account to prevent Clayton's Rule appropriation from wiping out covered old debt, and promptly invoke the guarantee.",
  },
  {
    question:
      "Does an NCLT-approved CIRP Resolution Plan with a 70% haircut extinguish the personal guarantor's liability?",
    answer:
      "No. In Lalit Kumar Jain v. Union of India (2021) 9 SCC 321, the Supreme Court held that statutory discharge of a corporate debtor under a Section 31 IBC Resolution Plan does not absolve personal guarantors. Financial creditors remain legally entitled to recover the unrecovered balance directly from personal guarantors under Part III IBC, provided the Resolution Plan does not voluntarily assign or extinguish the guarantee.",
  },
  {
    question:
      "What electronic proof under BSA 2023 Section 63 is mandatory when serving Guarantee Invocation & Form B notices?",
    answer:
      "To insulate NCLT Form C petitions and e-DRT OAs from 'non-service' objections, banks must serve both the Invocation Notice and Form B simultaneously via India Post Speed Post RPAD, verified email, and WhatsApp, backed by a Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023 Schedule Certificate (Part A + Part B) covering CBS account statements, email server headers, delivery logs, and postal tracking records, alongside Bankers' Books Evidence Act s.2A certification.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T15:30:00+05:30",
  dateModified: "2026-11-19T15:30:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    name: "Invocation of Personal and Corporate Guarantees in Indian Bank Loan Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Banks Invoke Personal & Corporate Guarantees Before IBC Section 95 Form B",
  description:
    "Five-stage operational legal playbook for SAMB and bank insolvency counsel to trigger limitation under Section 128 Contract Act and serve airtight IBC Rule 7(1) Form B demand notices.",
  totalTime: "P34D",
  step: DECISION_STAGES.map((stage, idx) => ({
    "@type": "HowToStep",
    position: idx + 1,
    name: `Stage ${stage.step}: ${stage.title} (${stage.window})`,
    text: stage.detail,
  })),
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
      name: "Banks Loan Recovery Hub",
      item: `${SITE_URL}/industries/banks-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Personal & Corporate Guarantee Invocation Guide",
      item: CANONICAL_URL,
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

export default function PersonalGuarantorInvocationNoticeBankPage() {
  const breadcrumbItems = [
    { label: "Banks Loan Recovery Hub", href: "/industries/banks-loan-recovery" },
    {
      label: "Guarantee Invocation & IBC Form B",
      href: PAGE_PATH,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-01 Banking &amp; SAMB Playbook</span>
              <span className="text-red-500">&bull;</span>
              <span>Contract Act s.126–130</span>
              <span className="text-red-500">&bull;</span>
              <span>IBC s.95 Rule 7(1) Form B</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (40-60 words + inline parent Hub link) */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (SAMB &amp; Insolvency Counsel)
              </span>
              <p>
                Under Section 128 of the Indian Contract Act and <em>Channaveerappa Beleri</em>, limitation against an on-demand guarantor starts ONLY upon formal guarantee invocation—not the borrower&apos;s NPA date or a passive &ldquo;CC&rdquo; recall letter. Part of our{" "}
                <Link
                  href="/industries/banks-loan-recovery"
                  className="text-red-300 underline decoration-red-400/70 underline-offset-2 hover:text-white font-bold"
                >
                  Banks Loan Recovery Hub
                </Link>
                , this playbook sequences explicit invocation, 14-day IBC Rule 7(1) Form B, and NCLT Section 95 filings cleanly.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">s.128</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Co-Extensive Liability Without Exhausting Borrower
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">14 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Mandatory IBC Rule 7(1) Form B Statutory Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3 Years</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Limitation Clock Starts Strictly on Formal Invocation
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">s.96 Stay</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Instant Interim Moratorium on Filing Form C
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <GuaranteeTableOfContents />

            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Defective CC Trap */}
              <section
                id="heading-cc-trap"
                aria-labelledby="heading-cc-trap-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Operational Bottleneck &bull; SAMB Drafting Audit
                  </span>
                  <h2
                    id="heading-cc-trap-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Why &apos;CC-ing&apos; Guarantors Destroys Multi-Crore IBC Petitions
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    Across Indian Scheduled Commercial Banks, Small Finance Banks, and Urban Cooperative Banks, branch-level loan recall templates commit a recurring, fatal error: the recall demand is addressed solely to the corporate borrower (<em>&ldquo;M/s ABC Industries Pvt. Ltd.&rdquo;</em>), while promoter-directors and corporate guarantors are tucked into a passive footer line reading <em>&ldquo;CC to: Shri X (Guarantor) — for information and necessary action.&rdquo;</em>
                  </p>
                  <p>
                    When Stressed Assets Management Branches (SAMB) subsequently escalate that ₹5 Crore to ₹50 Crore NPA to NCLT under Section 95 of the Insolvency and Bankruptcy Code, 2016 (IBC) or to DRT under Section 19 of the RDB Act, seasoned insolvency counsel immediately demolish the petition. Under settled Supreme Court jurisprudence in <em>Syndicate Bank v. Channaveerappa Beleri</em> (2006) 11 SCC 506, standard bank Deeds of Guarantee are &ldquo;on-demand&rdquo; continuing contracts: the surety&apos;s default—and the bank&apos;s cause of action—does <strong>not</strong> occur on the borrower&apos;s NPA date. It occurs only when the bank formally invokes the guarantee by serving an unambiguous written demand directly upon the guarantor.
                  </p>
                  <p>
                    Even more dangerously, relying on a SARFAESI Section 13(2) notice or an uninvoked Form B notice as a substitute for contractual invocation triggers jurisdictional objections before NCLT benches, forcing banks to withdraw defective Form C petitions and lose 9 to 14 months while promoters alienate unencumbered bungalows and equity stakes. Banks needing an immediate, advocate-vetted draft can use our{" "}
                    <Link
                      href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      Loan Recall cum Explicit Guarantee Invocation Notice Template
                    </Link>{" "}
                    before serving Rule 7(1) Form B.
                  </p>
                </div>

                {/* Bad CC vs Valid Invocation Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 sm:p-5 rounded-xl bg-red-50/70 border border-red-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#DC2626] text-white text-[10px] font-black uppercase">
                        Fatal Flaw
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Passive &ldquo;CC: Guarantor&rdquo; Recall Letter
                      </h3>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-4">
                      <li>Addressed only to Principal Borrower; guarantor listed under &ldquo;Copy to&rdquo;.</li>
                      <li>Omits exact Deed of Guarantee execution date, stamp serial, and invocation clause.</li>
                      <li>Contains no independent deadline demanding payment from the surety.</li>
                      <li>
                        <strong>NCLT Outcome:</strong> No crystallized Date of Default under s.95; Form B held premature and dismissed.
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-700 text-white text-[10px] font-black uppercase">
                        SAMB Gold Standard
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Explicit Guarantee Invocation Notice (s.128)
                      </h3>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-4">
                      <li>Addressed directly to Personal / Corporate Guarantor as primary noticee.</li>
                      <li>Recites Deed date, continuing guarantee covenant (s.129), and co-extensive clause (s.128).</li>
                      <li>Explicitly states: <em>&ldquo;The Bank hereby invokes the Guarantee and calls upon you to pay ₹[X] within 7 days.&rdquo;</em></li>
                      <li>
                        <strong>NCLT Outcome:</strong> Crystallizes undisputed default date on Day 8, enabling airtight 14-day Form B &amp; s.95 Form C.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 2: 5-Stage Decision Tree SVG + Mobile Cards */}
              <section
                id="heading-decision-tree"
                aria-labelledby="heading-decision-tree-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    End-to-End Statutory Workflow
                  </span>
                  <h2
                    id="heading-decision-tree-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5-Stage Guarantee Invocation to IBC Form B Decision Tree
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this strict 34-day sequencing rail to convert a defaulted corporate facility into an admitted NCLT Section 95 Personal Guarantor insolvency, Section 7 Corporate Guarantor CIRP, or joint e-DRT Original Application without technical remand.
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-4">
                  <svg
                    width={920}
                    height={210}
                    viewBox="0 0 920 210"
                    role="img"
                    aria-label="Five-stage workflow from guarantee deed audit and explicit Section 128 invocation to NeSL default recording, 14-day IBC Form B demand notice, and NCLT Section 95 Form C filing"
                    className="w-full h-auto"
                  >
                    <defs>
                      <marker
                        id="arrow-red"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#EF4444" />
                      </marker>
                    </defs>

                    {[
                      { x: 12, num: "01", title: "Deed Audit", sub: "Day 0–2", line1: "On-demand clause", line2: "s.129 & waivers" },
                      { x: 194, num: "02", title: "Invoke Notice", sub: "Day 3–10", line1: "Direct to surety", line2: "7-day demand" },
                      { x: 376, num: "03", title: "Default Date", sub: "Day 11–18", line1: "Limitation starts", line2: "NeSL Form D" },
                      { x: 558, num: "04", title: "IBC Form B", sub: "Day 19–33", line1: "Rule 7(1) notice", line2: "14 clear days" },
                      { x: 740, num: "05", title: "NCLT / DRT", sub: "Day 34+", line1: "s.95 Form C / s.7", line2: "Instant s.96 stay" },
                    ].map((node, i) => (
                      <g key={node.num}>
                        <rect
                          x={node.x}
                          y={26}
                          width={162}
                          height={152}
                          rx={14}
                          fill="#1E293B"
                          stroke={i === 1 || i === 3 ? "#DC2626" : "#334155"}
                          strokeWidth={i === 1 || i === 3 ? 2.2 : 1.4}
                        />
                        <rect x={node.x + 14} y={40} width={34} height={22} rx={6} fill="#DC2626" />
                        <text
                          x={node.x + 31}
                          y={55}
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="11"
                          fontWeight="800"
                        >
                          {node.num}
                        </text>
                        <text
                          x={node.x + 148}
                          y={55}
                          textAnchor="end"
                          fill="#94A3B8"
                          fontSize="10"
                          fontWeight="700"
                        >
                          {node.sub}
                        </text>
                        <text
                          x={node.x + 14}
                          y={88}
                          fill="#F8FAFC"
                          fontSize="14"
                          fontWeight="800"
                        >
                          {node.title}
                        </text>
                        <text x={node.x + 14} y={116} fill="#CBD5E1" fontSize="11.5">
                          &bull; {node.line1}
                        </text>
                        <text x={node.x + 14} y={138} fill="#CBD5E1" fontSize="11.5">
                          &bull; {node.line2}
                        </text>
                        {i < 4 && (
                          <line
                            x1={node.x + 164}
                            y1={102}
                            x2={node.x + 190}
                            y2={102}
                            stroke="#EF4444"
                            strokeWidth={2}
                            markerEnd="url(#arrow-red)"
                          />
                        )}
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Stacked Stage Details (Always visible on mobile, concise cards on desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {DECISION_STAGES.map((st) => (
                    <div
                      key={st.step}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">
                          {st.step}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {st.window}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                        {st.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{st.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Statutory Matrix Table */}
              <section
                id="heading-statutory-matrix"
                aria-labelledby="heading-statutory-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Bare-Act Governance &amp; Forum Mapping
                  </span>
                  <h2
                    id="heading-statutory-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Contract Act s.126–130 &amp; IBC Part III Statutory Matrix
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Use this statutory selection grid to match guarantee structure, default threshold, and limitation trigger across Indian Contract Act provisions, IBC Part II/III, SARFAESI, and DRT forums. To benchmark pecuniary thresholds across SARFAESI and DRT, run our{" "}
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    SARFAESI &amp; DRT Bank Recovery Forum Calculator
                  </Link>
                  .
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Guarantee Track / Statute</th>
                        <th className="p-3.5 border-b border-slate-800">Pecuniary Floor</th>
                        <th className="p-3.5 border-b border-slate-800">Mandatory Notice &amp; Cure</th>
                        <th className="p-3.5 border-b border-slate-800">Limitation Start Trigger</th>
                        <th className="p-3.5 border-b border-slate-800">Key Creditor Leverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Contract Act s.126 &amp; s.128 (On-Demand Invocation)
                        </td>
                        <td className="p-3.5">Any Ticket Size</td>
                        <td className="p-3.5">Explicit written invocation notice (7–15 days)</td>
                        <td className="p-3.5 font-semibold text-amber-800 bg-amber-50/50">
                          Expiry of formal invocation demand (Art. 55 / 113)
                        </td>
                        <td className="p-3.5">
                          Co-extensive liability; bypasses exhausting borrower collateral first
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Contract Act s.129 &amp; s.130 (Continuing CC/OD Guarantee)
                        </td>
                        <td className="p-3.5">Any Working Capital Limit</td>
                        <td className="p-3.5">Rule off ledger + immediate counter-invocation</td>
                        <td className="p-3.5">Date of breach upon demand / post-revocation freeze</td>
                        <td className="p-3.5">
                          Revocation affects ONLY future advances; past balance stays 100% covered
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          IBC Part III s.95 &amp; Rule 7(1) Form B (Personal Guarantor)
                        </td>
                        <td className="p-3.5 font-bold text-emerald-700">&#8377;1 Crore+ Default</td>
                        <td className="p-3.5">
                          Step 1: Invocation Notice &rarr; Step 2: 14-day Form B
                        </td>
                        <td className="p-3.5">3 years from post-invocation default date</td>
                        <td className="p-3.5 font-semibold text-emerald-800 bg-emerald-50/50">
                          Instant s.96 interim moratorium &amp; personal asset bankruptcy threat
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          IBC Part II s.7 &amp; s.60(2) (Corporate Guarantor)
                        </td>
                        <td className="p-3.5 font-bold text-emerald-700">&#8377;1 Crore+ Default</td>
                        <td className="p-3.5">Explicit Corporate Guarantee Invocation Notice</td>
                        <td className="p-3.5">3 years from invocation default (s.18 extends)</td>
                        <td className="p-3.5">
                          Simultaneous CIRP &amp; management takeover of group holding company
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          RDB Act s.19 e-DRT OA &amp; SARFAESI s.13(2)
                        </td>
                        <td className="p-3.5">&#8377;20 Lakh+ (DRT) / &gt;&#8377;1L (SARFAESI)</td>
                        <td className="p-3.5">Composite Recall + Invocation / 60-day s.13(2)</td>
                        <td className="p-3.5">3 years (personal) / 12 years (mortgaged guarantor asset)</td>
                        <td className="p-3.5">
                          Joint Recovery Certificate &amp; s.19(12) pre-decree personal asset freeze
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenarios"
                aria-labelledby="heading-scenarios-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Litigation Defense Pre-Emption
                  </span>
                  <h2
                    id="heading-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 High-Stakes Guarantor Default Playbooks (Interactive)
                  </h2>
                </div>
                <GuaranteeScenarioTabs />
              </section>

              {/* Section 5: Binding Supreme Court Precedents */}
              <section
                id="heading-precedents"
                aria-labelledby="heading-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Verified Constitutional &amp; Statutory Authority
                  </span>
                  <h2
                    id="heading-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Binding Supreme Court Precedents on On-Demand Guarantees
                  </h2>
                </div>

                <div className="space-y-4">
                  {SUPREME_COURT_PRECEDENTS.map((item) => (
                    <article
                      key={item.caseName}
                      className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 border-l-4 border-l-[#DC2626] space-y-2.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block">
                            {item.citation}
                          </span>
                          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                            {item.caseName}
                          </h3>
                        </div>
                        <span className="text-[11px] font-bold text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md self-start sm:self-auto">
                          {item.principle}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-slate-900">Ratio Decidendi: </strong>
                        {item.holding}
                      </p>

                      <p className="text-xs text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                        <strong className="font-bold">SAMB Drafting Directive: </strong>
                        {item.sambAction}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Worked Financial & Limitation Ledger */}
              <section
                id="heading-worked-ledger"
                aria-labelledby="heading-worked-ledger-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    SAMB Balance-Sheet Illustration
                  </span>
                  <h2
                    id="heading-worked-ledger-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked SAMB Ledger: &#8377;14.2 Cr Invocation &amp; Limitation Clock
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Consider a mid-corporate manufacturing borrower with a sanctioned Cash Credit + Term Loan exposure of <strong>&#8377;14.20 Crore</strong> secured by factory land (realizable value &#8377;4.80 Crore) and an unconditional, continuing Personal Guarantee from two promoter-directors owning unencumbered urban residential real estate worth &#8377;11.50 Crore.
                </p>

                <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700 pb-3">
                    <h3 className="text-sm sm:text-base font-extrabold text-white">
                      Chronological Limitation &amp; Residual Recovery Breakdown
                    </h3>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-full self-start sm:self-auto">
                      Post-CIRP Haircut Recovery: &#8377;9.40 Cr Preserved
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        Account &amp; Invocation Timeline
                      </p>
                      <ul className="space-y-1.5 text-slate-200">
                        <li>&bull; <strong>Borrower NPA Date:</strong> 31 March 2024 (Principal &#8377;12.60 Cr + Interest &#8377;1.60 Cr)</li>
                        <li>&bull; <strong>Branch Mistake Avoided:</strong> Rejected passive &ldquo;CC&rdquo; recall draft</li>
                        <li>&bull; <strong>Formal s.128 Invocation Notice:</strong> Served 18 April 2024 (7-day deadline)</li>
                        <li>&bull; <strong>Guarantor Date of Default:</strong> 26 April 2024 (Limitation runs to 25 April 2027)</li>
                        <li>&bull; <strong>IBC Rule 7(1) Form B Served:</strong> 02 May 2024 (14-day window expires 16 May 2024)</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-800/80 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                        Dual-Track Financial Recovery Outcome
                      </p>
                      <ul className="space-y-1.5 text-slate-100">
                        <li>&bull; <strong>Total Admitted Bank Claim:</strong> &#8377;14.20 Crore + pendente lite interest</li>
                        <li>&bull; <strong>Corporate CIRP Resolution Payout (33.8%):</strong> &#8377;4.80 Crore realized</li>
                        <li>&bull; <strong>Residual Personal Guarantee Claim:</strong> &#8377;9.40 Crore (preserved via <em>Lalit Kumar Jain</em>)</li>
                        <li>&bull; <strong>Section 95 Form C + s.96 Moratorium:</strong> Blocked promoter&apos;s &#8377;11.50 Cr bungalow transfer</li>
                        <li>&bull; <strong>Repayment Plan / OTS Settlement:</strong> &#8377;7.85 Cr additional recovery (89.1% aggregate)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong>Critical Limitation Audit Warning:</strong> Under Section 18 of the Limitation Act, a Balance Confirmation Letter (BCL) signed solely by the corporate borrower extends limitation against the borrower—but does <em>not</em> automatically extend limitation against a personal guarantor unless the guarantee deed expressly appoints the borrower as agent for acknowledgments or the guarantor co-signs the BCL. Obtain separate guarantor acknowledgments every 30 months or invoke before the underlying borrower debt becomes time-barred.
                </div>
              </section>

              {/* Section 7: Mandatory Evidence & BSA 2023 s.63 Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    NCLT Form C &amp; e-DRT Admissibility Pack
                  </span>
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Mandatory Deed, Demand &amp; BSA 2023 s.63 Proof Checklist
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                        1
                      </span>
                      Deed &amp; Corporate Authorization Dossier
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-5">
                      <li>Original executed Deed of Guarantee with state-compliant stamp duty &amp; Franking/SHCIL receipt.</li>
                      <li>Sanction Letter, Supplementary Guarantee Deeds (on limit enhancements), and s.18 Balance Confirmation Letters co-signed by guarantor.</li>
                      <li>For Corporate Guarantors: Board Resolution, s.185/186 Special Resolution (MCA Form MGT-14), and MCA Charge Registration (CHG-1).</li>
                      <li>Guarantor KYC, PAN, Aadhaar, and latest CIBIL / MCA address master extracts.</li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                        2
                      </span>
                      Invocation, Form B &amp; BSA 2023 s.63 Electronic Proof
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-5">
                      <li>Standalone Guarantee Invocation Notice + India Post Speed Post RPAD booking receipts &amp; signed AD / online tracking delivery proof.</li>
                      <li>Statutory 14-day IBC Rule 7(1) Form B Demand Notice with itemized Principal, Interest, and non-capitalized Penal Charges (RBI Fair Lending compliant).</li>
                      <li>Certified CBS Ledger under Bankers&apos; Books Evidence Act s.2A &amp; NeSL Information Utility Record of Default (Form D).</li>
                      <li>
                        <strong>BSA 2023 Section 63 Certificate (Schedule Part A + Part B):</strong> Signed by Branch Manager/IT Custodian certifying SHA-256 hashes of CBS printouts, email headers, and WhatsApp delivery receipts.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8: Dual-Track B2B CTA */}
              <section
                id="heading-cta-block"
                aria-labelledby="heading-cta-block-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    AMA Legal Solutions Banking &amp; Insolvency Desk
                  </span>
                  <h2
                    id="heading-cta-block-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Serve Explicit Guarantee Invocation Notices or Batch CSV
                  </h2>
                </div>
                <GuaranteeInvocationCTA />
              </section>

              {/* Section 9: IND-01 Internal Linking Directory */}
              <section
                id="heading-bank-network"
                aria-labelledby="heading-bank-network-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    IND-01 Interconnected Recovery Playbooks &amp; Tools
                  </span>
                  <h2
                    id="heading-bank-network-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    IND-01 Bank Recovery Hub, Calculators &amp; Notice Templates
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      tag: "Parent Hub",
                      title: "Banks Loan Recovery Infrastructure Hub",
                      href: "/industries/banks-loan-recovery",
                      desc: "Complete IND-01 institutional blueprint across SARFAESI, e-DRT, sub-₹20L routes, and bulk NPA notices.",
                    },
                    {
                      tag: "P1 Notice Workspace",
                      title: "Loan Recall & Guarantee Invocation Template",
                      href: "/templates/bank-loan-recall-cum-guarantee-invocation-notice",
                      desc: "Editable advocate-vetted notice pack separating Borrower Recall and explicit s.128 Guarantee Invocation.",
                    },
                    {
                      tag: "T1 Calculator",
                      title: "SARFAESI & DRT Forum Selector Calculator",
                      href: "/tools/sarfaesi-drt-bank-recovery-forum-calculator",
                      desc: "Instant bank recovery forum selector across SARFAESI, e-DRT ≥ ₹20L, IBC ₹1 Cr+, and Lok Adalat.",
                    },
                    {
                      tag: "Sibling Spoke",
                      title: "SARFAESI Section 13(2) & 13(3A) Bank Guide",
                      href: "/law/sarfaesi-section-13-2-demand-notice-bank-guide",
                      desc: "Prevent DRT Section 17 quashing with Rule 3 multi-channel service and 15-day reasoned s.13(3A) replies.",
                    },
                    {
                      tag: "Sibling Spoke",
                      title: "SARFAESI Section 14 DM/CMM Possession",
                      href: "/sarfaesi-section-14-dm-cmm-physical-possession-workflow",
                      desc: "Mandatory 9-point statutory affidavit, defeating bogus tenancies, and High Court mandamus for delays.",
                    },
                    {
                      tag: "Sibling Spoke",
                      title: "Bank Loan Recovery Below ₹20 Lakh (5 Routes)",
                      href: "/bank-loan-recovery-below-20-lakhs-drt-threshold-options",
                      desc: "Compare Order XXXVII CPC, PSS Act s.25, Fast-Track Arbitration, and National Lok Adalats below DRT floor.",
                    },
                    {
                      tag: "Sibling Spoke",
                      title: "e-DRT Original Application (s.19) Filing Guide",
                      href: "/e-drt-original-application-filing-guide-for-banks",
                      desc: "Impleading borrowers and guarantors jointly in e-DRT with BBEA s.2A ledgers and s.19(12) asset attachment.",
                    },
                    {
                      tag: "Institutional Portal",
                      title: "Send Legal Notice for Banks & NBFCs",
                      href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues",
                      desc: "Dedicated pre-litigation dispatch portal for Scheduled Banks, Small Finance Banks, and Cooperative Banks.",
                    },
                    {
                      tag: "Bulk & Lok Adalat",
                      title: "Pre-Litigation Lok Adalat & Bulk Recovery",
                      href: "/law/lok-adalat-pre-litigation-money-recovery",
                      desc: "Zero-court-fee s.21 deemed civil decrees paired with high-volume CSV NPA legal notice automation.",
                    },
                  ].map((card) => (
                    <Link
                      key={card.href}
                      href={card.href}
                      className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626]/60 hover:bg-white transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full mb-2">
                          {card.tag}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1">
                          {card.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                      </div>
                      <span className="text-[11px] font-bold text-slate-900 group-hover:text-[#DC2626] mt-3 inline-block">
                        Open Resource &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Practitioner Q&amp;A
                  </span>
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Personal &amp; Corporate Guarantee Invocation for Banks
                  </h2>
                </div>

                <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
                  {FAQS.map((faq) => (
                    <details key={faq.question} className="group bg-white open:bg-slate-50/70">
                      <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 text-left text-xs sm:text-sm md:text-base font-bold text-slate-900 cursor-pointer list-none">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-lg leading-none shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Statutory Sources & Editorial Review */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Official Citations &amp; Legal Attribution
                  </span>
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Statutory Texts, IBBI Rules &amp; Official Portals
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((src) => (
                    <li
                      key={src.url}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] font-medium hover:underline leading-relaxed"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-slate-200 text-xs leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-white text-sm">
                      Reviewed by Anuj Anand Malik &mdash; Advocate &amp; Founder, AMA Legal Solutions
                    </p>
                    <p className="text-slate-400 mt-1">
                      Prepared exclusively from the creditor-side institutional banking perspective for Scheduled Commercial Banks, Small Finance Banks, Cooperative Banks, and ARCs. Every guarantee deed carries bespoke covenants—verify stamping and board resolutions before NCLT Form C or e-DRT filing.
                    </p>
                  </div>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="shrink-0 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs transition-colors"
                  >
                    Institutional Panel Desk &rarr;
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
