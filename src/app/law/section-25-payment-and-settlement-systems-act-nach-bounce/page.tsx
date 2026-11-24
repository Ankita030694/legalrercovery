import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import Section25TableOfContents from "./Section25TableOfContents";
import Section25ScenarioTabs from "./Section25ScenarioTabs";
import Section25NoticeCTA from "./Section25NoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/law/section-25-payment-and-settlement-systems-act-nach-bounce";
const PAGE_H1 =
  "Section 25 of the Payment & Settlement Systems Act, 2007: The Complete Lender Playbook for e-NACH, ECS & UPI AutoPay Dishonour";
const META_TITLE =
  "Section 25 PSS Act (e-NACH & AutoPay Bounce): Lender Guide";
const META_DESCRIPTION =
  "90% of digital loans use e-NACH/UPI AutoPay, not cheques. Master Section 25 PSS Act timelines (30+15+30 days), NPCI return codes & jurisdiction.";

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
        alt: formatAltText(
          "Section 25 PSS Act e-NACH and UPI AutoPay Bounce Lender Playbook"
        ),
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
    title:
      "The Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer for Insufficiency, etc., of Funds in the Account) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2042",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Chapter XVII: Sections 138, 139, 141, 142(2), 143A, 145 & 147, as amended by the Negotiable Instruments (Amendment) Act, 2015 & 2018)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "NPCI National Automated Clearing House (NACH) & UPI AutoPay Procedural Guidelines and ISO 20022 Return Reason Codes — National Payments Corporation of India",
    url: "https://www.npci.org.in/what-we-do/nach/product-overview",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records, NPCI XML Logs & Dispatch Proofs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Reserve Bank of India (RBI) Master Direction — Reserve Bank of India (Digital Lending) Directions & Fair Practices Code for NBFCs",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12382",
  },
];

