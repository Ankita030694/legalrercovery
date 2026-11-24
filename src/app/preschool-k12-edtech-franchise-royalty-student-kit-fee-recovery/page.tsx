import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PreschoolKitTableOfContents from "./PreschoolKitTableOfContents";
import PreschoolKitScenarioTabs from "./PreschoolKitScenarioTabs";
import PreschoolKitCTA from "./PreschoolKitCTA";

export const revalidate = 86400;

const PAGE_PATH = "/preschool-k12-edtech-franchise-royalty-student-kit-fee-recovery";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Preschool Franchisee Admitted 90 Children, Declared Only 30 on Your ERP to Dodge Student-Kit Fees, and Photocopied Books? Franchisor Playbook";

const META_TITLE = "Preschool & K-12 Franchise Student-Kit & Royalty Recovery";
const META_DESCRIPTION =
  "Stop preschool franchise kit under-reporting, Copyright Act s.51 workbook piracy & rogue rebranding via physical headcount audits & bulk legal notices.";

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
        alt: formatAltText("Preschool and K-12 EdTech franchise student-kit and royalty evasion recovery"),
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

const FAQ_ITEMS = [
  {
    q: "How can a preschool franchisor legally prove a center admitted 90 children while declaring only 30 on the ERP?",
    a: "Under a Physical Headcount Audit Clause and Sections 73–74 of the Indian Contract Act, 1872, surprise regional auditor visits during morning assembly, timestamped classroom headcounts, school-bus transport manifests, and CCTV entry logs create objective proof of suppressed admissions. When preserved with a BSA 2023 Section 63 certificate, ERP-to-classroom headcount variance shifts the burden onto the franchisee to account for every enrolled child.",
  },
  {
    q: "What legal remedies apply when a preschool or abacus franchisee photocopies copyrighted student workbooks?",
    a: "Unauthorized scanning, photocopying, or spiral-binding of proprietary phonics workbooks, teacher manuals, and assessment sheets constitutes copyright infringement under Section 51 of the Copyright Act, 1957. Franchisors can seek civil injunctions, delivery-up of pirated stock, and statutory damages under Section 55, alongside criminal prosecution under Section 63 (punishable with up to 3 years imprisonment and fine).",
  },
  {
    q: "Can a franchisor stop a defaulting preschool partner from repainting the signboard and reopening as an independent play school?",
    a: "Yes. Post-termination operation using deceptively similar trade dress, interior classroom murals, or copyrighted curriculum triggers trademark infringement and passing-off remedies under Sections 29 and 135 of the Trade Marks Act, 1999. Because ongoing parent confusion causes irreparable brand injury, Commercial Courts routinely grant urgent ad-interim injunctions without mandatory pre-institution mediation under Section 12A.",
  },
  {
    q: "How does a multi-center skill or preschool chain recover unpaid Welcome Kit fees from 50+ centers at once?",
    a: "India's 120+ preschool, abacus, and robotics chains rarely litigate ₹50,000–₹3 Lakh per-center arrears individually due to legal fees. By onboarding as a recurring Representee account on LegalRecovery.in, franchisors upload a single CSV of defaulting centers and dispatch synchronized Fact-Verified Demand Notices via Email, WhatsApp, and Speed Post RPAD—triggering rapid 15-day settlements across the territory.",
  },
  {
    q: "Are post-dated cheques or e-NACH mandates collected for annual student-kit dispatches enforceable if bounced?",
    a: "Yes. Dishonoured cheques issued toward invoiced Welcome Kits or minimum annual royalties attract summary criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881, while bounced recurring royalty e-NACH mandates trigger Section 25 of the Payment and Settlement Systems Act, 2007. A statutory demand notice must be served within 30 days of receiving the bank return memo.",
  },
  {
    q: "Can a defaulting franchisee withhold parent fee records citing student data privacy?",
    a: "No. Under standard Indian franchise agreements, student enrolment registers, fee receipts, and academic assessment logs generated under the franchisor's brand and ERP remain licensed network records subject to inspection. Refusing mandatory audit access breaches express contractual inspection covenants and invites an adverse inference under Section 119 of the Bharatiya Sakshya Adhiniyam, 2023.",
  },
  {
    q: "Is a liquidated per-child penalty clause for unreported admissions enforceable under Section 74 of the Contract Act?",
    a: "Section 74 enforces liquidated damages that represent a genuine pre-estimate of loss. Structuring the clause to recover (1) full Welcome Kit MRP per unreported student, (2) unpaid royalty on standard fee slabs, (3) 18%–24% p.a. commercial interest, and (4) quantified audit inspection costs is far more defensible in arbitration and Commercial Courts than an arbitrary 5x fine.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Copyright Act, 1957 (Sections 51, 55 & 63 — Workbook & Curriculum Piracy) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "The Trade Marks Act, 1999 (Sections 29 & 135 — Brand Misuse & Passing Off) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 73 & 74 — Audit Damages & Liquidated Kit Fees) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Records & Section 119 Adverse Inference) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Section 138 — Dishonoured Kit & Royalty Cheques) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(ix) & Section 12A Urgent IP Relief) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
];

