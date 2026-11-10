import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SubcontractorNoticeCTA from "./SubcontractorNoticeCTA";
import SubcontractorTableOfContents from "./SubcontractorTableOfContents";
import SubcontractorDecisionTabs from "./SubcontractorDecisionTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Main Contractor Not Paying Subcontractor? Recovery Steps",
  description:
    "Main contractor withholding your bills? Back-to-back clauses, MSME claims, legal notice and arbitration options for subcontractors.",
  alternates: {
    canonical: `${SITE_URL}/subcontractor-payment-recovery-india`,
  },
  openGraph: {
    title: "Subcontractor Left Unpaid: Recovering From the Main Contractor in India",
    description:
      "Legal decision tree and recovery playbook for unpaid subcontractors in India: defeating pay-when-paid clauses, MSME ODR claims, retention money recovery, Section 43B(h) tax leverage, and arbitration.",
    url: `${SITE_URL}/subcontractor-payment-recovery-india`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Subcontractor Left Unpaid: Recovering From the Main Contractor in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subcontractor Left Unpaid: Recovering From the Main Contractor in India",
    description:
      "Legal decision tree and recovery playbook for unpaid subcontractors in India: defeating pay-when-paid clauses, MSME ODR claims, retention money recovery, Section 43B(h) tax leverage, and arbitration.",
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
    title: "Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 55 (Time & Delay), Section 70 (Quantum Meruit for Extra Work), Section 73 & 74 (Damages & Retention Forfeiture)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 & MSMED (Amendment) Act, 2026 — Sections 15 to 19 (45-Day Cap, 3× RBI Compound Interest & ODR Portal)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Supreme Court of India — Zonal General Manager, Ircon International Ltd. v. Vinay Heavy Equipments, (2015) 13 SCC 680 (Back-to-Back Clauses Cannot Defeat Subcontractor Entitlement)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Supreme Court of India — Food Corporation of India v. Vikas Majdoor Kamdar Sahkari Mandli Ltd., (2007) 13 SCC 544 (Section 70 Quantum Meruit Compensation for Extra Work Beyond BOQ)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 — Section 9 (Interim Attachment of Project Receivables), Section 11 & 12(5) (Neutral Arbitrator), and Section 21 (Notice Invoking Arbitration)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Income-tax Act, 1961 — Section 43B(h) (Buyer Expense Disallowance for Unpaid MSE Bills) & Section 194C (TDS Deduction on Subcontractor Contracts as Debt Admission)",
    url: "https://www.indiacode.nic.in/handle/123456789/2435",
  },
  {
    title: "Insolvency and Bankruptcy Code (IBC), 2016 — Section 8 & Section 9 (Operational Creditor Demand Notice & CIRP Petition for Defaulted Subcontract Dues ≥ ₹1 Crore)",
    url: "https://www.indiacode.nic.in/handle/123456789/2154",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling That 'Back-to-Back' Clauses Do Not Allow Indefinite Non-Payment to Subcontractors",
    parties: "Zonal General Manager, Ircon International Ltd. v. Vinay Heavy Equipments",
    citation: "(2015) 13 SCC 680, Supreme Court of India",
    date: "Judgment Dated 7 April 2015",
    facts:
      "Ircon International (the main contractor) awarded subcontracts to Vinay Heavy Equipments for civil and earthwork packages on a SIPCOT industrial project. When disputes arose over unpaid Running Account (RA) bills and equipment idling charges, Ircon argued that the subcontract was strictly on a 'back-to-back' basis and that since the principal employer (SIPCOT) had not admitted or released those sums to Ircon, the subcontractor could not recover them.",
    holding:
      "The Supreme Court rejected the main contractor's defence and upheld the arbitral award in favour of the subcontractor. The Court held that primary contractual liability exists between the main contractor and the subcontractor. In the absence of an explicit, unambiguous covenant making payment by the principal employer a strict condition precedent that shifts employer default risk onto the subcontractor, general 'back-to-back' clauses cannot be invoked by the main contractor to withhold legitimate dues for completed work.",
    amount: "Full Subcontract Award + Interest Upheld Against Main Contractor",
    takeaway:
      "A main contractor cannot treat a 'back-to-back' reference in your Work Order as a permanent shield. Once you complete your scope and submit measurements, primary liability to pay rests squarely on the main contractor.",
  },
  {
    title: "Supreme Court Mandate on Paying for Extra Work Executed Without Formal Contract Amendment (Quantum Meruit)",
    parties: "Food Corporation of India & Ors. v. Vikas Majdoor Kamdar Sahkari Mandli Ltd.",
    citation: "(2007) 13 SCC 544, Supreme Court of India",
    date: "Judgment Dated 7 November 2007",
    facts:
      "A contractor executed substantial additional handling and operational work beyond the original written contract scope at the direction of site officials. When the contractor billed for the extra work, the employer refused payment claiming no formal written rate addendum had been sanctioned for the additional quantities.",
    holding:
      "The Supreme Court held that under Section 70 of the Indian Contract Act, 1872, where a person lawfully does anything for another person not intending to do so gratuitously, and the other person enjoys the benefit thereof, the latter is bound to make compensation. Even if a formal written amendment is absent, a contractor who executes extra work on site instructions is entitled to fair market compensation under the principle of Quantum Meruit to prevent unjust enrichment.",
    amount: "Quantum Meruit Compensation for Extra Work + 9% Annual Interest",
    takeaway:
      "If the Main Contractor's Project Manager or Site Engineer instructed you via email, WhatsApp, or site register to execute extra BOQ items without issuing an amended Work Order, you can legally recover the full value under Section 70.",
  },
  {
    title: "Delhi High Court Precedent Striking Down Indefinite Withholding Under 'Pay-When-Paid' Clauses",
    parties: "Ircon International Ltd. v. Simplex Projects Ltd.",
    citation: "2016 SCC OnLine Del 5381 (O.M.P. (COMM) 153/2016), High Court of Delhi",
    date: "Judgment Dated 28 September 2016",
    facts:
      "A subcontractor completed bridge and road construction works and received a completion certificate, but the main contractor withheld final bill payments and retention money citing a back-to-back settlement clause, claiming final reconciliation with the employer was still pending.",
    holding:
      "The Delhi High Court affirmed that once a subcontractor satisfactorily completes the assigned work and the Defect Liability Period expires, the main contractor cannot indefinitely postpone payment or hold back retention money / performance guarantees merely because its own final accounts with the project owner remain unsettled.",
    amount: "Release of Unpaid Final Bills + Withheld Retention Money + Arbitral Interest",
    takeaway:
      "Indian High Courts interpret 'pay-when-paid' clauses as timing mechanisms for routine cash-flow processing, not as forfeiture clauses that let a main contractor hold your bills hostage for years.",
  },
  {
    title: "Supreme Court Ruling Prohibiting Forfeiture of Retention Money or Liquidated Damages Without Proof of Actual Loss",
    parties: "M/s Kailash Nath Associates v. Delhi Development Authority (DDA) & Anr.",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Dated 9 January 2015",
    facts:
      "After contractual milestones were extended and performed, the counterparty sought to forfeit earnest money / security retention citing contractual penalty clauses despite having suffered no actual monetary loss from the alleged delay.",
    holding:
      "Interpreting Sections 73 and 74 of the Indian Contract Act, 1872, the Supreme Court held that where a contract stipulates a penalty or retention forfeiture, the party deducting the money cannot automatically pocket the entire retention or 10% liquidated damages. Proof of actual loss or damage is a sine qua non under Section 74 wherever loss is capable of being calculated.",
    amount: "100% Refund of Wrongfully Forfeited Security Deposit + Interest",
    takeaway:
      "When a main contractor fabricates arbitrary back-charges or deducts 10% liquidated damages from your final RA bill without contemporaneous delay notices or proof of employer penalty, the deduction is illegal under Section 74.",
  },
];

