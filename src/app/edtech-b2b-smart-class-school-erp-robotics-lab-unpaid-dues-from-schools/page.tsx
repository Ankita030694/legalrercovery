import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import EdtechVendorTableOfContents from "./EdtechVendorTableOfContents";
import EdtechVendorScenarioTabs from "./EdtechVendorScenarioTabs";
import EdtechVendorNoticeCTA from "./EdtechVendorNoticeCTA";

export const revalidate = 86400;

const PAGE_PATH = "/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const EXACT_H1 =
  "Installed ₹15 Lakh of Smart-Class Panels, STEM Labs or Curriculum Kits on a 3-Year School Contract—and the School Trust Stopped Paying?";
const META_TITLE = "B2B EdTech, Smart-Class & School ERP Debt Recovery";
const META_DESC =
  "B2B EdTech, IFP smart-class & ERP vendors: sue the Registered Society or Trust u/s 6 Societies Act—not just the school name—and run bulk CSV notices.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("B2B EdTech Smart-Class and School ERP Debt Recovery Guide"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
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
    q: "Why do B2B EdTech companies lose recovery suits when they only sue 'XYZ Public School'?",
    a: "In India, a school brand name like 'XYZ Public School' is typically not a separate juristic person—it is an operational unit run by a Registered Charitable Society, a Public Trust, or a Section 8 Company. Under Section 6 of the Societies Registration Act, 1860, a society must sue or be sued through its President, Chairman, or Secretary. Suing only the school name invites an Order VII Rule 11 CPC rejection for non-joinder of a juristic entity.",
  },
  {
    q: "Can a smart-class vendor enter the school campus and repossess Interactive Flat Panels (IFPs) on default?",
    a: "No forcible self-help entry should be attempted. Entering a school premises without consent to detach mounted IFPs or robotics equipment risks criminal trespass and mischief complaints. Peaceful repossession is lawful only with signed written handover from the Principal or Trust Secretary pursuant to a termination notice, or through a Court Commissioner / Receiver appointed under Section 9 of the Arbitration Act or Order XXXIX CPC.",
  },
  {
    q: "What if a new School Principal or Managing Committee refuses to pay invoices signed by the previous trustees?",
    a: "Under Section 6 of the Societies Registration Act and settled trust law, a change in office-bearers or Principal does not extinguish the liability of the underlying Society, Trust, or Section 8 Company. Once Installation & Commissioning (I&C) Certificates are signed, GST Input Tax Credit is claimed, or part-payments are recorded, the institution is estopped from repudiating the contract.",
  },
  {
    q: "Can a B2B EdTech or School ERP vendor file on MSME Samadhaan against a charitable school trust?",
    a: "Yes, provided the EdTech vendor holds a valid Udyam Registration as a Micro or Small Enterprise prior to or at the time of contract execution, and the agreement is for supply of goods (IFPs, STEM kits, books) or services (ERP SaaS, annual maintenance). Private school trusts and societies qualify as 'buyers' under Section 2(d) of the MSMED Act, 2006, exposing them to 3x RBI bank rate compound interest under Section 16.",
  },
  {
    q: "Does Section 43B(h) of the Income Tax Act apply to schools and educational societies?",
    a: "Charitable trusts claiming exemption under Section 11/12AA operate differently from commercial Section 8 or private corporate entities, yet for taxable commercial education companies (coaching chains, corporate EdTechs, Section 8/private limited school management companies), delayed Micro/Small enterprise payments beyond 45 days trigger income tax disallowance under Section 43B(h). Even for trusts, MSMED Section 16 compound interest at 3x RBI rate remains fully enforceable.",
  },
  {
    q: "How should we recover unpaid dues from 200+ defaulting Tier-2 and Tier-3 partner schools at once?",
    a: "Do not litigate 200 fragmented ₹1.5–₹8 Lakh ledgers individually in district courts. First, standardize your master CSV with each school's underlying Registered Society/Trust name, GSTIN, and office-bearer details. Second, dispatch advocate-vetted batch notices simultaneously via Email, WhatsApp, and Speed Post RPAD. Third, escalate non-responders selectively via Section 138 NI Act (for bounced PDCs), Section 25 PSS Act (for NACH bounces), or MSEFC Samadhaan.",
  },
  {
    q: "Can we disable the School ERP or cloud LMS license while the dispute is pending?",
    a: "Yes, if your Master Service Agreement (MSA) or Subscription Terms contain an express suspension-for-non-payment clause and you have served a prior written cure notice (typically 7 to 15 days). Always preserve timestamped login telemetry, active student seat counts, and Section 63 BSA 2023 server logs before suspending access so the school cannot allege arbitrary deficiency of service.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Societies Registration Act, 1860 (Section 6 — Suits by and against Societies) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2262",
  },
  {
    title: "The Indian Trusts Act, 1882 & Code of Civil Procedure, 1908 (Order XXXI — Suits by or against Trustees)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18) — MSME Samadhaan",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "The Negotiable Instruments Act, 1881 (Section 138) & Payment and Settlement Systems Act, 2007 (Section 25)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records & Server Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "NGO Darpan / NITI Aayog Portal (Society & Trust Registration Verification)",
    url: "https://ngodarpan.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const REVIEWER_NAME = "Anuj Anand Malik";
const REVIEWER_ROLE = "Advocate & Founder, AMA Legal Solutions";

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESC,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
  author: {
    "@type": "Person",
    name: REVIEWER_NAME,
    jobTitle: REVIEWER_ROLE,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
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

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How B2B EdTech & Smart-Class Vendors Recover Unpaid Dues from Private Schools",
  description:
    "Step-by-step legal recovery SOP for EdTech CFOs to fix Society/Trust entity defects, enforce 3–5 year BOOT contracts, and run bulk CSV demand notices.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Identify the Underlying Juristic Entity",
      text: "Verify whether the school operates under a Registered Society (Section 6 Societies Registration Act), Public Charitable Trust, or Section 8 Company using GSTIN, TDS Form 26AS, or CBSE/ICSE disclosures.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Compile BSA 2023 s.63 Electronic & Campus Proof",
      text: "Assemble signed Installation & Commissioning (I&C) Certificates, IFP hardware serial/MAC logs, ERP active-user telemetry, and GSTR-2B ITC records.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Cured Advocate Demand Notice (Single or Batch CSV)",
      text: "Dispatch a 15-day statutory notice naming the Society/Trust through its President/Secretary alongside the School Principal via Email, WhatsApp, and Speed Post RPAD.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Escalate to MSEFC Samadhaan, Section 138 NI Act, or Order XXXVII CPC",
      text: "File on MSME Samadhaan for 3x RBI compound interest, invoke Section 138/25 for bounced PDCs/NACH, or file an Order XXXVII Summary Suit / Section 9 Arbitration petition.",
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Schools, Universities & EdTech B2B Recovery",
      item: `${SITE_URL}/industries/schools-universities-edtech-b2b-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "B2B EdTech, Smart-Class & School ERP Debt Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function EdtechB2BSmartClassRecoveryPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-17 &bull; B2B EdTech &amp; School Vendor Playbook</span>
            <span>&bull;</span>
            <span>Section 6 Societies Act &amp; Trust Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            A school brand name is not a juristic entity. Under our{" "}
            <Link
              href="/industries/schools-universities-edtech-b2b-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Schools, Universities &amp; EdTech B2B Recovery Hub
            </Link>
            , vendors recover unpaid IFP smart-class, ERP, and STEM lab annuities by suing the underlying{" "}
            <strong>Registered Society (Section 6 Societies Registration Act)</strong>,{" "}
            <strong>Public Trust</strong>, or <strong>Section 8 Company</strong> through its President/Secretary—paired with MSMED Act s.16 interest and batch CSV notices.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">Sec. 6 Defect</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                #1 Reason Suits Against &lsquo;School Name&rsquo; Get Dismissed
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Monthly Compound Interest Under MSMED Act s.16
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">30-Day Clock</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                NI Act s.138 &amp; PSS Act s.25 Notice Window on PDC/NACH
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">10&ndash;10,000+</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Partner Schools Covered in Single CSV Batch Dispatch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Schools & EdTech B2B Recovery",
              href: "/industries/schools-universities-edtech-b2b-recovery",
            },
            {
              label: "EdTech Smart-Class & ERP Vendor Recovery",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <EdtechVendorTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Entity Trap */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why Suing &lsquo;XYZ Public School&rsquo; Fails Under Indian Law
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India, B2B EdTech vendors—ranging from Interactive Flat Panel (IFP) smart-class integrators and robotics/STEM lab providers to K-12 curriculum publishers and School ERP SaaS platforms—deploy ₹10 Lakh to ₹50 Lakh of hardware and multi-year software per school on 3-to-5 year annuity or Build-Own-Operate-Transfer (BOOT) contracts. When a school in a Tier-2 or Tier-3 town stops paying its quarterly ₹1.25 Lakh annuity after Year 1, the vendor&apos;s finance team routinely hands the Purchase Order to local counsel to issue a legal notice to <em>&ldquo;The Principal, XYZ Public School.&rdquo;</em>
                </p>
                <p>
                  <strong>That single drafting error invalidates recovery at the threshold.</strong> Under Indian affiliation norms (CBSE, ICSE, and State Boards), a K-12 school cannot be run as an independent commercial proprietorship—it must be operated by a non-profit <strong>Registered Charitable Society</strong> (under the Societies Registration Act, 1860 or State variants), a <strong>Public Charitable Trust</strong> (under the Indian Trusts Act, 1882 or State Public Trusts Acts), or a <strong>Section 8 Company</strong> (under the Companies Act, 2013). The school&apos;s brand name is merely an operational trade name, not a juristic person capable of being sued or having a bank account attached.
                </p>
                <p>
                  When a recovery plaint or MSME Samadhaan claim names only the school brand, defense counsel files an immediate application under <strong>Order VII Rule 11 of the Code of Civil Procedure, 1908</strong> seeking rejection of the plaint for non-joinder of a juristic entity. Worse, even if an ex-parte decree is obtained against &ldquo;XYZ Public School,&rdquo; executing court bailiffs cannot attach bank accounts held in the name of <em>&ldquo;Shri Vidya Mandir Shikshan Samiti&rdquo;</em> unless the Society and its statutory office-bearers were properly arrayed from Day 1.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                  <p className="font-bold mb-1">Creditor Rule of Thumb:</p>
                  <p>
                    Always verify the entity name on the school&apos;s <strong>TDS Form 16A / 26AS</strong>, <strong>GSTIN</strong>, or <strong>CBSE Mandatory Public Disclosure</strong> before dispatching your first demand notice. If the school itself is struggling with parent tuition arrears, share our{" "}
                    <Link
                      href="/how-private-schools-recover-unpaid-fees-without-withholding-tc"
                      className="font-bold text-[#DC2626] underline"
                    >
                      RTE-Compliant School Fee Recovery Guide
                    </Link>{" "}
                    only after securing your own Society/Trust acknowledgment.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-entity-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Entity Mapping Decision Tree: Who Must Be Sued?
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Before issuing a statutory demand notice or uploading a 200-school recovery CSV, map each delinquent campus to one of these four juristic structures.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <svg
                  width="820"
                  height="310"
                  viewBox="0 0 820 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto mx-auto"
                  role="img"
                  aria-label="Decision tree for suing Registered Society, Public Trust, Section 8 Company, or State-Aided School"
                >
                  {/* Root Node */}
                  <rect x="260" y="10" width="300" height="52" rx="10" fill="#111827" />
                  <text x="410" y="32" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="700">
                    School Defaults on EdTech / ERP Invoice
                  </text>
                  <text x="410" y="50" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="600">
                    Check PAN / GSTIN / CBSE Disclosure Entity
                  </text>

                  {/* Connector Lines */}
                  <path d="M410 62 V92 M105 92 H715 M105 92 V120 M308 92 V120 M512 92 V120 M715 92 V120" stroke="#94A3B8" strokeWidth="2" />

                  {/* Branch 1: Registered Society */}
                  <rect x="15" y="120" width="180" height="64" rx="8" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
                  <text x="105" y="143" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
                    Registered Society
                  </text>
                  <text x="105" y="160" textAnchor="middle" fill="#475569" fontSize="10">
                    Societies Reg. Act, 1860 s.6
                  </text>
                  <text x="105" y="174" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="700">
                    Sue via President / Secretary
                  </text>

                  {/* Branch 2: Public Trust */}
                  <rect x="218" y="120" width="180" height="64" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                  <text x="308" y="143" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
                    Public / Private Trust
                  </text>
                  <text x="308" y="160" textAnchor="middle" fill="#475569" fontSize="10">
                    Trusts Act / Order XXXI CPC
                  </text>
                  <text x="308" y="174" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="700">
                    Array Managing &amp; All Trustees
                  </text>

                  {/* Branch 3: Section 8 Company */}
                  <rect x="422" y="120" width="180" height="64" rx="8" fill="#FFFFFF" stroke="#059669" strokeWidth="2" />
                  <text x="512" y="143" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
                    Section 8 / Pvt Ltd Co.
                  </text>
                  <text x="512" y="160" textAnchor="middle" fill="#475569" fontSize="10">
                    Companies Act, 2013 s.9
                  </text>
                  <text x="512" y="174" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="700">
                    Sue Company + MD / Signatory
                  </text>

                  {/* Branch 4: Govt / Aided School */}
                  <rect x="625" y="120" width="180" height="64" rx="8" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
                  <text x="715" y="143" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
                    Govt / Municipal School
                  </text>
                  <text x="715" y="160" textAnchor="middle" fill="#475569" fontSize="10">
                    State Education Dept.
                  </text>
                  <text x="715" y="174" textAnchor="middle" fill="#B45309" fontSize="10" fontWeight="700">
                    Mandatory Sec. 80 CPC Notice
                  </text>

                  {/* Lower Convergence */}
                  <path d="M105 184 V224 M308 184 V224 M512 184 V224 M715 184 V224 M105 224 H715 M410 224 V246" stroke="#94A3B8" strokeWidth="2" />
                  <rect x="170" y="246" width="480" height="52" rx="10" fill="#DC2626" />
                  <text x="410" y="268" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">
                    Parallel Remedies: MSMED s.16 (3x RBI) &bull; NI s.138 / PSS s.25 &bull; Order XXXVII CPC
                  </text>
                  <text x="410" y="286" textAnchor="middle" fill="#FEE2E2" fontSize="11">
                    Serve via Email + WhatsApp + Speed Post RPAD with BSA 2023 s.63 Hash Log
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="p-4 rounded-xl border-l-4 border-[#DC2626] bg-slate-50">
                  <p className="text-xs font-extrabold text-slate-900">1. Registered Society (Societies Act s.6)</p>
                  <p className="text-xs text-slate-600 mt-1">Sue the Society through its President, Chairman, or Secretary + School Principal.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-slate-900 bg-slate-50">
                  <p className="text-xs font-extrabold text-slate-900">2. Public Charitable Trust (Order XXXI CPC)</p>
                  <p className="text-xs text-slate-600 mt-1">Implead the Trust along with Managing Trustee and trustees named in the Trust Deed.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50">
                  <p className="text-xs font-extrabold text-slate-900">3. Section 8 / Corporate School Operator</p>
                  <p className="text-xs text-slate-600 mt-1">Sue the company directly; add authorized cheque signatories for NI Act s.138.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50">
                  <p className="text-xs font-extrabold text-slate-900">4. Government / Aided School</p>
                  <p className="text-xs text-slate-600 mt-1">
                    Serve mandatory 60-day{" "}
                    <Link href="/law/section-80-cpc-notice-to-government" className="text-[#DC2626] underline font-semibold">
                      Section 80 CPC Notice
                    </Link>{" "}
                    before filing suit.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory Recovery Matrix for B2B School &amp; EdTech Vendors
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Select the sharpest statutory weapon based on contract value, Udyam status, and whether the school trust issued post-dated cheques (PDCs) or NACH mandates.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Provision</th>
                      <th className="p-3.5 font-bold">Target Entity &amp; Trigger</th>
                      <th className="p-3.5 font-bold">Creditor Advantage</th>
                      <th className="p-3.5 font-bold">Statutory Deadline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Societies Registration Act, 1860 (s.6)</td>
                      <td className="p-3.5 text-slate-700">Schools run by Registered Societies</td>
                      <td className="p-3.5 text-slate-700">Cures entity defect; binds Society assets &amp; bank accounts despite Principal change</td>
                      <td className="p-3.5 text-slate-600">3 years from last invoice / s.18 ack.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Order XXXI CPC &amp; Indian Trusts Act</td>
                      <td className="p-3.5 text-slate-700">Schools run by Public/Private Trusts</td>
                      <td className="p-3.5 text-slate-700">Personal &amp; trust-estate accountability of Managing Trustees for ratified POs</td>
                      <td className="p-3.5 text-slate-600">State Charity Comm. notice where applicable</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">MSMED Act, 2006 (s.15&ndash;18)</td>
                      <td className="p-3.5 text-slate-700">Udyam Micro/Small EdTech &amp; Lab Vendors</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">3x RBI bank rate monthly compound interest + 75% pre-deposit for buyer appeals</td>
                      <td className="p-3.5 text-slate-600">45-day max credit ceiling</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">NI Act s.138 &amp; PSS Act s.25</td>
                      <td className="p-3.5 text-slate-700">Bounced School PDCs / NACH Mandates</td>
                      <td className="p-3.5 text-[#DC2626] font-semibold">Quasi-criminal summons against authorized signatory Trustees; up to 2x fine</td>
                      <td className="p-3.5 text-slate-600">30d notice &rarr; 15d cure &rarr; 30d complaint</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Order XXXVII CPC Summary Suit</td>
                      <td className="p-3.5 text-slate-700">Signed MSA / PO + I&amp;C Certificate + Invoices</td>
                      <td className="p-3.5 text-slate-700">School gets no automatic right to defend without showing a genuine triable issue</td>
                      <td className="p-3.5 text-slate-600">10-day appearance window after summons</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">CPC Section 80 (Govt/Aided Schools)</td>
                      <td className="p-3.5 text-slate-700">State/Municipal/Central Govt School Tenders</td>
                      <td className="p-3.5 text-slate-700">Compels administrative treasury audit &amp; clears statutory bar before suit</td>
                      <td className="p-3.5 text-slate-600">Mandatory 60-day prior written notice</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 Commercial Failure Modes &amp; Creditor Playbooks
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Switch tabs below to inspect the exact statutory defense and 3-step recovery protocol for your school default scenario.
              </p>
              <EdtechVendorScenarioTabs />
            </section>

            {/* Section 5: Worked ₹15 Lakh Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked ₹15 Lakh Smart-Class &amp; STEM Lab Recovery Ledger
                </h2>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-5">
                Consider a typical ₹15,00,000 three-year BOOT smart-class and robotics lab contract with a Tier-2 CBSE school operated by a Registered Society, billed at ₹1,25,000 per quarter. After paying 4 quarters (₹5,00,000), the Society defaults on Quarters 5 and 6 (₹2,50,000 overdue for 180 days) while ₹7,50,000 remains in the unexpired lock-in period.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 mb-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-700">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Illustrative Creditor Claim Computation (MSMED + Contract Acceleration)
                  </span>
                  <span className="text-xs text-slate-400">Udyam Micro/Small Enterprise Vendor</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">1. Accrued Unpaid Annuities (Q5 &amp; Q6 @ ₹1,25,000/qtr)</span>
                    <span className="font-bold text-white">&#8377;2,50,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">2. MSMED Act s.16 Compound Interest (~19.5% p.a. / 3x RBI Rate for 180 days)</span>
                    <span className="font-bold text-emerald-400">+ &#8377;24,980</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">3. Accelerated Unexpired Lock-In Balance (Q7&ndash;Q12 under Contract Act s.74)</span>
                    <span className="font-bold text-amber-400">+ &#8377;7,50,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-sm sm:text-base">
                    <span className="font-extrabold text-white">Total Quantified Demand Notice Claim</span>
                    <span className="font-black text-emerald-400 text-lg sm:text-xl">&#8377;10,24,980</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  Calculate Exact MSMED 3x RBI Interest &rarr;
                </Link>
                <Link
                  href="/tools/limitation-period-calculator"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-colors"
                >
                  Check 3-Year Limitation Window &rarr;
                </Link>
              </div>
            </section>

            {/* Section 6: BOOT & Hardware Repossession */}
            <section
              id="heading-boot-repossession"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Repossessing IFP Hardware &amp; Suspending ERP Licenses Safely
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  EdTech field teams frequently ask whether they can send technicians into a defaulting school to unmount Interactive Flat Panels (IFPs) or pack up robotics lab kits. <strong>Do not attempt unconsented physical repossession.</strong> Even where your BOOT agreement retains ownership of hardware until final payment, Indian courts prohibit forcible self-help; unannounced entry onto a school campus can trigger counter-FIRs for trespass and criminal intimidation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-2">
                      Lawful Hardware &amp; SaaS Leverage
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-950 list-disc pl-4">
                      <li>Serve a 15-day Cure-or-Surrender Notice naming the Society/Trust.</li>
                      <li>Disable cloud LMS, assessment portals, and ERP modules per MSA suspension clause.</li>
                      <li>Obtain signed Gate Pass &amp; De-Installation Protocol if the Principal surrenders hardware peacefully.</li>
                      <li>File Section 9 Arbitration or Order XXXIX CPC for a Court Commissioner if alienating assets.</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-2">
                      Actions That Backfire in Court
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-red-950 list-disc pl-4">
                      <li>Unilateral campus entry during school hours without written Trust/Principal consent.</li>
                      <li>Wiping student attendance or exam records on the School ERP (triggers IT Act s.43 claims).</li>
                      <li>Accepting a fresh cheque without recording it against the Society&apos;s written ledger.</li>
                      <li>Missing the 30-day statutory notice deadline after a cheque bounce (read{" "}
                        <Link href="/cheque-bounce-account-closed-signature-mismatch" className="underline font-bold">
                          Cheque Bounce Notice Rules
                        </Link>).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  School Delivery &amp; BSA 2023 Section 63 Evidence Checklist
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Schools that default on EdTech annuities routinely allege &ldquo;hardware was defective&rdquo; or &ldquo;teachers never used the ERP.&rdquo; Neutralize quality pretexts upfront with these six admissible records:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  {
                    title: "Signed I&C Certificates",
                    desc: "Campus-stamped Installation & Commissioning sheets with IFP serial numbers and Principal/Coordinator sign-off.",
                  },
                  {
                    title: "SaaS & ERP Telemetry Logs",
                    desc: "Timestamped teacher logins, active student seat counts, and assessment uploads certified under Section 63 BSA, 2023.",
                  },
                  {
                    title: "GSTR-1 / GSTR-2B & TDS 26AS",
                    desc: "Proof that the Society/Trust claimed Input Tax Credit or deducted TDS under Section 194C/194J on your invoices.",
                  },
                  {
                    title: "Society / Trust Registration Proof",
                    desc: "CBSE/ICSE disclosure PDF, NGO Darpan extract, or Trust Deed identifying President, Secretary, and Managing Trustee.",
                  },
                  {
                    title: "Zero-Defect Maintenance Window",
                    desc: "Helpdesk ticket logs showing zero unresolved hardware complaints during the 90-day acceptance period.",
                  },
                  {
                    title: "Cheque / NACH Return Memos",
                    desc: "Original bank return memos with date-of-intimation proof for 30-day NI Act s.138 / PSS Act s.25 notices.",
                  },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
                      &#10003; {item.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/templates/it-software-saas-msa-payment-default-legal-notice"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                >
                  Open SaaS / ERP Default Notice Template &rarr;
                </Link>
                <Link
                  href="/templates/msme-delayed-payment-demand-notice"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-red-50 text-[#DC2626] border border-red-200 hover:bg-red-100 transition-colors"
                >
                  Open MSME Demand Notice Format &rarr;
                </Link>
              </div>
            </section>

            {/* Section 8: Bulk CSV Workflow for 200+ Partner Schools */}
            <section
              id="heading-bulk-csv-workflow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Batch CSV Recovery SOP for 200+ Defaulting Partner Schools
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                When an EdTech CFO manages 200 to 500+ overdue school accounts across Tier-2 and Tier-3 towns, traditional per-case law firm billing makes ₹1.5–₹4 Lakh accounts economically unviable to pursue. LegalRecovery&apos;s institutional Representee workflow converts your ERP aging sheet into compliant, entity-cured Advocate Notices at scale:
              </p>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal pl-5 mb-6">
                <li>
                  <strong>Entity Enrichment Pass:</strong> Map each school row in your CSV to its Registered Society, Public Trust, or Section 8 Company along with President/Secretary email, WhatsApp, and registered campus address.
                </li>
                <li>
                  <strong>Automated Statutory Tagging:</strong> Tag Udyam-eligible invoices for MSMED Act s.16 compound interest and flag bounced PDC/NACH accounts for 30-day NI Act s.138 / PSS Act s.25 notices.
                </li>
                <li>
                  <strong>Multi-Channel Dispatch &amp; RPAD Tracking:</strong> Dispatch all 200+ Advocate Notices simultaneously via verified Email, WhatsApp, and Speed Post RPAD with automated Section 63 BSA delivery certificates.
                </li>
                <li>
                  <strong>Selective Litigation Escalation:</strong> Convert early-settling schools via structured payment links and escalate hard defaulters to MSEFC Samadhaan, Section 138 courts, or Order XXXVII CPC.
                </li>
              </ol>

              {/* Dual-Track CTA Component */}
              <EdtechVendorNoticeCTA />
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: B2B EdTech &amp; School Recovery
                </h2>
              </div>
              <div className="space-y-3">
                {FAQ_ITEMS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-extrabold text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
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
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Legal Review &amp; Editorial Attribution: <strong>{REVIEWER_NAME}</strong> ({REVIEWER_ROLE}).
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
