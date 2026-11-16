import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import Section106TableOfContents from "./Section106TableOfContents";
import Section106ScenarioTabs from "./Section106ScenarioTabs";
import Section106RecoveryCTA from "./Section106RecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/commercial-property-section-106-termination-mesne-profits-suit-guide";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Section 106 TPA Commercial Lease Termination & Mesne Profits";
const PAGE_DESCRIPTION =
  "Terminating commercial leases under TPA Section 106: enforce penal holdover mesne profits, 15-day notices, and fast-track arbitration under Vidya Drolia.";
const H1_TEXT =
  "Terminating Defaulting Commercial Leases Under Section 106 TPA: Enforcing Penal Holdover Mesne Profits & Fast-Track Arbitration (*Vidya Drolia*)";

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
    title: "The Transfer of Property Act, 1882 (Sections 106, 107, 111, 114 & 116) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XX Rule 12, Order XII Rule 6, Order XV-A & Order XXXVIII Rule 5)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c)(vii) & Section 12A — Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "The Arbitration and Conciliation Act, 1996 (Sections 7, 9, 11, 17, 21, 29B & 36)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records, Dispatch Telemetry & Notice Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Registration Act, 1908 (Sections 17 & 49 — Effect of Non-Registration of Leases Exceeding One Year)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court 3-Judge Bench Confirms Landlord-Tenant Disputes Are Arbitrable",
    parties: "Vidya Drolia & Ors. v. Durga Trading Corporation",
    citation: "(2021) 2 SCC 1, Supreme Court of India (3-Judge Bench)",
    date: "Judgment Delivered 14 December 2020",
    facts:
      "A commercial landlord entered into a lease agreement with a tenant regarding commercial godowns and office spaces. The lease contained a bilateral arbitration clause. Upon lease determination, the landlord initiated Section 11 proceedings before the High Court for appointment of an arbitrator. The tenant resisted, citing the Supreme Court rulings in Himangni Enterprises (2017) and Natraj Studios (1981), asserting that all tenancy disputes are inherently non-arbitrable public law matters.",
    holding:
      "A 3-Judge Bench of the Supreme Court categorically overruled Himangni Enterprises (2017). The Court held that landlord-tenant disputes governed by the Transfer of Property Act, 1882 are actions in personam arising from private contract and are fully arbitrable. Only disputes governed by specific welfare State Rent Control Acts—where statute confers exclusive jurisdiction on a Rent Controller and grants statutory tenure protection—are non-arbitrable. Because commercial properties with rentals exceeding statutory rent-control ceilings fall under the TPA, arbitration clauses in commercial leases are 100% enforceable.",
    impact:
      "Commercial landlords, malls, and REITs can bypass multi-year civil court backlogs by enforcing institutional arbitration clauses to secure possession awards and mesne profit decrees within 180 days.",
  },
  {
    title: "Supreme Court on Mesne Profits at Prevailing Market Rent Post-Lease Determination",
    parties: "Atma Ram Properties (P) Ltd. v. Federal Motors (P) Ltd.",
    citation: "(2005) 1 SCC 705, Supreme Court of India",
    date: "Judgment Delivered 10 December 2004",
    facts:
      "Upon termination of tenancy under Section 106 TPA, the tenant suffered an eviction decree but obtained an interim stay of execution from the appellate court. The commercial landlord contended that the tenant could not continue occupying prime commercial property in Connaught Place, New Delhi at decades-old contractual rent while the appeal lingered.",
    holding:
      "The Supreme Court held that once a tenancy is lawfully determined by notice under Section 106 or efflux of time, the tenant's right to occupy ceases. The tenant holding over becomes a tenant at sufferance or unauthorized occupant. The appellate court granting a stay must put the tenant on terms, directing deposit of mesne profits assessed not at the contractual rent, but at the prevailing market rent that the landlord could have realized if the property had been re-let to a third party.",
    impact:
      "Commercial landlords can recover substantial market-rate mesne profits (often 2x to 5x historical contractual rent) from the date of Section 106 termination until actual handover of vacant possession.",
  },
  {
    title: "Supreme Court on Penal Holdover Charges & Unauthorized Occupation Damages",
    parties: "Indian Oil Corporation Ltd. v. Sudera Realty Pvt. Ltd.",
    citation: "2022 SCC OnLine SC 1161, Supreme Court of India",
    date: "Judgment Delivered 06 September 2022",
    facts:
      "The lessee public sector corporation continued in occupation of substantial commercial office space long after the lease expired and a formal notice under Section 106 TPA had been served. The lessor claimed penal damages and mesne profits in terms of the contractual holdover covenant stipulating enhanced compensation.",
    holding:
      "The Supreme Court ruled that a tenant holding over without landlord consent after determination of the lease is liable for damages for use and occupation. The landlord is fully entitled to enforce contractual penal holdover stipulations or market mesne profits. The Court upheld substantial mesne profits along with compound interest, affirming that commercial lessees cannot exploit procedural delays to squat on commercial real estate.",
    impact:
      "Reinforces landlord rights to enforce contractual liquidated holdover clauses (such as 2x or 3x monthly rent) against defaulting corporate tenants refusing to vacate.",
  },
  {
    title: "Supreme Court on Tripartite Rule for Summary Eviction under Order XII Rule 6 CPC",
    parties: "Payal Vision Ltd. v. Radhika Choudhary",
    citation: "(2012) 11 SCC 76, Supreme Court of India",
    date: "Judgment Delivered 20 September 2012",
    facts:
      "In a commercial eviction suit, the defendant tenant admitted the landlord-tenant relationship and the monthly rent of ₹10,500 (exceeding Delhi Rent Control threshold). The service of Section 106 termination notice was verified through postal acknowledgment. The landlord moved under Order XII Rule 6 CPC for an immediate summary decree of possession based on admissions.",
    holding:
      "The Supreme Court established the definitive tripartite test for commercial eviction: in a suit for recovery of possession from a tenant whose tenancy is not protected by the Rent Control Act, the plaintiff landlord is entitled to a decree on admission under Order XII Rule 6 upon establishing three facts: (1) existence of landlord-tenant relationship, (2) monthly rent exceeding the Rent Control Act ceiling, and (3) determination of tenancy by valid service of Section 106 notice. Once these three factors are established, full trial is unnecessary and an immediate decree for possession must follow.",
    impact:
      "Eliminates multi-year trials in commercial courts; landlords can secure summary possession decrees within 3 to 6 months of filing written statements.",
  },
  {
    title: "Supreme Court on Unregistered Commercial Leases Defaulting to Month-to-Month",
    parties: "Park Street Properties (P) Ltd. v. Dipak Kumar Singh & Anr.",
    citation: "(2016) 9 SCC 268, Supreme Court of India",
    date: "Judgment Delivered 09 September 2016",
    facts:
      "The parties entered into an unregistered agreement for a multi-year commercial lease. When the tenant defaulted and the landlord served a 15-day termination notice under Section 106 TPA, the tenant argued that the agreement contained contrary termination covenants that precluded a 15-day exit.",
    holding:
      "The Supreme Court held that under Section 107 of the Transfer of Property Act read with Section 49 of the Registration Act, an unregistered lease for a term exceeding one year is inadmissible to prove the duration of the tenancy. In the absence of a registered instrument, the court must apply the statutory presumption under Section 106 TPA. Consequently, the commercial tenancy is deemed to be a month-to-month lease terminable by 15 days' notice. Unregistered restrictive clauses cannot fetter the landlord's statutory right to terminate.",
    impact:
      "Commercial landlords trapped in poorly drafted or unregistered multi-year lease agreements can lawfully terminate defaulting tenancies with a swift 15-day Section 106 notice.",
  },
  {
    title: "Supreme Court on Acceptance of Rent Post-Notice Not Waiving Termination",
    parties: "Sarup Singh Gupta v. S. Jagdish Singh & Ors.",
    citation: "(2006) 4 SCC 205, Supreme Court of India",
    date: "Judgment Delivered 24 March 2006",
    facts:
      "After serving a Section 106 notice to quit and filing an eviction suit, the landlord accepted rent cheques remitted by the tenant for subsequent months. The tenant claimed that acceptance of rent constituted a waiver of the notice to quit under Section 113 of the Transfer of Property Act, establishing a fresh tenancy.",
    holding:
      "The Supreme Court held that mere acceptance of rent post-termination does not amount to a waiver of the notice to quit under Section 113. A waiver requires proof of bilateral consensus between lessor and lessee to treat the lease as continuing. Where the landlord accepts money towards use-and-occupation charges or maintains the eviction suit, there is no waiver of notice.",
    impact:
      "Landlords can safely deposit rental remittances from squatting tenants post-notice as interim use-and-occupation compensation without jeopardizing pending eviction proceedings.",
  },
];

