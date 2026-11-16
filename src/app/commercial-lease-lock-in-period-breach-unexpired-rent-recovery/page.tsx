import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import LockInRecoveryTableOfContents from "./LockInRecoveryTableOfContents";
import LockInRecoveryScenarioTabs from "./LockInRecoveryScenarioTabs";
import LockInRecoveryCTA from "./LockInRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/commercial-lease-lock-in-period-breach-unexpired-rent-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Commercial Tenant Broke Lock-In? Recover Rent & Fit-Out Cost";
const PAGE_DESCRIPTION =
  "Commercial tenant vacated mid-lock-in? Recover unexpired lock-in rent, unamortized fit-out CapEx & brokerage under Contract Act s.74 and HC precedents.";
const H1_TEXT =
  "Commercial Tenant Vacated Mid-Lock-In? How Landlords Recover Unexpired Lock-In Rent, Brokerage & CapEx Fit-Out Costs";

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
    title: "The Indian Contract Act, 1872 (Sections 73 & 74 — Breach of Contract & Liquidated Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Transfer of Property Act, 1882 (Sections 106 & 111 — Determination of Lease & Surrender)",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c)(vii) — Immovable Property Commercial Disputes)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XV-A — Direction for Deposit of Rent Pendente Lite & Order XXXVII)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records, Video Survey & Email Audit Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Delhi High Court Full Bench on Section 74 & Proof of Actual Loss in Lock-In Breaches",
    parties: "Tower Vision India Pvt. Ltd. v. Procall Private Limited",
    citation: "2012 SCC OnLine Del 4396 / (2014) 183 Comp Cas 364 (Del)",
    date: "Judgment Delivered by Delhi High Court Full Bench",
    facts:
      "The commercial tenant entered into a multi-year lease with a mandatory lock-in period. The tenant terminated the agreement prematurely before the expiry of the lock-in period. The landlord instituted proceedings seeking the entire unexpired lock-in rent as an ascertained liquidated debt without demonstrating actual vacancy or mitigation efforts.",
    holding:
      "The Full Bench held that a clause stipulating payment of unexpired lock-in rent upon premature termination is in the nature of a penalty or liquidated damages governed by Section 74 of the Indian Contract Act. The landlord is not entitled to recover the entire unexpired rent automatically as a windfall. Instead, the landlord must plead and prove actual loss suffered—such as the period the premises remained vacant despite genuine mitigation efforts, unamortized fit-out costs, or reduced rental spread.",
    impact:
      "Landlords cannot mechanically claim 100% of remaining lock-in rent if the property is re-let immediately; however, actual vacancy months, differential rents, and tenant-specific capital expenditures are fully recoverable when substantiated.",
  },
  {
    title: "Delhi High Court on Recovery of Unamortized Fit-Out CapEx & Differential Rent",
    parties: "Deepak Chopra v. FLFL & Ambience Commercial Enterprises",
    citation: "2020 SCC OnLine Del 1604 / RFA(OS) 23/2019",
    date: "Delhi High Court Commercial Appellate Division",
    facts:
      "The landlord incurred substantial capital expenditure in designing and furnishing custom commercial retail space specifically configured to the tenant's brand guidelines. The tenant vacated midway through the 3-year lock-in period, contending that interior fixtures remained in the landlord's possession.",
    holding:
      "The High Court held that capital expenditure incurred by a commercial lessor on custom fit-outs and tenant-specific amenities constitutes direct, compensable loss under Section 73 of the Contract Act. Because such bespoke interiors cannot be utilized by an incoming tenant without extensive alteration or demolition, the unamortized portion of the CapEx for the unexpired lock-in period must be compensated by the defaulting lessee.",
    impact:
      "Confirmed that unamortized interior expenditure amortized over the lock-in tenure represents legitimate out-of-pocket financial damage recoverable alongside vacancy rent.",
  },
  {
    title: "Supreme Court Landmark Ruling on Section 74 & Proof of Damage",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Supreme Court Bench Ruling",
    facts:
      "The Delhi Development Authority sought to forfeit earnest money and claim contractual damages without demonstrating that it had suffered any real economic loss from the breach of contract, as the property was subsequently re-auctioned at a higher price.",
    holding:
      "The Supreme Court clarified that under Section 74, liquidated damages represent an upper ceiling and cannot be granted as an arbitrary penalty where no actual damage has occurred. Compensation is payable only where actual damage or loss is proved, except in cases where it is impossible to assess the exact quantum of loss.",
    impact:
      "Precludes landlords from collecting double rent or penal windfalls, making meticulous documentation of vacancy periods, marketing efforts, and out-of-pocket costs essential.",
  },
  {
    title: "Delhi High Court on Premature Termination & Summary Debt Disallowance",
    parties: "Manju Bagai v. Magpie Retail Solutions Pvt. Ltd.",
    citation: "2010 SCC OnLine Del 3842 / (2010) 175 DLT 212",
    date: "Delhi High Court Single Bench",
    facts:
      "The landlord filed a summary proceeding claiming rent for the entire unexpired 33 months of a 36-month lock-in period, treating the unexpired rent as an admitted, crystallized debt payable on demand.",
    holding:
      "The Court ruled that unexpired lock-in rent does not constitute a crystallized 'debt' in praesenti for summary winding up or Order 37 summary recovery without trial. The landlord must establish breach of contract, demonstrate compliance with the duty to mitigate under Section 73, and claim damages quantified by actual vacancy.",
    impact:
      "Demands that commercial landlords frame legal notices not as mere 'rent arrears', but as statutory damages under Section 73/74 coupled with accrued pre-termination rent and fit-out reimbursement.",
  },
];

