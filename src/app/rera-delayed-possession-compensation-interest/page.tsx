import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ReraDelayNoticeCTA from "./ReraDelayNoticeCTA";
import ReraDelayTableOfContents from "./ReraDelayTableOfContents";
import ReraDelayProblemTabs from "./ReraDelayProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "RERA Delayed Possession Compensation: Interest Rules",
  description:
    "Claim delay compensation under RERA Section 18 while keeping your flat. Interest rate formula (SBI MCLR + 2%), notice to builder and RERA filing.",
  alternates: {
    canonical: `${SITE_URL}/rera-delayed-possession-compensation-interest`,
  },
  openGraph: {
    title: "Builder Delayed Possession? How to Claim Monthly Delay Interest Under RERA",
    description:
      "Statutory guide to claiming monthly delay compensation under RERA Section 18(1) proviso while retaining flat ownership. Learn the SBI MCLR + 2% formula, Supreme Court precedents, notice formats, and execution rules.",
    url: `${SITE_URL}/rera-delayed-possession-compensation-interest`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Builder Delayed Possession? How to Claim Monthly Delay Interest Under RERA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Builder Delayed Possession? How to Claim Monthly Delay Interest Under RERA",
    description:
      "Statutory guide to claiming monthly delay compensation under RERA Section 18(1) proviso while retaining flat ownership. Learn the SBI MCLR + 2% formula, Supreme Court precedents, notice formats, and execution rules.",
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
    title: "Real Estate (Regulation and Development) Act, 2016 (Act No. 16 of 2016) — Section 18 (Return of Amount & Compensation), Section 19 (Rights of Allottees), Section 31 (Filing of Complaints), Section 40 (Enforcement & Recovery), & Section 89 (Overriding Effect)",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title: "Supreme Court of India Judgment in Newtech Promoters and Developers Pvt. Ltd. v. State of UP & Ors. (2021) SCC OnLine SC 1044 — Absolute and Unconditional Right to Delay Interest & Refund Under Section 18",
    url: "https://main.sci.gov.in/supremecourt/2021/3421/3421_2021_33_1501_31267_Judgement_11-Nov-2021.pdf",
  },
  {
    title: "Supreme Court of India Judgment in Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan (2019) 5 SCC 725 — One-Sided Builder Agreements Declared Unfair Trade Practice & Overridden by Statutory Rates",
    url: "https://main.sci.gov.in/supremecourt/2018/16723/16723_2018_Judgement_02-Apr-2019.pdf",
  },
  {
    title: "Supreme Court of India Judgment in Imperia Structures Ltd. v. Anil Patni & Anr. (2020) 10 SCC 783 — Concurrent Remedies Under RERA and Consumer Protection Act, 2019",
    url: "https://main.sci.gov.in/supremecourt/2019/5118/5118_2019_32_1501_24483_Judgement_02-Nov-2020.pdf",
  },
  {
    title: "Reserve Bank of India (RBI) Marginal Cost of Funds Based Lending Rate (MCLR) Historical Benchmarks & Master Directions on Real Estate Advances",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "State Real Estate Regulatory Authority Rules (MahaRERA Rule 18, UP RERA Rule 15, HRERA Rule 15, Karnataka RERA Rule 15) — Prescribed Rate of Interest as SBI Highest MCLR + 2%",
    url: "https://up-rera.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Digital Evidence Admissibility for Email Demands, WhatsApp Communications, and Electronic Receipts)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark Ruling on Unconditional Right to Delay Interest",
    parties: "Newtech Promoters and Developers Pvt. Ltd. v. State of UP & Ors.",
    citation: "Civil Appeal No. 6745-6749 of 2021, (2021) SCC OnLine SC 1044",
    date: "Judgment Dated 11 November 2021",
    facts:
      "The developer challenged statutory orders passed by the UP RERA Authority directing payment of monthly delay interest to allottees under Section 18. The promoter argued that since construction was in advanced stages and delayed due to external regulatory approvals and market fluctuations, allottees could not simultaneously retain the flat and demand interest or refund without establishing subjective fault.",
    holding:
      "A 2-Judge Bench of the Supreme Court held that the right of an allottee to claim refund or monthly delay interest under Section 18 is unqualified, absolute, and unconditional. If the promoter fails to deliver possession within the contractually stipulated timeline, the allottee has an unfettered legal option under Section 18(1) proviso to either withdraw from the project with full refund plus interest, or retain the flat and demand monthly interest for every month of delay until actual handover with a valid Occupancy Certificate.",
    amount: "Affirmation of Unconditional Monthly Interest at SBI MCLR + 1% / 2% Across All Allottees",
    takeaway:
      "Builders cannot cite ongoing construction, pending municipal clearances, or financial stress to evade monthly delay interest. If your possession date in the Builder-Buyer Agreement has elapsed, your statutory entitlement to monthly interest under Section 18(1) proviso is enforceable as a matter of right.",
  },
  {
    title: "Supreme Court Struck Down Nominal ₹5/sq.ft Delay Clauses as Unfair Trade Practice",
    parties: "Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan",
    citation: "Civil Appeal No. 1224 of 2019, (2019) 5 SCC 725",
    date: "Judgment Dated 02 April 2019",
    facts:
      "The buyer booked an apartment where the builder promised possession within 39 months. The Builder-Buyer Agreement contained a starkly unequal clause: if the buyer delayed an instalment, the builder levied 18% compound penal interest; however, if the builder delayed possession, the builder only owed ₹5 per square foot per month (amounting to under 1.5% annual return). The builder claimed the buyer was bound by this signed contract.",
    holding:
      "The Supreme Court ruled that a term of a contract will not be final and binding if it is shown that the flat purchaser had no equal bargaining power. One-sided, oppressive clauses drafted by builders constitute unfair trade practices under Section 2(1)(r) of the Consumer Protection Act and are void against public policy. The Supreme Court mandated that compensation for delay must be realistic, commercial, and equitable, upholding statutory interest standards.",
    amount: "Upheld Statutory Refund with 10.75% Interest Overriding Nominal ₹5/sq.ft Contractual Cap",
    takeaway:
      "Never accept a builder's claim that you are limited to nominal ₹5 or ₹10 per sq. ft. monthly penalties. Under Section 89 of RERA and Supreme Court precedent, statutory RERA interest (SBI MCLR + 2%) overrides one-sided contract clauses.",
  },
  {
    title: "Supreme Court Affirmed Concurrent Jurisdiction of RERA and Consumer Forums",
    parties: "Imperia Structures Ltd. v. Anil Patni & Anr.",
    citation: "Civil Appeal No. 3581-3590 of 2020, (2020) 10 SCC 783",
    date: "Judgment Dated 02 November 2020",
    facts:
      "Homebuyers who suffered project handover delays approached the National Consumer Disputes Redressal Commission (NCDRC). The developer contended that following the enactment of RERA 2016, consumer courts lost jurisdiction over real estate disputes and that buyers were strictly confined to RERA authorities.",
    holding:
      "The Supreme Court dismissed the developer's objections, clarifying that Section 79 of RERA only bars civil court jurisdiction, whereas the Consumer Protection Act provides an independent, concurrent remedy. Allottees are free to choose between RERA and Consumer Commissions, and can seek delay compensation, rent reimbursement, and mental agony damages under either forum without jurisdictional conflict.",
    amount: "Awarded Full Refund with 9% Annual Simple Interest + ₹50,000 Litigation Costs",
    takeaway:
      "Homebuyers enjoy forum flexibility. You can file a Section 18 claim before RERA to secure monthly delay interest while retaining your flat, or pursue e-Jagriti / NCDRC if you also seek substantial mental distress and deficiency damages.",
  },
  {
    title: "Principles of Compensatory Delay Interest for Financial & Rental Loss",
    parties: "DLF Homes Panchkula Pvt. Ltd. v. D.S. Dhanda & Ors.",
    citation: "Civil Appeal Nos. 4910-4941 of 2019, (2020) 16 SCC 318",
    date: "Judgment Dated 10 May 2019",
    facts:
      "In a mass delay dispute, the State Consumer Commission awarded delay interest at 12% per annum and additionally awarded lumpsum compensation of ₹1 Lakh each for mental harassment and ₹25,000 litigation expenses for each flat buyer. DLF appealed against the dual imposition of high commercial interest alongside separate lumpsum harassment awards.",
    holding:
      "The Supreme Court clarified that delay interest awarded under statutory guidelines is itself compensatory in character, intended to neutralize the allottee's financial loss, rental outflow, and lost capital utility during the delay period. While directing interest at a uniform 9% per annum from the promised date of possession until delivery of lawful possession with Occupancy Certificate, the court held that multiple overlapping compensation heads for the identical delay should be avoided.",
    amount: "Standardized 9% to 10.75% Per Annum Delay Interest from Agreed Date to Lawful OC",
    takeaway:
      "Statutory delay interest functions as full economic restitution for your double financial burden (paying home loan EMIs and residential rent concurrently). The interest runs continuously until the builder tenders a valid Occupancy Certificate.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "Claiming delay compensation under Section 18 requires you to cancel your flat booking and surrender your allotment.",
    fact: "Completely False. Section 18(1) contains an express proviso: where an allottee does not intend to withdraw from the project, the promoter must pay interest for every month of delay till the physical handover of possession with an Occupancy Certificate.",
    authority: "Section 18(1) Proviso, RERA Act 2016; Newtech Promoters (2021) SC",
  },
  {
    myth: "If your Builder-Buyer Agreement caps delay penalty at ₹5 per sq. ft. per month, you cannot legally claim SBI MCLR + 2%.",
    fact: "Legally Groundless. Under Section 89 of RERA, the statutory Act overrides any contrary private contract. The Supreme Court in Pioneer Urban (2019) struck down ₹5/sq.ft clauses as unconscionable and unfair trade practices.",
    authority: "Section 89 RERA 2016; Pioneer Urban (2019) 5 SCC 725",
  },
  {
    myth: "A builder offering 'Fit-Out Possession' or key handover without an Occupancy Certificate (OC) stops the delay interest clock.",
    fact: "Illegal. Under Sections 11(4)(b) and 19(10) of RERA, handing over possession without a municipal Occupancy Certificate is an offence. Delay interest accrues continuously until a valid OC is sanctioned.",
    authority: "Section 11(4)(b) & Section 19(10) RERA 2016; Samruddhi CHS (2022) SC",
  },
  {
    myth: "Builders can invoke NGT winter construction bans, labor strikes, and approval delays as 'Force Majeure' to escape liability.",
    fact: "Untrue. Section 6 of RERA strictly restricts Force Majeure to natural calamities (war, flood, drought, earthquake). Routine civic approval cycles, contractor disputes, and zoning delays are promoter business risks.",
    authority: "Section 6 RERA 2016; MahaRERA & UP RERA Appellate Decisions",
  },
  {
    myth: "RERA delay interest must be adjusted only at final registry and cannot be claimed as periodic monthly cash payouts.",
    fact: "Statutorily Mandated Periodic Relief. Section 18(1) proviso explicitly states 'interest for every month of delay'. RERA authorities routinely direct promoters to disburse accrued monthly interest directly to buyers' bank accounts.",
    authority: "Section 18(1) Proviso RERA 2016; Form M Adjudication Practice",
  },
  {
    myth: "If the builder ignores a RERA compensation order, the allottee has no enforcement mechanism except waiting indefinitely.",
    fact: "Powerful Enforcement via RC. Under Section 40(1) of RERA, unpaid compensation is recovered as arrears of land revenue through a Recovery Certificate (RC) executed by the District Collector by attaching builder bank accounts and project land.",
    authority: "Section 40(1) RERA 2016; Civil Review Petitions in High Courts",
  },
];

