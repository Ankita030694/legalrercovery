import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import TDSRecoveryTableOfContents from "./TDSRecoveryTableOfContents";
import TDSRecoveryScenarioTabs from "./TDSRecoveryScenarioTabs";
import TDSRecoveryCTA from "./TDSRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/commercial-tenant-deducted-tds-194i-not-deposited-form-26as-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Tenant Deducted 10% Rent TDS (194-I) & Didn't Deposit? Fix";
const PAGE_DESCRIPTION =
  "Cash-strapped tenants pay 90% rent, pocket 10% TDS & skip 26AS deposit. Shield yourself under IT Act s.205 & compel deposit via s.276B legal notice.";
const H1_TEXT =
  "Corporate Tenant Paid 90% Rent and Pocketed the 10% TDS Without Depositing It in Form 26AS? Legal Notice + Section 205/276B Action Plan";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
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
    title: "The Income Tax Act, 1961 (Section 194-I — Deductions at Source from Rent of Land, Building or Furniture)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Income Tax Act, 1961 (Section 205 — Bar Against Direct Demand on Assessee / Deductee)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Income Tax Act, 1961 (Sections 201(1A), 271C & 276B — Penal Interest, 100% Penalty & Criminal Imprisonment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Central Board of Direct Taxes (CBDT) Instruction No. 275/29/2014-IT-(B) & Circular on Non-Recovery from Deductees",
    url: "https://incometaxindia.gov.in/communications/circular/instruction-275-29-2014.pdf",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 73 — Compensation for Loss or Damage Caused by Breach of Contract)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records, Bank Credit Ledger & Form 26AS Audit Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Bombay High Court Division Bench Landmark Ruling on Section 205 Absolute Bar",
    parties: "Yashpal Sahni v. Rekha Hajarnavis, ACIT & Ors.",
    citation: "(2007) 293 ITR 539 (Bom HC) / 2007 SCC OnLine Bom 425",
    date: "Judgment Delivered by Bombay High Court Division Bench",
    facts:
      "The deductee was paid income after deduction of tax at source by the employer/payer under Chapter XVII-B. The deductor issued pay slips confirming deduction but completely failed to remit the TDS to the Central Government account. The Income Tax Department denied credit for the un-deposited TDS and raised a coercive tax demand directly against the deductee, refusing to issue refunds.",
    holding:
      "The High Court held that under Section 205 of the Income Tax Act, once tax is deductible and has in fact been deducted at source, the revenue is statutorily barred from recovering that tax from the deductee. Even if the deductor fails to deposit the tax or issue Form 16/16A, the department's sole legal remedy is to proceed against the defaulting deductor under Section 201, levy penalties under Section 271C, and initiate criminal prosecution under Section 276B. The deductee cannot be subjected to any direct demand, interest, or bank attachment.",
    impact:
      "Commercial landlords whose tenants withhold 10% rent as TDS are completely insulated from direct tax demands once they prove that net payment of 90% was accepted with explicit tax deduction notation.",
  },
  {
    title: "Delhi High Court Directives on Automated CPC Tax Mismatches & Demand Cancellations",
    parties: "Court On Its Own Motion v. Commissioner of Income Tax",
    citation: "(2013) 352 ITR 273 (Del HC) / W.P.(C) 2659/2012",
    date: "Landmark Public Interest Litigation Directives, Delhi High Court",
    facts:
      "Thousands of taxpayers and commercial lessors were subjected to automated demand notices, refund adjustments, and bank account freeze threats by the Centralized Processing Center (CPC Bengaluru) due to deductors failing to upload quarterly Form 26Q TDS returns or quoting incorrect PAN numbers in Form 26AS.",
    holding:
      "The Delhi High Court issued binding nationwide directions restraining the Income Tax Department from raising automated demands on deductees where TDS was deducted at source. The Court directed Assessing Officers to verify bank statements, rent agreements, and invoices produced by the deductee, place the demand under abeyance, and initiate statutory recovery directly against the defaulting corporate deductor.",
    impact:
      "Mandates that jurisdictional Assessing Officers cannot mechanically adjust refunds or freeze landlord accounts when presented with a Section 205 petition and bank credit statements proving 90% rent remittance.",
  },
  {
    title: "Karnataka High Court Ruling on Protection of Deductee from Defaulting Deductors",
    parties: "Smt. Anusuya Alva v. Deputy Commissioner of Income Tax",
    citation: "(2005) 278 ITR 206 (Kar HC) / (2005) 147 Taxman 152",
    date: "High Court of Karnataka Bench Judgment",
    facts:
      "A commercial property lessor was subjected to coercive recovery proceedings by the Income Tax Department because the corporate tenant had deducted tax under Section 194-I from commercial rent payments but neglected to deposit it with the government exchequer.",
    holding:
      "The High Court ruled that the bar enacted in Section 205 is absolute and mandatory. The statutory scheme fastens liability for remitting deducted tax exclusively upon the deductor as an assessee-in-default under Section 201(1). The department possesses no statutory jurisdiction to compel the landlord to pay the tax a second time.",
    impact:
      "Affirms that commercial landlords possess a legally protected right to defeat any department notice and compel the revenue to deploy its coercive machinery against the defaulting tenant.",
  },
  {
    title: "Supreme Court Landmark Judgment on Section 276B Criminal Prosecution of Directors",
    parties: "Madhumilan Syntex Ltd. & Ors. v. Union of India & Anr.",
    citation: "(2007) 11 SCC 297, Supreme Court of India",
    date: "Supreme Court Criminal Appellate Division",
    facts:
      "A corporate entity deducted tax at source from payees but delayed remittance to the government account. The company and its directors were prosecuted under Section 276B of the Income Tax Act. The directors contended that they could not be prosecuted because the defaulted TDS was subsequently deposited with penal interest under Section 201(1A), and that company cash flow distress constituted a reasonable cause.",
    holding:
      "The Supreme Court held that once tax is deducted at source and not remitted within the prescribed statutory period (by the 7th of the following month), the criminal offense under Section 276B is complete. Subsequent deposit does not absolve the company or its directors from criminal liability. Financial difficulty or lack of funds does not constitute 'reasonable cause' under Section 278AA. Corporate directors and principal officers face mandatory rigorous imprisonment of 3 months to 7 years plus fine.",
    impact:
      "Gives commercial landlords unparalleled coercive leverage: highlighting Section 276B director prosecution in an Advocate Legal Notice compels corporate tenants to clear TDS defaults immediately.",
  },
];

