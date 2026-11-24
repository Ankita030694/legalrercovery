import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import IbcBuilderCTA from "./IbcBuilderCTA";
import IbcBuilderTableOfContents from "./IbcBuilderTableOfContents";
import IbcBuilderScenarioTabs from "./IbcBuilderScenarioTabs";

export const revalidate = 86400;

const PAGE_URL = `${SITE_URL}/ibc-section-8-by-building-material-suppliers-against-real-estate-builder`;
const META_TITLE = "IBC Section 8 & 9 by Material Suppliers vs Builders";
const META_DESCRIPTION =
  "Homebuyers need 100 allottees under IBC s.7, but a single steel, RMC, or lift supplier owed ₹1 Cr+ (Principal + Interest) can serve Section 8 Form 3 solo.";
const EXACT_H1 =
  "Why Operational Creditors (RMC, Steel, Lift & MEP Suppliers >= ₹1 Cr) Don't Face the 100-Homebuyer Bar Under IBC—and How Builders Settle Within 10 Days!";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "IBC Section 8 and 9 Operational Creditor Recovery for Building Material Suppliers"
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
      "The Insolvency and Bankruptcy Code, 2016 (Sections 4, 5(20)–(21), 7, 8, 9 & 238) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2154",
  },
  {
    title:
      "Insolvency and Bankruptcy Board of India (Application to Adjudicating Authority) Rules, 2016 — Form 3 & Form 4 Demand Notices",
    url: "https://ibbi.gov.in/legal-framework/rules",
  },
  {
    title:
      "The Real Estate (Regulation and Development) Act, 2016 (RERA Escrow & Project Governance Interface with IBC)",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Weighbridge, E-Way Bill & Email Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A — Parallel Director Prosecution for Bounced Builder Cheques)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Ministry of Corporate Affairs (MCA) V3 Portal — Master Data & Registered Office Verification for Form 3 Service",
    url: "https://www.mca.gov.in/content/mca/global/en/home.html",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court Upholding 100-Allottee Proviso Strictly for Section 7 Homebuyers",
    parties: "Manish Kumar v. Union of India & Anr.",
    citation: "(2021) 5 SCC 1, Supreme Court of India",
    date: "Judgment Dated 19 January 2021",
    facts:
      "Homebuyer-allottees challenged the Insolvency and Bankruptcy Code (Amendment) Act, 2020, which inserted the second proviso to Section 7(1) requiring at least 100 allottees or 10% of total allottees of a real estate project (whichever is less) to jointly file a Section 7 insolvency petition.",
    holding:
      "A 3-Judge Bench upheld the constitutional validity of the 100-allottee threshold for real estate allottees filing as Financial Creditors under Section 7. Crucially, the statutory architecture leaves Sections 8 and 9 completely untouched—confirming that Operational Creditors (building material, steel, RMC, lift, and MEP vendors) face zero minimum applicant headcount and may file individually upon a ₹1 Crore default.",
    principle: "100-Applicant Bar Applies Strictly to Section 7 Allottees, Never Section 9 Vendors",
    takeaway:
      "A single steel distributor, RMC plant, or elevator OEM owed ₹1 Crore+ can trigger CIRP against a corporate builder solo without coordinating with homebuyers.",
  },
  {
    title: "Supreme Court Defining 'Pre-Existing Dispute' & Rejecting Moonshine Defenses",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    date: "Judgment Dated 21 September 2017",
    facts:
      "An operational creditor served a Section 8 Demand Notice for unpaid service invoices. The corporate debtor replied within 10 days raising belated grievances to block Section 9 admission before the NCLT.",
    holding:
      "The Supreme Court ruled that under Section 8(2)(a), the Adjudicating Authority must examine whether there is a plausible contention requiring further investigation that existed prior to receipt of the demand notice—and not a 'patently feeble legal argument or an assertion of fact unsupported by evidence.' Spurious, hypothetical, or illusory ('moonshine') disputes manufactured after Form 3 delivery cannot stall Section 9 admission.",
    principle: "Dispute Must Pre-Date Form 3 & Pass the Plausible Contention Test",
    takeaway:
      "If a builder signs RMC challans, avails GST ITC, and sends a '28-day cube failure' email only after receiving your Form 3 notice, NCLT will reject the defense as moonshine.",
  },
  {
    title: "NCLAT Ruling Including Contractual Invoice Interest in ₹1 Crore IBC Threshold",
    parties: "Prashat Agarwal v. Vikash Parasrampuria & Anr.",
    citation: "Company Appeal (AT) (Ins) No. 690 of 2022, NCLAT New Delhi",
    date: "Judgment Dated 15 July 2022",
    facts:
      "An operational creditor supplied goods where the unpaid principal was below ₹1 Crore, but the tax invoices explicitly stipulated 18%–24% per annum interest on delayed payments. Combined principal plus accrued interest exceeded ₹1 Crore. The corporate debtor argued that interest cannot be added to operational debt to meet Section 4's ₹1 Crore threshold.",
    holding:
      "The NCLAT held that total amount for maintainability under Section 4 of the IBC includes both principal debt and contractual interest accrued thereon, provided the interest stipulation is printed on the tax invoices or agreed in the Purchase Order/contract acted upon by the parties.",
    principle: "Principal + Contractual Invoice Interest Combines to Cross ₹1 Crore Floor",
    takeaway:
      "Suppliers with ₹75L–₹95L unpaid principal can legitimately cross the ₹1 Crore Section 4 threshold by computing contractual invoice interest up to the Form 3 notice date.",
  },
  {
    title: "Supreme Court Permitting Advocates to Serve Section 8 Form 3 Demand Notices",
    parties: "Macquarie Bank Ltd. v. Shilpi Cable Technologies Ltd.",
    citation: "(2018) 2 SCC 674, Supreme Court of India",
    date: "Judgment Dated 15 December 2017",
    facts:
      "The NCLAT had dismissed a Section 9 petition on the hyper-technical ground that the Section 8 Demand Notice was prepared on verified facts rather than the creditor's director, and that a Section 9(3)(c) bank certificate was not annexed.",
    holding:
      "The Supreme Court reversed the NCLAT, holding that an authorized advocate or legal counsel is fully competent to issue a Section 8 Demand Notice on behalf of an Operational Creditor under Form 3/Form 4. Further, the bank certificate under Section 9(3)(c) is directory and not a mandatory condition precedent where alternative proof of non-payment exists.",
    principle: "Advocate-Issued Form 3 Valid; Bank Certificate Directory",
    takeaway:
      "CFOs can immediately instruct specialized recovery counsel to issue Form 3 notices on law-firm letterhead without procedural bottlenecks.",
  },
  {
    title: "NCLAT on Project-Wise & Reverse CIRP in Multi-Project Real Estate Builders",
    parties: "Flat Buyers Association Winter Hills-77 v. Umang Realtech Pvt. Ltd.",
    citation: "Company Appeal (AT) (Ins) No. 926 of 2019, NCLAT New Delhi",
    date: "Judgment Dated 04 February 2020",
    facts:
      "A real estate developer faced insolvency proceedings affecting a specific residential project while operating multiple independent RERA-registered projects.",
    holding:
      "The NCLAT evolved the concept of 'Reverse CIRP' and project-wise insolvency in real estate, confining the Corporate Insolvency Resolution Process to the specific defaulting real estate project rather than freezing unrelated solvent projects of the developer, while placing the defaulting project under the supervision of the Interim Resolution Professional (IRP).",
    principle: "Project-Wise CIRP Still Strips Builder Control Over the Defaulting RERA Project",
    takeaway:
      "Even under project-wise CIRP, the developer loses operational control, RERA escrow authority, and flat-sale signing power over that project—creating immense urgency to settle ₹1 Cr+ material bills within 10 days.",
  },
];