const COURT_PRECEDENTS = [
  {
    title:
      "Creditor Home-Bank Territorial Jurisdiction (Section 142(2) NI Act Parity)",
    parties:
      "Dashrath Rupsingh Rathod v. State of Maharashtra & Negotiable Instruments (Amendment) Act, 2015",
    citation: "(2014) 9 SCC 129 & Statutory Amendment w.e.f. 15 June 2015",
    date: "Enacted via Parliament Amendment 2015",
    facts:
      "Prior to 2015, lenders faced severe operational paralysis because criminal complaints for dishonoured payment instruments had to be filed where the borrower's drawee bank branch was situated—forcing NBFCs with pan-India digital portfolios to litigate in hundreds of remote taluka courts.",
    holding:
      "Following Dashrath Rupsingh Rathod, Parliament inserted Section 142(2) into the Negotiable Instruments Act, 1881, vesting territorial jurisdiction in the Judicial Magistrate First Class (JMFC) / Metropolitan Magistrate where the payee (creditor) maintains its collection bank account. By virtue of Section 25(3) of the Payment and Settlement Systems Act, 2007, Chapter XVII of the NI Act—including Section 142(2)—applies mutatis mutandis to electronic funds transfer dishonours.",
    amount: "Centralized Filing at NBFC / Fintech Collection Bank Branch Jurisdiction",
    takeaway:
      "An NBFC headquartered in Mumbai, Bengaluru, or Gurugram can centralize Section 25(1) criminal complaints before the Magistrate Court having jurisdiction over its sponsor/collection bank branch, rather than chasing borrowers across 28 states.",
  },
  {
    title:
      "The Dual-Demand Rule: Exact Dishonoured EMI vs Total Loan Acceleration",
    parties: "Suman Sethi v. Ajay K. Churiwal & Anr.",
    citation: "(2000) 2 SCC 380, Supreme Court of India",
    date: "Judgment Dated 02 February 2000",
    facts:
      "A creditor issued a statutory demand notice claiming both the dishonoured payment amount and additional interest/other charges without severably quantifying the exact bounced instrument value. The accused sought quashing of the criminal complaint on grounds of omnibus, defective demand.",
    holding:
      "The Supreme Court held that a statutory demand notice remains valid if it specifically states the exact dishonoured payment amount, even if it separately claims interest, penal charges, or other sums. However, if the notice makes an omnibus lump-sum demand without clearly isolating the exact bounced instrument figure, the statutory notice is rendered bad in law.",
    amount: "Strict Separation Rule — Isolate Exact Bounced EMI in Schedule A",
    takeaway:
      "Never merge a total loan recall figure into the Section 25(1)(b) statutory demand paragraph. State the exact bounced e-NACH/UPI AutoPay EMI amount independently, and place total outstanding principal or recall warnings in a clearly demarcated secondary paragraph.",
  },
  {
    title:
      "Expedited Summary Trial, Compounding & Electronic Affidavit Evidence",
    parties:
      "Meters and Instruments Pvt. Ltd. v. Kanchan Mehta & In Re: Expeditious Trial of Cases under Section 138 NI Act",
    citation: "(2018) 1 SCC 560 & Suo Motu W.P. (Crl.) No. 2 of 2020 (2021) 16 SCC 116",
    date: "Supreme Court Constitution / Division Bench Directives",
    facts:
      "Millions of Section 138 NI Act and Section 25 PSS Act complaints clogged Magistrate dockets due to mechanical personal-appearance mandates, delayed summons service, and repetitive evidentiary examinations.",
    holding:
      "The Supreme Court affirmed that dishonour offences are primarily compensatory and regulatory in character, authorizing Magistrate Courts to conduct summary trials, accept evidence on affidavit under Section 145, issue electronic summons, and permit compounding at early stages where the defaulter deposits the instrument amount plus reasonable costs and interest.",
    amount: "Affidavit Evidence (s.145) & Early Compounding Leverage",
    takeaway:
      "NBFC litigation desks can file standardized pre-summoning affidavits under Section 145 NI Act read with Section 25(3) PSS Act, drastically lowering per-case legal appearance costs across high-volume digital portfolios.",
  },
  {
    title:
      "Prosecution on Security Mandates & Crystallized Debt Liability",
    parties: "Sripati Singh (Since Deceased) Through His Son v. State of Jharkhand",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    date: "Judgment Dated 28 October 2021",
    facts:
      "The borrower contended that an instrument furnished as security at the time of loan sanction could not be prosecuted criminally upon subsequent dishonour, claiming no crystallized debt existed when the mandate or instrument was initially executed.",
    holding:
      "The Supreme Court clarified that an instrument given as security is not a worthless piece of paper; once the loan is disbursed and the repayment obligation falls due and remains unpaid, presentation and subsequent dishonour squarely attract criminal prosecution. Statutory presumption under Section 139 (and pari materia Section 25(4) PSS Act) operates in the creditor's favour.",
    amount: "Security / Standing Mandates Fully Enforceable Upon Loan Default",
    takeaway:
      "Borrowers cannot defeat Section 25 PSS Act complaints by claiming the e-NACH or UPI AutoPay mandate was registered at onboarding before the EMI fell due. Once disbursement occurs, every scheduled EMI presentation carries full statutory presumption.",
  },
];

