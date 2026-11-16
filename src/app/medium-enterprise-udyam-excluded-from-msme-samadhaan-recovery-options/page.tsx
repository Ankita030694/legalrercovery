import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MediumEnterpriseTableOfContents from "./MediumEnterpriseTableOfContents";
import MediumEnterpriseScenarioTabs from "./MediumEnterpriseScenarioTabs";
import MediumEnterpriseCTA from "./MediumEnterpriseCTA";

export const revalidate = 86400;

const PAGE_URL = "/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options";
const EXACT_H1 =
  "The Medium-Enterprise Udyam Trap: Why MSMED Section 18 & Section 43B(h) Exclude Medium Units—and the 4 Fastest Recovery Alternatives";
const META_TITLE = "Medium Enterprises Excluded from MSME Samadhaan: 4 Routes";
const META_DESCRIPTION =
  "MSEFC rejects Medium Enterprise claims under MSMED Act s.2(n) & 18. Recover ₹50–250 Cr dues via Order 37 CPC, Commercial Courts s.12A, TReDS & IBC s.8.";

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
        alt: formatAltText("Medium Enterprise Udyam Excluded From MSME Samadhaan Recovery Options"),
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

const STATUTORY_TIMELINE_STOPS = [
  {
    phase: "Day 1 – 10: Default Discovery & Classification Audit",
    statute: "MSMED Act, 2006 (s. 2(n)) & Udyam Classification Audit",
    trigger: "Commercial invoice crosses credit period without receipt of funds from corporate debtor",
    action:
      "Perform immediate Udyam certificate audit. Confirm whether the enterprise was classified as Micro, Small, or Medium on the exact date of PO issuance. Verify whether debt exceeds the ₹1 Crore threshold under IBC.",
    risk: "Blindly filing before the State MSEFC with an Udyam Certificate showing 'Medium' results in immediate rejection under Section 2(n) and wasted statutory limitation time.",
    tone: "slate",
  },
  {
    phase: "Day 11 – 25: 15-Day Advocate Commercial Demand Notice",
    statute: "Sale of Goods Act, 1930 (s. 55) & Interest Act, 1978 (s. 3)",
    trigger: "Commercial buyer ignores formal accounts payable reminders and vendor reconciliation statements",
    action:
      "Serve a formal 15-Day Advocate Demand Notice via Speed Post RPAD and registered corporate email. Establish undisputed liquidated debt, quantify 18% p.a. commercial interest, and assert deemed acceptance under Sale of Goods Act Section 42.",
    risk: "Relying on informal email reminders forfeits the evidentiary basis required to prove clean demand under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA).",
    tone: "emerald",
  },
  {
    phase: "Day 26 – 40: IBC Section 8 Demand Notice (For Debts ≥ ₹1 Cr)",
    statute: "Insolvency and Bankruptcy Code, 2016 (Section 8, Form 3 / Form 4)",
    trigger: "Defaulting corporate debtor owes ₹1 Crore or more of undisputed operational dues",
    action:
      "Serve a 10-day Statutory Demand Notice in statutory Form 3 / Form 4 under Section 8 of the IBC. Demand full payment or documented proof of a genuine pre-existing dispute raised prior to notice delivery.",
    risk: "If the corporate debtor can point to a genuine, written dispute on quality or delivery lodged before the notice date, an IBC Section 9 petition will be dismissed under the Mobilox Innovations rule.",
    tone: "amber",
  },
  {
    phase: "Day 41 – 90: Commercial Court Order XXXVII Summary Suit / PIMS",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII) & Commercial Courts Act, 2015 (s. 12A)",
    trigger: "Corporate debtor fails to clear debt following expiry of statutory notice windows",
    action:
      "Initiate Pre-Institution Mediation and Settlement (PIMS) under Section 12A of the Commercial Courts Act, 2015, or directly file an Order XXXVII Summary Suit with an urgent interim attachment application under Order XXXVIII Rule 5 CPC to freeze debtor assets.",
    risk: "Failing to institute proceedings within the strict 3-year limitation window under Article 14/55 of the Limitation Act, 1963 extinguishes judicial recovery rights.",
    tone: "red",
  },
];

