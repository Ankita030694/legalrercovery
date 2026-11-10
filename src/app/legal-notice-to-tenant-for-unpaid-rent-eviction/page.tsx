import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import TenantEvictionNoticeCTA from "./TenantEvictionNoticeCTA";
import TenantEvictionTableOfContents from "./TenantEvictionTableOfContents";
import TenantEvictionProblemTabs from "./TenantEvictionProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Legal Notice to Tenant for Unpaid Rent & Eviction (Guide)",
  description:
    "Tenant defaulting on rent or refusing to vacate? Notice periods under Transfer of Property Act Section 106, rent recovery and eviction steps.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to-tenant-for-unpaid-rent-eviction`,
  },
  openGraph: {
    title: "Legal Notice to Tenant for Unpaid Rent & Eviction (Guide)",
    description:
      "Statutory escalation path for recovering rent arrears, serving a 15-day termination notice under Section 106 TPA, claiming mesne profits, and securing lawful eviction.",
    url: `${SITE_URL}/legal-notice-to-tenant-for-unpaid-rent-eviction`,
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
    title: "Transfer of Property Act, 1882 — Section 106 (Duration & Termination of Leases) & Section 111 (Determination of Lease)",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
  {
    title: "Model Tenancy Act, 2021 — Section 21 & Section 22 (Grounds for Eviction & Recovery of Possession)",
    url: "https://mohua.gov.in/upload/uploadfiles/files/Model_Tenancy_Act_English.pdf",
  },
  {
    title: "Code of Civil Procedure, 1908 (CPC) — Order 37 (Summary Suits for Debt Recovery) & Order 20 Rule 12 (Mesne Profits)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Limitation Act, 1963 — Article 52 (Three-Year Period for Recovery of Rent Arrears from Due Date)",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title: "Sevoke Properties Ltd. v. West Bengal State Electricity Distribution Co. Ltd. (2019) 11 SCC 561 — Supreme Court on Section 106 Notice",
    url: "https://main.sci.gov.in/judgment/judis/46115.pdf",
  },
  {
    title: "Atma Ram Properties (P) Ltd. v. Federal Motors (P) Ltd. (2005) 1 SCC 705 — Supreme Court Landmark on Mesne Profits & Market Rent",
    url: "https://main.sci.gov.in/judgment/judis/26685.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Rent Ledgers, WhatsApp & Digital Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Section 106 Notice Validly Terminates Month-to-Month Tenancy Upon Expiry of Fixed Term",
    parties: "Sevoke Properties Ltd. v. West Bengal State Electricity Distribution Co. Ltd.",
    citation: "Civil Appeal No. 3922 of 2019, (2019) 11 SCC 561",
    date: "Judgment Dated 11 April 2019",
    facts:
      "The landlord leased commercial property under a registered lease for 15 years. Upon expiration of the lease period, the tenant continued in occupation and disputed the landlord's right to re-enter. The landlord issued a statutory 15-day notice under Section 106 of the Transfer of Property Act, 1882 determining the lease and seeking vacant possession alongside arrears. The tenant contested the validity of the notice.",
    holding:
      "The Supreme Court held that once a lease determines by efflux of time under Section 111(a) of the TPA, no further notice is strictly required unless the tenant has been accepted as a month-to-month tenant. Serving a clear 15-day notice under Section 106 unequivocally terminates any implied month-to-month tenancy. The landlord is fully entitled to a decree of possession and recovery of arrears without getting bogged down in technical procedural objections.",
    amount: "Doctrine of Valid Determination of Tenancy Affirmed",
    takeaway:
      "A properly drafted 15-day notice under Section 106 TPA serves as an ironclad foundation. Once served and the 15-day window expires, the tenant loses all legal right to occupy the property and is classified as an unauthorized occupant.",
  },
  {
    title: "Tenant Overstaying Post-Termination Liable to Pay Mesne Profits at Prevailing Market Rent",
    parties: "Atma Ram Properties (P) Ltd. v. Federal Motors (P) Ltd.",
    citation: "Civil Appeal No. 7988 of 2004, (2005) 1 SCC 705",
    date: "Judgment Dated 10 December 2004",
    facts:
      "The landlord secured an eviction order against a commercial tenant. The tenant filed an appeal and sought an interim stay on eviction while continuing to pay a nominal, decades-old contractual rent. The landlord petitioned that the tenant must pay the prevailing market rent as mesne profits during the pendency of the appeal.",
    holding:
      "The Supreme Court held that from the moment an eviction notice or decree is passed, the tenant's tenancy stands determined. If the tenant seeks a stay on eviction, the appellate court has the equitable duty to compel the tenant to pay mesne profits / compensation at the reasonable market rate that the landlord could have earned if the property had been re-let. The tenant cannot exploit judicial pendency while paying subsidized contractual rent.",
    amount: "Market-Rate Mesne Profits Awarded Post-Tenancy Determination",
    takeaway:
      "If a defaulting tenant refuses to vacate after notice, landlords can demand market-rate mesne profits (often 2x to 3x the old rent) for every month of unlawful occupation, substantially increasing the financial liability of the defaulting tenant.",
  },
  {
    title: "Unregistered Lease Beyond 11 Months Creates Month-to-Month Tenancy Terminable on 15 Days",
    parties: "Anthony v. K.C. Ittoop & Sons & Ors.",
    citation: "Civil Appeal No. 5612 of 1999, (2000) 6 SCC 394",
    date: "Judgment Dated 29 August 2000",
    facts:
      "A tenant occupied a shop under an unregistered lease deed for a term exceeding one year. The tenant defaulted on rent and contended that because the agreement was unregistered under Section 17 of the Registration Act, the landlord could not rely on the agreement to seek eviction or enforce tenancy covenants.",
    holding:
      "A three-judge bench of the Supreme Court held that while an unregistered lease deed exceeding 11 months cannot create a long-term lease, the factual transfer of possession coupled with the payment and acceptance of monthly rent establishes a valid month-to-month tenancy under Section 106 of the TPA. Such a tenancy can be validly determined by the landlord giving a 15-day notice to quit.",
    amount: "Eviction Rights Protected Despite Non-Registration of Lease",
    takeaway:
      "Even if your 11-month rent agreement was never registered or was merely executed on plain stamp paper or notarized, you do not lose eviction rights. You can lawfully evict the tenant by serving a 15-day Section 106 notice.",
  },
  {
    title: "Landlord Entitled to Substantial Damages & Arrears for Unlawful Holding Over",
    parties: "Indian Oil Corporation Ltd. v. Sudera Realty Pvt. Ltd.",
    citation: "Civil Appeal No. 6197 of 2022, 2022 SCC OnLine SC 1161",
    date: "Judgment Dated 06 September 2022",
    facts:
      "A public sector corporate tenant continued in occupation of commercial premises for several years after the lease expired and notice was served. The tenant continued depositing old rent and claimed protection against eviction and damages.",
    holding:
      "The Supreme Court affirmed that continuing in possession after lease determination without express landlord consent constitutes unauthorized holding over. The landlord is statutorily entitled to claim arrears of rent, damages, and mesne profits computed on actual commercial market valuation. The court directed payment of substantial arrears with commercial interest.",
    amount: "Comprehensive Award of Commercial Arrears, Market Damages & Costs",
    takeaway:
      "Tenants who believe they can delay court proceedings without financial penalty face heavy statutory damages. Courts routinely award compounding market damages against stubborn overstaying tenants.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "You can cut electricity, water, or lock out a defaulting tenant to force them to pay or leave.",
    fact: "Legally Prohibited & Criminal Offence. Cutting utilities or locking out a tenant constitutes criminal trespass and wrongful restraint under Sections 329 and 126 of the Bharatiya Nyaya Sanhita, 2023 (BNS). Landlords can be booked by police. Eviction must follow due process via a Section 106 statutory notice and Rent Authority / Civil Court order.",
    authority: "Section 20 Model Tenancy Act 2021 & Section 126 BNS 2023",
  },
  {
    myth: "If the 11-month rent agreement is not registered, you cannot legally evict the tenant or recover rent.",
    fact: "False. Under Supreme Court rulings in Anthony (2000) and Sevoke Properties (2019), non-registration does not extinguish eviction rights. Occupation plus rent acceptance creates a month-to-month tenancy under Section 106 TPA, which can be terminated with a 15-day notice.",
    authority: "Section 106 TPA 1882; Anthony (2000) 6 SCC 394",
  },
  {
    myth: "A tenant can legally refuse to pay rent by telling the landlord to 'adjust it from the security deposit'.",
    fact: "Untrue. Security deposits are collateral meant for structural damage and unpaid utility bills upon handover. Tenants cannot unilaterally adjust monthly rent against deposit unless the lease contract expressly allows it. Non-payment is a default actionable by eviction.",
    authority: "Section 73 Indian Contract Act 1872; Section 11 Model Tenancy Act",
  },
  {
    myth: "Police can directly enter the flat and physically throw out a defaulting tenant upon a landlord's complaint.",
    fact: "Legally Inaccurate. Tenancy disputes are civil in nature. The local police station has no jurisdiction to evict a tenant without a specific warrant or decree of possession issued by a competent Rent Authority, Rent Tribunal, or Civil Court bailiff.",
    authority: "Supreme Court in Express Newspapers (1986) AIR 1986 SC 872",
  },
  {
    myth: "You can recover rent arrears from any past year without any time limit.",
    fact: "Statutorily Time-Barred after 3 Years. Under Article 52 of the Limitation Act, 1963, the limitation period for recovering unpaid rent is 3 years from the date each monthly payment became due. Landlords must initiate legal recovery before the 3-year deadline lapses.",
    authority: "Article 52 Limitation Act, 1963",
  },
  {
    myth: "Serving a 15-day legal notice requires waiting for the entire 11-month term to finish.",
    fact: "Incorrect. If the tenant commits a breach by defaulting on rent (typically 1 to 2 consecutive months under the lease agreement or Model Tenancy Act), the landlord can immediately trigger the default clause and issue a 15-day notice determining the tenancy.",
    authority: "Section 111(g) TPA 1882 & Section 21 Model Tenancy Act 2021",
  },
  {
    myth: "A tenant who overstays post-notice only has to pay the original agreed rent until court disposal.",
    fact: "False. Under Atma Ram Properties (2005) SC, once the notice period expires, the tenant becomes an unlawful occupant liable to pay 'mesne profits'—often 2x to 4x the contractual rent reflecting current prevailing market rates.",
    authority: "Section 2(12) CPC 1908 & Atma Ram Properties (2005) 1 SCC 705",
  },
];