const FAQS = [
  {
    question: "What should I do if my corporate tenant deducted 10% TDS on rent but did not deposit it in Form 26AS?",
    answer:
      "Take two immediate legal actions. First, issue a High Court Advocate Demand Notice to the tenant's Managing Director and Board of Directors citing Section 194-I, Section 201(1A) 1.5% monthly interest, Section 271C 100% penalty, and Section 276B criminal prosecution (3 months to 7 years imprisonment). Second, file a protective Section 205 representation before your Income Tax Assessing Officer supported by bank statements showing 90% net receipts and rent invoices, which legally bars the department from demanding the tax from you under the landmark Bombay High Court Yashpal Sahni doctrine and CBDT Instruction No. 275/29/2014-IT-(B).",
  },
  {
    question: "Can the Income Tax Department force the landlord to pay tax if the tenant defaulted on TDS?",
    answer:
      "No. Section 205 of the Income Tax Act, 1961 categorically states that where tax is deductible at source, the assessee (landlord) shall not be called upon to pay the tax himself to the extent to which tax has been deducted from that income. As affirmed by the Bombay High Court in Yashpal Sahni v. ACIT and the Delhi High Court in Court On Its Own Motion v. CIT, the department is statutorily prohibited from raising demands, adjusting refunds, or issuing recovery notices against the landlord. The revenue's exclusive remedy is to treat the tenant as an assessee-in-default under Section 201 and seize the tenant's bank accounts.",
  },
  {
    question: "Can I recover the un-deposited 10% TDS from the tenant as unpaid rent arrears?",
    answer:
      "Yes. Commercial lease agreements stipulate payment of 100% gross rent, subject only to valid statutory deductions remitted to the Central Government. If the tenant withholds 10% under Section 194-I but pockets the funds, the deduction is invalid and unlawful. This constitutes an uncured monetary breach under Section 73 of the Indian Contract Act and Section 106 of the Transfer of Property Act. You are entitled to claim the 10% balance as unpaid rent arrears with 18% commercial interest in a summary suit under Order XXXVII CPC or before the Commercial Court under Section 2(1)(c)(vii).",
  },
  {
    question: "What is the penalty and prosecution for a tenant who fails to deposit 194-I TDS?",
    answer:
      "A defaulting tenant faces multi-layered statutory penalties under the Income Tax Act: (1) Mandatory compound penal interest of 1.5% per month or part of a month under Section 201(1A) from the date of deduction to actual deposit; (2) A penalty under Section 271C equal to 100% of the unpaid TDS amount levied by the Joint Commissioner of Income Tax; (3) Late filing fee of ₹200 per day under Section 234E until Form 26Q is filed; and (4) Criminal prosecution under Section 276B against the company's directors and Principal Officer, carrying mandatory rigorous imprisonment of 3 months to 7 years plus fine, as confirmed by the Supreme Court in Madhumilan Syntex.",
  },
  {
    question: "Can I adjust the un-deposited TDS against the tenant's security deposit?",
    answer:
      "Yes. Standard commercial lease agreements allow the landlord to adjust any outstanding rent, statutory dues, or uncured financial indemnities against the interest-free security deposit upon lease determination or breach. If the tenant vacates without depositing TDS or submitting Form 16A, you can lawfully forfeit an equivalent amount from the security deposit, document the adjustment with a Section 63 BSA certificate, and issue a revised rental receipt reflecting full gross satisfaction.",
  },
  {
    question: "How do I file a formal complaint against a defaulting tenant with CIT (TDS)?",
    answer:
      "Submit a formal Section 201/276B complaint petition to the Jurisdictional Commissioner of Income Tax (TDS) and the Assessing Officer (TDS) in whose jurisdiction the tenant's registered office is situated. Attach the commercial lease agreement, monthly rent invoices showing Section 194-I deduction, bank statements demonstrating 90% net remittances, and current Form 26AS/AIS printouts showing zero tax credit. Request the CIT-TDS to initiate a survey under Section 133A, pass an order treating the tenant as an assessee-in-default under Section 201, and sanction criminal prosecution under Section 276B.",
  },
  {
    question: "What is the limitation period for recovering unpaid TDS and rent arrears from a commercial tenant?",
    answer:
      "Under Article 52 of the Limitation Act, 1963, the limitation period for recovering rent arrears is 3 years from the date the rent became due. For breach of a registered lease contract under Section 73 of the Contract Act, the limitation period is 3 years under Article 55 from the date of breach. For the Income Tax Department to declare the tenant an assessee-in-default under Section 201, the statutory limitation under Section 201(3) is 7 years from the end of the financial year in which the payment was made.",
  },
  {
    question: "How does LegalRecovery assist commercial property owners and REITs with bulk TDS defaults?",
    answer:
      "LegalRecovery provides a specialized institutional B2B recovery desk for Grade-A commercial developers, REITs, mall operators, and co-working chains. Through our Bulk CSV Desk, property managers can upload multi-tenant rent ledgers to instantly identify PAN mismatches and unpaid quarters. We issue automated High Court fact-verified demand notices across India via registered Speed Post RPAD and digital channels, file standardized Section 205 protective petitions before Assessing Officers, and draft collective CIT-TDS complaint dossiers.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T10:00:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
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
    name: "Recovery of Un-Deposited TDS under Section 194-I and Section 205 Immunity",
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Builders & Commercial Landlords Recovery",
      item: `${SITE_URL}/industries/builders-commercial-landlords-coworking-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "194-I TDS Not Deposited Recovery Guide",
      item: CANONICAL_URL,
    },
  ],
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Commercial Landlords Recover Un-Deposited 194-I TDS & Shield Themselves Under Section 205",
  description:
    "A 5-step statutory recovery rail for commercial landlords, REITs, and office lessors when a corporate tenant deducts 10% rent TDS but fails to deposit it in Form 26AS.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit Form 26AS, AIS and Bank Inward Remittance Ledgers",
      text: "Reconcile monthly rent bank credits against TRACES Form 26AS to quantify missing quarters and compute the 10% deducted sum.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "File Protective Section 205 Representation with the Assessing Officer",
      text: "Submit an affidavit with bank statements and rent invoices to your jurisdictional AO citing the Yashpal Sahni ruling to bar direct tax recovery against you.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Issue 7-Day High Court Fact-Verified Statutory Demand Notice",
      text: "Serve formal legal notice on the tenant's Board of Directors warning of Section 201(1A) 1.5% interest, Section 271C 100% penalty, and Section 276B criminal prosecution.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Lodge Formal Complaint with Commissioner of Income Tax (TDS)",
      text: "Submit an enforcement dossier to the tenant's jurisdictional CIT-TDS requesting survey under Section 133A and criminal prosecution sanction.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Enforce Rent Arrears Suit or Arbitral Execution",
      text: "Initiate Commercial Court summary recovery under Order XXXVII CPC or arbitral claim for unpaid rent arrears with 18% commercial interest.",
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

export default function CommercialTenantTdsRecoveryPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "Builders & Commercial Landlords Recovery",
      href: "/industries/builders-commercial-landlords-coworking-recovery",
    },
    {
      label: "194-I TDS Not Deposited Recovery",
      href: PAGE_URL,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Schemas */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Income Tax Act § 194-I &bull; Section 205 Bar &bull; Criminal Prosecution § 276B</span>
          </div>

          {/* Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Landlord Immunity Shield
            </span>
            When a commercial corporate tenant pays 90% rent and pockets the 10% TDS, the landlord is protected by Section 205 of the Income Tax Act, 1961 and the Bombay High Court ruling in <em>Yashpal Sahni v. ACIT</em>: the Income Tax Department cannot raise direct tax demands or attach landlord bank accounts. Landlords should leverage our comprehensive{" "}
            <Link
              href="/industries/builders-commercial-landlords-coworking-recovery"
              className="text-red-400 font-bold underline hover:text-red-300"
            >
              Builders, Commercial Landlords &amp; Co-Working Recovery Hub
            </Link>{" "}
            to dispatch an Advocate Demand Notice warning of Section 201(1A) 1.5% interest, Section 271C 100% penalty, and Section 276B criminal prosecution of tenant directors to compel immediate tax deposit within 7 days.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Statutory TDS on Rent
              </p>
              <p className="text-lg sm:text-2xl font-black text-slate-100 mt-1">
                10% (194-I)
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Threshold: ₹2,40,000/yr</p>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Section 205 Landlord Shield
              </p>
              <p className="text-lg sm:text-2xl font-black text-emerald-400 mt-1">
                100% Bar
              </p>
              <p className="text-[10px] text-emerald-300 mt-0.5">Zero Demand on Deductee</p>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Tenant Penal Interest
              </p>
              <p className="text-lg sm:text-2xl font-black text-amber-400 mt-1">
                1.5% / Month
              </p>
              <p className="text-[10px] text-amber-300 mt-0.5">IT Act § 201(1A) from deduction</p>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Director Prosecution
              </p>
              <p className="text-lg sm:text-2xl font-black text-red-400 mt-1">
                Up to 7 Yrs
              </p>
              <p className="text-[10px] text-red-300 mt-0.5">IT Act § 276B Rigorous Jail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <TDSRecoveryTableOfContents />

          {/* Right Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview of the TDS Scam */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  The 10% TDS Deduction Scam: How Defaulting Tenants Siphon Landlord Cash
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Every commercial landlord, co-working operator, and Grade-A office developer in India has faced this exact financial trap when a corporate tenant enters liquidity distress. Under Section 194-I of the Income Tax Act, 1961, any entity (corporate, LLP, or audited business) paying rent exceeding ₹2,40,000 per financial year is statutorily mandated to deduct 10% tax at source on land, buildings, and furniture (or 2% on plant and machinery) before remitting the balance to the landlord.
                </p>

                <p>
                  In practice, cash-strapped corporate tenants routinely remit only the 90% net rental amount into the landlord&apos;s bank account, issuing payment advice notes that state &ldquo;TDS deducted @ 10% u/s 194-I&rdquo;. However, instead of depositing this deducted 10% into the Central Government account via Challan ITNS 281 by the 7th of the following month, the tenant&apos;s management uses your tax money as an unauthorized, interest-free working capital overdraft to fund their own payroll, vendor arrears, and operating losses.
                </p>

                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-bold text-red-950 mb-1">
                    The Financial Trap: Double Taxation on the Commercial Landlord
                  </p>
                  <p className="text-xs sm:text-sm text-red-900">
                    When the financial year concludes, the landlord discovers that Form 26AS and the Annual Information Statement (AIS) show zero tax credit. When the landlord files their Income Tax Return declaring 100% gross rental revenue, the Centralized Processing Center (CPC Bengaluru) disallows the uncredited TDS, slapping the landlord with an unexpected tax demand, penal interest under Section 234B/234C, and the threat of bank account freezing.
                  </p>
                </div>

                <p>
                  Commercial landlords must understand that pocketing deducted TDS is not a mere accounting oversight; it constitutes criminal breach of trust under the Indian Penal Code / Bharatiya Nyaya Sanhita, an illegal retention of rent under lease covenants, and a prosecutable tax offense under Section 276B of the Income Tax Act.
                </p>
              </div>
            </section>

            {/* Section 2: Section 205 Statutory Immunity */}
            <section
              id="heading-section-205"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Statutory Immunity Under Section 205: Why the IT Department Cannot Penalize You
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  When an automated Section 143(1) intimation or demand notice arrives from the Income Tax Department demanding payment of the uncredited TDS amount, landlords often panic and consider paying the tax themselves to avoid frozen bank accounts. This is a critical legal mistake.
                </p>

                <p>
                  Parliament enacted an absolute, unconditional statutory shield for deductees under <strong>Section 205 of the Income Tax Act, 1961</strong>:
                </p>

                <blockquote className="bg-slate-900 text-slate-100 p-4 sm:p-5 rounded-xl border-l-4 border-emerald-400 font-mono text-xs sm:text-sm leading-relaxed my-3">
                  &ldquo;Section 205: Bar against direct demand on assessee &mdash; Where tax is deductible at the source under the foregoing provisions of this Chapter, the assessee shall not be called upon to pay the tax himself to the extent to which tax has been deducted from that income.&rdquo;
                </blockquote>

                <p>
                  The phraseology of Section 205 is mandatory (&ldquo;shall not be called upon to pay&rdquo;). Once the landlord proves through bank statements and rent invoices that tax was deducted from their rental payment (evidenced by the tenant paying 90% net), the tax liability shifts entirely to the deductor. The Income Tax Department is statutorily prohibited from raising any demand against the landlord.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                      What Section 205 Protects You From
                    </p>
                    <ul className="text-xs sm:text-sm text-emerald-950 space-y-1.5 list-disc list-inside">
                      <li>Direct recovery demands by the Assessing Officer</li>
                      <li>Levy of penal interest under Section 234A, 234B &amp; 234C</li>
                      <li>Attachment of landlord bank accounts under Section 226(3)</li>
                      <li>Adjustment of legitimate income tax refunds from other years</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                      Where the Department&apos;s Coercive Machinery Shifts
                    </p>
                    <ul className="text-xs sm:text-sm text-amber-950 space-y-1.5 list-disc list-inside">
                      <li>Treating the tenant company as an assessee-in-default (s.201)</li>
                      <li>Compounding penal interest @ 1.5%/month under Section 201(1A)</li>
                      <li>100% penalty on the defaulting tenant under Section 271C</li>
                      <li>Criminal prosecution of tenant directors under Section 276B</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: CBDT Circulars & Yashpal Sahni */}
            <section
              id="heading-cbdt-circulars"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  CBDT Circulars &amp; High Court Mandates: Yashpal Sahni Doctrine Explained
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  To eliminate harassment of commercial lessors and professionals by automated computer demands, the Central Board of Direct Taxes (CBDT) issued mandatory binding instructions to all field officers across India.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                      CBDT Instruction No. 275/29/2014-IT-(B)
                    </span>
                    <span className="text-xs text-slate-500">Dated 11 March 2016</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The CBDT explicitly instructed all Principal Chief Commissioners, Chief Commissioners, and Assessing Officers that in cases where tax has been deducted by a deductor but not deposited into the government treasury, <strong>no coercive demand or refund adjustment shall be enforced against the deductee</strong>. The Board ordered field formations to demand proof of deduction from the deductee (such as bank remittance advice or rent ledgers) and immediately shift all recovery proceedings against the defaulting deductor.
                  </p>
                </div>

                <p>
                  This administrative instruction codified the historic judicial holding of the Bombay High Court Division Bench in <em>Yashpal Sahni v. Rekha Hajarnavis, ACIT</em> (2007) 293 ITR 539. In that judgment, the High Court held:
                </p>

                <div className="border-l-4 border-[#DC2626] pl-4 italic text-slate-800 text-xs sm:text-sm leading-relaxed">
                  &ldquo;Once tax is deducted at source, the credit thereof cannot be denied to the deductee on the ground that the deductor has failed to deposit it into the government account. Section 205 provides a complete statutory bar. The revenue cannot pursue the deductee; its statutory remedies lie exclusively against the defaulting deductor under Sections 201 and 276B.&rdquo;
                </div>

                <p>
                  Similarly, the Delhi High Court in its landmark Public Interest Litigation judgment in <em>Court On Its Own Motion v. CIT</em> (2013) 352 ITR 273 mandated that Assessing Officers must not mechanically reject rectification applications under Section 154 when Form 26AS reflects zero credit due to deductor default.
                </p>
              </div>
            </section>

            {/* Section 4: 5-Stage TDS Recovery Rail */}
            <section
              id="heading-escalation-rail"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  The 5-Stage TDS Recovery &amp; Criminal Prosecution Escalation Rail
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Recovering un-deposited TDS from a defaulting corporate tenant requires a disciplined, multi-track escalation strategy that combines income tax statutory remedies with commercial lease enforcement.
                </p>

                <div className="space-y-4 pt-2">
                  {/* Step 1 */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Stage 1: Reconcile 26AS, AIS &amp; Bank Inward Remittance Ledgers
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Cross-reference your monthly bank statements against the TRACES Form 26AS portal. Pinpoint the exact quarters where the tenant remitted 90% net rent while Form 26AS shows ₹0 credit. Compile the tenant&apos;s Corporate Identification Number (CIN), registered office address, and names/DINs of all active directors from the Ministry of Corporate Affairs (MCA) portal.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Stage 2: Submit Section 205 Protective Representation to Your Assessing Officer
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Before filing your ITR or immediately upon receipt of a Section 143(1) intimation, submit a formal petition under Section 154/205 to your jurisdictional Assessing Officer. Annex the registered commercial lease deed, rent invoices specifying 10% TDS withholding, and bank credit receipts. Invoke the <em>Yashpal Sahni</em> ruling and CBDT Instruction No. 275/29/2014 to obtain a written stay on coercive tax demands.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Stage 3: Dispatch High Court Advocate 7-Day Statutory Demand Notice
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Issue a formal Fact-Verified Notice via Speed Post RPAD, email, and WhatsApp to the tenant company and each individual director. Demand Challan ITNS 281 proof of deposit within 7 days. Give notice that non-compliance will trigger a Section 276B criminal prosecution complaint and a lease default cure notice under Section 106 of the Transfer of Property Act.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Stage 4: File Formal Complaint with Jurisdictional CIT (TDS)
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        If the tenant fails to deposit within 7 days, lodge an enforcement complaint with the Commissioner of Income Tax (TDS) having jurisdiction over the tenant&apos;s registered office. Request an inspection under Section 133A, initiation of Section 201 assessee-in-default proceedings, 100% penalty under Section 271C, and criminal prosecution sanction under Section 279(1).
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Stage 5: Commercial Court Money Suit / Arbitration &amp; Lease Termination
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Treat the un-deposited 10% TDS as unpaid commercial rent arrears. Initiate summary recovery under Order XXXVII CPC or commercial arbitration for the principal deficit plus 18% commercial interest. If the default continues, exercise lease termination rights under Section 106 TPA and forfeit the security deposit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Decision Tree SVG Flowchart */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Decision Tree: How Landlords Respond to Un-Deposited TDS Defaults
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Use this operational decision rail to determine the immediate legal route based on the tenant&apos;s current lease status and response to tax demand notifications.
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-x-auto py-4">
                  <svg
                    viewBox="0 0 800 480"
                    width="800"
                    height="480"
                    className="w-full h-auto mx-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Node 1: Start */}
                    <rect x="275" y="10" width="250" height="50" rx="8" fill="#0F172A" stroke="#1E293B" strokeWidth="2" />
                    <text x="400" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      TENANT PAID 90% RENT
                    </text>
                    <text x="400" y="48" fill="#94A3B8" fontSize="10" textAnchor="middle">
                      Form 26AS / AIS Reflects ₹0 TDS Credit
                    </text>

                    {/* Arrow 1 Down */}
                    <line x1="400" y1="60" x2="400" y2="95" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Node 2: Immediate Dual Action */}
                    <rect x="225" y="95" width="350" height="60" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="400" y="118" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      EXECUTE DUAL STATUTORY SHIELD
                    </text>
                    <text x="400" y="136" fill="#F87171" fontSize="10" textAnchor="middle">
                      (1) Section 205 Protective Petition to AO + (2) 7-Day Advocate Notice
                    </text>

                    {/* Split Branches */}
                    <line x1="300" y1="155" x2="160" y2="210" stroke="#64748B" strokeWidth="2" />
                    <line x1="500" y1="155" x2="640" y2="210" stroke="#64748B" strokeWidth="2" />

                    {/* Branch A: Tenant Cures in 7 Days */}
                    <rect x="60" y="210" width="220" height="70" rx="8" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
                    <text x="170" y="235" fill="#065F46" fontSize="11" fontWeight="bold" textAnchor="middle">
                      TENANT COMPLIES &amp; DEPOSITS
                    </text>
                    <text x="170" y="252" fill="#047857" fontSize="10" textAnchor="middle">
                      Submits Challan ITNS 281
                    </text>
                    <text x="170" y="268" fill="#047857" fontSize="9" textAnchor="middle">
                      Files Form 26Q TDS Return
                    </text>

                    {/* Branch B: Tenant Stalls or Ignores */}
                    <rect x="520" y="210" width="240" height="70" rx="8" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
                    <text x="640" y="235" fill="#991B1B" fontSize="11" fontWeight="bold" textAnchor="middle">
                      TENANT STALLS / DEFAULT PERSISTS
                    </text>
                    <text x="640" y="252" fill="#B91C1C" fontSize="10" textAnchor="middle">
                      Claims Cash Crunch / Empty Excuses
                    </text>
                    <text x="640" y="268" fill="#B91C1C" fontSize="9" textAnchor="middle">
                      Zero 26AS Update Past 7-Day Cure Window
                    </text>

                    {/* Branch A Resolution */}
                    <line x1="170" y1="280" x2="170" y2="330" stroke="#10B981" strokeWidth="2" />
                    <rect x="60" y="330" width="220" height="60" rx="8" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
                    <text x="170" y="352" fill="#0F172A" fontSize="11" fontWeight="bold" textAnchor="middle">
                      CREDIT REFLECTED IN 26AS
                    </text>
                    <text x="170" y="370" fill="#64748B" fontSize="10" textAnchor="middle">
                      Claim TDS Credit in ITR &bull; File Revised Return
                    </text>

                    {/* Branch B Escalation Rails */}
                    <line x1="640" y1="280" x2="640" y2="330" stroke="#DC2626" strokeWidth="2" />
                    <rect x="520" y="330" width="240" height="85" rx="8" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                    <text x="640" y="352" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">
                      TRIGGER CRIMINAL &amp; CIVIL ACTION
                    </text>
                    <text x="640" y="370" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      &bull; File CIT (TDS) Complaint for s.276B Jail
                    </text>
                    <text x="640" y="386" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      &bull; Commercial Court Order XXXVII Summary Suit
                    </text>
                    <text x="640" y="402" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      &bull; Lease Termination &amp; Security Deposit Forfeiture
                    </text>

                    {/* Marker definition */}
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                {/* Mobile Stacked Flow Cards */}
                <div className="md:hidden space-y-3 pt-2">
                  <div className="p-4 bg-slate-900 text-white rounded-xl">
                    <p className="text-xs font-bold text-red-400 uppercase">Step 01 &bull; Identification</p>
                    <p className="text-sm font-bold mt-1">Tenant Paid 90% Rent &mdash; Form 26AS Missing</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Tenant withheld 10% TDS under Section 194-I but failed to deposit it via Challan 281.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-100 border border-slate-300 rounded-xl">
                    <p className="text-xs font-bold text-slate-600 uppercase">Step 02 &bull; Dual Shield</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">Section 205 Protective Petition + 7-Day Advocate Notice</p>
                    <p className="text-xs text-slate-700 mt-1">
                      File Section 205 affidavit before your AO to block demands. Serve notice on tenant warning of Section 276B criminal prosecution.
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <p className="text-xs font-bold text-emerald-800 uppercase">Outcome A &bull; Tenant Cures</p>
                    <p className="text-sm font-bold text-emerald-950 mt-1">Deposit Paid &amp; Form 26Q Filed</p>
                    <p className="text-xs text-emerald-800 mt-1">
                      Credit reflects in 26AS; landlord claims credit in ITR with zero tax leakage.
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-xs font-bold text-red-800 uppercase">Outcome B &bull; Default Persists</p>
                    <p className="text-sm font-bold text-red-950 mt-1">CIT-TDS Prosecution &amp; Commercial Suit</p>
                    <p className="text-xs text-red-800 mt-1">
                      Lodge CIT (TDS) criminal complaint under s.276B; file Order XXXVII summary suit for unpaid rent arrears with 18% interest.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Statutory Liability Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Statutory Liability Matrix: Penalties, Interest &amp; Prosecution Under IT Act
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  When a commercial tenant fails to remit deducted 194-I TDS, the Income Tax Act unleashes stringent, cumulative statutory consequences against both the corporate entity and its managing directors.
                </p>

                {/* Dark-Header Comparison Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm pt-2">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800">
                        <th className="py-3 px-3 sm:px-4 font-bold">Statutory Provision</th>
                        <th className="py-3 px-3 sm:px-4 font-bold">Trigger Event</th>
                        <th className="py-3 px-3 sm:px-4 font-bold">Quantum of Liability / Penalty</th>
                        <th className="py-3 px-3 sm:px-4 font-bold">Target of Enforcement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                          Section 201(1A)(ii)
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-700">
                          Deducted TDS not deposited by the 7th of the following month
                        </td>
                        <td className="py-3 px-3 sm:px-4 font-semibold text-amber-700">
                          Mandatory 1.5% per month or part of a month from deduction date
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-600">
                          Tenant Company (Assessee-in-Default)
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                          Section 271C
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-700">
                          Failure to deduct or pay whole or part of TDS to the treasury
                        </td>
                        <td className="py-3 px-3 sm:px-4 font-semibold text-red-600">
                          100% of the unpaid TDS amount (equal penalty)
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-600">
                          Imposed by Joint Commissioner of Income Tax
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                          Section 276B
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-700">
                          Failure to pay tax deducted under Chapter XVII-B to Central Govt
                        </td>
                        <td className="py-3 px-3 sm:px-4 font-black text-red-700">
                          Rigorous Imprisonment (3 Months to 7 Years) + Mandatory Fine
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-600">
                          Managing Director, CFO &amp; Principal Officers individually
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                          Section 234E
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-700">
                          Delay in filing quarterly TDS return (Form 26Q)
                        </td>
                        <td className="py-3 px-3 sm:px-4 font-semibold text-slate-800">
                          ₹200 per day for every day the default continues
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-600">
                          Deductor Entity (Capped at TDS sum)
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                          Section 205
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-700">
                          Attempt by AO to raise demand on landlord for missing TDS
                        </td>
                        <td className="py-3 px-3 sm:px-4 font-black text-emerald-600">
                          Absolute Legal Bar: ₹0 Tax Recoverable from Landlord
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-600">
                          Commercial Landlord / Deductee Protected
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 7: Worked Financial Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Worked Financial Ledger: Computing Rent Deficit, TDS Interest &amp; Penalties
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Consider a realistic commercial office lease scenario illustrating the exact financial exposure, penal interest compounding, and statutory demand quantum.
                </p>

                {/* Case Study Parameters */}
                <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Empirical Case Study &bull; Grade-A IT Park Commercial Floor
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      Contract: 3-Year Registered Lease Deed
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-5 text-xs sm:text-sm">
                    <div>
                      <p className="text-slate-400">Agreed Gross Monthly Rent:</p>
                      <p className="text-base font-bold text-white">₹5,00,000</p>
                    </div>
                    <div>
                      <p className="text-slate-400">10% TDS Deductible (194-I):</p>
                      <p className="text-base font-bold text-amber-400">₹50,000 / month</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Net Monthly Paid to Landlord:</p>
                      <p className="text-base font-bold text-emerald-400">₹4,50,000 (90%)</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Period of Default:</p>
                      <p className="text-base font-bold text-white">12 Months (Full FY)</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Total Un-Deposited TDS:</p>
                      <p className="text-base font-bold text-red-400">₹6,00,000</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Delayed Months (Average Aging):</p>
                      <p className="text-base font-bold text-white">10 Months Average</p>
                    </div>
                  </div>

                  {/* Financial Breakdown Table */}
                  <div className="overflow-x-auto rounded-lg border border-slate-700 bg-slate-950 p-4">
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                      Total Legal Recovery &amp; Statutory Penal Liability Ledger
                    </p>
                    <table className="w-full text-left text-xs font-mono">
                      <tbody className="divide-y divide-slate-800 text-slate-300">
                        <tr>
                          <td className="py-2">Principal Un-Deposited 194-I TDS (Rent Arrears)</td>
                          <td className="py-2 text-right font-bold text-white">₹6,00,000</td>
                        </tr>
                        <tr>
                          <td className="py-2">Section 201(1A) Interest @ 1.5%/month (Avg 10 months across 12 monthly deductions)</td>
                          <td className="py-2 text-right font-bold text-amber-400">₹90,000</td>
                        </tr>
                        <tr>
                          <td className="py-2">Section 271C Statutory Penalty Exposure (100% of default sum)</td>
                          <td className="py-2 text-right font-bold text-red-400">₹6,00,000</td>
                        </tr>
                        <tr>
                          <td className="py-2">Section 234E Late Filing Fee (Form 26Q delayed by 180 days @ ₹200/day)</td>
                          <td className="py-2 text-right font-bold text-slate-300">₹36,000</td>
                        </tr>
                        <tr>
                          <td className="py-2">Commercial Interest Claimable by Landlord @ 18% p.a. on unpaid rent arrears</td>
                          <td className="py-2 text-right font-bold text-emerald-400">₹1,08,000</td>
                        </tr>
                        <tr className="border-t-2 border-red-500 font-bold text-sm text-white">
                          <td className="py-2.5">Total Tenant Exposure Facing Legal Notice &amp; CIT Prosecution</td>
                          <td className="py-2.5 text-right text-red-400">₹14,34,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    By showing the tenant that a ₹6,00,000 working capital diversion escalates into a ₹14,34,000 financial liability plus Section 276B criminal imprisonment for directors, our team Demand Notice creates overwhelming pressure to deposit Challan 281 immediately.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Commercial Tenant Default Explorer: 4 Failure Modes &amp; Strategic Action
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Different defaulting tenants employ different excuses—from cash crunches to lease abandonment. Select your operational failure mode below to view the exact statutory countermeasure and step-by-step resolution.
                </p>

                <TDSRecoveryScenarioTabs />
              </div>
            </section>

            {/* Section 9: BSA 2023 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  BSA 2023 Section 63 Evidence Dossier &amp; Form 26AS Audit Trail
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</strong>, electronic records, bank core banking statements, TRACES downloads, and email communications are fully admissible in court proceedings and before tax authorities when supported by the prescribed electronic certificate.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Primary Documents Required for Section 205 Protective Petition
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&check;</span>
                        <span><strong>Registered Commercial Lease Deed:</strong> Highlighting rent covenant, TDS clause, and statutory indemnity obligations.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&check;</span>
                        <span><strong>Monthly Rent Invoices / Debit Notes:</strong> Showing 100% gross rent, 10% Section 194-I TDS deduction line item, and 90% net receivable.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&check;</span>
                        <span><strong>Bank Inward Statements:</strong> Certified bank statements proving receipt of exactly 90% net rent amount into landlord account.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&check;</span>
                        <span><strong>Form 26AS &amp; AIS Downloads:</strong> Official Income Tax portal export demonstrating zero tax credit for the disputed quarters.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Evidence for Section 276B Criminal Complaint &amp; Legal Notice
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span><strong>MCA Master Data Printout:</strong> Current company status, registered office, CIN, and DINs of Managing Director and CFO.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span><strong>Email &amp; Remittance Advice Trail:</strong> Tenant payment advice emails acknowledging 10% deduction without Challan details.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span><strong>BSA 2023 Section 63 Certificate:</strong> Statutory electronic record affidavit certifying authenticity of email servers and bank PDFs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span><strong>Speed Post Tracking Consignment:</strong> Postal department delivery confirmation proving service at the tenant&apos;s registered office.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Landmark Court Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Verified Judicial Precedents on Section 205 Immunity &amp; 276B Prosecution
                </h2>
              </div>

              <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  These landmark judgments form the unshakeable foundation of our team Demand Notices and Section 205 protective petitions before tax authorities.
                </p>

                <div className="space-y-5">
                  {COURT_PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5 border border-slate-200/80 shadow-sm"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span className="text-xs font-mono text-[#DC2626] bg-red-50 px-2 py-0.5 rounded border border-red-200 font-bold">
                          {item.citation}
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-slate-600 mb-2">
                        Parties: <span className="text-slate-800">{item.parties}</span> &bull; {item.date}
                      </p>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                        <p>
                          <strong>Facts:</strong> {item.facts}
                        </p>
                        <p>
                          <strong>Holding:</strong> {item.holding}
                        </p>
                        <p className="text-emerald-800 font-semibold bg-emerald-50/80 p-2 rounded border border-emerald-200">
                          <strong>Strategic Impact:</strong> {item.impact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Dual B2B CTA Banner */}
            <TDSRecoveryCTA />

            {/* Section 11: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Commercial Tenant 194-I TDS Defaults
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50 p-4 transition-colors open:bg-white open:border-slate-300"
                  >
                    <summary className="flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 transition-colors">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Primary Statutory Citations */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Citations &amp; Central Board of Direct Taxes Authorities
                </h2>
              </div>

              <div className="space-y-3">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3 text-xs sm:text-sm"
                  >
                    <span className="text-slate-800 font-medium">{source.title}</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] hover:text-[#B91C1C] font-bold shrink-0 inline-flex items-center gap-1"
                    >
                      Official Source &rarr;
                    </a>
                  </div>
                ))}
              </div>

              {/* Author & Reviewer Attribution */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
                <div>
                  <p className="font-bold text-slate-800 text-sm">
                    Authored by Adv. Anuj Anand Malik
                  </p>
                  <p>Advocate &amp; Founder, AMA Legal Solutions &bull; High Court of Delhi</p>
                  {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Peer-reviewed by Senior Tax Counsel &amp; Real Estate Dispute Practice Group
                  </p>
                </div>
                <div className="text-right">
                  <p>Published: November 2026</p>
                  <p>Statutory Law: Income Tax Act, 1961 &amp; Transfer of Property Act, 1882</p>
                </div>
              </div>
            </section>

            {/* Sibling & Cross-Cluster Navigation */}
            <div className="bg-slate-100 rounded-2xl border border-slate-200 p-5 sm:p-6">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Related Real Estate &amp; Commercial Lease Dispute Guides
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <Link
                  href="/commercial-lease-lock-in-period-breach-unexpired-rent-recovery"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors block text-xs"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    Commercial Lease Lock-In Breach
                  </span>
                  <span className="text-slate-600">
                    Recover unexpired lock-in rent, brokerage &amp; fit-out CapEx.
                  </span>
                </Link>

                <Link
                  href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors block text-xs"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    RERA Section 19 Builder Recovery
                  </span>
                  <span className="text-slate-600">
                    Enforce SBI MCLR + 2% interest on allottee milestone defaults.
                  </span>
                </Link>

                <Link
                  href="/coworking-managed-office-enterprise-seat-lock-in-default-recovery"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors block text-xs"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    Co-Working Enterprise Seat Defaults
                  </span>
                  <span className="text-slate-600">
                    Recover managed workspace lock-in fees and IT fit-out dues.
                  </span>
                </Link>

                <Link
                  href="/legal-notice-to-tenant-for-unpaid-rent-eviction"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors block text-xs"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    Notice to Tenant for Rent &amp; Eviction
                  </span>
                  <span className="text-slate-600">
                    Section 106 TPA 15-day termination with mesne profits.
                  </span>
                </Link>

                <Link
                  href="/templates/society-maintenance-recovery-notice"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors block text-xs"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    Society Maintenance Recovery Notice
                  </span>
                  <span className="text-slate-600">
                    Free annotated 15-day format for commercial condos &amp; RWAs.
                  </span>
                </Link>

                <Link
                  href="/tools/limitation-period-calculator"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors block text-xs"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    Limitation Period Calculator
                  </span>
                  <span className="text-slate-600">
                    Calculate 3-year statutory clocks for rent &amp; commercial contracts.
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Cluster Cross-Links Footer Component */}
      <RelatedRecoveryGuides />
    </div>
  );
}
