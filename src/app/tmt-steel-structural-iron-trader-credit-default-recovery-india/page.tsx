import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import TmtSteelTableOfContents from "./TmtSteelTableOfContents";
import TmtSteelScenarioTabs from "./TmtSteelScenarioTabs";
import TmtSteelNoticeCTA from "./TmtSteelNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/tmt-steel-structural-iron-trader-credit-default-recovery-india";
const EXACT_H1 =
  "High-Value Credit Recovery for TMT, Structural & Coil Steel Distributors: Dharamkanta Slips, MTC Proof & Unsold-Inventory Attachment";
const META_TITLE = "TMT & Structural Steel Credit Default Recovery India";
const META_DESCRIPTION =
  "Recover unpaid TMT/HR coil steel bills from builders & factories using Dharamkanta slips, E-Way, MTC proof, Order 37, Order 38 r.5 & NI Act s.138.";

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
        alt: formatAltText(META_TITLE),
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

const PRIMARY_SOURCES = [
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII Summary Procedure & Order XXXVIII Rule 5 Attachment Before Judgment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138, 141 Director Liability & 143A 20% Interim Compensation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "The Sale of Goods Act, 1930 (Section 42 Acceptance & Section 61 Interest on Price) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 45-Day Cap & 3x RBI Compound Interest) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Admissibility of Electronic Weighbridge, E-Way & ERP Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Bureau of Indian Standards — IS 1786:2008 (High Strength Deformed Steel Bars and Wires for Concrete Reinforcement)",
    url: "https://www.bis.gov.in/",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 12A Pre-Institution Mediation & Urgent Interim Relief) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2157",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Order XXXVIII Rule 5 Attachment Before Judgment",
    parties: "Raman Tech. & Process Engg. Co. & Anr. v. Solanki Traders",
    citation: "(2008) 2 SCC 302, Supreme Court of India",
    facts:
      "A supplier sought attachment before judgment of the debtor's immovable and liquid assets to prevent the buyer from dissipating inventory during the pendency of a commercial recovery suit.",
    holding:
      "The Supreme Court clarified that while Order XXXVIII Rule 5 is an extraordinary remedy, courts are empowered to attach unencumbered assets or demand security where the plaintiff establishes a prima facie case and demonstrates that the defendant is attempting to remove, dispose of, or alienate property with intent to obstruct execution of a decree.",
    amount: "Pre-Decree Freeze on Unsold Builder Flats & Non-Mortgaged Bank Accounts",
    takeaway:
      "Steel distributors must pair RERA unsold-unit filings and MCA charge searches with their Order XXXVII plaint to demonstrate urgent asset-alienation risk.",
  },
  {
    title: "Supreme Court on Security Cheques & Section 138/141 Criminal Liability",
    parties: "Sripati Singh (Since Deceased) Through His Son Gaurav Singh v. State of Jharkhand",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    facts:
      "A commercial borrower argued that post-dated cheques delivered as security at the start of a supply arrangement could not be prosecuted under Section 138 NI Act upon default.",
    holding:
      "The Supreme Court ruled that a cheque issued as security crystallizes into an enforceable negotiable instrument the moment the underlying supply debt becomes due and payable; dishonour attracts full criminal prosecution under Section 138 and director accountability under Section 141.",
    amount: "Full s.138 & s.143A (20% Interim Compensation) Enforcement on Steel PDCs",
    takeaway:
      "Rolling mills and steel stockists holding builder or dealer security cheques can present them immediately after the 30-day credit window expires.",
  },
  {
    title: "Supreme Court on Mandatory Section 12A Mediation & Urgent Interim Relief Exception",
    parties: "Patil Automation Private Limited v. Rakheja Engineers Private Limited",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    facts:
      "Commercial plaintiffs filed suits valued at ₹3 Lakh and above without undergoing pre-institution mediation under Section 12A of the Commercial Courts Act, 2015.",
    holding:
      "The Supreme Court held that Section 12A mediation is mandatory for commercial suits unless the plaint genuinely contemplates urgent interim relief—such as an Order XXXVIII Rule 5 attachment before judgment or Order XXXIX asset-alienation injunction.",
    amount: "Bypass Section 12A Delay Only With Genuine Order 38 Rule 5 Urgency",
    takeaway:
      "TMT distributors seeking immediate freeze on a builder's unsold inventory must plead specific, documented asset-dissipation facts to qualify for urgent filing.",
  },
  {
    title: "Supreme Court on MSMED 3x RBI Compound Interest Overriding PO Terms",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation & Anr.",
    citation: "2021 SCC OnLine SC 439, Supreme Court of India",
    facts:
      "Institutional buyers relied on purchase-order clauses excluding late-payment interest to resist statutory MSMED claims.",
    holding:
      "The Supreme Court affirmed that the MSMED Act, 2006 overrides contrary contractual terms under Section 24; an Udyam-registered Micro or Small supplier is statutorily entitled to 3x RBI Bank Rate compounded monthly under Section 16.",
    amount: "3x RBI Compound Monthly Interest Defeats 180-Day Zero-Interest Credit Stretch",
    takeaway:
      "Registered Micro and Small rolling mills and steel fabricators recover compounded statutory interest even when builder POs state 'no interest on delayed bills'.",
  },
];