const DEBTOR_DEFENSE_MATRIX = [
  {
    defense: "\"You filed under MSMED Act Section 18, but you are a Medium Enterprise, so MSEFC has zero jurisdiction to hear your claim.\"",
    reality:
      "The debtor's jurisdictional objection is legally sound if the contract was entered after the enterprise graduated to Medium status. Under Section 2(n) of the MSMED Act, 2006, 'supplier' is restricted to Micro and Small enterprises. However, under the Supreme Court's ruling in Silpi Industries (2021), if the unit was registered as Small on the date the contract or PO was signed, subsequent graduation does not strip MSEFC of jurisdiction for that contract. If the contract post-dates graduation, the creditor pivots immediately to an Order XXXVII summary suit or Commercial Court action.",
    preemption:
      "Verify Udyam historical filings before issuing notice. If the contract date preceded graduation, place the historical Small registration on record. If post-graduation, bypass MSEFC completely and file under Order XXXVII CPC or IBC Section 8.",
  },
  {
    defense: "\"Section 43B(h) of the Income Tax Act does not apply to Medium units, so we will delay your payment until cash flow improves.\"",
    reality:
      "While Section 43B(h) is technically restricted to Micro and Small enterprises, the buyer's lack of tax disallowance does not grant commercial immunity. Unpaid operational debt matures interest under the Interest Act, 1978 and exposes the corporate debtor to summary judgment without trial under Order XXXVII CPC, corporate insolvency under IBC Section 9 (for claims ≥ ₹1 Cr), and director liability for dishonored cheques under Section 138 of the Negotiable Instruments Act.",
    preemption:
      "Preemptively structure the legal demand notice around contractual liquidated liability, Sale of Goods Act Section 42 deemed acceptance, and Commercial Court summary execution, disabusing the debtor of any perceived tax-exemption immunity.",
  },
  {
    defense: "\"The goods delivered had dimensional defects and assembly line rejects, creating a pre-existing dispute that bars IBC and summary suits.\"",
    reality:
      "Under the Supreme Court doctrine in Mobilox Innovations (2018), a pre-existing dispute under the IBC must be real, documented, and raised before the issuance of the Section 8 statutory demand notice. Post-facto defect claims cooked up after receiving a legal notice are treated as spurious defenses. In an Order XXXVII suit, a defendant raising vague defect claims without contemporaneous rejection memos will be denied leave to defend or ordered to deposit 100% of the claim value in court.",
    preemption:
      "Collate signed delivery challans, inspection sign-offs, e-Way bills, and GSTR-2B input tax credit availment records showing the buyer used the goods without issuing a timely rejection notice under Section 42 of the Sale of Goods Act, 1930.",
  },
  {
    defense: "\"The contract contains an arbitration clause, barring the Medium Enterprise from filing a summary suit in the Commercial Court.\"",
    reality:
      "While an arbitration clause allows a debtor to file an application under Section 8 of the Arbitration and Conciliation Act, 1996, the creditor can immediately seek emergency interim protection under Section 9 of the Arbitration Act to attach the debtor's bank accounts, receivables, or factory assets before the arbitral tribunal is even constituted. Furthermore, an arbitration clause does not bar an operational creditor from issuing an IBC Section 8 demand notice if the debt is undisputed.",
    preemption:
      "Pair the Commercial Court filing or arbitration invocation with an aggressive Section 9 interim attachment petition under the Arbitration Act, compelling debtor settlement to prevent asset freezing.",
  },
  {
    defense: "\"Our company is undergoing financial stress, and you must participate in our informal restructuring scheme.\"",
    reality:
      "An informal corporate restructuring offers zero statutory protection to a defaulting buyer. Unsecured creditors who delay legal recovery risk getting wiped out if another institutional creditor triggers the Corporate Insolvency Resolution Process (CIRP) before them. First-filing operational creditors who secure pre-trial bank attachment or decree obtain decisive leverage.",
    preemption:
      "Reject informal standstill arrangements without registered bank guarantees, post-dated cheques backed by personal promoter guarantees, or escrow holdbacks.",
  },
];

const FORUM_COMPARISON_MATRIX = [
  {
    criterion: "Statutory Forum",
    msefc: "MSEFC (MSME Samadhaan)",
    order37: "Commercial Summary Suit (Order 37 CPC)",
    s12a: "Commercial Court (s. 12A CCA)",
    treds: "TReDS Institutional Factoring",
    ibc: "NCLT (IBC Section 8 & 9)",
  },
  {
    criterion: "Eligibility for Medium Units",
    msefc: "BARRED (unless Small on contract date)",
    order37: "100% ELIGIBLE (Liquidated claims)",
    s12a: "100% ELIGIBLE (All commercial debts)",
    treds: "100% ELIGIBLE (Direct factoring)",
    ibc: "100% ELIGIBLE (Debts ≥ ₹1 Crore)",
  },
  {
    criterion: "Pecuniary Jurisdiction",
    msefc: "No pecuniary limit (Micro/Small only)",
    order37: "Based on state commercial court slabs",
    s12a: "Commercial disputes ≥ ₹3 Lakhs",
    treds: "Accepted invoice value",
    ibc: "Strict minimum default of ₹1 Crore",
  },
  {
    criterion: "Statutory Timeline",
    msefc: "90 days statutory (actual 12–24 mos)",
    order37: "6–12 months for summary decree",
    s12a: "3 mos mediation + fast-track trial",
    treds: "T+2 to T+3 days post-acceptance",
    ibc: "10 days notice + NCLT CIRP admission",
  },
  {
    criterion: "Debtor Right to Defend",
    msefc: "Full representation allowed",
    order37: "NO automatic right (must seek leave)",
    s12a: "Standard written statement (120 days)",
    treds: "No defense post-invoice approval",
    ibc: "Limited to pre-existing dispute proof",
  },
  {
    criterion: "Pre-Deposit Requirement",
    msefc: "75% to challenge award (s. 19)",
    order37: "Discretionary up to 100% for leave",
    s12a: "None required for filing defense",
    treds: "Immediate debit to buyer line",
    ibc: "No pre-deposit; risk of total liquidation",
  },
  {
    criterion: "Interim Asset Freeze",
    msefc: "No powers to attach debtor assets",
    order37: "Order 38 Rule 5 attachment available",
    s12a: "Urgent interim relief under CPC / s.12A",
    treds: "Banking recourse mechanisms",
    ibc: "Moratorium applies post-admission",
  },
];

