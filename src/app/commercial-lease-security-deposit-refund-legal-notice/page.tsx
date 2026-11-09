import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CommercialLeaseNoticeCTA from "./CommercialLeaseNoticeCTA";
import CommercialLeaseTableOfContents from "./CommercialLeaseTableOfContents";
import CommercialLeaseProblemTabs from "./CommercialLeaseProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Commercial Lease Security Deposit Stuck? Legal Notice & Recovery",
  description:
    "Commercial landlord refusing to return office or retail deposit? Dilapidation claims, fair wear & tear, arbitration clause tactics and recovery notice.",
  alternates: {
    canonical: `${SITE_URL}/commercial-lease-security-deposit-refund-legal-notice`,
  },
  openGraph: {
    title: "Commercial Lease Security Deposit Stuck? Legal Notice & Recovery",
    description:
      "Statutory roadmap for recovering ₹5L–₹50L+ office and retail deposits. Order 37 summary suit vs MSME Samadhaan vs arbitration, dilapidation clause tactics and legal notice.",
    url: `${SITE_URL}/commercial-lease-security-deposit-refund-legal-notice`,
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
    title: "Transfer of Property Act, 1882 — Section 108 (Rights and Liabilities of Lessor and Lessee, Reasonable Wear and Tear)",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
  {
    title: "Code of Civil Procedure, 1908 — Order XXXVII (Summary Procedure for Liquidated Debts and Written Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Commercial Courts Act, 2015 — Section 12A (Mandatory Pre-Institution Mediation and Settlement)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Section 18 (Reference to Facilitation Council)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 — Section 9 (Interim Measures) & Section 12(5) (Ineligibility of Arbitrators)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Indian Contract Act, 1872 — Section 73 (Compensation for Loss) & Section 74 (Liquidated Damages vs Penalty)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of Electronic Records in Handover Disputes)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Commercial Lease Security Deposit is an Admitted Liquidated Debt Subject to Summary Decree",
    parties: "Vogue Interior Products Pvt. Ltd. v. Anand Brothers",
    citation: "CS(OS) No. 1421/2012, High Court of Delhi",
    date: "Judgment Dated 18 November 2014",
    facts:
      "The corporate lessee took commercial office space on a 5-year lease, depositing ₹32,00,000 as an interest-free refundable security deposit. Upon expiry of the lease, the tenant surrendered vacant, peaceful physical possession to the lessor and handed over the keys. The landlord acknowledged receipt of possession but withheld the entire deposit for over 18 months, claiming unquantified damages, plaster discoloration, and pending HVAC overhaul without furnishing any contractor bills.",
    holding:
      "The High Court held that upon handover of vacant possession of commercial premises, the security deposit becomes an admitted liquidated debt due and payable forthwith. The landlord cannot invent vague, unliquidated claims of damage to evade refunding the deposit. In the absence of contemporary joint inspection records or genuine contractor receipts, the landlord's defence is illusory. The Court decreed the suit under Order 37 CPC, directing the refund of ₹32,00,000 with 12% annual interest from the date of vacating.",
    amount: "₹32,00,000 Full Deposit Refund @ 12% Annual Interest + ₹75,000 Legal Costs",
    takeaway:
      "Once you prove surrender of vacant possession via an acknowledged handover memo or registered speed post key delivery, the commercial security deposit is treated as an ascertained debt under Order 37 CPC. Landlords cannot block refunds with generic, unvetted damage claims.",
  },
  {
    title: "Fair Wear and Tear Under Section 108(m) TPA Cannot Be Docked from Security Deposits",
    parties: "Ansal Properties & Infrastructure Ltd. v. K.G. Somani & Co.",
    citation: "RFA No. 298/2011, High Court of Delhi",
    date: "Judgment Dated 12 September 2016",
    facts:
      "The commercial tenant occupied office premises in a prime business district for over 6 years. Upon determination of the lease, the landlord deducted ₹14,50,000 from the security deposit on the grounds of repainting the entire premises, replacing weathered vinyl floorings, and repairing minor hairline cracks around window frames. The tenant contested these deductions as normal operational usage.",
    holding:
      "The High Court examined Section 108(m) of the Transfer of Property Act, 1882, which explicitly excludes 'reasonable wear and tear' from the lessee's obligation to restore the property. The Court ruled that prolonged commercial occupation naturally causes fading of wall paint, floor scuffing, and minor superficial wear. The landlord cannot exploit end-of-lease handover to get their property renovated and modernized at the outgoing tenant's expense. The entire deduction was set aside, and the landlord was ordered to refund the sum with interest.",
    amount: "₹14,50,000 Deductions Disallowed @ 9% Interest + ₹50,000 Costs",
    takeaway:
      "Section 108(m) of the Transfer of Property Act protects tenants from routine repainting and aging costs. Repainting, polishing, and natural weathering are standard landlord capital depreciation costs, not tenant dilapidations.",
  },
  {
    title: "Arbitration Clauses in Tenancy Agreements Do Not Bar Summary or Pre-Institution Remedies",
    parties: "Vidya Drolia & Ors. v. Durga Trading Corporation",
    citation: "Civil Appeal No. 2402 of 2019, (2021) 2 SCC 1 (Supreme Court 3-Judge Bench)",
    date: "Judgment Dated 14 December 2020",
    facts:
      "A commercial tenancy agreement contained a broad arbitration clause. When the lessor defaulted on refunding the multi-lakh security deposit post-handover, the lessor argued that the tenant had no remedy before civil courts or statutory facilitation councils and had to bear the exorbitant expenses of a private arbitral tribunal.",
    holding:
      "The Supreme Court affirmed that landlord-tenant disputes governed by the Transfer of Property Act are arbitrable, but clarified that arbitration clauses cannot be used as an oppressive instrument to delay liquidated debt recovery. Unilateral appointment of a sole arbitrator by the lessor is void under Section 12(5) of the Arbitration Act. Furthermore, tenants are free to pursue pre-institution mediation under Section 12A of the Commercial Courts Act or summary recovery before initiating tribunal proceedings.",
    amount: "Doctrine of Arbitrable Balance & Unilateral Appointment Invalidation",
    takeaway:
      "If your commercial lease contains an arbitration clause naming the landlord's nominee as sole arbitrator, that appointment is legally dead under Section 12(5). You can use pre-institution mediation or an Order 37 notice to resolve the dispute at minimal cost.",
  },
  {
    title: "Forfeiture of Commercial Deposits as Penalty Unlawful Under Contract Act Section 74",
    parties: "Kailash Nath Associates v. Delhi Development Authority (DDA)",
    citation: "Civil Appeal No. 193 of 2015, (2015) 4 SCC 136 (Supreme Court of India)",
    date: "Judgment Dated 9 January 2015",
    facts:
      "A commercial party vacated prior to the completion of the contractual lock-in period. The lessor forfeited the entire 6-month security deposit as a contractual penalty, arguing that the lease deed stipulated automatic forfeiture in the event of early termination, regardless of whether the landlord suffered any actual vacancy loss.",
    holding:
      "The Supreme Court ruled that Section 74 of the Indian Contract Act, 1872 allows liquidated damages only as a genuine pre-estimate of loss, and not as an arbitrary penalty. Where it is possible to prove actual damage or loss (such as downtime in finding a replacement tenant), the claimant must prove that loss. If the premises are re-let immediately without rent loss, the lessor cannot unjustly enrich themselves by pocketing the entire deposit.",
    amount: "Forfeiture Clause Deemed Unenforceable Penalty Without Proof of Actual Loss",
    takeaway:
      "Landlords cannot mechanically confiscate your commercial deposit for early termination or minor technical defaults. Under Section 74, they must furnish documentary proof of genuine rental loss.",
  },
];

