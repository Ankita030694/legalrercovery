import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import MsmeOdrTableOfContents, { TocItem } from "./MsmeOdrTableOfContents";
import MsmeOdrNoticeCTA from "./MsmeOdrNoticeCTA";
import MsmeOdrStageTabs from "./MsmeOdrStageTabs";

// TODO(reviewer): Omit reviewer byline until src/data/reviewers.ts is created with verified Bar Council enrollment numbers.

const PAGE_URL = `${SITE_URL}/msme-odr-portal-delayed-payment-guide`;

export const metadata: Metadata = {
  title: "MSME ODR Portal: File a Delayed Payment Case (Guide)",
  description:
    "How to file a delayed-payment reference on the MSME ODR portal: eligibility, documents, mediation, arbitration and enforcing the award.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "MSME ODR Portal: File a Delayed Payment Case (Guide)",
    description:
      "How to file a delayed-payment reference on the MSME ODR portal: eligibility, documents, mediation, arbitration and enforcing the award.",
    url: PAGE_URL,
    type: "article",
    siteName: "LegalRecovery.in",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TOC_ITEMS: TocItem[] = [
  {
    id: "heading-odr-vs-samadhaan",
    title: "MSME ODR Portal vs Samadhaan vs Legal Notice",
  },
  {
    id: "heading-eligibility-scope",
    title: "Eligibility Rules: Who Can File on MSME ODR?",
  },
  {
    id: "heading-workflow-diagram",
    title: "Visual Workflow: From Invoice Default to Award",
  },
  {
    id: "heading-step-by-step-process",
    title: "6-Step MSME ODR Portal Filing & Arbitration Process",
  },
  {
    id: "heading-case-status-login",
    title: "Case Status, Portal Login & Helpline Guide",
  },
  {
    id: "heading-interest-43bh-leverage",
    title: "Section 16 Interest & Section 43B(h) Tax Leverage",
  },
  {
    id: "heading-buyer-defences",
    title: "Countering Buyer Excuses & Quality Disputes",
  },
  {
    id: "heading-supreme-court-rulings",
    title: "Landmark Supreme Court Judgments on MSME Dues",
  },
  {
    id: "heading-worked-case-study",
    title: "Worked Case Study: ₹18.22 Lakh MSE Recovery",
  },
  {
    id: "heading-documents-checklist",
    title: "Mandatory Documents & Affidavit Checklist",
  },
  {
    id: "heading-faqs",
    title: "Frequently Asked Questions (FAQs)",
  },
  {
    id: "heading-sources",
    title: "Primary Statutes & Official Portal Sources",
  },
];

interface CourtOrder {
  title: string;
  forum: string;
  year: string;
  citation: string;
  holding: string;
  impact: string;
}

const SUPREME_COURT_ORDERS: CourtOrder[] = [
  {
    title: "Gujarat State Civil Supplies Corp. Ltd. v. Mahakali Foods Pvt. Ltd.",
    forum: "Supreme Court of India (Division Bench)",
    year: "2023",
    citation: "(2023) 6 SCC 401",
    holding:
      "Held that Chapter V (Sections 15 to 23) of the MSMED Act, 2006 is a special statutory code enacted to protect Micro and Small Enterprises, and its provisions override the general Arbitration and Conciliation Act, 1996. A private arbitration clause or exclusive jurisdiction clause in a buyer's Purchase Order cannot oust the statutory jurisdiction of the MSEFC / MSME ODR mechanism.",
    impact: "Overrides Private PO Arbitration Clauses",
  },
  {
    title: "Silpi Industries v. Kerala State Road Transport Corporation (KSRTC)",
    forum: "Supreme Court of India",
    year: "2021",
    citation: "(2021) 18 SCC 790",
    holding:
      "Clarified two foundational rules for MSME delayed payment proceedings: (1) To invoke Section 18 jurisdiction, the seller must hold a valid Udyam / EM-II registration on the date of entering into the contract and supplying the goods or services; subsequent registration cannot retrospectively cover prior supplies. (2) The Limitation Act, 1963 applies to Section 18 arbitration, and buyers can file counter-claims before the Council.",
    impact: "Udyam Registration Must Pre-Date Supply",
  },
  {
    title: "Tirupati Steels v. Shubh Industrial Component & Anr.",
    forum: "Supreme Court of India",
    year: "2022",
    citation: "(2022) 7 SCC 429",
    holding:
      "Reaffirmed that under Section 19 of the MSMED Act, 2006, no court shall entertain any application by a buyer to set aside a decree, award, or order made by the MSEFC or an ODR arbitral institution unless the appellant buyer first deposits 75% of the total awarded amount (principal plus compound interest). High Courts cannot waive this 75% pre-deposit requirement.",
    impact: "75% Pre-Deposit Mandatory for Buyer Appeal",
  },
  {
    title: "Vaishno Enterprises v. Hamilton Medical AG & Anr.",
    forum: "Supreme Court of India",
    year: "2022",
    citation: "2022 SCC OnLine SC 355",
    holding:
      "Held that the relevant date for determining applicability of the MSMED Act is the date on which the contract was entered into and the services/goods were supplied. Where a supplier obtained MSME registration only after the invoices were raised, the dispute must be pursued via a standard legal notice and civil/commercial suit rather than Section 18.",
    impact: "Pre-Udyam Invoices Must Use Civil/Commercial Route",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is the MSME ODR portal and how is it different from MSME Samadhaan?",
    answer:
      "MSME Samadhaan (samadhaan.msme.gov.in) was launched in 2017 primarily as an online filing and monitoring tracker where applications still queued up for physical hearings before state Micro and Small Enterprises Facilitation Councils (MSEFCs). The unified MSME Online Dispute Resolution (ODR) Portal upgrades this workflow into an end-to-end digital dispute resolution system: it integrates Udyam authentication, e-notice service, AI-assisted case routing, online video conciliation/mediation, and time-bound online arbitration through empanelled ODR institutions under Section 18 of the MSMED Act, 2006.",
  },
  {
    question: "Who is eligible to file a delayed payment complaint on the MSME ODR portal?",
    answer:
      "Only registered Micro Enterprises (investment up to ₹1 crore and turnover up to ₹5 crore; revised upward in Union Budget announcements as notified) and Small Enterprises (investment up to ₹10 crore and turnover up to ₹50 crore) holding a valid Udyam Registration Certificate prior to the supply of goods or services are eligible to file under Section 18. Medium Enterprises and unregistered traders are excluded from the MSEFC/ODR mechanism and must recover dues via an advocate statutory demand notice, Commercial Court Summary Suit (Order 37 CPC), or IBC Section 9.",
  },
  {
    question: "How does the MSME ODR portal registration and login process work?",
    answer:
      "There is no separate standalone sign-up required if you hold an active Udyam Registration. You log in using your 19-character Udyam Registration Number (URN — e.g., UDYAM-MH-01-XXXXXXX) and authenticate via the mobile number or email OTP linked to your Udyam profile. Once logged in, your enterprise classification, NIC codes, GSTIN, and PAN details are automatically fetched from the Udyam and GSTN databases.",
  },
  {
    question: "How can I check my MSME ODR portal case status online?",
    answer:
      "To track your MSME ODR portal case status, log in to the portal dashboard with your Udyam Registration Number and OTP, or use the public 'Case Status' tracker on the portal homepage by entering your Entrepreneur Memorandum / Udyam Number or the specific Application Reference Number generated at filing. The dashboard displays whether your reference is at the Pre-Notice Intimation stage, Online Conciliation/Mediation stage, Arbitral Institution Hearing stage, or Final Award stage.",
  },
  {
    question: "What happens if the buyer raises a fake quality dispute after 45 days to avoid paying MSME interest?",
    answer:
      "Under Section 2(b) Explanation (i) of the MSMED Act, 2006, if a buyer has any objection regarding defects in goods or deficiency in services, the buyer must communicate that objection in writing to the supplier within 15 days of delivery. If the buyer stays silent for 15 days after delivery, the law enforces 'Deemed Acceptance' from the date of delivery. Any quality dispute raised on Day 30, Day 45, or after receiving a legal notice is statutorily time-barred and rejected in ODR arbitration.",
  },
  {
    question: "How do I enforce an MSME ODR arbitral award if the buyer still refuses to pay?",
    answer:
      "An award passed in MSME ODR arbitration under Section 18(3) has the exact same legal force as a decree of a Civil Court under Section 36 of the Arbitration and Conciliation Act, 1996. You can file an Execution Petition in the Commercial/Civil Court having jurisdiction over the buyer's bank accounts or assets to attach their bank accounts directly. Moreover, under Section 19 of the MSMED Act, the buyer cannot challenge or appeal the award in any court without first depositing 75% of the total awarded principal plus compound interest.",
  },
  {
    question: "MSME payment complaint kaise kare aur company payment na de toh legal notice kaise bheje?",
    answer:
      "Agar kisi company ya buyer ne aapke Micro ya Small Enterprise ka bill 45 din (bina written agreement ke 15 din) ke baad bhi clear nahi kiya hai, toh sabse pehle ek advocate ke madhyam se MSMED Act Section 15, 16 aur Income-tax Act Section 43B(h) ke tahat Statutory Legal Demand Notice bhejein. Is notice mein 3 guna RBI bank rate (lagbhag 20.25% salana monthly compound) byaaj aur buyer ke tax audit mein 100% kharcha disallow hone ki chetavani hoti hai. Agar 15 din mein settlement na ho, toh apne Udyam Registration Number, Tax Invoice, Delivery Proof/e-Way Bill aur Legal Notice ki copy ke saath MSME ODR / Samadhaan portal par online complaint file karein.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Chapter V (Sections 15 to 24: Delayed Payments to Micro and Small Enterprises)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "MSME Samadhaan — Delayed Payment Monitoring & Online Filing System (Ministry of MSME, Government of India)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "Udyam Registration Portal — Official Ministry of Micro, Small and Medium Enterprises Verification System",
    url: "https://udyamregistration.gov.in/",
  },
  {
    title: "Income-tax Act, 1961 — Section 43B(h) (Finance Act, 2023 Amendment Disallowing Deductions for Unpaid MSE Dues Beyond Section 15 Time Limit)",
    url: "https://incometaxindia.gov.in/",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 — Section 29B (Fast Track Procedure) & Section 36 (Enforcement of Arbitral Awards as Civil Decrees)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63) — Admissibility of Electronic Invoices, GST Returns, e-Way Bills & Email Records",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MSME ODR Portal Step by Step: From Registration to Award",
  description:
    "How to file a delayed-payment reference on the MSME ODR portal: eligibility, documents, mediation, arbitration and enforcing the award.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
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
      name: "MSME Delayed Payment Recovery",
      item: `${SITE_URL}/msme-delayed-payment-recovery-samadhan-vs-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MSME ODR Portal Step-by-Step Guide",
      item: PAGE_URL,
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

export default function MsmeOdrPortalGuidePage() {
  return (
    <>
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

      <div className="min-h-screen bg-[#F8FAFC] text-[#30373B] font-sans selection:bg-red-100 selection:text-red-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#0F172A] text-white pt-20 pb-10 sm:pt-28 sm:pb-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                Archetype G6 • MSME &amp; B2B Invoice Recovery Guide
              </span>
              <span className="text-xs text-slate-400 font-mono">
                MSMED Act 2006 (Sections 15–19) &amp; Section 43B(h) IT Act
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl">
              MSME ODR Portal Step by Step: From Registration to Award
            </h1>

            {/* 50-word Statutory Quick Answer Box */}
            <div className="mt-5 sm:mt-6 p-4 sm:p-6 rounded-2xl bg-slate-800/90 border-l-4 border-[#DC2626] shadow-lg max-w-4xl">
              <p className="text-xs sm:text-sm md:text-base text-slate-100 leading-relaxed font-medium">
                <strong className="text-white font-extrabold">Statutory Quick Answer: </strong>
                Under <strong>Sections 15 to 18 of the MSMED Act, 2006</strong>, buyers must pay Udyam-registered Micro and Small Enterprises within <strong>15 days</strong> (or up to <strong>45 days</strong> with a written agreement). For overdue bills, suppliers can file an online reference on the <strong>MSME ODR / Samadhaan Portal</strong> for time-bound mediation and arbitration claiming principal plus <strong>3× RBI bank rate monthly compound interest (Section 16)</strong>.
              </p>
            </div>

            {/* Author & Verification Strip */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <div>
                By{" "}
                <Link
                  href="/authors/anuj-anand-malik"
                  className="text-white font-semibold underline hover:text-red-300"
                >
                  Anuj Anand Malik
                </Link>{" "}
                (Advocate &amp; B2B Recovery Counsel)
              </div>
              <div>Last updated: 4 November 2026</div>
              <div className="text-emerald-400 font-semibold">
                ✓ Checked against MSMED Act Chapter V &amp; Supreme Court Precedents
              </div>
            </div>

            {/* Hero Stat Summary Cards */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                  Max Credit Period
                </span>
                <span className="text-lg sm:text-2xl font-extrabold text-white mt-0.5 block">
                  45 Days Cap
                </span>
                <span className="text-[11px] text-slate-300 mt-1 block">
                  15 days if no written PO (Section 15)
                </span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                  Statutory Interest
                </span>
                <span className="text-lg sm:text-2xl font-extrabold text-amber-400 mt-0.5 block">
                  3× Bank Rate
                </span>
                <span className="text-[11px] text-slate-300 mt-1 block">
                  Monthly compound rests (Section 16)
                </span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                  Statutory Disposal
                </span>
                <span className="text-lg sm:text-2xl font-extrabold text-emerald-400 mt-0.5 block">
                  90 Days
                </span>
                <span className="text-[11px] text-slate-300 mt-1 block">
                  Statutory target under Section 18(5)
                </span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                  Buyer Appeal Lock
                </span>
                <span className="text-lg sm:text-2xl font-extrabold text-sky-400 mt-0.5 block">
                  75% Deposit
                </span>
                <span className="text-[11px] text-slate-300 mt-1 block">
                  Mandatory pre-deposit under Section 19
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                {
                  label: "MSME Delayed Payment Recovery",
                  href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
                },
                {
                  label: "MSME ODR Portal Step-by-Step Guide",
                  href: "/msme-odr-portal-delayed-payment-guide",
                },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sticky Left Sidebar TOC */}
            <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24">
              <MsmeOdrTableOfContents items={TOC_ITEMS} />
            </div>

            {/* Right Article Column */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-10 sm:space-y-12 min-w-0">
              {/* G6 Key Takeaways Box (<aside>) */}
              <aside
                aria-label="Key Takeaways for MSME Suppliers"
                className="bg-white rounded-2xl border-2 border-slate-900 p-5 sm:p-6 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-white bg-slate-900 px-3 py-1 rounded-full">
                    Key Takeaways • MSME ODR Portal (2026)
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Chapter V, MSMED Act 2006
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                  <li>
                    <strong>End-to-End Online Dispute Resolution:</strong> The MSME ODR architecture replaces physical MSEFC hearing bottlenecks with digital Udyam verification, e-conciliation, and fast-track online arbitration.
                  </li>
                  <li>
                    <strong>15-Day / 45-Day Statutory Ceiling:</strong> Under Section 15, buyers must clear MSE invoices within 15 days if there is no written credit agreement, or within a maximum of 45 days even if the Purchase Order prints &quot;90 days&quot; or &quot;120 days&quot;.
                  </li>
                  <li>
                    <strong>3× RBI Bank Rate Compound Interest:</strong> Section 16 mandates compound interest with monthly rests at 3 times the RBI bank rate (currently 6.75% × 3 = <strong>20.25% p.a. compounded monthly</strong> as of November 2026) from the appointed day.
                  </li>
                  <li>
                    <strong>Section 43B(h) Pre-Filing Leverage:</strong> Serving an advocate legal demand notice warning the buyer&apos;s CFO and Statutory Auditor of 100% expense disallowance under Section 43B(h) of the Income-tax Act resolves most B2B defaults before formal arbitration begins.
                  </li>
                </ul>
              </aside>

              {/* Section 1: What Is the MSME ODR Portal vs Samadhaan vs Legal Notice */}
              <section
                id="heading-odr-vs-samadhaan"
                aria-labelledby="heading-odr-vs-samadhaan-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-odr-vs-samadhaan-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Is the MSME ODR Portal and How Does It Upgrade MSME Samadhaan?
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  For years, small manufacturers, B2B vendors, and service providers filed delayed payment applications on the legacy{" "}
                  <Link
                    href="/recovery/msme-samadhan"
                    className="text-red-700 hover:text-red-900 underline font-semibold"
                  >
                    MSME Samadhaan portal
                  </Link>{" "}
                  (<code>samadhaan.msme.gov.in</code>). While Samadhaan digitized application intake, the actual dispute still had to be transferred to physical state Micro and Small Enterprises Facilitation Councils (MSEFCs). Overburdened collectorate dockets meant that the 90-day statutory target under Section 18(5) of the MSMED Act, 2006 frequently stretched into 14 to 24 months.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  The Ministry of Micro, Small and Medium Enterprises introduced the unified <strong>MSME Online Dispute Resolution (ODR) Portal</strong> framework to convert Section 18 references into a paperless, multi-tier digital workflow. Instead of waiting months for physical hearing dates at a district collectorate, the MSME ODR portal connects your Udyam registration, GST e-Invoice/GSTR-1 data, automated buyer intimation, virtual mediation rooms, and empanelled ODR arbitral institutions into a single online pipeline. For a broader strategic comparison of when to use statutory portals versus direct legal notices, see our guide on{" "}
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="text-red-700 hover:text-red-900 underline font-semibold"
                  >
                    MSME Samadhaan vs advocate legal notice
                  </Link>
                  .
                </p>

                {/* Comparison Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <caption className="p-3 sm:p-4 text-left font-bold text-slate-900 bg-slate-50 border-b border-slate-200 text-xs sm:text-sm">
                      Table 1: Comparing MSME ODR Portal, Legacy MSME Samadhaan &amp; Pre-ODR Advocate Legal Notice
                    </caption>
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th scope="col" className="p-3 sm:p-4 font-bold">
                          Feature / Parameter
                        </th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">
                          MSME ODR Portal (New Digital Rail)
                        </th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">
                          Legacy MSME Samadhaan (Physical MSEFC)
                        </th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">
                          Advocate Statutory Notice + Sec 43B(h)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/60">
                          Primary Statutory Basis
                        </th>
                        <td className="p-3 sm:p-4">
                          Sections 15, 16, 18 &amp; 19 MSMED Act, 2006 + Arbitration Act, 1996
                        </td>
                        <td className="p-3 sm:p-4">
                          Sections 15 to 18 MSMED Act, 2006 (State MSEFC Rules)
                        </td>
                        <td className="p-3 sm:p-4">
                          Sections 15 &amp; 16 MSMED Act + Sec 43B(h) Income-tax Act, 1961
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/60">
                          Hearing Mode
                        </th>
                        <td className="p-3 sm:p-4">
                          100% online e-mediation &amp; virtual ODR arbitration hearings
                        </td>
                        <td className="p-3 sm:p-4">
                          Online filing, followed by physical/hybrid state MSEFC hearings
                        </td>
                        <td className="p-3 sm:p-4">
                          Direct pre-litigation demand served via Speed Post &amp; email
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/60">
                          Eligible Suppliers
                        </th>
                        <td className="p-3 sm:p-4">
                          Udyam-registered Micro &amp; Small Enterprises (registered prior to supply)
                        </td>
                        <td className="p-3 sm:p-4">
                          Udyam-registered Micro &amp; Small Enterprises (registered prior to supply)
                        </td>
                        <td className="p-3 sm:p-4">
                          All Micro, Small, Medium Enterprises &amp; unregistered B2B vendors
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/60">
                          Practical Timeline
                        </th>
                        <td className="p-3 sm:p-4">
                          ~90 to 150 days across automated intimation, mediation &amp; arbitration
                        </td>
                        <td className="p-3 sm:p-4">
                          Often 9 to 18+ months depending on state MSEFC pendency
                        </td>
                        <td className="p-3 sm:p-4">
                          <strong>15 days</strong> statutory cure window from notice delivery
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/60">
                          Outcome &amp; Enforceability
                        </th>
                        <td className="p-3 sm:p-4">
                          Binding Settlement Agreement (s.73) or Arbitral Award executable as Civil Decree (s.36)
                        </td>
                        <td className="p-3 sm:p-4">
                          MSEFC Arbitral Award executable as Civil Court Decree (s.36)
                        </td>
                        <td className="p-3 sm:p-4">
                          Direct RTGS/NEFT bank settlement or foundation for ODR / Order 37 filing
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: Eligibility & Limits */}
              <section
                id="heading-eligibility-scope"
                aria-labelledby="heading-eligibility-scope-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-eligibility-scope-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Who Can File a Delayed Payment Complaint on the MSME ODR Portal?
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Before initiating your registration or reference on the MSME ODR portal, verify that your enterprise and invoices satisfy the four statutory admissibility tests under Section 2(n), Section 8, and Section 18 of the MSMED Act, 2006:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
                      Test 1: Enterprise Classification
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Micro and Small Enterprises Only (Medium Excluded)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Section 2(n) of the MSMED Act, a &quot;supplier&quot; means a <strong>Micro</strong> or <strong>Small Enterprise</strong> holding a valid Udyam memorandum. <strong>Medium Enterprises</strong> cannot file delayed payment claims before the MSEFC or MSME ODR portal; they must use an advocate legal notice and Commercial Court / IBC proceedings.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-800 bg-red-50 px-2.5 py-1 rounded-md border border-red-200 inline-block">
                      Test 2: The Silpi Industries Date Rule
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Udyam Registration Must Pre-Date the Supply
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Per the Supreme Court ruling in <em>Silpi Industries v. KSRTC</em> (2021) 18 SCC 790, your Udyam Registration (or prior Udyog Aadhaar / EM-II) must have been active on the date the contract was entered into and goods/services were supplied. Post-supply registration does not confer retrospective MSEFC jurisdiction.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200 inline-block">
                      Test 3: Nature of Activity
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Manufacturing, Service Providers &amp; Works Contracts
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Manufacturers of goods and providers of services whose NIC activity codes are listed on their Udyam Certificate are fully covered. While pure retail/wholesale trading was brought under Udyam for priority-sector banking lending via the July 2021 OM, ensure your NIC code reflects manufacturing or service rendering for smooth Section 18 admission. For EPC and works contracts, see our{" "}
                      <Link
                        href="/subcontractor-payment-recovery-india"
                        className="text-red-700 hover:text-red-900 underline font-semibold"
                      >
                        subcontractor payment recovery guide
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-block">
                      Test 4: Expiry of the Appointed Day
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      15 Days (No Agreement) or Max 45 Days (Written PO)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A reference can be filed the moment the &quot;Appointed Day&quot; passes without payment: Day 16 after delivery/deemed acceptance if there is no written credit period, or Day 46 if a written agreement specifies 45 days (or purports to specify 60/90 days, which Section 15 caps at 45 days).
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Hand-Authored SVG Workflow Diagram */}
              <section
                id="heading-workflow-diagram"
                aria-labelledby="heading-workflow-diagram-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-workflow-diagram-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Visual Workflow: Moving Through MSME ODR Portal to Award
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  The diagram below illustrates the complete statutory escalation architecture from the day goods or services are delivered to final bank attachment or 75% pre-deposit lock under the MSMED Act, 2006:
                </p>

                <figure className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs overflow-x-auto">
                  <svg
                    role="img"
                    aria-labelledby="msme-odr-svg-title msme-odr-svg-desc"
                    viewBox="0 0 920 310"
                    className="w-full h-auto min-w-[680px]"
                  >
                    <title id="msme-odr-svg-title">
                      MSME ODR Portal Step-by-Step Delayed Payment Resolution Architecture
                    </title>
                    <desc id="msme-odr-svg-desc">
                      Six-stage flowchart showing: Stage 1 Appointed Day Expiry (15 or 45 days under Section 15), Stage 2 Advocate Pre-ODR Legal Notice + Section 43B(h) Tax Warning, Stage 3 MSME ODR Portal Filing via Udyam Login, Stage 4 Online Conciliation and Mediation under Section 18(2), Stage 5 Fast-Track Online Arbitration under Section 18(3), and Stage 6 Civil Decree Execution under Section 36 with 75% Pre-Deposit Lock under Section 19.
                    </desc>

                    {/* Background Grid */}
                    <rect x="0" y="0" width="920" height="310" rx="16" fill="#F8FAFC" />

                    {/* Top Row Boxes (Stages 1, 2, 3) */}
                    {/* Box 1 */}
                    <rect x="20" y="25" width="265" height="105" rx="12" fill="#1E293B" />
                    <text x="36" y="48" fill="#F87171" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      STAGE 1 • DAY 15 / DAY 45
                    </text>
                    <text x="36" y="68" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                      Appointed Day Expires (Sec 15)
                    </text>
                    <text x="36" y="88" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">
                      • No objection in 15d = Deemed Acceptance
                    </text>
                    <text x="36" y="106" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">
                      • 3× RBI compound interest starts (Sec 16)
                    </text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M285 77 L320 77" stroke="#DC2626" strokeWidth="2.5" fill="none" />
                    <polygon points="320,72 330,77 320,82" fill="#DC2626" />

                    {/* Box 2 */}
                    <rect x="330" y="25" width="265" height="105" rx="12" fill="#7F1D1D" />
                    <text x="346" y="48" fill="#FDE047" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      STAGE 2 • 15-DAY CURE WINDOW
                    </text>
                    <text x="346" y="68" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                      Advocate Notice + Sec 43B(h)
                    </text>
                    <text x="346" y="88" fill="#FECACA" fontSize="11" fontFamily="sans-serif">
                      • Demand Principal + 20.25% p.a. interest
                    </text>
                    <text x="346" y="106" fill="#FECACA" fontSize="11" fontFamily="sans-serif">
                      • Warn CFO &amp; Auditor of 43B(h) tax disallowance
                    </text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M595 77 L630 77" stroke="#DC2626" strokeWidth="2.5" fill="none" />
                    <polygon points="630,72 640,77 630,82" fill="#DC2626" />

                    {/* Box 3 */}
                    <rect x="640" y="25" width="260" height="105" rx="12" fill="#1E293B" />
                    <text x="656" y="48" fill="#38BDF8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      STAGE 3 • UDYAM + GSTN SYNC
                    </text>
                    <text x="656" y="68" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                      MSME ODR Portal Filing
                    </text>
                    <text x="656" y="88" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">
                      • Login via URN + upload PO, Invoice, GRN
                    </text>
                    <text x="656" y="106" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">
                      • Auto e-Notice dispatched to Buyer GST/PAN
                    </text>

                    {/* Connector from Stage 3 down to Stage 4 */}
                    <path d="M770 130 L770 175" stroke="#DC2626" strokeWidth="2.5" fill="none" />
                    <polygon points="765,170 770,180 775,170" fill="#DC2626" />

                    {/* Bottom Row Boxes (Stages 4, 5, 6 - Right to Left flow) */}
                    {/* Box 4 (Right Bottom) */}
                    <rect x="640" y="180" width="260" height="105" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                    <text x="656" y="203" fill="#4ADE80" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      STAGE 4 • SECTION 18(2)
                    </text>
                    <text x="656" y="223" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                      Online Conciliation / Mediation
                    </text>
                    <text x="656" y="243" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">
                      • Virtual mediation via ODR institution
                    </text>
                    <text x="656" y="261" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">
                      • If settled: Binding Consent Award (Sec 73)
                    </text>

                    {/* Arrow 4 -> 5 (Leftward) */}
                    <path d="M640 232 L605 232" stroke="#DC2626" strokeWidth="2.5" fill="none" />
                    <polygon points="605,227 595,232 605,237" fill="#DC2626" />

                    {/* Box 5 (Middle Bottom) */}
                    <rect x="330" y="180" width="265" height="105" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                    <text x="346" y="203" fill="#FBBF24" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      STAGE 5 • SECTION 18(3)
                    </text>
                    <text x="346" y="223" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                      Fast-Track ODR Arbitration
                    </text>
                    <text x="346" y="243" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">
                      • If mediation fails, auto-referred to Arbitrator
                    </text>
                    <text x="346" y="261" fill="#CBD5E1" fontSize="11" fontFamily="sans-serif">
                      • Digital pleadings + 90-day statutory target
                    </text>

                    {/* Arrow 5 -> 6 (Leftward) */}
                    <path d="M330 232 L295 232" stroke="#DC2626" strokeWidth="2.5" fill="none" />
                    <polygon points="295,227 285,232 295,237" fill="#DC2626" />

                    {/* Box 6 (Left Bottom) */}
                    <rect x="20" y="180" width="265" height="105" rx="12" fill="#064E3B" />
                    <text x="36" y="203" fill="#6EE7B7" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      STAGE 6 • SEC 19 &amp; SEC 36 ENFORCEMENT
                    </text>
                    <text x="36" y="223" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                      Award Execution &amp; 75% Lock
                    </text>
                    <text x="36" y="243" fill="#D1FAE5" fontSize="11" fontFamily="sans-serif">
                      • Executable as Civil Court Decree (Sec 36)
                    </text>
                    <text x="36" y="261" fill="#D1FAE5" fontSize="11" fontFamily="sans-serif">
                      • Buyer must deposit 75% to appeal (Sec 19)
                    </text>
                  </svg>
                  <figcaption className="mt-3 text-xs text-slate-500 text-center">
                    Figure 1: Six-stage statutory progression from invoice default (Section 15) and pre-ODR legal demand notice to MSME ODR mediation, online arbitration, and award enforcement.
                  </figcaption>
                </figure>
              </section>

              {/* Inline CTA */}
              <MsmeOdrNoticeCTA variant="inline" />

              {/* Section 4: Step-by-Step MSME ODR Portal Process */}
              <section
                id="heading-step-by-step-process"
                aria-labelledby="heading-step-by-step-process-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-step-by-step-process-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Step-by-Step MSME ODR Process: Registration to Arbitral Award
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Follow this 6-stage operational sequence to register, file your delayed payment complaint, navigate online mediation and arbitration, and execute your final award:
                </p>

                <ol className="space-y-4">
                  <li className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                        1
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Step 1: Serve a 15-Day Pre-ODR Advocate Demand Notice (Highly Recommended)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Before locking your invoice into multi-month portal proceedings, dispatch a formal advocate legal notice to the buyer&apos;s Registered Office, Directors, CFO, and Statutory Auditor. Explicitly attach a calculation of principal plus <strong>3× RBI bank rate monthly compound interest under Section 16</strong> and highlight that if the invoice remains unpaid across the financial year-end, the entire invoice amount will be disallowed as a tax deduction under{" "}
                      <Link
                        href="/law/section-43bh-msme-payment-rule"
                        className="text-red-700 hover:text-red-900 underline font-semibold"
                      >
                        Section 43B(h) of the Income-tax Act
                      </Link>
                      . If the buyer fails to settle within 15 days, the postal tracking receipt and notice become Exhibit-A in your ODR filing.
                    </p>
                  </li>

                  <li className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                        2
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Step 2: MSME ODR Portal Registration &amp; Udyam OTP Login
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Visit the official MSME delayed payment portal (<code>samadhaan.msme.gov.in</code> / unified MSME ODR portal interface) and select <strong>&quot;Case Filing for Entrepreneur / MSE Units&quot;</strong>. Enter your 19-character <strong>Udyam Registration Number (URN)</strong> (<code>UDYAM-XX-00-0000000</code>). The system sends a 6-digit OTP to the mobile number or email address registered on your Udyam certificate. Once authenticated, verify your auto-populated enterprise category (Micro or Small), GSTIN, factory/office address, and NIC 5-digit activity codes.
                    </p>
                  </li>

                  <li className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                        3
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Step 3: Enter Buyer Details, Upload Invoice Bundle &amp; Compute Section 16 Interest
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Select the Respondent (Buyer) category — Central PSU, State Government, Corporate/Private Limited, LLP, or Proprietorship — and enter the buyer&apos;s GSTIN, PAN, and official email/mobile. Add each unpaid invoice line-by-line: Purchase Order number and date, Tax Invoice number and date, exact date of delivery/acceptance, principal amount due, and the statutory Appointed Day. Combine your Purchase Orders, GST Tax Invoices, e-Way Bills / signed Delivery Challans, and MSME delayed payment affidavit into cleanly indexed PDFs (up to 5 PDF attachments, under 1 MB–2 MB per file as specified on the upload screen). Use our{" "}
                      <Link
                        href="/tools/msme-delayed-payment-interest-calculator"
                        className="text-red-700 hover:text-red-900 underline font-semibold"
                      >
                        MSME delayed payment interest calculator
                      </Link>{" "}
                      to generate the exact monthly compound interest schedule before submitting.
                    </p>
                  </li>

                  <li className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                        4
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Step 4: Automated Portal Intimation &amp; Pre-Notice Cure Period
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Upon submission, the portal generates a unique <strong>Delayed Payment Application Number</strong> and immediately dispatches an automated electronic notice to the buyer&apos;s registered email and mobile number, along with a copy to the concerned MSEFC / ODR nodal registry. The buyer is given a 15-day window to either clear the undisputed invoice or upload a preliminary response. Because pending applications are publicly visible on the portal&apos;s dashboard (affecting corporate credit ratings and PSU vendor scores), many solvent buyers initiate settlement talks at this stage.
                    </p>
                  </li>

                  <li className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                        5
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Step 5: Online Conciliation / Mediation Under Section 18(2)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      If the buyer does not pay within the initial intimation period, the application converts into a formal case under <strong>Section 18(2) of the MSMED Act</strong>. The Council or designated Online Dispute Resolution (ODR) institution appoints a neutral conciliator/mediator and schedules virtual video hearings. Under Sections 65 to 81 of the Arbitration and Conciliation Act, 1996, the mediator assists both sides in reaching a mutually agreed payment schedule. If a settlement is signed digitally, it becomes a <strong>Consent Award under Section 73</strong> — legally binding and directly executable in court if the buyer defaults on any installment.
                    </p>
                  </li>

                  <li className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                        6
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Step 6: Fast-Track Online Arbitration (Section 18(3)) &amp; Final Award Execution
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      When conciliation fails or the buyer refuses to participate, the conciliator records a failure report and the case automatically escalates to <strong>compulsory arbitration under Section 18(3)</strong>. Written Statements of Claim, Statements of Defence, GST/ledger reconciliations, and final arguments are conducted digitally. The tribunal passes a reasoned <strong>Arbitral Award</strong> directing payment of 100% principal plus compound interest with monthly rests at 3× RBI bank rate under Section 16 until actual realization. Under Section 36 of the Arbitration Act, you can execute this award as a Civil Court decree by attaching the buyer&apos;s bank accounts.
                    </p>
                  </li>
                </ol>
              </section>

              {/* Section 5: Case Status, Login & Helpline */}
              <section
                id="heading-case-status-login"
                aria-labelledby="heading-case-status-login-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-case-status-login-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Checking MSME ODR Case Status, Advocate Login and Helpline
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Suppliers and authorized legal counsel frequently need to monitor docket movement, check whether notices have been served on the respondent buyer, or contact the Ministry helpdesk for technical OTP errors:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <caption className="p-3 sm:p-4 text-left font-bold text-slate-900 bg-slate-50 border-b border-slate-200 text-xs sm:text-sm">
                      Table 2: MSME ODR / Samadhaan Portal Access, Case Status Tracking &amp; Official Helpdesk Directory
                    </caption>
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th scope="col" className="p-3 sm:p-4 font-bold">
                          Portal Function / Query
                        </th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">
                          Official Access Method / Portal Path
                        </th>
                        <th scope="col" className="p-3 sm:p-4 font-bold">
                          What You Need Ready
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/60">
                          MSME ODR / Samadhaan Case Status
                        </th>
                        <td className="p-3 sm:p-4">
                          Log in to <code>samadhaan.msme.gov.in</code> → <em>Case Status</em> tab or Entrepreneur Dashboard
                        </td>
                        <td className="p-3 sm:p-4">
                          19-character Udyam Number or 12-digit Application / Case Number + Captcha
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/60">
                          Supplier / Entrepreneur Login
                        </th>
                        <td className="p-3 sm:p-4">
                          <em>Case Filing for Entrepreneur / MSE Units</em> → Authenticate via Udyam OTP
                        </td>
                        <td className="p-3 sm:p-4">
                          Active URN (<code>UDYAM-XX-00-XXXXXXX</code>) + mobile/email linked on Udyam portal
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/60">
                          Advocate / Authorized Representative
                        </th>
                        <td className="p-3 sm:p-4">
                          Upload Vakalatnama / Board Resolution &amp; Authorization Letter in Case Hearing Workspace
                        </td>
                        <td className="p-3 sm:p-4">
                          Signed Vakalatnama, Bar Council ID, and Supplier Authorization on letterhead
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/60">
                          Ministry of MSME Champions / Helpline
                        </th>
                        <td className="p-3 sm:p-4">
                          MSME Champions Portal (<code>champions.gov.in</code>) / National MSME Call Centre: <strong>1800-11-6763</strong> (or 14414)
                        </td>
                        <td className="p-3 sm:p-4">
                          Udyam Registration Number &amp; screenshot of portal technical/OTP error
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Section 16 Interest + Section 43B(h) Tax Leverage */}
              <section
                id="heading-interest-43bh-leverage"
                aria-labelledby="heading-interest-43bh-leverage-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-interest-43bh-leverage-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Section 16 Interest &amp; Section 43B(h): Double Financial Leverage
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Indian law gives Micro and Small Enterprises two extraordinary statutory weapons that ordinary civil creditors do not possess. Understanding how these two provisions interact is critical to drafting both your pre-litigation legal notice and your MSME ODR statement of claim:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-700 inline-block">
                      Weapon 1 • Section 16 &amp; Section 23 MSMED Act
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white">
                      3× RBI Bank Rate Compounded Monthly (Non-Deductible)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Under <strong>Section 16 of the MSMED Act, 2006</strong>, if a buyer fails to pay on or before the 15-day or 45-day Appointed Day, the buyer is statutorily liable to pay <strong>compound interest with monthly rests at 3 times the Bank Rate notified by the RBI</strong>. With the RBI Bank Rate at 6.75% p.a. (as of November 2026), the statutory rate is <strong>20.25% p.a. compounded every month</strong> (effective annual yield ~22.24%). Furthermore, under <strong>Section 23</strong>, this penal interest is completely disallowed as an expense under the Income-tax Act! For detailed formula breakdowns, read our{" "}
                      <Link
                        href="/recovery/delayed-payment-interest-under-msme"
                        className="text-amber-300 hover:text-amber-200 underline font-semibold"
                      >
                        delayed payment interest under MSME guide
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-700 inline-block">
                      Weapon 2 • Section 43B(h) Income-tax Act, 1961
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white">
                      100% Principal Expense Disallowance in Buyer&apos;s Tax Audit
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Inserted by the Finance Act, 2023 (effective AY 2024-25 onwards),{" "}
                      <Link
                        href="/law/section-43bh-msme-payment-rule"
                        className="text-emerald-300 hover:text-emerald-200 underline font-semibold"
                      >
                        Section 43B(h) of the Income-tax Act
                      </Link>{" "}
                      mandates that any sum payable by a buyer to a Micro or Small Enterprise beyond the 15-day or 45-day time limit specified in Section 15 of the MSMED Act is <strong>disallowed as a business deduction</strong> in that financial year unless actually paid. If a corporate buyer leaves your ₹20,00,000 invoice unpaid across March 31, the ₹20,00,000 is added straight back to the buyer&apos;s taxable profit in Form 3CD, triggering ~₹5,00,000 to ₹6,00,000 in immediate additional income tax liability!
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Interactive Buyer Defence Tabs */}
              <section
                id="heading-buyer-defences"
                aria-labelledby="heading-buyer-defences-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-buyer-defences-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Defeating Common Buyer Excuses in MSME ODR Proceedings
                </h2>
                <MsmeOdrStageTabs />
              </section>

              {/* Section 8: Landmark Supreme Court Judgments */}
              <section
                id="heading-supreme-court-rulings"
                aria-labelledby="heading-supreme-court-rulings-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-supreme-court-rulings-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Supreme Court Judgments on MSME Delayed Payment and ODR
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Cite these four binding Supreme Court of India precedents in your legal demand notice and MSME ODR Statement of Claim to pre-empt jurisdictional objections from corporate buyers:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SUPREME_COURT_ORDERS.map((order, idx) => (
                    <article
                      key={idx}
                      className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                            {order.impact}
                          </span>
                          <span className="text-xs font-mono text-slate-500">
                            {order.citation}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                          {order.title}
                        </h3>
                        <p className="text-[11px] font-semibold text-slate-500">
                          {order.forum} • {order.year}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {order.holding}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 9: Worked Case Study */}
              <section
                id="heading-worked-case-study"
                aria-labelledby="heading-worked-case-study-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-case-study-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Case Study: Small Enterprise Recovers ₹18.2L via MSME ODR
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative MSME ODR &amp; Legal Notice Resolution
                    </span>
                    <span className="text-xs text-slate-400">
                      Bhosari MIDC, Pune (Small Enterprise Supplier vs Tier-1 OEM Buyer)
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Vishwakarma Precision Components Pvt. Ltd., a Udyam-registered Small Enterprise in Bhosari MIDC, Pune, supplied CNC-machined transmission shafts across 4 GST Tax Invoices totaling <strong>₹14,80,000</strong> to a Tier-1 automotive OEM in Gurugram. All four consignments were delivered with e-Way Bills and signed Goods Receipt Notes (GRNs). Although the OEM&apos;s Purchase Order printed &quot;Payment 90 Days from GRN&quot;, the statutory 45-day cap under Section 15 of the MSMED Act expired with zero payment.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> After 11 months of follow-ups, when the supplier demanded payment, the OEM&apos;s procurement team sent an email alleging &quot;dimensional tolerance deviations noticed on assembly line&quot; and demanded a 25% debit note waiver to release the balance principal without interest.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> The supplier engaged{" "}
                      <Link
                        href="/services/vendor-and-invoice-recoveries"
                        className="text-sky-300 hover:text-sky-200 underline font-semibold"
                      >
                        LegalRecovery.in&apos;s B2B invoice recovery team
                      </Link>
                      . First, an advocate served a formal Statutory Legal Notice on the OEM&apos;s Managing Director, CFO, and Statutory Auditor citing: (1) <strong>Section 2(b) Deemed Acceptance</strong>, as no written quality objection was raised within 15 days of delivery; (2) <strong>₹3,42,600 in accrued monthly compound interest</strong> at 20.25% p.a. (3× RBI bank rate) under Section 16; and (3) mandatory reporting in the OEM&apos;s Form 3CD tax audit under <strong>Section 43B(h) of the Income-tax Act</strong>. Simultaneously, the reference was logged on the MSME ODR portal.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">
                        The Outcome:
                      </strong>
                      Faced with an imminent Section 43B(h) tax disallowance of ₹14.80 lakh plus a non-appealable MSEFC/ODR award (which would require a 75% pre-deposit under Section 19 to challenge), the OEM&apos;s legal department entered online mediation on Day 24. The OEM executed a binding Section 73 Settlement Agreement and remitted the entire <strong>₹18,22,600 (₹14,80,000 principal + ₹3,42,600 compound interest)</strong> via RTGS within 10 working days.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Mandatory Documents & Evidence Checklist + Honest Scope */}
              <section
                id="heading-documents-checklist"
                aria-labelledby="heading-documents-checklist-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-documents-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Documents, Affidavit &amp; Evidence Checklist for MSME ODR
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic tax records, GST portal filings, and digital delivery proofs are admissible in ODR arbitration. Assemble these 6 mandatory PDF bundles before initiating your MSME ODR reference or{" "}
                  <Link
                    href="/recovery-of-unpaid-dues-for-my-business"
                    className="text-red-700 hover:text-red-900 underline font-semibold"
                  >
                    business unpaid dues recovery
                  </Link>
                  :
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Udyam Registration Certificate (Active Prior to Supply):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Showing Micro or Small Enterprise classification, date of registration, and relevant NIC codes (plus legacy Udyog Aadhaar / EM-II if contract is older).
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Purchase Order (PO), Work Order or Email Confirmation:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Establishing the commercial rate, ordered quantity, and agreed payment terms (even if no formal PO exists, attach email/WhatsApp order placement).
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        GST Tax Invoices &amp; GSTR-1 / e-Invoice IRN Proofs:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Proving the invoices were uploaded to the GSTN portal and that the buyer availed Input Tax Credit (ITC) in their GSTR-2B without objection.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Delivery Challan, e-Way Bill, Lorry Receipt (LR) or GRN:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Proving the exact date of physical delivery of goods or completion certificate for services, which triggers the 15-day Deemed Acceptance clock.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Section 16 Monthly Compound Interest Calculation Sheet:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Invoice-wise schedule showing Appointed Day, overdue days, and monthly compound rests at 3× RBI bank rate.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Advocate Legal Notice, Affidavit &amp; BSA Sec 63 Certificate:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Copy of the pre-ODR statutory demand notice, Speed Post delivery track report, verifying affidavit, and electronic evidence certificate.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Honest Scope Block (Section 5.6 requirement) */}
                <div className="p-4 sm:p-5 bg-slate-100 rounded-2xl border border-slate-200 space-y-2">
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
                    What LegalRecovery.in Can and Cannot Do in MSME Delayed Payment Disputes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>What we do:</strong> Our advocates audit your invoice trail, compute exact Section 16 monthly compound interest, draft and serve formal Statutory Demand Notices invoking Sections 15, 16, 18 of the MSMED Act and Section 43B(h) of the Income-tax Act, prepare your MSME ODR / Samadhaan Statement of Claim and BSA Section 63 affidavits, and represent you in online mediation and commercial recovery negotiations.{" "}
                    <strong>Where our scope is bounded:</strong> If your enterprise was unregistered on the date of supply (<em>Silpi Industries</em> bar) or is classified as a Medium Enterprise, we cannot file a Section 18 MSEFC reference on your behalf; instead, we pursue your recovery via a Commercial Court Order 37 Summary Suit, civil recovery suit, or IBC Section 9 operational creditor demand notice. Review our transparent{" "}
                    <Link
                      href="/legal-notice-charges"
                      className="text-red-700 hover:text-red-900 underline font-semibold"
                    >
                      legal notice charges and fee structure
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 11: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs on the MSME ODR Portal and Delayed Payment Claims
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in MSMED Act Chapter V, Section 43B(h) &amp; Supreme Court Rulings
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

              {/* Section 12: Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Authorities, MSMED Act Citations and References
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
                  Statutory verification status: All statutory timelines, RBI Bank Rate multipliers (6.75% × 3 = 20.25% p.a. as of November 2026), Section 43B(h) Income-tax provisions, and Supreme Court citations verified as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section
                id="heading-cta-block"
                aria-labelledby="heading-cta-block-title"
                className="w-full"
              >
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve an MSME Delayed Payment Legal Demand Notice
                </h2>
                <MsmeOdrNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related MSME &amp; B2B Payment Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME Samadhaan vs Legal Notice Comparison →
                  </Link>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME 3× RBI Interest Calculator Tool →
                  </Link>
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 43B(h) 45-Day Tax Disallowance Rule →
                  </Link>
                  <Link
                    href="/subcontractor-payment-recovery-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Subcontractor &amp; Retention Money Recovery →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
                  </Link>
                  <Link
                    href="/recovery-of-unpaid-dues-for-my-business"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unpaid Business Dues Recovery Hub →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/msme-odr-portal-delayed-payment-guide" />
      </div>
    </>
  );
}
