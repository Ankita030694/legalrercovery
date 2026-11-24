import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CoworkingRecoveryTableOfContents from "./CoworkingRecoveryTableOfContents";
import CoworkingRecoveryScenarioTabs from "./CoworkingRecoveryScenarioTabs";
import CoworkingRecoveryCTA from "./CoworkingRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/coworking-managed-office-enterprise-seat-lock-in-default-recovery";
const EXACT_H1 =
  "Legal Playbook for Co-Working & Managed-Office Operators: Access-Card Suspension, Zero-Eviction-Suit Licensing & Enterprise CapEx Recovery";
const META_TITLE = "Co-Working & Managed Office Default & Lock-In Recovery";
const META_DESCRIPTION =
  "Co-working contracts are B2B service licenses, not tenancies. Recover lock-in fees, suspend RFID access, and claim fit-out CapEx without rent-court delays.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Co-Working Managed Office Enterprise Seat Default Recovery Playbook"),
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

const STATUTORY_MATRIX = [
  {
    remedy: "Revocable License Termination & Immediate Physical Re-Entry",
    statute: "Indian Easements Act, 1882 (Sections 52, 60, 62 & 64)",
    timing: "Triggered upon 24-to-72 hour notice of default under Service Agreement",
    mechanism: "Revoke bare license to enter commercial facility; treat post-revocation presence as civil trespass without instituting protracted Civil Court or Rent Control eviction suits",
    relief: "Immediate physical repossession of private cabin or managed office floor; zero possessory tenancy rights accrue to the enterprise licensee",
    suitability: "Managed office clients, enterprise hot-desking, and private cabin members defaulting on monthly membership fees",
    tone: "emerald",
  },
  {
    remedy: "Unexpired Lock-In Minimum Commitment & Liquidated Damages Claim",
    statute: "Indian Contract Act, 1872 (Sections 73 & 74)",
    timing: "Immediate debt acceleration upon client repudiation or abandonment",
    mechanism: "Enforce the mandatory lock-in period clause; accelerate 100% of remaining seat fees as pre-estimated liquidated damages under the Kailash Nath doctrine",
    relief: "Full monetary recovery of unexpired lock-in fees and margin loss caused by client's premature mid-term termination",
    suitability: "Enterprises breaking 12-to-36 month minimum lock-in commitments after receiving enterprise seat volume discounts",
    tone: "emerald",
  },
  {
    remedy: "Bespoke Interior Fit-Out & Architectural CapEx Amortization Recovery",
    statute: "Indian Contract Act, 1872 (Section 73 — Reliance & Expectation Loss)",
    timing: "Compiled within 15 days of breach with chartered accountant certification",
    mechanism: "Demand unamortized balance of customized architectural build-outs, glass partitions, acoustic cabins, and private server room CapEx executed specifically for the client",
    relief: "100% reimbursement of unamortized capital expenditure supported by contractor invoices, architect certificates, and procurement vouchers",
    suitability: "Enterprise bespoke managed office floors where operator funded ₹50L to ₹5Cr+ in upfront capital improvements",
    tone: "slate",
  },
  {
    remedy: "Commercial Summary Suit for Unpaid GST Membership Invoices (Order XXXVII)",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII) & Commercial Courts Act, 2015",
    timing: "Following failure of Section 12A Pre-Institution Commercial Mediation",
    mechanism: "Fast-track summary suit based on countersigned Master Services Agreement, monthly GST invoices, and turnstile biometric access logs",
    relief: "Summary money decree without prolonged trial unless debtor deposits 100% disputed amount in court; pre-judgment bank attachment under Order XXXVIII Rule 5",
    suitability: "Corporate entities, venture-backed startups, and enterprise occupiers defaulting on liquidated seat invoices (> ₹3 Lakh)",
    tone: "slate",
  },
  {
    remedy: "Bailee's Particular Lien over Abandoned IT Hardware & Office Furniture",
    statute: "Indian Contract Act, 1872 (Sections 170 & 171) & Section 63 BSA 2023",
    timing: "Following 7-day Abandoned Goods Inventory Notice & Video Panchnama",
    mechanism: "Exercise lawful statutory bailee lien over client laptops, servers, screens, and chairs left behind in locked suites; inventory assets via continuous 4K video recording",
    relief: "Lawful detention of valuable corporate assets pending settlement of outstanding service dues; shields operator from criminal allegations of theft or conversion",
    suitability: "Delinquent corporate clients who ghost management, abandon physical cabins, and refuse to clear mature center arrears",
    tone: "slate",
  },
  {
    remedy: "Corporate Insolvency Resolution Process (IBC Section 8 Form 3 Notice)",
    statute: "Insolvency and Bankruptcy Code, 2016 (Sections 8 & 9)",
    timing: "Upon cumulative operational default exceeding ₹1.00 Crore after 10-day notice expiry",
    mechanism: "Serve formal statutory demand notice in Form 3; petition jurisdictional NCLT for initiation of Corporate Insolvency Resolution Process (CIRP)",
    relief: "Immediate commercial settlement or corporate insolvency; promoter directors face loss of corporate control over unpaid flex-space operational debt",
    suitability: "Funded enterprise startups and corporate debtors owing over ₹1 Crore across multiple centers or pan-India managed leases",
    tone: "emerald",
  },
];