const FAQS = [
  {
    question: "Are commercial lease disputes legally arbitrable in India after the Vidya Drolia ruling?",
    answer:
      "Yes. The 3-Judge Bench of the Supreme Court in Vidya Drolia v. Durga Trading Corporation (2021) 2 SCC 1 expressly overruled Himangni Enterprises (2017) and confirmed that landlord-tenant disputes governed by the Transfer of Property Act, 1882 are rights in personam and fully arbitrable. Only tenancies governed by specific welfare Rent Control Acts (which grant statutory tenant protection and vest exclusive jurisdiction in Rent Controllers) are non-arbitrable. Commercial properties with rent exceeding statutory rent control thresholds fall under the TPA, making institutional arbitration clauses 100% enforceable for eviction, rent recovery, and mesne profits.",
  },
  {
    question: "What is the statutory notice period under Section 106 of the Transfer of Property Act?",
    answer:
      "Under Section 106(1) TPA, in the absence of a contract to the contrary, a lease of immovable property for agricultural or manufacturing purposes is deemed to be a year-to-year lease terminable by 6 months' notice expiring with the year of tenancy. A lease for any other purpose (including commercial offices, retail shops, warehouses, restaurants, and IT spaces) is deemed to be a month-to-month lease terminable by 15 days' notice. Under the 2002 amendment to Section 106(3), the notice does not need to expire with the tenancy month, provided 15 clear days are granted from the date of receipt.",
  },
  {
    question: "How are mesne profits calculated under CPC Order XX Rule 12 against a holdover commercial tenant?",
    answer:
      "Under Section 2(12) and Order XX Rule 12 of the Code of Civil Procedure, 1908, mesne profits represent the compensation which the person in wrongful possession actually received or might with ordinary diligence have received from the property, together with interest. Following the Supreme Court's ruling in Atma Ram Properties (2005) 1 SCC 705, mesne profits for a holdover commercial tenant are calculated not at the contractual rent, but at the prevailing market rent of comparable commercial premises in the same commercial micro-market from the date of lease termination until actual delivery of vacant possession.",
  },
  {
    question: "Can a commercial tenant claim Rent Control Act protection in Delhi, Mumbai, or Bengaluru?",
    answer:
      "Generally no, because most State Rent Control Acts contain statutory exclusion ceilings for high-value commercial leases. In Delhi, Section 3(c) of the Delhi Rent Control Act, 1958 exempts any premises whose monthly rent exceeds ₹3,500. In Maharashtra, Section 3(1)(b) of the Maharashtra Rent Control Act, 1999 exempts banks, public sector undertakings, and corporations having a paid-up share capital of ₹1 Crore or more. In Karnataka and other states, commercial premises exceeding prescribed floor areas or rent ceilings are excluded, placing disputes under the TPA and Commercial Courts Act, 2015.",
  },
  {
    question: "What happens if a multi-year commercial lease deed is unregistered?",
    answer:
      "Under Section 107 TPA and Section 17 read with Section 49 of the Registration Act, 1908, a commercial lease for any term exceeding one year or reserving a yearly rent must be registered. If unregistered, the Supreme Court ruled in Park Street Properties (P) Ltd. v. Dipak Kumar Singh (2016) that the instrument cannot prove a term lease; the tenancy statutorily defaults to a month-to-month lease. Consequently, the commercial landlord possesses the unrestricted right to terminate the tenancy by serving a simple 15-day notice under Section 106 TPA.",
  },
  {
    question: "Can a landlord secure an interim order directing the tenant to deposit rent during the suit?",
    answer:
      "Yes. Commercial landlords can file an application under Order XV-A (in jurisdictions where enacted, such as Delhi) or Order XXXIX Rule 10 CPC directing the defaulting tenant to deposit all undisputed rent arrears into court and continue depositing monthly market rent pendente lite. If the tenant fails to make the deposit within the court-stipulated timeline (usually 30 days), the court is statutorily empowered to strike off the tenant's written statement and defence, passing a summary decree for eviction.",
  },
  {
    question: "Does accepting rent post-termination waive the Section 106 notice under Section 113 TPA?",
    answer:
      "No, provided the landlord does not demonstrate an intention to treat the lease as subsisting. In Sarup Singh Gupta v. S. Jagdish Singh (2006) 4 SCC 205, the Supreme Court held that mere acceptance of rent after notice to quit does not amount to waiver unless there is bilateral consensus to renew the tenancy. Landlords should accept payments under formal written protest, marking the receipts strictly as 'use-and-occupation charges without prejudice to pending eviction proceedings'.",
  },
  {
    question: "What is the limitation period for filing a commercial eviction suit and claiming mesne profits?",
    answer:
      "Under Article 67 of the Limitation Act, 1963, the limitation period for a landlord to institute a suit for possession of immovable property against a tenant is 12 years from the date the tenancy is determined (e.g., expiry of the 15-day Section 106 notice). However, under Article 51 of the Limitation Act, the limitation for claiming mesne profits or arrears of rent is strictly 3 years from the date the profits accrued. Therefore, landlords must initiate proceedings within 3 years to avoid forfeiting earlier mesne profit accruals.",
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
    name: "Commercial Property Lease Termination, Section 106 TPA & Mesne Profits",
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
      name: "Commercial Landlord Recovery",
      item: `${SITE_URL}/industries/builders-commercial-landlords-coworking-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Section 106 Lease Termination Guide",
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

export default function CommercialPropertySection106GuidePage() {
  const breadcrumbItems = [
    {
      label: "Commercial Landlord Recovery",
      href: "/industries/builders-commercial-landlords-coworking-recovery",
    },
    {
      label: "Section 106 TPA Lease Termination",
      href: PAGE_URL,
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Hero Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Transfer of Property Act s.106</span>
              <span className="text-red-500">&bull;</span>
              <span>Vidya Drolia (2021 SC) Precedent</span>
              <span className="text-red-500">&bull;</span>
              <span>CPC Order XX Rule 12 Mesne Profits</span>
            </div>

            {/* Page H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* Executive Statutory Summary Box (Immediate Hub Link in First 250 Words) */}
            <div
              aria-label="Statutory Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Statutory Summary
              </span>
              <p>
                Commercial landlords, asset managers, and REIT counsels operating under our{" "}
                <Link
                  href="/industries/builders-commercial-landlords-coworking-recovery"
                  className="text-red-400 font-bold hover:underline"
                >
                  Builders, Landlords &amp; Co-Working Recovery Hub
                </Link>{" "}
                possess decisive statutory mechanisms to evict defaulting commercial tenants. Following the landmark Supreme Court 3-Judge Bench ruling in <em>Vidya Drolia v. Durga Trading Corporation (2021)</em>, commercial leases exceeding State Rent Control ceilings are fully arbitrable. Landlords can determine tenancies via 15-day Section 106 TPA notices, secure fast-track sole arbitrator awards, and enforce CPC Order XX Rule 12 penal mesne profits at double market rates against holdover occupants.
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Section 106 TPA Notice to Quit Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Valid</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Arbitration Enforceable under <em>Vidya Drolia</em>
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">2x to 3x</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Market Mesne Profits for Holding Over
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Order XV-A</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Mandatory Rent Deposit or Strike-Off
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar Table of Contents */}
            <Section106TableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Strategic & Statutory Overview */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Creditor-Side Annotated Statute
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    TPA Section 106 Lease Termination: The Strategic Creditor Imperative
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Bypassing Multi-Year Civil Delay via 15-Day Notices, Commercial Courts &amp; Post-<em>Vidya Drolia</em> Arbitration
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    For institutional commercial landlords, Real Estate Investment Trusts (REITs), IT park owners, and mall asset managers, tenant payment default represents a critical asset impairment. When an anchor retail brand, co-working aggregator, or corporate IT tenant stops remitting rent and Common Area Maintenance (CAM) charges, landlords face a compounding liquidity trap: mortgage debt-service covenants continue, GST and property taxes accrue monthly, and valuable commercial square footage remains locked by a non-performing occupier.
                  </p>
                  <p>
                    Historically, commercial eviction in India was burdened by the misconception that landlord-tenant disputes could never be referred to arbitration, forcing property owners into overburdened District Civil Courts. In that traditional civil track, ordinary suits for possession dragged for 4 to 8 years across preliminary summons, protracted cross-examinations, and dilatory appeals.
                  </p>
                  <p>
                    Today, the statutory and judicial landscape has decisively shifted in favor of institutional creditors. Combining three modern legal pillars creates a lethal, fast-track eviction rail:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-800 font-medium">
                    <li>
                      <strong>Section 106 Transfer of Property Act, 1882:</strong> A crisp 15-day statutory notice to quit terminates month-to-month tenancies and unregistered leases, immediately ending lawful possession.
                    </li>
                    <li>
                      <strong>The Supreme Court 3-Judge Bench Ruling in <em>Vidya Drolia</em> (2021):</strong> Categorically confirms that commercial lease disputes governed by the TPA are rights <em>in personam</em> and 100% arbitrable, enabling fast-track sole arbitrator proceedings under the Arbitration and Conciliation Act, 1996.
                    </li>
                    <li>
                      <strong>Section 2(1)(c)(vii) Commercial Courts Act, 2015 &amp; Order XX Rule 12 CPC:</strong> Grants expedited commercial court jurisdiction for immovable property used exclusively in trade or commerce, coupled with summary decrees under Order XII Rule 6 and penal market mesne profits.
                    </li>
                  </ul>
                  <p>
                    If your commercial lease is also subject to lock-in covenants, review our detailed guide on{" "}
                    <Link
                      href="/commercial-lease-lock-in-period-breach-unexpired-rent-recovery"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      Commercial Lease Lock-In Breach &amp; Unexpired Rent Recovery
                    </Link>
                    , or examine promoter remedies under{" "}
                    <Link
                      href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      RERA Section 19 Builder Recovery Against Defaulting Allottees
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 2: Bare Act Statutory Timelines & Limitation Stops */}
              <section
                id="heading-bare-act-timelines"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Statutory Timetable &amp; Limitation Thresholds
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Bare Act Statutory Timelines &amp; Limitation Stops for Eviction
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Mandatory Statutory Windows Under TPA, Commercial Courts Act, Limitation Act &amp; CPC
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-3.5 font-bold rounded-tl-lg">Statutory Step / Forum</th>
                        <th className="p-3 sm:p-3.5 font-bold">Governing Bare Act Section</th>
                        <th className="p-3 sm:p-3.5 font-bold">Statutory Window / Limitation</th>
                        <th className="p-3 sm:p-3.5 font-bold rounded-tr-lg">Creditor Legal Effect &amp; Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">Notice to Quit (Commercial)</td>
                        <td className="p-3 sm:p-3.5 font-mono text-xs">TPA 1882 s.106(1) &amp; s.106(4)</td>
                        <td className="p-3 sm:p-3.5 font-bold text-[#DC2626]">15 Calendar Days</td>
                        <td className="p-3 sm:p-3.5">
                          Determines tenancy. Post-2002 amendment, notice need not expire with the end of the tenancy month; runs from date of verified service.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">Pre-Institution Mediation Stop</td>
                        <td className="p-3 sm:p-3.5 font-mono text-xs">Commercial Courts Act s.12A</td>
                        <td className="p-3 sm:p-3.5 font-bold text-amber-700">3 Months (+2 Months Ext)</td>
                        <td className="p-3 sm:p-3.5">
                          Mandatory unless plaintiff landlord seeks urgent interim relief (Order XXXVIII R.5 bank freeze or Order XXXIX interim injunction) under s.12A(1).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">Rent Deposit Order Pendente Lite</td>
                        <td className="p-3 sm:p-3.5 font-mono text-xs">CPC Order XV-A / Order 39 R.10</td>
                        <td className="p-3 sm:p-3.5 font-bold text-emerald-700">30 Days from Direction</td>
                        <td className="p-3 sm:p-3.5">
                          Defaulting tenant must deposit all accrued arrears and ongoing monthly rent. Failure to deposit empowers court to strike off defense.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">Summary Judgment on Admission</td>
                        <td className="p-3 sm:p-3.5 font-mono text-xs">CPC Order XII R.6 / Order XIII-A</td>
                        <td className="p-3 sm:p-3.5 font-bold text-blue-700">30–60 Days Post-Pleadings</td>
                        <td className="p-3 sm:p-3.5">
                          Immediate decree for possession upon admitting relationship, non-rent-control rental amount, and receipt of Section 106 notice.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">Limitation: Mesne Profits Claim</td>
                        <td className="p-3 sm:p-3.5 font-mono text-xs">Limitation Act 1963 Art. 51</td>
                        <td className="p-3 sm:p-3.5 font-bold text-red-600">3 Years</td>
                        <td className="p-3 sm:p-3.5">
                          Runs from the date profits accrued. Landlords must file within 3 years to preserve rolling claims for market mesne profits.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">Limitation: Possession Suit</td>
                        <td className="p-3 sm:p-3.5 font-mono text-xs">Limitation Act 1963 Art. 67</td>
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">12 Years</td>
                        <td className="p-3 sm:p-3.5">
                          Runs from the date the tenancy is determined by notice to quit or forfeiture under Section 111 TPA.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                  <p className="font-bold">
                    Statutory Alert: Section 106(3) Remedial Cure Provision
                  </p>
                  <p>
                    Under Section 106(3) introduced by the Transfer of Property (Amendment) Act, 2002, a notice to quit shall not be deemed invalid merely because the period mentioned therein falls short of 15 days, provided the suit or proceeding is filed after the expiration of the full 15-day period from the date of receipt of notice.
                  </p>
                </div>
              </section>

              {/* Section 3: 5-Stage Commercial Lease Escalation Rail */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Standard Operating Procedure
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    5-Stage Commercial Lease Default &amp; Mesne Profits Escalation Rail
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Systematic Escalation from Statutory Demand Notice to Attachment and Possession Execution
                  </p>
                </div>

                {/* SVG Decision Tree for Desktop */}
                <div className="hidden md:block w-full overflow-hidden p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <svg
                    viewBox="0 0 800 240"
                    width="800"
                    height="240"
                    className="w-full h-auto"
                    aria-label="5-Stage Commercial Lease Escalation Flowchart"
                  >
                    {/* Stage 1 */}
                    <g transform="translate(10, 20)">
                      <rect width="140" height="200" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                      <circle cx="70" cy="30" r="14" fill="#DC2626" />
                      <text x="70" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">1</text>
                      <text x="70" y="65" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">LEASE &amp; RENT AUDIT</text>
                      <text x="70" y="85" textAnchor="middle" fill="#94A3B8" fontSize="9">Verify Registration</text>
                      <text x="70" y="100" textAnchor="middle" fill="#94A3B8" fontSize="9">Rent Control Exemption</text>
                      <text x="70" y="115" textAnchor="middle" fill="#94A3B8" fontSize="9">Arrears &amp; CAM Audit</text>
                      <rect x="15" y="140" width="110" height="40" rx="6" fill="#0F172A" />
                      <text x="70" y="156" textAnchor="middle" fill="#38BDF8" fontSize="8" fontWeight="bold">TPA s.107 &amp; s.111</text>
                      <text x="70" y="170" textAnchor="middle" fill="#94A3B8" fontSize="8">Threshold Verified</text>
                    </g>

                    {/* Arrow 1-2 */}
                    <path d="M 155 120 L 170 120" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <g transform="translate(170, 20)">
                      <rect width="140" height="200" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                      <circle cx="70" cy="30" r="14" fill="#DC2626" />
                      <text x="70" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">2</text>
                      <text x="70" y="65" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">SECTION 106 NOTICE</text>
                      <text x="70" y="85" textAnchor="middle" fill="#94A3B8" fontSize="9">15-Day Cure &amp; Exit</text>
                      <text x="70" y="100" textAnchor="middle" fill="#94A3B8" fontSize="9">2x Mesne Profits Hook</text>
                      <text x="70" y="115" textAnchor="middle" fill="#94A3B8" fontSize="9">Multi-Channel Service</text>
                      <rect x="15" y="140" width="110" height="40" rx="6" fill="#0F172A" />
                      <text x="70" y="156" textAnchor="middle" fill="#34D399" fontSize="8" fontWeight="bold">BSA 2023 s.63 Proof</text>
                      <text x="70" y="170" textAnchor="middle" fill="#94A3B8" fontSize="8">Email + RPAD Delivery</text>
                    </g>

                    {/* Arrow 2-3 */}
                    <path d="M 315 120 L 330 120" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 3 */}
                    <g transform="translate(330, 20)">
                      <rect width="140" height="200" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                      <circle cx="70" cy="30" r="14" fill="#DC2626" />
                      <text x="70" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">3</text>
                      <text x="70" y="65" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">FORUM ROUTING</text>
                      <text x="70" y="85" textAnchor="middle" fill="#94A3B8" fontSize="9">Arbitration Clause?</text>
                      <text x="70" y="100" textAnchor="middle" fill="#94A3B8" fontSize="9">Vidya Drolia Inception</text>
                      <text x="70" y="115" textAnchor="middle" fill="#94A3B8" fontSize="9">Commercial Court</text>
                      <rect x="15" y="140" width="110" height="40" rx="6" fill="#0F172A" />
                      <text x="70" y="156" textAnchor="middle" fill="#FBBF24" fontSize="8" fontWeight="bold">s.2(1)(c)(vii) Route</text>
                      <text x="70" y="170" textAnchor="middle" fill="#94A3B8" fontSize="8">Fast-Track Division</text>
                    </g>

                    {/* Arrow 3-4 */}
                    <path d="M 475 120 L 490 120" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 4 */}
                    <g transform="translate(490, 20)">
                      <rect width="140" height="200" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                      <circle cx="70" cy="30" r="14" fill="#DC2626" />
                      <text x="70" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">4</text>
                      <text x="70" y="65" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">INTERIM SECURITY</text>
                      <text x="70" y="85" textAnchor="middle" fill="#94A3B8" fontSize="9">Order XV-A Deposit</text>
                      <text x="70" y="100" textAnchor="middle" fill="#94A3B8" fontSize="9">Order 39 R.10 Relief</text>
                      <text x="70" y="115" textAnchor="middle" fill="#94A3B8" fontSize="9">Section 17 Tribunal</text>
                      <rect x="15" y="140" width="110" height="40" rx="6" fill="#0F172A" />
                      <text x="70" y="156" textAnchor="middle" fill="#F87171" fontSize="8" fontWeight="bold">Strike-Off Penalty</text>
                      <text x="70" y="170" textAnchor="middle" fill="#94A3B8" fontSize="8">Bank Account Freezes</text>
                    </g>

                    {/* Arrow 4-5 */}
                    <path d="M 635 120 L 650 120" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 5 */}
                    <g transform="translate(650, 20)">
                      <rect width="140" height="200" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                      <circle cx="70" cy="30" r="14" fill="#DC2626" />
                      <text x="70" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">5</text>
                      <text x="70" y="65" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">DECREE &amp; EXECUTION</text>
                      <text x="70" y="85" textAnchor="middle" fill="#94A3B8" fontSize="9">Order XII R.6 Summary</text>
                      <text x="70" y="100" textAnchor="middle" fill="#94A3B8" fontSize="9">Mesne Profits Award</text>
                      <text x="70" y="115" textAnchor="middle" fill="#94A3B8" fontSize="9">Bailiff Possession</text>
                      <rect x="15" y="140" width="110" height="40" rx="6" fill="#0F172A" />
                      <text x="70" y="156" textAnchor="middle" fill="#4ADE80" fontSize="8" fontWeight="bold">Order XXI Execution</text>
                      <text x="70" y="170" textAnchor="middle" fill="#94A3B8" fontSize="8">Vacant Possession</text>
                    </g>
                  </svg>
                </div>

                {/* Mobile Stacked Step Cards */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">Stage 1</span>
                    <strong className="text-sm block">Lease Deed &amp; Rent Control Audit</strong>
                    <p className="text-xs text-slate-300">
                      Verify lease registration under s.107 TPA, calculate outstanding rent/CAM arrears, and confirm exclusion from State Rent Control ceilings.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">Stage 2</span>
                    <strong className="text-sm block">15-Day Section 106 Statutory Notice</strong>
                    <p className="text-xs text-slate-300">
                      Serve Advocate Demand Notice incorporating 15-day termination, forfeiture under s.111(g), and double market rent penal mesne profits warning.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">Stage 3</span>
                    <strong className="text-sm block">Forum Routing: Arbitration vs Commercial Court</strong>
                    <p className="text-xs text-slate-300">
                      If the lease contains an arbitration clause, invoke under Section 21 citing <em>Vidya Drolia</em>; otherwise file a Commercial Suit under s.2(1)(c)(vii).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">Stage 4</span>
                    <strong className="text-sm block">Order XV-A Rent Deposit &amp; Defense Strike-Off</strong>
                    <p className="text-xs text-slate-300">
                      Seek immediate directions for monthly market rent deposits pendente lite. Non-compliance results in the court striking off the tenant&apos;s defense.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">Stage 5</span>
                    <strong className="text-sm block">Summary Eviction Decree &amp; Order XXI Possession</strong>
                    <p className="text-xs text-slate-300">
                      Obtain summary decree under Order XII Rule 6 CPC / arbitral award under Section 31; execute warrants of possession via Court Bailiff and police aid.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Landmark Judicial Precedents */}
              <section
                id="heading-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Supreme Court Jurisprudence
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Landmark Precedents: Vidya Drolia and Commercial Lease Arbitration
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Binding Supreme Court Authority Overruling Himangni Enterprises &amp; Mandating Market Mesne Profits
                  </p>
                </div>

                <div className="space-y-5">
                  {COURT_PRECEDENTS.map((precedent, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#DC2626] space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626]">
                          {precedent.citation}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">{precedent.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900">
                        {precedent.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-700">
                        Parties: <span className="text-slate-900 font-semibold">{precedent.parties}</span>
                      </p>
                      <div className="text-xs sm:text-sm text-slate-600 space-y-2">
                        <p>
                          <strong>Fact Context:</strong> {precedent.facts}
                        </p>
                        <p>
                          <strong>Judicial Holding:</strong> {precedent.holding}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-200 flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-800">Creditor Takeaway:</span>
                        <p className="text-xs text-slate-800 font-medium">{precedent.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: Mesne Profits & Holding Over Law */}
              <section
                id="heading-mesne-profits-law"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    CPC Order XX Rule 12 &amp; TPA Section 116
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    CPC Order XX Rule 12: Enforcing Penal Holdover Mesne Profits
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Converting Defaulting Lessees into Trespassers at Sufferance Liable for Double Market Rent
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    A critical weapon for commercial lessors is the statutory conversion of a lawful tenant into an unlawful occupier. Under Section 111(h) of the Transfer of Property Act, 1882, the expiration of a valid 15-day notice under Section 106 terminates the leasehold estate. From that exact expiry date, the lessee ceases to be a tenant.
                  </p>
                  <p>
                    If the tenant continues in physical possession without the lessor&apos;s explicit consent to renew, the tenant becomes a <strong>tenant at sufferance</strong>. Under Indian jurisprudence (reaffirmed in <em>R.V. Bhupal Prasad v. State of A.P. (1995) 5 SCC 698</em>), a tenant at sufferance is virtually equivalent to a trespasser whose possession is unlawful.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                    <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                      <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                        Contractual Rent Ceiling Dissolved
                      </span>
                      <p className="text-xs text-slate-200">
                        Once terminated, the contractual rent no longer limits the landlord&apos;s recovery. Under CPC Order XX Rule 12, the lessor is entitled to claim mesne profits based on the <strong>current prevailing market rental value</strong> of the premises.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                        Penal Liquidated Damages Upheld
                      </span>
                      <p className="text-xs text-slate-200">
                        Clauses stipulating that holdover tenants shall pay 2x to 3x monthly rent for unauthorized detention are fully enforceable under Contract Act s.74, provided they reasonably approximate commercial disruption and loss of re-letting opportunities.
                      </p>
                    </div>
                  </div>
                  <p>
                    To determine market mesne profits during the inquiry under Order XX Rule 12(1)(ba) CPC, courts routinely appoint a Local Commissioner or accept certified registered lease deeds of comparable units within the same commercial building or business park.
                  </p>
                </div>
              </section>

              {/* Section 6: Interactive 4 Commercial Failure Modes */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Interactive Commercial Scenario Explorer
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Commercial Tenant Default Scenarios: Strategic Decision Matrix
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a Commercial Failure Mode to Inspect Specific Statutory Traps &amp; Landlord Countermeasures
                  </p>
                </div>

                <Section106ScenarioTabs />
              </section>

              {/* Section 7: Debtor Defense Pre-Emption Matrix */}
              <section
                id="heading-defense-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Litigation Defense Neutralization
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Debtor Defense Pre-Emption: Eliminating Tenant Dilatory Tactics
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Pre-Empting Every Standard Technical Objection Raised by Commercial Tenant Advocates
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-3.5 font-bold rounded-tl-lg">Debtor Defense Pleading</th>
                        <th className="p-3 sm:p-3.5 font-bold">Debtor Dilatory Objective</th>
                        <th className="p-3 sm:p-3.5 font-bold">Statutory &amp; Judicial Rebuttal</th>
                        <th className="p-3 sm:p-3.5 font-bold rounded-tr-lg">Court Action / Order</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          &ldquo;Notice did not expire with tenancy month&rdquo;
                        </td>
                        <td className="p-3 sm:p-3.5">Invalidate notice under pre-2002 law to reset the clock.</td>
                        <td className="p-3 sm:p-3.5">
                          Section 106(3) TPA (2002 Amendment) validates notice expiring on any day, provided 15 clear days elapsed before filing suit.
                        </td>
                        <td className="p-3 sm:p-3.5 font-bold text-emerald-700">Objection summarily dismissed</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          &ldquo;Unregistered lease bars landlord from evicting&rdquo;
                        </td>
                        <td className="p-3 sm:p-3.5">Claim non-maintainability of suit under Section 49 Registration Act.</td>
                        <td className="p-3 sm:p-3.5">
                          <em>Park Street Properties (2016 SC)</em>: Unregistered lease defaults to month-to-month under s.106, making 15-day exit fully valid.
                        </td>
                        <td className="p-3 sm:p-3.5 font-bold text-emerald-700">Tenancy treated as month-to-month</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          &ldquo;Tenancy disputes cannot be arbitrated&rdquo;
                        </td>
                        <td className="p-3 sm:p-3.5">Rely on overruled <em>Himangni Enterprises</em> to derail Section 11/arbitration.</td>
                        <td className="p-3 sm:p-3.5">
                          <em>Vidya Drolia (2021 SC 3-Judge Bench)</em>: Expressly overruled <em>Himangni</em>; TPA commercial lease disputes ARE arbitrable.
                        </td>
                        <td className="p-3 sm:p-3.5 font-bold text-emerald-700">Sole arbitrator appointed under s.11</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          &ldquo;Landlord waived notice by accepting rent&rdquo;
                        </td>
                        <td className="p-3 sm:p-3.5">Plead renewal of tenancy under Section 113 / 116 TPA.</td>
                        <td className="p-3 sm:p-3.5">
                          <em>Sarup Singh Gupta (2006 SC)</em>: Acceptance of rent under protest as use-and-occupation charges does not waive notice to quit.
                        </td>
                        <td className="p-3 sm:p-3.5 font-bold text-emerald-700">Waiver plea rejected; suit proceeds</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          &ldquo;Mandatory 5-month mediation under s.12A&rdquo;
                        </td>
                        <td className="p-3 sm:p-3.5">Stall commercial suit via compulsory pre-institution mediation.</td>
                        <td className="p-3 sm:p-3.5">
                          Section 12A(1) Commercial Courts Act: Accompanied by application for urgent interim relief (Order 38 R.5 / Order 39) bypasses mediation.
                        </td>
                        <td className="p-3 sm:p-3.5 font-bold text-emerald-700">Suit instituted immediately</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: Worked Financial Calculation Box */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Financial Recovery Ledger
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Worked Recovery Calculation: ₹2.13 Cr Commercial Office Default
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Specimen 10,000 sq. ft. Grade-A Corporate Tenant Default in Gurugram Cyber City / BKC
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <p className="text-sm font-bold text-slate-200">Asset: 10,000 sq. ft. Commercial Floor Plate</p>
                      <p className="text-xs text-slate-400">Contractual Rent: ₹15,00,000/mo (₹150/sq.ft.) • Security Deposit: ₹45,00,000 (3 Mos)</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-950 text-emerald-400 border border-emerald-800">
                      Total Net Landlord Claim: ₹2,13,00,000
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">1. Pre-Termination Rent Arrears (4 Months @ ₹15,00,000/mo):</span>
                      <span className="font-mono font-bold text-slate-100">₹60,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">2. CAM, HVAC &amp; Electricity Arrears (4 Months @ ₹4,50,000/mo):</span>
                      <span className="font-mono font-bold text-slate-100">₹18,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        3. Section 106 Notice Expiry Date:
                      </span>
                      <span className="font-mono font-bold text-amber-400">Tenancy Determined on 31 Oct</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        4. Unauthorized Holdover Period (6 Months Post-Termination):
                      </span>
                      <span className="font-mono font-bold text-red-400">Holdover Squatting</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        5. Penal Holdover Mesne Profits (2x Market Rate = ₹30,00,000/mo × 6 Mos):
                      </span>
                      <span className="font-mono font-bold text-emerald-400">₹1,80,00,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700 font-bold text-slate-100">
                      <span>Gross Landlord Recovery Claim:</span>
                      <span className="font-mono text-base text-white">₹2,58,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/80 text-slate-400">
                      <span>Less: Security Deposit Held &amp; Adjusted:</span>
                      <span className="font-mono font-bold text-slate-300">(-) ₹45,00,000</span>
                    </div>
                    <div className="flex justify-between pt-3 text-base sm:text-lg font-black text-emerald-400">
                      <span>Net Execution-Ready Money &amp; Possession Decree:</span>
                      <span className="font-mono text-xl sm:text-2xl text-emerald-300">₹2,13,00,000</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                    Plus statutory pendente lite and future interest at 18% p.a. under Section 31(7) of the Arbitration Act or Section 34 CPC, along with taxable party-and-party legal costs. Need to compute statutory interest across multiple delayed commercial invoices? Access our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-red-400 font-bold hover:underline"
                    >
                      Statutory Commercial Interest Calculator
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 9: BSA 2023 Evidence Checklist */}
              <section
                id="heading-bsa-evidence"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Bharatiya Sakshya Adhiniyam Compliance
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    BSA 2023 Section 63 Evidence Dossier &amp; Notice Service Protocol
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Ensuring Unassailable Service Proof Under Section 106(4) TPA &amp; Electronic Evidence Standards
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Under Section 106(4) of the Transfer of Property Act, 1882, every notice to quit must be in writing, signed by or on behalf of the person giving it, and either sent by post or tendered personally to the party, family member, or servant, or affixed to a conspicuous part of the property.
                  </p>
                  <p>
                    Under the modern evidentiary framework of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</strong>, electronic service via official email and corporate WhatsApp creates definitive proof of delivery. Commercial landlords must compile the following unassailable proof bundle:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="text-[11px] font-bold text-[#DC2626] uppercase tracking-wider block">
                        Item 1 • Registered Speed Post RPAD
                      </span>
                      <p className="text-xs text-slate-600">
                        Postal dispatch receipts, India Post tracking consignment reports bearing &ldquo;Item Delivered&rdquo; or &ldquo;Door Locked / Refused&rdquo; (deemed delivery under General Clauses Act s.27).
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="text-[11px] font-bold text-[#DC2626] uppercase tracking-wider block">
                        Item 2 • Server SMTP &amp; Message Audit Logs
                      </span>
                      <p className="text-xs text-slate-600">
                        Email server SMTP delivery logs and Message-ID audit trails sent to the tenant&apos;s contractual notice email address, accompanied by a BSA Section 63 electronic certificate.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="text-[11px] font-bold text-[#DC2626] uppercase tracking-wider block">
                        Item 3 • On-Site Affixation Panchnama
                      </span>
                      <p className="text-xs text-slate-600">
                        If tenant locks the premises, physical affixation of the Section 106 notice to the entrance door, documented via geotagged timestamped high-resolution videography and two independent witnesses.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="text-[11px] font-bold text-[#DC2626] uppercase tracking-wider block">
                        Item 4 • Dilapidation &amp; Inventory Survey
                      </span>
                      <p className="text-xs text-slate-600">
                        Architect/surveyor inspection report documenting unauthorized alterations or structural damage, preserving claims under our{" "}
                        <Link
                          href="/send-a-legal-notice/recover-money-from-tenant-who-damaged-property"
                          className="text-[#DC2626] font-bold hover:underline"
                        >
                          Property Damage Recovery Action
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Dual-Track B2B Conversion Funnel */}
              <section
                id="heading-cta"
                className="scroll-mt-28 space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Institutional Legal Recovery
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Fast-Track Commercial Eviction &amp; Institutional Recovery Desk
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Deploy Advocate-Drafted Section 106 Notices Today or Onboard Enterprise Default Portfolios
                  </p>
                </div>

                <Section106RecoveryCTA />
              </section>

              {/* Section 11: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Commercial Property FAQ
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions: Section 106 Leases &amp; Mesne Profits
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers for Asset Managers, In-House Counsels &amp; Commercial Lessors
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 sm:p-5 transition-colors open:bg-white open:border-slate-300"
                    >
                      <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                          &#9660;
                        </span>
                      </summary>
                      <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Statutory Sources & Primary Authorities */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Verified Citations &amp; Bare Acts
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Statutory Citations, Bare Acts &amp; Primary Judicial Authorities
                  </h2>
                </div>

                <div className="text-xs sm:text-sm text-slate-600 space-y-2.5">
                  <p className="font-semibold text-slate-800">
                    Primary Statutory Codes (India Code &amp; Legislative Department):
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-[#DC2626] hover:underline font-medium"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <p>
                      <strong>Advocate Verification Note:</strong> Authored and reviewed by Adv. Anuj Anand Malik (Advocate &amp; Founder, AMA Legal Solutions). Content grounded strictly in statutory bare act provisions of the Transfer of Property Act, 1882, Commercial Courts Act, 2015, and the landmark Supreme Court 3-Judge Bench ratio in <em>Vidya Drolia v. Durga Trading Corporation (2021) 2 SCC 1</em>.
                    </p>
                    {/* // TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                  </div>
                </div>
              </section>

              {/* Additional Contextual Internal Links Section */}
              <section className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Related Real Estate &amp; Lease Recovery Workflows
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs font-semibold">
                  <Link
                    href="/industries/builders-commercial-landlords-coworking-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    IND-08 Property &amp; Co-Working Hub &rarr;
                  </Link>
                  <Link
                    href="/legal-notice-to-tenant-for-unpaid-rent-eviction"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    Unpaid Rent Eviction Notice Guide &rarr;
                  </Link>
                  <Link
                    href="/commercial-lease-lock-in-period-breach-unexpired-rent-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    Commercial Lock-In Period Breach Recovery &rarr;
                  </Link>
                  <Link
                    href="/coworking-managed-office-enterprise-seat-lock-in-default-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    Co-Working &amp; Enterprise Seat Default Recovery &rarr;
                  </Link>
                  <Link
                    href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    RERA Section 19 Allottee Default Recovery &rarr;
                  </Link>
                  <Link
                    href="/templates/society-maintenance-recovery-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    Society &amp; CAM Arrears Notice Template &rarr;
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Component */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
