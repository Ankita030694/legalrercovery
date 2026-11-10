import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import NykaaNoticeCTA from "./NykaaNoticeCTA";
import NykaaEscalationRailSVG from "./NykaaEscalationRailSVG";

export const metadata: Metadata = {
  title: "Nykaa Refund or Fake Product Complaint: Legal Route",
  description:
    "Nykaa refund delayed or suspect a counterfeit product? Consumer rights, evidence to keep and how to escalate to a legal notice against Nykaa.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/nykaa`,
  },
  openGraph: {
    title: "How to Send Nykaa a Legal Notice for Stuck Refunds or Counterfeit Cosmetics",
    description:
      "Enforce consumer protection rights against FSN E-Commerce Ventures. Learn grievance escalation timelines, evidence preservation under BSA Section 63, and advocate notice drafting.",
    url: `${SITE_URL}/legal-notice-to/nykaa`,
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const BASE_PRICE = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Nykaa Refund Delayed or Product Not Genuine? Know Your Rights",
  "description":
    "Nykaa refund delayed or suspect a counterfeit product? Consumer rights, evidence to keep and how to escalate to a legal notice against Nykaa.",
  "inLanguage": "en-IN",
  "mainEntityOfPage": `${SITE_URL}/legal-notice-to/nykaa`,
  "datePublished": "2026-11-02T10:00:00+05:30",
  "dateModified": "2026-11-02T10:00:00+05:30",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": `${SITE_URL}/authors/anuj-anand-malik`,
  },
  "publisher": {
    "@id": `${SITE_URL}/#organization`,
  },
  "about": {
    "@type": "Organization",
    "name": "Nykaa",
    "alternateName": "FSN E-Commerce Ventures Limited",
    "sameAs": "https://en.wikipedia.org/wiki/Nykaa",
  },
  "citation": [
    "https://cdsco.gov.in/opencms/opencms/en/Drugs/Cosmetics/",
    "https://consumerhelpline.gov.in/",
    "https://e-jagriti.gov.in/",
    "https://www.livelaw.in/consumer-cases/district-consumer-commission-chandigarh-nykaa-e-retail-deficiency-in-service-262100",
  ],
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Refunds & Consumer Complaints",
      "item": `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Legal Notice to Nykaa",
      "item": `${SITE_URL}/legal-notice-to/nykaa`,
    },
  ],
};

const faqData = [
  {
    question: "What is the typical Nykaa refund time and what are their statutory legal deadlines?",
    answer:
      "Prepaid order cancellations normally process within 24 to 48 hours and credit your account within 3 to 7 working days. Returned orders credit only after courier collection and warehouse inspection. Under Rule 4(4) and Rule 5(3)(b) of the Consumer Protection (E-Commerce) Rules, 2020, Nykaa must acknowledge grievances within 48 hours and achieve final dispute redressal within 30 calendar days.",
  },
  {
    question: "Can Nykaa refuse a refund for opened cosmetics if the product is defective, damaged, or expired?",
    answer:
      "No seller or platform can apply a blanket non-returnable policy to defective, leaking, or expired cosmetics. Section 2(47) of the Consumer Protection Act, 2019 defines refusal to take back substandard or defective goods as an unfair trade practice. When an opened personal care item arrives compromised, tampered, or spoiled, consumers possess a statutory right to return the goods and receive a full reimbursement.",
  },
  {
    question: "What legal action can I take if Nykaa delivered a fake, counterfeit, or duplicate beauty product?",
    answer:
      "Distributing spurious cosmetics violates Section 17C of the Drugs and Cosmetics Act, 1940 and constitutes an unfair trade practice under CPA 2019. If Nykaa delivers cosmetics with mismatched batch codes or missing CDSCO markings, preserve packaging, serve a formal grievance on the Grievance Officer, file an NCH 1915 docket, and dispatch an advocate pre-litigation legal notice demanding immediate refund and damages.",
  },
  {
    question: "How do I challenge a Nykaa courier agent who refuses to pick up a returned cosmetic parcel?",
    answer:
      "Record a brief video during the doorstep handover showing the barcode, packaging, and the courier executive's refusal. Email this timestamped evidence to grievanceofficer@nykaa.com citing your return ID and demanding immediate re-dispatch of reverse pickup under Rule 6 fallback obligations.",
  },
  {
    question: "Can Nykaa legally issue a refund as Nykaa Wallet credits instead of returning money to my bank account?",
    answer:
      "No e-commerce platform can compel you to accept wallet credits or proprietary store coupons for orders paid via UPI, card, net banking, or cash. The Consumer Protection (E-Commerce) Rules, 2020 mandate that refunds must be credited to the original payment instrument.",
  },
  {
    question: "How do I file a consumer complaint against FSN E-Commerce Ventures on e-Jagriti?",
    answer:
      "Access e-jagriti.gov.in and verify via Aadhaar or DigiLocker. Draft a complaint under Section 35 of CPA 2019 naming FSN E-Commerce Ventures Limited as respondent, attach invoice PDF, batch photographs, legal notice, and postal tracking report, and remit the nominal court fee online.",
  },
  {
    question: "Nykaa se refund nahi mila ya nakli product aaya toh consumer court me complaint kaise kare?",
    answer:
      "Agar Nykaa refund roke ya duplicate cosmetic bhej de, toh unboxing video aur batch code photos surakshit karein. Grievance Officer ko email bhejkar 48 ghante me jawab demand karein aur NCH 1915 par docket darj karein. Samadhan na milne par advocate notice serve karein, jiske baad e-Jagriti par District Commission me case darj hota hai.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer,
    },
  })),
};

export default function NykaaDisputePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-slate-50 min-h-screen text-slate-900">
        {/* Navigation Breadcrumbs */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                {
                  label: "Refunds & Consumer Complaints",
                  href: "/services/refunds-and-consumer-complaints",
                },
                { label: "Legal Notice to Nykaa", href: "/legal-notice-to/nykaa" },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <header className="bg-white border-b border-slate-200 pt-8 pb-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-800 mb-4">
              <span>E-Commerce & Cosmetics Recovery Guide</span>
              <span>•</span>
              <span>Updated November 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
              Nykaa Refund Delayed or Product Not Genuine? Know Your Rights
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
              Whether Nykaa customer care is stonewalling your returned order refund, a pickup executive refused your parcel, or you received a counterfeit cosmetic or expired fragrance, Indian law protects online buyers from unfair trade practices.
            </p>

            {/* Quick Answer Box (Archetype B1 Mandatory Element) */}
            <section
              aria-label="Quick answer"
              className="bg-pink-50 border-l-4 border-pink-600 p-5 sm:p-6 rounded-r-xl mb-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-pink-900 font-bold text-sm tracking-wide uppercase mb-2">
                <span>Quick Statutory Summary</span>
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                FSN E-Commerce Ventures Limited and marketplace sellers share statutory liability under Rule 5 and Rule 6 of the Consumer Protection (E-Commerce) Rules, 2020. Under Section 17C of the Drugs and Cosmetics Act, 1940, selling spurious cosmetics is strictly prohibited. Your first legal step is lodging an official grievance with Nykaa's Grievance Redressal Officer in Mumbai. If unresolved within 48 hours or uncredited after 30 days, serve a 15-day advocate legal notice before filing a claim up to ₹50 lakh on e-Jagriti.
              </p>
            </section>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-100">
              <span>Author: <Link href="/authors/anuj-anand-malik" className="text-red-700 font-medium hover:underline">Anuj Anand Malik</Link></span>
              <span>•</span>
              <span>Statutory Compliance: CPA 2019, E-Commerce Rules 2020 & BSA Section 63</span>
            </div>
            {/* TODO(reviewer): Add legally reviewed box when src/data/reviewers.ts is configured */}
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
          {/* 1. Problem Framing */}
          <section aria-labelledby="problem-analysis-heading">
            <h2
              id="problem-analysis-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Why Nykaa Refunds Get Stuck or Cosmetic Returns Rejected
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                Cosmetics, luxury fragrances, and personal skincare products represent one of the most disputed segments in online commerce. When orders placed on the Nykaa mobile app run into fulfillment snags, consumers face three common roadblocks.
              </p>
              <p>
                First, the <strong>“Non-Returnable” policy shield</strong>. When customers report leaking bottles, damaged compacts, or near-expiry skincare, support agents routinely cite terms and conditions stating opened cosmetics cannot be returned. Under Section 2(47) of the Consumer Protection Act, 2019, arbitrary non-returnable disclaimers are legally void when items are delivered defective, leaking, or misbranded.
              </p>
              <p>
                Second, <strong>suspected counterfeit or duplicate cosmetics</strong>. Luxury perfumes and serums purchased during sale events sometimes arrive with mismatched batch codes, missing CDSCO import registration stickers, or altered formulations. Under Section 17C of the Drugs and Cosmetics Act, 1940, stocking or distributing spurious cosmetics is a statutory violation carrying criminal penalties.
              </p>
              <p>
                Third, <strong>doorstep courier pickup rejections</strong>. Logistics executives frequently refuse return pickups by falsely claiming the parcel was opened or that items did not match warehouse records. Once marked as a failed pickup, the app closes the return ticket automatically, leaving the consumer without their money.
              </p>
            </div>
          </section>

          {/* 2. Vertical Escalation Rail (Archetype B1 Mandatory Element) */}
          <section
            id="escalation-rail"
            aria-labelledby="escalation-rail-heading"
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
          >
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-red-100 text-red-800 mb-3">
              Dated Legal Pathway
            </div>
            <h2
              id="escalation-rail-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6"
            >
              How Does the 4-Stage Legal Escalation Rail Work Against Nykaa?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Enforcing consumer claims against Nykaa requires following a documented chronological sequence. Preserving an audit trail creates verified proof under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
            </p>

            <ol className="relative border-l-2 border-slate-200 space-y-8 ml-4 sm:ml-6">
              {/* Day 0 */}
              <li className="relative pl-6 sm:pl-8">
                <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-bold ring-4 ring-white">
                  1
                </span>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <time dateTime="P0D" className="text-sm font-bold text-red-600 uppercase tracking-wide">
                    Day 0: Formal Grievance Escalation
                  </time>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                    Internal Redressal
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Serve a Written Grievance to Nykaa Redressal Officers
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  Email Nykaa’s Grievance Redressal Officer at <code className="bg-slate-100 px-1 py-0.5 rounded text-red-700">grievanceofficer@nykaa.com</code>. Specify your Order ID, invoice number, batch codes, and precise defect details. Demand a formal acknowledgment within 48 hours as mandated by Rule 4(4) of the Consumer Protection (E-Commerce) Rules, 2020.
                </p>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs text-slate-600">
                  <strong>Statutory Rule:</strong> Rule 4(4) requires e-commerce entities to acknowledge grievances within 48 hours and assign a tracking docket.
                </div>
              </li>

              {/* Day 7 */}
              <li className="relative pl-6 sm:pl-8">
                <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold ring-4 ring-white">
                  2
                </span>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <time dateTime="P7D" className="text-sm font-bold text-amber-700 uppercase tracking-wide">
                    Day 7: National Consumer Helpline (NCH 1915)
                  </time>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-medium">
                    Regulatory Mediation
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Lodge an Official INGRAM Docket with the Central Government
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  If the Grievance Officer ignores your complaint or rejects your return under a non-returnable clause, escalate to the National Consumer Helpline by dialing <strong>1915</strong> or lodging an online complaint at <Link href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">consumerhelpline.gov.in</Link>. NCH routes the docket to Nykaa’s nodal compliance desk.
                </p>
                <div className="bg-amber-50/50 p-2.5 rounded-lg border border-amber-200 text-xs text-amber-900">
                  <strong>Expected Outcome:</strong> Many e-commerce desks reverse illegitimate return rejections once an official INGRAM docket is opened.
                </div>
              </li>

              {/* Day 15 */}
              <li className="relative pl-6 sm:pl-8">
                <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold ring-4 ring-white">
                  3
                </span>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <time dateTime="P15D" className="text-sm font-bold text-red-700 uppercase tracking-wide">
                    Day 15: Advocate Pre-Litigation Legal Notice
                  </time>
                  <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-800 font-semibold">
                    Legal Demand
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Issue a Statutory Notice to FSN E-Commerce Ventures Limited
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  Have an enrolled advocate issue a formal legal notice to Nykaa’s Mumbai headquarters. The notice outlines breaches under Section 2(47) of CPA 2019, fallback liabilities under E-Commerce Rules, and offenses under the Drugs and Cosmetics Act. It demands a full refund and damages within 15 calendar days.
                </p>
                <div className="bg-red-50 p-2.5 rounded-lg border border-red-200 text-xs text-red-900">
                  <strong>Service Protocol:</strong> Served via India Post Registered Speed Post with tracking and sent electronically under Section 63 BSA.
                </div>
              </li>

              {/* Day 30 */}
              <li className="relative pl-6 sm:pl-8">
                <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white text-xs font-bold ring-4 ring-white">
                  4
                </span>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <time dateTime="P30D" className="text-sm font-bold text-sky-700 uppercase tracking-wide">
                    Day 30: e-Jagriti Consumer Court Filing
                  </time>
                  <span className="text-xs px-2 py-0.5 rounded bg-sky-50 text-sky-800 font-medium">
                    Judicial Adjudication
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Initiate a Formal Complaint on the National e-Jagriti Portal
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  If the 15-day notice window passes without resolution, file a consumer case via <Link href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">e-jagriti.gov.in</Link>. For claims up to ₹50 lakh, your local District Consumer Commission holds jurisdiction to award refunds, penal interest, and legal costs.
                </p>
                <div className="bg-sky-50/50 p-2.5 rounded-lg border border-sky-200 text-xs text-sky-900">
                  <strong>Jurisdiction:</strong> You file where you reside or work, eliminating any requirement to travel to Nykaa’s headquarters in Mumbai.
                </div>
              </li>
            </ol>
          </section>

          {/* 3. Grievance Officer Fact Sheet (Archetype B1 Mandatory Element) */}
          <section
            id="grievance-officer"
            aria-labelledby="grievance-officer-heading"
            className="bg-slate-100 rounded-2xl border border-slate-300 p-6 sm:p-8"
          >
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-slate-200 text-slate-800 mb-3">
              Corporate Intelligence & Service Matrix
            </div>
            <h2
              id="grievance-officer-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Nykaa Grievance Officer Details &amp; Formal Complaint
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              Under Rule 4(4) and Rule 5 of the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms must publish the contact credentials of their Grievance Redressal Officer. Legal notices must be served on the parent corporate entity.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-5 rounded-xl border border-slate-200 text-sm">
              <div className="border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0 sm:pr-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Parent Corporate Entity
                </dt>
                <dd className="font-bold text-slate-900">
                  FSN E-Commerce Ventures Limited
                </dd>
                <dd className="text-xs text-slate-500 mt-1">CIN: L52600MH2012PLC230136</dd>
              </div>

              <div className="pb-3 sm:pb-0">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Operating Subsidiary
                </dt>
                <dd className="font-bold text-slate-900">
                  Nykaa E-Retail Private Limited
                </dd>
                <dd className="text-xs text-slate-500 mt-1">Operator of beauty and personal care marketplace</dd>
              </div>

              <div className="border-t border-slate-100 pt-3 sm:border-r sm:pr-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Registered Corporate Headquarters
                </dt>
                <dd className="text-slate-800 text-xs leading-relaxed font-medium">
                  104, Vasan Udyog Bhavan, Sun Mill Compound, Tulsi Pipe Road, Lower Parel, Mumbai – 400013, Maharashtra
                </dd>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Designated Grievance Redressal Officer
                </dt>
                <dd className="font-bold text-slate-900">
                  Mr. Pratiek Varma
                </dd>
                <dd className="text-xs text-slate-500 mt-1">Head of Customer Experience & Regulatory Redressal</dd>
              </div>

              <div className="border-t border-slate-100 pt-3 sm:border-r sm:pr-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Direct Grievance Email Addresses
                </dt>
                <dd className="font-mono text-xs text-red-700 font-semibold break-all">
                  grievanceofficer@nykaa.com
                </dd>
                <dd className="font-mono text-xs text-slate-600 mt-1 break-all">
                  grievanceofficercs@nykaa.com
                </dd>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Statutory Resolution SLA
                </dt>
                <dd className="font-bold text-slate-900">
                  48h Acknowledgment / 30-Day Closure
                </dd>
                <dd className="text-xs text-slate-500 mt-1">
                  Rule 4(4) & Rule 5(3)(b) Consumer Protection (E-Commerce) Rules
                </dd>
              </div>
            </dl>
          </section>

          {/* 4. Key Statutory Facts Table */}
          <section aria-labelledby="key-facts-heading">
            <h2
              id="key-facts-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Key Statutory Facts & Legal Deadlines for Nykaa Consumer Disputes
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              When asserting consumer claims against an e-commerce platform, review the governing statutes, financial limits, and legal thresholds that apply to online transactions in India.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-800">
                <caption className="sr-only">
                  Summary of statutory deadlines, legal limits, and remedies for Nykaa disputes
                </caption>
                <thead className="bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">
                  <tr>
                    <th scope="col" className="px-5 py-3.5">Statutory Dimension</th>
                    <th scope="col" className="px-5 py-3.5">Governing Provision</th>
                    <th scope="col" className="px-5 py-3.5">Prescribed Limit / Remedy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal">
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                      Grievance Acknowledgment
                    </th>
                    <td className="px-5 py-3.5 text-slate-600">
                      Rule 4(4), E-Commerce Rules, 2020
                    </td>
                    <td className="px-5 py-3.5 font-medium text-slate-900">
                      Strict 48-Hour Deadline with unique docket ID
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                      Dispute Redressal Window
                    </th>
                    <td className="px-5 py-3.5 text-slate-600">
                      Rule 5(3)(b), E-Commerce Rules, 2020
                    </td>
                    <td className="px-5 py-3.5 font-medium text-slate-900">
                      Maximum 30 calendar days (1 month) from receipt
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                      Counterfeit / Spurious Cosmetics
                    </th>
                    <td className="px-5 py-3.5 text-slate-600">
                      Section 17C & 18, Drugs and Cosmetics Act, 1940
                    </td>
                    <td className="px-5 py-3.5 font-medium text-red-700">
                      Strict statutory prohibition; full refund + damages
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                      Blanket Non-Returnable Clauses
                    </th>
                    <td className="px-5 py-3.5 text-slate-600">
                      Section 2(47), Consumer Protection Act, 2019
                    </td>
                    <td className="px-5 py-3.5 font-medium text-slate-900">
                      Unfair trade practice; invalid against defective or fake items
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                      Marketplace Intermediary Defense
                    </th>
                    <td className="px-5 py-3.5 text-slate-600">
                      Rule 6, E-Commerce Rules 2020 (Fallback Liability)
                    </td>
                    <td className="px-5 py-3.5 font-medium text-slate-900">
                      Platform remains liable if seller fails to fulfill or refund
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                      District Consumer Court Limit
                    </th>
                    <td className="px-5 py-3.5 text-slate-600">
                      Section 34, Consumer Protection Act, 2019
                    </td>
                    <td className="px-5 py-3.5 font-medium text-slate-900">
                      Claims up to ₹50 Lakh (revised 2021 pecuniary rules)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                      Statutory Limitation Period
                    </th>
                    <td className="px-5 py-3.5 text-slate-600">
                      Section 69, Consumer Protection Act, 2019
                    </td>
                    <td className="px-5 py-3.5 font-medium text-slate-900">
                      2 years from the date cause of action arose
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                      Pre-Litigation Notice Cost
                    </th>
                    <td className="px-5 py-3.5 text-slate-600">
                      LegalRecovery Advocate Drafting & Service
                    </td>
                    <td className="px-5 py-3.5 font-bold text-red-700">
                      Flat ₹{BASE_PRICE} (includes Speed Post + digital service)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Platform Liability Explainer (Archetype B1 Mandatory Element) */}
          <section
            id="platform-liability"
            aria-labelledby="platform-liability-heading"
            className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4"
          >
            <h2
              id="platform-liability-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
            >
              Can Nykaa Refuse Returns for Fake or Damaged Cosmetics?
            </h2>
            <p>
              When a dispute arises over cosmetics or fragrances, Nykaa often cites its policy stating personal care goods cannot be returned once opened. Under Indian consumer law, internal platform policies cannot supersede rights guaranteed by Parliament.
            </p>

            <blockquote
              className="border-l-4 border-red-600 pl-4 py-2 my-4 bg-red-50/60 rounded-r-lg text-slate-800 italic"
            >
              “No marketplace e-commerce entity shall adopt any unfair trade practice, whether in the course of business on its platform or otherwise... Every marketplace e-commerce entity shall effect all refunds within a reasonable period, or as prescribed under applicable laws, and shall not refuse to take back goods, or discontinue the provision of services, if such goods and services are defective, deficient or spurious, or if the goods or services are not of the characteristics or features as agreed or if such goods or services are delivered late from the stated delivery schedule.”
              <footer className="text-xs text-slate-600 font-semibold mt-2 not-italic">
                — Rule 5(3)(b), Consumer Protection (E-Commerce) Rules, 2020
              </footer>
            </blockquote>

            <p>
              Personal care products are further governed by the <strong>Drugs and Cosmetics Act, 1940</strong>. Under Section 17C, a cosmetic is legally deemed "spurious" if it imitates another brand or misstates manufacturer credentials. Selling spurious formulations is prohibited under Section 18.
            </p>
            <p>
              Platforms also claim intermediary immunity under Section 79 of the Information Technology Act. The <strong>Fallback Liability</strong> framework in Rule 6 of the E-Commerce Rules overrides this defense: if a registered seller fails to deliver authentic goods or refund money, Nykaa remains directly liable.
            </p>
          </section>

          {/* 6. Dispute Resolution Flowchart SVG (Artefact 1) */}
          <section aria-labelledby="flowchart-heading">
            <h2
              id="flowchart-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              How Does a Nykaa Dispute Flow From Grievance to Legal Resolution?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Review the procedural progression from customer service impasse to consumer commission adjudication.
            </p>
            <NykaaEscalationRailSVG />
          </section>

          {/* 7. Case Law Strip (Archetype B1 Mandatory Element) */}
          <section
            id="case-law"
            aria-labelledby="case-law-heading"
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-emerald-100 text-emerald-800">
              Verified Judicial Precedents
            </div>
            <h2
              id="case-law-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
            >
              Consumer Commission Orders Against Nykaa &amp; FSN
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Consumer Commissions consistently hold e-commerce platforms liable for delivery failures, delayed refunds, and defective goods.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Case 1: Diksha Negi */}
              <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      DCDRC-I U.T. Chandigarh • CC/474/2023
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      ₹4,000 Awarded
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    Diksha Negi vs. Nykaa E-Retail Private Limited & Anr.
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">Decided on: July 1, 2024</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    The complainant ordered skincare cosmetics worth ₹2,823.24 via Nykaa. The order was not delivered and tracking stalled for a month. Nykaa credited the refund only after receiving a formal advocate legal notice.
                  </p>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs text-slate-700 space-y-1 mb-3">
                    <p>
                      <strong>Nykaa Defense:</strong> Claimed no cause of action survived because the refund was credited post-notice, and asserted intermediary immunity under Section 79 IT Act.
                    </p>
                    <p>
                      <strong>Commission Ruling:</strong> The Commission dismissed the intermediary defense, holding that withholding funds and refunding only after a legal notice is deficiency in service. The forum ordered Nykaa to pay ₹4,000 composite compensation.
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Relief: ₹4,000 compensation</span>
                  <Link
                    href="https://www.livelaw.in/consumer-cases/district-consumer-commission-chandigarh-nykaa-e-retail-deficiency-in-service-262100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 font-semibold hover:underline"
                  >
                    View LiveLaw Report →
                  </Link>
                </div>
              </article>

              {/* Case 2: Ashish Gupta */}
              <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      District Consumer Commission • CC/131/2023
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      Order Allowed
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    Ashish Gupta vs. Nykaa Fashion Private Limited
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">Under Section 35, Consumer Protection Act 2019</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    The consumer placed an apparel order through Nykaa. When delivery failed and return requests were stalled with automated responses, the consumer approached the consumer forum for deficiency in service.
                  </p>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs text-slate-700 space-y-1 mb-3">
                    <p>
                      <strong>Legal Ground:</strong> Section 35 of CPA 2019 enables consumers to seek redressal for delivery failures and customer service lethargy.
                    </p>
                    <p>
                      <strong>Commission Holding:</strong> The complaint was allowed against the Nykaa subsidiary, affirming that e-commerce platforms cannot evade liability for fulfillment defaults.
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Principle: Fulfillment accountability</span>
                  <Link
                    href="https://e-jagriti.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 font-semibold hover:underline"
                  >
                    e-Jagriti Precedent Search →
                  </Link>
                </div>
              </article>
            </div>
          </section>

          {/* 8. Electronic Evidence Checklist (Archetype B1 Mandatory Element) */}
          <section
            id="evidence"
            aria-labelledby="evidence-heading"
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
          >
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-100 text-blue-800 mb-3">
              Section 63 BSA Compliance
            </div>
            <h2
              id="evidence-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Evidence of Counterfeit Goods Under Section 63 BSA
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, digital records are admissible in consumer court when their integrity and origin are documented. Retain these six items before issuing a legal notice.
            </p>

            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="flex-shrink-0 mt-0.5 text-emerald-600 font-bold">☑</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Unboxing Video Showing Tamper-Proof Seals
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Continuous video showing the outer shipping box, courier airway bill sticker, cutting of tape, and examination of the cosmetic container.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="flex-shrink-0 mt-0.5 text-emerald-600 font-bold">☑</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Photographs of Batch Numbers & CDSCO Markings
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Close-up photos of batch codes, manufacturing dates, and expiry dates on the outer box versus the inner cosmetic bottle or jar.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="flex-shrink-0 mt-0.5 text-emerald-600 font-bold">☑</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Tax Invoice PDF from Nykaa App
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Original tax invoice PDF showing FSN E-Commerce Ventures or the seller’s GSTIN, order ID, product description, and HSN code.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="flex-shrink-0 mt-0.5 text-emerald-600 font-bold">☑</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Doorstep Return Pickup Handover Slip or Refusal Video
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Retain the paper receipt or SMS if picked up. If the courier refused pickup, record a video of the refusal with date and time.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="flex-shrink-0 mt-0.5 text-emerald-600 font-bold">☑</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Customer Support Emails & NCH Docket Reference
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Timestamped email exchanges with grievanceofficer@nykaa.com alongside your National Consumer Helpline (NCH 1915) docket confirmation.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="flex-shrink-0 mt-0.5 text-emerald-600 font-bold">☑</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Bank Statement Showing Absence of Inward Credit
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Bank statement covering 30 days from order cancellation or return handover, confirming funds were debited but never refunded.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* 9. Worked Example Card (Artefact 2) */}
          <section aria-labelledby="worked-example-heading">
            <h2
              id="worked-example-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Case Study: Recovers ₹7,499 for Counterfeit Perfume
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Review this illustrative scenario based on recurring consumer dispute patterns.
            </p>

            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-pink-400">
                  Illustrative Case Study • Consumer Dispute Recovery
                </span>
                <span className="text-xs text-slate-400">Resolution Period: 9 Calendar Days</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                  <span className="text-xs text-slate-400 block mb-0.5">Complainant</span>
                  <strong className="text-white">Ananya Mukherjee (Kolkata)</strong>
                </div>
                <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                  <span className="text-xs text-slate-400 block mb-0.5">Disputed Product</span>
                  <strong className="text-white">Luxury Eau De Parfum (100ml)</strong>
                </div>
                <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                  <span className="text-xs text-slate-400 block mb-0.5">Disputed Amount</span>
                  <strong className="text-emerald-400 font-mono">₹7,499 (Prepaid UPI)</strong>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>The Impasse:</strong> During an online beauty sale, Ananya ordered a luxury perfume for ₹7,499. The bottle arrived without cellophane packaging, had mismatched batch codes on the carton versus the bottle, and emitted an alcohol-solvent scent. When she requested a return within 24 hours, support rejected the request, citing non-returnable hygiene rules.
                </p>
                <p>
                  <strong>The Evidence Dossier:</strong> Ananya preserved the carton, recorded video of the mismatched batch codes, and emailed the Grievance Redressal Officer in Mumbai. The ticket was closed after 48 hours with a boilerplate rejection.
                </p>
                <p>
                  <strong>The Legal Notice:</strong> An advocate served a pre-litigation legal notice upon FSN E-Commerce Ventures Limited in Lower Parel, Mumbai. The notice cited Rule 5(3)(b) of the E-Commerce Rules, Section 17C of the Drugs and Cosmetics Act, and Section 2(47) of CPA 2019, demanding full refund and damages within 15 days.
                </p>
                <p className="text-emerald-300 font-medium">
                  <strong>The Settlement:</strong> On Day 9 post-service, Nykaa’s escalation team arranged reverse courier pickup and credited ₹7,499 to her bank account, alongside a ₹2,000 goodwill platform voucher.
                </p>
              </div>
            </div>
          </section>

          {/* 10. Honest Scope & Limitations */}
          <section
            id="scope"
            aria-labelledby="scope-heading"
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
          >
            <h2
              id="scope-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              What Can and Cannot LegalRecovery Do for Your Nykaa Dispute?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We articulate the boundaries of our legal-notice platform so consumers understand their statutory leverage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
              <div className="bg-emerald-50/60 p-4 sm:p-5 rounded-xl border border-emerald-200">
                <h3 className="font-bold text-emerald-950 mb-2.5 flex items-center gap-2">
                  <span className="text-emerald-600 text-base">✓</span> What LegalRecovery Does
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li>
                    <strong>Advocate Drafting:</strong> An advocate drafts a tailored notice citing E-Commerce Rules 2020 and CPA 2019.
                  </li>
                  <li>
                    <strong>Dual-Channel Service:</strong> Served upon FSN E-Commerce Ventures via Registered Speed Post with tracking plus certified email.
                  </li>
                  <li>
                    <strong>Section 63 BSA Dossier:</strong> We compile invoices, courier slips, and batch photos into an evidence packet.
                  </li>
                  <li>
                    <strong>e-Jagriti Petition Draft:</strong> If Nykaa fails to resolve, we supply a petition ready for court upload.
                  </li>
                </ul>
              </div>

              <div className="bg-rose-50/60 p-4 sm:p-5 rounded-xl border border-rose-200">
                <h3 className="font-bold text-rose-950 mb-2.5 flex items-center gap-2">
                  <span className="text-rose-600 text-base">✕</span> What We Cannot Do
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li>
                    <strong>Anonymous Vendors:</strong> We pursue registered platforms (Nykaa) and sellers; we cannot trace offline counterfeiters.
                  </li>
                  <li>
                    <strong>Court Appearance:</strong> The ₹{BASE_PRICE} fee covers drafting and dispatch; it excludes in-person trial advocacy.
                  </li>
                  <li>
                    <strong>Guaranteed Court Dates:</strong> Pre-litigation notices usually settle quickly, but court trials depend on forum schedules.
                  </li>
                  <li>
                    <strong>Criminal Investigations:</strong> We manage civil and consumer recovery; we do not lodge police FIRs.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 11. CTA Band */}
          <section aria-label="Legal Notice CTA">
            <NykaaNoticeCTA />
          </section>

          {/* 12. FAQ Section (Archetype B1 Mandatory Element) */}
          <section
            id="faqs"
            aria-labelledby="faq-heading"
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-slate-200 text-slate-800">
              Consumer Knowledge Bank
            </div>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
            >
              FAQs About Nykaa Refunds, Fake Products &amp; Notices
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Common questions regarding Nykaa refund timelines, counterfeit cosmetic verifications, and consumer court escalations.
            </p>

            <div className="space-y-3.5 pt-2">
              {faqData.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 open:ring-1 open:ring-pink-500/20 transition-all shadow-sm"
                >
                  <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center gap-4 text-base">
                    <span>{faq.question}</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg flex-shrink-0">
                      ▾
                    </span>
                  </summary>
                  <div className="mt-2.5 pt-2.5 border-t border-slate-100 text-slate-700 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* 13. Sources & Legal References */}
          <section
            id="sources"
            aria-labelledby="sources-heading"
            className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8"
          >
            <h2
              id="sources-heading"
              className="text-lg font-bold text-slate-900 mb-4"
            >
              Primary Legal Authorities for Nykaa Cosmetic Disputes
            </h2>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Statutory provisions, regulatory deadlines, and jurisdictional thresholds referenced on this page are verified against official gazettes, legislation, and judicial reporting:
            </p>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                <span>
                  <strong>Consumer Protection (E-Commerce) Rules, 2020:</strong> Prescribing the 48-hour grievance acknowledgment and 30-day resolution deadline. Official text:{" "}
                  <span className="text-red-700 font-medium">consumeraffairs.nic.in</span>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                <span>
                  <strong>Consumer Protection Act, 2019:</strong> Sections 2(47), 35, and 69. Official gazette:{" "}
                  <span className="text-red-700 font-medium">indiacode.nic.in</span>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                <span>
                  <strong>Drugs and Cosmetics Act, 1940:</strong> Prohibiting import and sale of spurious cosmetics under Sections 17C and 18. CDSCO regulations:{" "}
                  <Link
                    href="https://cdsco.gov.in/opencms/opencms/en/Drugs/Cosmetics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 hover:underline"
                  >
                    cdsco.gov.in
                  </Link>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                <span>
                  <strong>Judicial Precedent:</strong> <em>Diksha Negi vs. Nykaa E-Retail Pvt. Ltd. & Anr.</em>, CC/474/2023, DCDRC-I U.T. Chandigarh (July 1, 2024). Reported on{" "}
                  <Link
                    href="https://www.livelaw.in/consumer-cases/district-consumer-commission-chandigarh-nykaa-e-retail-deficiency-in-service-262100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 hover:underline"
                  >
                    LiveLaw
                  </Link>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                <span>
                  <strong>Government Grievance Portals:</strong> National Consumer Helpline (
                  <Link
                    href="https://consumerhelpline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 hover:underline"
                  >
                    consumerhelpline.gov.in
                  </Link>
                  ) and e-Jagriti (
                  <Link
                    href="https://e-jagriti.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 hover:underline"
                  >
                    e-jagriti.gov.in
                  </Link>
                  ).
                </span>
              </li>
            </ul>
          </section>

          {/* Related Recovery Guides */}
          <RelatedRecoveryGuides />
        </main>
      </div>
    </>
  );
}