const FAQS = [
  {
    question: "Is a co-working membership agreement considered a lease or a license under Indian law?",
    answer:
      "A co-working or managed office contract is legally a revocable Service License governed by Section 52 of the Indian Easements Act, 1882, and NOT a lease under Section 105 of the Transfer of Property Act, 1882. The landmark Supreme Court ruling in Associated Hotels of India v. R.N. Kapoor (1959) and Delta International Ltd. v. Shyam Sundar Ganeriwalla (1999) established that the decisive test between a lease and a license is 'exclusive legal possession'. In a co-working space, the operator retains master keys, controls physical access, maintains security, cleans the premises, and provides shared amenities (internet, HVAC, meeting rooms). Because legal possession remains with the operator, the occupier acquires zero tenancy rights, and Rent Control legislation has zero application.",
  },
  {
    question: "Can a co-working operator lawfully deactivate RFID access cards and biometric turnstiles when a client defaults?",
    answer:
      "Yes. Because a co-working agreement grants a bare license under Section 52 of the Indian Easements Act, 1882, the right to enter the facility is contingent upon timely payment of membership service fees. Upon default and expiry of a contractual cure notice (typically 24 to 72 hours), the license stands lawfully revoked under Section 62. Deactivating RFID keycards, biometric turnstiles, and Wi-Fi access does NOT constitute illegal eviction or criminal wrongful restraint under Section 126 of the Bharatiya Nyaya Sanhita, 2023 (formerly IPC Section 341), provided the operator gives prior written notice, does not physically confine individuals, and allows an escorted window for employees to collect personal belongings.",
  },
  {
    question: "How can a flex-space operator recover unexpired lock-in period fees when an enterprise breaks a 3-year contract?",
    answer:
      "Under Sections 73 and 74 of the Indian Contract Act, 1872, an explicit lock-in clause in a commercial B2B contract is legally enforceable as pre-estimated liquidated damages. Under the Supreme Court's jurisprudence in Kailash Nath Associates v. DDA (2015) and ONGC v. Saw Pipes (2003), liquidated damages are recoverable when they represent a genuine pre-estimate of loss. In co-working setups, operators prove that discounted seat pricing and reserved commercial real estate were granted strictly in reliance upon guaranteed 24-to-36 month revenue. The operator serves a formal acceleration notice demanding 100% of the unexpired lock-in fees, less demonstrable mitigation if the space is re-licensed to a new tenant.",
  },
  {
    question: "What is the legal procedure for handling abandoned laptops, server racks, and furniture left in a locked cabin?",
    answer:
      "Operators must execute an 'Abandoned Goods & Statutory Lien Protocol': (1) Serve a 7-day Abandoned Goods Notice via email and Speed Post RPAD demanding clearance of dues and retrieval of chattels; (2) Upon expiry, assemble an inventory committee comprising center management, a security lead, and an independent notary public; (3) Record unbroken 4K video footage of cabin entry and create an itemized inventory with serial numbers for all laptops, monitors, and servers; (4) Move the assets into secure bonded storage; (5) Assert a particular bailee's lien under Section 170 of the Indian Contract Act, 1872 until mature service charges are cleared. Never sell assets without a prior court decree or explicit contractual disposal authorization.",
  },
  {
    question: "Can an operator recover bespoke fit-out CapEx invested specifically for an enterprise client?",
    answer:
      "Yes. When an enterprise demands custom architectural modifications—such as private acoustic cabins, specialized glass partitions, dedicated server rooms, or bespoke ergonomic setups—the operator incurs upfront Capital Expenditure (CapEx) that is amortized into monthly seat fees across the lock-in period. If the enterprise defaults prematurely, the unamortized CapEx represents a direct, actual financial loss under Section 73 of the Indian Contract Act, 1872. The operator presents contractor bills, architect measurement sheets, and a chartered accountant-certified CapEx Amortization Schedule to claim 100% of the unamortized balance in a Commercial Summary Suit.",
  },
  {
    question: "Does Section 43B(h) of the Income Tax Act apply to co-working operators recovering unpaid membership invoices?",
    answer:
      "Yes, provided the co-working operator is registered as a Micro or Small Enterprise on the Udyam portal under the MSMED Act, 2006. Under Section 15 of the MSMED Act, enterprise clients must settle service invoices within the agreed credit window, which cannot exceed 45 days. Under Section 43B(h) of the Income Tax Act, 1961, any corporate client that fails to settle invoices from an Udyam-registered supplier within 45 days loses the right to claim those co-working fees and workspace expenses as a tax deduction in that financial year. The expense is added back to their taxable income at 30%+ corporate tax rates, giving the operator significant commercial settlement leverage.",
  },
  {
    question: "What evidence must a co-working operator compile under Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), electronic evidence requires a certificate signed by the officer managing the automated digital systems. For flex-space recovery, the dossier must include: (1) Digitally signed Master Services Agreements and KYC documents; (2) Automated turnstile RFID and biometric access timestamp logs; (3) IP address bandwidth consumption and local Wi-Fi login histories; (4) Center management software (e.g., Yardi, Coworkify, Nexudus) billing and meeting room booking logs; and (5) Certified CCTV entry footage and timestamped delivery receipts for statutory notice emails and Speed Post RPAD.",
  },
  {
    question: "Can a co-working provider initiate NCLT corporate insolvency proceedings against a defaulting corporate member?",
    answer:
      "Yes. Monthly membership fees, seat charges, utility reimbursements, and amortized fit-out installments constitute 'operational debt' under Section 5(21) of the Insolvency and Bankruptcy Code, 2016 (IBC). If a corporate member defaults on aggregate mature operational dues exceeding ₹1.00 Crore across one or multiple centers, the operator can serve a mandatory 10-day Demand Notice in Form 3 under Section 8. If the debtor fails to pay or demonstrate a pre-existing bona fide dispute within 10 days, the operator can file a Section 9 CIRP petition before the National Company Law Tribunal (NCLT), putting the debtor's corporate existence and board control at immediate risk.",
  },
];

const BREADCRUMB_ITEMS = [
  { label: "B2B Recovery", href: "/industries/builders-commercial-landlords-coworking-recovery" },
  { label: "Builders & Co-Working Hub", href: "/industries/builders-commercial-landlords-coworking-recovery" },
  { label: "Co-Working Enterprise Default Recovery", href: PAGE_URL },
];

export default function CoworkingManagedOfficeRecoveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_URL}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${PAGE_URL}`,
          url: `${SITE_URL}${PAGE_URL}`,
          name: EXACT_H1,
        },
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        author: {
          "@type": "Person",
          name: LEGAL_REVIEWER.name,
          jobTitle: LEGAL_REVIEWER.role,
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
        datePublished: "2026-11-16T12:00:00+05:30",
        dateModified: "2026-11-16T12:00:00+05:30",
        mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}${PAGE_URL}#howto`,
        name: "How Co-Working Operators Recover Enterprise Defaults, Revoke Licenses & Liquidate CapEx",
        description:
          "5-stage operational and legal escalation SOP for flex-space CFOs, managed-office operators, and landlords to revoke membership licenses, suspend RFID turnstile access, inventory abandoned IT hardware, and enforce lock-in CapEx recovery without rent-court delays.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Audit Service Agreement, Lock-In Covenants & Telemetry Dossier",
            text: "Examine countersigned Master Services Agreements (MSA), client KYC, lock-in duration, and security deposit clauses. Extract turnstile RFID, biometric access logs, Wi-Fi usage, and meeting room telemetry certified under BSA 2023 Section 63.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Issue 48-Hour Statutory Cure & License Revocation Notice",
            text: "Serve formal statutory legal notice under Section 52 of the Indian Easements Act, 1882, notifying the client that non-payment will result in immediate license revocation, RFID turnstile deactivation, and forfeiture of amenities.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Execute Digital Turnstile Suspension & Read-Only Amenity Freeze",
            text: "Upon cure period expiry, deactivate biometric access cards and turnstile credentials. Restrict internet bandwidth, IP routing, and conference room booking permissions while maintaining physical security integrity.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Execute Abandoned IT Hardware Video Panchnama & Statutory Lien",
            text: "Serve a 7-day Abandoned Chattels notice. Enter private suites under notary and security observation, capture unbroken 4K video recording, prepare a line-item serial-number inventory, and store assets under a Section 170 bailee's lien.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Institute Commercial Summary Suit (Order XXXVII) or NCLT Section 9 CIRP",
            text: "Initiate Section 12A commercial mediation and file an Order XXXVII Summary Suit for mature GST invoices, unexpired lock-in fees, and unamortized CapEx, or issue IBC Section 8 Demand Notice for corporate operational debt exceeding ₹1.00 Crore.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${PAGE_URL}#faq`,
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
        "@id": `${SITE_URL}${PAGE_URL}#breadcrumb`,
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
            name: "Builders & Co-Working Hub",
            item: `${SITE_URL}/industries/builders-commercial-landlords-coworking-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Co-Working Enterprise Default Recovery",
            item: `${SITE_URL}${PAGE_URL}`,
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

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Creditor Recovery Guide</span>
            <span className="text-slate-500">&bull;</span>
            <span>Co-Working &bull; Managed Offices &bull; Flex Spaces</span>
            <span className="text-slate-500">&bull;</span>
            <span>IND-08 §6.8</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Position &bull; Statutory Summary
            </span>
            Under Section 52 of the Indian Easements Act, 1882 and Supreme Court jurisprudence in <em>Associated Hotels</em>, co-working and managed office contracts are B2B service licenses—NOT tenancies. Across our{" "}
            <Link
              href="/industries/builders-commercial-landlords-coworking-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300"
            >
              Builders, Commercial Landlords &amp; Co-Working Hub
            </Link>
            , we guide flex-space CFOs in executing lawful RFID turnstile suspensions without eviction suits, asserting Section 170 bailee liens over abandoned IT hardware, accelerating unexpired lock-in fees, and recovering bespoke fit-out CapEx via Order XXXVII Summary Suits.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Statutory Relationship
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100">
                Revocable License
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Easements Act s.52 (Zero Lease)
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Access Card Freeze
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400">
                24–48h Notice
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                No Rent Court Eviction Needed
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                CapEx &amp; Lock-In
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400">
                100% Amortized
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Contract Act s.73/74 Damages
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Abandoned Assets
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400">
                Section 170 Lien
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Video Panchnama Protocol
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={BREADCRUMB_ITEMS} />
        </div>

        {/* 2-Column Split: Sidebar TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <CoworkingRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Operator Dilemma */}
            <section
              id="heading-operator-dilemma"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Institutional Exposure &bull; Market Realities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The Flex-Space Default Crisis: Broken Lock-Ins &amp; Abandoned Cabins
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  India&apos;s commercial flexible workspace sector has exploded to over 1,500 operators managing tens of millions of square feet across Bengaluru, NCR, Mumbai, Hyderabad, and Pune. National players like WeWork India, Awfis, IndiQube, Smartworks, and Table Space, alongside regional managed-office providers, regularly execute bespoke enterprise deals. In these transactions, corporate clients and venture-funded startups contract for 50 to 500+ dedicated seats on mandatory 24-month to 36-month lock-in periods.
                </p>
                <p>
                  To secure these high-value enterprise accounts, operators incur massive upfront capital expenditures (CapEx)—spending between ₹2,000 to ₹4,500 per square foot on custom glass partitioning, acoustic boardrooms, dedicated private server rooms, biometric access turnstiles, and ergonomic furnishings. This capital outlay is amortized directly into the client&apos;s monthly per-seat fee across the lock-in duration.
                </p>
                <div className="p-4 rounded-xl bg-red-50/80 border border-red-200 text-red-900 text-xs sm:text-sm">
                  <p className="font-bold mb-1">The Critical Institutional Bottleneck:</p>
                  When funded startups face funding freezes, bridge round collapses, or strategic downscaling, they routinely stop paying monthly seat fees, ignore GST invoices, and abandon private cabins filled with dozens of IT monitors, server racks, and office chairs. Flex-space center managers and CFOs often hesitate to act—falsely believing they must file lengthy eviction suits under archaic Rent Control Acts, or fearing criminal charges of &quot;illegal dispossession&quot; if they deactivate turnstiles or clear abandoned hardware. This operational paralysis destroys center yields and locks up valuable commercial floor space.
                </div>
                <p>
                  This operational guide provides the definitive, fact-verified playbook for co-working and managed-office operators to swiftly enforce their rights under the Indian Easements Act, 1882, the Indian Contract Act, 1872, and the Bharatiya Sakshya Adhiniyam, 2023.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Operator Recovery Flow (SVG Flowchart) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Standard Operating Procedure &bull; Workflow
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Operator Recovery Flow: Notice, Lockout &amp; CapEx Decree
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                A structured statutory escalation path designed to terminate the revocable license, disable access credentials, secure abandoned assets, and pursue monetary recovery without encountering civil court injunctions.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto pb-2">
                <svg
                  viewBox="0 0 880 220"
                  className="w-full h-auto min-w-[760px] text-slate-900 font-sans"
                  aria-label="5-Stage Co-Working Recovery Decision Tree"
                >
                  <defs>
                    <linearGradient id="boxGradRed" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                    <linearGradient id="boxGradSlate" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                    <filter id="softShadow" x="-5%" y="-10%" width="110%" height="130%">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
                    </filter>
                  </defs>

                  {/* Stage 1 */}
                  <g transform="translate(10, 20)">
                    <rect width="150" height="170" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" filter="url(#softShadow)" />
                    <rect width="150" height="34" rx="12" fill="url(#boxGradSlate)" />
                    <rect y="22" width="150" height="12" fill="url(#boxGradSlate)" />
                    <text x="75" y="22" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1: DAY 1–5</text>
                    <text x="75" y="60" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">Default Audit &amp;</text>
                    <text x="75" y="76" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">48h Cure Notice</text>
                    <text x="75" y="102" fill="#64748B" fontSize="9.5" textAnchor="middle">Audit MSA Lock-In</text>
                    <text x="75" y="118" fill="#64748B" fontSize="9.5" textAnchor="middle">Extract RFID Logs</text>
                    <text x="75" y="134" fill="#64748B" fontSize="9.5" textAnchor="middle">Serve 48h Cure Notice</text>
                    <rect x="25" y="148" width="100" height="20" rx="10" fill="#FEE2E2" />
                    <text x="75" y="161" fill="#DC2626" fontSize="9" fontWeight="bold" textAnchor="middle">Easements s.52</text>
                  </g>

                  {/* Arrow 1 */}
                  <path d="M 165 105 L 185 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <g transform="translate(190, 20)">
                    <rect width="150" height="170" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" filter="url(#softShadow)" />
                    <rect width="150" height="34" rx="12" fill="url(#boxGradSlate)" />
                    <rect y="22" width="150" height="12" fill="url(#boxGradSlate)" />
                    <text x="75" y="22" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2: DAY 6–10</text>
                    <text x="75" y="60" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">RFID Suspension &amp;</text>
                    <text x="75" y="76" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">Access Revocation</text>
                    <text x="75" y="102" fill="#64748B" fontSize="9.5" textAnchor="middle">Disable Turnstiles</text>
                    <text x="75" y="118" fill="#64748B" fontSize="9.5" textAnchor="middle">Revoke Wi-Fi / IP</text>
                    <text x="75" y="134" fill="#64748B" fontSize="9.5" textAnchor="middle">Escorted Baggage Exit</text>
                    <rect x="25" y="148" width="100" height="20" rx="10" fill="#FEE2E2" />
                    <text x="75" y="161" fill="#DC2626" fontSize="9" fontWeight="bold" textAnchor="middle">Zero Eviction Suit</text>
                  </g>

                  {/* Arrow 2 */}
                  <path d="M 345 105 L 365 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Stage 3 */}
                  <g transform="translate(370, 20)">
                    <rect width="150" height="170" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" filter="url(#softShadow)" />
                    <rect width="150" height="34" rx="12" fill="url(#boxGradSlate)" />
                    <rect y="22" width="150" height="12" fill="url(#boxGradSlate)" />
                    <text x="75" y="22" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3: DAY 11–20</text>
                    <text x="75" y="60" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">Video Panchnama &amp;</text>
                    <text x="75" y="76" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">Asset Inventory</text>
                    <text x="75" y="102" fill="#64748B" fontSize="9.5" textAnchor="middle">Notary Witness</text>
                    <text x="75" y="118" fill="#64748B" fontSize="9.5" textAnchor="middle">4K Video Recording</text>
                    <text x="75" y="134" fill="#64748B" fontSize="9.5" textAnchor="middle">Secure Warehouse Move</text>
                    <rect x="25" y="148" width="100" height="20" rx="10" fill="#FEF3C7" />
                    <text x="75" y="161" fill="#92400E" fontSize="9" fontWeight="bold" textAnchor="middle">Contract Act s.170</text>
                  </g>

                  {/* Arrow 3 */}
                  <path d="M 525 105 L 545 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Stage 4 */}
                  <g transform="translate(550, 20)">
                    <rect width="150" height="170" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" filter="url(#softShadow)" />
                    <rect width="150" height="34" rx="12" fill="url(#boxGradSlate)" />
                    <rect y="22" width="150" height="12" fill="url(#boxGradSlate)" />
                    <text x="75" y="22" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4: DAY 21–45</text>
                    <text x="75" y="60" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">Lock-In Acceleration &amp;</text>
                    <text x="75" y="76" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">CapEx Demand</text>
                    <text x="75" y="102" fill="#64748B" fontSize="9.5" textAnchor="middle">Unexpired Seat Fees</text>
                    <text x="75" y="118" fill="#64748B" fontSize="9.5" textAnchor="middle">Fit-Out Amortization</text>
                    <text x="75" y="134" fill="#64748B" fontSize="9.5" textAnchor="middle">3x RBI Rate Intimation</text>
                    <rect x="25" y="148" width="100" height="20" rx="10" fill="#D1FAE5" />
                    <text x="75" y="161" fill="#065F46" fontSize="9" fontWeight="bold" textAnchor="middle">Contract Act s.73/74</text>
                  </g>

                  {/* Arrow 4 */}
                  <path d="M 705 105 L 725 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Stage 5 */}
                  <g transform="translate(730, 20)">
                    <rect width="145" height="170" rx="12" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" filter="url(#softShadow)" />
                    <rect width="145" height="34" rx="12" fill="url(#boxGradRed)" />
                    <rect y="22" width="145" height="12" fill="url(#boxGradRed)" />
                    <text x="72.5" y="22" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 5: DAY 46+</text>
                    <text x="72.5" y="60" fill="#991B1B" fontSize="12" fontWeight="bold" textAnchor="middle">Commercial Decree</text>
                    <text x="72.5" y="76" fill="#991B1B" fontSize="12" fontWeight="bold" textAnchor="middle">or IBC Form 3</text>
                    <text x="72.5" y="102" fill="#7F1D1D" fontSize="9.5" textAnchor="middle">Order XXXVII CPC</text>
                    <text x="72.5" y="118" fill="#7F1D1D" fontSize="9.5" textAnchor="middle">Bank Attachment O.38</text>
                    <text x="72.5" y="134" fill="#7F1D1D" fontSize="9.5" textAnchor="middle">IBC s.8/9 (&ge; ₹1 Cr)</text>
                    <rect x="22.5" y="148" width="100" height="20" rx="10" fill="#DC2626" />
                    <text x="72.5" y="161" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">Final Enforcement</text>
                  </g>
                </svg>
              </div>

              {/* Mobile Stacked Flow Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#DC2626] uppercase">Stage 1 &bull; Day 1–5</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-700">Audit &amp; Cure</span>
                  </div>
                  <p className="font-bold text-sm text-slate-900 mb-1">Contract Audit &amp; 48-Hour Cure Notice</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify MSA lock-in covenants, extract BSA-certified RFID turnstile telemetry, and serve formal cure notice under Easements Act Section 52.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#DC2626] uppercase">Stage 2 &bull; Day 6–10</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-red-100 text-[#DC2626]">Access Freeze</span>
                  </div>
                  <p className="font-bold text-sm text-slate-900 mb-1">RFID Suspension &amp; Amenity Revocation</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deactivate biometric access and Wi-Fi credentials upon cure notice expiry. Provide an escorted window for personal items; zero civil eviction suit needed.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#DC2626] uppercase">Stage 3 &bull; Day 11–20</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">Chattel Lien</span>
                  </div>
                  <p className="font-bold text-sm text-slate-900 mb-1">Video Panchnama &amp; Hardware Inventory</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Serve 7-day chattel notice. Access private cabin under continuous 4K video with notary witness; store IT assets under Section 170 bailee lien.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#DC2626] uppercase">Stage 4 &bull; Day 21–45</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Damages Demand</span>
                  </div>
                  <p className="font-bold text-sm text-slate-900 mb-1">Lock-In Acceleration &amp; CapEx Amortization</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Accelerate unexpired lock-in seat fees and demand 100% of unamortized bespoke fit-out CapEx backed by architect certificates under Contract Act s.73/74.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-50 border border-red-300">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#DC2626] uppercase">Stage 5 &bull; Day 46+</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#DC2626] text-white">Court Decree</span>
                  </div>
                  <p className="font-bold text-sm text-slate-900 mb-1">Order XXXVII Summary Suit or IBC Form 3</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Institute fast-track commercial summary suit with bank attachment under Order 38 Rule 5, or initiate IBC Section 8 CIRP for claims exceeding ₹1.00 Crore.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Legal Remedies &bull; Statutory Matrix
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Matrix: Flex-Space Creditor Enforcement Remedies
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Co-working operators have access to six distinct statutory enforcement mechanisms under Indian law to enforce immediate center discipline and secure financial recovery.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white border-b border-slate-800">
                      <th className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold uppercase tracking-wider text-[11px]">
                        Remedy &amp; Strategic Purpose
                      </th>
                      <th className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold uppercase tracking-wider text-[11px]">
                        Statutory Governing Authority
                      </th>
                      <th className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold uppercase tracking-wider text-[11px]">
                        Procedural Mechanism &amp; Relief
                      </th>
                      <th className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold uppercase tracking-wider text-[11px]">
                        Ideal Default Profile
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900 align-top">
                          <span className="block mb-1">{row.remedy}</span>
                          <span className="text-[10px] text-slate-500 font-normal">
                            Timeline: {row.timing}
                          </span>
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 align-top font-semibold text-slate-800">
                          {row.statute}
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 align-top leading-relaxed">
                          <p className="mb-1">{row.mechanism}</p>
                          <span className="font-semibold text-emerald-700 text-[11px] block">
                            Relief: {row.relief}
                          </span>
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 align-top text-xs text-slate-600">
                          {row.suitability}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: 4 Enterprise Failure Modes (Scenario Tabs) */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Interactive Strategy Explorer &bull; Case Studies
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Operator Strategy Explorer: 4 Enterprise Failure Modes
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Examine tactical recovery protocols across the four most common commercial failure modes encountered by co-working and managed-office landlords.
              </p>

              <CoworkingRecoveryScenarioTabs />
            </section>

            {/* Section 5: Service License vs Tenancy */}
            <section
              id="heading-license-vs-tenancy"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Core Legal Jurisprudence &bull; Easements Act s.52
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Service Agreement vs Lease Deed: Why Rent Control Acts Never Apply
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  The single most dangerous misconception among regional flex-space operators is that defaulting corporate clients enjoy the status of &quot;tenants&quot; protected by state rent laws or the Transfer of Property Act, 1882. Defaulting debtors frequently weaponize this ambiguity by issuing cease-and-desist notices threatening to approach local civil courts or police authorities.
                </p>
                <p>
                  Indian legal jurisprudence draws a sharp, immutable distinction between a <strong>Lease</strong> under Section 105 of the Transfer of Property Act, 1882 and a <strong>Revocable License</strong> under Section 52 of the Indian Easements Act, 1882:
                </p>

                {/* Comparison Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Traditional Commercial Tenancy
                    </span>
                    <p className="font-extrabold text-slate-900 text-base mb-2">
                      Transfer of Property Act, 1882 (s.105)
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                      <li>Creates an interest in immovable property</li>
                      <li>Demises <strong>exclusive legal possession</strong> to tenant</li>
                      <li>Landlord cannot enter without prior contractual notice</li>
                      <li>Requires formal Section 106 termination notice &amp; civil eviction suit</li>
                      <li>Vulnerable to protracted Rent Control Tribunal delays (3–7 years)</li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/80 border border-emerald-300">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                      Co-Working &amp; Managed Office Agreement
                    </span>
                    <p className="font-extrabold text-emerald-950 text-base mb-2">
                      Indian Easements Act, 1882 (s.52)
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-900 list-disc list-inside font-medium">
                      <li>Creates <strong>zero proprietary interest</strong> or estate in land</li>
                      <li>Operator retains <strong>uninterrupted legal possession &amp; keys</strong></li>
                      <li>Client receives only a permissive right to use shared facilities</li>
                      <li>License is terminable/revocable per contractual terms</li>
                      <li>Zero eviction suit requirement; post-revocation stay is trespass</li>
                    </ul>
                  </div>
                </div>

                <p>
                  In the constitutional bench decision in <em>Associated Hotels of India Ltd. v. R.N. Kapoor [AIR 1959 SC 1262]</em>, the Supreme Court established the decisive test:
                </p>
                <div className="bg-slate-900 text-slate-100 p-4 sm:p-5 rounded-xl border-l-4 border-[#DC2626] text-xs sm:text-sm leading-relaxed italic">
                  &quot;If an interest in property is created by the deed, it is a lease; but if it only permits another to make use of the property, of which the legal possession continues under the owner, it is a licence. The substance of the document must be preferred to the form.&quot;
                </div>
                <p>
                  This doctrine was reaffirmed in <em>Delta International Ltd. v. Shyam Sundar Ganeriwalla [(1999) 4 SCC 545]</em> and <em>C.M. Beena v. P.N. Ramachandra Rao [(2004) 3 SCC 595]</em>. Because a co-working operator continuously provides electrical power, centralized HVAC, daily cleaning, high-speed broadband, fire suppression, and shared lounge amenities, the operator retains legal custody and control of the entire facility at all times. The enterprise occupier is merely a licensee.
                </p>
              </div>
            </section>

            {/* Section 6: Lawful Access Card & Turnstile Suspension */}
            <section
              id="heading-access-suspension"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operational Mechanics &bull; Digital Control
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Lawful RFID &amp; Biometric Turnstile Suspension: Zero Police Risk
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  When a commercial tenant stops paying rent in a traditional leased building, a landlord who physically padlocks the entrance risks criminal prosecution for &quot;wrongful restraint&quot; under Section 126 of the Bharatiya Nyaya Sanhita, 2023 (BNS) or an immediate mandatory injunction from a civil court.
                </p>
                <p>
                  In a co-working or managed office environment, the legal dynamics are fundamentally different. Deactivating access cards and biometric turnstiles does not constitute locking out a possessory tenant; it represents the <strong>withdrawal of electronic service amenities</strong> following the lawful revocation of a contractual license.
                </p>

                {/* SOP Callout Box */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white space-y-3">
                  <p className="font-bold text-sm sm:text-base text-red-400">
                    SOP: Flawless Execution of Access Suspension
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-200">
                    <p>
                      <strong>1. Deliver 48-Hour Written Notice:</strong> Transmit a fact-verified statutory notice citing Section 52 and Section 62 of the Indian Easements Act, 1882, notifying the client that failure to cure invoice arrears within 48 hours will trigger immediate electronic license revocation.
                    </p>
                    <p>
                      <strong>2. Deactivate Turnstiles, Not Exits:</strong> Ensure that all biometric and RFID credentials are electronically deactivated at entrance barriers, while emergency fire exits and stairwells remain completely unimpeded to comply with municipal fire codes.
                    </p>
                    <p>
                      <strong>3. Maintain Escorted Retrieval Protocol:</strong> If debtor employees arrive at the facility, the front desk must provide an escorted 2-hour window allowing staff to collect individual personal belongings (notebooks, backpacks, chargers) upon signing an exit register.
                    </p>
                    <p>
                      <strong>4. Preserve Local Police Intimation:</strong> Send a formal preventive intimation letter to the jurisdictional Station House Officer (SHO), clarifying that the commercial service license has been revoked under civil contract terms, attaching the signed Master Services Agreement and access logs.
                    </p>
                  </div>
                </div>

                <p>
                  By strictly adhering to this protocol, the co-working operator eliminates any risk of police interference or criminal complaints, while exerting immediate commercial pressure on the defaulting enterprise.
                </p>
              </div>
            </section>

            {/* Section 7: Abandoned Assets & Hardware Lien */}
            <section
              id="heading-abandoned-assets"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Asset Protection &bull; Bailee Lien
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Abandoned Laptops, Servers &amp; Furniture: Bailee&apos;s Lien Protocol
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  One of the most complex dilemmas confronting flex-space operators occurs when a defaulting enterprise ghosts management, abandons their private cabin, and leaves behind 50 to 200 monitors, laptop docking stations, private server racks, and expensive ergonomic office furniture. Operators need to re-license the space to paying clients, but moving the debtor&apos;s physical goods exposes them to counterclaims of theft, conversion, or property damage under Section 303 of the Bharatiya Nyaya Sanhita, 2023.
                </p>
                <p>
                  The solution lies in harmonizing <strong>Section 170 of the Indian Contract Act, 1872 (Bailee&apos;s Particular Lien)</strong> with a formal <strong>Video Panchnama Inventory Protocol</strong>:
                </p>

                {/* 4-Step Panchnama Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold mb-2">
                      1
                    </span>
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      7-Day Chattel Removal Notice
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Issue formal statutory notice via email and Speed Post RPAD demanding clearance of mature arrears and removal of all client-owned chattels within 7 days.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold mb-2">
                      2
                    </span>
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      Independent Panchnama Committee
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Assemble an inventory committee including the Center General Manager, Head of Security, and an independent Notary Public or Advocate Commissioner.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold mb-2">
                      3
                    </span>
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      Unbroken 4K Video Recording
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Record continuous, unedited 4K video capturing initial door seal breakage, cabin layout, physical condition, and close-ups of all device serial numbers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold mb-2">
                      4
                    </span>
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      Bonded Warehouse Custody &amp; Lien
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Box, seal, and transport assets to a secure storage facility at the debtor&apos;s expense, retaining legal custody under Section 170 until arrears are satisfied.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
                  <strong>Crucial Caution on Asset Liquidation:</strong> Under Section 171 and Indian common law, holding a bailee&apos;s lien permits detention of goods, but does NOT grant an automatic power of sale without an express contractual power of disposal or a formal execution decree from a Commercial Court. Selling enterprise laptops or proprietary servers without a court order can trigger criminal breach of trust allegations. Always retain the assets as settlement collateral while pursuing summary recovery.
                </div>
              </div>
            </section>

            {/* Section 8: CapEx & Lock-In Damages Recovery */}
            <section
              id="heading-capex-recovery"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Financial Damages &bull; Contract Act s.73/74
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Bespoke Fit-Out CapEx &amp; Lock-In Acceleration Under Section 73 &amp; 74
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  When an enterprise client breaches an enterprise managed-office agreement, the operator&apos;s financial damages extend far beyond unpaid monthly seat invoices. The operator has incurred two massive heads of commercial loss:
                </p>
                <ol className="list-decimal list-inside space-y-2 pl-2">
                  <li>
                    <strong>Unamortized Upfront Fit-Out CapEx:</strong> Specialized capital investments (acoustic partitions, bespoke server cooling, brand-specific executive boardrooms) executed exclusively to satisfy the client&apos;s architectural requirements.
                  </li>
                  <li>
                    <strong>Unexpired Lock-In Minimum Seat Commitments:</strong> Guaranteed revenue streams for the remainder of the agreed lock-in term (e.g., 24 to 36 months), in consideration of which deep volume discounts were granted.
                  </li>
                </ol>
                <p>
                  Under Sections 73 and 74 of the Indian Contract Act, 1872 and the Supreme Court&apos;s landmark decision in <em>Kailash Nath Associates v. Delhi Development Authority [(2015) 4 SCC 136]</em>, liquidated damages stipulated in a contract are enforceable if they represent a genuine pre-estimate of loss. Where actual loss can be proved, the court will award compensation based on actual proof of expenditure.
                </p>
                <p>
                  For bespoke managed-office floors, actual damages are easily proven by presenting:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-slate-700">
                  <li>Original turnkey contractor work orders and measurement books</li>
                  <li>GST payment receipts for interior fit-out procurement and electrical infrastructure</li>
                  <li>Chartered Accountant-certified CapEx Amortization Schedule demonstrating the exact unamortized balance remaining at the time of client repudiation</li>
                  <li>Historical seat pricing schedules demonstrating that discounted seat rates were contingent upon the full lock-in duration</li>
                </ul>
              </div>
            </section>

            {/* Section 9: Worked ₹64.8L Default Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Financial Proof &bull; Empirical Ledger
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Worked Financial Calculation: 100-Seat Enterprise Default Ledger
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Empirical illustration of an institutional recovery ledger for a 100-seat private managed suite in an Grade-A IT park, where the enterprise client repudiated its 36-month lock-in at Month 8.
              </p>

              {/* Financial Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-red-400 font-bold block">
                      Case Specimen: TechCorp India Pvt Ltd &bull; 100 Managed Seats
                    </span>
                    <span className="text-xs text-slate-400">
                      Lock-in: 36 Months &bull; Fee: ₹18,000/seat/mo &bull; Default at Month 8
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-950 text-red-300 border border-red-800">
                    Total Demand: ₹64,80,000 + Interest
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">1. Mature Unpaid Membership Dues (Months 6–8 @ ₹18,00,000/mo)</span>
                    <span className="font-bold text-slate-100">₹54,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">2. Less: 2-Month Security Deposit Set-Off (Adjusted against mature dues)</span>
                    <span className="font-bold text-emerald-400">- ₹36,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">3. Net Mature Operating Arrears Balance</span>
                    <span className="font-bold text-amber-400">₹18,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <div>
                      <span className="text-slate-300 block">4. Unamortized Bespoke Fit-Out CapEx (₹45L upfront CapEx / 36 mo)</span>
                      <span className="text-[11px] text-slate-500">Amortized over 8 mos = ₹10L; Unamortized balance = ₹35L</span>
                    </div>
                    <span className="font-bold text-slate-100">₹35,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <div>
                      <span className="text-slate-300 block">5. Liquidated Damages for Unexpired Lock-In (Months 9–14 Mitigation Window)</span>
                      <span className="text-[11px] text-slate-500">6-month vacancy mitigation margin @ ₹2,00,000 net margin/mo</span>
                    </div>
                    <span className="font-bold text-slate-100">₹12,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">6. Abandoned Chattel Panchnama, Video &amp; Bonded Warehouse Costs</span>
                    <span className="font-bold text-slate-100">₹1,80,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 text-base sm:text-lg font-black text-white">
                    <span>Total Net Recoverable Claim (Principal)</span>
                    <span className="text-emerald-400">₹66,80,000</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>
                    <strong>Statutory Interest:</strong> Compounded monthly at 3x RBI Bank Rate (MSMED Act s.16) or 18% p.a. under MSA.
                  </span>
                  <span className="text-red-400 font-semibold">
                    Limitation Stop: 3 Years from default date
                  </span>
                </div>
              </div>
            </section>

            {/* Section 10: BSA 2023 Evidence Checklist */}
            <section
              id="heading-bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Litigation Admissibility &bull; Digital Telemetry
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Evidence Dossier: Proving Uninterrupted Service
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act, 1872), electronic records are admissible in Commercial Courts and NCLT proceedings only when accompanied by a statutory certificate issued by the person responsible for the management of the relevant computer system.
                </p>
                <p>
                  Defaulting clients routinely argue that they &quot;stopped using the seats&quot; or manufacture spurious claims of poor internet connectivity or AC failures to resist summary decrees. Compiling an airtight BSA Section 63 evidentiary dossier permanently shuts down these fabricated defenses:
                </p>

                {/* Evidence Checklist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      1. RFID Turnstile &amp; Biometric Records
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Cryptographically certified server logs recording exact date and time timestamps of each employee badge swipe through speed gates and turnstiles, proving active occupancy.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      2. Bandwidth &amp; Local IP Gateway Logs
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Firewall, router, and DHCP server telemetry demonstrating continuous gigabit internet consumption, active MAC address allocations, and dedicated VLAN utilization.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      3. Meeting Room Booking Telemetry
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Application logs from co-working management portals (Yardi, Nexudus, Coworkify) proving employee reservations of conference rooms, presentation screens, and visitor passes.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      4. CCTV Entry Footage &amp; RPAD Proofs
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Timestamped CCTV entry recordings and postal Speed Post RPAD tracking receipts alongside WhatsApp Business API read receipts establishing unequivocal notice delivery.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11: Institutional B2B Desk (Dual CTA) */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Institutional Action &bull; Legal Notice Desk
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Deploy Co-Working Default Notices &amp; Institutional Recovery
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Whether you need to issue a single high-impact statutory license revocation notice on a defaulting startup or deploy institutional batch notices across hundreds of enterprise seats nationwide, LegalRecovery.in provides end-to-end legal support.
              </p>

              <CoworkingRecoveryCTA />
            </section>

            {/* Section 12: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Direct Statutory Answers &bull; FAQ
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions: Co-Working Defaults &amp; Lock-In Law
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 transition-colors open:bg-white open:border-slate-300"
                  >
                    <summary className="font-extrabold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-bold text-lg shrink-0 transition-transform group-open:rotate-180">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 13: Verified Precedents & Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judicial Precedents &bull; Bare Act Citations
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Verified Supreme Court Precedents &amp; Statutory Authorities
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626]">
                  <p className="font-bold text-slate-900 mb-1">
                    Associated Hotels of India Ltd. v. R.N. Kapoor [AIR 1959 SC 1262]
                  </p>
                  <p className="text-slate-600">
                    Supreme Court 4-judge constitutional bench establishing that the test of exclusive legal possession separates a lease from a revocable license under Section 52 of the Indian Easements Act, 1882.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626]">
                  <p className="font-bold text-slate-900 mb-1">
                    Delta International Ltd. v. Shyam Sundar Ganeriwalla [(1999) 4 SCC 545]
                  </p>
                  <p className="text-slate-600">
                    Supreme Court held that where the licensor retains overall control, provides staff, and retains keys, the contract remains a license even if terms like &apos;rent&apos; or &apos;premises&apos; appear loosely in correspondence.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626]">
                  <p className="font-bold text-slate-900 mb-1">
                    Kailash Nath Associates v. Delhi Development Authority [(2015) 4 SCC 136]
                  </p>
                  <p className="text-slate-600">
                    Supreme Court held that liquidated damages under Section 74 are enforceable when they represent a reasonable pre-estimate of loss, and actual commercial damages can be awarded based on proven financial records under Section 73.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626]">
                  <p className="font-bold text-slate-900 mb-1">
                    Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. [(2018) 1 SCC 353]
                  </p>
                  <p className="text-slate-600">
                    Supreme Court affirmed that under the Insolvency and Bankruptcy Code (IBC), a debtor cannot defeat an operational debt claim by manufacturing afterthought, illusory &apos;moonshine&apos; disputes after mature demand notices.
                  </p>
                </div>
              </div>

              {/* Sibling Spokes & Tools Cluster Links */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Related Real Estate &amp; Creditor Recovery Guides:
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/commercial-lease-lock-in-period-breach-unexpired-rent-recovery"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors"
                  >
                    Commercial Lease Lock-In Breach &rarr;
                  </Link>
                  <Link
                    href="/commercial-it-park-mall-cam-common-area-maintenance-arrears-recovery"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors"
                  >
                    Mall &amp; IT Park CAM Arrears Recovery &rarr;
                  </Link>
                  <Link
                    href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors"
                  >
                    RERA Builder Recovery Playbook &rarr;
                  </Link>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors"
                  >
                    MSME 3x RBI Interest Calculator &rarr;
                  </Link>
                  <Link
                    href="/legal-notice-to-tenant-for-unpaid-rent-eviction"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors"
                  >
                    Tenant Eviction Notice Guide &rarr;
                  </Link>
                  <Link
                    href="/templates/society-maintenance-recovery-notice"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors"
                  >
                    Society Maintenance Notice Format &rarr;
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