const FAQS = [
  {
    question: "How can a TMT steel trader attach a defaulting builder's unsold flats before getting a final court decree?",
    answer:
      "By filing an application under Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908 (Attachment Before Judgment) alongside an Order XXXVII Summary Suit or Commercial Suit. Under the Supreme Court's Raman Tech standard, you must show a strong prima facie debt (Tax Invoices + E-Way Bills + signed Dharamkanta slips) and concrete evidence that the builder is transferring, mortgaging, or liquidating unencumbered unsold flats or bank balances to defeat your decree.",
  },
  {
    question: "Can a buyer withhold payment after 60 days citing 'weight shortage' or 'surface rust' on TMT bars?",
    answer:
      "No. Under Section 42 of the Sale of Goods Act, 1930, once the buyer's storekeeper signs the Lorry Receipt (LR) and Dharamkanta weighbridge slip at the site gate, unloads the 30-ton trailer, and stacks or fabricates the steel without a contemporaneous written protest within 24–48 hours, the buyer is deemed to have accepted the goods. Furthermore, IS 1786:2008 permits standard sectional weight tolerances and distinguishes harmless atmospheric mill scale from structural pitting.",
  },
  {
    question: "Are Dharamkanta weighbridge slips, GST E-Way Bills, and Mill Test Certificates (MTC) enough for an Order 37 Summary Suit?",
    answer:
      "Yes. A written commercial contract under Order XXXVII CPC does not require a separate stamped agreement—signed Tax Invoices carrying payment terms, GST E-Way Bill Part-A/B logs, calibrated Dharamkanta slips, and Mill Test Certificates (MTC) linking heat numbers to the delivered batch establish a liquidated written debt. Under Order XXXVII, the defaulting builder or factory cannot defend the suit as a matter of right and must obtain 'leave to defend' by showing a genuine, triable defense.",
  },
  {
    question: "What happens if a rolling mill or steel dealer's RTGS promise fails and their PDC bounces?",
    answer:
      "Dishonour of a post-dated or security cheque issued against delivered steel attracts criminal prosecution under Section 138 read with Section 141 of the Negotiable Instruments Act, 1881 against the company and its signing/executive directors. You must issue a statutory 15-day demand notice within 30 days of receiving the bank return memo. Upon filing the complaint, you can move an application under Section 143A for up to 20% interim compensation while running a parallel Order XXXVII civil suit.",
  },
  {
    question: "How do steel traders stop builders from stretching 30-day credit to 180 days without interest?",
    answer:
      "If your distributorship or rolling mill holds Micro or Small Udyam registration on the date of supply, Section 15 of the MSMED Act caps credit at 45 days and Section 16 mandates 3x the RBI Bank Rate compounded monthly. Moreover, Section 43B(h) of the Income Tax Act disallows the buyer's tax deduction on unpaid Micro/Small steel purchases beyond 45 days. Serving a formal notice highlighting Section 43B(h) audit impact and 3x RBI compounding rapidly forces settlement.",
  },
  {
    question: "What electronic proof is required under Bharatiya Sakshya Adhiniyam (BSA) 2023 for weighbridge and E-Way records?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (replacing Section 65B of the Evidence Act), digital weighbridge printouts, GST portal E-Way Bill PDFs, GSTR-1/GSTR-2B reconciliation statements, WhatsApp dispatch confirmations, and ERP ledger extracts must be accompanied by a signed Section 63 BSA certificate from the person in lawful control of the computer system.",
  },
];