const PRECEDENTS = [
  {
    citation: "Silpi Industries v. Kerala State Road Transport Corporation (2021) SCC Online SC 439",
    court: "Supreme Court of India",
    statute: "MSMED Act 2006, Section 2(n), Section 8 & Section 18",
    holding:
      "The Supreme Court held that to invoke the jurisdiction of the MSEFC under Section 18 of the MSMED Act, the supplier must be registered under the Act as a micro or small enterprise on the date of entering into the contract. Subsequent registration or subsequent graduation does not retrospectively create or destroy statutory rights for contracts entered prior to the change of status.",
    impact:
      "Crucial precedent for Medium Enterprises that graduated upward during contract fulfillment: if your purchase order was executed while you were registered as a Small unit, MSEFC retains jurisdiction despite your current Medium Udyam certificate.",
  },
  {
    citation: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2018) 1 SCC 353",
    court: "Supreme Court of India",
    statute: "Insolvency and Bankruptcy Code, 2016, Section 8 & Section 9",
    holding:
      "The Supreme Court established the definitive test for a 'pre-existing dispute' under the IBC. An operational creditor's Section 9 petition can only be rejected if the corporate debtor demonstrates a plausible, bona fide dispute that was recorded in writing prior to receipt of the Section 8 statutory demand notice. Post-demand disputes invented as an afterthought must be disregarded by the Adjudicating Authority.",
    impact:
      "Provides Medium manufacturing enterprises with decisive leverage when issuing a 10-day Section 8 demand notice for defaults exceeding ₹1 Crore against solvent corporate buyers.",
  },
  {
    citation: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. (2022) 10 SCC 1",
    court: "Supreme Court of India",
    statute: "Commercial Courts Act, 2015, Section 12A",
    holding:
      "The Supreme Court declared that Pre-Institution Mediation and Settlement (PIMS) under Section 12A of the Commercial Courts Act, 2015 is mandatory for any commercial suit that does not contemplate urgent interim relief. Any commercial suit filed without complying with Section 12A or without a well-grounded application for urgent interim relief is liable to be rejected under Order VII Rule 11 CPC.",
    impact:
      "Medium enterprises initiating Commercial Court suits must either complete the 3-month DLSA mediation window or explicitly plead urgent interim relief (such as bank account attachment under Order XXXVIII Rule 5 CPC) to bypass Section 12A lawfully.",
  },
  {
    citation: "Gujarat State Civil Supplies Corporation Ltd. v. Mahakali Foods Pvt. Ltd. (2023) 6 SCC 401",
    court: "Supreme Court of India",
    statute: "MSMED Act 2006 Section 18 & Arbitration and Conciliation Act 1996",
    holding:
      "The Supreme Court held that Chapter V of the MSMED Act has overriding effect over general arbitration agreements. However, this statutory override applies strictly and exclusively to 'suppliers' as defined under Section 2(n). Where the entity does not qualify as a supplier under Section 2(n) (such as a Medium unit for post-graduation contracts), the statutory reference under Section 18 cannot override the contractual arbitration clause.",
    impact:
      "Confirms that Medium manufacturing entities cannot rely on MSMED Act Section 18 to override contractual dispute resolution clauses, underscoring the necessity of drafting rigorous commercial contracts and utilizing Order XXXVII CPC or Section 9 Arbitration Act interim measures.",
  },
];

const FAQS = [
  {
    q: "Can a Medium Enterprise file a delayed payment case in MSME Samadhaan (MSEFC)?",
    a: "No, as a general rule, Medium Enterprises cannot file cases before the Micro and Small Enterprises Facilitation Council (MSEFC) under Section 18 of the MSMED Act, 2006. Section 2(n) of the Act strictly defines a 'supplier' as a micro or small enterprise. Because Chapter V (delayed payments) exclusively protects 'suppliers', Medium Enterprises are statutory outsiders to MSEFC adjudication. The only exception is under the Supreme Court's Silpi Industries test: if the enterprise was registered as a 'Small Enterprise' on the exact date the purchase order or contract was executed, subsequent graduation to Medium status does not bar the claim for that specific contract.",
  },
  {
    q: "Does Section 43B(h) of the Income Tax Act apply to Medium Enterprises?",
    a: "No. Section 43B(h) was introduced by the Finance Act, 2023 to disallow deductions to buyers for sums payable to micro and small enterprises beyond the 15-day or 45-day deadline under Section 15 of the MSMED Act. The statutory wording of Section 43B(h) explicitly references 'micro or small enterprise' and excludes Medium Enterprises. Consequently, corporate buyers do not face income tax disallowance under Section 43B(h) for delaying payments to Medium Enterprise vendors.",
  },
  {
    q: "What happens if our company graduated from Small to Medium while the buyer was delaying payment?",
    a: "Under the Supreme Court ruling in Silpi Industries v. KSRTC (2021), statutory eligibility under the MSMED Act is determined as on the date of contract execution. If your company was registered as a Small Enterprise on the date the purchase order was issued or contract signed, you retain the legal right to file before the MSEFC for unpaid dues under that contract, even if your annual turnover subsequently exceeded ₹50 Crore and your Udyam Certificate was updated to 'Medium'. You must place your historical Udyam status on record to defeat the buyer's jurisdictional objections.",
  },
  {
    q: "What is the fastest legal recovery alternative for a Medium Enterprise with unpaid invoices?",
    a: "The fastest court-based remedy for liquidated invoice dues is a Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (CPC). Unlike regular civil suits that take years, Order XXXVII gives the debtor no automatic right to defend. The debtor must apply for leave to defend within 10 days of summons, and unless they demonstrate a substantial, genuine defense, the Commercial Court will grant an immediate decree or order the debtor to deposit up to 100% of the claim amount in court.",
  },
  {
    q: "When can a Medium Enterprise issue an IBC Section 8 Demand Notice against a corporate buyer?",
    a: "A Medium Enterprise can issue an Insolvency and Bankruptcy Code (IBC) Section 8 Demand Notice (in Form 3 or Form 4) if the defaulting buyer is a registered corporate debtor (Private Limited or Public Limited company) and the undisputed operational debt equals or exceeds ₹1 Crore (the statutory threshold under Section 4 of the IBC). The debtor has 10 days to pay or prove a pre-existing dispute. If they fail, the creditor can file for Corporate Insolvency Resolution Process (CIRP) under Section 9 before the NCLT.",
  },
  {
    q: "How does TReDS help Medium Enterprises manage delayed payments?",
    a: "Under RBI guidelines, Medium manufacturing enterprises can register as sellers on RBI-approved Trade Receivables Discounting System (TReDS) platforms like RXIL, Invoicemart, and M1xchange. Once the corporate buyer approves the uploaded invoice and delivery challan, institutional financiers bid to discount the invoice, paying the Medium Enterprise within 48 to 72 hours. On the due date, the financier recovers the amount directly from the buyer, insulating the supplier from operational delay.",
  },
  {
    q: "What is the statutory limitation period for a Medium Enterprise to file a debt recovery suit?",
    a: "Under the Limitation Act, 1963, the limitation period for recovering the price of goods sold and delivered is strictly 3 years (Articles 14 and 15) from the date of invoice maturity or delivery. For suits on mutual, open, and current accounts, Article 1 applies from the close of the financial year in which the last admitted item was entered. Serving a legal demand notice does not pause or extend the 3-year clock unless the debtor provides a written acknowledgment of debt signed within the limitation period under Section 18 of the Limitation Act.",
  },
  {
    q: "Can a Medium Enterprise claim 18% or compound interest on overdue commercial bills?",
    a: "While Medium Enterprises cannot claim the mandatory 3x RBI bank rate compound interest under Section 16 of the MSMED Act for post-graduation contracts, they can claim interest under the terms of their commercial contract, under the Interest Act, 1978 (Section 3), or under Section 61(2) of the Sale of Goods Act, 1930. Indian Commercial Courts routinely award commercial interest ranging between 12% and 18% per annum on commercial transactions from the date of default until final realization.",
  },
];

