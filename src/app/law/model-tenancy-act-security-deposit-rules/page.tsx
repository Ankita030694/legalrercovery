import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ModelTenancyNoticeCTA from "./ModelTenancyNoticeCTA";
import ModelTenancyTableOfContents from "./ModelTenancyTableOfContents";
import ModelTenancyScenarioTabs from "./ModelTenancyScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Model Tenancy Act: Security Deposit Cap & State Status",
  description:
    "The Model Tenancy Act caps residential deposits at two months' rent. See which states adopted it and what applies elsewhere.",
  alternates: {
    canonical: `${SITE_URL}/law/model-tenancy-act-security-deposit-rules`,
  },
  openGraph: {
    title: "Model Tenancy Act 2021 Security Deposit Cap (2 Months' Rent) & State Adoption Table",
    description:
      "Complete legal analysis of Section 11 of the Model Tenancy Act 2021: 2-month residential deposit cap, same-day refund on key handover, Second Schedule wear-and-tear rules, and state-wise adoption status.",
    url: `${SITE_URL}/law/model-tenancy-act-security-deposit-rules`,
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
    title:
      "The Model Tenancy Act, 2021 — Ministry of Housing and Urban Affairs (MoHUA), Government of India (Approved by Union Cabinet on 2 June 2021; Section 11 Security Deposit Cap & Second Schedule)",
    url: "https://mohua.gov.in/upload/uploadfiles/files/Model-Tenancy-Act-English-02_06_2021.pdf",
  },
  {
    title:
      "The Uttar Pradesh Regulation of Urban Premises Tenancy Act, 2021 (UP Act No. 28 of 2021) — Section 11 (2-Month Residential & 6-Month Non-Residential Deposit Cap) & Section 30 (Rent Authority)",
    url: "https://www.indiacode.nic.in/handle/123456789/19152",
  },
  {
    title:
      "Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017 (TNRRRLT Act, as amended) — Tamil Nadu Housing and Urban Development Department Portal",
    url: "https://www.tenancy.tn.gov.in/",
  },
  {
    title:
      "The Transfer of Property Act, 1882 (Act No. 4 of 1882) — Section 105 (Lease Defined) & Section 108 (Rights and Liabilities of Lessor and Lessee in Non-MTA States)",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 73 (Compensation for Breach) & Section 74 (No Arbitrary Forfeiture Without Proving Actual Loss)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Code of Civil Procedure, 1908 — Order XXXVII (Summary Procedure for Recovering Liquidated Security Deposits Under Written Lease / Leave and Licence Agreements)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of WhatsApp Move-Out Videos, Key Handover Chats, & Bank Transfer Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const CASE_CITATIONS = [
  {
    title: "Landlord Cannot Withhold Security Deposit Over Unliquidated or Unproven Damage Claims",
    parties: "Uberoisons (Machines) Ltd. v. Samtel Color Ltd.",
    citation: "2003 (69) DRJ 523 : (2003) 105 DLT 383, High Court of Delhi",
    date: "Judgment Dated 28 May 2003",
    facts:
      "Upon termination of a lease and handover of vacant possession, the landlord refused to refund the interest-free security deposit, alleging that the tenant had caused damage to the premises and owed unquantified repair charges. No joint inspection quantification or adjudicated counterclaim existed at the time of vacation.",
    holding:
      "The Delhi High Court ruled that an interest-free security deposit is held by the landlord in trust to ensure performance of the lease. Once the tenant hands over vacant physical possession, the landlord's right to retain the deposit ends immediately. A landlord cannot unilaterally confiscate or retain a liquidated security deposit merely by raising an unliquidated, unproven allegation of property damage; any claim for damages must be independently proved by the landlord in court.",
    amount: "100% Refund of Security Deposit + Pendente Lite & Future Interest Ordered",
    takeaway:
      "Your landlord cannot hold your ₹50,000 or ₹2,00,000 deposit hostage while vaguely claiming 'repairs are being estimated'. Once keys are handed over, withholding the deposit without mutually signed deductions is unlawful across India.",
  },
  {
    title: "Wrongful Retention of Security Deposit After Key Handover Triggers 18% Commercial Interest",
    parties: "H.S. Bedi v. National Highway Authority of India (NHAI)",
    citation: "2015 SCC OnLine Del 9524 : (2015) 220 DLT 179, High Court of Delhi",
    date: "Judgment Dated 14 May 2015",
    facts:
      "In a landmark adjudication reviewing landlord-tenant obligations across urban leases, the Court examined the exact point at which the obligation to refund the security deposit crystallises, the effect of a tenant offering vacant possession, and the consequences of a landlord refusing to accept keys or delaying refund.",
    holding:
      "The High Court laid down comprehensive principles governing rental deposits: (1) The landlord is bound to refund the security deposit simultaneously with the handover of vacant possession; (2) If the tenant offers vacant possession in writing and the landlord evades taking keys, the tenant is no longer liable for future rent and the landlord becomes liable to pay interest on the withheld security deposit; and (3) Routine wear and tear from normal occupation cannot be deducted from the deposit.",
    amount: "Full Deposit Refund From Date of Tendered Possession + Interest @ 18% Per Annum",
    takeaway:
      "If your landlord refuses to show up for key handover or ignores move-out messages to manufacture extra rent deductions, sending a dated written tender of possession stops your rent liability and starts an interest clock against the landlord.",
  },
  {
    title: "Forfeiture of Security Deposit Under Lock-In or Penalty Clauses Void Without Proof of Actual Loss",
    parties: "Kailash Nath Associates v. Delhi Development Authority (DDA)",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Dated 09 January 2015",
    facts:
      "A party holding a security/earnest deposit sought to forfeit the entire deposited sum citing a contractual forfeiture clause, even though no actual financial loss had been suffered—and in fact the property was subsequently re-allotted at a higher value.",
    holding:
      "The Supreme Court settled the law under Section 74 of the Indian Contract Act, 1872: where a contract stipulates forfeiture of a deposit upon breach (such as vacating before a lock-in period expires), the party holding the deposit can only deduct 'reasonable compensation' for actual, proven loss. Where the landlord re-lets the premises shortly after the tenant leaves or fails to prove actual vacancy loss, arbitrary forfeiture of the entire deposit is illegal and results in unjust enrichment.",
    amount: "Full Refund of Forfeited Deposit Ordered Along With Statutory Interest",
    takeaway:
      "Even if your rent agreement has a 6-month or 11-month lock-in clause, a landlord or PG operator cannot forfeit 2 to 3 months' security deposit if a new tenant occupies the flat or bed within days of your departure.",
  },
  {
    title: "Statutory Two-Month Deposit Cap & Same-Day Refund Mandate in Adopted States",
    parties: "Statutory Enactment: Uttar Pradesh Regulation of Urban Premises Tenancy Act, 2021",
    citation: "UP Act No. 28 of 2021 (Sections 11, 15, 30 & Second Schedule) — Mirroring Model Tenancy Act, 2021",
    date: "Enforced 24 August 2021 (Following Ordinance of 11 January 2021)",
    facts:
      "Prior to 2021, landlords across Noida, Greater Noida, Ghaziabad, and Lucknow routinely demanded 3 to 6 months' advance security deposit, relied on notarized 11-month agreements, and delayed deposit refunds for months after tenants vacated, forcing tenants into slow civil suits.",
    holding:
      "By enacting UP Act No. 28 of 2021 on the Model Tenancy Act template, the legislature made three rules binding law across urban Uttar Pradesh: (1) Section 11(1) caps security deposits at 2 months' rent for residential premises and 6 months' rent for non-residential premises; (2) Section 11(2) mandates that the security deposit shall be refunded to the tenant on the date of taking over vacant possession after due deduction; and (3) Section 15 read with the Second Schedule places whitewashing, painting of doors/windows, and structural plumbing/electrical repairs strictly on the landlord.",
    amount: "Statutory Cap of 2 Months' Rent (Residential) + 60-Day Rent Authority Disposal Mandate",
    takeaway:
      "If your rented flat is in Noida, Greater Noida, Indirapuram, Ghaziabad, or Lucknow, the Model Tenancy Act's 2-month cap and same-day refund rule are not mere guidelines—they are enforceable state law backed by the District Rent Authority.",
  },
];

const FAQS = [
  {
    question: "What is the maximum security deposit limit under the Model Tenancy Act, 2021?",
    answer:
      "Under Section 11(1)(a) of the Model Tenancy Act, 2021, the security deposit for residential premises is strictly capped at a maximum of two months' agreed rent. Under Section 11(1)(b), the security deposit for non-residential (commercial, office, or retail shop) premises cannot exceed six months' agreed rent. However, because land and tenancy fall under Entry 18 of the State List (Seventh Schedule of the Constitution), this statutory cap is legally binding only in states that have formally enacted tenancy laws based on the Model Act.",
  },
  {
    question: "Which states in India have adopted the Model Tenancy Act as of 2026?",
    answer:
      "Four states initially enacted or aligned their urban tenancy laws with the Model Tenancy Act, 2021†: Uttar Pradesh (Uttar Pradesh Regulation of Urban Premises Tenancy Act, 2021), Assam (Assam Tenancy Act, 2021), Andhra Pradesh (Andhra Pradesh Tenancy Act, 2021), and Tamil Nadu (Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017, as amended). Major rental hubs like Karnataka (Bengaluru), Maharashtra (Mumbai and Pune), Delhi, Haryana (Gurugram), and Telangana (Hyderabad) have not yet enforced the Model Act's 2-month residential deposit cap†.",
  },
  {
    question: "When must a landlord refund the security deposit under Section 11(2) of the Model Tenancy Act?",
    answer:
      "Section 11(2) of the Model Tenancy Act mandates that the security deposit shall be refunded to the tenant on the exact date of taking over vacant possession of the premises from the tenant, after making due deductions for any undisputed arrears of rent, unpaid utility bills, or physical damage beyond normal wear and tear. A landlord cannot legally wait for a new tenant to move in before returning your deposit.",
  },
  {
    question: "Can a landlord deduct one month's rent for painting and deep cleaning from my security deposit?",
    answer:
      "No, not arbitrarily. Under Section 15 of the Model Tenancy Act read with Part A of the Second Schedule, routine whitewashing of walls and painting of doors and windows are explicitly listed as the landlord's statutory responsibility unless the written tenancy agreement specifies otherwise. Even in non-MTA states, Section 108(m) of the Transfer of Property Act, 1882 exempts tenants from 'reasonable wear and tear'. Unless you specifically agreed to a fixed painting charge in your signed lease or caused malicious wall damage proven by GST invoices, a blanket 1-month painting cut is unlawful.",
  },
  {
    question: "How do I recover my security deposit in Bengaluru, Mumbai, Pune, or Delhi where the Model Tenancy Act is not enforced?",
    answer:
      "In states that have not adopted the Model Tenancy Act, your security deposit refund is governed by your written Lease or Leave and Licence Agreement, Section 108 of the Transfer of Property Act, 1882, and Sections 73 and 74 of the Indian Contract Act, 1872. The fastest recovery route is to serve a formal 15-day Advocate Statutory Legal Notice demanding the principal deposit plus 18% per annum interest (citing Delhi High Court precedents in Uberoisons and H.S. Bedi), followed by a fast-track Summary Suit under Order XXXVII of the Code of Civil Procedure.",
  },
  {
    question: "What is the Rent Authority under the Model Tenancy Act and how does it work?",
    answer:
      "Under Sections 4, 30, and 31 of the Model Tenancy Act (and state enactments in UP, Tamil Nadu, Assam, and AP), every written tenancy agreement must be intimated to the District Rent Authority within two months of execution to receive a Unique Identification Number. Appointed at the Deputy Collector / SDM rank, the Rent Authority adjudicates disputes over withheld security deposits, arbitrary deductions, refusal to accept rent, and revision of rent, while Rent Courts are mandated under Section 33(2) to endeavour to dispose of cases within 60 days.",
  },
  {
    question: "Makan malik ya PG owner vacating ke baad security deposit wapas na kare toh legal notice kaise bheje?",
    answer:
      "Agar flat ya PG khali karne aur chabi (keys) dene ke baad bhi makan malik (landlord) aapka security deposit rok le ya painting ke naam par 1 mahine ka kiraya kaat le, toh aap ek formal Advocate Legal Notice bhej sakte hain. LegalRecovery.in par verified advocate aapke state ke kanoon (jaise UP Tenancy Act Section 11 ya Transfer of Property Act Section 108 aur Contract Act Section 74) ke tehat Registered Speed Post, email aur WhatsApp par 15 din ka statutory demand notice bhejte hain, jisse 18% byaj (interest) ke saath bina lambi court tareekh ke paisa wapas milne ka rasta khulta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Model Tenancy Act 2021: Deposit Limits and State Adoption",
  description:
    "The Model Tenancy Act caps residential deposits at two months' rent. See which states adopted it and what applies elsewhere.",
  datePublished: "2026-11-04T11:55:00+05:30",
  dateModified: "2026-11-04T11:55:00+05:30",
  mainEntityOfPage: `${SITE_URL}/law/model-tenancy-act-security-deposit-rules`,
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
    name: "Model Tenancy Act, 2021 (Section 11 Security Deposit Rules)",
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
      name: "Recover Security Deposit",
      item: `${SITE_URL}/recover-security-deposit-from-landlord-india`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Model Tenancy Act Deposit Rules",
      item: `${SITE_URL}/law/model-tenancy-act-security-deposit-rules`,
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

export default function ModelTenancyActDepositRulesPage() {
  const breadcrumbItems = [
    {
      label: "Recover Security Deposit",
      href: "/recover-security-deposit-from-landlord-india",
    },
    {
      label: "Model Tenancy Act Deposit Rules",
      href: "/law/model-tenancy-act-security-deposit-rules",
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

      <main className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching IRCTC / Company Directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Model Tenancy Act, 2021 (Section 11)</span>
              <span className="text-red-500">•</span>
              <span>Union Cabinet Approved <time dateTime="2021-06-02">2 June 2021</time> • 2026 State Status†</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Model Tenancy Act 2021: Deposit Limits and State Adoption
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 11 Security Deposit Cap &amp; State Enforceability)
              </p>
              <p>
                Section 11 of the Model Tenancy Act, 2021 caps residential security deposits at <strong>two months&apos; rent</strong> (six months for commercial premises) and mandates refund <strong>on the day vacant possession is handed over</strong>. Because land is a State subject, these caps apply directly only in adopting states (Uttar Pradesh, Tamil Nadu, Andhra Pradesh, Assam†); elsewhere, tenants enforce refunds via a 15-day statutory advocate notice under Section 108 TPA and Contract Act Section 74.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">2 Months</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Residential Deposit Cap (Sec 11(1)(a))</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">6 Months</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Commercial Deposit Cap (Sec 11(1)(b))</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Same Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Refund on Key Handover (Sec 11(2))</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">60 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Rent Court Disposal Target (Sec 33(2))</p>
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
            <ModelTenancyTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Summary + Effective Date & Constitutional Reality (Archetype L2) */}
              <section id="heading-summary" aria-labelledby="heading-summary-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-summary-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Section 11 Model Tenancy Act: Rules on Security Deposits
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under <strong>Section 11(1) of the Model Tenancy Act, 2021</strong>—approved by the Union Cabinet on <time dateTime="2021-06-02">2 June 2021</time> and circulated by the Ministry of Housing and Urban Affairs (MoHUA)—a landlord is prohibited from demanding or receiving a security deposit exceeding <strong>two months&apos; rent for residential premises</strong> and <strong>six months&apos; rent for non-residential (commercial) premises</strong>. Equally important for outgoing tenants, <strong>Section 11(2)</strong> mandates that the security deposit <em>&quot;shall be refunded to the tenant on the date of taking over vacant possession of the premises from the tenant, after making due deduction of any liability of the tenant.&quot;</em>
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, the single biggest mistake Indian tenants make when fighting a landlord or broker is assuming that the Model Tenancy Act is an all-India central statute like the Consumer Protection Act or the Negotiable Instruments Act. Under <strong>Entry 18 of List II (State List) of the Seventh Schedule to the Constitution of India</strong>, &quot;land&quot;—including the relationship of landlord and tenant and the collection of rents—is an exclusive State subject. Consequently, the Central Government&apos;s Model Tenancy Act, 2021 is a <strong>model legislative template</strong>. It acquires binding statutory force in a city only after that specific State Legislature repeals or amends its older Rent Control Act and notifies a new state Tenancy Act†. Knowing whether your state has adopted the Model Act—or whether you must invoke the Transfer of Property Act, 1882 and Indian Contract Act, 1872 instead—determines how you draft your <Link href="/recover-security-deposit-from-landlord-india" className="text-blue-700 underline font-semibold">legal notice to recover your withheld security deposit from a landlord</Link>.
                </p>
              </section>

              {/* Section 2: Before vs After Comparison Table (Archetype L2 Hero Element) */}
              <section id="heading-before-after" aria-labelledby="heading-before-after-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-before-after-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Before vs After: Legacy Rent Control vs Model Tenancy Act
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Archetype L2 Statutory Comparison
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The comparison table below contrasts how rental security deposits, repair deductions, agreement registration, and dispute forums operate under the older state Rent Control / Transfer of Property Act regime versus the Model Tenancy Act, 2021 framework:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[660px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Comparison of Old Rent Control and TPA Rules vs Model Tenancy Act 2021 Security Deposit Rules
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3.5 px-4">Tenancy Parameter &amp; Section</th>
                        <th scope="col" className="py-3.5 px-4 text-slate-600">Old Rule (Legacy Rent Acts / TPA 1882)</th>
                        <th scope="col" className="py-3.5 px-4 text-red-700">New Rule (Model Tenancy Act, 2021)</th>
                        <th scope="col" className="py-3.5 px-4 text-slate-900">What It Means For You (Tenant / Landlord)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Residential Security Deposit Cap (Section 11(1)(a))
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Mostly unregulated for market-rate leases; landlords demanded 3–6 months in Mumbai/Pune and 6–10 months in Bengaluru.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          Strictly capped at a maximum of 2 months&apos; agreed rent for all residential premises.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          In adopted states (e.g., UP, AP, Assam), demanding 3 or 6 months&apos; residential deposit violates Section 11(1)(a).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Commercial / Office Deposit Cap (Section 11(1)(b))
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Purely contractual; commercial landlords routinely locked in 6 to 12 months&apos; rent as interest-free security.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          Capped at a maximum of 6 months&apos; agreed rent for non-residential premises.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Protects retail shops, clinics, and startups in adopted states from excessive working-capital lockups.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Deposit Refund Deadline Upon Vacating (Section 11(2))
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Governed by contract wording (often &quot;within 15–30 days after vacation&quot;) plus judicial precedent (<em>H.S. Bedi</em>).
                        </td>
                        <td className="py-3.5 px-4 text-red-700 font-bold text-xs">
                          Mandatory refund ON THE DATE of taking over vacant possession from the tenant, after due deductions.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Key handover and deposit refund are simultaneous statutory obligations; landlords cannot wait for the next tenant.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Painting, Whitewashing &amp; Wear-and-Tear (Section 15 &amp; Second Schedule)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Section 108(m) TPA exempted &quot;reasonable wear and tear&quot;, but vague agreements allowed landlords to deduct 1 month&apos;s rent for painting.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          Second Schedule splits duties: Part A (Landlord) covers whitewashing walls &amp; painting doors/windows; Part B (Tenant) covers minor tap/switch replacements.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Gives tenants a statutory schedule to strike down arbitrary 1-month repainting and structural plumbing deductions.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          11-Month Agreement Registration (Section 4 &amp; First Schedule)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Parties signed 11-month notarized agreements to bypass compulsory sub-registrar registration under Section 17 Registration Act, 1908.
                        </td>
                        <td className="py-3.5 px-4 text-red-700 font-bold text-xs">
                          Every tenancy (even ≤ 11 months) must be in writing and intimated to the Rent Authority within 2 months for a Unique ID.
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          The 11-month loophole does not exempt parties from Rent Authority intimation in MTA-adopted states.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Tenant Overstaying Penalty vs Landlord Refusal (Sections 14 &amp; 23)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Mesne profits required years of civil litigation; if landlord refused rent/keys, tenant had to deposit in Rent Controller court.
                        </td>
                        <td className="py-3.5 px-4 text-amber-800 font-bold text-xs">
                          Overstaying tenant owes 2× rent for first 2 months and 4× rent thereafter (S.23); if landlord refuses rent, tenant deposits with Rent Authority (S.14).
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Tenants must never overstay without a written extension; instead, vacate on time, document key handover, and claim the deposit.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Dispute Adjudication Forum (Sections 30, 33, 34 &amp; 40)
                        </th>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          Civil Courts (Order XXXVII CPC Summary Suit for deposit recovery) or archaic Rent Controller courts taking 2–5 years.
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          3-Tier Fast Track: Rent Authority → Rent Court → Rent Tribunal (60-day disposal target under S.33(2); Civil Courts barred on MTA matters under S.40).
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          In adopted states, file before the District Rent Authority; in non-adopted states, serve an Advocate Notice + Order XXXVII Summary Suit.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: State-by-State Adoption & Security Deposit Cap Table (Differentiator Gap †) */}
              <section id="heading-state-adoption" aria-labelledby="heading-state-adoption-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-state-adoption-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    State-Wise Deposit Caps &amp; Model Tenancy Act Status (†)
                  </h2>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Verified State-by-State Matrix †
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Only four states—<strong>Uttar Pradesh, Tamil Nadu, Andhra Pradesh, and Assam</strong>—moved early to enact or align urban tenancy legislation with the Model Tenancy Act framework†, while high-deposit metro markets like <strong>Bengaluru (Karnataka), Mumbai and Pune (Maharashtra), Delhi, Gurugram (Haryana), and Hyderabad (Telangana)</strong> continue to operate under their existing state statutes and the Transfer of Property Act, 1882. Check your state below before citing a statute in your demand letter or legal notice:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[720px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      State-by-State Model Tenancy Act Adoption Status, Security Deposit Caps, and Recovery Forums in India
                    </caption>
                    <thead className="bg-slate-900 text-white font-bold border-b border-slate-800">
                      <tr>
                        <th scope="col" className="py-3.5 px-4">State &amp; Major Rental Cities</th>
                        <th scope="col" className="py-3.5 px-4">MTA Adoption Status†</th>
                        <th scope="col" className="py-3.5 px-4">Governing Statute in Force</th>
                        <th scope="col" className="py-3.5 px-4">Residential Deposit Cap</th>
                        <th scope="col" className="py-3.5 px-4">Primary Forum for Withheld Deposit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-emerald-50/40 hover:bg-emerald-50/80">
                        <th scope="row" className="py-3.5 px-4 font-bold text-slate-900">
                          Uttar Pradesh
                          <span className="block text-[11px] font-normal text-slate-500">
                            Noida, Greater Noida, Ghaziabad, Lucknow, Kanpur
                          </span>
                        </th>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                            ADOPTED &amp; IN FORCE
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          UP Regulation of Urban Premises Tenancy Act, 2021 (UP Act No. 28 of 2021)
                        </td>
                        <td className="py-3.5 px-4 font-bold text-emerald-800 text-xs">
                          Max 2 Months&apos; Rent (Residential) • 6 Months (Commercial) — Sec 11(1)
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          Advocate Notice → District Rent Authority (ADC/SDM rank, Sec 30) &amp; Rent Tribunal
                        </td>
                      </tr>

                      <tr className="bg-emerald-50/40 hover:bg-emerald-50/80">
                        <th scope="row" className="py-3.5 px-4 font-bold text-slate-900">
                          Tamil Nadu
                          <span className="block text-[11px] font-normal text-slate-500">
                            Chennai, Coimbatore, Madurai, Tiruchirappalli
                          </span>
                        </th>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                            ADOPTED (PIONEER ACT)†
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          TN Regulation of Rights &amp; Responsibilities of Landlords and Tenants Act, 2017 (amended 2018–2020)
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-800 text-xs">
                          Governed by Registered Written Agreement on TNRRRLT Portal (3-month customary norm; refund on vacation†)
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          Advocate Notice → Rent Authority (<span className="font-mono">tenancy.tn.gov.in</span>) &amp; Rent Court
                        </td>
                      </tr>

                      <tr className="bg-emerald-50/40 hover:bg-emerald-50/80">
                        <th scope="row" className="py-3.5 px-4 font-bold text-slate-900">
                          Andhra Pradesh
                          <span className="block text-[11px] font-normal text-slate-500">
                            Visakhapatnam, Vijayawada, Guntur, Tirupati
                          </span>
                        </th>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                            ENACTED (2021)†
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Andhra Pradesh Tenancy Act, 2021 (repealing AP Buildings Rent Act, 1960)
                        </td>
                        <td className="py-3.5 px-4 font-bold text-emerald-800 text-xs">
                          Max 2 Months&apos; Rent (Residential) • 6 Months (Commercial)
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          Advocate Notice → District Rent Authority / Civil Court (pending local rule notifications†)
                        </td>
                      </tr>

                      <tr className="bg-emerald-50/40 hover:bg-emerald-50/80">
                        <th scope="row" className="py-3.5 px-4 font-bold text-slate-900">
                          Assam
                          <span className="block text-[11px] font-normal text-slate-500">
                            Guwahati, Silchar, Dibrugarh, Jorhat
                          </span>
                        </th>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                            ADOPTED &amp; IN FORCE
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          The Assam Tenancy Act, 2021 (Assam Act No. XXXIV of 2021, repealing 1972 Act)
                        </td>
                        <td className="py-3.5 px-4 font-bold text-emerald-800 text-xs">
                          Max 2 Months&apos; Rent (Residential) • 6 Months (Commercial) — Sec 11
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          Advocate Notice → District Rent Authority &amp; Rent Court
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-bold text-slate-900">
                          Maharashtra
                          <span className="block text-[11px] font-normal text-slate-500">
                            Mumbai, Navi Mumbai, Thane, Pune, Nagpur
                          </span>
                        </th>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-800 border border-amber-300">
                            NOT ADOPTED†
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Maharashtra Rent Control Act, 1999 (Sec 24 &amp; Sec 55 Leave &amp; Licence) + Contract Act, 1872
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 text-xs">
                          No statutory 2-month cap (market norm: 2–3 months in Pune; 3–6 months in Mumbai)
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          15-Day Advocate Legal Notice (Sec 73/74 Contract Act) → Order XXXVII CPC Summary Suit
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-bold text-slate-900">
                          Karnataka
                          <span className="block text-[11px] font-normal text-slate-500">
                            Bengaluru, Mysuru, Mangaluru, Hubballi
                          </span>
                        </th>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-800 border border-amber-300">
                            NOT ADOPTED†
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Transfer of Property Act, 1882 (Sec 108) &amp; Karnataka Rent Act, 1999 (only low-rent premises)
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 text-xs">
                          No statutory cap for flats with rent &gt; ₹3,500 (market norm: 5–10 months&apos; rent in Bengaluru)
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          15-Day Advocate Notice → Court of Small Causes / Order XXXVII CPC Summary Suit (18% interest)
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-bold text-slate-900">
                          NCT of Delhi &amp; Haryana
                          <span className="block text-[11px] font-normal text-slate-500">
                            New Delhi, Gurugram, Faridabad
                          </span>
                        </th>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-800 border border-amber-300">
                            NOT ADOPTED†
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Transfer of Property Act, 1882 (Delhi rent &gt; ₹3,500) &amp; Haryana Urban Rent Act, 1973
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 text-xs">
                          No statutory cap (customary market practice is 2 months&apos; rent in Delhi &amp; Gurugram)
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          15-Day Advocate Legal Notice (citing <em>Uberoisons</em> &amp; <em>H.S. Bedi</em>) → Order XXXVII Summary Suit
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-bold text-slate-900">
                          Telangana &amp; West Bengal
                          <span className="block text-[11px] font-normal text-slate-500">
                            Hyderabad, Secunderabad, Kolkata
                          </span>
                        </th>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-800 border border-amber-300">
                            NOT ADOPTED†
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-medium text-slate-800">
                          Telangana Buildings Control Act, 1960 / WB Premises Tenancy Act, 1997 + TPA 1882
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 text-xs">
                          No MTA 2-month cap enforced (customary 2–3 months&apos; rent in Hyderabad)
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          15-Day Advocate Notice → Civil Court Summary Recovery Suit (Order XXXVII CPC)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic">
                  † Status note (as of November 2026): While Union Territories and several other states have published draft tenancy bills for consultation under MoHUA&apos;s housing reforms, always verify whether a state Rent Authority portal is operational in your district.Notice how in Delhi NCR alone, crossing the border from New Delhi or Gurugram into <strong>Noida, Greater Noida, or Ghaziabad (Uttar Pradesh)</strong> switches your lease from the Transfer of Property Act directly into the statutory 2-month cap and Rent Authority jurisdiction of UP Act No. 28 of 2021.
                </p>
              </section>

              {/* Section 4: Timeline of the Change (<ol> with <time> per Archetype L2) */}
              <section id="heading-timeline" aria-labelledby="heading-timeline-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-timeline-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legislative Timeline: Model Tenancy Act to Enforcement
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Tracking how the Model Tenancy Act evolved from a central policy draft into state-level enactments explains why older tenancy agreements and newer post-2021 agreements are treated differently:
                </p>

                <ol className="relative border-l-2 border-slate-200 ml-4 space-y-6 sm:space-y-8 list-none my-4">
                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-white ring-4 ring-slate-100" />
                    <time dateTime="2017-02-22" className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      22 February 2017 (Amended 2018–2020) — Tamil Nadu Pioneer Enactment
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Tamil Nadu Enacts TNRRRLT Act &amp; Launches Digital Rent Authority Portal
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Ahead of the final central template, Tamil Nadu repeals its 1960 Rent Control Act and enforces the Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017, establishing mandatory online tenancy registration (<span className="font-mono">tenancy.tn.gov.in</span>) and three-tier Rent Authorities, Rent Courts, and Rent Tribunals.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-white ring-4 ring-slate-100" />
                    <time dateTime="2019-07-10" className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      10 July 2019 — Public Consultation Draft
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      MoHUA Releases Draft Model Tenancy Act, 2019 Proposing 2-Month Deposit Cap
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      To unlock over 1.1 crore vacant urban houses recorded in the Census and curb arbitrary 10-month security deposits in metro cities, the Ministry of Housing and Urban Affairs releases the draft Model Tenancy Act for state and public consultation.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-red-600 border-2 border-white ring-4 ring-red-100" />
                    <time dateTime="2021-06-02" className="text-xs font-extrabold uppercase tracking-wider text-red-600 block">
                      2 June 2021 — Union Cabinet Approval
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Union Cabinet Approves Final Model Tenancy Act, 2021 (47 Sections &amp; 2 Schedules)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      The Union Cabinet approves the final text of the Model Tenancy Act, 2021 and circulates it to all States and Union Territories for adoption via fresh enactment or amendment. Section 11 codifies the 2-month residential deposit cap, 6-month commercial deposit cap, and same-day refund upon handover of vacant possession.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white ring-4 ring-emerald-100" />
                    <time dateTime="2021-08-24" className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                      August – October 2021 — Uttar Pradesh, Assam &amp; Andhra Pradesh Enactments
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      UP Act No. 28 of 2021, Assam Act No. XXXIV of 2021 &amp; AP Tenancy Act Enacted
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Uttar Pradesh converts its January 2021 Tenancy Ordinance into the UP Regulation of Urban Premises Tenancy Act, 2021 (<time dateTime="2021-08-24">24 August 2021</time>), verbatim adopting the 2-month residential and 6-month commercial deposit caps under Section 11. Assam (<time dateTime="2021-09-02">September 2021</time>) and Andhra Pradesh follow suit with state enactments.
                    </p>
                  </li>

                  <li className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-2 border-white ring-4 ring-amber-100" />
                    <time dateTime="2026-11-01" className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block">
                      2025 – November 2026† — Dual-Regime Enforcement Reality
                    </time>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      Split Indian Rental Market: Statutory Rent Authorities vs TPA / Summary Suit Recovery†
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      As of late 2026†, India operates under a bifurcated tenancy regime: tenants in UP, Tamil Nadu, Assam, and AP invoke state Tenancy Acts and District Rent Authorities, while tenants in Bengaluru, Mumbai, Pune, Delhi, Gurugram, and Hyderabad rely on Advocate Legal Notices under Section 108 TPA, Section 73/74 Contract Act, and Order XXXVII CPC Summary Suits.
                    </p>
                  </li>
                </ol>
              </section>

              {/* Section 5: Open Questions & Grey Areas (Archetype L2 Requirement with † flags) */}
              <section id="heading-grey-areas" aria-labelledby="heading-grey-areas-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-grey-areas-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Practical Grey Areas Under the Model Tenancy Act (2026 †)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before sending a deposit demand letter or refusing a landlord&apos;s deduction, tenants and property owners must understand four critical grey areas where online blogs frequently give wrong advice:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 1 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Citing &apos;Section 11 MTA&apos; in Bengaluru, Mumbai or Pune
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If a tenant in Whitefield (Bengaluru) or Wakad (Pune) sends a DIY email claiming their 6-month deposit or painting deduction violates &quot;Section 11 of the Model Tenancy Act, 2021,&quot; any landlord&apos;s lawyer will dismiss it because Karnataka and Maharashtra have not enacted the Model Act†. In non-adopted states, your notice must instead cite <strong>Section 108(m) and (q) of the Transfer of Property Act, 1882</strong>, <strong>Section 73 &amp; 74 of the Indian Contract Act, 1872</strong>, and High Court precedents (<em>Uberoisons</em> and <em>H.S. Bedi</em>), while referencing the Model Tenancy Act&apos;s Second Schedule only as persuasive central government policy on wear and tear.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 2 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Unintimated 11-Month Agreements Under Section 4(5) MTA
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Section 4(1) of the Model Tenancy Act (and UP/TN state laws), both landlord and tenant must jointly intimate the written tenancy agreement to the Rent Authority within 2 months. Under Section 4(5), if neither party intimates the agreement, they can lose access to expedited reliefs before the Rent Authority†. However, even if your 11-month agreement was only notarized or executed on e-stamp paper without a Rent Authority Unique ID, your bank transfer trail (NEFT/UPI) and written contract remain 100% enforceable for money recovery under <strong>Section 65/70/73 of the Indian Contract Act</strong> and <strong>Order XXXVII CPC</strong>. Examine how registration rules work in our guide on <Link href="/should-rental-agreements-be-notarized-in-india" className="text-blue-700 underline font-semibold">whether 11-month rental agreements must be notarized or registered in India</Link>.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 3 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Are PGs, Student Hostels &amp; Co-Living Spaces Covered by Section 11?
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Section 3(1)(e) of the Model Tenancy Act excludes any premises registered as a hotel or lodging house where rooms are provided on a daily or short-term tariff. While branded co-living operators (like Stanza Living or Zolo) and local PG owners often structure contracts as &quot;hospitality service agreements&quot; to argue they fall outside Rent Control Acts, that very argument brings them squarely under the <strong>Consumer Protection Act, 2019</strong> as commercial service providers! Unfair lock-in forfeitures and hidden exit charges in PGs can therefore be challenged via an <Link href="/legal-notice-to-pg-owner-for-security-deposit-refund" className="text-blue-700 underline font-semibold">advocate legal notice to the PG or hostel owner</Link> and an online complaint on e-Jagriti.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Grey Area 4 †
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        Can a Tenant Adjust the Security Deposit Against the Last 2 Months&apos; Rent?
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Tenants worried that a landlord will pocket their deposit often stop paying the last 1 or 2 months&apos; rent and tell the landlord to &quot;adjust it from the security deposit.&quot; Be careful: under Section 11(2) of the Model Tenancy Act and standard lease clauses, security deposit is refundable <em>at the time of handing over vacant possession</em>, not before. Unilaterally withholding rent during the notice period without the landlord&apos;s written consent can technically constitute rent default under Section 21(2)(b) MTA. The legally safer approach is to get written email/WhatsApp confirmation for rent adjustment, or pay the final month&apos;s rent and enforce same-day refund at key handover.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Legitimate vs Illegitimate Deductions Table (Second Schedule Breakdown) */}
              <section id="heading-deductions-table" aria-labelledby="heading-deductions-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deductions-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Can Landlords Deduct From Deposits Under Law?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong>Section 15 of the Model Tenancy Act, 2021</strong> read with the <strong>Second Schedule</strong> divides property maintenance into <strong>Part A (Responsibilities of the Landlord)</strong> and <strong>Part B (Responsibilities of the Tenant)</strong>, while explicitly exempting the tenant from <em>&quot;normal wear and tear&quot;</em> (mirroring Section 108(m) of the Transfer of Property Act, 1882). Use this statutory matrix to audit every rupee your landlord tries to deduct:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Permissible vs Illegal Security Deposit Deductions Under Model Tenancy Act Second Schedule and TPA Section 108
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3.5 px-4">Deduction Claimed by Landlord</th>
                        <th scope="col" className="py-3.5 px-4">Statutory Classification (MTA Second Schedule / TPA)</th>
                        <th scope="col" className="py-3.5 px-4">Legal Validity</th>
                        <th scope="col" className="py-3.5 px-4">Proof Landlord Must Provide / Tenant Counter</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Full Repainting / Whitewashing of Flat (1 Month&apos;s Rent Cut)
                        </th>
                        <td className="py-3.5 px-4 text-xs">
                          Second Schedule, Part A, Items 2 &amp; 3 (Landlord&apos;s Duty) + Sec 108(m) TPA
                        </td>
                        <td className="py-3.5 px-4 text-red-700 font-extrabold text-xs">
                          ILLEGAL (Unless Expressly Contracted)
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          Faded paint, minor nail marks, or dust from normal living is landlord responsibility. Challenge via our <Link href="/legal-notice-landlord-unreasonable-security-deposit-deductions" className="text-blue-700 underline font-semibold">unreasonable painting deduction notice guide</Link>.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Structural Repairs, Wall Seepage, Dampness or Roof Leaks
                        </th>
                        <td className="py-3.5 px-4 text-xs">
                          Second Schedule, Part A, Item 1 (Landlord&apos;s Duty) + Sec 15(1) MTA
                        </td>
                        <td className="py-3.5 px-4 text-red-700 font-extrabold text-xs">
                          STRICTLY ILLEGAL
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          Structural defects and monsoon seepage are 100% landlord liabilities. Under Sec 15(3), if landlord ignores repairs, tenant can deduct repair cost from rent!
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Internal Concealed Plumbing Pipes &amp; Internal Electrical Wiring
                        </th>
                        <td className="py-3.5 px-4 text-xs">
                          Second Schedule, Part A, Items 4 &amp; 5 (Landlord&apos;s Duty)
                        </td>
                        <td className="py-3.5 px-4 text-red-700 font-extrabold text-xs">
                          ILLEGAL
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          Ageing geyser coils, rusted concealed pipes, or tripped main MCB wiring cannot be billed to the outgoing tenant.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Broken Window Glass, Tap Washers, Sockets, Knobs or Geyser/AC Damage by Tenant
                        </th>
                        <td className="py-3.5 px-4 text-xs">
                          Second Schedule, Part B, Items 1–7 (Tenant&apos;s Day-to-Day Duty)
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          PERMISSIBLE (Actual Cost Only)
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          Landlord must show joint move-out inspection note + actual hardware store / technician GST bill—not inflated lump-sum estimates.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Unpaid Electricity, Piped Gas, Water or Monthly RWA Maintenance Arrears
                        </th>
                        <td className="py-3.5 px-4 text-xs">
                          Section 11(2) &amp; First Schedule,Model Tenancy Act
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs">
                          PERMISSIBLE (Pro-Rata Up to Vacation Date)
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          Take a photo of the electricity/gas meter on move-out day and calculate the exact unit reading so the landlord cannot hold ₹20,000 for a ₹1,200 bill.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3.5 px-4 font-semibold text-slate-900">
                          Society Sinking Fund, Major Capital Repair Fund or RWA Non-Occupancy Charges
                        </th>
                        <td className="py-3.5 px-4 text-xs">
                          State Cooperative Societies Acts &amp; Model Bye-Laws
                        </td>
                        <td className="py-3.5 px-4 text-red-700 font-extrabold text-xs">
                          ILLEGAL (Owner&apos;s Liability)
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          Tenants only pay routine monthly common-area maintenance if agreed; structural society funds belong to the flat owner. See <Link href="/legal-notice-to-cooperative-housing-society-maintenance-disputes" className="text-blue-700 underline font-semibold">society maintenance dispute rules</Link>.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Landmark Judicial & Statutory Precedents */}
              <section id="heading-case-law" aria-labelledby="heading-case-law-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-law-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Precedents on Security Deposit Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verified High Court, Supreme Court &amp; State Records
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
                            Authority #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties / Statute: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Rental Dispute &amp; Context:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding / Statutory Rule:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Statutory Relief / Precedent Standard
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
                              Cited in Pre-Litigation Tenant Demand Notices
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

              {/* Section 8: Hand-Authored SVG Flowchart of Deposit Recovery Architecture */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Deposit Recovery Architecture: Handover to Bank Credit
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Whether your rented flat is in an MTA-adopted state (UP, Tamil Nadu, Assam, AP) or a non-adopted metro (Bengaluru, Mumbai, Pune, Delhi, Gurugram), follow this five-stage escalation path:
                </p>

                {/* Mobile Responsive Step Cards (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1 • Move-Out Day</span>
                    <h3 className="font-bold text-sm">Vacant Possession &amp; Key Handover</h3>
                    <p className="text-xs text-slate-200 mt-1">Record timestamped walkthrough video, final meter readings &amp; signed/WhatsApp key receipt. S.11(2) triggers same-day refund duty.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2 • Day 1 to Day 7</span>
                    <h3 className="font-bold text-sm">Written Refund Demand &amp; Deduction Audit</h3>
                    <p className="text-xs text-amber-900 mt-1">Send written refund request rejecting arbitrary 1-month painting cuts under Second Schedule Part A / Sec 108(m) TPA.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 3 • Day 8 to Day 22</span>
                    <h3 className="font-bold text-sm">15-Day Advocate Statutory Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">Serve landlord via Speed Post + WhatsApp/Email demanding principal deposit + 18% p.a. interest (H.S. Bedi / Sec 11 MTA).</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 4 • Forum Selection</span>
                    <h3 className="font-bold text-sm">Rent Authority vs Order XXXVII Summary Suit</h3>
                    <p className="text-xs text-slate-700 mt-1">Adopted States: File before District Rent Authority (Sec 30). Non-Adopted States: File Order XXXVII CPC Summary Suit (or e-Jagriti for PG/Co-Living).</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5 • Resolution</span>
                    <h3 className="font-bold text-sm">Full Deposit + 18% Interest Recovery</h3>
                    <p className="text-xs text-emerald-900 mt-1">Direct NEFT/RTGS settlement or 60-day Rent Court / Summary Decree execution against landlord&apos;s property/bank account.</p>
                  </div>
                </div>

                {/* Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Statutory Deposit Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 265"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Model Tenancy Act Security Deposit Refund and Legal Notice Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="mtaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="mtaAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="mtaSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="92" rx="10" fill="url(#mtaGrad)" />
                    <text x="80" y="43" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Key Handover</text>
                    <text x="80" y="79" fill="#E2E8F0" fontSize="10" textAnchor="middle">Vacant Possession</text>
                    <text x="80" y="96" fill="#CBD5E1" fontSize="9" textAnchor="middle">S.11(2) Same-Day Due</text>

                    {/* Arrow 1 */}
                    <path d="M 150 66 L 180 66" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="92" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="43" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="62" fill="#92400E" fontWeight="bold" textAnchor="middle">Deduction Audit</text>
                    <text x="250" y="79" fill="#78350F" fontSize="10" textAnchor="middle">7-Day Written Demand</text>
                    <text x="250" y="96" fill="#78350F" fontSize="9" textAnchor="middle">Reject Painting Cut</text>

                    {/* Arrow 2 */}
                    <path d="M 320 66 L 350 66" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="92" rx="10" fill="url(#mtaAlert)" />
                    <text x="420" y="43" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="420" y="79" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Final Demand</text>
                    <text x="420" y="96" fill="#FECACA" fontSize="9" textAnchor="middle">RPAD + S.63 BSA Email</text>

                    {/* Arrow 3 */}
                    <path d="M 490 66 L 520 66" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="92" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="43" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="62" fill="#0F172A" fontWeight="bold" textAnchor="middle">Statutory Forum</text>
                    <text x="590" y="79" fill="#334155" fontSize="10" textAnchor="middle">Rent Authority (S.30)</text>
                    <text x="590" y="96" fill="#475569" fontSize="9" textAnchor="middle">or Order 37 CPC Suit</text>

                    {/* Arrow 4 */}
                    <path d="M 660 66 L 690 66" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="92" rx="10" fill="url(#mtaSucc)" />
                    <text x="760" y="43" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Deposit Refund</text>
                    <text x="760" y="79" fill="#D1FAE5" fontSize="10" textAnchor="middle">100% Principal + 18%</text>
                    <text x="760" y="96" fill="#A7F3D0" fontSize="9" textAnchor="middle">60-Day Disposal (S.33)</text>

                    {/* Bottom Benchmark Box */}
                    <rect x="10" y="145" width="820" height="95" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="168" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY BENCHMARKS FOR SECURITY DEPOSIT RECOVERY IN INDIA:</text>
                    <text x="25" y="188" fill="#475569" fontSize="10">• Adopted States (UP, TN, Assam, AP†): Cap of 2 months residential / 6 months commercial (S.11(1)); District Rent Authority adjudication</text>
                    <text x="25" y="205" fill="#475569" fontSize="10">• Non-Adopted States (KA, MH, DL, HR, TG†): S.108(q) TPA + S.73/74 Contract Act + 18% p.a. interest from key handover (H.S. Bedi v. NHAI)</text>
                    <text x="25" y="222" fill="#475569" fontSize="10">• PGs, Hostels &amp; Co-Living Platforms: Consumer Protection Act 2019 (S.2(11) &amp; S.2(46)) online e-Jagriti complaint + Advocate Legal Notice</text>
                  </svg>
                </div>
              </section>

              {/* Section 9: How to Use the Rules Today — 5-Step Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Tenant Playbook to Recover Security Deposits
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether your landlord is holding back ₹40,000 in Noida or ₹2,50,000 in Bengaluru, follow this exact five-step evidentiary sequence to compel a full refund:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve Written Notice to Vacate &amp; Record a Timestamped Move-Out Walkthrough
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Give your notice to vacate in writing (email and WhatsApp, plus Registered Post if the landlord is hostile) strictly as per your agreement&apos;s notice clause (or 1 month under Section 20(2) of the Model Tenancy Act where no period is specified). On move-out day, record a continuous 3-to-5 minute video showing every wall, switchboard, bathroom fitting, appliance, and the final electricity/water sub-meter reading, and send a WhatsApp/email confirmation the moment keys are handed over.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Audit Every Claimed Deduction Against the Second Schedule &amp; Demand GST Bills
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the landlord proposes deducting ₹15,000 to ₹50,000 for &quot;painting, polishing, acid cleaning, or plumbing,&quot; reply in writing citing <strong>Part A of the Second Schedule to the Model Tenancy Act (Section 15)</strong> and <strong>Section 108(m) of the Transfer of Property Act</strong>. State clearly that routine whitewashing and wear-and-tear are landlord obligations, and demand original GST tax invoices for any alleged tenant-caused damage.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Send a Formal 7-Day Written Deposit Refund Request Letter
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Before escalating to a lawyer, send a structured written demand stating: (a) lease start and end dates, (b) exact UTR/cheque number of the original security deposit payment, (c) date vacant possession and keys were handed over, (d) clearance of final electricity and society dues, and (e) your bank account / UPI ID for immediate remittance within 7 days.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a 15-Day Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When a landlord stops answering calls or refuses to release the deposit after 7 days, have an advocate serve a formal 15-day statutory demand notice via Registered Speed Post (RPAD) and electronic mail/WhatsApp under Section 63 BSA, 2023. In UP, Tamil Nadu, Assam, and AP, the notice invokes <strong>Section 11(2) and Section 15 of the state Tenancy Act</strong>; in Bengaluru, Mumbai, Pune, Delhi, and Gurugram, it invokes <strong>Section 108 TPA, Section 73/74 Contract Act, and 18% p.a. penal interest</strong> under <em>Uberoisons</em> and <em>H.S. Bedi</em>.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Compare our flat-fee advocate drafting options on our <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">transparent legal notice charges page</Link> or read our dedicated guide on <Link href="/legal-notice-to-landlord-for-security-deposit-refund-india" className="text-blue-700 underline font-semibold">sending a legal notice to a landlord for security deposit refund</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File an Application Before the District Rent Authority or an Order XXXVII CPC Summary Suit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the landlord ignores the 15-day advocate notice: (1) In <strong>MTA-adopted states</strong>, file an application before the District Rent Authority / Rent Court under Sections 30–33 (which carries a 60-day disposal target and bars the landlord from dragging the case into ordinary civil courts); (2) In <strong>non-adopted states</strong>, file a fast-track <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Summary Suit under Order XXXVII of the Code of Civil Procedure</Link> where the landlord must seek court permission (&quot;leave to defend&quot;) within 10 days of summons; or (3) For <strong>PGs, hostels, and brokerage platforms</strong>, file an online consumer complaint on e-Jagriti.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 10: Interactive Scenario Tabs (Client Island) */}
              <section id="heading-scenario-tabs" aria-labelledby="heading-scenario-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Deposit Deduction Scenarios &amp; Statutory Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Rental or PG Dispute Below to View the Applicable Section and 3-Step Action Plan
                  </p>
                </div>

                <ModelTenancyScenarioTabs />
              </section>

              {/* Section 11: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Tenant Recovers ₹64,000 Deposit in 11 Days
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Tenant Deposit Recovery
                    </span>
                    <span className="text-xs text-slate-400">Sector 62, Noida (Gautam Buddha Nagar, Uttar Pradesh)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Lease &amp; Deposit:</strong> Siddharth Mehra, a software engineer in Noida, rented a 2BHK apartment in Sector 62, Noida at a monthly rent of <strong>₹32,000</strong>. In compliance with Section 11(1)(a) of the <em>Uttar Pradesh Regulation of Urban Premises Tenancy Act, 2021</em>, he paid two months&apos; security deposit (<strong>₹64,000</strong>) via IMPS to the landlord at move-in.
                    </p>
                    <p>
                      <strong>The Landlord&apos;s Unlawful Deduction:</strong> After completing his 11-month term and serving a 30-day written move-out notice, Siddharth cleared his final NPCL electricity bill and society maintenance, recorded a timestamped walkthrough video, and handed over the keys on 30 September. However, 25 days after taking back the flat, the landlord transferred only ₹18,000 and refused to pay the remaining <strong>₹46,000</strong>, claiming: <em>&quot;₹32,000 (1 month&apos;s rent) deducted for full flat repainting and ₹14,000 deducted for bathroom tap leakage and deep cleaning.&quot;</em>
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Siddharth engaged LegalRecovery.in. Our advocate drafted and served a formal 15-day statutory demand notice on the landlord via Registered Speed Post and WhatsApp/email, citing:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-200 pl-2">
                      <li><strong>Section 11(2) of UP Act No. 28 of 2021 (Model Tenancy Act):</strong> Mandating refund of the ₹64,000 deposit on the exact date of taking over vacant possession (30 September);</li>
                      <li><strong>Section 15 &amp; Part A of the Second Schedule:</strong> Establishing that whitewashing of walls, painting of doors/windows, and internal plumbing seepage are statutory landlord obligations—making the ₹32,000 painting deduction and unverified ₹14,000 charge patently illegal;</li>
                      <li><strong>Imminent Filing Before the गौतम बुद्ध नगर (Gautam Buddha Nagar) Rent Authority:</strong> Under Section 30 of the UP Tenancy Act, claiming the unpaid ₹46,000 balance plus 18% p.a. interest and legal notice costs.</li>
                    </ul>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 11 after receiving the advocate notice by Speed Post, the landlord—realising that the Noida Rent Authority (Additional District Collector) strictly enforces the Second Schedule and that the flat had already been let out to a new tenant without any ₹46,000 renovation—transferred the remaining <strong>₹44,500</strong> (after a mutually agreed ₹1,500 actual tap replacement bill) directly to Siddharth&apos;s bank account via NEFT.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: Evidence Checklist & Honest Scope */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Documents for Deposit Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital bank statements, WhatsApp chats, and timestamped smartphone videos are primary evidence before both the Rent Authority and Civil Courts. Keep these 6 records ready:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Rent Agreement / Leave &amp; Licence Copy:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Registered, e-stamped, or notarized agreement (plus Rent Authority Unique ID if in UP/TN) showing deposit amount and notice period.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Security Deposit Payment UTR / Bank Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">NEFT, RTGS, IMPS, UPI, or cheque clearance entry proving the exact security deposit transferred to the landlord.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Notice to Vacate &amp; Key Handover Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Email or WhatsApp chat showing your advance notice to vacate and the exact date physical keys were handed back.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Move-In vs Move-Out Walkthrough Video &amp; Photos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped video of rooms, walls, furniture, and appliances on move-out day disproving false damage allegations.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Final Utility &amp; Society Gate Exit Clearance:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Final electricity/gas bill receipt, meter photo on move-out day, and MyGate / RWA move-out pass.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Landlord&apos;s Deduction Message / Refusal Chat:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">WhatsApp messages, emails, or call logs where the landlord demands arbitrary painting cuts or delays refund.</p>
                    </div>
                  </div>
                </div>

                {/* Honest Scope Block per Section 7 Requirements */}
                <div className="p-4 sm:p-5 bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed mt-4">
                  <strong className="text-slate-900 font-bold block mb-1">
                    Honest Scope — What LegalRecovery Can and Cannot Do for Your Rental Deposit Dispute:
                  </strong>
                  We audit your rental agreement and deduction claims against your state&apos;s exact tenancy law, draft and dispatch an Advocate Statutory Demand Notice to your landlord, PG owner, or property management platform via Registered Speed Post and electronic delivery, and prepare your claim for the District Rent Authority, Order XXXVII Summary Suit, or e-Jagriti. However, we cannot force a landlord in a non-adopted state (such as Karnataka or Maharashtra) to accept a 2-month upfront deposit before you sign a lease, nor can we recover cash deposits paid without any receipt, witness, or WhatsApp admission by the landlord.
                </div>
              </section>

              {/* Section 13: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Model Tenancy Act &amp; Security Deposit Rules
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Legal Answers Citing Section 11 &amp; 15 Model Tenancy Act, Second Schedule, and High Court Precedents
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

              {/* Section 14: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Legal Sources &amp; Model Tenancy Act Text
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
                  Last updated: <time dateTime="2026-11-04">4 November 2026</time>. Statutory verification status: All sections verified against the official Ministry of Housing and Urban Affairs (MoHUA) Model Tenancy Act, 2021 text, UP Act No. 28 of 2021, TNRRRLT Act, Transfer of Property Act, 1882, and Indian Contract Act, 1872. Items marked † denote state-level legislative adoption and local rule notification status as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Security Deposit Legal Notice to Your Landlord
                </h2>
                <ModelTenancyNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Rental Security Deposit, PG &amp; Housing Society Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/recover-security-deposit-from-landlord-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Security Deposit from Landlord Hub →
                  </Link>
                  <Link
                    href="/legal-notice-to/nobroker"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NoBroker Money-Back &amp; Token Refund Notice →
                  </Link>
                  <Link
                    href="/pg-lock-in-period-notice-period-rules"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    PG Lock-In &amp; Notice Period Rules →
                  </Link>
                  <Link
                    href="/co-living-deposit-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Co-Living Operator Deposit Refund Guide →
                  </Link>
                  <Link
                    href="/templates/security-deposit-refund-letter-to-landlord"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Security Deposit Refund Letter Template →
                  </Link>
                  <Link
                    href="/templates/society-maintenance-recovery-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Society Maintenance Recovery Notice Format →
                  </Link>
                  <Link
                    href="/legal-notice-landlord-unreasonable-security-deposit-deductions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Challenge Unfair Painting &amp; Repair Deductions →
                  </Link>
                  <Link
                    href="/legal-notice-to-pg-owner-for-security-deposit-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    PG &amp; Hostel Deposit Refund Legal Notice →
                  </Link>
                  <Link
                    href="/legal-notice-to-cooperative-housing-society-maintenance-disputes"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Housing Society &amp; RWA Maintenance Disputes →
                  </Link>
                  <Link
                    href="/should-rental-agreements-be-notarized-in-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    11-Month Rental Agreement Notary vs Registration →
                  </Link>
                  <Link
                    href="/services/security-deposits-and-rental-recoveries"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Security Deposit &amp; Rental Recovery Services →
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
        <RelatedRecoveryGuides currentPath="/law/model-tenancy-act-security-deposit-rules" />
      </main>
    </>
  );
}