const STATUTORY_MATRIX = [
  {
    breach: "ERP Enrolment Under-Reporting (90 Admitted vs. 30 Declared)",
    statute: "Contract Act ss.73–74 + BNS s.316 + BSA s.63",
    evidence: "Surprise Classroom Headcount + Bus Manifest + Biometric Gate Logs",
    remedy: "15-Day Audit Cure Notice for Imputed Kit Fees & Royalty + 18% Interest",
  },
  {
    breach: "Photocopying Branded Workbooks & Teacher Manuals",
    statute: "Copyright Act ss.51, 55 & 63 + BSA s.63",
    evidence: "Trap-Purchased Spiral Workbook + Missing Hologram/ISBN Batch Stamp",
    remedy: "Civil Cease-and-Desist + Delivery-Up + Criminal IP Prosecution",
  },
  {
    breach: "Sourcing Unbranded Local Bags, Uniforms & Teaching Aids",
    statute: "Contract Act s.27 (In-Term Exclusivity) + Trade Marks Act s.29",
    evidence: "Regional QC Inspection Photos + Local Printer/Vendor Invoices",
    remedy: "Kit-Margin Restitution + Quality-Control Breach Cure Notice",
  },
  {
    breach: "Converting Branded Center to Independent Play School",
    statute: "Trade Marks Act ss.29 & 135 + Commercial Courts Act s.12A",
    evidence: "Geotagged Exterior Board Photos + Parent WhatsApp Rebrand Broadcasts",
    remedy: "Urgent Ad-Interim Injunction + Parent & Directory De-Affiliation",
  },
  {
    breach: "Bounced Kit-Dispatch PDCs or Royalty e-NACH Mandates",
    statute: "NI Act s.138 + PSS Act s.25",
    evidence: "Bank Dishonour Memo + Signed Kit Dispatch Challan / GST Tax Invoice",
    remedy: "Mandatory 30-Day Statutory Demand Notice + Summary Criminal Complaint",
  },
];

const EVIDENCE_CHECKLIST = [
  "Executed Franchise & Curriculum License Agreement highlighting the Physical Headcount Audit Clause, mandatory per-child Welcome Kit pricing, and post-term de-branding covenants.",
  "ERP Enrolment Export (CSV/PDF) showing center-wise declared admissions, batch codes, and Welcome Kit dispatch orders placed during the academic quarter.",
  "Surprise Academic Audit Report signed by the regional quality officer recording physical classroom headcounts across Playgroup, Nursery, LKG, and UKG rooms.",
  "Corroborating attendance proxies: school-bus route manifests, biometric/RFID gate-entry logs, and parent communication group member counts.",
  "Specimen of pirated/photocopied workbook or unbranded kit bag obtained during inspection, with timestamped photographs comparing against authentic holographic/ISBN prints.",
  "Signed Section 63 BSA 2023 Electronic Evidence Certificate covering ERP logs, LMS login histories, CCTV headcount clips, and WhatsApp admissions correspondence.",
  "Itemized GST Tax Invoices, e-Way Bills, and courier PODs for previously delivered Welcome Kits establishing undisputed commercial pricing per student.",
  "Bank Return Memos for any dishonoured kit-advance cheques (NI Act s.138) or monthly royalty e-NACH mandates (PSS Act s.25) with exact bounce dates.",
];