export default function TmtSteelRecoveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    datePublished: "2026-11-17",
    dateModified: "2026-11-17",
    inLanguage: "en-IN",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Stage Credit Recovery Playbook for TMT & Structural Steel Distributors",
    description:
      "Step-by-step statutory recovery process using Dharamkanta slips, MTC certificates, Order XXXVII CPC, Order XXXVIII Rule 5 attachment, and NI Act s.138/141.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock BSA s.63 Dispatch & Weighment Dossier",
        text: "Compile GST Tax Invoices, E-Way Bill Part-A/B, calibrated Dharamkanta slips, Mill Test Certificates (MTC), and signed Lorry Receipts within 48 hours of default.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Serve Statutory Demand Notice & s.43B(h) Audit Alert",
        text: "Issue an advocate-drafted notice demanding principal, 3x RBI MSMED interest (or contractual 18–24% interest), and rejecting any post-delivery weight or rust claims under Sale of Goods Act s.42.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Present PDCs & Trigger NI Act s.138/141 Director Liability",
        text: "Deposit post-dated or security cheques, obtain the bank return memo, and serve a 15-day Section 138 notice naming executive directors under Section 141.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "File Order XXXVII Summary Suit With Order XXXVIII Rule 5 Attachment",
        text: "Initiate summary recovery in Commercial Court paired with an Order XXXVIII Rule 5 motion to freeze the builder's unencumbered unsold flats or operating bank accounts.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Escalate >= ₹1 Cr Corporate Defaults to IBC Section 8",
        text: "Where corporate builder or factory arrears cross ₹1 Crore, serve an IBC Form 3/4 demand notice carrying a 10-day pay-or-NCLT-admission window.",
      },
    ],
  };

  const faqSchema = {
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

  const breadcrumbSchema = {
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
        name: "Chemicals, Steel, RMC & Building Materials Recovery",
        item: `${SITE_URL}/industries/chemicals-steel-rmc-building-materials-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "TMT & Structural Steel Trader Credit Default Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-14 Steel &amp; Rolling Mill Playbook</span>
            <span>&bull;</span>
            <span>Order 37 &amp; Order 38 r.5</span>
            <span>&bull;</span>
            <span>NI Act s.138/141</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words + inline Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/chemicals-steel-rmc-building-materials-recovery"
              className="text-red-300 underline hover:text-white font-bold"
            >
              Building Materials &amp; Steel Recovery Hub
            </Link>
            , TMT, structural, and HR/CR coil distributors defeat delayed builder and factory defaults by locking GST E-Way Bills, calibrated Dharamkanta slips, and Mill Test Certificates under BSA 2023 s.63—enabling rapid{" "}
            <strong>Order XXXVII CPC</strong> summary suits,{" "}
            <strong>Order XXXVIII Rule 5</strong> unsold-flat attachment, and{" "}
            <strong>NI Act s.138/141</strong> director prosecution.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">₹18–22L</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Principal per 30-Ton TMT / HR Coil Trailer
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">1.5% Margin</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                1 ₹65L Default Wipes Out 45 Good Loads
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">20% Deposit</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                NI Act s.143A Interim Relief on Dishonoured PDCs
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">Order 38 r.5</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Pre-Decree Attachment of Unsold Builder Inventory
              </p>
            </div>
          </div>

          <TmtSteelNoticeCTA variant="inline" />
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Chemicals, Steel & RMC Recovery",
                href: "/industries/chemicals-steel-rmc-building-materials-recovery",
              },
              {
                label: "TMT & Structural Steel Credit Recovery",
                href: PAGE_URL,
              },
            ]}
          />
          {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
          <p className="text-xs text-slate-500 mt-2">
            Reviewed by <strong className="text-slate-700">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions &bull; Updated November 2026
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <TmtSteelTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: 1.5% Margin Wipeout & Market Reality */}
            <section
              id="heading-margin-risk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Why One ₹65 Lakh Steel Default Wipes Out 45 Truckloads&apos; Margin
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Across India&apos;s primary steel trading hubs—<strong>Kalamboli (Navi Mumbai)</strong>,{" "}
                <strong>Mandi Gobindgarh (Punjab)</strong>, <strong>Raipur (Chhattisgarh)</strong>,{" "}
                <strong>Jalna (Maharashtra)</strong>, <strong>Durgapur (West Bengal)</strong>,{" "}
                <strong>Ghaziabad/Faridabad (NCR)</strong>, and <strong>Chennai</strong>—TMT bar, structural beam, HR/CR coil, and stainless-steel pipe distributors operate on high-volume, thin-margin working capital. A single 30-metric-ton trailer carries <strong>₹18–22 Lakh</strong> of principal on a razor-thin <strong>1.2% to 1.8% net trading margin</strong> (roughly ₹27,000–₹35,000 per truckload before bank OD interest).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                When a real estate developer, EPC subcontractor, or fabrication factory defaults on just three trailers totaling <strong>₹65 Lakh</strong>, that single bad account erases the net profit of <strong>45 to 50 performing truckloads</strong>. Worse, builders routinely exploit informal &ldquo;parchi&rdquo; credit customs to stretch 30-day bills to 180 days, manufacture belated &ldquo;weight shortage&rdquo; or &ldquo;rust&rdquo; complaints, or stop payment on security cheques while selling RERA flats.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <strong>Cross-Industry Playbook Note:</strong> If you supply both steel and concrete to the same developer, align your evidence timeline with our{" "}
                <Link
                  href="/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute"
                  className="font-bold underline hover:text-amber-700"
                >
                  RMC Cube-Test Dispute Recovery Playbook
                </Link>{" "}
                and review our{" "}
                <Link
                  href="/recovery/vendor-payments"
                  className="font-bold underline hover:text-amber-700"
                >
                  Vendor Payment Recovery Framework
                </Link>{" "}
                to prevent cross-ledger set-offs.
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                5-Stage TMT &amp; Structural Steel Recovery Decision Tree
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Steel distributors lose leverage when they wait 120+ days hoping for voluntary RTGS clearance. Execute this five-stage statutory escalation from Day 31 of credit default.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 mb-4">
                <svg
                  viewBox="0 0 860 220"
                  width={860}
                  height={220}
                  role="img"
                  aria-label="5-Stage TMT and Structural Steel Creditor Recovery Decision Tree"
                  className="w-full h-auto"
                >
                  <rect x="10" y="35" width="150" height="140" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="85" y="65" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 (DAY 31)</text>
                  <text x="85" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Dossier Lock</text>
                  <text x="85" y="114" textAnchor="middle" fill="#CBD5E1" fontSize="10">Dharamkanta + E-Way</text>
                  <text x="85" y="130" textAnchor="middle" fill="#CBD5E1" fontSize="10">+ MTC + BSA s.63</text>
                  <text x="85" y="148" textAnchor="middle" fill="#94A3B8" fontSize="10">Sale of Goods s.42</text>

                  <path d="M160 105 L182 105" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="182,100 192,105 182,110" fill="#DC2626" />

                  <rect x="192" y="35" width="150" height="140" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="267" y="65" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 2 (DAY 35)</text>
                  <text x="267" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Demand Notice</text>
                  <text x="267" y="114" textAnchor="middle" fill="#CBD5E1" fontSize="10">Advocate RPAD +</text>
                  <text x="267" y="130" textAnchor="middle" fill="#CBD5E1" fontSize="10">s.43B(h) Tax Alert</text>
                  <text x="267" y="148" textAnchor="middle" fill="#94A3B8" fontSize="10">3x RBI / 24% Interest</text>

                  <path d="M342 105 L364 105" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="364,100 374,105 364,110" fill="#DC2626" />

                  <rect x="374" y="35" width="150" height="140" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="449" y="65" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 3 (DAY 45)</text>
                  <text x="449" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">PDC &amp; s.138/141</text>
                  <text x="449" y="114" textAnchor="middle" fill="#CBD5E1" fontSize="10">Present Cheque +</text>
                  <text x="449" y="130" textAnchor="middle" fill="#CBD5E1" fontSize="10">15-Day Notice</text>
                  <text x="449" y="148" textAnchor="middle" fill="#94A3B8" fontSize="10">s.143A 20% Deposit</text>

                  <path d="M524 105 L546 105" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="546,100 556,105 546,110" fill="#DC2626" />

                  <rect x="556" y="35" width="150" height="140" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="631" y="65" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 4 (DAY 60)</text>
                  <text x="631" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Order 37 + 38 r.5</text>
                  <text x="631" y="114" textAnchor="middle" fill="#CBD5E1" fontSize="10">Summary Suit +</text>
                  <text x="631" y="130" textAnchor="middle" fill="#CBD5E1" fontSize="10">Attach Unsold Flats</text>
                  <text x="631" y="148" textAnchor="middle" fill="#94A3B8" fontSize="10">Bank Account Freeze</text>

                  <path d="M706 105 L728 105" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="728,100 738,105 728,110" fill="#DC2626" />

                  <rect x="738" y="35" width="112" height="140" rx="12" fill="#7F1D1D" stroke="#F87171" strokeWidth="2" />
                  <text x="794" y="65" textAnchor="middle" fill="#FECACA" fontSize="10" fontWeight="bold">STAGE 5 (&ge;₹1Cr)</text>
                  <text x="794" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">IBC s.8</text>
                  <text x="794" y="114" textAnchor="middle" fill="#FEE2E2" fontSize="10">Form 3/4 Notice</text>
                  <text x="794" y="130" textAnchor="middle" fill="#FEE2E2" fontSize="10">10-Day Window</text>
                  <text x="794" y="148" textAnchor="middle" fill="#FECACA" fontSize="10">NCLT Filing</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  { stage: "Stage 1 (Day 31)", title: "Dossier Lock (BSA s.63)", detail: "Compile Tax Invoices, GST E-Way Part-A/B, Dharamkanta slips, and MTCs." },
                  { stage: "Stage 2 (Day 35)", title: "Advocate Demand & s.43B(h) Alert", detail: "Serve RPAD + Email + WhatsApp notice claiming 3x RBI or 24% interest." },
                  { stage: "Stage 3 (Day 45)", title: "PDC Presentation & NI Act s.138/141", detail: "Present cheques, name signing directors, and seek 20% interim deposit (s.143A)." },
                  { stage: "Stage 4 (Day 60)", title: "Order XXXVII + Order XXXVIII r.5", detail: "File Summary Suit and seek pre-decree attachment of builder's unsold flats." },
                  { stage: "Stage 5 (>= ₹1 Cr)", title: "IBC Section 8 Form 3/4 Notice", detail: "Trigger 10-day pay-or-face-insolvency notice against corporate builders." },
                ].map((item) => (
                  <div key={item.stage} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">{item.stage}</span>
                    <p className="text-sm font-extrabold mt-0.5">{item.title}</p>
                    <p className="text-xs text-slate-300 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                Statutory Matrix: Order 37, Order 38 Rule 5 &amp; NI Act s.138
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                Choose the optimal legal track—or run parallel civil and criminal remedies—based on whether you hold PDCs, Udyam registration, or unencumbered builder assets. For deeper procedural mechanics, see our{" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Order XXXVII Summary Suit Guide
                </Link>{" "}
                and{" "}
                <Link
                  href="/cheque-bounce-and-civil-suit-together"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Parallel Cheque Bounce + Civil Suit Strategy
                </Link>
                .
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-bold">Statutory Remedy</th>
                      <th className="p-3.5 font-bold">Trigger / Floor</th>
                      <th className="p-3.5 font-bold">Key Steel Evidence</th>
                      <th className="p-3.5 font-bold">Creditor Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Order XXXVII CPC Summary Suit</td>
                      <td className="p-3.5 text-slate-700">₹3L+ (Commercial Court)</td>
                      <td className="p-3.5 text-slate-700">Tax Invoice + E-Way Bill + Dharamkanta Slip</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Debtor must win leave to defend; rapid decree</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Order XXXVIII Rule 5 CPC</td>
                      <td className="p-3.5 text-slate-700">Pending Suit + Asset Risk</td>
                      <td className="p-3.5 text-slate-700">RERA Unsold Flats + MCA Charge Search</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Attaches unsold flats / bank accounts pre-decree</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">NI Act s.138 / s.141 / s.143A</td>
                      <td className="p-3.5 text-slate-700">Any Dishonoured PDC</td>
                      <td className="p-3.5 text-slate-700">Cheque + Bank Return Memo + 15-Day Notice</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Director summons + up to 20% interim deposit</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">MSMED Act s.15–18 &amp; s.43B(h)</td>
                      <td className="p-3.5 text-slate-700">Micro/Small Udyam (&gt;45d)</td>
                      <td className="p-3.5 text-slate-700">Udyam Certificate + Signed Delivery Challan</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">3x RBI compound interest + buyer tax disallowance</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">IBC Section 8 (Form 3/4)</td>
                      <td className="p-3.5 text-slate-700">&ge; ₹1 Cr Corporate Debtor</td>
                      <td className="p-3.5 text-slate-700">Ledger + E-Way + Zero Pre-Existing Dispute</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">10-day statutory settlement window before NCLT</td>
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
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                Steel Trade Failure Modes &amp; Counter-Recovery Protocols
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Select your exact commercial bottleneck below to inspect the statutory rebuttal and 3-step execution sequence.
              </p>
              <TmtSteelScenarioTabs />
            </section>

            {/* Section 5: Worked Ledger Calculation */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                Worked Ledger: ₹65 Lakh TMT Default &amp; 180-Day Credit Stretch
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a Raipur/Kalamboli TMT distributor supplying 3 trailers (90 MT total) of Fe-500D bars at ₹72,222/MT (including 18% GST) = <strong>₹65,00,000</strong> on 30-day credit, stretched unilaterally to 180 days (150 days overdue beyond the 30-day due date; 135 days beyond the 45-day MSMED statutory cap). Compute your exact statutory claim with our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                .
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-700 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400">Principal Overdue</p>
                    <p className="text-xl font-black text-white">₹65,00,000</p>
                    <p className="text-xs text-slate-400">3 Trailers &bull; 90 MT Fe-500D</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400">Expected 1.5% Trade Margin</p>
                    <p className="text-xl font-black text-amber-400">₹97,500</p>
                    <p className="text-xs text-slate-400">Wiped out in 45 days of OD interest</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400">MSMED 3x RBI Rate (19.50% p.a.)</p>
                    <p className="text-xl font-black text-emerald-400">₹4,85,120</p>
                    <p className="text-xs text-slate-400">135 days monthly compounded interest</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
                  <span className="text-slate-300">
                    Total Recoverable Claim (Principal + MSMED Compound Interest + Legal Costs):
                  </span>
                  <span className="text-lg sm:text-xl font-black text-emerald-400">
                    ₹69,85,120+
                  </span>
                </div>
              </div>
            </section>

            {/* Section 6: Dharamkanta, E-Way & MTC Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                Dharamkanta, E-Way &amp; MTC Evidence Under BSA 2023 Section 63
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Before issuing your{" "}
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  Legal Demand Notice
                </Link>
                , assemble this five-document evidentiary chain to defeat every &ldquo;non-delivery&rdquo;, &ldquo;weight shortage&rdquo;, or &ldquo;substandard grade&rdquo; excuse in Commercial Court:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Calibrated Dharamkanta Weighbridge Slip",
                    desc: "Shows vehicle number, gross/tare/net weight, timestamp, and Legal Metrology stamp—eliminating post-unloading shortage claims.",
                  },
                  {
                    title: "2. GST E-Way Bill (Part-A & Part-B)",
                    desc: "Government-authenticated movement log proving HSN 7214/7208 dispatch, transporter vehicle registration, and buyer GSTIN.",
                  },
                  {
                    title: "3. Rolling Mill Test Certificate (MTC)",
                    desc: "Batch-specific heat number, chemical composition, and yield/tensile strength compliance under IS 1786:2008 or IS 2062.",
                  },
                  {
                    title: "4. Gate-Entry & Signed Lorry Receipt (LR)",
                    desc: "Site security register stamp and storekeeper signature confirming unloading without contemporaneous quality or rust remarks.",
                  },
                  {
                    title: "5. GSTR-1 / GSTR-2B ITC Claim Proof",
                    desc: "Proves the defaulting builder or factory availed Input Tax Credit (ITC) on your steel invoices—binding admission of receipt.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Certificate",
                    desc: "Signed electronic-record certificate authenticating ERP ledgers, weighbridge printouts, WhatsApp confirmations, and email trails.",
                  },
                ].map((card) => (
                  <div key={card.title} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-sm font-extrabold text-slate-900 mb-1">{card.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Supreme Court Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-5">
                Supreme Court Precedents Protecting Steel Distributors
              </h2>
              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50"
                  >
                    <div className="flex">
                      <div className="w-1.5 bg-[#DC2626] shrink-0" />
                      <div className="p-4 sm:p-5 space-y-2">
                        <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                          {item.amount}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900">
                          {item.parties}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500">{item.citation}</p>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <strong>Holding:</strong> {item.holding}
                        </p>
                        <p className="text-xs sm:text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 font-medium">
                          <strong>Creditor Takeaway:</strong> {item.takeaway}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Dual-Track CTA Section */}
            <TmtSteelNoticeCTA variant="dual" />

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-5">
                Frequently Asked Questions on Steel Trader Credit Recovery
              </h2>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-lg font-black shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Authoritative Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Authoritative Statutory &amp; BIS Steel Standards
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.title} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline font-medium"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
