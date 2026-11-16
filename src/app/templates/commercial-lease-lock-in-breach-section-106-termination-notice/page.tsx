import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CommercialLeaseTerminationCTA from "./CommercialLeaseTerminationCTA";
import CommercialLeaseTerminationTOC from "./CommercialLeaseTerminationTOC";
import CommercialLeaseTerminationWorkspace from "./CommercialLeaseTerminationWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Commercial Lease Section 106 Termination & Lock-In Notice",
  description:
    "Commercial landlord notice format under TPA s.106: recover rent arrears, CAM, uncredited 194-I TDS, lock-in CapEx clawback & mesne profits.",
  alternates: {
    canonical: `${SITE_URL}/templates/commercial-lease-lock-in-breach-section-106-termination-notice`,
  },
  openGraph: {
    title: "Commercial Lease Section 106 Termination & Lock-In Notice",
    description:
      "Commercial landlord notice format under TPA s.106: recover rent arrears, CAM, uncredited 194-I TDS, lock-in CapEx clawback & mesne profits.",
    url: `${SITE_URL}/templates/commercial-lease-lock-in-breach-section-106-termination-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Commercial Lease Section 106 Termination and Lock-In Notice Format",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Lease Section 106 Termination & Lock-In Notice",
    description:
      "Commercial landlord notice format under TPA s.106: recover rent arrears, CAM, uncredited 194-I TDS, lock-in CapEx clawback & mesne profits.",
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
    title: "Transfer of Property Act, 1882 — Section 106 (Duration & Termination of Leases) & Section 111 (Determination)",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
  {
    title: "Indian Contract Act, 1872 — Section 73 (Breach of Contract) & Section 74 (Liquidated Damages / Lock-In Penalty)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Income Tax Act, 1961 — Section 194-I (Rent TDS), Section 205 (Bar Against Direct Demand) & Section 276B (Criminal Penalties)",
    url: "https://www.indiacode.nic.in/handle/123456789/2435",
  },
  {
    title: "Code of Civil Procedure, 1908 — Order XV-A (Striking Off Defense for Non-Deposit of Rent) & Section 2(12) (Mesne Profits)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of Electronic Records: Email & WhatsApp Service Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Central Goods and Services Tax Act, 2017 — Section 50 (Interest on Delayed Tax Payment on Commercial Leasing SAC 997212)",
    url: "https://www.indiacode.nic.in/handle/123456789/2121",
  },
];

const CASE_CITATIONS = [
  {
    title: "Vidya Drolia v. Durga Trading Corp. — Landlord-Tenant Disputes are Fully Arbitrable Under TPA",
    parties: "Vidya Drolia and Ors. v. Durga Trading Corporation",
    citation: "(2021) 2 SCC 1 (Supreme Court of India - 3-Judge Bench)",
    date: "Judgment Dated 14 December 2020",
    facts:
      "A landlord leased commercial premises under a registered agreement with an arbitration clause. When the tenant defaulted and the lease was terminated under Section 106 TPA, the tenant argued tenancy disputes are non-arbitrable under Himangni Enterprises.",
    holding:
      "Overruling previous discordant rulings, the Supreme Court held that landlord-tenant disputes governed by the Transfer of Property Act, 1882 are fully arbitrable. Only tenancy disputes specifically covered under specialized state Rent Control Legislations (where exclusive jurisdiction is conferred upon Rent Controllers) are non-arbitrable. Commercial premises outside statutory rent ceilings can be evicted and dues recovered through arbitration.",
    amount: "Arbitral Tribunal Empowered to Award Eviction & Recovery",
    takeaway:
      "Commercial landlords whose registered lease contains an arbitration clause can bypass congested Civil Courts and seek rapid eviction, unexpired lock-in damages, and mesne profits before an Arbitral Tribunal under the Arbitration and Conciliation Act, 1996.",
  },
  {
    title: "Kailash Nath Associates v. DDA — Proof of Genuine Pre-Estimate of Loss for Section 74 Lock-In Claims",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136 (Supreme Court of India)",
    date: "Judgment Dated 09 January 2015",
    facts:
      "A contractual covenant provided for automatic forfeiture of earnest money and pre-determined liquidated damages upon termination. The claimant sought forfeiture without establishing any actual loss suffered.",
    holding:
      "The Supreme Court clarified Section 74 of the Indian Contract Act, 1872: where damage or loss is difficult or impossible to prove, the court may award the genuine pre-estimated liquidated sum. However, where actual loss can be proved, the claimant must lead evidence of actual loss suffered up to the contractual ceiling. In commercial leases, unamortized fit-out CapEx and rent loss during the vacant re-leasing gestation period constitute recoverable damages.",
    amount: "Liquidated Damages Enforceable Upon Evidence of Re-Leasing Gestation Loss",
    takeaway:
      "When issuing a lock-in breach notice, never rely on a bare penalty clause. Quantify the unamortized fit-out capital expenditure, broker re-leasing costs, and idle rent gestation period to ensure full recovery under Section 74.",
  },
  {
    title: "Order XV-A CPC: Striking Off Corporate Tenant's Defense for Non-Deposit of Rent",
    parties: "Aparna Ashram v. State of Haryana & Ors. / Delhi HC Order XV-A Jurisprudence",
    citation: "AIR 2000 SC 2062 / (2012) 188 DLT 738 (Delhi High Court)",
    date: "Settled Procedural Precedent",
    facts:
      "A corporate tenant continued in possession of prime commercial office space after formal termination of tenancy, raising vexatious preliminary objections while withholding admitted and market rent.",
    holding:
      "The High Court held that the primary object of Order XV-A of the Code of Civil Procedure is to prevent the tenant from enjoying commercial property without paying rent during the pendency of eviction proceedings. The Court has mandatory powers to direct immediate deposit of all arrears of rent, CAM, and taxes, and if the tenant fails to comply, its defense must be struck off without conducting a trial.",
    amount: "Immediate Direction to Deposit Full Arrears Under Pain of Eviction Decree",
    takeaway:
      "Serving a formal Section 106 notice that explicitly invokes Order XV-A pre-empts tenant delays in court. If the corporate tenant enters appearance without depositing admitted rent, summary eviction follows.",
  },
];

const FAQS = [
  {
    question: "What is the mandatory notice period under Section 106 TPA for commercial premises?",
    answer:
      "Under Section 106(1) of the Transfer of Property Act, 1882, in the absence of a contract to the contrary, a lease of immovable property for commercial, office, retail, or warehouse purposes (any purpose other than agriculture or manufacturing) is deemed to be a lease from month to month, terminable on the part of either lessor or lessee by 15 days' notice expiring with the end of a month of tenancy. If the registered lease specifies a longer cure period (e.g., 30 or 60 days), the contractual period prevails.",
  },
  {
    question: "Can a commercial landlord recover unpaid rent if the corporate tenant deducted 10% TDS but failed to deposit it?",
    answer:
      "Yes. Under Section 194-I of the Income Tax Act, 1961, tenants paying commercial rent exceeding ₹2,40,000 annually must deduct 10% TDS. While Section 205 protects the landlord from direct recovery by the Income Tax Department if tax was deducted, if the tenant fails to deposit it into the Government Treasury, no Form 26AS/AIS credit appears. The landlord's statutory legal notice demands immediate tax remittance with Section 201(1A) interest, delivery of Form 16A, and warns of Section 276B criminal prosecution.",
  },
  {
    question: "Can a landlord claim the entire unexpired lock-in rent if the tenant vacates early?",
    answer:
      "Under Section 74 of the Indian Contract Act, 1872 and the Supreme Court doctrine in Kailash Nath Associates v. DDA (2015), unexpired lock-in rent is recoverable as liquidated damages provided it represents a genuine pre-estimate of loss. The landlord is entitled to recover the unamortized capital expenditure (CapEx) spent on customized fit-outs, brokerage fees for re-leasing, and lease rent for the actual vacant period until a replacement tenant is onboarded, minus the security deposit set-off.",
  },
  {
    question: "What are mesne profits under Section 2(12) CPC and when do they become payable?",
    answer:
      "Mesne profits are the profits which a person in wrongful possession actually received or might with ordinary diligence have received from the property, together with interest. When a commercial lease is lawfully terminated under Section 106 TPA, the tenant's possession becomes that of an unauthorized trespasser or tenant-at-sufferance. The landlord is entitled to claim mesne profits, typically benchmarked at prevailing market rental rates or contractual holdover clauses (often 2x the last drawn rent).",
  },
  {
    question: "How does Order XV-A of the CPC fast-track commercial eviction and rent recovery?",
    answer:
      "Order XV-A of the Code of Civil Procedure empowers the civil court in an eviction suit to direct the defaulting defendant-tenant to deposit all admitted and accrued rent, CAM charges, and mesne profits in court on the first hearing. If the corporate tenant fails to make the deposit within the court-stipulated timeline, the court strikes off the tenant's written statement and passes a summary decree of eviction.",
  },
  {
    question: "Is arbitration legally maintainable for commercial lease eviction and rent arrears?",
    answer:
      "Yes. The Supreme Court 3-Judge Bench in Vidya Drolia v. Durga Trading Corp. (2021) 2 SCC 1 settled that landlord-tenant disputes governed by the Transfer of Property Act, 1882 are fully arbitrable. Unless the premises fall under a state Rent Control Act with an exclusive statutory tribunal, commercial landlords with an arbitration clause in their registered lease can invoke Section 21 and seek eviction and monetary awards before a Sole Arbitrator.",
  },
];

export default function CommercialLeaseTerminationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/templates/commercial-lease-lock-in-breach-section-106-termination-notice#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/templates/commercial-lease-lock-in-breach-section-106-termination-notice`,
        },
        headline:
          "Advocate-Drafted Commercial Lease Termination (Section 106 TPA), Lock-In Rent, CAM & Unpaid 194-I TDS Recovery Notice Format",
        description:
          "Downloadable commercial landlord legal notice template covering rent arrears, CAM/DG bills, missing Form 26AS TDS, lock-in CapEx clawback & penal holdover mesne profits.",
        url: `${SITE_URL}/templates/commercial-lease-lock-in-breach-section-106-termination-notice`,
        inLanguage: "en-IN",
        datePublished: "2026-11-16T09:00:00+05:30",
        dateModified: "2026-11-16T09:00:00+05:30",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder",
          worksFor: {
            "@type": "Organization",
            name: "AMA Legal Solutions",
          },
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
        mainEntityOfPage: `${SITE_URL}/templates/commercial-lease-lock-in-breach-section-106-termination-notice`,
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/templates/commercial-lease-lock-in-breach-section-106-termination-notice#creativework`,
        name: "Commercial Lease Section 106 Termination & Lock-In Rent Recovery Notice Template",
        headline: "Advocate-Vetted Commercial Tenancy Legal Notice Formats (Word / PDF / Copy)",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
        },
        datePublished: "2026-11-16",
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/templates/commercial-lease-lock-in-breach-section-106-termination-notice#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/templates/commercial-lease-lock-in-breach-section-106-termination-notice#breadcrumbs`,
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
            name: "Templates",
            item: `${SITE_URL}/templates`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Commercial Lease Section 106 Termination Notice",
            item: `${SITE_URL}/templates/commercial-lease-lock-in-breach-section-106-termination-notice`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>P1 Commercial Template &bull; TPA §106 &bull; Contract Act §74 &bull; CPC Order XV-A</span>
          </div>

          {/* Exact Verbatim H1 (Matches ARTICLE_SCHEMA.headline verbatim) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Advocate-Drafted Commercial Lease Termination (Section 106 TPA), Lock-In Rent, CAM &amp; Unpaid 194-I TDS Recovery Notice Format
          </h1>

          {/* Executive Statutory Summary Box (Includes parent Hub link in first 250 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Notice Architecture &bull; Creditor-Side Framework
            </span>
            Under Section 106 of the Transfer of Property Act, 1882, terminating a commercial lease requires a strict 15-day statutory determination notice expiring with the month of tenancy. For commercial landlords, REITs, mall managers, and co-working operators operating under our{" "}
            <Link
              href="/industries/builders-commercial-landlords-coworking-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline decoration-red-400/60 underline-offset-4"
            >
              Builders, Commercial Landlords &amp; Co-Working Institutional Recovery Hub
            </Link>
            , consumer eviction notices fail because they omit 18% GST on commercial rent (SAC 997212), Section 194-I TDS reconciliation under Section 205 IT Act, unamortized fit-out CapEx clawbacks under Contract Act Section 74, double-rent mesne profits under CPC Section 2(12), and Order XV-A summary defense-striking petitions. Use our advocate-vetted workspace below to generate complete, court-ready notice drafts.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-bold tracking-wider">
                TPA §106 Notice
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-100">15 Days</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Month-to-month termination</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-bold tracking-wider">
                Commercial GST
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400">18% + S.50</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">SAC 997212 tax recovery</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-bold tracking-wider">
                Uncredited TDS
              </span>
              <span className="text-xl sm:text-2xl font-black text-amber-400">S.194-I/205</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Form 16A / S.276B criminal</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-bold tracking-wider">
                CPC Eviction Fast-Track
              </span>
              <span className="text-xl sm:text-2xl font-black text-red-400">Order XV-A</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Strikes defense on non-deposit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Component */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Templates", href: "/templates" },
              {
                label: "Commercial Lease Section 106 Termination Notice",
                href: "/templates/commercial-lease-lock-in-breach-section-106-termination-notice",
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sticky TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CommercialLeaseTerminationTOC />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: Statutory Overview */}
            <section
              id="heading-statutory-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Foundation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Section 106 TPA Statutory Framework: 15-Day Determination Rules
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                In Indian commercial real estate, terminating a defaulting corporate lease requires strict adherence to Chapter V of the{" "}
                <strong>Transfer of Property Act, 1882 (TPA)</strong>. Unlike residential tenancies governed by state rent control acts, commercial office spaces, retail showrooms, co-working suites, and industrial warehouses are primarily contractual leases. Section 106(1) of the TPA prescribes that in the absence of a contract to the contrary, a lease of immovable property for any purpose other than agriculture or manufacturing shall be deemed to be a lease from month to month, terminable on the part of either lessor or lessee by <strong>15 days&apos; notice</strong> expiring with the end of a month of the tenancy.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                When a corporate tenant defaults on rent, CAM, or uncredited TDS, landlords frequently make fatal errors by serving informal WhatsApp notices or residential-style eviction letters that fail to formally determine the lease under Section 111(h) TPA. An effective legal notice must establish four concurrent statutory predicates:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700 block mb-1">
                    1. Formal Determination (TPA §111)
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Expressly determines the leasehold tenancy by forfeiture under Section 111(g) or expiry of notice to quit under Section 111(h), extinguishing the tenant&apos;s lawful right of possession.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700 block mb-1">
                    2. 15-Day Computation Rule (§106(3))
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the 2002 amendment to Section 106(3), a notice shall not be invalid merely because the period falls short, provided the suit is instituted after 15 days from service.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700 block mb-1">
                    3. Strict Proof of Service (§106(4))
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must be in writing, signed by or on behalf of the lessor, and tendered personally or sent by post to the party or left at their residence or principal place of business.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700 block mb-1">
                    4. Post-Determination Holdover (§116)
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Warns that unauthorized overstay converts the tenant into a tenant-at-sufferance or trespasser, attracting penal mesne profits and Order XV-A CPC defense-striking motions.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-800">
                <strong>Strategic Landlord Rule:</strong> Never accept any rent remittance after serving a Section 106 notice without an explicit written endorsement stating that such payment is accepted strictly as &ldquo;ad-hoc mesne profits without prejudice to the determination of tenancy,&rdquo; thereby defeating tenant claims of tenancy renewal by holding over under Section 116 TPA.
              </div>
            </section>

            {/* SECTION 2: Interactive Notice Workspace (Client Component) */}
            <section
              id="heading-interactive-workspace"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Interactive Clause Workspace
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Interactive Notice Workspace: Advocate Commercial Lease Templates
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Select your specific commercial failure mode below. Copy the statutory notice draft, download it as a pre-formatted Word document (.doc), or print directly for advocate review:
              </p>

              <CommercialLeaseTerminationWorkspace />
            </section>

            {/* SECTION 3: Itemized Arrears Matrix */}
            <section
              id="heading-rent-cam-tds-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Financial &amp; Tax Reconciliations
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Itemized Arrears Matrix: Rent, 18% GST, CAM &amp; Uncredited 194-I TDS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Commercial landlords must avoid sending vague lump-sum demands. Indian Commercial Courts and Arbitral Tribunals require an itemized, ledger-backed statement showing base rent, commercial GST liabilities under SAC 997212, Common Area Maintenance reconciliations, and Tax Deducted at Source (TDS) defaults:
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white font-bold">
                    <tr>
                      <th className="p-3 sm:p-4">Arrears Head</th>
                      <th className="p-3 sm:p-4">Statutory / Contractual Basis</th>
                      <th className="p-3 sm:p-4">Interest / Rate</th>
                      <th className="p-3 sm:p-4">Landlord Legal Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Base Commercial Rent</td>
                      <td className="p-3 sm:p-4 text-slate-600">Registered Lease Deed Clause &amp; TPA s.105</td>
                      <td className="p-3 sm:p-4 text-slate-900">18% p.a. contractual / 6% CPC s.34</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold">TPA s.106 Termination + Order 37 Suit</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Commercial GST (18%)</td>
                      <td className="p-3 sm:p-4 text-slate-600">CGST Act, 2017 SAC 997212</td>
                      <td className="p-3 sm:p-4 text-slate-900">18% p.a. under CGST Act Section 50</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Mandatory reimbursement claim + GST portal reconciliation</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Uncredited 194-I TDS</td>
                      <td className="p-3 sm:p-4 text-slate-600">Income Tax Act s.194-I, s.205 &amp; s.276B</td>
                      <td className="p-3 sm:p-4 text-slate-900">1.5% per month under s.201(1A)</td>
                      <td className="p-3 sm:p-4 text-red-700 font-semibold">Section 205 IT Act demand + Form 16A delivery notice</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">CAM &amp; DG Power Arrears</td>
                      <td className="p-3 sm:p-4 text-slate-600">Facility Management SLA &amp; Contract Act s.73</td>
                      <td className="p-3 sm:p-4 text-slate-900">Contractual utility surcharge</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold">HVAC/power suspension + money recovery suit</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Fit-Out CapEx Amortization</td>
                      <td className="p-3 sm:p-4 text-slate-600">Contract Act s.74 (Kailash Nath doctrine)</td>
                      <td className="p-3 sm:p-4 text-slate-900">Pro-rata unamortized capital cost</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Security deposit forfeiture + balance arbitration</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-800">
                <strong>Critical Tax Protection (Section 205 IT Act):</strong> Where a tenant deducts TDS but pockets the amount instead of depositing it into the central exchequer, the Income Tax Department cannot recover that tax from the landlord under Section 205. However, because the amount remains unpaid by the tenant, the landlord must issue a formal demand requiring proof of deposit (Challan CIN &amp; Form 16A), failing which criminal prosecution under Section 276B lies against the tenant&apos;s directors.
              </div>
            </section>

            {/* SECTION 4: Lock-In Breach & CapEx Clawback */}
            <section
              id="heading-lock-in-damages-capex"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Contractual Damages Under s.74
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Enforcing Lock-In Period Breach &amp; Fit-Out CapEx Clawback Under s.74
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Lock-in clauses in commercial leases protect the landlord&apos;s substantial upfront capital expenditures (CapEx) in HVAC ducting, structural partitions, modular workstations, electrical load augmentation, and tenant brokerage fees. When a corporate tenant prematurely repudiates the lease during the lock-in period, landlords frequently demand the entire unexpired lock-in rent as an automatic penalty.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                However, under the Supreme Court of India&apos;s landmark ruling in <strong>Kailash Nath Associates v. DDA (2015) 4 SCC 136</strong>, contractual stipulations under Section 74 of the Indian Contract Act, 1872 cannot operate as an in terrorem penalty. Liquidated damages are recoverable only if they represent a <em>genuine pre-estimate of loss</em>. To bulletproof your lock-in claim in a legal notice:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Demonstrate CapEx Amortization Schedules</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Attach the fit-out handover protocol and invoice schedule showing that the monthly lease rental incorporated an amortized capital recovery component across the full 36 or 60-month lock-in term. Early exit deprives the landlord of the unamortized balance.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Document Duty to Mitigate Losses (Section 73 Explanation)</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Under Indian law, the aggrieved party has an obligation to take reasonable steps to mitigate loss. Put on record your marketing efforts, broker mandates, and the prevailing commercial gestation period (typically 6–12 months in prime micro-markets) required to secure a replacement corporate occupier.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Exercise Absolute Security Deposit Forfeiture</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Appropriate the interest-free refundable security deposit towards the unamortized CapEx and vacant gestation rent rather than treating it as a separate unlinked pool, issuing a demand for the remaining net deficit.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                To calculate precise statutory interest on delayed commercial payments, explore our companion tool:{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  MSME &amp; Commercial Delayed Payment Interest Calculator
                </Link>
                .
              </p>
            </section>

            {/* SECTION 5: Holdover & Mesne Profits */}
            <section
              id="heading-holdover-mesne-profits"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Post-Termination Remedies
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Holdover Tenancy, Double Rent Mesne Profits &amp; CPC Order XV-A Relief
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Once a Section 106 notice expires, the corporate tenant&apos;s status automatically converts from that of a lawful lessee to a <strong>tenant-at-sufferance or unauthorized trespasser</strong> under Indian law. The tenant is no longer paying &ldquo;rent&rdquo;; instead, the occupant is liable for <strong>mesne profits</strong> under Section 2(12) of the Code of Civil Procedure, 1908.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Most commercial leases incorporate holdover penalty clauses stipulating that continuing in possession post-termination incurs a charge of <strong>2x to 3x the last drawn lease rental</strong>. The Delhi High Court and Supreme Court have repeatedly upheld holdover damages that reflect the prevailing escalation in micro-market commercial values.
              </p>

              {/* Order XV-A Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    The Order XV-A CPC Litigation Weapon
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  Striking Off the Defaulting Tenant&apos;s Defense for Non-Deposit
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Under Order XV-A of the Code of Civil Procedure (enacted in Delhi, Maharashtra, Haryana, and adopted across commercial courts), a defendant in an eviction suit is statutorily mandated to deposit in Court all arrears of rent, admitted dues, and ongoing mesne profits at market rates throughout the trial.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <span className="text-red-400 font-bold block mb-1">If Tenant Deposits Rent:</span>
                    Landlord can withdraw the deposited sums under court directions to maintain cash flow during trial.
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <span className="text-red-400 font-bold block mb-1">If Tenant Defaults on Deposit:</span>
                    The Court immediately strikes off the tenant&apos;s written statement and passes a summary eviction decree.
                  </div>
                </div>
              </div>

              {/* Vidya Drolia Arbitrability Callout */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Arbitration Fast-Track via Vidya Drolia:</strong> Under the Supreme Court 3-Judge Bench holding in <em>Vidya Drolia v. Durga Trading Corp. (2021) 2 SCC 1</em>, commercial lease eviction disputes are fully arbitrable under the Arbitration and Conciliation Act, 1996. By serving an integrated Section 106 TPA termination notice that simultaneously invokes Section 21 Arbitration, commercial landlords can appoint a Sole Arbitrator and bypass multi-year civil court backlogs entirely.
              </div>
            </section>

            {/* SECTION 6: Service Protocols & BSA 2023 Section 63 */}
            <section
              id="heading-service-evidence-bsa"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  06
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Evidentiary Standards
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Service Protocols &amp; BSA 2023 Section 63 Evidence Checklist
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Corporate tenants frequently attempt to evade service of legal notices by changing executive personnel, refusing registered post, or claiming that local facility managers lacked authority to receive notices. To establish an unassailable presumption of service before a Commercial Court, follow our mandatory tri-channel protocol:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Channel 1: Speed Post RPAD
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Dispatch physical notice with Acknowledgement Due (A.D.) to the Corporate Registered Office (MCA records) and the Demised Premises.
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-red-700 bg-red-50 p-1.5 rounded-lg border border-red-200 block text-center">
                    Section 27 General Clauses Act Presumption
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Channel 2: Corporate Email
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Transmit complete PDF notice to designated lease notice emails, CFO, and Directors with server SMTP delivery receipts and read timestamps.
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-red-700 bg-red-50 p-1.5 rounded-lg border border-red-200 block text-center">
                    BSA 2023 Section 63 Electronic Evidence
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Channel 3: Official WhatsApp
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Send full notice document to authorized signatories and facility managers with double-tick delivery / blue-tick read receipt logs.
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-red-700 bg-red-50 p-1.5 rounded-lg border border-red-200 block text-center">
                    Bombay HC &amp; Supreme Court Approved
                  </span>
                </div>
              </div>

              {/* Documentary Evidence Checklist */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Litigation Ready Evidence Bundle (To Preserve with Notice)
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 list-none">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span> Registered Commercial Lease Deed + Addendums
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span> Monthly Rent Invoices with 18% GST (SAC 997212)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span> Traces / Form 26AS Statement showing missing TDS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span> CAM &amp; DG Meter Reading Logs and Bills
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span> Fit-Out Handover Protocol and CapEx Invoices
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span> India Post Tracking Consignment Delivery Certificate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span> BSA Section 63 Electronic Hash &amp; Delivery Affidavit
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">&check;</span> Security Deposit Receipt and Bank Statement Proof
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 7: Sibling Spokes & Lateral Real Estate Clusters */}
            <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                Related Commercial Real Estate &amp; Landlord Recovery Guides
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                Explore our full institutional suite for real estate developers, asset managers, and commercial landlords:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Link
                  href="/commercial-lease-lock-in-period-breach-unexpired-rent-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/50 hover:bg-white transition-all block group"
                >
                  <span className="text-xs font-bold text-[#DC2626] block mb-1">
                    Lock-In Damages &rarr;
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                    Commercial Lease Lock-In Period Breach: Recover Unexpired Rent
                  </p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Recover unexpired lock-in rent, fit-out CapEx outlays, and re-leasing brokerage under Contract Act Section 74.
                  </p>
                </Link>

                <Link
                  href="/coworking-managed-office-enterprise-seat-lock-in-default-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/50 hover:bg-white transition-all block group"
                >
                  <span className="text-xs font-bold text-[#DC2626] block mb-1">
                    Managed Office Recovery &rarr;
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                    Co-Working &amp; Enterprise Seat Lock-In Default Recovery
                  </p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Enforce enterprise seat commitments, IT bandwidth costs, and Easements Act Section 52 access revocation.
                  </p>
                </Link>

                <Link
                  href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/50 hover:bg-white transition-all block group"
                >
                  <span className="text-xs font-bold text-[#DC2626] block mb-1">
                    RERA Builder Recovery &rarr;
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                    RERA Section 19: Builder Recovery from Defaulting Allottees
                  </p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Statutory interest and cancellation protocols under RERA Section 19(6)–(7) for stalled homebuyer milestone installments.
                  </p>
                </Link>

                <Link
                  href="/legal-notice-to-tenant-for-unpaid-rent-eviction"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/50 hover:bg-white transition-all block group"
                >
                  <span className="text-xs font-bold text-[#DC2626] block mb-1">
                    General Tenant Notice &rarr;
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                    Legal Notice to Tenant for Unpaid Rent &amp; Eviction
                  </p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Standard 15-day termination framework, rent ledger compilation, and mesne profits formulation under TPA.
                  </p>
                </Link>

                <Link
                  href="/templates/society-maintenance-recovery-notice"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/50 hover:bg-white transition-all block group"
                >
                  <span className="text-xs font-bold text-[#DC2626] block mb-1">
                    Society Dues &rarr;
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                    Society Maintenance Recovery Legal Notice Format
                  </p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Apartment Owners Association and Co-operative Housing Society maintenance recovery notice under state cooperative acts.
                  </p>
                </Link>

                <Link
                  href="/send-a-legal-notice/recover-money-from-tenant-who-damaged-property"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/50 hover:bg-white transition-all block group"
                >
                  <span className="text-xs font-bold text-[#DC2626] block mb-1">
                    Dilapidation Claims &rarr;
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                    Recover Money from Tenant Who Damaged Commercial Property
                  </p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Enforce structural restoration liability, MEP repair debits, and security deposit set-offs against destructive occupants.
                  </p>
                </Link>
              </div>
            </section>

            {/* SECTION 8: Judicial Precedents */}
            <section
              id="heading-court-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  07
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Case Law Digest
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Judicial Precedents: Vidya Drolia, Kailash Nath &amp; Order XV-A Rulings
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Litigating commercial eviction and recovering rent arrears requires citing verified Supreme Court and High Court precedents establishing tenancy determination, arbitrability, and damages standards:
              </p>

              <div className="space-y-4">
                {CASE_CITATIONS.map((cit, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs border-l-4 border-l-[#DC2626]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <p className="text-base font-extrabold text-slate-900">{cit.title}</p>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {cit.date}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#DC2626] mb-2">{cit.citation}</p>
                    <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                      <strong>Facts:</strong> {cit.facts}
                    </p>
                    <p className="text-xs text-slate-700 mb-3 leading-relaxed">
                      <strong>Holding:</strong> {cit.holding}
                    </p>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs text-slate-800">
                      <strong>Commercial Takeaway:</strong> {cit.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 9: FAQs */}
            <section
              id="heading-commercial-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  08
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Practitioner Answers
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions: Commercial Lease Notices &amp; Eviction
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Critical legal and financial questions faced by commercial landlords, REIT asset managers, and co-working operators:
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 open:bg-white open:shadow-xs transition-colors"
                  >
                    <summary className="font-extrabold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-xl font-bold group-open:rotate-45 transition-transform shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 10: Primary Sources */}
            <section
              id="heading-primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Authoritative References
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Primary Statutory Citations &amp; Official Legislative Acts
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                All legal provisions referenced in this notice format are grounded in official Bare Acts published on India Code and the Central Gazettes:
              </p>
              <ul className="space-y-2.5 list-none">
                {PRIMARY_SOURCES.map((source, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] hover:underline font-medium"
                    >
                      {source.title} &rarr;
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                // TODO(reviewer): Advocate attribution: Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions. High Court of Delhi &amp; Supreme Court bar enrolled. Verified statutory standards under TPA 1882 &amp; CPC 1908.
              </div>
            </section>

            {/* SECTION 11: Dual-Track B2B Conversion Funnel CTA */}
            <section className="scroll-mt-28">
              <CommercialLeaseTerminationCTA />
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Cluster */}
      <RelatedRecoveryGuides />
    </div>
  );
}