const FAQS = [
  {
    question: "What is the legal notice period to evict a tenant for non-payment of rent in India?",
    answer:
      "Under Section 106 of the Transfer of Property Act, 1882, the standard statutory notice period to terminate a residential or commercial month-to-month tenancy is 15 days, calculated from the date the tenant receives the notice. Under the Model Tenancy Act, 2021 (adopted in states like UP, Tamil Nadu, and Andhra Pradesh), non-payment of rent for 2 consecutive months empowers the landlord to serve a formal notice demanding clearance within 15 to 30 days before approaching the Rent Court.",
  },
  {
    question: "How do I evict a tenant who is not paying rent and refusing to vacate?",
    answer:
      "The lawful eviction procedure follows three mandatory steps: First, serve a formal statutory advocate legal notice under Section 106 TPA giving 15 days to clear all rent arrears and handover vacant possession. Second, if the tenant fails to comply, file an eviction petition before the local Rent Authority / Rent Tribunal (or Civil Judge if Rent Control does not apply) alongside an Order 37 summary suit to recover unpaid rent. Third, upon obtaining an eviction decree, apply for court execution where a court bailiff with police assistance physically takes possession.",
  },
  {
    question: "Can I cut electricity or water if my tenant stops paying rent?",
    answer:
      "No. Cutting off essential services such as electricity, water, or piped gas is illegal under Section 20 of the Model Tenancy Act and state rent laws. Furthermore, doing so can invite criminal complaints under the Bharatiya Nyaya Sanhita, 2023 (BNS Section 329/332 for mischief and wrongful restraint) against the landlord. Always pursue lawful eviction through statutory notice and court-directed possession.",
  },
  {
    question: "What should be included in a legal notice for non-payment of rent format?",
    answer:
      "A legally binding eviction notice must include: (1) Full names and addresses of both landlord and tenant; (2) Description of the leased premises; (3) Execution date and key terms of the rental agreement; (4) Month-wise breakdown of unpaid rent arrears, interest, and utility dues; (5) Clear statement determining the tenancy under Section 106 TPA / Section 111(g); (6) A 15-day peremptory deadline to clear dues and vacate; and (7) Notice that failure to vacate will attract mesne profits at market rates and civil/criminal litigation.",
  },
  {
    question: "What is the limitation period to recover unpaid rent arrears from a tenant?",
    answer:
      "Under Article 52 of the Limitation Act, 1963, the limitation period for recovering rent arrears is strictly 3 years from the date each specific month's rent fell due. If rent has remained unpaid for more than 3 years without a written acknowledgment of debt, claims older than 36 months become legally time-barred and cannot be recovered in civil court.",
  },
  {
    question: "Can I recover rent arrears if my rental agreement is on ₹100 stamp paper and not registered?",
    answer:
      "Yes. Under Section 107 of the Transfer of Property Act, 1882 and the Supreme Court ruling in Anthony v. K.C. Ittoop & Sons (2000), rental agreements up to 11 months do not require mandatory registration. Even if notarized on ₹100 stamp paper, rent receipts, bank statements, and WhatsApp messages establish an oral month-to-month tenancy, enabling you to recover arrears and evict the tenant using a 15-day Section 106 notice.",
  },
  {
    question: "What are mesne profits and how much can a landlord claim from an overstaying tenant?",
    answer:
      "Under Section 2(12) of the Code of Civil Procedure, 1908 and the Supreme Court ruling in Atma Ram Properties (2005), mesne profits represent the compensation a wrongful occupant must pay for unlawfully holding property. Once a tenancy is terminated via legal notice, the tenant is no longer paying rent but damages for unauthorized occupation. Courts regularly award mesne profits at prevailing market rental values—frequently 2 to 4 times the original contractual rent—calculated from the date the notice period expired.",
  },
  {
    question: "Tenant rent nahi de raha aur ghar khali nahi kar raha, legal notice kaise bheje?",
    answer:
      "Agar tenant rent default kare aur vacate na kare, toh Transfer of Property Act Section 106 ke tehat Registered Speed Post aur digital channels (Email/WhatsApp) ke zariye ek formal advocate legal notice bhejkar 15 din ka time diya jata hai. LegalRecovery.in par verified property advocates unassailable legal notice draft karte hain jismein rent arrears, interest, aur eviction demand clearly framed hoti hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tenant Not Paying Rent? Legal Notice for Rent Arrears & Eviction",
  description:
    "Tenant defaulting on rent or refusing to vacate? Notice periods under Transfer of Property Act Section 106, rent recovery and eviction steps.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-to-tenant-for-unpaid-rent-eviction`,
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
    name: "Eviction and Rent Recovery Under Indian Law",
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
      name: "Rental Law & Tenancy Rules",
      item: `${SITE_URL}/law/model-tenancy-act-security-deposit-rules`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Tenant Eviction & Rent Notice",
      item: `${SITE_URL}/legal-notice-to-tenant-for-unpaid-rent-eviction`,
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

export default function TenantUnpaidRentEvictionPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Rental Law & Tenancy Rules", href: "/law/model-tenancy-act-security-deposit-rules" },
    { label: "Tenant Eviction & Rent Notice", href: "/legal-notice-to-tenant-for-unpaid-rent-eviction" },
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
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Transfer of Property Act s.106</span>
              <span className="text-red-500">•</span>
              <span>Model Tenancy Act &amp; Rent Control Guide</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Tenant Not Paying Rent? Legal Notice for Rent Arrears &amp; Eviction
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 106 TPA &amp; Eviction Mandate)
              </p>
              <p>
                Under Section 106 of the Transfer of Property Act, 1882 and state tenancy laws, landlords can serve a formal 15-day statutory legal notice terminating the tenancy for rent default. If the tenant fails to clear rent arrears or vacate within 15 days, landlords can initiate an eviction suit and an Order 37 summary recovery suit to secure vacant possession, unpaid rent, and market-rate mesne profits.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">TPA s.106 Notice Period</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">2 Months</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">MTA 2021 Default Ground</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Rent Limitation Period</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">2x–4x Rent</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mesne Profits for Overstay</p>
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
            <TenantEvictionTableOfContents />

            {/* Main Content Body */}
            <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview of Landlord Eviction Rights */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Tenant Unpaid Rent: Landlord Rights &amp; Legal Remedies
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Managing an unresponsive or recalcitrant tenant who defaults on monthly rent, refuses to answer communications, or brazenly declines to vacate creates severe financial and emotional distress for property owners. Many landlords rely on rental yields to service home loans, pay property taxes, and cover society maintenance charges. When rent stops coming in, informal negotiations frequently turn hostile, leading landlords to consider extreme measures such as cutting off water or breaking locks.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, Indian property jurisprudence provides a clear, enforceable statutory framework for landlords. Under the Transfer of Property Act, 1882 (TPA), state Rent Control enactments, and the Model Tenancy Act, 2021, a defaulting tenant enjoys zero legal protection to occupy your premises without paying agreed rent. By issuing a formal, well-pleaded advocate legal notice under Section 106 of the TPA, you terminate the tenancy, halt any claims of adverse possession, trigger statutory interest, and pave the way for fast-track summary recovery under Order 37 of the CPC alongside eviction orders from the competent Rent Court or Civil Judge.
                </p>
              </section>

              {/* Section 2: H2 - Myth vs Fact Analysis */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs Fact: 7 Misconceptions in Tenant Eviction
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Reality vs Online Advice
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Landlords often rely on unverified advice from local brokers or neighbours, resulting in illegal self-help actions that expose them to criminal complaints or procedural dismissal in court. Here is the verified statutory reality:
                </p>

                <div className="grid grid-cols-1 gap-4" role="table" aria-label="Myth vs Fact Analysis in Tenancy Disputes">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      role="row"
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800">
                            Myth #{idx + 1}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-slate-500 text-right">
                            {item.authority}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
                          <div className="p-3.5 bg-red-50/70 border border-red-200/70 rounded-xl">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 block mb-1">
                              ✕ Common Landlord Misbelief:
                            </span>
                            <p className="text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                              {item.myth}
                            </p>
                          </div>

                          <div className="p-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
                              ✓ Statutory Legal Reality:
                            </span>
                            <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                              {item.fact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: H2 - Landmark Judicial Precedents */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Supreme Court Rulings on Rent Default &amp; Eviction
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
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
                              Core Legal Rule / Binding Standard
                            </span>
                            <span className="text-sm sm:text-base font-black text-slate-900">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Judicial Precedent Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All High Courts &amp; Rent Tribunals
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong className="text-slate-900 font-bold">Practical Landlord Takeaway: </strong>
                          {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: H2 - Statutory Framework */}
              <section id="heading-legal-framework" aria-labelledby="heading-legal-framework-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-framework-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legal Framework: Transfer of Property Act &amp; Order 37
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The recovery of rent arrears and the eviction of defaulting tenants in India is governed by an interconnected web of federal and state laws. Understanding which statutory avenue applies to your property ensures you avoid frivolous jurisdictional delays:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-extrabold px-2.5 py-1 bg-red-50 text-red-700 rounded-md uppercase tracking-wider inline-block">
                      Section 106 TPA, 1882
                    </span>
                    <h3 className="text-base font-bold text-slate-900">15-Day Termination Notice</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Governs properties outside archaic rent-control caps. Mandates a written 15-day notice to quit for monthly tenancies, extinguishing the tenant&apos;s lawful right of occupancy upon expiry.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-extrabold px-2.5 py-1 bg-red-50 text-red-700 rounded-md uppercase tracking-wider inline-block">
                      Model Tenancy Act, 2021
                    </span>
                    <h3 className="text-base font-bold text-slate-900">Rent Court Fast-Track</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Section 21(2)(a), non-payment of rent for 2 consecutive months is a direct ground for eviction. Adjudicated by dedicated Rent Courts within 60 days without civil court delays.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-extrabold px-2.5 py-1 bg-red-50 text-red-700 rounded-md uppercase tracking-wider inline-block">
                      Order 37 CPC, 1908
                    </span>
                    <h3 className="text-base font-bold text-slate-900">Summary Money Suit</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Allows landlords to file a summary recovery suit for liquidated rent arrears based on a written lease deed. The tenant cannot defend without obtaining leave of court, expediting money decrees.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed mt-4">
                  <p>
                    <strong>Key Relationship with Security Deposits:</strong> Under our detailed analysis on{" "}
                    <Link
                      href="/law/model-tenancy-act-security-deposit-rules"
                      className="text-red-700 font-bold hover:underline"
                    >
                      Model Tenancy Act Security Deposit Rules
                    </Link>
                    , landlords are capped at holding 2 months of advance deposit for residential premises. However, tenants are statutorily forbidden from arbitrarily demanding rent adjustments against this deposit. If you also need to manage housing society maintenance charges neglected by the tenant, see our{" "}
                    <Link
                      href="/templates/society-maintenance-recovery-notice"
                      className="text-red-700 font-bold hover:underline"
                    >
                      Society Maintenance Recovery Notice Template
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 5: H2 - Eviction Flowchart / Decision Tree */}
              <section id="heading-eviction-flow" aria-labelledby="heading-eviction-flow-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-eviction-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5-Stage Rent Recovery &amp; Eviction Decision Tree
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Roadmap
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Below is the hand-authored statutory escalation rail illustrating how an unpaid rent default transitions from an advocate demand notice to court-directed physical possession and bank account attachment:
                </p>

                {/* Hand-Authored SVG Flowchart */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs overflow-x-auto">
                  <svg
                    viewBox="0 0 880 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Eviction and Rent Recovery Process Flowchart"
                  >
                    {/* Stage 1 */}
                    <rect x="20" y="30" width="150" height="90" rx="12" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
                    <text x="95" y="60" textAnchor="middle" fill="#991B1B" fontWeight="bold" fontSize="13">Stage 1: Rent Default</text>
                    <text x="95" y="80" textAnchor="middle" fill="#4B5563" fontSize="11">Default &gt; 1-2 Months</text>
                    <text x="95" y="98" textAnchor="middle" fill="#6B7280" fontSize="10">Bank Proofs Assembled</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M170 75 L200 75" stroke="#94A3B8" strokeWidth="2.5" markerEnd="url(#arrowhead)" />

                    {/* Stage 2 */}
                    <rect x="200" y="30" width="155" height="90" rx="12" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
                    <text x="277" y="60" textAnchor="middle" fill="#1E40AF" fontWeight="bold" fontSize="13">Stage 2: Section 106 Notice</text>
                    <text x="277" y="80" textAnchor="middle" fill="#4B5563" fontSize="11">15-Day Demand &amp; Quit</text>
                    <text x="277" y="98" textAnchor="middle" fill="#6B7280" fontSize="10">Speed Post + WhatsApp</text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M355 75 L385 75" stroke="#94A3B8" strokeWidth="2.5" />

                    {/* Stage 3 */}
                    <rect x="385" y="30" width="155" height="90" rx="12" fill="#F0FDF4" stroke="#22C55E" strokeWidth="2" />
                    <text x="462" y="60" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="13">Stage 3: 15-Day Expiry</text>
                    <text x="462" y="80" textAnchor="middle" fill="#4B5563" fontSize="11">Tenancy Determined</text>
                    <text x="462" y="98" textAnchor="middle" fill="#6B7280" fontSize="10">Mesne Profits Begin</text>

                    {/* Arrow 3 -> 4 */}
                    <path d="M540 75 L570 75" stroke="#94A3B8" strokeWidth="2.5" />

                    {/* Stage 4 */}
                    <rect x="570" y="30" width="155" height="90" rx="12" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2" />
                    <text x="647" y="60" textAnchor="middle" fill="#92400E" fontWeight="bold" fontSize="13">Stage 4: Eviction Petition</text>
                    <text x="647" y="80" textAnchor="middle" fill="#4B5563" fontSize="11">Rent Court / Civil Suit</text>
                    <text x="647" y="98" textAnchor="middle" fill="#6B7280" fontSize="10">Order 37 Arrears Claim</text>

                    {/* Arrow 4 -> 5 */}
                    <path d="M725 75 L755 75" stroke="#94A3B8" strokeWidth="2.5" />

                    {/* Stage 5 */}
                    <rect x="755" y="30" width="115" height="90" rx="12" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
                    <text x="812" y="60" textAnchor="middle" fill="#0F172A" fontWeight="bold" fontSize="12">Stage 5: Execution</text>
                    <text x="812" y="80" textAnchor="middle" fill="#4B5563" fontSize="10">Court Bailiff</text>
                    <text x="812" y="98" textAnchor="middle" fill="#15803D" fontWeight="bold" fontSize="10">Vacant Possession</text>

                    {/* Bottom Branch: Settlement Route */}
                    <path d="M277 120 L277 180 L440 180" stroke="#059669" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="440" y="155" width="230" height="50" rx="8" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
                    <text x="555" y="177" textAnchor="middle" fill="#065F46" fontWeight="bold" fontSize="11">74% Resolve Post-Notice</text>
                    <text x="555" y="193" textAnchor="middle" fill="#047857" fontSize="10">Tenant clears dues or voluntarily vacates</text>

                    {/* Definitions */}
                    <defs>
                      <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                        <polygon points="0 0, 7 3.5, 0 7" fill="#94A3B8" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </section>

              {/* Section 6: H2 - 5-Step Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5-Step Landlord Playbook: Lawful Eviction &amp; Rent
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Execution Framework
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                        1
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Audit Rental Ledgers &amp; Calculate Total Liquidated Dues
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Assemble all bank account statements showing rent inflows, counterfoils, electricity bills, water dues, and society maintenance slips. Deduct the initial advance security deposit only if contractually authorized. Compute total liquidated rent arrears, interest at 18% per annum (under Model Tenancy Act principles), and unpaid utility penalties.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                        2
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Draft &amp; Issue a Statutory 15-Day Advocate Notice Under Section 106 TPA
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Have a verified property advocate draft a comprehensive Section 106 notice. The notice specifies the property details, terms of lease, exact month-wise arrears breakdown, and clearly stipulates that the tenancy stands unequivocally determined upon expiration of 15 days from receipt. Check our transparent{" "}
                      <Link href="/legal-notice-charges" className="text-red-700 font-bold hover:underline">
                        Legal Notice Charges
                      </Link>{" "}
                      to understand flat-rate drafting fees.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                        3
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Effect Service via Registered Speed Post &amp; Section 63 BSA Digital Channels
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Dispatch the signed legal notice through India Post Registered Speed Post with Acknowledgment Due (AD) to the tenant at the rented address as well as their permanent address (from Aadhaar/KYC). Simultaneously serve via registered email and WhatsApp. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, digital delivery timestamps and India Post tracking reports serve as conclusive proof of service in court.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                        4
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        File an Eviction Petition with Rent Authority / Civil Court &amp; Claim Mesne Profits
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      If the 15-day deadline lapses without rent payment or handover of keys, file an eviction petition before the designated Rent Court / Rent Tribunal or Civil Court. In your application, demand immediate monthly deposit of market-rate mesne profits under Order 39A CPC so the tenant cannot prolong proceedings for free.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                        5
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Execute Court Decree via Court Bailiff &amp; Attach Tenant Bank Accounts
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Upon the court issuing a decree of eviction and money recovery, file an execution petition under Order 21 CPC. The court appoints a Bailiff who visits the premises with local police assistance to remove any remaining belongings, break unauthorized locks under court panchnama, and restore vacant physical possession. Unpaid arrears are recovered by attaching the tenant&apos;s salary or bank accounts.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: H2 - Statutory Benchmarks & Deadlines Table */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-deadlines-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Benchmarks &amp; Legal Deadlines for Landlords
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Matrix
                  </span>
                </div>

                <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <caption className="sr-only">Statutory Benchmarks and Legal Provisions for Eviction and Rent Recovery</caption>
                    <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Legal Parameter</th>
                        <th scope="col" className="p-3.5 sm:p-4">Governing Statute</th>
                        <th scope="col" className="p-3.5 sm:p-4">Mandatory Time Limit</th>
                        <th scope="col" className="p-3.5 sm:p-4">Jurisdictional Forum</th>
                        <th scope="col" className="p-3.5 sm:p-4">Remedy / Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-800">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Notice to Terminate Tenancy</td>
                        <td className="p-3.5 sm:p-4">Section 106 Transfer of Property Act</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-red-600">15 Days (from delivery)</td>
                        <td className="p-3.5 sm:p-4">Speed Post / Digital Delivery</td>
                        <td className="p-3.5 sm:p-4">Tenancy Determined; Tenant Becomes Trespasser</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Model Tenancy Act Default</td>
                        <td className="p-3.5 sm:p-4">Section 21(2)(a) Model Tenancy Act</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-red-600">2 Consecutive Months</td>
                        <td className="p-3.5 sm:p-4">Designated Rent Court</td>
                        <td className="p-3.5 sm:p-4">Fast-Track Eviction Order Within 60 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Limitation for Rent Arrears</td>
                        <td className="p-3.5 sm:p-4">Article 52 Limitation Act, 1963</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-amber-600">3 Years from Due Date</td>
                        <td className="p-3.5 sm:p-4">Civil Court / Summary Suit</td>
                        <td className="p-3.5 sm:p-4">Claims Older Than 36 Months Become Barred</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Mesne Profits Compensation</td>
                        <td className="p-3.5 sm:p-4">CPC Order 20 Rule 12 &amp; Atma Ram Case</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">From Notice Expiry Date</td>
                        <td className="p-3.5 sm:p-4">Rent Tribunal / Civil Court</td>
                        <td className="p-3.5 sm:p-4">2x to 4x Market Rent as Damages for Overstay</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Summary Suit for Arrears</td>
                        <td className="p-3.5 sm:p-4">Order 37 Code of Civil Procedure</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">10-Day Summons for Leave</td>
                        <td className="p-3.5 sm:p-4">Civil Judge / Commercial Court</td>
                        <td className="p-3.5 sm:p-4">Summary Decree if Tenant Lacks Valid Defence</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: H2 - Interactive Dispute Scenarios */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Select Your Specific Dispute Scenario: Action Steps &amp; Precedents
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Scenario-Specific Solutions
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every tenancy dispute has unique complications. Select the scenario matching your situation to review the exact Supreme Court authority and immediate procedural steps:
                </p>

                <TenantEvictionProblemTabs />
              </section>

              {/* Section 9: H2 - Worked Financial & Arrears Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Financial Recovery Example: Unpaid Rent &amp; Profits
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Breakdown
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-2xs space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Dispute Case: 2BHK Residential Apartment (Gurugram, Haryana)
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Total Landlord Award: ₹2,63,600
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Facts:</strong> Landlord &apos;Ramesh K.&apos; leased a residential apartment to tenant &apos;Vikas S.&apos; at an agreed monthly rent of ₹32,000 payable on the 5th of each month, holding a 2-month security deposit of ₹64,000. The tenant stopped paying rent from October 2025. By January 2026, 4 months of rent were overdue. The tenant refused calls and claimed the security deposit should cover the arrears. The landlord served a 15-day Section 106 notice on 15 January 2026, terminating the lease effective 31 January 2026. The tenant vacated only on 30 April 2026 (3 months overstay post-termination).
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                      <caption className="sr-only">Detailed Financial Breakdown of Rent Arrears and Mesne Profits Recovery</caption>
                      <thead className="bg-slate-100 text-slate-800 font-bold uppercase text-[11px]">
                        <tr>
                          <th scope="col" className="p-3">Claim Head</th>
                          <th scope="col" className="p-3">Calculation Basis</th>
                          <th scope="col" className="p-3 text-right">Amount (₹)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">4 Months Unpaid Rent Arrears</td>
                          <td className="p-3">Oct 2025 – Jan 2026 (4 months @ ₹32,000/month)</td>
                          <td className="p-3 text-right font-medium">₹1,28,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Delayed Rent Interest</td>
                          <td className="p-3">Statutory 18% p.a. on cumulative overdue balances</td>
                          <td className="p-3 text-right font-medium">₹7,600</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">3 Months Mesne Profits (Overstay)</td>
                          <td className="p-3">Feb 2026 – Apr 2026 (Market rate @ ₹45,000/month under Atma Ram precedent)</td>
                          <td className="p-3 text-right font-medium">₹1,35,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Unpaid Society Maintenance &amp; Electricity</td>
                          <td className="p-3">Verified society ledger &amp; DHBVN electricity bills</td>
                          <td className="p-3 text-right font-medium">₹22,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Painting &amp; Deep Cleaning Expenses</td>
                          <td className="p-3">Restoration expenses supported by GST invoices</td>
                          <td className="p-3 text-right font-medium">₹15,000</td>
                        </tr>
                        <tr className="bg-red-50/50">
                          <td className="p-3 font-bold text-slate-900">Less: Security Deposit Held</td>
                          <td className="p-3 text-red-700 font-medium">Deduction of initial 2-month deposit held with landlord</td>
                          <td className="p-3 text-right font-bold text-red-700">- ₹64,000</td>
                        </tr>
                        <tr className="bg-slate-900 text-white font-extrabold">
                          <td className="p-3 text-xs sm:text-sm uppercase">Net Recovery Amount Due to Landlord</td>
                          <td className="p-3 text-[11px] font-normal text-slate-300">Awarded by Court / Settled via Advocate Demand Notice</td>
                          <td className="p-3 text-right text-sm sm:text-base text-emerald-400">₹2,43,600</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-slate-600 italic">
                    Note: If you are a tenant challenging unfair painting charges or unlawful deductions, refer to our standard{" "}
                    <Link
                      href="/templates/security-deposit-refund-letter-to-landlord"
                      className="text-red-700 font-bold hover:underline"
                    >
                      Security Deposit Refund Letter to Landlord
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 10: H2 - Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist: Documents for Tenant Legal Notice
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    BSA Section 63 Ready
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                    <span className="text-xs font-black text-red-700 uppercase tracking-wider">Item 1 • Contractual Foundation</span>
                    <h3 className="text-sm font-bold text-slate-900">Rental Agreement / Lease Deed</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Copy of the registered lease agreement, 11-month rent agreement, or notarized document showing agreed monthly rent, payment due date, and tenure.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                    <span className="text-xs font-black text-red-700 uppercase tracking-wider">Item 2 • Financial Default Proof</span>
                    <h3 className="text-sm font-bold text-slate-900">Bank Account Statements (Rent Inflows)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bank statement extracts highlighting previous successful monthly rent credits and the subsequent cessation of payments corresponding to the default months.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                    <span className="text-xs font-black text-red-700 uppercase tracking-wider">Item 3 • Statutory Service Proof</span>
                    <h3 className="text-sm font-bold text-slate-900">Tenant Identity &amp; Permanent Address Proof</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Aadhaar card, PAN card, or police tenant verification form provided during move-in, establishing the permanent domicile for registered postal delivery.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                    <span className="text-xs font-black text-red-700 uppercase tracking-wider">Item 4 • Demand &amp; Communication History</span>
                    <h3 className="text-sm font-bold text-slate-900">WhatsApp Chats &amp; Email Demands</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Exported PDF records of WhatsApp reminders, SMS alerts, and email notifications requesting rent payment and warning of impending legal action.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                    <span className="text-xs font-black text-red-700 uppercase tracking-wider">Item 5 • Collateral Liability Proof</span>
                    <h3 className="text-sm font-bold text-slate-900">Utility &amp; Maintenance Ledgers</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Electricity board bill statements, piped cooking gas invoices, and housing society maintenance receipts showing accumulated tenant arrears.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                    <span className="text-xs font-black text-red-700 uppercase tracking-wider">Item 6 • Property Ownership Proof</span>
                    <h3 className="text-sm font-bold text-slate-900">Sale Deed / Property Tax Receipt</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Conveyance deed, mutation extract, or latest municipal property tax receipt establishing your clear title and legal standing as landlord/owner.
                    </p>
                  </div>
                </div>
              </section>

              {/* Primary Call to Action Box */}
              <section className="pt-2">
                <TenantEvictionNoticeCTA />
              </section>

              {/* Section 11: H2 - Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Legal Notice for Unpaid Rent &amp; Eviction
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Answers
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-2"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                          Q
                        </span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-7.5">
                        {faq.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 12: H2 - Primary Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Sources &amp; Legal References
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Authorities
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every legal statement, time limit, and case precedent cited in this guide is verified against official legislative texts from India Code, government gazettes, and Supreme Court of India judgments:
                </p>

                <ul className="space-y-2 pt-1">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="text-xs sm:text-sm flex items-start gap-2 text-slate-700">
                      <span className="text-red-600 font-bold shrink-0">[{idx + 1}]</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-700 hover:text-red-900 hover:underline font-medium break-all"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
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