const NPCI_RETURN_CODES = [
  {
    code: "R01 / U30",
    meaning: "Insufficient Funds in Account (NACH / UPI AutoPay)",
    eligibility: "Eligible — Direct s.25(1) Presumption",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    action:
      "Trigger Day-7 to Day-15 Section 25(1)(b) statutory demand notice immediately. Clear insufficiency of funds attracts Section 25(4) presumption.",
  },
  {
    code: "R02 / U16",
    meaning: "Account Closed / Balance Exceeds Arrangement",
    eligibility: "Eligible — High Mens Rea Indicator",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    action:
      "Issue Section 25(1)(b) notice within 30 days. Closing an account post-disbursement strengthens willful default proof before the Magistrate.",
  },
  {
    code: "R04 / R05",
    meaning: "Payment Stopped by Drawer / Mandate Revoked / Frozen",
    eligibility: "Eligible — Tactical Evasion Covered",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    action:
      "Serve Section 25(1)(b) notice citing deliberate stoppage; pair with Section 21 ODR arbitration notice if borrower revokes mandate mid-tenure.",
  },
  {
    code: "R03",
    meaning: "Exceeds Arrangement / Refer to Drawer",
    eligibility: "Eligible — Equivalent to Insufficiency",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    action:
      "Proceed with statutory 30+15+30 day Section 25 timeline. Courts consistently treat 'Refer to Drawer' / 'Exceeds Arrangement' as actionable dishonour.",
  },
  {
    code: "R13 / R14 / R20",
    meaning: "Invalid UMRN / Account Mismatch / Mandate Expired",
    eligibility: "Not Recommended for s.25 Criminal",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
    action:
      "Technical or bank-side rejection lacks s.25(1) 'insufficiency/arrangement' nexus. Route via Contract Act recall notice, CIC reporting & ODR arbitration.",
  },
];

const DEFENSE_PREEMPTION = [
  {
    defense: "Omnibus Demand Defect (Suman Sethi Trap)",
    claim:
      "Borrower argues the notice demanded ₹1,45,000 total loan recall without specifying the exact ₹8,450 bounced EMI.",
    preemption:
      "Isolate the exact bounced EMI (plus UMRN & bounce date) in the primary Section 25(1)(b) demand paragraph; place total outstanding recall in a separate civil clause.",
  },
  {
    defense: "Technical / Operational Return Code (R13/R14)",
    claim:
      "Borrower claims NPCI returned the debit due to sponsor-bank routing error or expired mandate, not insufficiency of funds.",
    preemption:
      "Filter CSV batches before notice dispatch—route only R01, R02, R03, R04, R05, U30, U16 codes to Section 25 criminal notices; route R13/R20 to ODR arbitration.",
  },
  {
    defense: "Unverified Electronic Records (BSA 2023 s.63)",
    claim:
      "Borrower challenges admissibility of NPCI ISO 20022 XML return memos, WhatsApp delivery logs, and email notices.",
    preemption:
      "Attach a contemporaneous BSA 2023 Section 63 certificate signed by the NBFC's authorized IT/Nodal Officer alongside Speed Post RPAD tracking manifests.",
  },
  {
    defense: "Time-Barred Statutory Notice (>30 Days)",
    claim:
      "Borrower demonstrates the lender waited until 90+ DPD NPA classification, missing the 30-day s.25(1)(b) cutoff for EMI #1.",
    preemption:
      "Never wait for 90 DPD. Automate Section 25 notice dispatch within 7–15 days of each bounce, or re-present the mandate (if active) to trigger a fresh cause of action.",
  },
  {
    defense: "Vicarious Director Non-Involvement (s.141)",
    claim:
      "Non-executive or nominee directors seek quashing under Section 482 CrPC / Section 528 BNSS for lack of specific averments.",
    preemption:
      "Verify MCA DIR-12 before notice drafting; serve notices only on Managing/Whole-Time Directors and authorized signatories with explicit operational-control averments.",
  },
];