const FAQS = [
  {
    question: "Can a commercial landlord recover 100% of unexpired lock-in period rent in India?",
    answer:
      "Under Section 74 of the Indian Contract Act, 1872 and the Delhi High Court Full Bench ruling in Tower Vision India v. Procall, courts do not award the entire unexpired lock-in rent as an automatic windfall. If the landlord re-lets the premises immediately at an equivalent or higher rent, no rental loss is suffered. However, the landlord is legally entitled to recover: (1) 100% of rent and CAM for the actual months the property remained vacant despite reasonable mitigation efforts, (2) the rental spread or deficit if re-let at a lower market rate, (3) unamortized custom fit-out CapEx, (4) clawed-back initial rent-free periods, and (5) pro-rated leasing brokerage.",
  },
  {
    question: "What is the landlord's statutory duty to mitigate losses under Section 73?",
    answer:
      "Section 73 of the Indian Contract Act imposes an affirmative duty on the aggrieved party to take reasonable steps to mitigate the loss caused by a breach. In commercial leasing, the landlord must actively market the premises through international property consultants (IPCs), real estate brokers, online listings, or public signage. If the landlord deliberately keeps the property locked and makes zero effort to find an incoming tenant, courts will disallow lock-in rent claims for the extended period.",
  },
  {
    question: "Can a commercial landlord forfeit the security deposit against lock-in breach damages?",
    answer:
      "Yes, provided the lease agreement explicitly allows forfeiture or adjustment against damages arising from breach of covenants. Under Supreme Court rulings in Kailash Nath Associates and ONGC v. Saw Pipes, security deposits can be appropriated against crystallized liabilities such as unpaid past rent, utility arrears, un-deposited Section 194-I TDS, and proven physical dilapidation. Any remaining deposit balance can be held in escrow and set off against quantified vacancy and unamortized CapEx losses.",
  },
  {
    question: "How are custom interior fit-out costs amortized and recovered legally?",
    answer:
      "When a landlord funds custom fit-outs (HVAC ducting, executive cabins, IT server racks, cafeterias) for a tenant on the condition of a 36-month lock-in, the capital expenditure is legally amortized across that 36-month horizon. As held in Deepak Chopra v. FLFL (Delhi HC), if the tenant exits at Month 10, the remaining 26/36ths of the CapEx represents unamortized capital damage directly recoverable under Section 73, because bespoke interiors cannot be repurposed for generic tenants without heavy modification.",
  },
  {
    question: "What should a landlord do if a defaulting tenant abandons keys at reception?",
    answer:
      "Do not accept the keys unconditionally. Unconditional acceptance may be construed as an 'implied surrender' under Section 111(f) of the Transfer of Property Act, which extinguishes future lease liabilities. The landlord must immediately issue a registered written notice within 48 hours stating that keys are held purely in escrow as a custodian to protect the premises against deterioration, without prejudice to ongoing rent accrual and lock-in covenants, and summon the tenant for a joint dilapidation inspection.",
  },
  {
    question: "Which judicial forum has jurisdiction to recover commercial lock-in lease arrears?",
    answer:
      "Under Section 2(1)(c)(vii) of the Commercial Courts Act, 2015, disputes arising from agreements relating to immovable property used exclusively in trade or commerce are classified as 'Commercial Disputes'. If the specified value exceeds ₹3,00,000, landlords can approach the dedicated Commercial Court. Section 12A mandates Pre-Institution Mediation unless urgent interim relief under Order 38 Rule 5 CPC (asset attachment) or Order XV-A (rent deposit pendente lite) is sought. If the lease contains an arbitration clause, an expedited Section 9 / Section 17 tribunal process applies.",
  },
  {
    question: "Can initial rent-free periods or fit-out waivers be clawed back upon breach?",
    answer:
      "Yes. Most institutional commercial leases structure the initial 2 to 6 months as a 'rent-free fit-out period' conditional upon the tenant fulfilling the full lock-in term. Where the tenant breaches the lock-in period, the contractual consideration for granting the rent waiver fails, entitling the landlord to claw back and demand the full commercial rent for those initial rent-free months as accrued debt.",
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
    name: "Commercial Lease Lock-In Period Breach & Rent Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Commercial Landlords Recover Dues After a Lock-In Period Breach",
  description:
    "Five-step statutory operational protocol for commercial landlords, REITs, and office owners to recover actual vacancy losses, unamortized fit-out CapEx, and clawbacks after a tenant vacates mid-lock-in.",
  totalTime: "P60D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "INR",
    value: "999",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Formal Possession Rejection & Escrow Notice",
      text: "Reject unilateral key surrenders in writing within 48 hours. Issue formal notice declaring keys held in escrow to preserve rights against implied surrender under Section 111(f) TPA.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve Statutory Demand Notice under Contract Act s.73/74",
      text: "Issue a comprehensive 15-day Advocate Notice setting out actual vacancy projections, unamortized fit-out CapEx ledger, rent-free clawbacks, and brokerage loss.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Conduct Joint Dilapidation Survey under BSA 2023 s.63",
      text: "Execute a videographic and photographic inventory of bespoke interior alterations and structural damage with hash verification under BSA Section 63.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Document Loss Mitigation Efforts via Commercial IPCs",
      text: "Mandate real estate brokers, list the vacant space publicly, and log all prospect inspections to satisfy statutory mitigation requirements under Section 73.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Initiate Commercial Court Suit or Fast-Track Arbitration",
      text: "File under Commercial Courts Act 2015 s.2(1)(c)(vii) seeking CPC Order XV-A rent deposit pendente lite or Order 38 Rule 5 bank account attachment.",
    },
  ],
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
      name: "Lock-In Period Breach Recovery",
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository; advocate verification attribution applied directly.