const FAQS = [
  {
    question: "What is the exact formula for RERA delayed possession compensation interest?",
    answer:
      "Under state RERA rules (such as MahaRERA Rule 18, UP RERA Rule 15, and HRERA Rule 15), the statutory rate of interest payable by the promoter for delayed possession is the State Bank of India (SBI) Highest Marginal Cost of Funds Based Lending Rate (MCLR) plus two percent (SBI MCLR + 2%). As of 2026, with SBI highest MCLR hovering between 8.85% and 9.10%, the statutory delay interest rate ranges between 10.85% and 11.10% per annum simple interest, computed on every rupee paid by the allottee from the promised contract possession date until actual physical handover with an Occupancy Certificate.",
  },
  {
    question: "Can I claim monthly delay compensation under RERA while keeping my flat?",
    answer:
      "Yes, absolutely. Under the proviso to Section 18(1) of the Real Estate (Regulation and Development) Act, 2016, an allottee who does not wish to withdraw from the project has an unconditional statutory right to be paid interest for every single month of delay until the promoter hands over lawful physical possession accompanied by a valid Occupancy Certificate (OC). You do not have to cancel your flat booking, forfeit capital appreciation, or surrender your property to claim this monthly relief.",
  },
  {
    question: "What should I do if the builder offers a nominal ₹5 or ₹10 per sq. ft. monthly delay penalty?",
    answer:
      "You should firmly reject the nominal contractual penalty in writing. Under Section 89 of RERA, the statutory provisions of the Act explicitly override any inconsistent clauses in private Builder-Buyer Agreements. Furthermore, the Supreme Court of India in Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan (2019) 5 SCC 725 ruled that one-sided agreements offering ₹5/sq.ft penalties while charging 18% for buyer defaults constitute unfair trade practices and are void against public policy. Issue a formal statutory advocate legal notice demanding recalibration to SBI MCLR + 2% per annum.",
  },
  {
    question: "Does the delay interest clock stop if the builder offers possession for fit-outs without an OC?",
    answer:
      "No. Offering possession for 'fit-outs', 'interior decoration', or 'provisional handover' without an Occupancy Certificate (OC) or Completion Certificate (CC) issued by the competent planning authority is illegal under Section 11(4)(b) and Section 19(10) of RERA. In Samruddhi Co-operative Housing Society (2022), the Supreme Court held that failure to obtain an OC is a continuing breach and deficiency of service. Delay interest continues to accrue each month until a genuine, lawful OC is granted and final possession is tendered.",
  },
  {
    question: "How do I file a RERA complaint for delayed possession monthly interest?",
    answer:
      "First, serve a 15-day statutory advocate demand notice to the promoter and registered directors via Registered Speed Post and email. If the builder fails to disburse accrued interest or adjust the demand, file an online complaint under Section 31 of RERA on your state's official RERA portal (such as UP RERA, MahaRERA, HRERA, or Karnataka RERA) using Form M (or state equivalent). Attach your Allotment Letter, Builder-Buyer Agreement with promised possession date, all bank payment receipts, and the copy of the legal notice. Pay the state filing fee (typically ₹1,000 to ₹5,000) to initiate formal adjudication.",
  },
  {
    question: "What happens if the builder refuses to pay the RERA delay interest order?",
    answer:
      "If the developer fails to deposit the ordered delay compensation within 30 to 45 days of the RERA judgment, you can file an execution application under Section 40(1) of RERA. The RERA Authority will issue a Recovery Certificate (RC) directed to the District Magistrate / District Collector of the district where the project or corporate office is situated. The Collector is legally empowered to recover the amount as arrears of land revenue by attaching the promoter's active escrow bank accounts, auctioning unsold project inventory, or initiating revenue attachment.",
  },
  {
    question: "Builder delay possession compensation ka legal notice kaise bheje aur kitna samay lagta hai?",
    answer:
      "Agar builder ne promised date par flat handover nahi kiya, toh aap Section 18(1) proviso RERA aur Supreme Court ke Newtech Promoters ruling ke tehat 15-din ka statutory demand notice bhej sakte hain. LegalRecovery.in par verified property advocates aapka complete agreement, payment receipts aur possession clause examine karke promoter aur uske directors ko Registered Speed Post aur digital email ke zariye notice dispatch karte hain. Most developers notice milne par conciliation ya final demand balance mein delay interest adjust karne par sehmat ho jate hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Builder Delayed Possession? Claim Monthly Compensation Under RERA",
  description:
    "Claim delay compensation under RERA Section 18 while keeping your flat. Interest rate formula (SBI MCLR + 2%), notice to builder and RERA filing.",
  datePublished: "2026-11-09T12:00:00+05:30",
  dateModified: "2026-11-09T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/rera-delayed-possession-compensation-interest`,
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
    name: "RERA Delayed Possession Compensation and Section 18 Interest",
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
      name: "Property & Builder Disputes",
      item: `${SITE_URL}/services/property-and-builder-disputes`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "RERA Delay Compensation (s.18)",
      item: `${SITE_URL}/rera-delayed-possession-compensation-interest`,
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

export default function ReraDelayedPossessionCompensationPage() {
  const breadcrumbItems = [
    { label: "Property & Builder Disputes", href: "/services/property-and-builder-disputes" },
    { label: "RERA Delay Compensation (s.18)", href: "/rera-delayed-possession-compensation-interest" },
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
        {/* Hero Section matching strict site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 18(1) Proviso RERA 2016</span>
              <span className="text-amber-500">•</span>
              <span>Retain Flat &amp; Enforce Monthly SBI MCLR+2% Compensation</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Builder Delayed Possession? Claim Monthly Compensation Under RERA
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-amber-400 mb-1">
                Statutory Summary (Section 18 RERA Delay Compensation Rule)
              </p>
              <p>
                Under Section 18(1) proviso of the Real Estate (Regulation and Development) Act, 2016, homebuyers facing possession delays have an absolute right to claim monthly interest compensation at SBI Highest MCLR + 2% per annum without canceling flat ownership. The Supreme Court in <em>Newtech Promoters</em> affirmed that this right is unconditional, legally superseding unfair contractual clauses capping penalties at ₹5/sq.ft.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">MCLR + 2%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Annual Interest</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Keep Flat</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Section 18(1) Proviso Right</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Overridden</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">₹5/sq.ft BBA Penalties Struck Down</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Sec 40 RC</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Recovery as Land Revenue Arrears</p>
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
            <ReraDelayTableOfContents />

            {/* Main Content Body */}
            <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* SECTION 1: ARCHETYPE G4 HERO COMPARISON MATRIX */}
              <section id="heading-matrix" className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                    Archetype G4 • Core Decision Matrix
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-2">
                    Delayed Possession Legal Routes: Comparison Matrix
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Evaluate the 4 statutory legal avenues available to homebuyers when a builder breaches the contractually committed possession deadline.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <caption className="sr-only">
                      Comparison Matrix of Legal Remedies for Builder Delayed Possession in India
                    </caption>
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800 text-[11px] sm:text-xs uppercase tracking-wider">
                        <th scope="col" className="p-3 sm:p-4 font-bold">Legal Route / Remedy</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Statutory Forum</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Flat Ownership Status</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Financial Compensation Rate</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Typical Adjudication Timeline</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Best Suited When</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-amber-50/40 bg-amber-50/20 font-medium">
                        <th scope="row" className="p-3 sm:p-4 text-slate-900 font-bold">
                          1. Monthly Delay Interest (Sec 18(1) Proviso)
                        </th>
                        <td className="p-3 sm:p-4">State RERA Authority (Form M under Section 31)</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">Retain Flat &amp; Allotment</td>
                        <td className="p-3 sm:p-4 font-bold text-amber-900">
                          SBI MCLR + 2% per annum (~10.85%–11.10% monthly payout)
                        </td>
                        <td className="p-3 sm:p-4">60 to 120 Days</td>
                        <td className="p-3 sm:p-4">
                          Project is 70%+ complete, property appreciated, buyer wants to move in but needs rent/EMI relief.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 text-slate-900 font-bold">
                          2. Complete Exit &amp; Refund (Sec 18(1) Main)
                        </th>
                        <td className="p-3 sm:p-4">State RERA Authority &amp; Adjudicating Officer</td>
                        <td className="p-3 sm:p-4 text-red-700 font-bold">Exit &amp; Cancel Allotment</td>
                        <td className="p-3 sm:p-4">
                          100% Principal Refund + SBI MCLR + 2% interest + Section 71 compensation
                        </td>
                        <td className="p-3 sm:p-4">90 to 180 Days</td>
                        <td className="p-3 sm:p-4">
                          Project abandoned, structural faults, builder insolvent, buyer no longer wants the unit.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 text-slate-900 font-bold">
                          3. Consumer Commission (CPA 2019)
                        </th>
                        <td className="p-3 sm:p-4">District / State / National Commission (NCDRC)</td>
                        <td className="p-3 sm:p-4">Choice of Refund OR Possession</td>
                        <td className="p-3 sm:p-4">
                          9%–12% Simple Interest + ₹50,000–₹2 Lakhs Mental Agony &amp; Litigation Award
                        </td>
                        <td className="p-3 sm:p-4">12 to 24 Months</td>
                        <td className="p-3 sm:p-4">
                          Seeking heavy mental distress damages, gross unfair trade practices, or deficiency beyond RERA remit.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 text-slate-900 font-bold">
                          4. NCLT Corporate Insolvency (IBC Sec 7)
                        </th>
                        <td className="p-3 sm:p-4">National Company Law Tribunal (NCLT)</td>
                        <td className="p-3 sm:p-4 text-slate-500 font-semibold">Subordinated to Resolution Plan</td>
                        <td className="p-3 sm:p-4">
                          Pro-rata recovery as Financial Creditor (haircut risk)
                        </td>
                        <td className="p-3 sm:p-4">24 to 36+ Months</td>
                        <td className="p-3 sm:p-4">
                          Requires joint petition of 100 allottees or 10% of total units; extreme measure when promoter vanished.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-100 rounded-xl p-3.5 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span>
                    Need to calculate your exact monthly interest entitlement? Use our{" "}
                    <Link
                      href="/tools/rera-refund-interest-calculator"
                      className="font-bold text-amber-700 hover:text-amber-800 underline underline-offset-2"
                    >
                      RERA Refund &amp; Delay Interest Calculator (SBI MCLR + 2%)
                    </Link>
                    .
                  </span>
                </div>
              </section>

              {/* SECTION 2: PERSONA SECTION (ARCHETYPE G4 MANDATE) */}
              <section id="heading-personas" className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Which Legal Route Fits Your Current Situation?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Select your legal remedy based on project progress, financial exposure, and whether you still desire physical homeownership.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="bg-white rounded-2xl border-2 border-amber-300 p-5 shadow-sm space-y-3 relative">
                    <span className="absolute -top-3 left-4 bg-amber-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wide">
                      Recommended for Most Buyers
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-1">
                      Persona 1: The End-User Retaining Flat
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      You purchased this flat as a primary residence. The structural shell is standing and the project is 75% to 90% built, but finishing works, electricity substations, and the municipal Occupancy Certificate (OC) are dragging on 12 to 36 months past deadline. You are bleeding money paying both monthly home loan EMIs and apartment rent.
                    </p>
                    <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-amber-800">
                      <strong>Your Remedy:</strong> Invoke Section 18(1) proviso via RERA Form M. Do not cancel the allotment. Demand ongoing monthly delay interest at SBI MCLR + 2% paid into your bank account until legal OC handover.
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Persona 2: The Disillusioned Capital Recoverer
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Construction ground to a halt years ago. The developer has multiple criminal FIRs, site machinery has been removed, and the promoter is siphoning escrow funds. You have lost all trust in the developer and refuse to pour more hard-earned money or wait another decade for an unlivable shell.
                    </p>
                    <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-red-700">
                      <strong>Your Remedy:</strong> File for complete exit under Section 18(1) main clause. Claim 100% refund of all deposited instalments plus SBI MCLR + 2% interest from each payment date, followed by a{" "}
                      <Link
                        href="/rera-refund-order-not-paid-recovery-certificate"
                        className="underline font-bold"
                      >
                        Section 40 Recovery Certificate
                      </Link>
                      .
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Persona 3: The Subvention Scheme Victim
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      You opted for a 10:80:10 bank subvention scheme where the developer promised to service Pre-EMIs until possession. Due to construction delays, the builder stopped servicing EMIs. The lending bank is now automatically debiting your account, threatening SARFAESI recovery, and trashing your CIBIL credit score.
                    </p>
                    <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-indigo-700">
                      <strong>Your Remedy:</strong> Issue a joint statutory legal notice to builder and bank under RBI upfront disbursal guidelines, and file an urgent RERA Section 36 injunction. See our{" "}
                      <Link
                        href="/subvention-scheme-pre-emi-builder-default"
                        className="underline font-bold"
                      >
                        Subvention Default Guide
                      </Link>
                      .
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 3: SECTION 18 RULES & LEGAL FOUNDATION */}
              <section id="heading-sec18-rules" className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    RERA Section 18(1): Claiming Monthly Delay Interest
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    The Real Estate (Regulation and Development) Act, 2016 introduced an indispensable distinction between allottees who wish to walk away from a failed project and those who desire to preserve their real estate allocation. Section 18(1) contains two clear branches:
                  </p>

                  <div className="bg-slate-50 border-l-4 border-slate-900 p-4 rounded-r-xl font-mono text-xs sm:text-sm text-slate-800 space-y-2">
                    <p className="font-bold text-slate-900">
                      Statutory Text of Section 18(1) Proviso, RERA 2016:
                    </p>
                    <p className="italic">
                      &quot;Provided that where an allottee does not intend to withdraw from the project, he shall be paid, by the promoter, interest for every month of delay, till the handing over of the possession, at such rate as may be prescribed.&quot;
                    </p>
                  </div>

                  <p>
                    This proviso eliminates the historical trap where buyers were compelled to choose between terminating their contract (often forfeiting capital appreciation in a prime city location) or meekly accepting years of uncompensated delay. Under Section 18(1) proviso:
                  </p>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>You do not lose your flat:</strong> Your allotment, unit number, parking allocation, and registered agreement for sale remain 100% intact and legally enforceable.
                    </li>
                    <li>
                      <strong>The compensation is recurring:</strong> Unlike a one-time settlement, the builder must pay you interest for <em>every calendar month</em> of delay until lawful possession is delivered.
                    </li>
                    <li>
                      <strong>Possession means with Occupancy Certificate:</strong> Handing over keys for provisional fit-outs or structural visits without a municipal OC does not legally stop the delay interest clock.
                    </li>
                    <li>
                      <strong>Direct cash credit vs. Final demand adjustment:</strong> While builders prefer adjusting accrued interest at final registry, Section 18 empowers RERA benches to order direct electronic fund transfers to allottees experiencing concurrent rental outflows.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 4: INLINE SVG PROCESS DIAGRAM (PAGE-SPECIFIC ARTEFACT #1) */}
              <section id="heading-resolution-rail" className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                    Process Flowchart • Hand-Authored Diagram
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                    RERA Section 18 Monthly Delay Interest Escalation Rail
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    The 5-stage legal roadmap from default detection to monthly bank recovery and collector execution.
                  </p>
                </div>

                {/* Hand-authored SVG Process Diagram */}
                <div className="w-full bg-slate-900 rounded-2xl p-4 sm:p-6 text-white border border-slate-800 shadow-xl overflow-x-auto">
                  <svg
                    viewBox="0 0 900 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="RERA Delay Compensation Escalation Flowchart"
                  >
                    {/* Stage 1 */}
                    <rect x="20" y="30" width="150" height="150" rx="16" fill="#1F2937" stroke="#F59E0B" strokeWidth="2" />
                    <circle cx="95" cy="55" r="14" fill="#F59E0B" />
                    <text x="95" y="60" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">1</text>
                    <text x="95" y="90" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="bold">Possession Breach</text>
                    <text x="95" y="110" textAnchor="middle" fill="#9CA3AF" fontSize="9">Promised BBA Date Elapses</text>
                    <text x="95" y="125" textAnchor="middle" fill="#9CA3AF" fontSize="9">Grace Period Expired</text>
                    <text x="95" y="145" textAnchor="middle" fill="#FCD34D" fontSize="9" fontWeight="bold">Sec 18 Triggered</text>

                    {/* Arrow 1 to 2 */}
                    <path d="M175 105 H 195" stroke="#F59E0B" strokeWidth="3" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="200" y="30" width="150" height="150" rx="16" fill="#1F2937" stroke="#F59E0B" strokeWidth="2" />
                    <circle cx="275" cy="55" r="14" fill="#F59E0B" />
                    <text x="275" y="60" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">2</text>
                    <text x="275" y="90" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="bold">15-Day Legal Notice</text>
                    <text x="275" y="110" textAnchor="middle" fill="#9CA3AF" fontSize="9">Speed Post + Email Servicing</text>
                    <text x="275" y="125" textAnchor="middle" fill="#9CA3AF" fontSize="9">Invoke Pioneer &amp; Newtech</text>
                    <text x="275" y="145" textAnchor="middle" fill="#FCD34D" fontSize="9" fontWeight="bold">Demand SBI MCLR+2%</text>

                    {/* Arrow 2 to 3 */}
                    <path d="M355 105 H 375" stroke="#F59E0B" strokeWidth="3" />

                    {/* Stage 3 */}
                    <rect x="380" y="30" width="150" height="150" rx="16" fill="#1F2937" stroke="#F59E0B" strokeWidth="2" />
                    <circle cx="455" cy="55" r="14" fill="#F59E0B" />
                    <text x="455" y="60" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">3</text>
                    <text x="455" y="90" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="bold">RERA Form M Filing</text>
                    <text x="455" y="110" textAnchor="middle" fill="#9CA3AF" fontSize="9">Section 31 Complaint</text>
                    <text x="455" y="125" textAnchor="middle" fill="#9CA3AF" fontSize="9">Retain Flat + Demand Payout</text>
                    <text x="455" y="145" textAnchor="middle" fill="#FCD34D" fontSize="9" fontWeight="bold">State Online Portal</text>

                    {/* Arrow 3 to 4 */}
                    <path d="M535 105 H 555" stroke="#F59E0B" strokeWidth="3" />

                    {/* Stage 4 */}
                    <rect x="560" y="30" width="150" height="150" rx="16" fill="#1F2937" stroke="#10B981" strokeWidth="2" />
                    <circle cx="635" cy="55" r="14" fill="#10B981" />
                    <text x="635" y="60" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">4</text>
                    <text x="635" y="90" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="bold">Statutory Order</text>
                    <text x="635" y="110" textAnchor="middle" fill="#9CA3AF" fontSize="9">Monthly Interest Mandate</text>
                    <text x="635" y="125" textAnchor="middle" fill="#9CA3AF" fontSize="9">OC Handover Deadline</text>
                    <text x="635" y="145" textAnchor="middle" fill="#34D399" fontSize="9" fontWeight="bold">Enforceable Judgment</text>

                    {/* Arrow 4 to 5 */}
                    <path d="M715 105 H 735" stroke="#10B981" strokeWidth="3" />

                    {/* Stage 5 */}
                    <rect x="740" y="30" width="140" height="150" rx="16" fill="#1F2937" stroke="#EF4444" strokeWidth="2" />
                    <circle cx="810" cy="55" r="14" fill="#EF4444" />
                    <text x="810" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">5</text>
                    <text x="810" y="90" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="bold">Sec 40 Execution</text>
                    <text x="810" y="110" textAnchor="middle" fill="#9CA3AF" fontSize="9">Recovery Certificate (RC)</text>
                    <text x="810" y="125" textAnchor="middle" fill="#9CA3AF" fontSize="9">District Collector Attachment</text>
                    <text x="810" y="145" textAnchor="middle" fill="#F87171" fontSize="9" fontWeight="bold">Arrears of Land Rev</text>

                    {/* Defs for arrow marker */}
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#F59E0B" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </section>

              {/* SECTION 5: THE SBI MCLR + 2% FORMULA EXPLAINED & FACTS TABLE */}
              <section id="heading-interest-calc" className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                    Statutory Formula &amp; State Rules
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                    How RERA Delay Compensation is Calculated: SBI MCLR + 2%
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    State RERA rules establish a standardized, transparent benchmark to calculate delay compensation across all registered projects.
                  </p>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-3">
                  <p>
                    Historically, builders drafted unilateral contracts providing themselves with zero-interest loans funded by buyer life savings. To eliminate this inequality, RERA introduced a statutory symmetry rule: <strong>the rate of interest charged by the promoter for delayed buyer payments must be identical to the rate of interest paid by the promoter for delayed possession</strong>.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 text-slate-800 space-y-2">
                    <p className="text-xs uppercase tracking-wider font-extrabold text-amber-900">
                      The Statutory Compensation Formula:
                    </p>
                    <div className="font-mono text-sm sm:text-base bg-white p-3 rounded-lg border border-amber-300 font-bold text-slate-900">
                      Monthly Delay Compensation = (Total Amount Paid × Statutory Annual Interest Rate) ÷ 12
                    </div>
                    <p className="text-xs text-slate-600">
                      Where <em>Statutory Annual Interest Rate</em> = State Bank of India (SBI) Highest Marginal Cost of Funds Based Lending Rate (1-Year or 3-Year MCLR) + 2.00% per annum.
                    </p>
                  </div>
                </div>

                {/* State-Wise RERA Compensation Benchmarks Table (Artefact #2) */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mt-4">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <caption className="p-3 text-left font-bold text-xs bg-slate-100 text-slate-800 border-b border-slate-200">
                      State RERA Prescribed Interest Benchmarks &amp; Governing Rules (2026)
                    </caption>
                    <thead>
                      <tr className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                        <th scope="col" className="p-3 sm:p-4 font-bold">State RERA Authority</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Statutory Rule</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Prescribed Interest Benchmark</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Effective Annual Rate</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">Filing Form &amp; Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">Maharashtra (MahaRERA)</th>
                        <td className="p-3 sm:p-4">MahaRERA Rules, 2017, Rule 18</td>
                        <td className="p-3 sm:p-4">SBI Highest MCLR + 2%</td>
                        <td className="p-3 sm:p-4 font-bold text-amber-900">~10.85% to 11.10%</td>
                        <td className="p-3 sm:p-4">Form B Online (₹5,000)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">Uttar Pradesh (UP RERA)</th>
                        <td className="p-3 sm:p-4">UP RERA Rules, 2016, Rule 15</td>
                        <td className="p-3 sm:p-4">SBI Highest MCLR + 1% / 2%</td>
                        <td className="p-3 sm:p-4 font-bold text-amber-900">~9.85% to 10.85%</td>
                        <td className="p-3 sm:p-4">Form M Online (₹1,000)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">Haryana (HRERA Gurugram/Panchkula)</th>
                        <td className="p-3 sm:p-4">HRERA Rules, 2017, Rule 15</td>
                        <td className="p-3 sm:p-4">SBI Highest MCLR + 2%</td>
                        <td className="p-3 sm:p-4 font-bold text-amber-900">~10.85% to 11.10%</td>
                        <td className="p-3 sm:p-4">Form CRA Online (₹1,000)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">Karnataka (K-RERA)</th>
                        <td className="p-3 sm:p-4">Karnataka RERA Rules, 2017, Rule 15</td>
                        <td className="p-3 sm:p-4">SBI Highest MCLR + 2%</td>
                        <td className="p-3 sm:p-4 font-bold text-amber-900">~10.85% to 11.10%</td>
                        <td className="p-3 sm:p-4">Form N / Form M (₹1,000)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">Delhi (Delhi RERA)</th>
                        <td className="p-3 sm:p-4">Delhi RERA Rules, 2016, Rule 16</td>
                        <td className="p-3 sm:p-4">SBI Highest MCLR + 2%</td>
                        <td className="p-3 sm:p-4 font-bold text-amber-900">~10.85% to 11.10%</td>
                        <td className="p-3 sm:p-4">Online Complaint (₹1,000)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-slate-600">
                    For detailed state filing instructions, documentation guidelines, and fee structures, read our in-depth{" "}
                    <Link
                      href="/rera-complaint-online-state-wise"
                      className="font-bold text-amber-700 hover:text-amber-800 underline underline-offset-2"
                    >
                      RERA Complaint Online: State-Wise Process &amp; Format Guide
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* SECTION 6: WORKED CALCULATION EXAMPLE (PAGE-SPECIFIC ARTEFACT #3) */}
              <section id="heading-worked-example" className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                    Worked Calculation Example
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                    Worked Example: ₹75 Lakh Apartment with a 24-Month Handover Delay
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    See the exact mathematical contrast between what builders offer under private agreements vs. your statutory RERA Section 18 entitlement.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl text-xs sm:text-sm border border-slate-200">
                    <div>
                      <span className="text-slate-500 block">Allotment Price:</span>
                      <strong className="text-slate-900 text-base">₹85,00,000</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Total Principal Paid:</span>
                      <strong className="text-slate-900 text-base">₹75,00,000 (Super Area 1,500 sq.ft)</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Period of Delay:</span>
                      <strong className="text-amber-700 text-base">24 Months (2 Full Years)</strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* What the builder offers */}
                    <div className="bg-red-50/60 border border-red-200 rounded-xl p-4 text-xs sm:text-sm space-y-2">
                      <p className="font-bold text-red-900 uppercase tracking-wider text-[11px]">
                        Scenario A: Builder&apos;s Contractual Offer (₹5/sq.ft/mo)
                      </p>
                      <p className="text-slate-700">
                        Monthly Compensation: 1,500 sq. ft. × ₹5 = <strong>₹7,500 / month</strong>
                      </p>
                      <p className="text-slate-700">
                        Total 24 Months Payout: ₹7,500 × 24 = <strong>₹1,80,000</strong>
                      </p>
                      <p className="text-xs text-red-700 font-semibold pt-1 border-t border-red-200">
                        Effective Interest Yield: Barely 1.2% per annum. Fails to cover even 2 months of your rent or loan EMI.
                      </p>
                    </div>

                    {/* What RERA Section 18 grants */}
                    <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm space-y-2">
                      <p className="font-bold text-emerald-900 uppercase tracking-wider text-[11px]">
                        Scenario B: Statutory RERA Sec 18 (SBI MCLR 8.85% + 2% = 10.85%)
                      </p>
                      <p className="text-slate-700">
                        Annual Interest on ₹75 Lakh: ₹75,00,000 × 10.85% = <strong>₹8,13,750 / year</strong>
                      </p>
                      <p className="text-slate-700">
                        Monthly Compensation: ₹8,13,750 ÷ 12 = <strong>₹67,812.50 / month</strong>
                      </p>
                      <p className="text-slate-700 font-bold text-emerald-900">
                        Total 24 Months Recovery: ₹67,812.50 × 24 = <strong>₹16,27,500</strong>
                      </p>
                      <p className="text-xs text-emerald-800 font-semibold pt-1 border-t border-emerald-200">
                        Net Additional Recovery: ₹14,47,500 in statutory interest recovered while retaining complete ownership of your apartment!
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 7: INTERACTIVE SCENARIO & PROBLEM TABS */}
              <section id="heading-scenarios" className="space-y-4">
                <ReraDelayProblemTabs />
              </section>

              {/* SECTION 8: SUPREME COURT CASE DIGEST (PAGE-SPECIFIC ARTEFACT #4) */}
              <section id="heading-sc-precedents" className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                    Verified Case Law Digest
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                    Landmark Supreme Court Judgments on Builder Possession Delays
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every advocate legal notice and RERA Section 18 petition must cite these authoritative Supreme Court precedents to overcome builder delay defenses.
                  </p>
                </div>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((c, i) => (
                    <article
                      key={i}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-slate-100 pb-2.5">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">{c.title}</h3>
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md self-start sm:self-auto">
                          {c.date}
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm text-slate-500 font-medium">
                        <strong>Parties:</strong> {c.parties} • <strong>Citation:</strong> {c.citation}
                      </div>

                      <div className="text-xs sm:text-sm text-slate-700 space-y-2">
                        <p>
                          <strong>The Dispute &amp; Facts:</strong> {c.facts}
                        </p>
                        <p>
                          <strong>Supreme Court Ruling:</strong> {c.holding}
                        </p>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                            Core Legal Takeaway
                          </span>
                          <span className="text-slate-800 font-medium">{c.takeaway}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* SECTION 9: MYTH VS FACT BREAKDOWN */}
              <section id="heading-myth-vs-fact" className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Real Estate Possession Delay: Myth vs. Statutory Fact
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Do not let customer relationship managers mislead you with false legal claims regarding your RERA rights.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-2.5"
                    >
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-red-700 font-bold">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 text-xs">
                          ✕
                        </span>
                        <span>MYTH: {item.myth}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-emerald-800 font-medium bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold">
                          ✓
                        </span>
                        <div>
                          <p>
                            <strong>STATUTORY FACT:</strong> {item.fact}
                          </p>
                          <p className="text-[11px] text-emerald-700 mt-1 font-semibold">
                            Authority: {item.authority}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 10: EVIDENCE CHECKLIST (PAGE-SPECIFIC ARTEFACT #5) */}
              <section id="heading-evidence" className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                    Evidence Preparation Checklist
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                    7 Indispensable Documents for Your RERA Section 18 Claim
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Assemble these records before drafting your statutory demand notice or filing your online state RERA petition.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                  <ol className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        1
                      </span>
                      <div>
                        <strong>Allotment Letter &amp; Registered Agreement for Sale (BBA):</strong>
                        <p className="text-slate-600 text-xs mt-0.5">
                          Pinpoint the specific clause defining the committed possession date (including any permissible grace period, e.g., 36 months + 6 months grace).
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        2
                      </span>
                      <div>
                        <strong>Chronological Bank Payment Receipts &amp; Ledger:</strong>
                        <p className="text-slate-600 text-xs mt-0.5">
                          Bank account statements, NEFT/RTGS transaction UTR numbers, and builder-issued stamped money receipts proving total capital deposited.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        3
                      </span>
                      <div>
                        <strong>Home Loan Sanction &amp; Disbursal Schedule:</strong>
                        <p className="text-slate-600 text-xs mt-0.5">
                          If financed through a bank or housing finance corporation (HFC), include the loan agreement and tripartite agreement reflecting construction-linked disbursals.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        4
                      </span>
                      <div>
                        <strong>RERA Project Registration Certificate &amp; Quarterly Progress Reports (QPR):</strong>
                        <p className="text-slate-600 text-xs mt-0.5">
                          Download the promoter&apos;s statutory project disclosures from your state RERA portal proving the completion deadline registered with the Authority.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        5
                      </span>
                      <div>
                        <strong>Written Demand &amp; Delay Communications:</strong>
                        <p className="text-slate-600 text-xs mt-0.5">
                          Copies of your email reminders to builder customer care, written delay notices, and builder reply letters offering excuses or postponement.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        6
                      </span>
                      <div>
                        <strong>Rental Agreements &amp; Rent Receipts (For Concurrent Damages):</strong>
                        <p className="text-slate-600 text-xs mt-0.5">
                          Rent agreements and monthly bank transfer proofs demonstrating that you are forced to pay rent due to the promoter&apos;s failure to deliver the flat.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        7
                      </span>
                      <div>
                        <strong>Advocate Statutory Demand Notice &amp; Postal Speed Post Receipts:</strong>
                        <p className="text-slate-600 text-xs mt-0.5">
                          The 15-day formal advocate legal notice served on the promoter and corporate registered office, complete with India Post tracking delivery confirmation.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>

              {/* PRIMARY CALL TO ACTION COMPONENT */}
              <section className="pt-2">
                <ReraDelayNoticeCTA />
              </section>

              {/* SECTION 11: FREQUENTLY ASKED QUESTIONS */}
              <section id="heading-faqs" className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Frequently Asked Questions: RERA Delayed Possession Compensation
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Actionable answers to common legal queries surrounding Section 18 delay interest, builder penalties, and RERA execution.
                  </p>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white rounded-xl border border-slate-200 p-4 transition-all duration-200 open:shadow-md"
                    >
                      <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0 text-xs">
                          ▼
                        </span>
                      </summary>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 12: STATUTORY REFERENCES & PRIMARY SOURCES */}
              <section id="heading-sources" className="space-y-3">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                    Sources &amp; Statutory Legal References
                  </h3>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
                  <p className="text-xs text-slate-600">
                    This guide has been prepared in accordance with primary statutes, Reserve Bank of India lending directions, and Supreme Court of India precedents. All legal citations are cross-verifiable on official government portals:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-amber-800 hover:underline break-words"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                    Last verified and updated on 09 November 2026. For specific legal advice regarding project insolvency, SARFAESI proceedings, or multi-crore builder litigation, consult a licensed High Court advocate.
                  </p>
                </div>
              </section>

              {/* Related Recovery Guides Cluster */}
              <div className="pt-6">
                <RelatedRecoveryGuides />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