const FAQS = [
  {
    q: "Does Section 25 of the Payment and Settlement Systems Act, 2007 apply to UPI AutoPay and e-NACH bounces?",
    a: "Yes. Section 25(1) covers any 'electronic funds transfer' initiated by a person from an account maintained with a bank for payment of any amount to another person for discharge of a debt or liability. Both NPCI e-NACH (National Automated Clearing House) mandates and UPI AutoPay recurring mandates are regulated electronic funds transfer systems under the PSS Act, 2007, attracting identical criminal liability upon dishonour.",
  },
  {
    q: "What are the exact statutory timelines under Section 25 PSS Act (30 + 15 + 30 days)?",
    a: "First, the lender must issue a written demand notice within 30 days of receiving information from the bank/NPCI regarding the dishonour of the electronic funds transfer (s.25(1)(b)). Second, the borrower gets 15 days from the receipt (or deemed service under General Clauses Act s.27) of that notice to pay the dishonoured amount (s.25(1)(c)). Third, if unpaid after 15 days, the lender must file the criminal complaint before the Magistrate within 30 days (1 month) from the expiry of the 15-day cure window (s.25(2) read with NI Act s.142(1)(b)).",
  },
  {
    q: "Where can an NBFC or fintech file a Section 25 PSS Act criminal complaint (jurisdiction)?",
    a: "By virtue of Section 25(3) of the PSS Act, 2007, Chapter XVII of the Negotiable Instruments Act, 1881—including Section 142(2) inserted in 2015—applies to electronic funds transfer dishonours. Therefore, the NBFC or fintech can file the criminal complaint before the Metropolitan Magistrate or Judicial Magistrate First Class (JMFC) having jurisdiction over the branch of the bank where the lender maintains its collection account.",
  },
  {
    q: "Which NPCI NACH return reason codes qualify for Section 25 criminal prosecution?",
    a: "Return codes reflecting insufficiency of funds or deliberate payment stoppage qualify directly under Section 25(1): R01 (Insufficient Funds), R02 (Account Closed), R03 (Exceeds Arrangement / Refer to Drawer), R04 (Payment Stopped by Drawer / Mandate Revoked), R05 (Account Frozen / Dormant), and UPI AutoPay equivalents U30/U16. Technical or bank-side codes like R13 (Invalid UMRN) or R20 (Mandate Expired) should be routed to civil/arbitral recovery rather than criminal prosecution.",
  },
  {
    q: "What is the key difference between Section 138 NI Act and Section 25 PSS Act?",
    a: "Section 138 of the NI Act applies exclusively to physical paper cheques, whereas Section 25 of the PSS Act applies to electronic funds transfers (e-NACH, NACH Debit, ECS, UPI AutoPay). Substantively, Section 25(3) imports the entire procedural and penal machinery of Chapter XVII of the NI Act—up to 2 years imprisonment and/or fine up to twice the dishonoured amount, Section 141 director liability, Section 142(2) home-bank jurisdiction, and Section 143A 20% interim compensation.",
  },
  {
    q: "Can a lender claim the entire loan recall amount in a Section 25 PSS Act demand notice?",
    a: "Under the Supreme Court's Suman Sethi v. Ajay K. Churiwal doctrine, the statutory demand notice must clearly isolate and demand the exact dishonoured EMI amount. A lender may mention the total accelerated loan balance or penal interest in a separate paragraph for civil/arbitral recall, but blending them into a single omnibus demand without specifying the exact bounced EMI invalidates the criminal notice.",
  },
  {
    q: "Can an NBFC run Section 25 PSS Act notices alongside ODR / online arbitration?",
    a: "Yes. Criminal prosecution under Section 25 PSS Act is an independent statutory offence for payment dishonour, whereas institutional ODR / Section 21 arbitration is a civil remedy to obtain an enforceable money award for the entire loan principal and interest. Running both in parallel—using tri-channel Section 25 notices at Day 7–15 and ODR arbitration post-recall—maximizes cure velocity while preserving full balance recovery.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  image: `${SITE_URL}/blog_money_recovery.png`,
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  about: [
    "Payment and Settlement Systems Act 2007 Section 25",
    "e-NACH Mandate Dishonour",
    "UPI AutoPay Bounce Legal Notice",
    "Negotiable Instruments Act Chapter XVII Parity",
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
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
      name: "NBFC & Fintech Loan Recovery",
      item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Section 25 PSS Act (e-NACH & AutoPay Bounce)",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function Section25PSSActPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Creditor Statute Playbook</span>
            <span aria-hidden="true">&bull;</span>
            <span>PSS Act 2007 s.25(1)&ndash;(5)</span>
            <span aria-hidden="true">&bull;</span>
            <span>NBFC &amp; Fintech Legal</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {PAGE_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under Section 25 of the Payment and Settlement Systems Act, 2007, dishonour of an e-NACH, ECS, or UPI AutoPay mandate carries full criminal parity with Section 138 NI Act (up to 2 years imprisonment or 2&times; fine). Inside our{" "}
            <Link
              href="/industries/nbfc-fintech-loan-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              NBFC &amp; Fintech Loan Recovery Hub
            </Link>
            , lenders enforce the strict 30+15+30 day statutory clock from their creditor home-bank jurisdiction.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-xl font-black text-red-400">
                2 Yrs / 2&times; Fine
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                s.25(1) &amp; s.25(3) NI Act Penalty Parity
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-amber-400">
                30 + 15 + 30 Days
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Notice, Cure &amp; Magistrate Filing Clock
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-emerald-400">
                s.142(2) Parity
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Lender Collection-Bank Jurisdiction
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-slate-100">
                R01 / R03 / R04
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Qualifying NPCI Return Memo Codes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "NBFC & Fintech Loan Recovery",
                href: "/industries/nbfc-fintech-loan-recovery",
              },
              {
                label: "Section 25 PSS Act (e-NACH & AutoPay Bounce)",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <Section25TableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Statutory Mandate */}
            <section
              id="heading-statutory-mandate"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why Section 25 PSS Act Replaces Section 138 for Digital Loans
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Over 90% of Indian retail personal loans, BNPL credit lines, consumer durable EMIs, and digital SME facilities are collected through recurring electronic mandates—NPCI e-NACH, NACH Debit, ECS, and UPI AutoPay—rather than physical post-dated cheques. Yet most online commentary on Section 25 of the Payment and Settlement Systems Act, 2007 (&ldquo;PSS Act&rdquo;) is written for defaulting borrowers seeking settlement leverage, leaving NBFC litigation heads and fintech legal managers without an institutional enforcement blueprint.
                </p>
                <p>
                  Section 25(1) of the PSS Act closes the enforcement gap created by paperless lending. Whenever an electronic funds transfer initiated by a borrower from an account maintained with a bank for discharging any debt or liability is returned unpaid—either because the amount standing to the credit of that account is insufficient to honour the transfer, or because it exceeds the arrangement made with the bank—the borrower commits a statutory criminal offence punishable with imprisonment up to <strong>two years</strong>, or a fine extending to <strong>twice the amount</strong> of the electronic funds transfer, or both.
                </p>
                <p>
                  Crucially, <strong>Section 25(3)</strong> imports the entire enforcement architecture of Chapter XVII of the Negotiable Instruments Act, 1881 (Sections 138 to 147) <em>mutatis mutandis</em>. For institutional lenders, this statutory bridge unlocks corporate and director vicarious liability (Section 141), creditor home-bank territorial jurisdiction (Section 142(2)), 20% interim compensation during trial (Section 143A), and evidence on affidavit (Section 145). Before dispatching notices, legal teams should verify statutory cut-offs on our{" "}
                  <Link
                    href="/tools/section-25-nach-bounce-limitation-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Section 25 e-NACH Bounce Limitation Calculator
                  </Link>{" "}
                  and adopt our court-tested{" "}
                  <Link
                    href="/templates/section-25-pss-act-nach-bounce-legal-notice-format"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Section 25 PSS Act Legal Notice Format
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: Bare-Act Timelines & SVG Flowchart */}
            <section
              id="heading-bare-act-timelines"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Section 25(1) &amp; (2) Statutory Clock: 30 + 15 + 30 Days
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Unlike civil recovery under the Limitation Act (3 years from default), Section 25 PSS Act criminal prosecution operates on a rigid, non-condonable pre-litigation clock. Missing the 30-day notice window for a single bounced EMI permanently extinguishes criminal prosecution for that specific bounce unless a fresh presentation is validly executed on an active mandate.
              </p>

              {/* Desktop SVG Decision Flow */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 mb-6 overflow-x-auto">
                <svg
                  width="760"
                  height="180"
                  viewBox="0 0 760 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Section 25 PSS Act 30 plus 15 plus 30 Day Statutory Clock"
                  className="w-full h-auto"
                >
                  <rect x="10" y="30" width="160" height="110" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="90" y="58" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 (T = 0)</text>
                  <text x="90" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">NPCI Return Memo</text>
                  <text x="90" y="100" textAnchor="middle" fill="#CBD5E1" fontSize="11">R01 / R03 / R04 / U30</text>
                  <text x="90" y="118" textAnchor="middle" fill="#94A3B8" fontSize="10">ISO 20022 pain.002</text>

                  <path d="M170 85 L202 85" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="200,79 210,85 200,91" fill="#DC2626" />

                  <rect x="210" y="30" width="165" height="110" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="292" y="58" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 2 (&le; 30 DAYS)</text>
                  <text x="292" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">s.25(1)(b) Notice</text>
                  <text x="292" y="100" textAnchor="middle" fill="#CBD5E1" fontSize="11">Email + WhatsApp + RPAD</text>
                  <text x="292" y="118" textAnchor="middle" fill="#94A3B8" fontSize="10">Exact EMI Separated</text>

                  <path d="M375 85 L407 85" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="405,79 415,85 405,91" fill="#DC2626" />

                  <rect x="415" y="30" width="160" height="110" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="495" y="58" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 3 (15 DAYS)</text>
                  <text x="495" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">s.25(1)(c) Cure</text>
                  <text x="495" y="100" textAnchor="middle" fill="#CBD5E1" fontSize="11">From Receipt / s.27 GC</text>
                  <text x="495" y="118" textAnchor="middle" fill="#94A3B8" fontSize="10">Deemed Service Window</text>

                  <path d="M575 85 L607 85" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="605,79 615,85 605,91" fill="#DC2626" />

                  <rect x="615" y="30" width="135" height="110" rx="12" fill="#DC2626" />
                  <text x="682" y="58" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="700">STAGE 4 (&le; 30 DAYS)</text>
                  <text x="682" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">JMFC Filing</text>
                  <text x="682" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="11">s.25(2) / s.142(2)</text>
                  <text x="682" y="118" textAnchor="middle" fill="#FEE2E2" fontSize="10">Lender Bank Forum</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden mb-6">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <p className="text-[11px] font-bold text-red-400 uppercase">Stage 1 &bull; T = 0</p>
                  <p className="text-sm font-extrabold mt-0.5">NPCI Return Memo (R01/R03/R04)</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <p className="text-[11px] font-bold text-red-400 uppercase">Stage 2 &bull; &le; 30 Days</p>
                  <p className="text-sm font-extrabold mt-0.5">s.25(1)(b) Demand Notice Dispatch</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <p className="text-[11px] font-bold text-amber-400 uppercase">Stage 3 &bull; 15 Days</p>
                  <p className="text-sm font-extrabold mt-0.5">s.25(1)(c) Borrower Cure Window</p>
                </div>
                <div className="p-4 rounded-xl bg-[#DC2626] text-white">
                  <p className="text-[11px] font-bold text-red-100 uppercase">Stage 4 &bull; &le; 30 Days</p>
                  <p className="text-sm font-extrabold mt-0.5">s.25(2) Magistrate Complaint</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                <strong>Operational Warning for 90-DPD NPA Workflows:</strong> Many NBFCs delay legal notices until an account crosses 90 DPD (NPA). Because the 30-day notice clock under Section 25(1)(b) starts on the date of <em>each</em> bounce intimation, waiting until Day 90 forfeits criminal action on EMI #1 and EMI #2. Automate tri-channel notices between Day 7 and Day 15 after every bounce via{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="font-bold underline text-amber-950"
                >
                  Bulk Email, WhatsApp &amp; Speed Post Dispatch
                </Link>
                .
              </div>
            </section>

            {/* Section 3: NPCI Return Reason Codes */}
            <section
              id="heading-npci-return-codes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  NPCI NACH &amp; UPI AutoPay Return Codes: Section 25 Eligibility
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Not every failed NACH or UPI AutoPay presentation is fit for criminal prosecution. Before issuing a Section 25(1)(b) statutory notice, your collections ops team must scrub the NPCI return memo against the statutory requirement of &ldquo;insufficiency of funds&rdquo; or &ldquo;exceeds arrangement.&rdquo;
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">NPCI Code</th>
                      <th className="p-3.5 font-bold">Return Reason</th>
                      <th className="p-3.5 font-bold">s.25 Eligibility</th>
                      <th className="p-3.5 font-bold">NBFC Legal Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {NPCI_RETURN_CODES.map((row) => (
                      <tr key={row.code} className="hover:bg-slate-50">
                        <td className="p-3.5 font-extrabold text-slate-900 whitespace-nowrap">
                          {row.code}
                        </td>
                        <td className="p-3.5 text-slate-700 font-medium">
                          {row.meaning}
                        </td>
                        <td className="p-3.5">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${row.badgeClass}`}
                          >
                            {row.eligibility}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-600 leading-relaxed">
                          {row.action}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Section 25 PSS Act vs Section 138 NI Act */}
            <section
              id="heading-ni-138-vs-pss-25"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Section 25 PSS Act vs Section 138 NI Act: Lender Matrix
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                While physical cheques remain relevant for B2B dealer security and high-ticket LAP (see our{" "}
                <Link
                  href="/law/cheque-bounce-supreme-court-guidelines-2025"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Section 138 NI Act Supreme Court Guidelines
                </Link>
                ), Section 25 PSS Act governs digital recurring mandates with identical penal teeth.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Legal Parameter</th>
                      <th className="p-3.5 font-bold">Section 25 PSS Act, 2007</th>
                      <th className="p-3.5 font-bold">Section 138 NI Act, 1881</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Covered Instrument</td>
                      <td className="p-3.5">e-NACH, NACH Debit, ECS, UPI AutoPay, Standing Instruction</td>
                      <td className="p-3.5">Physical paper cheque (CTS-2010 / PDC / security cheque)</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Statutory Presumption</td>
                      <td className="p-3.5">Section 25(4) PSS Act — presumed for debt/liability discharge</td>
                      <td className="p-3.5">Section 139 NI Act — presumed for legally enforceable debt</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Maximum Penalty</td>
                      <td className="p-3.5">Up to 2 years imprisonment &amp;/or 2&times; transfer amount</td>
                      <td className="p-3.5">Up to 2 years imprisonment &amp;/or 2&times; cheque amount</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Territorial Jurisdiction</td>
                      <td className="p-3.5">Lender&apos;s collection bank branch (s.142(2) via s.25(3))</td>
                      <td className="p-3.5">Payee&apos;s bank branch where cheque is presented (s.142(2))</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Interim Compensation</td>
                      <td className="p-3.5">Up to 20% under s.143A NI Act (incorporated via s.25(3))</td>
                      <td className="p-3.5">Up to 20% under s.143A NI Act</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Primary Dishonour Proof</td>
                      <td className="p-3.5">NPCI XML/pain.002 memo + BSA 2023 s.63 certificate</td>
                      <td className="p-3.5">Original Cheque + Bank Return Memo with bank seal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Territorial Jurisdiction & Precedents */}
            <section
              id="heading-jurisdiction-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Territorial Jurisdiction &amp; Verified Supreme Court Precedents
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Creditor-side litigation under Section 25 PSS Act hinges on four controlling Supreme Court doctrines and statutory amendments that eliminate multi-state forum fragmentation and protect notice validity.
              </p>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50"
                  >
                    <div className="flex">
                      <div className="w-1.5 bg-[#DC2626] shrink-0" />
                      <div className="p-5 sm:p-6 space-y-2.5 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                            {item.parties}
                          </h3>
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
                            {item.citation}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-500">
                          {item.title} &bull; {item.date}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <strong>Holding:</strong> {item.holding}
                        </p>
                        <div className="bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800">
                          <strong className="text-[#DC2626]">Lender Takeaway:</strong>{" "}
                          {item.takeaway}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Interactive 4 Lender Playbooks */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 NBFC &amp; Fintech Mandate Dishonour Playbooks
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your lending vertical below to inspect the exact statutory path, BSA 2023 evidence pack, and batch execution directive for e-NACH and UPI AutoPay defaults.
              </p>
              <Section25ScenarioTabs />
            </section>

            {/* Section 7: Defense Pre-Emption & Batch Unit Economics */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Borrower Defense Pre-Emption &amp; Batch Filing Checklist
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Borrowers relying on consumer settlement blogs routinely raise five technical objections to quash Section 25 complaints. Pre-empt all five at the notice-drafting stage:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Borrower Defense</th>
                      <th className="p-3.5 font-bold">How Defaulters Argue It</th>
                      <th className="p-3.5 font-bold">Lender Pre-Emption SOP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {DEFENSE_PREEMPTION.map((item) => (
                      <tr key={item.defense} className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">{item.defense}</td>
                        <td className="p-3.5">{item.claim}</td>
                        <td className="p-3.5 text-emerald-800 bg-emerald-50/40 font-medium">
                          {item.preemption}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Worked Batch Economics & Cross-Links */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 space-y-3">
                <h3 className="text-base sm:text-lg font-extrabold text-emerald-950">
                  Integrating Section 25 Notices with RBI-Safe Collections &amp; ODR
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  For high-volume retail and BNPL portfolios, tri-channel Fact-Verified Legal Notices under Section 25 PSS Act replace coercive telecalling while preserving full audit compliance under RBI Digital Lending Directions. Pair this statute playbook with our{" "}
                  <Link
                    href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                    className="font-bold underline"
                  >
                    RBI Recovery Agent Guidelines for NBFCs
                  </Link>
                  ,{" "}
                  <Link
                    href="/small-ticket-digital-personal-loan-bnpl-recovery-economics"
                    className="font-bold underline"
                  >
                    Small-Ticket BNPL Recovery Economics
                  </Link>
                  ,{" "}
                  <Link
                    href="/gold-loan-default-auction-statutory-notice-rbi-compliance-nbfc"
                    className="font-bold underline"
                  >
                    Gold Loan Auction Statutory Compliance
                  </Link>
                  , and{" "}
                  <Link
                    href="/online-dispute-resolution-india"
                    className="font-bold underline"
                  >
                    Online Dispute Resolution (ODR) India
                  </Link>{" "}
                  or launch directly via our{" "}
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="font-bold underline"
                  >
                    NBFC Legal Notice Desk
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Dual-Track B2B CTA */}
            <Section25NoticeCTA />

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  FAQs: Section 25 PSS Act for NBFCs &amp; Fintechs
                </h2>
              </div>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 p-4 cursor-pointer font-bold text-sm sm:text-base text-slate-900 list-none">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutes, NPCI Circulars &amp; Official Portals
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
              <p className="text-[11px] text-slate-500 mt-5 pt-4 border-t border-slate-100">
                Legal Commentary Reviewed by <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions. Statutory timelines reflect the Payment and Settlement Systems Act, 2007 and Chapter XVII of the Negotiable Instruments Act, 1881.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