export default function PreschoolKitRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const reviewerPerson = {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about`,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
    author: reviewerPerson,
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Preschool & K-12 EdTech Franchisors Recover Evaded Student-Kit Fees and Stop Workbook Piracy",
    description:
      "Operational 4-step legal and audit SOP for franchisors to detect ERP headcount suppression, preserve Copyright Act s.51 evidence, and recover arrears across 50–1,500 centers.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Conduct Surprise Physical Headcount & Kit Audit",
        text: "Compare ERP-declared student rolls against actual classroom attendance, transport manifests, and biometric gate logs during morning assembly.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Preserve Specimen Pirated Workbooks & BSA s.63 Logs",
        text: "Secure physical specimens of photocopied books, photograph unbranded local kits, and execute a BSA 2023 Section 63 certificate for ERP and LMS logs.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve Synchronized Demand & Copyright Cease-and-Desist Notice",
        text: "Dispatch a Fact-Verified Legal Notice (single or bulk CSV batch) claiming imputed kit fees, unpaid royalties, and Copyright Act s.51/s.55 relief with a 15-day cure window.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Escalate Non-Responders to Commercial Court, ODR, or NI s.138",
        text: "File urgent Commercial Court s.12A / Arbitration s.9 injunctions for rogue rebranding or initiate NI s.138 / PSS s.25 proceedings for bounced instruments.",
      },
    ],
  };

  const faqSchema = {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Franchisors & Brand Licensors",
        item: `${SITE_URL}/industries/franchisors-brand-licensors-oem-dealership-recovery`,
      },
      { "@type": "ListItem", position: 4, name: "Preschool & K-12 Kit & Royalty Recovery", item: PAGE_URL },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, howToSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-24 Franchisor Playbook</span>
            <span>&bull;</span>
            <span>Copyright Act s.51 + Headcount Audit</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under the{" "}
            <Link
              href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Franchisor &amp; Brand Licensor Recovery Framework
            </Link>
            , preschool and K-12 skill chains recover evaded student-kit fees by pairing a surprise Physical Headcount Audit with Copyright Act Section 51 workbook-piracy notices, BSA 2023 s.63 ERP logs, and synchronized bulk legal notice dispatch across defaulting centers.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">120+ Chains</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Managing 50–1,500 Indian preschool &amp; skill centers
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">15-Day Cure</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Typical settlement window post-audit demand notice
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">Copyright s.51/63</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Civil damages + criminal liability for photocopied books
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">50+ Notices/Yr</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Batch Representee CSV dispatch per academic season
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              {
                label: "Franchisors & Brand Licensors",
                href: "/industries/franchisors-brand-licensors-oem-dealership-recovery",
              },
              { label: "Preschool & K-12 Kit & Royalty Recovery", href: PAGE_PATH },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <PreschoolKitTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Kit Monetization Model */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Why Preschool &amp; Skill Franchisors Lose Revenue on Student Kits
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Unlike quick-service restaurants that collect weekly gross-sales royalties, most Indian preschool, daycare, abacus, robotics, and phonics chains rely on a <strong>per-child Welcome Kit monetization model</strong>. The franchisor charges a modest upfront brand fee and derives 70%–85% of recurring unit economics from mandatory annual student kits—comprising branded school bags, uniforms, phonetic workbooks, sensory toys, and LMS access codes priced between ₹4,500 and ₹9,500 per child.
                </p>
                <p>
                  Across India&apos;s 120+ organized preschool and skill-education networks managing 50 to 1,500 centers each, admission-season leakage follows a predictable three-step pattern: a center enrolls 80 to 90 children on campus, enters only 25 to 30 names on the franchisor&apos;s ERP portal, and supplies the remaining 60 students with locally stitched unbranded bags and <strong>photocopied proprietary workbooks</strong>. Because traditional law firms charge ₹15,000–₹35,000 per legal notice, regional heads write off ₹1.5–₹4.5 Lakh per-center deficits until the partner defaults entirely or rebrands as an independent play school.
                </p>
                <p>
                  This guide outlines the institutional creditor playbook anchored in our{" "}
                  <Link
                    href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    IND-24 Franchisor &amp; Brand Licensor Recovery Hub
                  </Link>
                  —converting scattered admission-season leakage into enforceable audit claims and recurring{" "}
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    bulk legal notice batches
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree Flowchart */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  5-Step Headcount Audit &amp; Kit Recovery Decision Tree
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Execute these five sequential stages before terminating a center or locking its ERP credentials so your monetary and IP claims survive Commercial Court scrutiny.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  width="860"
                  height="210"
                  viewBox="0 0 860 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-step preschool franchise headcount audit and student kit fee recovery flowchart"
                  className="w-full h-auto"
                >
                  <rect x="10" y="25" width="150" height="150" rx="14" fill="#0F172A" />
                  <text x="24" y="55" fill="#F87171" fontSize="11" fontWeight="700">STEP 1 &bull; DAY 1</text>
                  <text x="24" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">ERP vs. Campus</text>
                  <text x="24" y="98" fill="#FFFFFF" fontSize="13" fontWeight="700">Headcount Audit</text>
                  <text x="24" y="124" fill="#CBD5E1" fontSize="10">Morning assembly count</text>
                  <text x="24" y="140" fill="#CBD5E1" fontSize="10">+ bus &amp; gate manifests</text>

                  <path d="M164 100 H184" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="184,95 192,100 184,105" fill="#DC2626" />

                  <rect x="194" y="25" width="150" height="150" rx="14" fill="#1E293B" />
                  <text x="208" y="55" fill="#F87171" fontSize="11" fontWeight="700">STEP 2 &bull; DAY 2</text>
                  <text x="208" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">Trap-Buy Pirated</text>
                  <text x="208" y="98" fill="#FFFFFF" fontSize="13" fontWeight="700">Workbook Proof</text>
                  <text x="208" y="124" fill="#CBD5E1" fontSize="10">Preserve photocopies</text>
                  <text x="208" y="140" fill="#CBD5E1" fontSize="10">+ BSA s.63 certificate</text>

                  <path d="M348 100 H368" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="368,95 376,100 368,105" fill="#DC2626" />

                  <rect x="378" y="25" width="150" height="150" rx="14" fill="#0F172A" />
                  <text x="392" y="55" fill="#F87171" fontSize="11" fontWeight="700">STEP 3 &bull; DAY 4</text>
                  <text x="392" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">15-Day Audit &amp;</text>
                  <text x="392" y="98" fill="#FFFFFF" fontSize="13" fontWeight="700">Copyright Notice</text>
                  <text x="392" y="124" fill="#CBD5E1" fontSize="10">Single or Bulk CSV</text>
                  <text x="392" y="140" fill="#CBD5E1" fontSize="10">Email + WA + RPAD</text>

                  <path d="M532 100 H552" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="552,95 560,100 552,105" fill="#DC2626" />

                  <rect x="562" y="25" width="145" height="150" rx="14" fill="#1E293B" />
                  <text x="576" y="55" fill="#34D399" fontSize="11" fontWeight="700">STEP 4 &bull; DAY 19</text>
                  <text x="576" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">Kit Regularization</text>
                  <text x="576" y="98" fill="#FFFFFF" fontSize="13" fontWeight="700">or LMS Lock</text>
                  <text x="576" y="124" fill="#CBD5E1" fontSize="10">Collect imputed MRP</text>
                  <text x="576" y="140" fill="#CBD5E1" fontSize="10">or suspend portal</text>

                  <path d="M711 100 H728" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="728,95 736,100 728,105" fill="#DC2626" />

                  <rect x="738" y="25" width="112" height="150" rx="14" fill="#991B1B" />
                  <text x="748" y="55" fill="#FECACA" fontSize="11" fontWeight="700">STEP 5</text>
                  <text x="748" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">ODR / IP</text>
                  <text x="748" y="98" fill="#FFFFFF" fontSize="13" fontWeight="700">Injunction</text>
                  <text x="748" y="124" fill="#FEE2E2" fontSize="10">Comm. Court s.12A</text>
                  <text x="748" y="140" fill="#FEE2E2" fontSize="10">+ NI s.138 / s.25</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  { step: "Step 1 • Day 1", title: "ERP vs. Campus Headcount Audit", desc: "Record morning assembly headcounts, school-bus manifests, and gate-entry logs." },
                  { step: "Step 2 • Day 2", title: "Trap-Buy Pirated Workbook Proof", desc: "Preserve photocopied books and execute a BSA 2023 s.63 electronic evidence certificate." },
                  { step: "Step 3 • Day 4", title: "15-Day Audit & Copyright Notice", desc: "Dispatch single or bulk CSV notices via Email, WhatsApp, and Speed Post RPAD." },
                  { step: "Step 4 • Day 19", title: "Kit Regularization or LMS Lock", desc: "Recover imputed Welcome Kit MRP or suspend LMS & digital curriculum access." },
                  { step: "Step 5 • Escalation", title: "ODR / Commercial Court IP Injunction", desc: "Seek urgent s.12A / s.9 injunctions for rebranding and file NI s.138 for bounced cheques." },
                ].map((item) => (
                  <div key={item.step} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">{item.step}</p>
                    <p className="text-sm font-bold mb-1">{item.title}</p>
                    <p className="text-xs text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Enforcement Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Matrix: Copyright Act s.51, Audits &amp; Rebranding
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Every preschool and EdTech franchise breach maps to a distinct statutory remedy—allowing franchisors to combine contractual kit-fee recovery with criminal copyright and trademark leverage.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Franchisee Violation</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Mandatory Proof</th>
                      <th className="p-3.5 font-bold">Creditor Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row) => (
                      <tr key={row.breach} className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">{row.breach}</td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">{row.statute}</td>
                        <td className="p-3.5 text-slate-600">{row.evidence}</td>
                        <td className="p-3.5 text-slate-700 font-medium">{row.remedy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-piracy-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  4 Preschool &amp; EdTech Evasion Scenarios (Interactive Playbooks)
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Select a failure mode below to inspect the commercial leakage pattern, statutory leverage, and 3-step enforcement protocol.
              </p>

              <PreschoolKitScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Kit-Fee Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Worked Recovery Ledger: 60 Unreported Students &amp; Pirated Kits
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-5">
                Consider a single Tier-2 preschool center admitting <strong>90 children</strong> across Playgroup–UKG while declaring only <strong>30 students</strong> on the franchisor&apos;s ERP, and photocopying workbooks for the remaining <strong>60 unreported children</strong>. Below is the legally defensible claim schedule for the 15-day Advocate Demand Notice:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 mb-5 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3 mb-4">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-400">
                    Single-Center Audit Variance Schedule (Contract Act s.73/74 + Copyright Act s.55)
                  </p>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-bold">
                    60-Child Suppression Gap
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">1. Evaded Welcome Kit Fees (60 children &times; ₹6,500 MRP)</span>
                    <span className="font-bold text-white shrink-0">₹3,90,000</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">2. Unpaid Tuition Royalty (60 &times; ₹42,000 avg. fee &times; 15%)</span>
                    <span className="font-bold text-white shrink-0">₹3,78,000</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">3. Contractual Audit Inspection &amp; QC Verification Cost</span>
                    <span className="font-bold text-white shrink-0">₹35,000</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">4. Commercial Interest @ 18% p.a. (6 months overdue)</span>
                    <span className="font-bold text-amber-300 shrink-0">₹69,120</span>
                  </div>
                  <div className="flex justify-between gap-4 pt-1 text-base sm:text-lg">
                    <span className="font-black text-emerald-400">Total Recoverable Demand (Per Defaulting Center)</span>
                    <span className="font-black text-emerald-400 shrink-0">₹8,72,120</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                <strong>Portfolio Scale Impact:</strong> Across a 200-center preschool or abacus network where even 25% of centers (50 centers) under-report 20–60 admissions per year, annual recoverable leakage exceeds <strong>₹2.5 Cr to ₹4.3 Cr</strong>—making a recurring 50-notice/year Representee account far more profitable than ad-hoc single-center litigation.
              </div>
            </section>

            {/* Section 6: BSA 2023 s.63 Audit Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  BSA 2023 s.63 Physical Audit &amp; Curriculum Evidence Checklist
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Assemble these eight records before dispatching your demand notice or initiating{" "}
                <Link
                  href="/online-dispute-resolution-india"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Online Dispute Resolution (ODR)
                </Link>{" "}
                proceedings so the franchisee cannot dispute headcount math or electronic ERP logs.
              </p>

              <ul className="space-y-3">
                {EVIDENCE_CHECKLIST.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs sm:text-sm text-slate-700"
                  >
                    <span className="w-6 h-6 rounded-md bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7: Dual-Track B2B Conversion CTAs */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Serve 1 Pilot Notice (₹999) or Upload Multi-Center CSV
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Test our Fact-verified audit demand workflow on a single defaulting preschool center, or onboard your entire 50–1,500 center network as a bulk Representee account.
              </p>

              <PreschoolKitCTA />
            </section>

            {/* Section 8: Franchisor Hub, Calculators, Templates & Sibling Spokes */}
            <section
              id="heading-hub-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  IND-24 Franchisor Hub, Calculators, Templates &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <Link
                  href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">IND-24 Franchisors &amp; Brand Licensors Hub &rarr;</p>
                  <p className="text-slate-600">Complete sector playbook for QSR, retail, preschool, and OEM dealership recovery.</p>
                </Link>

                <Link
                  href="/terminated-rogue-franchisee-using-brand-signboard-royalty-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">Rogue Holdover Franchisee Signboard Injunction &rarr;</p>
                  <p className="text-slate-600">Stop terminated centers from using your brand board, trade dress, and local listings.</p>
                </Link>

                <Link
                  href="/franchisee-pos-cash-skimming-sales-underreporting-royalty-audit-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">Franchisee Personal UPI &amp; Sales Under-Reporting &rarr;</p>
                  <p className="text-slate-600">Audit hidden walk-in collections routed through proprietor personal QR codes.</p>
                </Link>

                <Link
                  href="/fico-foco-franchise-investor-minimum-guarantee-capex-dispute-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">FICO / FOCO Franchise CapEx &amp; Minimum Guarantee &rarr;</p>
                  <p className="text-slate-600">Resolve investor lockouts, inventory retention, and minimum-guarantee disputes.</p>
                </Link>

                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">Distributor &amp; Channel Partner Dues Recovery &rarr;</p>
                  <p className="text-slate-600">Recover unpaid stockist and regional kit-distributor credit invoices across India.</p>
                </Link>

                <Link
                  href="/tools/section-25-nach-bounce-limitation-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">PSS Act s.25 e-NACH Bounce Limitation Calculator &rarr;</p>
                  <p className="text-slate-600">Compute exact 30-day statutory notice and complaint deadlines for bounced mandates.</p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">MSME 3x RBI Compound Interest Calculator &rarr;</p>
                  <p className="text-slate-600">Calculate statutory delayed-payment interest for MSME-registered curriculum suppliers.</p>
                </Link>

                <Link
                  href="/templates/section-25-pss-act-nach-bounce-legal-notice-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">Section 25 PSS Act e-NACH Bounce Notice Template &rarr;</p>
                  <p className="text-slate-600">Generate a compliant statutory demand notice for dishonoured royalty auto-debits.</p>
                </Link>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  FAQs: Preschool &amp; EdTech Student-Kit &amp; Royalty Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <details
                    key={item.q}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4">
                      <span>{item.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Official Statutory Portals */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Official Statutory Portals &amp; Bare Act Authorities
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline font-medium"
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