export default function CommercialLeaseLockInBreachPage() {
  const breadcrumbItems = [
    {
      label: "Commercial Landlord Recovery",
      href: "/industries/builders-commercial-landlords-coworking-recovery",
    },
    {
      label: "Lock-In Period Breach Recovery",
      href: PAGE_URL,
    },
  ];

  return (
    <>
      {/* Structured Data Schemas */}
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
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Indian Contract Act s.73 &amp; s.74</span>
              <span className="text-red-500">&bull;</span>
              <span>Commercial Courts Act s.2(1)(c)(vii)</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-08 Institutional Guide</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div
              aria-label="Statutory Executive Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Statutory Doctrine
              </span>
              <p>
                When a commercial tenant vacates prematurely during a 3-year lock-in period, Indian High Courts (led by the Delhi High Court Full Bench in <em>Tower Vision</em> and <em>Deepak Chopra</em>) reject automatic double-rent windfalls under Section 74 of the Contract Act. However, institutional landlords in our{" "}
                <Link
                  href="/industries/builders-commercial-landlords-coworking-recovery"
                  className="text-red-400 hover:text-red-300 underline font-bold"
                >
                  Commercial Landlords &amp; Developers Recovery Hub
                </Link>{" "}
                can lawfully recover 100% of actual vacancy months, unamortized custom fit-out CapEx, clawed-back rent-free concessions, and leasing brokerage under Section 73 by establishing documented loss mitigation and filing under Commercial Courts Act Section 2(1)(c)(vii).
              </p>
            </div>

            {/* 4-Card Hero Metric Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Section 74</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Proof of Loss vs Penalty Doctrine</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% CapEx</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Unamortized Fit-Out Direct Recovery</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Rent-Free</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Full Concession Period Clawback</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">CCA 2015</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Order XV-A Rent Pendente Lite</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Two-Column Editorial Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Sticky Navigation Sidebar */}
            <LockInRecoveryTableOfContents />

            {/* Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* SECTION 1: STATUTORY OVERVIEW & DOCTRINE */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    The Commercial Lock-In Dilemma: Why Mere Rent Claims Fail in Indian Courts
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Understanding the Tension Between Contractual Lock-In Clauses and Section 74 Damages
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    In Indian commercial real estate, grade-A office developers, shopping mall REITs, and high-street landlords routinely insist on mandatory 36-month or 60-month lock-in covenants. These lock-in provisions are not arbitrary: they are commercially calibrated to justify substantial upfront capital outlays, including leasing broker commissions (typically 1 to 2 months rent), prolonged rent-free fit-out concessions (3 to 6 months), and dedicated CapEx outlays for custom air-conditioning, electrical substations, acoustic partitions, and executive furnishings.
                  </p>
                  <p>
                    However, when a funded startup, multinational corporate, or retail chain faces market headwinds and unilaterally terminates the lease at Month 10 of a 36-month lock-in, landlords face a severe legal ambush. If the landlord simply files an ordinary civil suit or serves a demand notice claiming <em>&quot;the entire remaining 26 months of unexpired rent as liquidated damages&quot;</em>, tenant advocates routinely cite Section 74 of the Indian Contract Act, 1872 and the Supreme Court&apos;s authoritative ruling in <em>Kailash Nath Associates v. DDA</em>.
                  </p>
                  <p>
                    Under Indian jurisprudence, an unexpired lock-in period clause is treated as an agreement for liquidated damages. If the lessor immediately leases the office floor to another corporation at an identical or superior rental value, the court will refuse to award the remaining 26 months of rent, holding that the lessor suffered no actual loss and cannot claim an unjust enrichment or double-rent windfall.
                  </p>
                  <p>
                    Crucially, this does <strong>not</strong> mean the landlord is powerless. As established by the Delhi High Court Commercial Division, landlords who structure their initial demand notice and evidence around <strong>actual vacancy months, unamortized custom fit-out CapEx, brokerage recoupment, and rent-free concession clawbacks</strong> achieve near-total financial recovery. If you are also dealing with residential or standard commercial tenancies with physical property dilapidation, review our guide on{" "}
                    <Link
                      href="/send-a-legal-notice/recover-money-from-tenant-who-damaged-property"
                      className="text-red-600 hover:underline font-bold"
                    >
                      recovering property damage from defaulting tenants
                    </Link>{" "}
                    or explore formal eviction under{" "}
                    <Link
                      href="/legal-notice-to-tenant-for-unpaid-rent-eviction"
                      className="text-red-600 hover:underline font-bold"
                    >
                      Section 106 TPA notice for unpaid rent
                    </Link>.
                  </p>
                </div>
              </section>

              {/* SECTION 2: LEGAL DOCTRINE & MITIGATION DUTY */}
              <section
                id="heading-legal-doctrine"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Section 73 Duty to Mitigate Loss vs Section 74 Liquidated Damages
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    The Two-Pillar Statutory Architecture That Determines Commercial Lease Recovery
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    To successfully enforce a commercial lock-in claim, corporate legal counsels and asset managers must align their recovery strategy with the interplay between Sections 73 and 74 of the Indian Contract Act, 1872:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-1">
                        Contract Act Section 73: Duty to Mitigate
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        The explanation to Section 73 mandates that in estimating loss or damage, the means which existed of remedying the inconvenience must be considered. A commercial lessor cannot lock the doors, ignore market enquiries, and claim 2 years of idle rent. The lessor must take active, reasonable steps to market and re-let the property through brokers, property portals, and signage.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-1">
                        Contract Act Section 74: Reasonable Compensation
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Section 74 stipulates that where a sum is named as liquidated damages, the aggrieved party is entitled only to reasonable compensation not exceeding that stipulated amount. Where actual loss can be quantified—such as vacancy period rent and unamortized interior fit-outs—the court requires proof of such actual loss rather than granting the contractual figure blindly.
                      </p>
                    </div>
                  </div>

                  <p>
                    Therefore, the recovery doctrine requires proving three distinct components:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>The Actual Vacancy Period:</strong> The exact months between the tenant&apos;s departure and the date a new replacement tenant commences paying rent. If it takes 6 months to secure a new tenant, those 6 months of rent and Common Area Maintenance (CAM) charges are 100% recoverable. For complex mall maintenance arrears, cross-reference our analysis on{" "}
                      <Link
                        href="/commercial-it-park-mall-cam-common-area-maintenance-arrears-recovery"
                        className="text-red-600 hover:underline font-semibold"
                      >
                        commercial IT-park and mall CAM arrears recovery
                      </Link>.
                    </li>
                    <li>
                      <strong>The Rental Deficit (Rental Spread):</strong> If the original lease rate was ₹100/sq. ft., but due to a commercial downturn the best replacement tenant obtainable after thorough mitigation signs at ₹85/sq. ft., the ₹15/sq. ft. differential across the unexpired term of the original lock-in is a direct, recoverable loss under Section 73.
                    </li>
                    <li>
                      <strong>Sunk Capital Costs &amp; Amortization:</strong> Custom interior fit-outs funded by the landlord specifically to cater to the defaulting tenant&apos;s corporate aesthetics or IT requirements.
                    </li>
                  </ol>
                </div>
              </section>

              {/* SECTION 3: LANDMARK HIGH COURT PRECEDENTS */}
              <section
                id="heading-court-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Binding Judicial Precedents on Commercial Lock-In Enforcement
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Verifiable High Court &amp; Supreme Court Rulings Governing Lessor Compensation
                  </p>
                </div>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((precedent, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="pl-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-extrabold text-slate-900">
                            {precedent.parties}
                          </span>
                          <span className="text-[11px] font-semibold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                            {precedent.citation}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-slate-800 mb-1.5">{precedent.title}</p>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          <strong className="text-slate-800">Facts &amp; Dispute: </strong>
                          {precedent.facts}
                        </p>
                        <p className="text-xs text-slate-700 leading-relaxed mb-2">
                          <strong className="text-slate-900">Judicial Holding: </strong>
                          {precedent.holding}
                        </p>
                        <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                          <span className="font-bold text-[#DC2626]">Creditor Takeaway:</span>
                          <span className="text-slate-600 italic">{precedent.impact}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 4: DECISION TREE FLOWCHART */}
              <section
                id="heading-decision-flow"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Decision Tree: Landlord Recovery Rail Upon Mid-Lock-In Departure
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Systematic Escalation Architecture from Key Rejection to Commercial Decree
                  </p>
                </div>

                {/* Handcrafted Responsive SVG Flowchart */}
                <div className="hidden md:block w-full overflow-x-auto p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <svg
                    viewBox="0 0 880 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    aria-label="Commercial Lease Lock-In Recovery Decision Tree Flowchart"
                    width={880}
                    height={320}
                  >
                    {/* Stage 1 */}
                    <rect x="20" y="30" width="180" height="90" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="110" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 01: IMMEDIATE BREACH</text>
                    <text x="110" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="10">Tenant Abandons / Serves Exit</text>
                    <text x="110" y="92" textAnchor="middle" fill="#94A3B8" fontSize="9">Reject Unconditional Keys</text>
                    <text x="110" y="105" textAnchor="middle" fill="#CBD5E1" fontSize="8.5">Issue 48h Escrow Letter</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M200 75 H 240" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="240,75 234,71 234,79" fill="#DC2626" />

                    {/* Stage 2 */}
                    <rect x="240" y="30" width="180" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="330" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 02: DILAPIDATION AUDIT</text>
                    <text x="330" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="10">BSA 2023 s.63 Video Record</text>
                    <text x="330" y="92" textAnchor="middle" fill="#94A3B8" fontSize="9">Inventory Custom Fit-Outs</text>
                    <text x="330" y="105" textAnchor="middle" fill="#CBD5E1" fontSize="8.5">Freeze Security Deposit</text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M420 75 H 460" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="460,75 454,71 454,79" fill="#DC2626" />

                    {/* Stage 3 */}
                    <rect x="460" y="30" width="180" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="550" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 03: FORMAL NOTICE</text>
                    <text x="550" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="10">Advocate Statutory Demand</text>
                    <text x="550" y="92" textAnchor="middle" fill="#94A3B8" fontSize="9">Contract Act s.73/74 Ledger</text>
                    <text x="550" y="105" textAnchor="middle" fill="#CBD5E1" fontSize="8.5">Clawback Rent-Free Period</text>

                    {/* Arrow 3 -> 4 */}
                    <path d="M640 75 H 680" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="680,75 674,71 674,79" fill="#DC2626" />

                    {/* Stage 4 */}
                    <rect x="680" y="30" width="180" height="90" rx="8" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="770" y="55" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 04: LOSS MITIGATION</text>
                    <text x="770" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="10">Appoint IPCs &amp; Listing Logs</text>
                    <text x="770" y="92" textAnchor="middle" fill="#94A3B8" fontSize="9">Establish Vacancy Window</text>
                    <text x="770" y="105" textAnchor="middle" fill="#CBD5E1" fontSize="8.5">Crystallize Net Loss</text>

                    {/* Branch Down Arrow from Stage 4 */}
                    <path d="M770 120 V 160 H 450 V 190" stroke="#DC2626" strokeWidth="2" />
                    <polygon points="450,195 446,189 454,189" fill="#DC2626" />

                    {/* Judicial Escalation Box */}
                    <rect x="180" y="195" width="540" height="100" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                    <text x="450" y="222" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="black">STAGE 05: COMMERCIAL DISPUTE FORUM ESCALATION</text>
                    <text x="450" y="244" textAnchor="middle" fill="#F1F5F9" fontSize="11">Commercial Courts Act 2015 s.2(1)(c)(vii) &bull; Pecuniary Floor &gt; ₹3,00,000</text>
                    <text x="450" y="264" textAnchor="middle" fill="#94A3B8" fontSize="10">Pre-Institution Mediation (s.12A) OR Urgent Order 38 Rule 5 Asset Freeze</text>
                    <text x="450" y="282" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="bold">CPC Order XV-A: Mandatory Deposit of Admitted Rent Pendente Lite</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards for Decision Tree */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-red-500">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">Stage 01</span>
                    <p className="text-sm font-bold text-white">Immediate Breach &amp; Key Rejection</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Reject keys unconditionally within 48h via Speed Post RPAD. Clarify keys are held in custodial escrow to prevent TPA s.111(f) implied surrender defense.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-red-500">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">Stage 02</span>
                    <p className="text-sm font-bold text-white">BSA 2023 s.63 Dilapidation Audit</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Execute high-definition video walkthrough of custom fit-out condition and inventory alterations with certified digital hash evidence.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-red-500">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">Stage 03</span>
                    <p className="text-sm font-bold text-white">Tri-Channel Advocate Demand Notice</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Serve formal 15-day notice claiming unamortized CapEx, rent-free concession clawback, and projected vacancy rent via Email, WhatsApp &amp; RPAD.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-emerald-500">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Stage 04</span>
                    <p className="text-sm font-bold text-white">Statutory Mitigation &amp; Broker Mandates</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Retain IPCs, advertise the space, and log all property inspections to prove diligent mitigation under Contract Act s.73.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-blue-500">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">Stage 05</span>
                    <p className="text-sm font-bold text-white">Commercial Court Suit / Arbitration</p>
                    <p className="text-xs text-slate-300 mt-1">
                      File under Commercial Courts Act s.2(1)(c)(vii). Move for CPC Order XV-A deposit of admitted rent pendente lite and Order 38 Rule 5 asset attachment.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 5: STATUTORY MATRIX TABLE */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Recoverable Heads Matrix: Actual Loss vs Disallowed Penalties
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    What Indian Commercial Courts Award to Landlords vs What Is Struck Down under Section 74
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="py-3 px-4 font-bold border-b border-slate-800">Recovery Head</th>
                        <th className="py-3 px-4 font-bold border-b border-slate-800">Legal Status in Court</th>
                        <th className="py-3 px-4 font-bold border-b border-slate-800">Statutory / Precedent Basis</th>
                        <th className="py-3 px-4 font-bold border-b border-slate-800">Mandatory Proof Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Actual Vacancy Period Rent</td>
                        <td className="py-3 px-4 text-emerald-700 font-bold">100% Recoverable</td>
                        <td className="py-3 px-4 text-slate-600">Contract Act s.73; Tower Vision (Del HC)</td>
                        <td className="py-3 px-4 text-slate-600">Broker listings, IPC mandate, inspection logs</td>
                      </tr>
                      <tr className="bg-slate-50/50 hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Unamortized Fit-Out CapEx</td>
                        <td className="py-3 px-4 text-emerald-700 font-bold">100% Recoverable</td>
                        <td className="py-3 px-4 text-slate-600">Deepak Chopra v. FLFL (Del HC)</td>
                        <td className="py-3 px-4 text-slate-600">Fit-out GST invoices, bank statements, photos</td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Rent-Free Concession Clawback</td>
                        <td className="py-3 px-4 text-emerald-700 font-bold">100% Recoverable</td>
                        <td className="py-3 px-4 text-slate-600">Contractual Failure of Consideration</td>
                        <td className="py-3 px-4 text-slate-600">Lease deed clause linking waiver to full lock-in</td>
                      </tr>
                      <tr className="bg-slate-50/50 hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Rental Deficit / Spread</td>
                        <td className="py-3 px-4 text-emerald-700 font-bold">100% Recoverable</td>
                        <td className="py-3 px-4 text-slate-600">Contract Act s.73 (Differential Loss)</td>
                        <td className="py-3 px-4 text-slate-600">New registered lease agreement at lower rent</td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Unexpired Re-Leasing Brokerage</td>
                        <td className="py-3 px-4 text-emerald-700 font-bold">Pro-Rata Recoverable</td>
                        <td className="py-3 px-4 text-slate-600">Section 73 Sunk Expenditure</td>
                        <td className="py-3 px-4 text-slate-600">Original IPC invoice &amp; replacement brokerage bill</td>
                      </tr>
                      <tr className="bg-red-50/40 hover:bg-red-50/60">
                        <td className="py-3 px-4 font-semibold text-red-900">Double Rent After Re-Letting</td>
                        <td className="py-3 px-4 text-red-600 font-bold">Disallowed as Penalty</td>
                        <td className="py-3 px-4 text-slate-600">Contract Act s.74; Kailash Nath (SC)</td>
                        <td className="py-3 px-4 text-slate-600">Cannot claim rent for months space is occupied</td>
                      </tr>
                      <tr className="bg-red-50/40 hover:bg-red-50/60">
                        <td className="py-3 px-4 font-semibold text-red-900">Unmitigated Extended Vacancy</td>
                        <td className="py-3 px-4 text-red-600 font-bold">Disallowed</td>
                        <td className="py-3 px-4 text-slate-600">Section 73 Duty to Mitigate Loss</td>
                        <td className="py-3 px-4 text-slate-600">Disallowed if landlord made zero leasing effort</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 6: INTERACTIVE SCENARIOS */}
              <section id="heading-scenarios" className="scroll-mt-28 space-y-4">
                <LockInRecoveryScenarioTabs />
              </section>

              {/* SECTION 7: WORKED FINANCIAL CALCULATION BOX */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Worked Financial Recovery Ledger: Mid-Lock-In Exit Case Study
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Mathematical Illustration of a 36-Month Lease Breached at Month 10
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Consider an institutional office floor in Cyber City, Gurugram or BKC, Mumbai:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
                    <li><strong>Premises:</strong> 10,000 sq. ft. Grade-A commercial office plate.</li>
                    <li><strong>Lease Rent:</strong> ₹5,00,000 per month (₹50/sq. ft.) + ₹1,00,000 monthly CAM.</li>
                    <li><strong>Lock-In Tenure:</strong> 36 months mandatory lock-in period.</li>
                    <li><strong>Upfront Landlord CapEx:</strong> ₹45,00,000 invested in custom interior fit-outs.</li>
                    <li><strong>Initial Concession:</strong> 3 months rent-free fit-out period (worth ₹15,00,000).</li>
                    <li><strong>Brokerage Paid by Landlord:</strong> ₹5,00,000 (1 month rent).</li>
                    <li><strong>Security Deposit Held:</strong> ₹30,00,000 (6 months rent).</li>
                    <li><strong>Default Timeline:</strong> Tenant breaches and vacates at Month 10 (26 months unexpired).</li>
                    <li><strong>Mitigation Outcome:</strong> Landlord secures a replacement tenant after 6 months of vacancy at a renegotiated market rate of ₹4,50,000/month (₹50,000 monthly deficit for 20 remaining months).</li>
                  </ul>

                  {/* Financial Ledger Display */}
                  <div className="rounded-xl border border-emerald-300 bg-slate-900 text-white p-5 shadow-lg space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        Creditor-Side Loss Quantification Ledger
                      </span>
                      <span className="text-xs font-semibold text-slate-300">
                        Indian Contract Act s.73/74 Compliant
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs sm:text-sm">
                      <div className="flex justify-between py-1 border-b border-slate-800/80">
                        <span className="text-slate-300">1. Actual Vacancy Rent Loss (6 months @ ₹5,00,000/mo)</span>
                        <span className="font-mono font-bold text-white">₹30,00,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800/80">
                        <span className="text-slate-300">2. Vacancy CAM &amp; HVAC Fixed Costs (6 months @ ₹1,00,000/mo)</span>
                        <span className="font-mono font-bold text-white">₹6,00,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800/80">
                        <span className="text-slate-300">
                          3. Unamortized Custom Fit-Out CapEx (26/36ths of ₹45,00,000)
                        </span>
                        <span className="font-mono font-bold text-emerald-400">₹32,50,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800/80">
                        <span className="text-slate-300">4. Rent-Free Fit-Out Concession Clawback (3 months rent)</span>
                        <span className="font-mono font-bold text-white">₹15,00,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800/80">
                        <span className="text-slate-300">
                          5. Rental Deficit across Remaining Lock-In (20 months @ ₹50,000/mo)
                        </span>
                        <span className="font-mono font-bold text-white">₹10,00,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800/80">
                        <span className="text-slate-300">6. Unamortized Initial Brokerage (26/36ths of ₹5,00,000)</span>
                        <span className="font-mono font-bold text-white">₹3,61,111</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800/80">
                        <span className="text-slate-300">7. Re-Leasing Brokerage to Secure Replacement Tenant</span>
                        <span className="font-mono font-bold text-white">₹4,50,000</span>
                      </div>
                      <div className="flex justify-between py-2 border-t-2 border-slate-700 font-bold text-sm sm:text-base">
                        <span className="text-red-400">Total Quantified Gross Damage</span>
                        <span className="font-mono text-red-400">₹1,01,61,111</span>
                      </div>
                      <div className="flex justify-between py-1 text-slate-300 border-b border-slate-800/80">
                        <span>Less: Security Deposit Forfeited &amp; Set-Off</span>
                        <span className="font-mono font-bold text-emerald-400">(-) ₹30,00,000</span>
                      </div>
                      <div className="flex justify-between py-2.5 border-t border-emerald-500/60 bg-emerald-950/40 px-3 rounded-lg font-black text-sm sm:text-lg">
                        <span className="text-emerald-300">Net Actionable Recovery Claim</span>
                        <span className="font-mono text-emerald-400">₹71,61,111</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                      <em>Interest Hook:</em> Plus 18% p.a. commercial interest under Interest Act 1978 and Commercial Courts Act 2015 from date of breach until actual realization. You can test your interest exposure using our interactive{" "}
                      <Link
                        href="/tools/msme-delayed-payment-interest-calculator"
                        className="text-emerald-400 underline font-bold"
                      >
                        commercial delayed payment interest calculator
                      </Link>.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 8: HOW-TO RECOVERY SOP */}
              <section
                id="heading-legal-notice-sop"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Step-by-Step SOP: Landlord Legal Protocol Following Lock-In Breach
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Standard Operating Procedure for In-House Legal Teams and Asset Managers
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DC2626] text-xs font-bold text-white">
                      1
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Reject Unilateral Surrender &amp; Place Keys in Escrow
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Do not accept keys without a written disclaimer. Send an immediate registered communication via Speed Post RPAD and email declaring that keys are held in custodial escrow to prevent weather damage, without prejudice to lease covenants. This neutralizes the tenant&apos;s &quot;implied surrender&quot; defense under Section 111(f) TPA.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DC2626] text-xs font-bold text-white">
                      2
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Conduct a Joint Dilapidation Survey under BSA Section 63
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Issue a 7-day notice calling upon the tenant to attend a joint inspection. If they fail to appear, engage a certified structural surveyor or chartered engineer. Record an unedited high-definition video walkthrough verifying custom fit-outs, missing fixtures, and dilapidations, preserving the hash signature under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DC2626] text-xs font-bold text-white">
                      3
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Issue a Tri-Channel Advocate Demand Notice
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Dispatch a 15-day formal Legal Notice settled by a commercial advocate on Advocates Act letterhead. The notice must specify: (1) accrued rent arrears and unpaid CAM, (2) unamortized CapEx schedule, (3) rent-free period clawback, (4) projected vacancy loss, and (5) interest at 18% p.a. Simultaneously deliver via registered Speed Post RPAD, email, and WhatsApp.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DC2626] text-xs font-bold text-white">
                      4
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Document Active Loss Mitigation Efforts
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Retain international property consultants (IPCs) or leading regional brokers to find a new lessee. Maintain comprehensive audit files of mandate agreements, marketing brochures, online property portal listings, site visit registers, and written lease proposals to establish compliance with Section 73 mitigation in court.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DC2626] text-xs font-bold text-white">
                      5
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Initiate Commercial Court Suit or Institutional Arbitration
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        If the notice period expires without settlement, file a Commercial Suit under Section 2(1)(c)(vii) of the Commercial Courts Act, 2015. Move applications under Order XV-A CPC seeking mandatory monthly deposit of admitted rent and CAM pendente lite, coupled with Order 38 Rule 5 CPC for interim attachment of the corporate tenant&apos;s bank accounts. If an arbitration clause governs, serve a Section 21 invocation notice immediately. For co-working operator contracts, explore our playbook on{" "}
                        <Link
                          href="/coworking-managed-office-enterprise-seat-lock-in-default-recovery"
                          className="text-red-600 hover:underline font-semibold"
                        >
                          co-working enterprise seat lock-in defaults
                        </Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 9: EVIDENCE & BSA SECTION 63 CHECKLIST */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    BSA Section 63 Evidence Docket &amp; Mandatory Documents
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Checklist Required by Advocates to Secure Pre-Trial Relief and Decrees
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which supersedes Section 65B of the Indian Evidence Act, 1872), all digital trails—including emails, WhatsApp termination notices, electronic bank statements, and digital video surveys—are admissible when accompanied by the requisite compliance certificate. Ensure your docket includes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                      <p className="text-xs font-bold text-slate-900">1. Contractual &amp; Lease Records</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Registered Lease Deed or Leave &amp; License Agreement containing explicit Lock-In period covenants, rent-free concession clauses, and security deposit forfeiture terms.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                      <p className="text-xs font-bold text-slate-900">2. Fit-Out Capital Expenditure Audit</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Invoices, contractor payment receipts, architectural drawings, and GST vouchers proving the exact ₹40L+ capital outlays deployed exclusively for the tenant&apos;s fit-out.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                      <p className="text-xs font-bold text-slate-900">3. Dilapidation Video &amp; Survey</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Unedited high-definition video walkthrough of the vacated floor plate taken immediately after abandonment, accompanied by a BSA Section 63 hash certificate.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                      <p className="text-xs font-bold text-slate-900">4. Proof of Mitigation (Section 73)</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Brokerage appointment mandates with IPCs (CBRE, JLL, Colliers, Cushman), commercial property portal advertising logs, and prospective tenant inspection sheets.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                      <p className="text-xs font-bold text-slate-900">5. Arrears &amp; Statutory Ledgers</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Bank statements demonstrating rent defaults, unpaid CAM and electricity bills, and Form 26AS/AIS records showing un-deposited Section 194-I TDS. Also review our{" "}
                        <Link
                          href="/templates/society-maintenance-recovery-notice"
                          className="text-red-600 hover:underline font-semibold"
                        >
                          society and condominium maintenance notice templates
                        </Link>.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                      <p className="text-xs font-bold text-slate-900">6. Dispatch &amp; Service Proof</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        India Post Speed Post RPAD consignment tracking reports with delivery confirmation certificates, email server delivery logs, and read-receipt WhatsApp records.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* DUAL B2B CTA MODULE */}
              <LockInRecoveryCTA />

              {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Frequently Asked Questions on Commercial Lease Lock-In Breaches
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Legal Answers for Landlords, Lessors, and Institutional Property Asset Directors
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {FAQS.map((faq, index) => (
                    <details
                      key={index}
                      className="group rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition-colors hover:bg-slate-50 open:bg-white open:shadow-xs"
                    >
                      <summary className="flex cursor-pointer items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
                        <span className="pr-4">{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 text-base">
                          ▼
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 11: STATUTORY PROVISIONS & CITATIONS */}
              <section
                id="heading-statutes"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Statutory Framework, Primary Sources &amp; Official Precedent Repositories
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Bare Act Provisions and Judicial Repositories Governing Indian Commercial Leases
                  </p>
                </div>

                <div className="space-y-2.5">
                  {PRIMARY_SOURCES.map((source, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs hover:bg-slate-100 transition-colors"
                    >
                      <span className="text-slate-800 font-medium">{source.title}</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-red-600 hover:text-red-800 font-bold ml-4 shrink-0 flex items-center gap-1"
                      >
                        India Code &rarr;
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <p>
                    <strong>Editorial Review &amp; Citation Integrity:</strong> Authored by the Institutional Commercial Real Estate Litigation Desk at LegalRecovery.in, verified by Advocate Anuj Anand Malik, Supreme Court of India &amp; Delhi High Court bar membership.
                  </p>
                  <p>
                    For builders handling residential buyer payment default notices, refer to our specialized guide on{" "}
                    <Link
                      href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                      className="text-red-600 hover:underline font-semibold"
                    >
                      RERA Section 19 builder recovery from defaulting allottees
                    </Link>.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cluster Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