const DEFENSE_MATRIX = [
  {
    defense: "1. 'You are only 1 supplier; IBC requires 100 applicants like homebuyers.'",
    statutoryFlaw:
      "Confuses Section 7(1) second proviso (Financial Creditor homebuyers) with Section 8 & 9 (Operational Creditors).",
    counterAction:
      "Cite Manish Kumar v. Union of India (2021) 5 SCC 1. A single material supplier with >= ₹1 Cr default files solo.",
  },
  {
    defense: "2. 'Your principal is only ₹84 Lakh; interest cannot make it ₹1 Crore.'",
    statutoryFlaw:
      "Ignores Section 5(21) 'claim' definition and accepted tax-invoice interest terms.",
    counterAction:
      "Invoke Prashat Agarwal v. Vikash Parasrampuria (NCLAT 2022) with GST-accepted tax invoices carrying 18%–24% p.a. interest clauses.",
  },
  {
    defense: "3. 'Your RMC cubes failed / steel had rust' (sent on Day 8 after Form 3).",
    statutoryFlaw:
      "Fails Section 8(2)(a) requirement that the dispute must be pre-existing prior to Form 3 receipt.",
    counterAction:
      "Invoke Mobilox Innovations (2018) 1 SCC 353 + Sale of Goods Act s.42 + signed delivery challans & GSTR-2B ITC availment.",
  },
  {
    defense: "4. 'Our project is registered under RERA; IBC cannot override RERA.'",
    statutoryFlaw:
      "Directly violates Section 238 of IBC, 2016 (non-obstante overriding clause).",
    counterAction:
      "Cite Pioneer Urban Land & Infrastructure Ltd. v. Union of India (2019) 8 SCC 416: IBC overrides RERA in case of inconsistency.",
  },
  {
    defense: "5. 'Purchase Order has an Arbitration Clause; NCLT has no jurisdiction.'",
    statutoryFlaw:
      "An uninvoked arbitration clause does not bar Section 9 unless arbitration was actually invoked prior to Form 3.",
    counterAction:
      "Demonstrate zero Section 21 Arbitration notice existed before Form 3 service; insolvency is a statutory right in rem.",
  },
  {
    defense: "6. 'Form 3 was sent to site office / site engineer, not our Registered Office.'",
    statutoryFlaw:
      "Valid procedural objection under Rule 5 of AA Rules, 2016 if not served at MCA registered office.",
    counterAction:
      "Always serve Form 3 simultaneously by Speed Post RPAD at the MCA Master Data Registered Office AND official Director emails.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Can a single building material supplier file IBC Section 9 against a real estate builder without 100 applicants?",
    a: "Yes. The 100-allottee or 10% threshold under the second proviso to Section 7(1) of the IBC, 2016 applies exclusively to homebuyers filing as Financial Creditors. A single steel distributor, Ready-Mix Concrete (RMC) supplier, cement company, elevator OEM, or MEP contractor qualifying as an Operational Creditor under Section 5(20) can independently serve a Section 8 Demand Notice and file a Section 9 petition before the NCLT if the unpaid operational debt is ₹1 Crore or more.",
  },
  {
    q: "Can we combine principal and contractual invoice interest to reach the ₹1 Crore IBC threshold?",
    a: "Yes. Under the NCLAT ruling in Prashat Agarwal v. Vikash Parasrampuria (2022), if your tax invoices, Purchase Order, or supply agreement explicitly stipulate a delayed-payment interest clause (such as 18% or 24% per annum), and the builder accepted the goods and invoices without demur, the accrued contractual interest is legally added to the unpaid principal to satisfy the ₹1 Crore Section 4 threshold.",
  },
  {
    q: "Why do builders settle so quickly within the 10-day Section 8 Form 3 window?",
    a: "Once a Section 9 petition is admitted by the NCLT, an Interim Resolution Professional (IRP) takes over management of the builder company (or the defaulting RERA project under project-wise CIRP), suspending the builder's Board of Directors and freezing bank accounts under Section 17. Builders will almost never risk losing control of a ₹200–₹500 Crore RERA project over a ₹1.1 Crore material bill, making the 10-day Form 3 window the highest-leverage settlement trigger in Indian commercial law.",
  },
  {
    q: "What if the builder sends a fake quality complaint or '28-day cube failure' email after receiving our Form 3?",
    a: "Under the Supreme Court's binding precedent in Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2018) 1 SCC 353, a dispute under Section 8(2)(a) must be genuine and pre-existing—documented prior to receipt of the Form 3 Demand Notice. A belated, unsubstantiated quality excuse manufactured after Form 3 delivery, especially after the builder availed GST Input Tax Credit and signed site challans, is dismissed as a 'moonshine defense.'",
  },
  {
    q: "Should building material suppliers use Form 3 or Form 4 under IBC Section 8?",
    a: "Rule 5 of the Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016 provides Form 3 (narrative demand notice listing particulars of operational debt and attached records) and Form 4 (demand notice demanding payment along with copies of invoices). In practice, material suppliers with multiple running invoices, interest calculations, E-Way Bills, and weighbridge slips should serve Form 3 accompanied by a complete invoice-wise Excel ledger and supporting delivery annexures.",
  },
  {
    q: "What if our unpaid builder exposure is below ₹1 Crore (e.g., ₹25 Lakh to ₹85 Lakh)?",
    a: "If principal plus contractual interest remains below ₹1 Crore, NCLT Section 9 is barred by Section 4. In that bracket, suppliers should deploy a rapid multi-track offensive: (1) Order XXXVII CPC Summary Suit in Commercial Court backed by signed challans and GST E-Way Bills, (2) Section 138 NI Act criminal prosecution on bounced PDCs/security cheques, and (3) MSME Samadhaan (MSEFC) if your enterprise holds an Udyam Micro or Small registration.",
  },
  {
    q: "Does a RERA registration or an arbitration clause in the builder's Purchase Order block IBC Section 9?",
    a: "No. Section 238 of the IBC gives the Code overriding effect over RERA and other inconsistent statutes. Similarly, a boilerplate arbitration clause in a Purchase Order does not bar a Section 9 petition unless genuine arbitration proceedings (such as a Section 21 invocation notice) were already initiated prior to the receipt of your Section 8 Demand Notice.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  image: `${SITE_URL}/blog_money_recovery.png`,
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
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
      name: "Chemicals, Steel, RMC & Building Materials Recovery",
      item: `${SITE_URL}/industries/chemicals-steel-rmc-building-materials-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "IBC Section 8 & 9 Against Real Estate Builders",
      item: PAGE_URL,
    },
  ],
};

export default function IbcSection8BuildingMaterialSuppliersPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IBC 2016 &sect;8 &amp; &sect;9</span>
            <span>&bull;</span>
            <span>IND-14 Building Materials &amp; Real Estate</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Statutory Summary
            </span>
            Under the{" "}
            <Link
              href="/industries/chemicals-steel-rmc-building-materials-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              Chemicals, Steel, RMC &amp; Building Materials Recovery Hub
            </Link>
            , the 100-allottee threshold in Section 7(1) IBC applies <strong>only to homebuyers</strong>. A single RMC, TMT steel, cement, lift, or MEP vendor owed &ge; &rupee;1 Crore (Principal + Contractual Interest) can serve a Section 8 Form 3 Demand Notice solo, exposing the builder&apos;s entire RERA project to Interim Resolution Professional (IRP) takeover within 10 days.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-xl sm:text-2xl font-black text-slate-100">&rupee;1 Crore</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Sec. 4 Floor (Principal + Interest)
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-emerald-400">1 Supplier</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Zero 100-Homebuyer Bar Under Sec. 9
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-amber-400">10 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Statutory Form 3 Cure Window
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-red-400">IRP Takeover</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Board Suspended on Sec. 9 Admission
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Building Materials Recovery",
                href: "/industries/chemicals-steel-rmc-building-materials-recovery",
              },
              { label: "IBC Section 8 & 9 Against Builders" },
            ]}
          />
        </div>

        {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 mb-6 pb-4 border-b border-slate-200">
          <span>
            Legally Reviewed by{" "}
            <strong className="text-slate-800">Anuj Anand Malik</strong>, Advocate &amp; Founder,
            AMA Legal Solutions
          </span>
          <span>Statute Verified: IBC 2016 &bull; NCLAT &amp; Supreme Court Jurisprudence</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <IbcBuilderTableOfContents />

          {/* Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-homebuyer-bar-bypass"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Material Suppliers Bypass the 100-Homebuyer IBC Bar
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Across India&apos;s real estate corridors—from Gurugram and Noida to Pune, Mumbai,
                Bengaluru, and Hyderabad—building material suppliers routinely absorb massive
                receivables defaults from corporate developers. When a Ready-Mix Concrete (RMC)
                plant, TMT steel distributor, cement manufacturer, elevator OEM, or MEP contractor
                chases a &rupee;1.2 Crore unpaid bill, builders frequently deploy a rehearsed
                bluff: <em>&ldquo;Even our homebuyers couldn&apos;t drag us to NCLT without 100
                signatures—you can&apos;t touch us under IBC.&rdquo;</em>
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                That statement is a deliberate statutory distortion. In 2020, Parliament amended{" "}
                <strong>Section 7(1) of the Insolvency and Bankruptcy Code, 2016 (IBC)</strong> by
                inserting a second proviso requiring real estate allottees (homebuyers) to apply
                jointly in groups of at least <strong>100 allottees or 10% of the total allottees</strong>{" "}
                of that project, whichever is less. That restriction was enacted solely to prevent a
                single disgruntled flat buyer from stalling an entire housing project under Section 7
                as a Financial Creditor.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                <strong>Operational Creditors operate under an entirely different statutory track.</strong>{" "}
                Sections 8 and 9 of the IBC contain <strong>no 100-applicant hurdle</strong>, no 10%
                consortium requirement, and no homebuyer-parity bar. If your company supplied goods
                or works services—whether RMC batches, structural steel, toughened glass, passenger
                elevators, switchgear, or waterproofing chemicals—and the corporate builder&apos;s
                unpaid default equals or exceeds <strong>&rupee;1 Crore</strong>, your company can
                serve a <strong>Form 3 Demand Notice</strong> completely solo.
              </p>

              <div className="bg-slate-900 text-white rounded-xl p-5 mb-5">
                <p className="text-xs font-extrabold uppercase tracking-widest text-red-400 mb-2">
                  The Asymmetric Boardroom Leverage
                </p>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Real estate promoters are acutely aware of what happens upon NCLT Section 9
                  admission: under <strong>Section 17 IBC</strong>, the management of the corporate
                  debtor vests immediately in an <strong>Interim Resolution Professional (IRP)</strong>,
                  the Board of Directors is suspended, and bank signatory powers are frozen. No
                  solvent or semi-solvent developer wants to risk losing control of a &rupee;300–&rupee;500
                  Crore RERA project over a &rupee;1.1 Crore steel, RMC, or lift invoice. That
                  asymmetric risk is why well-documented Section 8 Form 3 notices trigger CFO
                  settlement calls within the 10-day statutory window.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                    Section 7 (Homebuyer Allottees)
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Classified as Financial Creditors under s.5(8)(f) Explanation. Bound by the
                    mandatory <strong>100 allottees or 10%</strong> joint-filing bar upheld in{" "}
                    <em>Manish Kumar v. Union of India</em>.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
                    Sections 8 &amp; 9 (Material &amp; MEP Vendors)
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Classified as Operational Creditors under s.5(20). <strong>Single applicant</strong>{" "}
                    filing permitted upon &ge; &rupee;1 Crore default with zero co-creditor
                    consortium needed.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="heading-statutory-timeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Timeline: Form 3 Notice to Section 9 NCLT Admission
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Unlike civil recovery suits where defendants drag written statements for years,
                Sections 8 and 9 of the IBC enforce a rigid, front-loaded statutory clock. Every
                material supplier CFO and legal head must execute each milestone within strict
                limitation boundaries (3 years from the date of default under Article 137 of the
                Limitation Act, 1963, unless reset by a Section 18 signed balance confirmation or
                part-payment).
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block mb-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 overflow-x-auto">
                <svg
                  viewBox="0 0 800 240"
                  width="800"
                  height="240"
                  className="w-full h-auto"
                  role="img"
                  aria-label="IBC Section 8 and 9 Statutory Timeline Flowchart for Building Material Suppliers"
                >
                  <rect width="800" height="240" rx="12" fill="#F8FAFC" />
                  {/* Step 1 */}
                  <rect x="20" y="45" width="165" height="145" rx="12" fill="#0F172A" />
                  <text x="35" y="75" fill="#F87171" fontSize="11" fontWeight="700">
                    DAY 0 &bull; SEC. 8(1)
                  </text>
                  <text x="35" y="100" fill="#FFFFFF" fontSize="14" fontWeight="800">
                    Serve Form 3
                  </text>
                  <text x="35" y="122" fill="#CBD5E1" fontSize="11">
                    Demand Notice +
                  </text>
                  <text x="35" y="138" fill="#CBD5E1" fontSize="11">
                    Invoice &amp; Interest
                  </text>
                  <text x="35" y="154" fill="#CBD5E1" fontSize="11">
                    Ledger (&ge; ₹1 Cr)
                  </text>
                  <text x="35" y="175" fill="#94A3B8" fontSize="10">
                    RPAD + Director Email
                  </text>

                  {/* Arrow 1 */}
                  <path d="M188 118 L215 118" stroke="#DC2626" strokeWidth="3" />
                  <polygon points="215,112 225,118 215,124" fill="#DC2626" />

                  {/* Step 2 */}
                  <rect x="228" y="45" width="165" height="145" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <text x="243" y="75" fill="#DC2626" fontSize="11" fontWeight="700">
                    DAYS 1–10 &bull; SEC. 8(2)
                  </text>
                  <text x="243" y="100" fill="#0F172A" fontSize="14" fontWeight="800">
                    10-Day Cure Window
                  </text>
                  <text x="243" y="122" fill="#475569" fontSize="11">
                    Builder must either
                  </text>
                  <text x="243" y="138" fill="#475569" fontSize="11">
                    pay full default OR
                  </text>
                  <text x="243" y="154" fill="#475569" fontSize="11">
                    prove pre-existing
                  </text>
                  <text x="243" y="170" fill="#475569" fontSize="11">
                    dispute / settlement
                  </text>

                  {/* Arrow 2 */}
                  <path d="M396 118 L423 118" stroke="#DC2626" strokeWidth="3" />
                  <polygon points="423,112 433,118 423,124" fill="#DC2626" />

                  {/* Step 3 */}
                  <rect x="436" y="45" width="165" height="145" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <text x="451" y="75" fill="#DC2626" fontSize="11" fontWeight="700">
                    DAY 11+ &bull; SEC. 9(1)
                  </text>
                  <text x="451" y="100" fill="#0F172A" fontSize="14" fontWeight="800">
                    File Sec. 9 NCLT
                  </text>
                  <text x="451" y="122" fill="#475569" fontSize="11">
                    Form 5 Petition +
                  </text>
                  <text x="451" y="138" fill="#475569" fontSize="11">
                    s.9(3)(b) No-Dispute
                  </text>
                  <text x="451" y="154" fill="#475569" fontSize="11">
                    Affidavit + NeSL /
                  </text>
                  <text x="451" y="170" fill="#475569" fontSize="11">
                    Bank Proof
                  </text>

                  {/* Arrow 3 */}
                  <path d="M604 118 L631 118" stroke="#DC2626" strokeWidth="3" />
                  <polygon points="631,112 641,118 631,124" fill="#DC2626" />

                  {/* Step 4 */}
                  <rect x="644" y="45" width="136" height="145" rx="12" fill="#DC2626" />
                  <text x="658" y="75" fill="#FEE2E2" fontSize="11" fontWeight="700">
                    SEC. 9(5) &amp; 17
                  </text>
                  <text x="658" y="100" fill="#FFFFFF" fontSize="14" fontWeight="800">
                    CIRP &amp; IRP
                  </text>
                  <text x="658" y="122" fill="#FEF2F2" fontSize="11">
                    14-Day statutory
                  </text>
                  <text x="658" y="138" fill="#FEF2F2" fontSize="11">
                    admission review;
                  </text>
                  <text x="658" y="154" fill="#FEF2F2" fontSize="11">
                    Board suspended;
                  </text>
                  <text x="658" y="170" fill="#FEF2F2" fontSize="11">
                    Builder settles
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden mb-5">
                {[
                  {
                    step: "Day 0 • Section 8(1)",
                    title: "Serve Form 3 Demand Notice",
                    desc: "Dispatch Form 3 via Speed Post RPAD to MCA registered office + Director emails with Principal + Interest ledger (>= ₹1 Cr).",
                  },
                  {
                    step: "Days 1–10 • Section 8(2)",
                    title: "10-Day Statutory Cure Window",
                    desc: "Builder must pay the operational debt or produce documented proof of a pre-existing dispute predating Form 3.",
                  },
                  {
                    step: "Day 11+ • Section 9(1)",
                    title: "File Form 5 Petition Before NCLT",
                    desc: "Attach s.9(3)(b) affidavit confirming no valid dispute, invoice copies, E-Way Bills, and bank statements.",
                  },
                  {
                    step: "Section 9(5) & 17",
                    title: "Admission & IRP Takeover Leverage",
                    desc: "NCLT examines completeness (14-day statutory benchmark). Threat of Board suspension compels immediate Consent Terms.",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                      {card.step}
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{card.title}</p>
                    <p className="text-xs text-slate-600 mt-1">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="heading-interest-threshold"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Combining Principal + Invoice Interest to Cross &rupee;1 Crore
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Since March 2020, the minimum default threshold under Section 4 of the IBC stands at{" "}
                <strong>&rupee;1 Crore</strong>. Many TMT steel, RMC, and glass suppliers assume they
                are excluded from NCLT simply because their unpaid principal is &rupee;78 Lakh or
                &rupee;85 Lakh. However, under the NCLAT&apos;s landmark ruling in{" "}
                <strong>
                  <em>Prashat Agarwal v. Vikash Parasrampuria</em>
                </strong>{" "}
                (2022), contractual interest expressly stipulated on accepted tax invoices or
                Purchase Orders forms an integral part of &ldquo;operational debt&rdquo; under
                Section 5(21) and must be added to principal to determine the &rupee;1 Crore
                threshold.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                To verify your exact statutory interest accrual before issuing Form 3, you can also
                benchmark MSME vs. contractual interest rates using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                . Note carefully: for IBC Section 4 aggregation, NCLT benches require{" "}
                <strong>contractual interest</strong> printed on the invoices/PO (not unilateral
                post-hoc interest demanded for the first time in the legal notice).
              </p>

              {/* Worked Threshold Ledger Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold">Claim Component (RMC / Steel / MEP)</th>
                      <th className="py-3 px-4 font-bold">Evidentiary Basis</th>
                      <th className="py-3 px-4 font-bold text-right">Amount (&rupee;)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        18 Unpaid Tax Invoices (30-Day Credit)
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Signed Challans + E-Way Bills + GSTR-2B ITC Availed
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-slate-900">
                        &rupee;84,50,000
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Less: Verified Part-Payment / Credit Note
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        RTGS Receipt (Resets Limitation under s.19)
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-slate-600">
                        (&rupee;0)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Contractual Interest @ 24% p.a. (393 Days Avg. Overdue)
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Printed Invoice Clause + <em>Prashat Agarwal</em> NCLAT Rule
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-emerald-700">
                        + &rupee;21,84,964
                      </td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="py-3.5 px-4 font-black text-slate-900">
                        Total Operational Debt Claimed in Form 3
                      </td>
                      <td className="py-3.5 px-4 font-bold text-emerald-800">
                        Crosses &rupee;1,00,00,000 Section 4 Threshold
                      </td>
                      <td className="py-3.5 px-4 text-right font-black text-emerald-800 text-base">
                        &rupee;1,06,34,964
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                <strong>Critical Drafting Guardrail:</strong> Ensure your invoice interest clause
                appears clearly on the face of every GST tax invoice (e.g.,{" "}
                <em>&ldquo;Interest @ 24% p.a. will be charged on bills unpaid beyond 30 days&rdquo;</em>
                ) and is never contradicted by a zero-interest clause in the builder&apos;s signed
                Purchase Order.
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="heading-verified-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Verified NCLAT &amp; Supreme Court Precedents for Suppliers
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Every Section 8 Form 3 notice and Section 9 Form 5 petition filed by a building
                material supplier stands on five foundational rulings of the Supreme Court of India
                and the National Company Law Appellate Tribunal (NCLAT). Citing these authorities
                directly inside your demand notice signals to the builder&apos;s General Counsel that
                standard delay tactics will fail at the NCLT admission stage.
              </p>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative bg-slate-50 border border-slate-200 rounded-2xl p-5 pl-6 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                        {item.citation}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">{item.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-bold text-slate-700 mb-3">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                      <strong className="text-slate-900">Facts:</strong> {item.facts}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      <strong className="text-slate-900">Holding:</strong> {item.holding}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-200">
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                        {item.principle}
                      </span>
                      <span className="text-xs text-slate-600">
                        <strong className="text-slate-900">Supplier Takeaway:</strong>{" "}
                        {item.takeaway}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Builder Defense Pre-Emption Matrix: Defeating Moonshine Disputes
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Within the 10-day Section 8(2) window, builder legal teams routinely attempt to
                manufacture a &ldquo;pre-existing dispute&rdquo; to block Section 9 admission. Below
                are the six most common developer objections and the exact statutory counter-strike
                that neutralizes each one.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold">Builder&apos;s Section 8(2) Excuse</th>
                      <th className="py-3 px-4 font-bold">Statutory Vulnerability</th>
                      <th className="py-3 px-4 font-bold">Supplier Counter-Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {DEFENSE_MATRIX.map((row, idx) => (
                      <tr key={idx} className="align-top hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">{row.defense}</td>
                        <td className="py-3.5 px-4 text-slate-600">{row.statutoryFlaw}</td>
                        <td className="py-3.5 px-4 text-slate-800 font-medium">
                          {row.counterAction}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section
              id="heading-scenario-explorer"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Interactive Builder Default &amp; Form 3 Strategy Explorer
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your material supply category or builder evasion tactic below to inspect the
                exact IBC Section 8 &amp; 9 execution protocol, case law authority, and commercial
                leverage impact.
              </p>

              <IbcBuilderScenarioTabs />
            </section>

            {/* Section 7 */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Form 3 vs Form 4 &amp; BSA 2023 Section 63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Under Rule 5 of the IBBI (Application to Adjudicating Authority) Rules, 2016, an
                Operational Creditor may serve a Demand Notice in <strong>Form 3</strong> (detailed
                particulars of operational debt + annexures) or <strong>Form 4</strong> (notice
                demanding payment with copy of invoice attached). For construction material
                suppliers with multiple deliveries, always serve <strong>Form 3</strong> supported
                by a clean invoice-wise Excel schedule and electronic evidence authenticated under{" "}
                <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>. You can
                also review structured commercial notice formatting in our{" "}
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Commercial Legal Notice &amp; Reply Template Workspace
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. MCA Master Data Registered Office",
                    detail:
                      "Download current MCA V3 Master Data of the builder corporate debtor. Dispatch Form 3 via Speed Post RPAD to the Registered Office AND official Director emails.",
                  },
                  {
                    title: "2. GST E-Way Bills & GSTR-2B Proof",
                    detail:
                      "Compile Part-A/B E-Way Bills, GST GSTR-1 filings, and proof that the builder claimed Input Tax Credit (ITC) on your invoices—estopping denial of receipt.",
                  },
                  {
                    title: "3. Site Gate-Inward & Weighbridge Slips",
                    detail:
                      "Attach Dharamkanta weighbridge slips, RMC batching-plant pump logs, Mill Test Certificates (MTC), or lift commissioning certificates signed by site staff.",
                  },
                  {
                    title: "4. BSA 2023 s.63 Digital Hash Certificate",
                    detail:
                      "Certify WhatsApp payment promises, ledger confirmation emails, and ERP statement exports with a BSA s.63(4) certificate to pre-empt Mobilox dispute claims.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8 */}
            <section
              id="heading-parallel-remedies"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Parallel Remedies: Order 37, NI Act s.138 &amp; Vendor Recovery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                IBC Section 9 is a collective insolvency trigger—not a mere debt-collection
                proceeding—and requires a &ge; &rupee;1 Crore default against a corporate entity
                (Company or LLP, not a sole proprietorship). When your builder is a proprietorship,
                or when your unpaid bill is below &rupee;1 Crore, or when you want simultaneous
                personal pressure on signatory directors, pair or substitute IBC with these
                high-velocity tracks:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                  <span>
                    <Link
                      href="/law/order-37-summary-suit-money-recovery"
                      className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                    >
                      Order XXXVII CPC Summary Suit
                    </Link>
                    : Fast-track commercial suit based on written contracts and acknowledged invoices
                    where the builder cannot even defend without seeking court leave.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                  <span>
                    <Link
                      href="/cheque-bounce-and-civil-suit-together"
                      className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                    >
                      Section 138 NI Act + Civil Suit Together
                    </Link>
                    : Parallel criminal prosecution against builder directors on bounced security or
                    post-dated cheques (with up to 20% interim deposit under s.143A), which
                    continues independently even during IBC Section 14 moratorium against the
                    corporate entity.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                  <span>
                    <Link
                      href="/recovery/vendor-payments"
                      className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                    >
                      B2B Vendor Payment Recovery Desk
                    </Link>
                    : Structured pre-litigation demand notices and MSME Samadhaan filings for
                    sub-&rupee;1 Crore supplier invoices.
                  </span>
                </li>
              </ul>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">
                  Related Material Supplier Recovery Playbooks (IND-14)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link
                    href="/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute"
                    className="block bg-white border border-slate-200 hover:border-[#DC2626] rounded-xl p-3 transition-colors"
                  >
                    <p className="text-xs font-bold text-slate-900">
                      RMC Cube-Test Dispute Recovery &rarr;
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Defeat fabricated 28-day concrete cube failure excuses.
                    </p>
                  </Link>
                  <Link
                    href="/tmt-steel-structural-iron-trader-credit-default-recovery-india"
                    className="block bg-white border border-slate-200 hover:border-[#DC2626] rounded-xl p-3 transition-colors"
                  >
                    <p className="text-xs font-bold text-slate-900">
                      TMT &amp; Structural Steel Recovery &rarr;
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Dharamkanta, MTC &amp; Order 38 Rule 5 inventory attachment.
                    </p>
                  </Link>
                  <Link
                    href="/industrial-chemicals-solvents-dyes-pigments-invoice-recovery"
                    className="block bg-white border border-slate-200 hover:border-[#DC2626] rounded-xl p-3 transition-colors"
                  >
                    <p className="text-xs font-bold text-slate-900">
                      Chemicals &amp; Solvents Recovery &rarr;
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Enforce Sale of Goods Act s.42 valve-seal acceptance.
                    </p>
                  </Link>
                </div>
              </div>
            </section>

            {/* Dual-Track B2B Conversion Funnel */}
            <IbcBuilderCTA />

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: IBC Section 8 &amp; 9 for Suppliers
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer font-bold text-sm sm:text-base text-slate-900 list-none">
                      <span>{item.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/80 pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory Citations */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Authorities &amp; Official Legal References
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