const FAQS = [
  {
    question: "Can a main contractor legally refuse to pay a subcontractor using a 'pay-when-paid' or 'back-to-back' clause in India?",
    answer:
      "No, not indefinitely. In Zonal General Manager, Ircon International Ltd. v. Vinay Heavy Equipments, (2015) 13 SCC 680, the Supreme Court ruled that primary contractual privity exists between the main contractor and the subcontractor. Unless your contract contains an exceptionally explicit condition precedent shifting the principal employer's insolvency risk onto you, Indian courts treat 'pay-when-paid' clauses only as a reasonable administrative window to process bills—never as a license to withhold payment indefinitely after your work is completed.",
  },
  {
    question: "Can a subcontractor file a case on the MSME ODR Portal (formerly Samadhaan) if the main contractor does not pay?",
    answer:
      "Yes, provided you hold a valid Udyam Registration as a Micro or Small Enterprise (MSE) and your invoices are for the supply of goods (e.g., electrical panels, HVAC units, structural steel, UPVC windows, ready-mix concrete) or distinct services (design, surveying, testing, manpower supply). For composite civil 'works contracts' (indivisible labour plus material transfer), some High Courts have raised jurisdictional objections under Section 18 of the MSMED Act; in such composite cases, issuing an Advocate Legal Notice backed by Section 43B(h) tax pressure, Section 21 Arbitration, or a Commercial Court suit is the safest strategy.",
  },
  {
    question: "What if the main contractor's site engineer refuses to sign the Joint Measurement Sheet (JMR) or certify my RA bill?",
    answer:
      "Do not leave your Running Account (RA) bill in informal site limbo. Immediately dispatch the RA bill, measurement sheets, and timestamped site completion photographs to the main contractor's registered corporate office via Registered Speed Post (RPAD) and official email. Under the Explanation to Section 2(b) of the MSMED Act, 2006, if the buyer fails to raise a specific written objection within 15 days of bill delivery, the work is deemed accepted by operation of law.",
  },
  {
    question: "Does TDS deduction under Section 194C in Form 26AS prove that the main contractor owes me the bill amount?",
    answer:
      "Yes. When a main contractor deducts 1% or 2% Tax Deducted at Source (TDS) under Section 194C of the Income-tax Act, 1961, and deposits it against your PAN (reflected in your Form 26AS and Annual Information Statement), or claims GST Input Tax Credit in GSTR-2B, it proves they have booked your invoice as an acknowledged liability in their books of account. Indian civil courts, arbitrators, and the NCLT treat Section 194C TDS entries as powerful admissions of debt that also extend the 3-year limitation period.",
  },
  {
    question: "Can a subcontractor send a legal notice directly to the Principal Employer or Project Owner?",
    answer:
      "Because of the doctrine of privity of contract, a subcontractor generally cannot sue a private Principal Employer directly for money unless there is a tripartite agreement or direct payment guarantee. However, serving a formal Legal Notice on the Main Contractor with a 'Copy For Information' to the Principal Employer's Project Director or Chief Engineer—highlighting unpaid site dues—creates immense commercial and reputational pressure on the Main Contractor to settle your bills before their next project milestone payout.",
  },
  {
    question: "How do I recover 5% or 10% retention money held back by the main contractor after the Defect Liability Period?",
    answer:
      "Once the Defect Liability Period (DLP) of 12 or 24 months expires without any pending written defect notices, the main contractor has zero legal right to retain your security deposit. Under Sections 73 and 74 of the Indian Contract Act (Kailash Nath Associates v. DDA), fabricating sudden back-charges at the end of the DLP without proof of actual loss is unlawful. Serve a 15-day statutory demand notice demanding full retention release with 18% commercial interest.",
  },
  {
    question: "Main contractor ya builder subcontractor ka RA bill aur retention paisa rok le toh legal notice kaise bheje?",
    answer:
      "Agar main contractor aapka kaam pura hone ke baad bhi 'client se payment nahi aaya' (back-to-back clause) bolkar RA bill ya retention money rok raha hai, toh aap Indian Contract Act ki Dhara 70 aur 73, tatha MSMED Act ki Dhara 15–18 ke tehat ek formal Advocate Legal Notice bhej sakte hain. LegalRecovery.in par verified commercial advocates 24 ghante mein main contractor ke Directors ko Speed Post aur email se 15-din ka demand notice jari karte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Subcontractor Left Unpaid: Recovering From the Main Contractor",
  description:
    "Main contractor withholding your bills? Back-to-back clauses, MSME claims, legal notice and arbitration options for subcontractors.",
  datePublished: "2026-11-04T11:20:00+05:30",
  dateModified: "2026-11-04T11:20:00+05:30",
  mainEntityOfPage: `${SITE_URL}/subcontractor-payment-recovery-india`,
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
  about: [
    {
      "@type": "Thing",
      name: "Subcontractor Payment Recovery in India",
    },
    {
      "@type": "Thing",
      name: "Pay When Paid Clause & Construction Arbitration India",
    },
  ],
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
      name: "B2B & Vendor Recovery",
      item: `${SITE_URL}/services/vendor-and-invoice-recoveries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MSME Delayed Payment Hub",
      item: `${SITE_URL}/msme-delayed-payment-recovery-samadhan-vs-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Subcontractor Payment Recovery",
      item: `${SITE_URL}/subcontractor-payment-recovery-india`,
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

export default function SubcontractorPaymentRecoveryPage() {
  const breadcrumbItems = [
    { label: "B2B & Vendor Recovery", href: "/services/vendor-and-invoice-recoveries" },
    { label: "MSME Delayed Payment Hub", href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice" },
    { label: "Subcontractor Payment Recovery", href: "/subcontractor-payment-recovery-india" },
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
        {/* Hero Section strictly matching /legal-notice-to/irctc theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Contract Act Sec 70 &amp; 73 • MSMED Act 2026</span>
              <span className="text-red-500">•</span>
              <span>Subcontractor &amp; EPC Dispute Guide</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Subcontractor Left Unpaid: Recovering From the Main Contractor
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Subcontractor Rights &amp; Back-to-Back Clause Law)
              </p>
              <p>
                When a main contractor withholds Running Account (RA) bills or retention money, primary liability rests on the main contractor under Sections 70 and 73 of the Indian Contract Act, 1872. Supreme Court precedent in <em>Ircon International (2015)</em> bars indefinite non-payment under &quot;back-to-back&quot; clauses. Unpaid subcontractors must serve a 15-day statutory demand notice before invoking MSME ODR (45-day cap, 3× RBI interest), arbitration, or civil recovery within the 3-year limitation period.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">45 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Max MSE Credit Cap (Sec 15 MSMED)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3× Bank Rate</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">~20.25% p.a. Monthly Compound</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 70 &amp; 73</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Contract Act &amp; Quantum Meruit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation (Extended by 194C TDS)</p>
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
            <SubcontractorTableOfContents />

            {/* Main Content Body */}
            <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Archetype G1 Centrepiece — Decision Tree (<figure> with SVG + nested <ul> fallback) */}
              <section id="heading-decision-tree" aria-labelledby="heading-decision-tree-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-decision-tree-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Subcontractor Recovery Decision Tree for RA Bills
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Choosing the right legal forum depends on three threshold facts: (1) whether you hold Udyam MSME registration for goods/services versus a composite civil works contract, (2) whether your Work Order contains an arbitration clause, and (3) the total principal amount defaulted by the main contractor. Use this statutory decision tree to pinpoint your fastest recovery route:
                </p>

                <figure className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm space-y-5 overflow-x-auto">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs text-slate-500">
                    <span className="font-bold text-slate-800 uppercase tracking-wider">
                      Archetype G1 Statutory Forum Decision Tree
                    </span>
                    <span className="md:hidden text-red-600 font-semibold animate-pulse">Swipe horizontally →</span>
                  </div>

                  {/* Hand-Authored SVG Decision Tree Flowchart */}
                  <svg
                    viewBox="0 0 880 340"
                    width="880"
                    height="340"
                    className="w-full h-auto text-xs font-sans min-w-[700px]"
                    role="img"
                    aria-label="Decision tree for subcontractor payment recovery routes in India"
                  >
                    <defs>
                      <linearGradient id="subDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="subRed" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="subGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Root Node: Mandatory Pre-Step */}
                    <rect x="240" y="12" width="400" height="58" rx="10" fill="url(#subRed)" />
                    <text x="440" y="34" fill="#FECACA" fontWeight="bold" fontSize="10" textAnchor="middle">
                      MANDATORY FIRST STEP FOR ALL SUBCONTRACTORS (DAY 1–15)
                    </text>
                    <text x="440" y="54" fill="#FFFFFF" fontWeight="bold" fontSize="12" textAnchor="middle">
                      Serve 15-Day Advocate Demand Notice + Sec 194C / 43B(h) Audit Put-On-Notice
                    </text>

                    {/* Branch Lines from Root */}
                    <path d="M 440 70 L 440 95" stroke="#475569" strokeWidth="2" />
                    <path d="M 115 95 L 765 95" stroke="#475569" strokeWidth="2" />
                    <path d="M 115 95 L 115 120" stroke="#475569" strokeWidth="2" />
                    <path d="M 330 95 L 330 120" stroke="#475569" strokeWidth="2" />
                    <path d="M 550 95 L 550 120" stroke="#475569" strokeWidth="2" />
                    <path d="M 765 95 L 765 120" stroke="#475569" strokeWidth="2" />

                    {/* Question Nodes (Row 2) */}
                    <rect x="20" y="120" width="190" height="68" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="115" y="142" fill="#92400E" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Q1: Udyam MSE (Supply /
                    </text>
                    <text x="115" y="158" fill="#92400E" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Service Invoice)?
                    </text>
                    <text x="115" y="175" fill="#78350F" fontSize="9.5" textAnchor="middle">
                      Separate HSN/SAC or PO
                    </text>

                    <rect x="235" y="120" width="190" height="68" rx="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
                    <text x="330" y="142" fill="#0F172A" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Q2: Work Order Has
                    </text>
                    <text x="330" y="158" fill="#0F172A" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Arbitration Clause?
                    </text>
                    <text x="330" y="175" fill="#475569" fontSize="9.5" textAnchor="middle">
                      Composite Civil / EPC WO
                    </text>

                    <rect x="455" y="120" width="190" height="68" rx="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
                    <text x="550" y="142" fill="#0F172A" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Q3: Written WO / JMR /
                    </text>
                    <text x="550" y="158" fill="#0F172A" fontWeight="bold" fontSize="11" textAnchor="middle">
                      194C TDS Admission?
                    </text>
                    <text x="550" y="175" fill="#475569" fontSize="9.5" textAnchor="middle">
                      No Arbitration Clause
                    </text>

                    <rect x="670" y="120" width="190" height="68" rx="8" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="765" y="142" fill="#991B1B" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Q4: Corporate Contractor
                    </text>
                    <text x="765" y="158" fill="#991B1B" fontWeight="bold" fontSize="11" textAnchor="middle">
                      &amp; Default ≥ ₹1 Crore?
                    </text>
                    <text x="765" y="175" fill="#7F1D1D" fontSize="9.5" textAnchor="middle">
                      Undisputed Operational Debt
                    </text>

                    {/* Arrows Down to Route Boxes */}
                    <path d="M 115 188 L 115 218" stroke="#047857" strokeWidth="2" />
                    <path d="M 330 188 L 330 218" stroke="#1E293B" strokeWidth="2" />
                    <path d="M 550 188 L 550 218" stroke="#1E293B" strokeWidth="2" />
                    <path d="M 765 188 L 765 218" stroke="#DC2626" strokeWidth="2" />

                    {/* Route Outcome Nodes (Row 3) */}
                    <rect x="20" y="218" width="190" height="105" rx="10" fill="url(#subGreen)" />
                    <text x="115" y="240" fill="#A7F3D0" fontWeight="bold" fontSize="10" textAnchor="middle">
                      ROUTE A (FASTEST STATUTORY)
                    </text>
                    <text x="115" y="258" fill="#FFFFFF" fontWeight="bold" fontSize="11.5" textAnchor="middle">
                      MSME ODR Portal + 43B(h)
                    </text>
                    <text x="115" y="276" fill="#D1FAE5" fontSize="9.5" textAnchor="middle">
                      • 3× RBI Interest (~20.25%)
                    </text>
                    <text x="115" y="292" fill="#D1FAE5" fontSize="9.5" textAnchor="middle">
                      • Buyer Loses Tax Deduction
                    </text>
                    <text x="115" y="308" fill="#A7F3D0" fontSize="9.5" textAnchor="middle">
                      • 75% Pre-Deposit on Appeal
                    </text>

                    <rect x="235" y="218" width="190" height="105" rx="10" fill="url(#subDark)" />
                    <text x="330" y="240" fill="#93C5FD" fontWeight="bold" fontSize="10" textAnchor="middle">
                      ROUTE B (EPC / WORKS)
                    </text>
                    <text x="330" y="258" fill="#FFFFFF" fontWeight="bold" fontSize="11.5" textAnchor="middle">
                      Sec 21 Notice + Sec 9 Court
                    </text>
                    <text x="330" y="276" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      • Attach Project Receivables
                    </text>
                    <text x="330" y="292" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      • Block Unilateral Arbitrator
                    </text>
                    <text x="330" y="308" fill="#CBD5E1" fontSize="9.5" textAnchor="middle">
                      • 12-Month Fast-Track Award
                    </text>

                    <rect x="455" y="218" width="190" height="105" rx="10" fill="url(#subDark)" />
                    <text x="550" y="240" fill="#FDE68A" fontWeight="bold" fontSize="10" textAnchor="middle">
                      ROUTE C (SUMMARY / CIVIL)
                    </text>
                    <text x="550" y="258" fill="#FFFFFF" fontWeight="bold" fontSize="11.5" textAnchor="middle">
                      Order 37 / Commercial Suit
                    </text>
                    <text x="550" y="276" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      • Sec 12A Mediation (≥ ₹3L)
                    </text>
                    <text x="550" y="292" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      • 10-Day Leave to Defend
                    </text>
                    <text x="550" y="308" fill="#CBD5E1" fontSize="9.5" textAnchor="middle">
                      • Sec 70 Quantum Meruit
                    </text>

                    <rect x="670" y="218" width="190" height="105" rx="10" fill="url(#subRed)" />
                    <text x="765" y="240" fill="#FECACA" fontWeight="bold" fontSize="10" textAnchor="middle">
                      ROUTE D (INSOLVENCY TRIGGER)
                    </text>
                    <text x="765" y="258" fill="#FFFFFF" fontWeight="bold" fontSize="11.5" textAnchor="middle">
                      IBC Sec 8 Notice → NCLT
                    </text>
                    <text x="765" y="276" fill="#FEE2E2" fontSize="9.5" textAnchor="middle">
                      • 10-Day Statutory Demand
                    </text>
                    <text x="765" y="292" fill="#FEE2E2" fontSize="9.5" textAnchor="middle">
                      • Threatens Board Suspension
                    </text>
                    <text x="765" y="308" fill="#FECACA" fontSize="9.5" textAnchor="middle">
                      • High Pre-Admission Settle
                    </text>
                  </svg>

                  {/* Nested <ul> Decision Tree Text Fallback (Required by Archetype G1 DOM Spec) */}
                  <figcaption className="pt-3 border-t border-slate-100">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-2">
                      Structured Decision Logic (Step-by-Step Text Tree):
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5">
                      <li>
                        <strong>Do you hold Udyam Registration (Micro/Small) with distinct Supply or Service invoices?</strong>
                        <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-600">
                          <li>
                            <strong>Yes:</strong> Serve a 15-day statutory demand notice invoking <strong>Section 16 MSMED Act</strong> (3× RBI Bank Rate monthly compound interest) and <strong>Section 43B(h) Income-tax Act</strong> (disallowing the main contractor&apos;s tax deduction), then file online on the <Link href="/msme-odr-portal-delayed-payment-guide" className="text-blue-700 underline font-semibold">MSME ODR Portal</Link>.
                          </li>
                          <li>
                            <strong>No (or Composite Civil Works Contract):</strong> Proceed to check your Work Order dispute clause below.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Does your Work Order or Letter of Intent (LOI) contain an Arbitration Clause?</strong>
                        <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-600">
                          <li>
                            <strong>Yes:</strong> Serve a <strong>Section 21 Notice Invoking Arbitration</strong> coupled with a <strong>Section 9 Petition</strong> in the Commercial Court to attach the main contractor&apos;s bank accounts or project receivables from the Principal Employer.
                          </li>
                          <li>
                            <strong>No:</strong> If your claim is ≥ ₹3,00,000, initiate <strong>Section 12A Pre-Institution Mediation</strong> or file an <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Order XXXVII CPC Summary Suit</Link> based on signed Joint Measurement Records (JMR) and Section 194C TDS admissions.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Is the Main Contractor a Company (Pvt. Ltd. / Ltd.) and is the undisputed default ≥ ₹1 Crore?</strong>
                        <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-600">
                          <li>
                            <strong>Yes:</strong> Serve a formal <strong>10-Day Demand Notice in Form 3 / Form 4 under Section 8 of the IBC, 2016</strong> as an Operational Creditor before approaching the NCLT under Section 9.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
              </section>

              {/* Section 2: Comparison Matrix of Subcontractor Recovery Routes */}
              <section id="heading-routes-comparison" aria-labelledby="heading-routes-comparison-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-routes-comparison-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Comparing Subcontractor Recovery Routes &amp; Forums
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before escalating a construction or engineering payment dispute, compare the statutory timelines, interest entitlements, and enforcement powers across all five Indian legal mechanisms available to unpaid subcontractors:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comparison of Legal Recovery Routes for Unpaid Subcontractors in India</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery Route / Forum</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Who Qualifies</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline / Trigger</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Interest &amp; Leverage</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Typical Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Advocate Statutory Demand Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">All Subcontractors (Civil, MEP, Labour, Supply)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15-Day Cure Window</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">18%–20.25% interest demand + Sec 43B(h) &amp; Employer copy</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-700">15–30 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          MSME ODR Portal / MSEFC (Sec 18)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Udyam Micro/Small Supply &amp; Service Subcontractors</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Day 46 After Acceptance</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">3× RBI compound interest (~20.25%) + 75% appeal deposit</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">90–120 Days (Statutory)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Arbitration (Sec 21 + Sec 9 Interim)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Composite Works Contracts with Arbitration Clause</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">30-Day Sec 21 Notice</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sec 9 attachment of Main Contractor&apos;s project receivables</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">6–12 Months</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Order 37 CPC / Commercial Court Suit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Written WO + Signed JMR / 194C TDS (No Arb Clause)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Within 3 Years of Default</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Defendant must seek court leave to defend within 10 days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">4–9 Months (Summary)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          IBC Section 8 / 9 Operational Creditor
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Undisputed Dues ≥ ₹1 Crore vs Pvt Ltd / Ltd Contractor</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">10-Day Form 3/4 Notice</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Threatens insolvency admission &amp; suspension of Board</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">30–90 Days (Pre-Admission)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Back-to-Back and Pay-When-Paid Clauses Explained */}
              <section id="heading-back-to-back-clauses" aria-labelledby="heading-back-to-back-clauses-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-back-to-back-clauses-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Are "Pay-When-Paid" Clauses Enforceable in India?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No—under Indian contract law, a general &quot;back-to-back&quot; or &quot;pay-when-paid&quot; clause cannot be used by a main contractor to indefinitely deny payment to a subcontractor who has completed the assigned work. In <em>Zonal General Manager, Ircon International Ltd. v. Vinay Heavy Equipments</em>, (2015) 13 SCC 680, the Supreme Court of India established that privity of contract exists strictly between the main contractor and the subcontractor, meaning the main contractor remains the primary debtor.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian High Courts and arbitral tribunals draw a sharp legal distinction between two types of contingent payment clauses in construction and infrastructure subcontracts:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      1. &quot;Pay-When-Paid&quot; (Timing Mechanism Only)
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-1">
                      Only Governs Cash-Flow Timing, Never Extinguishes Liability
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Clauses stating <em>&quot;Payment shall be released within 7 days of receipt of corresponding payment from the Principal Employer&quot;</em> are construed by Indian courts as fixing a reasonable administrative window for bill processing. If the Principal Employer delays payment due to disputes with the Main Contractor, or if the Main Contractor fails to pursue its own bills, the subcontractor is legally entitled to payment upon expiry of a reasonable period (or within 45 days if covered by Section 15 of the MSMED Act).
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                      2. &quot;Pay-If-Paid&quot; (Strict Condition Precedent)
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-1">
                      Fails Whenever Main Contractor Is at Fault or Deducts TDS
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Even where a heavy-handed EPC contract attempts to make the owner&apos;s payment a condition precedent, Indian courts refuse to enforce it if: (a) non-payment by the Principal Employer was caused by the Main Contractor&apos;s own delay, defective coordination, or liquidated damages on other packages; (b) the Main Contractor has already received mobilization/running advances; or (c) the Main Contractor deducted Section 194C TDS and claimed GST Input Tax Credit on the subcontractor&apos;s invoice.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Landmark Court Judgments (<article> cards matching irctc layout) */}
              <section id="heading-court-rulings" aria-labelledby="heading-court-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judgments on Subcontractor Dues &amp; Retention
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verified Supreme Court &amp; High Court Precedents
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
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
                              Judicial Relief / Principle Upheld
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Binding Authority
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All Indian Civil &amp; Arbitral Forums
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>How to use this in your legal notice:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 5: Route 1 — MSME ODR Portal & Section 43B(h) */}
              <section id="heading-route-msme-odr" aria-labelledby="heading-route-msme-odr-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-msme-odr-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 1: MSME ODR, Interest &amp; Tax Leverage
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If your business is registered under Udyam as a Micro or Small Enterprise (MSE), Chapter V of the MSMED Act, 2006 (as strengthened by the <Link href="/law/msmed-amendment-act-2026" className="text-blue-700 underline font-semibold">MSMED (Amendment) Act, 2026</Link>) gives you two extraordinary weapons that override contradictory clauses in a Main Contractor&apos;s Work Order:
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <strong className="text-slate-900 font-bold block mb-1">
                      1. Mandatory 45-Day Cap &amp; 3× RBI Bank Rate Compound Interest (Sections 15 &amp; 16):
                    </strong>
                    Under Section 15, a Main Contractor cannot stipulate a credit period exceeding 45 days from the day of acceptance (or deemed acceptance after 15 days without written objection). From Day 46, Section 16 mandates compound interest with monthly rests at 3× the RBI Bank Rate (currently 3 × 6.75% = <strong>20.25% p.a. compounded monthly</strong>). Read our full comparison of <Link href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice" className="text-blue-700 underline font-semibold">MSME Samadhaan / ODR vs Advocate Legal Notice</Link>.
                  </li>
                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <strong className="text-slate-900 font-bold block mb-1">
                      2. Section 43B(h) Income-Tax Disallowance Against the Main Contractor:
                    </strong>
                    Under <Link href="/law/section-43bh-msme-payment-rule" className="text-blue-700 underline font-semibold">Section 43B(h) of the Income-tax Act, 1961</Link>, if a Main Contractor fails to clear a Micro or Small subcontractor&apos;s supply or service invoice within the 15/45-day statutory limit and the bill remains unpaid across March 31, the entire invoice amount is disallowed as a business expense in that financial year—adding ~25.17% to 31.2% straight to the Main Contractor&apos;s taxable income in Form 3CD Clause 22.
                  </li>
                  <li className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-950">
                    <strong className="font-bold block mb-1">
                      Crucial Tactical Rule — Navigating the &quot;Pure Works Contract&quot; Objection:
                    </strong>
                    Main contractors frequently cite High Court rulings (such as <em>Shree Gee Enterprises</em> or <em>Sterling and Wilson</em>) to argue that indivisible civil &quot;works contracts&quot; are not covered by the MSEFC. To insulate your claim, always raise separate tax invoices with distinct HSN codes for equipment/material supply (electrical panels, chillers, structural steel, pipes, cables) and separate SAC invoices for testing, commissioning, or manpower services. Even where a contract is a composite works contract, a pre-litigation Advocate Notice citing Section 43B(h) tax audit reporting and Section 73 Contract Act settles a high percentage of claims without needing an MSEFC jurisdictional battle.
                  </li>
                </ul>
              </section>

              {/* Section 6: Route 2 — Pre-Arbitration Legal Notice, Section 9 Interim Attachment & IBC Section 9 */}
              <section id="heading-route-arbitration-civil" aria-labelledby="heading-route-arbitration-civil-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-arbitration-civil-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 2: Arbitration Notice &amp; Commercial Suits
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For large civil construction, infrastructure, highway, and MEP subcontracts governed by standard FIDIC or EPC Work Orders, your fastest leverage lies in combining a statutory demand notice with urgent interim relief:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 block">
                      Arbitration Act • Section 9
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Freeze Project Receivables Before Arbitral Tribunal Forms
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the Main Contractor is receiving milestone payouts from NHAI, Railways, CPWD, or a private developer while starving subcontractors, you can file a <strong>Section 9 petition</strong> before the Commercial Court seeking a direction that the Main Contractor furnish bank security or that project receivables be attached to the extent of your certified RA bills.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 block">
                      Arbitration Act • Section 12(5) &amp; 21
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Strike Down Unilateral MD-Appointed Arbitrators
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Many EPC Work Orders state that the Main Contractor&apos;s Managing Director or Project Head will appoint the sole arbitrator. Under Supreme Court law (<em>Perkins Eastman</em> and the 5-Judge Constitution Bench in <em>CORE, 2024</em>), unilateral appointment clauses are void under Section 12(5). Your <strong>Section 21 Notice</strong> demands an independent neutral arbitrator.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                      IBC 2016 • Section 8 &amp; 9
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      NCLT Insolvency Notice for Dues ≥ ₹1 Crore
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Where a corporate Main Contractor owes ₹1 Crore or more across undisputed RA bills (with signed JMRs or Section 194C TDS deductions and no pre-existing dispute), serving a <strong>Form 3 / Form 4 Demand Notice under Section 8 of the IBC</strong> gives the company 10 days to pay before facing Corporate Insolvency Resolution Process (CIRP) before the NCLT.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Route 3 — Retention Money, Uncertified RA Bills & Bank Guarantees */}
              <section id="heading-route-retention-ra-bills" aria-labelledby="heading-route-retention-ra-bills-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-retention-ra-bills-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 3: Recovering Retention Money &amp; RA Bills
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Even when running bills are partially cleared, main contractors routinely hold back 5% to 10% as Retention Money or threaten to encash Performance Bank Guarantees (PBGs) when a subcontractor demands final settlement. Here is how Indian law protects your final account:
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  First, once your scope is handed over—or the Principal Employer occupies and puts the building/plant to commercial use—the Defect Liability Period (DLP) clock starts running. A Main Contractor cannot artificially pause your DLP clock because another vendor&apos;s package is incomplete. Second, if the Main Contractor deducts 1% or 2% TDS under <strong>Section 194C of the Income-tax Act</strong> in your Form 26AS, they are legally estopped from claiming your RA bill was never received or certified. Third, if your claim involves a public-sector project where a government department is a party to a tripartite arrangement, check our guide on serving a <Link href="/law/section-80-cpc-notice-to-government" className="text-blue-700 underline font-semibold">mandatory Section 80 CPC notice to government authorities</Link>.
                </p>
              </section>

              {/* Section 8: Interactive Scenario Picker Tabs */}
              <section id="heading-scenario-picker" aria-labelledby="heading-scenario-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Subcontractor Dispute Scenarios &amp; Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Click Your Specific Construction or Subcontract Bottleneck Below to View the Statutory Rebuttal and Action Plan
                  </p>
                </div>

                <SubcontractorDecisionTabs />
              </section>

              {/* Section 9: The 5-Step Escalation Playbook */}
              <section id="heading-escalation-playbook" aria-labelledby="heading-escalation-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-escalation-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook Against Defaulting EPC Contractor
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow this structured 5-step pre-litigation and litigation sequence to lock in your site evidence, defeat fake snag defences, and compel payment from the main contractor:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve Certified RA Bills, Joint Measurement Sheets (JMR) &amp; Extra-Work Statement by RPAD + Email
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Never leave uncertified bills sitting on a site engineer&apos;s desk. Compile your Work Order, signed Joint Measurement Records (or unilateral measurements with geo-tagged site photos if the QS refused to attend joint measurement), gate entry challans, and Section 70 variation sheets, and send them via Registered Post (RPAD) and official email to the Main Contractor&apos;s Directors.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Extract Form 26AS (Section 194C TDS) &amp; GSTR-2B Input Tax Credit Admissions
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download your income-tax Form 26AS / AIS to check whether the Main Contractor deducted 1% or 2% TDS under Section 194C on your running bills, and verify if they utilized your GST invoice credit in GSTR-2B. Once a Main Contractor books your invoice for tax deduction or GST credit, any subsequent claim in court that &quot;work was defective or uncertified&quot; collapses as an afterthought.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch a Formal 15-Day Statutory Advocate Demand Notice (With Employer / Auditor Copy)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Have an advocate serve a formal statutory demand notice on the Main Contractor&apos;s Registered Office and Directors. The notice rebuts &quot;pay-when-paid&quot; excuses under <em>Ircon International (2015) 13 SCC 680</em>, quantifies Section 16 compound interest (or 18% commercial interest under Section 73 Contract Act), warns of Section 43B(h) tax disallowance, and—where strategically appropriate—marks a copy to the Principal Employer&apos;s Project Director.Explore our dedicated <Link href="/recovery/contractor-payment" className="text-blue-700 underline font-semibold">contractor payment recovery service</Link> for rapid dispatch.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File on the MSME ODR Portal or Serve a Section 21 Arbitration + Section 9 Attachment Petition
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 15-day notice expires without settlement, file an online reference on the MSME ODR Portal (for Udyam MSE supply/service bills) or issue a Section 21 Notice Invoking Arbitration alongside a Section 9 Commercial Court petition to attach the Main Contractor&apos;s bank accounts or incoming project receivables.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Enforce the Award or Decree (Mandatory 75% Pre-Deposit Under Section 19 MSMED)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Once an MSEFC / ODR arbitral award or Commercial Court decree is passed, execute it under Order XXI CPC by attaching the Main Contractor&apos;s bank accounts. If the Main Contractor attempts to appeal an MSME award under Section 34 of the Arbitration Act, Section 19 forces them to first deposit 75% of the total principal plus accrued compound interest in court.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 10: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Subcontractor Recovers ₹28.5L RA Bills
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Subcontract Recovery Scenario
                    </span>
                    <span className="text-xs text-slate-400">Noida Commercial IT Park Project (HVAC &amp; Firefighting Package)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Subcontract &amp; Default:</strong> M/s Apex Thermal Engineers (a Udyam-registered Small Enterprise in Ghaziabad) executed supply, erection, testing, and commissioning of HVAC ducting and firefighting pumps under two separate Purchase/Work Orders worth ₹1.40 Crore issued by a Gurugram-based Tier-1 Main EPC Contractor. Apex completed 100% of the work by 10 May 2026, handed over commissioning certificates, and raised RA Bill No. 7 (₹18,20,000), Final Bill No. 8 (₹4,80,000), and Retention Release Claim (₹5,50,000) totalling <strong>₹28,50,000</strong>.
                    </p>
                    <p>
                      <strong>The &quot;Back-to-Back&quot; Excuse:</strong> For 5 months, the Main Contractor&apos;s billing team refused to release the ₹28,50,000, pointing to Clause 14 of the Work Order (<em>&quot;Subcontractor bills shall be released on a back-to-back basis after final reconciliation with the Developer&quot;</em>). However, Apex&apos;s CA verified from Form 26AS that the Main Contractor had already deducted 2% TDS under Section 194C on RA Bill No. 7 and claimed ₹3,27,600 in GST Input Tax Credit, and the Developer had already inaugurated the IT park.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Apex engaged LegalRecovery.in. An advocate drafted and dispatched a consolidated statutory legal demand notice to the Main Contractor&apos;s Managing Director and CFO, with a formal information copy to the Developer&apos;s VP-Projects. The notice cited: (1) <em>Ircon International v. Vinay Heavy Equipments, (2015) 13 SCC 680</em> invalidating indefinite back-to-back withholding; (2) Section 194C TDS and GSTR-2B estoppel; (3) accrued Section 16 MSMED compound interest of <strong>₹2,18,400</strong> at 20.25% p.a.; and (4) imminent filing of a Section 9 Arbitration petition to attach the Main Contractor&apos;s final milestone payout from the Developer alongside Section 43B(h) tax audit reporting.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution (Day 14):</strong>
                      Facing immediate friction with the Developer and a ₹28.50 Lakh tax disallowance risk under Section 43B(h), the Main Contractor&apos;s legal cell called for a reconciliation meeting on Day 9. On Day 14, the Main Contractor remitted <strong>₹28,50,000</strong> (100% principal + retention release) plus <strong>₹1,25,000</strong> towards interest via RTGS in exchange for a full-and-final no-dues certificate.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Subcontractor Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Records for Legal Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  In construction and B2B subcontract disputes, the party with contemporaneous site documentation wins. Assemble these 6 records (admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023) before we draft your notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Work Order / LOI &amp; BOQ Schedule:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed Work Order, Purchase Order, or Letter of Intent showing unit rates, retention percentage, and payment terms.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Joint Measurement Sheets (JMR) / MB Extracts:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Measurement sheets signed by the Site Engineer/QS, or emailed measurement sheets with timestamped site completion photos.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">RA Bills, GST Tax Invoices &amp; E-Way Bills:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">All unpaid Running Account (RA) and Final Bills, along with security gate entry stamps, delivery challans, and E-Way bills.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Form 26AS / AIS (Sec 194C TDS) &amp; Ledger:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proof of 1% or 2% TDS deducted by the main contractor on your bills, plus any signed balance confirmation or ledger account.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Site Emails &amp; WhatsApp Variation Instructions:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">WhatsApp chats and emails from the Project Manager instructing extra items, design changes, or acknowledging payment delays.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Completion / Handover / DLP Expiry Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Virtual Completion Certificate, Testing &amp; Commissioning (T&amp;C) sign-off, or proof that the project facility is operational.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: Honest Scope */}
              <section id="heading-honest-scope" aria-labelledby="heading-honest-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Scope &amp; Boundaries: What LegalRecovery Can and Cannot Do
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-emerald-950 flex items-center gap-2">
                      <span>✓</span> What LegalRecovery Delivers
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-900 list-disc pl-4 leading-relaxed">
                      <li>Drafting and serving an advocate-verified statutory demand notice (Section 70/73 Contract Act, Section 16/18 MSMED Act, Section 43B(h) tax leverage, or Section 21 Arbitration trigger).</li>
                      <li>Multi-channel legal service via Registered Speed Post (RPAD), official email, and WhatsApp to the Main Contractor&apos;s Directors and CFO.</li>
                      <li>Strategic information copy to the Principal Employer / Developer where contractually permissible to prevent diversion of milestone funds.</li>
                      <li>Structured documentation preparation for MSME ODR Portal references, Section 12A pre-institution mediation, or Order 37 summary suits.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-rose-50/70 border border-rose-200 rounded-2xl space-y-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-rose-950 flex items-center gap-2">
                      <span>✕</span> What LegalRecovery Cannot Do
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-rose-900 list-disc pl-4 leading-relaxed">
                      <li>We cannot conduct physical on-site quantity surveying, structural testing, or third-party engineering inspections at the project site.</li>
                      <li>We cannot guarantee recovery if the Main Contractor is already under an active NCLT Section 14 Moratorium (in which case you must file a Form B Operational Creditor claim before the Resolution Professional).</li>
                      <li>We cannot bypass mandatory technical arbitration or court hearings if the Main Contractor raises a substantiated, contemporaneous counter-claim for defective structural work.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 13: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Subcontractor Payment Disputes &amp; Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Statutory Answers Grounded in the Indian Contract Act, MSMED Act 2026 &amp; Supreme Court Construction Law
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

              {/* Section 14: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Construction Statutes &amp; Legal References
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
                  Statutory verification status: All statutory sections, RBI Bank Rate multipliers, and judicial precedents verified against India Code, Supreme Court of India e-SCR, and Ministry of MSME notifications as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Demand Notice to the Main Contractor
                </h2>
                <SubcontractorNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related B2B, Construction &amp; MSME Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME Samadhaan / ODR vs Legal Notice →
                  </Link>
                  <Link
                    href="/law/msmed-amendment-act-2026"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSMED Amendment Act 2026 Explained →
                  </Link>
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 43B(h) 45-Day Tax Rule →
                  </Link>
                  <Link
                    href="/msme-odr-portal-delayed-payment-guide"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME ODR Portal Filing Guide →
                  </Link>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    3× RBI Compound Interest Calculator →
                  </Link>
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 80 CPC Notice to Govt / PSUs →
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