export default function MediumEnterpriseRecoveryPage() {
  const breadcrumbs = [
    { label: "Manufacturing & OEM Recovery", href: "/industries/manufacturing-machinery-oem-recovery" },
    { label: "Medium Enterprise Recovery Options", href: PAGE_URL },
  ];

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    inLanguage: "en-IN",
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: "2026-11-16T09:00:00+05:30",
    dateModified: "2026-11-16T09:00:00+05:30",
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
      url: `${SITE_URL}/about`,
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const jsonLdBreadcrumbs = {
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
        name: "Manufacturing & OEM Recovery",
        item: `${SITE_URL}/industries/manufacturing-machinery-oem-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Medium Enterprise Recovery Options",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>MSMED Act s.2(n) Analysis</span>
            <span>&bull;</span>
            <span>Section 43B(h) Gap</span>
            <span>&bull;</span>
            <span>Corporate Debt Recovery</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &middot; Executive Creditor Commentary
            </span>
            Thousands of growing Indian manufacturing companies holding an &lsquo;Udyam Registration Certificate (Medium)&rsquo; with turnovers of &rupee;50 Cr to &rupee;250 Cr+ assume they are protected by MSME Samadhaan and Income Tax Section 43B(h). In reality, Section 2(n) of the MSMED Act, 2006 strictly defines a &lsquo;supplier&rsquo; as a Micro or Small enterprise, barring Medium units from MSEFC conciliation. For industrial suppliers operating across our{" "}
            <Link
              href="/industries/manufacturing-machinery-oem-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Manufacturing, Machinery &amp; OEM Supplier Hub
            </Link>
            , relying on MSEFC or Section 43B(h) threats produces immediate procedural dismissals. Instead, corporate creditors must deploy 4 faster legal alternatives: Order XXXVII CPC summary suits, Commercial Courts Section 12A mediation, institutional TReDS discounting, and IBC Section 8 statutory demand notices.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-r border-white/10 pr-2">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                0%
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                MSEFC Jurisdiction for Medium Units
              </span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                &sect;43B(h)
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Excludes Medium Enterprise Dues
              </span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                10 Days
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Order 37 / IBC s.8 Debtor Cure Window
              </span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                &ge; &rupee;1 Cr
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                IBC Statutory NCLT Filing Floor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4 sm:mt-6">
          {/* Left Sticky Sidebar TOC */}
          <MediumEnterpriseTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Statutory Trap */}
            <section
              id="heading-statutory-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Exclusion Analysis
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The Section 2(n) Statutory Trap: Why Medium Units Cannot File in MSEFC
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                In India&rsquo;s manufacturing landscape, CFOs and promoters of growing mid-market enterprises frequently make an expensive procedural blunder: assuming that because they hold an official <strong>Udyam Registration Certificate</strong>, they can file delayed payment references before the Micro and Small Enterprises Facilitation Council (MSEFC) via the MSME Samadhaan portal. This assumption routinely causes high-value commercial claims (&rupee;50 Lakh to &rupee;10+ Crore) to be dismissed at the threshold after months of procedural inaction.
              </p>

              <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl mb-6">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-900 mb-1">
                  The Plain Text of Section 2(n) of the MSMED Act, 2006
                </h3>
                <p className="text-xs sm:text-sm text-red-950 font-mono leading-relaxed bg-white/70 p-3 rounded-lg border border-red-200 mb-2">
                  &ldquo;Section 2(n): &lsquo;supplier&rsquo; means a micro or small enterprise, which has filed a memorandum with the authority referred to in sub-section (1) of section 8...&rdquo;
                </p>
                <p className="text-xs text-red-900 leading-relaxed">
                  <strong>Notice the fatal legislative omission:</strong> The statutory definition of &lsquo;supplier&rsquo; intentionally omits <em>Medium Enterprises</em>. While Section 2(e) defines &lsquo;enterprise&rsquo; to include Micro, Small, and Medium units, <strong>Chapter V of the Act (Sections 15 to 25)</strong>, which governs delayed payments, compound interest at 3x RBI bank rate, and MSEFC dispute resolution, confers rights strictly and exclusively upon a &lsquo;supplier&rsquo;.
                </p>
              </div>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed mb-6">
                <p>
                  Because a Medium Enterprise is not a &lsquo;supplier&rsquo; under Section 2(n), it cannot invoke:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                  <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[#DC2626] font-bold text-base">&times;</span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm block">Section 15 Mandatory 45-Day Payment Rule</strong>
                      <span className="text-xs text-slate-600">Statutory 45-day statutory cap on credit terms does not bind buyers dealing with medium units.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[#DC2626] font-bold text-base">&times;</span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm block">Section 16 3x RBI Compound Interest</strong>
                      <span className="text-xs text-slate-600">The statutory penal interest calculated via our <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-[#DC2626] underline font-semibold">MSME Interest Calculator</Link> is unavailable.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[#DC2626] font-bold text-base">&times;</span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm block">Section 18 MSEFC Reference Jurisdiction</strong>
                      <span className="text-xs text-slate-600">MSEFC facilitators and arbitral panels will dismiss Medium claims for absolute lack of subject-matter jurisdiction.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[#DC2626] font-bold text-base">&times;</span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm block">Section 19 Mandatory 75% Pre-Deposit</strong>
                      <span className="text-xs text-slate-600">Defaulting buyers are not required to deposit 75% of the claimed amount when challenging commercial decrees.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl border border-slate-800">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                  CFO Takeaway &middot; The Portal Acceptance Mirage
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  While the online MSME Samadhaan portal interface may allow a Medium Udyam certificate holder to submit a digital form, this is a clerical input feature, not a jurisdictional validation. When the reference reaches the Council members or conciliation officers, the debtor&rsquo;s counsel files a preliminary rejection petition citing Section 2(n), and the case is summarily dismissed, having cost the creditor 6 to 18 months of wasted limitation time.
                </p>
              </div>
            </section>

            {/* Section 2: Section 43B(h) Reality */}
            <section
              id="heading-section-43bh"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tax Law Analysis
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Income Tax Section 43B(h) Reality: Why Medium Units Get Zero Leverage
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The introduction of Section 43B(h) under the Income Tax Act, 1961 (via Finance Act 2023, effective 1 April 2024) caused a national transformation in payment collection for Micro and Small enterprises. Under Section 43B(h), any sum payable by an assessee to a registered micro or small enterprise beyond the time limit specified in Section 15 of the MSMED Act is disallowed as an expenditure in that financial year, forcing the corporate buyer to pay 25%–35% tax on that unverified deduction.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-xl mb-6">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 mb-1">
                  Why Corporate Buyers Freely Ignore Section 43B(h) Threats from Medium Vendors
                </h3>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed mb-3">
                  Corporate procurement heads and finance directors know the tax code inside out. Section 43B(h) explicitly stipulates that disallowance applies only to amounts due to a <strong>&ldquo;micro or small enterprise&rdquo;</strong>. Medium enterprises are completely excluded from the operative text of Section 43B(h).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-amber-200">
                    <strong className="block text-slate-900 font-bold mb-1">Micro Enterprise</strong>
                    <span className="text-slate-600 block">Investment &le; &rupee;1 Cr &amp; Turnover &le; &rupee;5 Cr</span>
                    <span className="text-emerald-700 font-bold mt-1 inline-block">&check; Covered by s.43B(h)</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-amber-200">
                    <strong className="block text-slate-900 font-bold mb-1">Small Enterprise</strong>
                    <span className="text-slate-600 block">Investment &le; &rupee;10 Cr &amp; Turnover &le; &rupee;50 Cr</span>
                    <span className="text-emerald-700 font-bold mt-1 inline-block">&check; Covered by s.43B(h)</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-red-300 bg-red-50/50">
                    <strong className="block text-slate-900 font-bold mb-1">Medium Enterprise</strong>
                    <span className="text-slate-600 block">Investment &le; &rupee;50 Cr &amp; Turnover &le; &rupee;250 Cr</span>
                    <span className="text-[#DC2626] font-bold mt-1 inline-block">&times; EXCLUDED from s.43B(h)</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                When a Medium Enterprise sends an email or pre-litigation notice citing Section 43B(h) of the Income Tax Act, the corporate buyer&rsquo;s chartered accountants immediately advise management that there is zero income tax risk. This backfires catastrophically on the creditor: it signals to the debtor that the supplier lacks competent legal counsel and does not understand the governing statutes.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
                  The Correct Corporate Creditor Posture
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Instead of relying on nonexistent tax threats or comparing remedies like{" "}
                  <Link href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice" className="text-[#DC2626] underline font-semibold">
                    MSME Samadhaan vs Legal Notice
                  </Link>
                  , Medium Enterprises must deploy legal tools specifically built for mid-to-large commercial disputes: immediate liquidated summary claims under <strong>Order XXXVII CPC</strong>, <strong>Commercial Courts Act Section 12A</strong> mediation, and statutory insolvency notices under <strong>IBC Section 8</strong>.
                </p>
              </div>
            </section>

            {/* Section 3: The Silpi Industries Test */}
            <section
              id="heading-silpi-graduation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judicial Precedent &amp; Graduation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The Silpi Industries Test: Small-to-Medium Upward Graduation Impact
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The one decisive legal exception where a Medium Enterprise <em>can</em> legally maintain an MSEFC reference arises from the doctrine established by the Supreme Court of India in <strong>Silpi Industries v. Kerala State Road Transport Corporation (2021) SCC Online SC 439</strong>.
              </p>

              <div className="bg-slate-900 text-white rounded-xl p-5 border-l-4 border-[#DC2626] mb-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    Supreme Court Ruling &middot; Silpi Industries (2021)
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">SCC Online SC 439</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                  The Supreme Court laid down the unequivocal <strong>&ldquo;Date-of-Contract Registration Test&rdquo;</strong>: In order to claim the benefits of Chapter V of the MSMED Act, the supplier must have held a valid registration as a Micro or Small enterprise on the date the contract or purchase order was executed.
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300">
                  <strong className="text-emerald-400 block mb-1">What This Means for Upwardly Graduating Units:</strong>
                  If your company entered into a manufacturing supply contract or received a purchase order when your turnover was under &rupee;50 Crore (classified as a &lsquo;Small Enterprise&rsquo;), and during the execution or default phase your turnover crossed &rupee;50 Crore resulting in your Udyam Certificate updating to &lsquo;Medium&rsquo;, <strong>your right to file before the MSEFC is preserved for that contract!</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <span className="block text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    Scenario A &middot; Protected Under Silpi Industries
                  </span>
                  <ul className="text-xs text-emerald-950 space-y-1.5 list-disc list-inside">
                    <li>Contract / PO Date: 12 January 2024</li>
                    <li>Udyam Status on PO Date: <strong>Small Enterprise</strong></li>
                    <li>Graduation to Medium: 15 October 2024 (via ITR filing)</li>
                    <li>Invoice Default Date: 1 December 2024</li>
                    <li><strong>Legal Holding:</strong> MSEFC retains full jurisdiction under Section 18.</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <span className="block text-xs font-bold uppercase tracking-wider text-red-800 mb-1">
                    Scenario B &middot; Barred Under Section 2(n)
                  </span>
                  <ul className="text-xs text-red-950 space-y-1.5 list-disc list-inside">
                    <li>Graduation to Medium: 15 October 2024</li>
                    <li>New Contract / PO Date: 10 November 2024</li>
                    <li>Udyam Status on PO Date: <strong>Medium Enterprise</strong></li>
                    <li>Invoice Default Date: 15 February 2025</li>
                    <li><strong>Legal Holding:</strong> MSEFC jurisdiction is ousted. Must use Order 37 or IBC.</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For sibling manufacturing sectors such as{" "}
                <Link href="/custom-industrial-machinery-balance-withheld-after-installation-recovery" className="text-[#DC2626] underline font-semibold">
                  custom machinery commissioning balance recovery
                </Link>
                ,{" "}
                <Link href="/auto-ancillary-oem-arbitrary-debit-note-tooling-cost-recovery" className="text-[#DC2626] underline font-semibold">
                  auto-ancillary OEM debit note recovery
                </Link>
                , and{" "}
                <Link href="/cnc-machining-fabrication-job-work-challan-payment-recovery" className="text-[#DC2626] underline font-semibold">
                  CNC machining job work challan recovery
                </Link>
                , conducting this date-of-contract audit before issuing notices is the difference between swift recovery and months of jurisdictional litigation.
              </p>
            </section>

            {/* Section 4: The 4 Fastest Alternative Legal Recovery Routes */}
            <section
              id="heading-4-alternatives"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Creditor Recovery Toolkit
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The 4 Fastest Alternative Legal Recovery Routes for Medium Units
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Being excluded from MSEFC is not a handicap—for a &rupee;50 Cr to &rupee;250 Cr enterprise, it is often a strategic blessing. MSEFC conciliation panels are severely backlogged with thousands of petty retail disputes, taking 12 to 24 months to reach an award. In contrast, corporate claims backed by institutional documentation qualify for four high-velocity statutory channels:
              </p>

              <div className="space-y-6">
                {/* Route 1 */}
                <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-r from-white to-slate-50 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626]">
                      Alternative 1 &middot; Order XXXVII CPC
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Commercial Summary Suit
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    Summary Suit for Liquidated Debt under Order XXXVII of the Civil Procedure Code
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    Order XXXVII CPC is specifically designed to recover liquidated commercial debts arising on written contracts, accepted invoices, delivery challans, bills of exchange, and acknowledged ledger balances. Unlike standard civil suits where a defendant can file frivolous written statements and drag trials for 5–7 years, under Order XXXVII:
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside mb-3">
                    <li>The debtor has <strong>no inherent right to defend</strong> the claim.</li>
                    <li>The debtor must enter an appearance within <strong>10 days</strong> of receiving summons.</li>
                    <li>Upon the plaintiff filing a Summons for Judgment, the debtor must satisfy the judge by affidavit that they possess a bona fide, triable defense.</li>
                    <li>If the defense is illusory or unverified, the Commercial Court will immediately grant a final decree or order the debtor to deposit <strong>50% to 100% of the claim amount in cash</strong> as a condition for leave to defend.</li>
                  </ul>
                  <div className="bg-slate-100 p-2.5 rounded-lg text-xs text-slate-700 font-mono">
                    Statutory Foundation: CPC Order XXXVII Rules 1–3 + Sale of Goods Act 1930 Section 55 (Suit for Price)
                  </div>
                </div>

                {/* Route 2 */}
                <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-r from-white to-slate-50 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                      Alternative 2 &middot; Commercial Courts Act s.12A
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Pre-Institution Mediation &amp; Fast-Track Trial
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    Commercial Courts Act, 2015: Fast-Track Adjudication &amp; PIMS Settlement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    Under the Commercial Courts Act, 2015, any commercial dispute having a Specified Value of &rupee;3 Lakhs or more falls under dedicated Commercial Courts with mandatory Case Management Hearings (Order XV-A CPC):
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside mb-3">
                    <li><strong>Pre-Institution Mediation (Section 12A):</strong> The creditor initiates mediation before the District Legal Services Authority (DLSA). If the debtor settles, the mediated settlement agreement has the exact legal force of an <em>arbitral award</em> enforceable under CPC.</li>
                    <li><strong>Urgent Interim Relief Bypass:</strong> If the creditor anticipates that the debtor is diverting assets, siphoning inventory, or alienating bank funds, Section 12A allows the creditor to bypass mediation completely and move for urgent interim attachment under Order XXXVIII Rule 5 CPC.</li>
                    <li><strong>Strict Timelines:</strong> Written statements must be filed within 120 days (absolute forfeiture thereafter), and judgments must be delivered within 90 days of concluding arguments.</li>
                  </ul>
                  <div className="bg-slate-100 p-2.5 rounded-lg text-xs text-slate-700 font-mono">
                    Statutory Foundation: Commercial Courts Act 2015 Sections 2(1)(c), 12A, 19 &amp; CPC Order XV-A
                  </div>
                </div>

                {/* Route 3 */}
                <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-r from-white to-slate-50 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
                      Alternative 3 &middot; TReDS Factoring
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Trade Receivables Discounting
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    Trade Receivables Discounting System (TReDS) &amp; Factoring Regulation Act, 2011
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    For ongoing supplies to large corporate buyers, Medium manufacturing enterprises can onboard RBI-authorized TReDS platforms (such as Invoicemart, RXIL, and M1xchange):
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside mb-3">
                    <li>Once an invoice and proof of delivery are uploaded, the corporate buyer has a designated window to accept the invoice digitally.</li>
                    <li>Multiple institutional financiers bid competitively to discount the trade receivable.</li>
                    <li>Funds are credited directly to the Medium Enterprise&rsquo;s current account within <strong>48 to 72 hours (T+2 / T+3)</strong>, transferring the collection risk to the financing bank.</li>
                    <li>If the buyer defaults on the ultimate maturity date, the financier executes direct banking auto-debits and NACH recovery under the Payment and Settlement Systems Act, 2007 (Section 25).</li>
                  </ul>
                  <div className="bg-slate-100 p-2.5 rounded-lg text-xs text-slate-700 font-mono">
                    Statutory Foundation: Factoring Regulation Act 2011 &amp; RBI Master Directions on TReDS
                  </div>
                </div>

                {/* Route 4 */}
                <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-r from-white to-slate-50 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950 text-red-300">
                      Alternative 4 &middot; IBC s.8 &amp; s.9 (Claims &ge; &rupee;1 Cr)
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Corporate Insolvency Remedy
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    Insolvency and Bankruptcy Code (IBC) Section 8 Demand Notice &amp; Section 9 CIRP
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    For substantial defaults where a corporate debtor owes <strong>&rupee;1 Crore or more</strong> of operational debt:
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside mb-3">
                    <li>The Medium Enterprise issues a <strong>10-Day Statutory Demand Notice in Form 3 / Form 4</strong> under Section 8 of the IBC.</li>
                    <li>The corporate debtor has exactly 10 days to either pay the unpaid operational debt or prove the existence of a real, contemporaneous pre-existing dispute raised before the notice was served.</li>
                    <li>If the corporate debtor fails to settle or demonstrate a genuine dispute, the creditor files an application under <strong>Section 9</strong> before the National Company Law Tribunal (NCLT) to initiate the Corporate Insolvency Resolution Process (CIRP).</li>
                    <li>The threat of CIRP—which removes existing promoters from board management and hands operational control to an Insolvency Resolution Professional (IRP)—produces settlements in over 85% of solvent corporate cases during the notice window or before formal admission.</li>
                  </ul>
                  <div className="bg-slate-100 p-2.5 rounded-lg text-xs text-slate-700 font-mono">
                    Statutory Foundation: IBC 2016 Sections 8 &amp; 9 + Supreme Court Mobilox Innovations Precedent
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Forum Comparison Matrix */}
            <section
              id="heading-remedy-comparison"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  5
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Comparative Strategy Matrix
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Remedy Comparison Matrix: Order 37 vs Section 12A vs TReDS vs IBC
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                To evaluate the optimum recovery route for your specific default amount, review the statutory criteria across the primary Indian commercial recovery forums:
              </p>

              <div className="overflow-x-auto -mx-4 sm:mx-0 rounded-xl border border-slate-200 shadow-xs mb-4">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-900 text-white divide-x divide-slate-800">
                      <th className="p-3.5 font-bold uppercase tracking-wider text-[11px]">Evaluation Metric</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] text-red-400">MSEFC (Samadhaan)</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] text-emerald-400">Order 37 CPC</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] text-slate-200">Commercial Court (12A)</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] text-amber-400">IBC Section 8/9</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {FORUM_COMPARISON_MATRIX.slice(1).map((row, idx) => (
                      <tr key={idx} className="divide-x divide-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-semibold text-slate-900 bg-slate-50/70">{row.criterion}</td>
                        <td className="p-3 text-red-700 bg-red-50/30 font-medium">{row.msefc}</td>
                        <td className="p-3 text-emerald-900 font-medium">{row.order37}</td>
                        <td className="p-3 text-slate-800">{row.s12a}</td>
                        <td className="p-3 text-slate-900 font-medium">{row.ibc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic">
                * Note: For an in-depth comparison of notice mechanisms, see our practitioner guide on{" "}
                <Link href="/msme-odr-portal-delayed-payment-guide" className="text-[#DC2626] underline font-medium">
                  MSME ODR Portal Delayed Payment Guide
                </Link>
                .
              </p>
            </section>

            {/* Section 6: Statutory Timelines & Limitation Stops */}
            <section
              id="heading-statutory-timeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  6
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Limitation &amp; Enforcement Clock
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Timelines &amp; Limitation Stops for Medium Units
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Delaying action while attempting informal negotiations is the number one cause of bad debt write-offs for Indian Medium Enterprises. The following timeline outlines the statutory windows and limitation cut-offs governing commercial debt recovery:
              </p>

              <div className="space-y-4">
                {STATUTORY_TIMELINE_STOPS.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white hover:border-[#DC2626]/40 transition-colors shadow-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                      <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wider">
                        {item.phase}
                      </span>
                      <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {item.statute}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm">
                      <p className="text-slate-800">
                        <strong className="text-slate-900">Default Trigger: </strong>
                        {item.trigger}
                      </p>
                      <p className="text-slate-700">
                        <strong className="text-emerald-700">Recommended Action: </strong>
                        {item.action}
                      </p>
                      <p className="text-red-700 bg-red-50/60 p-2.5 rounded-lg border border-red-200">
                        <strong className="font-semibold text-red-900">Limitation / Procedure Risk: </strong>
                        {item.risk}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-slate-900 text-white p-4 sm:p-5 rounded-xl border border-slate-800 text-xs sm:text-sm">
                <span className="block font-bold text-amber-400 uppercase tracking-wider text-xs mb-1">
                  The 3-Year Limitation Trap &middot; Section 18 Limitation Act
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Under Article 14 of the Limitation Act, 1963, the limitation period for recovering unpaid invoices is strictly <strong>3 years</strong> from the date of delivery. Under Section 18 of the Limitation Act, a fresh 3-year limitation clock begins only if the debtor provides an unequivocal written acknowledgment of debt (or ledger balance confirmation) signed prior to the expiry of the original 3-year period. Informal phone assurances or unsigned spreadsheets do not reset the limitation clock.
                </p>
              </div>
            </section>

            {/* Section 7: Debtor Defense Pre-Emption Table */}
            <section
              id="heading-preemption-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  7
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Debtor Defense Dismantling
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Debtor Defense Pre-Emption: Dismantling Common Corporate Buyer Bluffs
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Corporate buyers routinely deploy scripted defenses when refusing payment to Medium Enterprise vendors. The table below analyzes their legal substance and outlines the exact statutory rebuttal:
              </p>

              <div className="space-y-4">
                {DEBTOR_DEFENSE_MATRIX.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs"
                  >
                    <div className="bg-red-50/70 border border-red-200/80 p-3 rounded-lg mb-3">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-red-800 mb-0.5">
                        Corporate Debtor Pretext #{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 italic">
                        {item.defense}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wider">
                          Statutory Reality &amp; Precedent
                        </strong>
                        <p className="text-slate-700 leading-relaxed">
                          {item.reality}
                        </p>
                      </div>

                      <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                        <strong className="block text-emerald-900 font-bold mb-1 text-xs uppercase tracking-wider">
                          Preemptive Creditor Strategy
                        </strong>
                        <p className="text-emerald-950 leading-relaxed">
                          {item.preemption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Practical Scenarios */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  8
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Interactive Strategy Explorer
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Practical Scenarios: Choosing the Right Forum for ₹50L–₹10Cr Dues
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Explore four real-world commercial failure modes encountered by Medium manufacturing enterprises, including upward graduation, tax loopholes, invoice liquidations, and IBC insolvency demand notices:
              </p>

              <MediumEnterpriseScenarioTabs />
            </section>

            {/* Section 9: Precedent Deep-Dive Cards */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  9
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Binding Judicial Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Supreme Court Precedents Governing Medium Enterprise Recoveries
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                The following binding rulings from the Supreme Court of India govern the jurisdiction of MSME Facilitation Councils, pre-institution mediation in Commercial Courts, and operational debt insolvency:
              </p>

              <div className="space-y-4">
                {PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl border border-slate-200 shadow-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {item.citation}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                        {item.court}
                      </span>
                    </div>

                    <span className="block text-[11px] font-mono text-slate-600 mb-2">
                      Statutory Nexus: {item.statute}
                    </span>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      <strong className="text-slate-900">Judicial Holding: </strong>
                      {item.holding}
                    </p>

                    <p className="text-xs text-slate-800 bg-white/80 p-2.5 rounded-lg border border-slate-200">
                      <strong className="text-[#DC2626]">Creditor Significance: </strong>
                      {item.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10: Dual-Track B2B Conversion Funnel CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Direct Institutional Handoff
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Initiate Fast-Track Medium Enterprise Debt Recovery Today
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Whether you have an individual stalled corporate balance or thousands of aged receivables across your distributor and OEM network, activate our specialized B2B recovery desks:
              </p>

              <MediumEnterpriseCTA />
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  11
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions on Medium Enterprise Debt Recovery
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Find clear statutory answers to common legal and financial questions faced by Medium Enterprise promoters, finance controllers, and corporate legal teams:
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <summary className="flex items-center justify-between p-4 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer select-none">
                      <span className="pr-4">{faq.q}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                        &#9660;
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                      {faq.a}
                    </div>
                  </details>
                ))}
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