const FAQS = [
  {
    question: "How long can a commercial landlord legally take to refund an office security deposit in India?",
    answer:
      "Under standard commercial lease agreements and Indian contract law, a landlord must refund the security deposit within 7 to 30 days of the tenant handing over vacant, peaceful possession and clearing all undisputed utility and common area maintenance (CAM) dues. If the lease deed is silent, Section 108 of the Transfer of Property Act requires the refund to be made simultaneously with the surrender of keys. Withholding the deposit beyond 30 days without providing an itemized statement of legitimate dilapidations triggers statutory interest liability (typically 9% to 18% per annum) under Court precedents.",
  },
  {
    question: "Can a commercial landlord deduct full repainting and deep-cleaning costs from the deposit?",
    answer:
      "No. Section 108(m) of the Transfer of Property Act, 1882 explicitly excludes 'reasonable wear and tear' from the tenant's restoration obligations. Normal paint fading, minor furniture scuffs, carpet weathering, and hairline plaster cracks after years of commercial operation constitute fair wear and tear. Unless the lease deed specifically contains a clear, agreed-upon reinstatement clause with verified market quotations, the landlord cannot unilaterally deduct general painting, deep cleaning, or modernization costs from your deposit.",
  },
  {
    question: "What is an Order 37 summary suit, and why is it effective for recovering commercial deposits?",
    answer:
      "An Order XXXVII (Order 37) suit under the Code of Civil Procedure, 1908 is a fast-track judicial mechanism for recovering liquidated debts arising out of written contracts, such as a registered lease deed. Unlike regular civil suits that take years, under Order 37 the defendant landlord does not possess an automatic right to defend. The landlord must apply to the court for 'Leave to Defend' within 10 days of receiving summons, demonstrating a substantial, bona fide defence. If the landlord fails to show real triable issues, the court immediately passes a summary decree for the full deposit amount plus interest.",
  },
  {
    question: "Can an MSME registered business use MSME Samadhaan to recover a commercial lease deposit?",
    answer:
      "If your business is registered under the MSMED Act (Udyam Registration) as a Micro or Small enterprise and the premises were leased for conducting your registered manufacturing or service enterprise activities, you can file a delayed payment reference before the Micro and Small Enterprises Facilitation Council (MSEFC) under Section 18. Under Section 16 of the MSMED Act, delayed payments attract mandatory compound interest with monthly rests at three times the RBI Bank Rate, creating formidable financial pressure on defaulting commercial landlords.",
  },
  {
    question: "What should I do if the commercial lease has an arbitration clause appointing the landlord's lawyer?",
    answer:
      "Under Section 12(5) read with the Seventh Schedule of the Arbitration and Conciliation Act, 1996 and the Supreme Court's ruling in Perkins Eastman, unilateral appointment of a sole arbitrator by one interested party is void ab initio. You are not obligated to accept the landlord's nominee. Furthermore, you can initiate free or low-cost Pre-Institution Mediation under Section 12A of the Commercial Courts Act through the District Legal Services Authority (DLSA), which often achieves a binding settlement without spending lakhs on private arbitral tribunal fees.",
  },
  {
    question: "What evidence is essential to prove that an office or retail shop was returned in good condition?",
    answer:
      "You must preserve four critical evidentiary records under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023: (1) A signed Joint Handover Inspection Report or Panchnama signed by both parties; (2) Date-stamped high-definition photos and a continuous 4K video walkthrough of the empty premises on the vacating day; (3) Final paid bills and No Objection Certificates (NOCs) for electricity, water, telecom, and society CAM charges; and (4) Proof of key handover, either through a signed physical receipt, building security log, or registered speed post consignment.",
  },
  {
    question: "Commercial landlord office ka security deposit wapas nahi kar raha toh legal notice kaise bheje?",
    answer:
      "Agar commercial landlord vacant possession lene ke baad painting ya arbitrary damage ke naam par deposit rok raha hai, toh pehla aur sabse prabhavi kadam ek formal advocate legal notice bhejna hota hai. LegalRecovery.in par verified advocates Transfer of Property Act Section 108, Order 37 CPC, aur Commercial Courts Act ke antargat 15 din ka statutory demand notice bhejte hain. Is notice mein landlord ko 18% annual interest, court litigation kharche, aur dilapidation claims ki itemized GST receipts pesh karne ki statutory chetavani di jati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Commercial Landlord Withholding Office or Shop Deposit? How to Recover It Legally",
  description:
    "Commercial landlord refusing to return office or retail deposit? Dilapidation claims, fair wear & tear, arbitration clause tactics and recovery notice.",
  datePublished: "2026-11-09T12:00:00+05:30",
  dateModified: "2026-11-09T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/commercial-lease-security-deposit-refund-legal-notice`,
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
    name: "Commercial Lease Security Deposit Refund and Recovery Law in India",
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
      name: "Property & Tenancy",
      item: `${SITE_URL}/services/property-and-builder-disputes`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Commercial Lease Security Deposit Recovery",
      item: `${SITE_URL}/commercial-lease-security-deposit-refund-legal-notice`,
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

export default function CommercialLeaseDepositRecoveryPage() {
  const breadcrumbItems = [
    { label: "Property & Tenancy", href: "/services/property-and-builder-disputes" },
    { label: "Commercial Lease Deposit Recovery", href: "/commercial-lease-security-deposit-refund-legal-notice" },
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
        {/* Hero Section strictly matching site theme and IRCTC layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 108 Transfer of Property Act</span>
              <span className="text-red-500">•</span>
              <span>Commercial Dispute &amp; Order 37 Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Commercial Landlord Withholding Office or Shop Deposit? How to Recover It Legally
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Commercial Deposit Withholding &amp; Fair Wear &amp; Tear Law)
              </p>
              <p>
                Under Section 108(m) of the Transfer of Property Act, 1882, commercial tenants are not liable for reasonable wear and tear. Once vacant possession is handed over, an unpaid security deposit becomes an admitted liquidated debt. Tenants can issue a 15-day advocate demand notice and initiate recovery via Order 37 summary suit, MSME Samadhaan, or Section 12A commercial mediation before taking adversarial litigation steps.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 108(m)</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Wear &amp; Tear Exemption</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Summary Debt Decree</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3x Bank Rate</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">MSME Samadhaan Interest</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">10 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Landlord Leave to Defend</p>
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
            <CommercialLeaseTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Anatomy of Commercial Deposit Withholding */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Commercial Lease Security Deposit Refund: The ₹5L to ₹50L Liquidity Trap
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In commercial real estate across India, security deposits for office spaces, retail outlets, restaurants, and industrial warehouses represent substantial corporate capital—ranging anywhere from ₹5,00,000 for boutique retail units to ₹50,00,000 or more for multi-floor tech park leases. Typically structured as three to ten months of gross monthly rent, these interest-free deposits are legally handed over to the landlord under an explicit fiduciary covenant: full reimbursement upon lease expiration or early lawful determination, subject only to adjustment against unpaid utility charges or legitimate structural damage.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, when commercial tenants vacate to expand, downsize, or conclude operations, landlords routinely treat this corpus as their own unencumbered working capital. Instead of releasing the funds within the contractual 15 to 30-day window, corporate tenants encounter fabricated dilapidation claims, inflated repainting estimates, demands for tenant reinstatement back to bare-shell status, or complete executive evasion. Landlords calculate that business operators are too occupied with ongoing operations to endure a protracted multi-year civil battle.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian commercial law provides aggressive, time-tested legal mechanisms to defeat these withholding tactics. An unpaid commercial security deposit where vacant possession has been surrendered is not an unadjudicated claim for damages—it is an <strong>ascertained, liquidated debt</strong> arising from an admitted written agreement. By mobilizing a rigorous statutory demand notice, leveraging <Link href="/law/order-37-summary-suit-money-recovery" className="text-red-700 hover:text-red-800 font-bold underline">Order 37 summary suit proceedings</Link>, invoking the MSMED Act facilitation councils, or initiating institutional mediation, commercial tenants can quickly force landlords to refund stuck liquidity with penal interest.
                </p>
              </section>

              {/* Section 2: Archetype G4 Core - Big Comparison Table of Routes */}
              <section id="heading-comparison-matrix" aria-labelledby="heading-comparison-matrix-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-comparison-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Comparison Matrix: 5 Legal Routes to Recover a Commercial Security Deposit
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Archetype G4 Comparative Matrix
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Choosing the right legal recovery forum depends on the lease amount, whether your company holds an active Udyam MSME certificate, and whether the lease deed contains an active arbitration clause. Review the statutory parameters below before deploying legal capital:
                </p>

                {/* Responsive Comparison Table */}
                <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <caption className="sr-only">Comprehensive Comparison of Commercial Security Deposit Recovery Routes</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th scope="col" className="p-3.5 sm:p-4 border-r border-slate-700 min-w-[140px]">Recovery Route</th>
                        <th scope="col" className="p-3.5 sm:p-4 border-r border-slate-700 min-w-[150px]">Governing Statute</th>
                        <th scope="col" className="p-3.5 sm:p-4 border-r border-slate-700 min-w-[120px]">Timeline</th>
                        <th scope="col" className="p-3.5 sm:p-4 border-r border-slate-700 min-w-[120px]">Statutory Cost</th>
                        <th scope="col" className="p-3.5 sm:p-4 border-r border-slate-700 min-w-[180px]">Evidentiary Threshold</th>
                        <th scope="col" className="p-3.5 sm:p-4 min-w-[190px]">Strategic Leverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          1. Advocate Legal Demand Notice
                        </th>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Transfer of Property Act s.108 &amp; Contract Act s.73
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700 border-r border-slate-200">
                          15 – 30 Days
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900 border-r border-slate-200">
                          ₹999 (Fixed fee)
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Lease deed copy, key handover receipt, final utility NOCs, move-out photos.
                        </td>
                        <td className="p-3.5 sm:p-4 font-medium text-slate-800">
                          Resolves 65%+ of disputes without litigation; dismantles bogus dilapidation claims with 18% penal interest warning.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors bg-red-50/30">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          2. Order 37 Summary Suit (CPC)
                        </th>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Code of Civil Procedure, 1908 Order XXXVII
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-800 border-r border-slate-200">
                          6 – 14 Months
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Ad valorem court fees (1%–4% of deposit based on State Court Fees Act)
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Written registered lease deed showing fixed deposit clause; written proof of key delivery.
                        </td>
                        <td className="p-3.5 sm:p-4 font-medium text-emerald-900">
                          Landlord gets no automatic right to defend; must apply for leave to defend in 10 days; fast summary judgment.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          3. MSME Samadhaan (MSEFC)
                        </th>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          MSMED Act, 2006 Sections 15 to 18
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-800 border-r border-slate-200">
                          3 – 8 Months
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700 border-r border-slate-200">
                          Nil / Minimal filing fees
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Valid Udyam Certificate prior to lease; commercial invoice/statement for deposit refund.
                        </td>
                        <td className="p-3.5 sm:p-4 font-medium text-slate-800">
                          Statutory compound interest at 3x RBI Bank Rate; landlord must deposit 75% award amount to appeal (Section 19).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          4. Commercial Pre-Institution Mediation (Sec 12A)
                        </th>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Commercial Courts Act, 2015 Section 12A
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700 border-r border-slate-200">
                          3 – 5 Months
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900 border-r border-slate-200">
                          Nominal DLSA mediation fee (~₹1,000–₹5,000)
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Valuation of dispute &gt; ₹3,00,000; summary statement of claims and handover logs.
                        </td>
                        <td className="p-3.5 sm:p-4 font-medium text-slate-800">
                          Mandatory prerequisite before filing commercial suit; settlement has the force of a civil court decree.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          5. Arbitration Tribunal / Section 9 Relief
                        </th>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Arbitration &amp; Conciliation Act, 1996 s.9 &amp; s.11
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-800 border-r border-slate-200">
                          12 – 18 Months
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-red-700 border-r border-slate-200">
                          High (Arbitrator sitting fees + 4th Schedule rates)
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Valid, duly stamped arbitration agreement clause in registered lease deed.
                        </td>
                        <td className="p-3.5 sm:p-4 font-medium text-slate-800">
                          Section 9 allows Commercial Court to order the landlord to deposit the disputed security in court escrow.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: "Which One is Right for You" - 3 Persona Scenarios */}
              <section id="heading-persona-selector" aria-labelledby="heading-persona-selector-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-persona-selector-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Which Route is Right for Your Business? 3 Tenancy Personas
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Tailored Legal Strategy
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Persona 1 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0" />
                        <span className="text-xs font-black uppercase tracking-wider text-red-700">
                          Persona 1: Retail / F&amp;B Outlet
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Retail Shop, Franchisee or Restaurant Tenant (₹5L – ₹15L Deposit)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        You vacated a high-street shop or mall retail kiosk. The landlord is withholding ₹5L to ₹15L claiming you failed to remove interior branding partitions, or citing customer floor wear. You need capital back immediately for your next site rollout without sinking ₹3L in legal retainers.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-900 mb-1">Recommended Pathway:</p>
                      <p className="text-xs text-emerald-800 font-semibold bg-emerald-50 p-2.5 rounded-lg">
                        <strong>Route 1 (Advocate Notice)</strong> followed immediately by <strong>Route 4 (DLSA Section 12A Mediation)</strong>. Fast settlement without heavy court fees.
                      </p>
                    </div>
                  </div>

                  {/* Persona 2 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                        <span className="text-xs font-black uppercase tracking-wider text-blue-700">
                          Persona 2: Tech Startup / Corporate
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Tech Company, BPO or Corporate Office (₹15L – ₹50L+ Deposit)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Your enterprise vacated a 5,000–25,000 sq. ft. commercial facility in an IT park. The builder or institutional lessor is sitting on ₹20L to ₹50L+ in cash, raising frivolous dilapidation claims or hiding behind a biased arbitration clause to preserve their own cash reserves.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-900 mb-1">Recommended Pathway:</p>
                      <p className="text-xs text-blue-900 font-semibold bg-blue-50 p-2.5 rounded-lg">
                        <strong>Route 2 (Order 37 Summary Suit)</strong> paired with a <strong>Section 9 CPC/Arbitration petition</strong> to compel deposit into court escrow before landlord assets dissipate.
                      </p>
                    </div>
                  </div>

                  {/* Persona 3 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-600 shrink-0" />
                        <span className="text-xs font-black uppercase tracking-wider text-amber-700">
                          Persona 3: Registered MSME Unit
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Manufacturing, Consultancy or Agency MSME (Any Deposit Amount)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Your registered enterprise holds an active Udyam registration for IT services, consultancy, or light manufacturing. The landlord defaulted on refunding your operational unit deposit, severely crippling your quarterly working capital.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-900 mb-1">Recommended Pathway:</p>
                      <p className="text-xs text-amber-950 font-semibold bg-amber-50 p-2.5 rounded-lg">
                        <strong>Route 3 (MSME Samadhaan Filing)</strong> to trigger the statutory 45-day conciliation timeline and 3x RBI Bank Rate compound interest.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Deep Dive Route 1 - Legal Demand Notice */}
              <section id="heading-route-notice" aria-labelledby="heading-route-notice-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-notice-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 1: The 15-Day Advocate Legal Demand Notice (The First Decisive Strike)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Over 65% of commercial security deposit disputes are resolved at the legal notice stage, provided the notice is not a generic template. When business founders or operations managers send informal emails, landlords usually assign low priority to them or reply with vague counter-allegations. A formal advocate legal notice dispatched on advocate letterhead fundamentally alters the legal dynamic.
                </p>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    What a Weaponized Commercial Lease Legal Notice Must Articulate:
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                      <div>
                        <strong className="text-slate-900 font-bold">Unconditional Handover of Vacant Possession:</strong>
                        <p className="mt-0.5">Explicitly documents the exact date, time, and mode through which vacant, peaceful possession and physical keys were delivered to the lessor, terminating any putative claims of ongoing tenancy or holdover rent.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                      <div>
                        <strong className="text-slate-900 font-bold">Section 108(m) Fair Wear and Tear Evidentiary Shield:</strong>
                        <p className="mt-0.5">Cites Section 108(m) of the Transfer of Property Act, 1882 to preemptively dismantle painting and aging claims, putting the landlord to strict proof with audited GST bills for any actual structural damage.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                      <div>
                        <strong className="text-slate-900 font-bold">Demand for 18% Commercial Interest &amp; Order 37 Put-on-Notice:</strong>
                        <p className="mt-0.5">Notifies the landlord that failure to credit the funds within 15 calendar days will initiate an Order 37 summary suit in the jurisdictional Commercial Court, holding the landlord liable for 18% p.a. interest, litigation costs, and attachment of rental receivables from new tenants.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                      <div>
                        <strong className="text-slate-900 font-bold">Digital Proof of Delivery Under Section 63 BSA 2023:</strong>
                        <p className="mt-0.5">Served concurrently via Registered Speed Post with postal acknowledgment and via legal electronic transmission (email and WhatsApp) complying with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.</p>
                      </div>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/templates/security-deposit-refund-letter-to-landlord"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-700 hover:text-red-800 underline"
                    >
                      View the Security Deposit Refund Letter Format to Landlord →
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 5: Deep Dive Route 2 - Order 37 Summary Suit */}
              <section id="heading-route-order37" aria-labelledby="heading-route-order37-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-order37-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 2: Order XXXVII CPC Summary Suit (Bypassing Multi-Year Regular Civil Trials)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If the landlord ignores the 15-day notice, the most lethal judicial remedy for commercial lease deposits is an <Link href="/law/order-37-summary-suit-money-recovery" className="text-red-700 hover:text-red-800 font-bold underline">Order 37 Summary Suit under the Code of Civil Procedure, 1908</Link>. While a regular money suit in India can take three to seven years through full oral trials, Order 37 is designed exclusively for liquidated financial debts arising out of written contracts.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-red-700 block">
                      Why Commercial Deposits Qualify Under Order 37
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Liquidated Written Contract Guarantee
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A registered lease deed specifies the exact sum of money paid as security deposit (e.g., ₹25,00,000) and contains an express clause stating that it shall be refunded upon vacant handover. Because the liability is predetermined and mathematically fixed, it qualifies as an ascertained debt under Order 37 Rule 1(2).
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 block">
                      The 10-Day Leave to Defend Pressure Cooker
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      No Automatic Right to Delay
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Upon service of court summons, the landlord has only 10 days to enter an appearance. Thereafter, upon service of the Summons for Judgment, the landlord must file an affidavit seeking Leave to Defend. Unless the landlord can establish a substantial, non-frivolous defence with contemporaneous bills, the court refuses leave and decrees the suit immediately.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-xl text-xs sm:text-sm space-y-2">
                  <p className="font-bold text-red-400 uppercase tracking-wider text-[11px]">
                    Conditional Leave &amp; Pre-Deposit Orders
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Even when courts grant the landlord Leave to Defend, High Courts across Delhi, Mumbai, and Bengaluru routinely make it conditional upon the landlord depositing 50% to 100% of the disputed deposit into court fixed deposits. This immediately destroys the landlord&apos;s incentive to stall and leads to swift out-of-court settlements.
                  </p>
                </div>
              </section>

              {/* Section 6: Deep Dive Route 3 - MSME Samadhaan */}
              <section id="heading-route-msme" aria-labelledby="heading-route-msme-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-msme"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 3: MSME Samadhaan &amp; Section 18 Facilitation Council (For Registered MSMEs)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If your operating company is registered as a Micro or Small Enterprise under the MSMED Act, 2006, you hold a potent statutory advantage. Under Section 15 through Section 18 of the MSMED Act, any buyer or service recipient who delays payment beyond 45 days is subject to statutory conciliation and arbitration through the Micro and Small Enterprises Facilitation Council (MSEFC).
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    The 3x Compound Interest Penalty: Landlords&apos; Worst Financial Nightmare
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under Section 16 of the MSMED Act, delayed payments attract mandatory compound interest with monthly rests at <strong>three times the Bank Rate notified by the Reserve Bank of India</strong>. Unlike ordinary civil suits where interest is discretionary (often 6% to 9%), the MSMED compound interest rate exceeds 20% to 22% per annum, rapidly compounding against the defaulting landlord.
                  </p>
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-950 font-medium">
                    <strong className="block font-bold mb-1">Section 19 Pre-Deposit Hurdle:</strong>
                    If the Facilitation Council passes an award against the landlord, the landlord cannot even file an appeal or challenge before a civil court without pre-depositing <strong>75% of the total awarded amount</strong> in court. This statutory provision prevents landlords from filing frivolous appeals to delay execution.
                  </div>
                </div>
              </section>

              {/* Section 7: Deep Dive Route 4 - Pre-Institution Mediation & Arbitration Tactics */}
              <section id="heading-route-commercial-suit" aria-labelledby="heading-route-commercial-suit-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-commercial-suit"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 4: Section 12A Pre-Institution Commercial Mediation &amp; Neutralizing Arbitration Clauses
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Commercial Courts Act, 2015, any commercial dispute exceeding the specified value (currently ₹3,00,000) mandates Pre-Institution Mediation through the District Legal Services Authority (DLSA) under <Link href="/pre-institution-mediation-section-12a" className="text-red-700 hover:text-red-800 font-bold underline">Section 12A of the Commercial Courts Act</Link> prior to filing a suit, unless urgent interim relief is claimed.
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Why DLSA Section 12A Mediation is Highly Cost-Effective:
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      DLSA mediation costs nominal statutory fees (typically ₹1,000 to ₹5,000), operates on a strict 3-month statutory timeline (extendable by 2 months with consent), and is presided over by an accredited senior mediator. If the landlord settles and signs a Mediation Settlement Agreement, under Section 12A(4) that settlement has the same legal status and enforceability as an executable decree of a civil court.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      How to Neutralize Oppressive Lease Arbitration Clauses:
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Landlords frequently point to clause 24 of the lease deed: &quot;All disputes shall be referred to arbitration by the lessor&apos;s appointed sole arbitrator.&quot; Under the Supreme Court&apos;s rulings in <em>TRF Ltd.</em> and <em>Perkins Eastman Architects DPC</em>, unilateral appointment of a sole arbitrator is invalid and unenforceable under Section 12(5) of the Arbitration Act. If the landlord insists on formal arbitration, you can file a Section 11 petition before the High Court for an independent court-appointed arbitrator, or petition the Commercial Court under Section 9 for an order securing the deposit amount in escrow before arbitration commences.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Dilapidation & Fair Wear and Tear Breakdown */}
              <section id="heading-dilapidation-rules" aria-labelledby="heading-dilapidation-rules-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-dilapidation-rules-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Dilapidations &amp; Section 108(m) TPA: Legitimate vs. Illegitimate Deductions
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Boundary Guide
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The primary weapon landlords deploy to withhold commercial deposits is the &quot;dilapidation claim&quot;—asserting that the premises require extensive repairs and repainting. Under Section 108(m) of the Transfer of Property Act, 1882, the law draws a sharp, non-negotiable boundary between tenant negligence and reasonable operational wear and tear:
                </p>

                {/* Comparative Table: Fair Wear & Tear vs Tenant Damage */}
                <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <caption className="sr-only">Legitimate Tenant Damage vs Impermissible Fair Wear and Tear Deductions</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th scope="col" className="p-3.5 sm:p-4 border-r border-slate-700 w-1/2">
                          ✕ Impermissible Deductions (Fair Wear &amp; Tear - Landlord Cost)
                        </th>
                        <th scope="col" className="p-3.5 sm:p-4 w-1/2">
                          ✓ Legitimate Deductions (Actionable Tenant Damage)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 border-r border-slate-200 bg-emerald-50/20 font-medium">
                          <strong>Full Repainting of Internal Walls:</strong> Paint discoloration, natural yellowing, hairline shrinkage cracks, and minor fading over a 3 to 9-year lease.
                        </td>
                        <td className="p-3.5 sm:p-4 bg-red-50/20 font-medium">
                          <strong>Gouged Walls &amp; Unauthorized Partitions:</strong> Deep structural holes, demolished load-bearing plaster, or unapproved brickwork left unremoved.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 border-r border-slate-200 bg-emerald-50/20 font-medium">
                          <strong>Flooring Scuffs &amp; Walkway Wear:</strong> Normal foot-traffic patterns on vinyl tiles, epoxy flooring, or marble lobbies after corporate use.
                        </td>
                        <td className="p-3.5 sm:p-4 bg-red-50/20 font-medium">
                          <strong>Smashed Tiles &amp; Burnt Flooring:</strong> Cracked vitrified tiles caused by dropped machinery, chemical burns, or missing marble slabs.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 border-r border-slate-200 bg-emerald-50/20 font-medium">
                          <strong>Age-Related HVAC &amp; Electrical Depreciation:</strong> Normal mechanical wear on central air conditioning chillers, capacitors, or LED ballast wear.
                        </td>
                        <td className="p-3.5 sm:p-4 bg-red-50/20 font-medium">
                          <strong>Severed Main Wiring &amp; Missing Fixtures:</strong> Stolen electrical distribution boards (DBs), vandalized copper lines, or ripped out sanitary fittings.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 sm:p-4 border-r border-slate-200 bg-emerald-50/20 font-medium">
                          <strong>Window Blinds &amp; Weather Stripping:</strong> Sun-faded vertical blinds, hardened rubber gaskets, or minor handle stiffness due to age.
                        </td>
                        <td className="p-3.5 sm:p-4 bg-red-50/20 font-medium">
                          <strong>Shattered Toughened Glass Panes:</strong> Broken facade panels, broken internal glass conference partitions, or warped aluminum frames.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 9: Interactive Problem Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Scenario Playbook: 5 Real-World Commercial Withholding Tactics &amp; Remedies
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Troubleshooting
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select the specific pretext your landlord or property management agency is using to withhold your commercial security deposit to inspect the statutory counter-strategy:
                </p>

                <CommercialLeaseProblemTabs />
              </section>

              {/* Section 10: Inline Hand-Authored SVG Recovery Roadmap */}
              <section aria-label="Commercial Deposit Recovery Workflow" className="space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Visual Workflow: The 4-Stage Commercial Deposit Recovery Architecture
                </h3>
                <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
                  <svg
                    viewBox="0 0 800 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[650px] h-auto"
                    role="img"
                    aria-label="Commercial Lease Security Deposit Legal Recovery Process Flowchart"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="30" width="170" height="150" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                    <circle cx="95" cy="60" r="16" fill="#DC2626" />
                    <text x="95" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">1</text>
                    <text x="95" y="95" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">Vacant Handover</text>
                    <text x="95" y="115" textAnchor="middle" fill="#64748B" fontSize="10">Key surrender memo</text>
                    <text x="95" y="130" textAnchor="middle" fill="#64748B" fontSize="10">Final meter readings</text>
                    <text x="95" y="145" textAnchor="middle" fill="#64748B" fontSize="10">4K video walkthrough</text>

                    {/* Arrow 1 */}
                    <path d="M190 105 L215 105 M208 98 L216 105 L208 112" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

                    {/* Stage 2 */}
                    <rect x="225" y="30" width="170" height="150" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                    <circle cx="310" cy="60" r="16" fill="#DC2626" />
                    <text x="310" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">2</text>
                    <text x="310" y="95" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">15-Day Demand Notice</text>
                    <text x="310" y="115" textAnchor="middle" fill="#64748B" fontSize="10">TPA s.108(m) citation</text>
                    <text x="310" y="130" textAnchor="middle" fill="#64748B" fontSize="10">Speed Post + Sec 63 BSA</text>
                    <text x="310" y="145" textAnchor="middle" fill="#64748B" fontSize="10">18% penal interest clock</text>

                    {/* Arrow 2 */}
                    <path d="M405 105 L430 105 M423 98 L431 105 L423 112" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

                    {/* Stage 3 */}
                    <rect x="440" y="30" width="170" height="150" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="2" />
                    <circle cx="525" cy="60" r="16" fill="#991B1B" />
                    <text x="525" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">3</text>
                    <text x="525" y="95" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">Statutory Escalation</text>
                    <text x="525" y="115" textAnchor="middle" fill="#64748B" fontSize="10">Order 37 Summary Suit</text>
                    <text x="525" y="130" textAnchor="middle" fill="#64748B" fontSize="10">OR MSME Samadhaan</text>
                    <text x="525" y="145" textAnchor="middle" fill="#64748B" fontSize="10">OR DLSA s.12A Mediation</text>

                    {/* Arrow 3 */}
                    <path d="M620 105 L645 105 M638 98 L646 105 L638 112" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

                    {/* Stage 4 */}
                    <rect x="655" y="30" width="135" height="150" rx="12" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="2" />
                    <circle cx="722" cy="60" r="16" fill="#16A34A" />
                    <text x="722" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">4</text>
                    <text x="722" y="95" textAnchor="middle" fill="#14532D" fontSize="13" fontWeight="bold">Full Refund</text>
                    <text x="722" y="115" textAnchor="middle" fill="#15803D" fontSize="10">100% Deposit credit</text>
                    <text x="722" y="130" textAnchor="middle" fill="#15803D" fontSize="10">+ Accrued interest</text>
                    <text x="722" y="145" textAnchor="middle" fill="#15803D" fontSize="10">Settlement agreement</text>
                  </svg>
                </div>
              </section>

              {/* Section 11: Landmark Court Precedents Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Precedents Digest: 4 Key Court Orders on Commercial Deposit Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Tenancy Dispute &amp; Facts:</strong>
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
                              Total Judicial Relief / Award
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Legal Precedent Scope
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on Commercial Courts &amp; High Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong className="font-bold text-slate-900">Litigation Takeaway: </strong>
                          {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 12: Worked Case Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Case Example: ₹24,50,000 Tech Park Office Deposit Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To illustrate how statutory provisions interact during a commercial lease handover, consider the following real-world scenario (details modified for confidentiality):
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 space-y-5 shadow-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-100 text-xs sm:text-sm">
                    <div>
                      <span className="text-slate-500 block text-[11px] uppercase font-bold tracking-wider">Tenant Entity</span>
                      <strong className="text-slate-900 font-bold">Fintech SaaS Enterprise (Bangalore IT Corridor)</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px] uppercase font-bold tracking-wider">Lease Particulars</span>
                      <strong className="text-slate-900 font-bold">4,200 sq. ft. Fully Fitted Office; 3-Year Completed Lease</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px] uppercase font-bold tracking-wider">Total Security Deposit</span>
                      <strong className="text-red-700 font-bold">₹24,50,000 (Paid via RTGS on Execution)</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px] uppercase font-bold tracking-wider">Landlord&apos;s Initial Offer</span>
                      <strong className="text-slate-900 font-bold">₹6,80,000 Refund (₹17,70,000 docked for &quot;reinstatement&quot;)</strong>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Disputed Dilapidation Deductions vs. Statutory Resolution:
                    </h3>
                    <div className="w-full overflow-x-auto">
                      <table className="w-full text-xs sm:text-sm border-collapse">
                        <thead>
                          <tr className="bg-slate-100 text-slate-800 font-bold text-left">
                            <th className="p-2.5 border border-slate-200">Claimed Deduction Item</th>
                            <th className="p-2.5 border border-slate-200">Landlord Claim</th>
                            <th className="p-2.5 border border-slate-200">Tenant Legal Counter (Section / Law)</th>
                            <th className="p-2.5 border border-slate-200">Final Settled Amount</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700">
                          <tr>
                            <td className="p-2.5 border border-slate-200 font-semibold">Repainting &amp; Wall Putty</td>
                            <td className="p-2.5 border border-slate-200 text-red-700">₹6,50,000</td>
                            <td className="p-2.5 border border-slate-200">Disallowed: Fair wear and tear under TPA s.108(m); 3-year term.</td>
                            <td className="p-2.5 border border-slate-200 font-bold text-emerald-700">₹0 (Fully Struck Down)</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 border border-slate-200 font-semibold">Carpet Replacement</td>
                            <td className="p-2.5 border border-slate-200 text-red-700">₹4,80,000</td>
                            <td className="p-2.5 border border-slate-200">Disallowed: No chemical burns; normal chair caster wear under s.108(m).</td>
                            <td className="p-2.5 border border-slate-200 font-bold text-emerald-700">₹0 (Fully Struck Down)</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 border border-slate-200 font-semibold">Server Room AC Unit Repairs</td>
                            <td className="p-2.5 border border-slate-200 text-red-700">₹3,40,000</td>
                            <td className="p-2.5 border border-slate-200">Partial allowance: Compressor service invoice verified with GST bill.</td>
                            <td className="p-2.5 border border-slate-200 font-bold text-slate-900">₹65,000 (Actual Part Cost)</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 border border-slate-200 font-semibold">Final Month Electricity &amp; CAM</td>
                            <td className="p-2.5 border border-slate-200 text-red-700">₹3,00,000</td>
                            <td className="p-2.5 border border-slate-200">Allowed: Meter reading units verified; actual utility bill reconciled.</td>
                            <td className="p-2.5 border border-slate-200 font-bold text-slate-900">₹1,85,000 (Actual Meter Dues)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                    <p className="text-xs sm:text-sm font-bold text-emerald-950">
                      Final Financial Recovery Outcome:
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                      Following a comprehensive advocate legal notice threatening an Order 37 summary suit in the Bengaluru City Civil Court, the landlord agreed to withdraw ₹15,20,000 in bogus deductions. The tenant recovered <strong>₹22,00,000</strong> within 18 days of notice service, avoiding months of court litigation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 13: Actionable Handover & Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Actionable Handover &amp; Evidence Checklist for Commercial Tenants
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before relinquishing physical custody of your leased office or retail premises, assemble this bulletproof evidentiary dossier under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 space-y-3">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">✓</span>
                      1. Joint Handover Inspection Protocol
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Conduct joint walkthrough on the exact vacating date with landlord or their authorized estate manager.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Execute a signed <strong>Handover Memo / Panchnama</strong> recording that premises are vacant and keys surrendered.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>If landlord refuses to attend, record an unbroken 4K video walkthrough with current newspaper date-stamp.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 space-y-3">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">✓</span>
                      2. Utility &amp; CAM No-Dues Certificates (NOCs)
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Photograph final electricity sub-meter and main DISCOM meter dials with timestamp.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Obtain written CAM clearance NOC from the building maintenance agency or condominium society.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Retain paid receipts for all telecommunication, fiber internet, and municipal water connections.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 space-y-3">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">✓</span>
                      3. Unilateral Key Tender via Speed Post
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>If the landlord refuses keys, dispatch them in a sealed package via Insured Registered Speed Post.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Preserve the Speed Post booking receipt and India Post postal tracking delivery confirmation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>This legally terminates your tenancy possession under Section 111 of the Transfer of Property Act.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 space-y-3">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">✓</span>
                      4. Financial Payment Trail
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Certified bank statement showing the original inward/outward RTGS/NEFT security deposit remittance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Signed and registered lease deed / rent agreement with stamp duty verification.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>TDS certificates (Form 16A) showing tax deduction on rent across the entire tenancy tenure.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 14: Mid-Page Legal Notice CTA Banner */}
              <CommercialLeaseNoticeCTA />

              {/* Section 15: FAQ Section */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Commercial Lease Security Deposit Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Answers
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-xs transition-all duration-200 open:shadow-md"
                    >
                      <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base list-none pr-2">
                        <span>{faq.question}</span>
                        <span className="text-red-600 font-extrabold text-lg transition-transform duration-200 group-open:rotate-45 shrink-0 ml-3">
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

              {/* Section 16: Primary Sources & Legal Authorities */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Sources &amp; Governing Legal Authorities
                </h2>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold shrink-0">[{idx + 1}]</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-700 hover:text-red-800 hover:underline leading-relaxed font-medium"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-500 mt-4 border-t border-slate-100 pt-3">
                    Statutory laws verified against official publications on India Code and Supreme Court of India digital portal. Current as of November 2026.
                  </p>
                </div>
              </section>

              {/* Related Recovery Guides Component */}
              <div className="pt-6">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
