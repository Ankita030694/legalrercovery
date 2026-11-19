import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import LawFirmFeeTableOfContents from "./LawFirmFeeTableOfContents";
import LawFirmFeeScenarioTabs from "./LawFirmFeeScenarioTabs";
import LawFirmFeeCTA from "./LawFirmFeeCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/law-firm-litigation-counsel-ip-attorney-unpaid-corporate-fee-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const META_TITLE = "Law Firm & IP Attorney Fee Recovery (R.D. Saxena Safe)";
const META_DESCRIPTION =
  "Under R.D. Saxena (SC), advocates cannot hold case files—use CPC Order III Rule 4(2) court-leave discharge orders & Order 37 suits to recover fees.";
const EXACT_H1 =
  "How Law Firms, Counsel Chambers & Patent Attorneys Recover Corporate Fee Memos & Filing Disbursements Compliant With R.D. Saxena";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "Law firm litigation counsel and IP attorney corporate fee recovery under R.D. Saxena"
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
      "The Code of Civil Procedure, 1908 (Order III Rule 4(2) — Court-Leave Discharge of Pleader & Order XXXVII — Summary Suits for Liquidated Fee Memos)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Advocates Act, 1961 (Section 35 — Professional Misconduct & Bar Council Disciplinary Framework)",
    url: "https://www.indiacode.nic.in/handle/123456789/1631",
  },
  {
    title:
      "Bar Council of India Rules — Part VI, Chapter II (Standards of Professional Conduct and Etiquette: Rules 20, 28, 29 & 39)",
    url: "https://www.barcouncilofindia.org/",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 23, 69, 70, 73, 171 & 230 — Non-Gratuitous Services, Official Disbursement Reimbursement & No-Lien Scope)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Commercial Courts Act, 2015 (Section 2(1)(c), Section 12A Mandatory Pre-Institution Mediation & Specified Value Threshold)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Limitation Act, 1963 (Article 1, Article 113 & Section 18 — 3-Year Limitation Clock for Running Legal Bills & Written Acknowledgments)",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title:
      "The Patents Act, 1970 & Patents Rules, 2003 (Form 26 Power of Authority, Official CBR Disbursements & Address for Service Changes)",
    url: "https://www.indiacode.nic.in/handle/123456789/1392",
  },
  {
    title:
      "The Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of Electronic Engagement Emails, e-Courts Order Sheets & IPO CBR Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "No Right of Lien Over Client Case Files Under Contract Act Section 171",
    parties: "R.D. Saxena v. Balram Prasad Sharma",
    citation: "(2000) 7 SCC 264, Supreme Court of India",
    statute: "Indian Contract Act, 1872 s.171 & Advocates Act, 1961 s.35",
    facts:
      "An advocate representing a state-owned bank had his engagement terminated and refused to return the bank's litigation files until his pending remuneration bills were settled, asserting a professional lien under Section 171 of the Contract Act.",
    holding:
      "The Supreme Court held that case papers entrusted by a litigant are neither 'goods' capable of sale nor subject to any general or particular lien under Section 171. Refusal to hand back files on termination constitutes professional misconduct under Section 35 of the Advocates Act—though the advocate retains an unfettered right to recover unpaid fees through civil legal proceedings.",
    creditorTakeaway:
      "Never retain original pleadings, client title deeds, or prosecution files as leverage. Return all client-entrusted papers immediately against a signed Handover Inventory that explicitly reserves your claim to unpaid fee memos and official filing disbursements.",
  },
  {
    title: "Unconditional Return of Files Does Not Extinguish the Advocate's Civil Fee Claim",
    parties: "New India Assurance Co. Ltd. v. A.K. Saxena",
    citation: "(2004) 1 SCC 117, Supreme Court of India",
    statute: "Advocates Act, 1961 & Civil Recovery Jurisdiction",
    facts:
      "Following termination of panel empanelment by an insurance company, the advocate sought a judicial direction tying the handover of pending litigation briefs to payment of disputed outstanding bills.",
    holding:
      "Reaffirming R.D. Saxena, the Supreme Court held that while an advocate cannot withhold case files under any pretext, the High Court equally cannot summarily adjudicate disputed fee bills inside a collateral writ or handover proceeding; the advocate is fully entitled to prove and recover unpaid fees in an appropriate civil forum.",
    creditorTakeaway:
      "Separating file handover from fee recovery strengthens your civil suit. A clean, documented return of briefs eliminates every disciplinary counterclaim while clearing the deck for an Order XXXVII CPC summary suit or Commercial Court mediation.",
  },
  {
    title: "Contingency Fee Arrangements Violate BCI Rule 20 & Contract Act Section 23",
    parties: "B. Sunitha v. State of Telangana & Anr.",
    citation: "(2018) 1 SCC 638, Supreme Court of India",
    statute: "BCI Rules Part VI Ch. II Rule 20, Contract Act s.23 & NI Act s.138",
    facts:
      "An advocate took a cheque from a client representing a percentage share (16%) of the motor accident compensation decreed by the tribunal and initiated Section 138 NI Act proceedings when the cheque was dishonoured.",
    holding:
      "The Supreme Court quashed the Section 138 complaint, holding that a fee contingent on the percentage outcome of litigation violates Rule 20 of the Bar Council of India Rules and is void as opposed to public policy under Section 23 of the Contract Act—meaning a cheque drawn for a contingency percentage does not represent a 'legally enforceable debt'.",
    creditorTakeaway:
      "Structure every corporate engagement letter and counsel fee memo strictly on fixed per-hearing tariffs, milestone drafting slabs, hourly/retainer billing, or actual reimbursable disbursements—never as a percentage of court decree or settlement proceeds.",
  },
  {
    title: "Signed Corporate Balance Sheet Provisions Reset the 3-Year Limitation Clock",
    parties: "Asset Reconstruction Company (India) Ltd. v. Bishal Jaiswal & Anr.",
    citation: "(2021) 6 SCC 366, Supreme Court of India",
    statute: "Limitation Act, 1963 — Section 18 & Companies Act, 2013",
    facts:
      "A corporate debtor argued that overdue commercial claims were time-barred despite carrying the unpaid liability forward inside its audited financial statements filed under the Companies Act.",
    holding:
      "A 3-Judge Bench of the Supreme Court held that entries in a company's signed Balance Sheet acknowledging liability (unless accompanied by a clear caveat repudiating the debt) constitute a valid written acknowledgment under Section 18 of the Limitation Act, triggering a fresh 3-year limitation period.",
    creditorTakeaway:
      "Where a corporate client has deducted Section 194J TDS (visible in Form 26AS), booked GST under Reverse Charge Mechanism (RCM), or reflected 'Legal & Professional Fees Payable' in MCA AOC-4 filings, those statutory disclosures corroborate liability and defeat limitation objections.",
  },
  {
    title: "Mandatory Section 12A Pre-Institution Mediation for Non-Urgent Commercial Suits",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    statute: "Commercial Courts Act, 2015 — Section 12A & CPC Order VII Rule 11",
    facts:
      "A commercial creditor instituted a recovery suit above the statutory specified value without first initiating pre-institution mediation before the Legal Services Authority under Section 12A.",
    holding:
      "The Supreme Court held that Section 12A pre-institution mediation is mandatory for all commercial suits not contemplating urgent interim relief, and non-compliance renders the plaint liable to outright rejection under Order VII Rule 11 CPC.",
    creditorTakeaway:
      "When your corporate advisory, IP prosecution, or commercial retainer claim qualifies as a 'commercial dispute' of ₹3 Lakh or more, trigger DLSA/SLSA Section 12A mediation immediately after the 15-day Advocate Demand Notice—or plead documented asset-dissipation grounds if seeking urgent Order XXXVIII Rule 5 attachment.",
  },
  {
    title: "Post-Dated or Security Cheques Trigger NI Act Section 138 Once Fee Debt Crystallizes",
    parties: "Sripati Singh v. State of Jharkhand & Anr.",
    citation: "(2021) 18 SCC 135, Supreme Court of India",
    statute: "Negotiable Instruments Act, 1881 — Sections 138 & 139",
    facts:
      "A debtor challenged criminal cheque-bounce proceedings arguing that the cheques were merely issued as advance security and not against a crystallized debt.",
    holding:
      "The Supreme Court held that once a contracted liability matures and remains unpaid on the date of presentation, a cheque originally handed over as security becomes enforceable under Section 138 of the NI Act—provided the underlying fee contract itself is lawful.",
    creditorTakeaway:
      "For fixed corporate retainers or patent filing advances secured by post-dated cheques, presenting the cheque after written billing maturity unlocks Section 138 prosecution alongside up to 20% interim compensation under Section 143A NI Act.",
  },
];

const FAQS = [
  {
    question:
      "Can an Indian advocate or law firm withhold a client's case files or refuse an NOC until unpaid legal fees are cleared?",
    answer:
      "No. In R.D. Saxena v. Balram Prasad Sharma (2000) 7 SCC 264, the Supreme Court categorically held that client case files are not 'goods' under Section 171 of the Indian Contract Act and withholding them for unpaid fees is professional misconduct under Section 35 of the Advocates Act. You must return all client-entrusted papers immediately against a signed handover receipt, while protecting your unpaid bills through a formal CPC Order III Rule 4(2) discharge application and a separate civil recovery action.",
  },
  {
    question:
      "What is the difference between signing an unconditional Vakalatnama NOC and seeking Court-leave discharge under CPC Order III Rule 4(2)?",
    answer:
      "Signing an informal, unconditional 'No Objection' endorsement often invites the corporate client to argue later that past fee memos were settled or waived. By contrast, moving a formal discharge application under Order III Rule 4(2) CPC—serving prior written notice to the client and annexing your reconciled statement of unpaid appearance memos and court order-sheets—puts the unpaid legal fees formally on the judicial record. High Courts routinely grant leave to discharge while explicitly recording that outgoing counsel's civil recovery rights for unpaid fees remain preserved.",
  },
  {
    question:
      "Can a law firm or arguing counsel file an Order XXXVII CPC Summary Suit for unpaid appearance fee memos?",
    answer:
      "Yes, provided the fee claim rests on a written contract or liquidated written admission—such as a signed Engagement Letter / Fee Schedule email accepted by the corporate client, confirmed appearance fee memos corroborated by certified Court Order-Sheets, or dishonoured fee cheques. Where the per-hearing tariff was never agreed in writing, an ordinary recovery suit under Section 70 of the Contract Act (reasonable remuneration / quantum meruit) or Commercial Court Section 12A mediation is safer than risking unconditional leave to defend under Order XXXVII.",
  },
  {
    question:
      "How can patent and trademark attorneys recover official IPO government fee disbursements advanced on a client's behalf?",
    answer:
      "Official government fees paid to the Indian Patent Office (IPO) or Trade Marks Registry (TMR)—such as PCT national-phase entry fees, excess claim charges, examination requests, or annuities—are pure out-of-pocket disbursements backed by government Cash Book Receipts (CBRs) linked directly to the client's application number. Unlike contested professional valuations, CBR-backed disbursements paid on written email instruction are liquidated debts recoverable via Order XXXVII CPC and Indian Contract Act Sections 69 and 70, even if the client changes Form 26 / TM-48 Power of Authority.",
  },
  {
    question:
      "Does a corporate client's GST Reverse Charge (RCM) filing or Form 26AS Section 194J TDS credit help prove unpaid advocate fees?",
    answer:
      "Yes, decisively. Under GST Notification No. 13/2017-Central Tax (Rate), legal services supplied by individual advocates, senior advocates, or partnership firms of advocates to business entities fall under Reverse Charge Mechanism (RCM), while corporate clients also deduct 10% TDS under Section 194J of the Income Tax Act upon crediting fee memos. When Form 26AS reflects TDS deposited against your PAN or the company books legal expenses in its audited accounts, it provides third-party statutory proof neutralizing any claim that appearances were unauthorized or disputed.",
  },
  {
    question:
      "What is the limitation period for recovering unpaid legal fees in multi-year litigation or ongoing patent prosecution?",
    answer:
      "Under Article 113 of the Limitation Act, 1963 (the residuary 3-year rule generally applied to professional legal fee claims where no single fixed completion date governs), limitation runs for 3 years from the date each invoice/fee memo falls due or when the right to sue accrues—unless a continuous mutual, open, and current account exists under Article 1, or the corporate client signs a written debt acknowledgment / part-payment under Sections 18 and 19 of the Limitation Act.",
  },
  {
    question:
      "Are contingency or success-based litigation fees legally recoverable by Indian law firms?",
    answer:
      "No. Rule 20, Part VI, Chapter II of the Bar Council of India Rules strictly prohibits advocates from stipulating a fee contingent on the results of litigation or agreeing to share in the proceeds thereof. As confirmed by the Supreme Court in B. Sunitha v. State of Telangana (2018) 1 SCC 638, percentage-of-outcome litigation fees are void under Section 23 of the Contract Act and cannot even sustain a Section 138 NI Act cheque-bounce prosecution. Law firms must bill strictly on fixed appearance, drafting, milestone, retainer, or disbursement schedules.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    name: "Law Firm, Arguing Counsel & IP Attorney Corporate Fee Recovery Under R.D. Saxena, CPC Order III Rule 4(2) & Order XXXVII",
  },
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
      name: "CAs, Architects & Advisors Fee Recovery Hub",
      item: `${SITE_URL}/industries/ca-architects-consultants-professional-fee-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Law Firm & IP Attorney Fee Recovery",
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

export default function LawFirmLitigationIpAttorneyFeeRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "CAs, Architects & Advisors Fee Recovery Hub",
      href: "/industries/ca-architects-consultants-professional-fee-recovery",
    },
    {
      label: "Law Firm & IP Attorney Fee Recovery",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-23 · Annotated Statute &amp; Precedent Guide</span>
            <span className="text-red-500/70">&bull;</span>
            <span>R.D. Saxena &middot; CPC Order III R.4(2) &middot; Order XXXVII</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            How Law Firms, Counsel Chambers &amp; Patent Attorneys Recover Corporate Fee Memos &amp; Filing Disbursements Compliant With <em>R.D. Saxena</em>
          </h1>

          {/* 40-60 word Executive Statutory Summary Box with inline Hub link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Statutory Summary
            </span>
            Under <em>R.D. Saxena v. Balram Prasad Sharma</em> (SC), advocates cannot exercise a Section 171 Contract Act lien over client files. Instead, law firms, arguing chambers, and patent attorneys inside our{" "}
            <Link
              href="/industries/ca-architects-consultants-professional-fee-recovery"
              className="text-red-300 underline decoration-red-400/70 underline-offset-2 hover:text-white font-semibold"
            >
              Professional Services Fee Recovery Hub
            </Link>{" "}
            protect ₹10L–₹80L arrears via CPC Order III Rule 4(2) court-leave discharge fee-recording orders, IPO CBR disbursement proofs, and Order XXXVII CPC summary suits.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="min-w-0">
              <p className="text-lg sm:text-xl md:text-2xl font-black text-red-400">Zero File Lien</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                <em>R.D. Saxena</em> (2000) 7 SCC 264 Mandate
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400">Order III R.4(2)</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Court-Leave Discharge Recording Unpaid Fees
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-lg sm:text-xl md:text-2xl font-black text-amber-400">Order XXXVII</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Summary Suit for Written Fee Memos &amp; CBRs
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-100">3 Years</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Limitation Act Art. 113 (Reset via s.18)
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-slate-400">
            <span>
              Authored by <strong className="text-slate-200">Anuj Anand Malik</strong> (Advocate &amp; Founder, AMA Legal Solutions)
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Updated: 19 November 2026</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Perspective: Managing Partner, Counsel Chambers &amp; IP Attorney (Creditor-Side)</span>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-4 sm:mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Sticky Left TOC */}
          <LawFirmFeeTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-rd-saxena-rule"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why R.D. Saxena Bars File Liens Under Contract Act s.171
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Corporate litigants and overseas IP associates exploit an asymmetric leverage trap in Indian legal practice: they accumulate ₹10 Lakh to ₹80 Lakh across commercial litigation appearance memos, interlocutory injunction hearings, or PCT national-phase patent filings, and then abruptly switch law firms right before final arguments or patent grant. Because Indian advocates operate under strict Bar Council of India (BCI) disciplinary supervision, many managing partners and chamber clerks either freeze out of ethical anxiety or commit the single most dangerous tactical error—withholding the client&rsquo;s physical case files, title deeds, or issued trademark certificates to compel settlement.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                In <strong><em>R.D. Saxena v. Balram Prasad Sharma</em>, (2000) 7 SCC 264</strong>, the Supreme Court permanently foreclosed any claim of a professional lien over litigation records. Interpreting <strong>Section 171 of the Indian Contract Act, 1872</strong> (general lien of bankers, factors, wharfingers, attorneys of a High Court, and policy-brokers), the Court held that the statutory phrase &ldquo;goods bailed to them&rdquo; contemplates marketable goods capable of sale under the Sale of Goods Act. Case files, court pleadings, client vouchers, and prosecution dossiers entrusted to an advocate are not commercial &ldquo;goods&rdquo;—and holding them hostage to extract unpaid remuneration constitutes professional misconduct punishable under <strong>Section 35 of the Advocates Act, 1961</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h3 className="text-sm font-extrabold text-[#DC2626] mb-1.5">
                    Strictly Prohibited Under R.D. Saxena &amp; BCI Rules
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 list-disc pl-4">
                    <li>Retaining original client title deeds, board resolutions, or certified court orders until fee arrears are paid.</li>
                    <li>Refusing to return digital brief bundles, prosecution histories, or original Letters Patent / Registration Certificates.</li>
                    <li>Unilaterally abandoning an urgent statutory court hearing or IPO deadline without prior formal notice and Court leave.</li>
                    <li>Claiming a percentage share of the litigation decree or arbitral award (barred by BCI Rule 20 &amp; Contract Act s.23).</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <h3 className="text-sm font-extrabold text-emerald-800 mb-1.5">
                    Expressly Preserved Creditor Recovery Rights
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 list-disc pl-4">
                    <li>Full civil right to sue for unpaid professional fees and out-of-pocket disbursements (<em>New India Assurance v. A.K. Saxena</em>).</li>
                    <li>Retaining your own internal chamber work-product notes, billing ledgers, copies of filed pleadings, and court order-sheets.</li>
                    <li>Moving a formal <strong>CPC Order III Rule 4(2)</strong> discharge application putting unpaid fee memos directly on judicial record.</li>
                    <li>Recovering undisputed written fee schedules and official IPO CBR receipts via{" "}
                      <Link
                        href="/law/order-37-summary-suit-money-recovery"
                        className="text-emerald-900 font-bold underline underline-offset-2 hover:text-[#DC2626]"
                      >
                        Order XXXVII CPC Summary Suits
                      </Link>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="heading-order-iii-discharge"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  CPC Order III Rule 4(2): Putting Unpaid Fees on Court Record
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                When a corporate client decides to switch litigation firms mid-trial, the incoming law firm almost always calls your chamber seeking an immediate, unconditional &ldquo;No Objection&rdquo; signature on a fresh Vakalatnama. Signing an unqualified NOC without a contemporaneous fee-preservation record hands the defaulting promoter an immediate narrative: that past bills were settled, discounted, or waived at exit.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The statutory shield built into the <strong>Code of Civil Procedure, 1908</strong> is <strong>Order III Rule 4(2)</strong>. Under this provision, an advocate&rsquo;s appointment via Vakalatnama continues in force until determined <em>with the leave of the Court</em> by a writing signed by the client or the pleader and filed in Court. High Court Original Side Rules (including Delhi, Bombay, Calcutta, and Madras High Courts) as well as Supreme Court Rules, 2013 enforce strict procedural checks before a new counsel can supersede an Advocate-on-Record without consent.
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                  Judicial Record Mechanics · Order III Rule 4(2) CPC
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
                  Instead of blocking file handover (illegal under <em>R.D. Saxena</em>) or signing a silent NOC (commercially fatal), outgoing counsel serves a formal written intimation returning all client briefs and simultaneously moves an <strong>Interlocutory Application (IA) for Discharge under Order III Rule 4(2) CPC</strong>. The application annexes: (1) the signed Vakalatnama, (2) certified Court Order-Sheets proving every date of appearance, (3) unpaid appearance fee memos &amp; engagement emails, and (4) the courier/handover receipt confirming 100% file return.
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-emerald-300 font-medium">
                  <strong>Creditor Payoff:</strong> Even though the Court grants leave to discharge so the litigant&rsquo;s representation continues smoothly, the Court&rsquo;s discharge order formally records outgoing counsel&rsquo;s statement of unpaid dues &ldquo;without prejudice to appropriate civil recovery proceedings.&rdquo; When your external recovery counsel subsequently files an Order XXXVII suit or Section 12A mediation claim, that judicial discharge order destroys any post-hoc corporate fabrication that your firm &ldquo;abandoned the brief&rdquo; or &ldquo;never raised bills.&rdquo;
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="heading-statute-timelines"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Bare-Act Limitation Stops &amp; Notice Timelines for Legal Fees
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Litigation and patent prosecution frequently stretch across 3 to 6 years. Law firm partners routinely lose 30%–50% of older appearance memos because they wait for the final judgment before pressing arrears—allowing early bills to expire under the <strong>Limitation Act, 1963</strong>. Use this exact bare-act timeline matrix and verify exact cut-offs via our{" "}
                <Link
                  href="/tools/limitation-period-calculator"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-slate-900"
                >
                  Limitation Period Calculator
                </Link>{" "}
                and{" "}
                <Link
                  href="/tools/cheque-bounce-deadline-calculator"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-slate-900"
                >
                  Cheque Bounce Deadline Calculator
                </Link>
                .
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold">Statutory Clock / Provision</th>
                      <th className="py-3 px-4 font-bold">Exact Window</th>
                      <th className="py-3 px-4 font-bold">Trigger Event</th>
                      <th className="py-3 px-4 font-bold">Creditor Law Firm Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Limitation Act, 1963 — Article 113 (Residuary Suit)
                      </td>
                      <td className="py-3 px-4 font-bold text-[#DC2626]">3 Years</td>
                      <td className="py-3 px-4 text-slate-700">
                        Date each invoice / fee memo becomes due, or termination of Vakalatnama for lump-sum brief.
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Obtain written fee reconciliation or Section 18 Balance Confirmation before Month 30; never wait for final appeal disposal.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Limitation Act — Section 18 &amp; Section 19 Reset
                      </td>
                      <td className="py-3 px-4 font-bold text-emerald-700">Fresh 3 Years</td>
                      <td className="py-3 px-4 text-slate-700">
                        Written email acknowledgment, part-payment via RTGS/NEFT, or Balance Sheet provision (<em>Bishal Jaiswal</em>).
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Capture Form 26AS s.194J TDS credits and annual email ledger confirmations to keep multi-year retainers alive.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        NI Act, 1881 — Section 138(b) &amp; (c) / s.142
                      </td>
                      <td className="py-3 px-4 font-bold text-[#DC2626]">30d &rarr; 15d &rarr; 30d</td>
                      <td className="py-3 px-4 text-slate-700">
                        30 days from cheque return memo to serve demand notice; 15 days cure window; 30 days to file criminal complaint.
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Applies strictly to fixed retainer/disbursement cheques—never contingency percentage cheques (<em>B. Sunitha</em>).
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Commercial Courts Act, 2015 — Section 12A
                      </td>
                      <td className="py-3 px-4 font-bold text-amber-700">3 Months (+2 Mo)</td>
                      <td className="py-3 px-4 text-slate-700">
                        Mandatory Pre-Institution Mediation for commercial disputes &ge; ₹3 Lakh without urgent interim relief.
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Time spent in Section 12A mediation is statutorily excluded from the 3-year limitation calculation.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Order XXXVII CPC — Rule 3(1) &amp; Rule 3(5)
                      </td>
                      <td className="py-3 px-4 font-bold text-emerald-700">10d Appearance / 10d Leave</td>
                      <td className="py-3 px-4 text-slate-700">
                        Defendant has 10 days to enter appearance after summons and 10 days after summons for judgment to seek leave to defend.
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Default in entering appearance entitles the law firm to an immediate decree without prolonged oral trial.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Order III Rule 4(2) CPC — Prior Notice of Discharge
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-900">7 – 15 Days</td>
                      <td className="py-3 px-4 text-slate-700">
                        Reasonable advance written notice to corporate client before moving Court-leave discharge application.
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Include next date of hearing (NDOH) and pending filing deadlines so the client suffers zero prejudice.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 — SVG Workflow + Mobile Cards */}
            <section
              id="heading-noc-flowchart"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Conditional vs Unconditional NOC: 5-Step Discharge Protocol
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                A Bar Council-proof recovery requires strict separation between <em>returning client property</em> (mandatory and immediate) and <em>extinguishing fee rights</em> (never automatic). Follow this five-stage protocol whenever a corporate client demands a Vakalatnama NOC or Form 26 / TM-48 substitution while bills remain unpaid.
              </p>

              {/* Desktop SVG Diagram */}
              <div className="hidden md:block bg-slate-950 rounded-2xl p-6 border border-slate-800 overflow-x-auto">
                <svg
                  viewBox="0 0 920 260"
                  width="920"
                  height="260"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-step R.D. Saxena compliant Vakalatnama discharge and corporate fee recovery workflow"
                >
                  <defs>
                    <marker
                      id="arrowRed"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Step 1 */}
                  <rect x="12" y="34" width="156" height="152" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="12" y="34" width="156" height="28" rx="14" fill="#DC2626" />
                  <text x="90" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STEP 1 · DAY 1</text>
                  <text x="90" y="84" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">File Return +</text>
                  <text x="90" y="100" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">Handover Receipt</text>
                  <text x="90" y="124" textAnchor="middle" fill="#CBD5E1" fontSize="10">Return all client files</text>
                  <text x="90" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10">&amp; NDOH diary sheet.</text>
                  <text x="90" y="152" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="700">100% R.D. Saxena Safe</text>

                  <line x1="168" y1="110" x2="196" y2="110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                  {/* Step 2 */}
                  <rect x="200" y="34" width="156" height="152" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="200" y="34" width="156" height="28" rx="14" fill="#475569" />
                  <text x="278" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STEP 2 · DAY 3</text>
                  <text x="278" y="84" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">Fee Ledger &amp;</text>
                  <text x="278" y="100" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">Order-Sheet Audit</text>
                  <text x="278" y="124" textAnchor="middle" fill="#CBD5E1" fontSize="10">Segregate Professional</text>
                  <text x="278" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10">Fees vs IPO CBR Govt</text>
                  <text x="278" y="152" textAnchor="middle" fill="#CBD5E1" fontSize="10">Disbursements + 26AS.</text>

                  <line x1="356" y1="110" x2="384" y2="110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                  {/* Step 3 */}
                  <rect x="388" y="34" width="156" height="152" rx="14" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <rect x="388" y="34" width="156" height="28" rx="14" fill="#DC2626" />
                  <text x="466" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STEP 3 · DAY 7</text>
                  <text x="466" y="84" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">Order III R.4(2)</text>
                  <text x="466" y="100" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">Discharge Motion</text>
                  <text x="466" y="124" textAnchor="middle" fill="#CBD5E1" fontSize="10">Seek Court leave &amp;</text>
                  <text x="466" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10">record unpaid dues</text>
                  <text x="466" y="152" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="700">Judicial Record Lock</text>

                  <line x1="544" y1="110" x2="572" y2="110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                  {/* Step 4 */}
                  <rect x="576" y="34" width="156" height="152" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="576" y="34" width="156" height="28" rx="14" fill="#475569" />
                  <text x="654" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STEP 4 · DAY 10</text>
                  <text x="654" y="84" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">External Counsel</text>
                  <text x="654" y="100" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">15-Day Notice</text>
                  <text x="654" y="124" textAnchor="middle" fill="#CBD5E1" fontSize="10">Serve GC &amp; Directors</text>
                  <text x="654" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10">via Email + WhatsApp</text>
                  <text x="654" y="152" textAnchor="middle" fill="#CBD5E1" fontSize="10">+ RPAD (Order 37/12A).</text>

                  <line x1="732" y1="110" x2="760" y2="110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                  {/* Step 5 */}
                  <rect x="764" y="34" width="144" height="152" rx="14" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <rect x="764" y="34" width="144" height="28" rx="14" fill="#059669" />
                  <text x="836" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STEP 5 · DAY 26+</text>
                  <text x="836" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Summary Suit /</text>
                  <text x="836" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">s.12A / s.138</text>
                  <text x="836" y="124" textAnchor="middle" fill="#D1FAE5" fontSize="10">Order XXXVII Decree,</text>
                  <text x="836" y="138" textAnchor="middle" fill="#D1FAE5" fontSize="10">s.12A Mediation or</text>
                  <text x="836" y="152" textAnchor="middle" fill="#D1FAE5" fontSize="10">s.138/143A NI Act.</text>

                  <text x="460" y="228" textAnchor="middle" fill="#94A3B8" fontSize="11">
                    Key Principle: Never sign a blanket &ldquo;No Dues&rdquo; NOC — either issue a &ldquo;Without Prejudice to Unpaid Bills of ₹X&rdquo; NOC or obtain an Order III Rule 4(2) Judicial Discharge Order.
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Protocol Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "01 · Day 1",
                    title: "Immediate File Return + Signed Handover Receipt",
                    desc: "Return all client-owned files, original documents, and NDOH calendar diary immediately so your chamber stays 100% compliant with R.D. Saxena.",
                  },
                  {
                    step: "02 · Day 3",
                    title: "Segregate Professional Fees vs Official CBR Disbursements",
                    desc: "Compile certified Court Order-Sheets, IPO/TMR CBR receipts, engagement emails, and Form 26AS s.194J TDS credits.",
                  },
                  {
                    step: "03 · Day 7",
                    title: "Move CPC Order III Rule 4(2) Discharge Application",
                    desc: "Seek formal leave of the Court to be discharged while placing your reconciled unpaid fee schedule on judicial record 'without prejudice'.",
                  },
                  {
                    step: "04 · Day 10",
                    title: "External Counsel 15-Day Statutory Demand Notice",
                    desc: "Instruct independent recovery counsel to serve Directors and General Counsel via Email, WhatsApp, and Speed Post RPAD.",
                  },
                  {
                    step: "05 · Day 26+",
                    title: "Escalate to Order XXXVII CPC, s.12A Mediation or NI s.138",
                    desc: "File an Order XXXVII summary suit for written fee memos/CBRs, DLSA s.12A mediation for commercial retainers, or s.138 for bounced cheques.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      Step {item.step}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-700 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 — Verified Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Supreme Court &amp; High Court Precedents on Advocate Fee Suits
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Corporate legal departments routinely misquote <em>R.D. Saxena</em> as though it prevents lawyers from recovering fees at all. In reality, six binding Supreme Court authorities create a clear statutory corridor for law firms, arguing chambers, and IP attorneys to enforce liquidated fee memos and out-of-pocket filing disbursements.
              </p>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="pl-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.statute}
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-slate-600 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                          {item.citation}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                        {item.parties} — {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                        <strong>Facts &amp; Holding:</strong> {item.facts} {item.holding}
                      </p>
                      <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs sm:text-sm text-slate-800">
                        <strong className="text-emerald-700">Creditor Law Firm Takeaway:</strong>{" "}
                        {item.creditorTakeaway}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6 — Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Corporate, Counsel &amp; Patent Fee Default Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select the exact legal practice bottleneck below—whether a commercial litigant switching Vakalatnamas before final arguments, an unpaid PCT patent disbursement, Senior Counsel hearing memos, or a defaulting foreign IP associate—to inspect the statutory leverage and 4-step creditor escalation sequence.
              </p>

              <LawFirmFeeScenarioTabs />
            </section>

            {/* Section 7 — IP Govt Disbursements vs Professional Fees */}
            <section
              id="heading-ip-disbursements"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Patent &amp; Trademark Govt Fee Disbursements vs Professional Fees
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Patent and trademark boutiques face a far sharper cash-flow hemorrhage than pure advisory practices: every PCT national-phase entry, excess claim sheet, Form 18 Request for Examination, or multi-class trademark opposition requires immediate online outflow from the firm&rsquo;s own bank account to the Controller General of Patents, Designs &amp; Trade Marks (CGPDTM). Separating <strong>Official Statutory Disbursements</strong> from <strong>Professional Prosecution Fees</strong> dramatically accelerates summary recovery.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold">Billing Component</th>
                      <th className="py-3 px-4 font-bold">Governing Statute &amp; Proof</th>
                      <th className="py-3 px-4 font-bold">Order XXXVII Readiness</th>
                      <th className="py-3 px-4 font-bold">Client Substitution / Lien Rule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Official IPO / TMR Govt Filing Fees (PCT, Form 18, Annuities)
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Contract Act ss.69 &amp; 70 + Written Filing Instruction Email + Official IPO/TMR CBR Receipt showing Application No.
                      </td>
                      <td className="py-3 px-4 font-bold text-emerald-700">
                        Very High (Liquidated Out-of-Pocket Debt)
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Client may file fresh Form 26 / Form 13 (change of address for service), but CBR proves 100% hard cash outflow on client&rsquo;s behalf.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Fixed Litigation Appearance &amp; Drafting Fee Memos
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Signed Engagement Letter / Fee Schedule + Certified e-Courts Order-Sheets + Form 26AS s.194J TDS
                      </td>
                      <td className="py-3 px-4 font-bold text-emerald-700">
                        High (When Tariff Agreed in Writing)
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Must return client papers immediately; record unpaid memos via Order III Rule 4(2) CPC discharge motion.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Monthly Corporate Legal Retainerships (SAC 998211)
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Retainer Agreement + Monthly Deliverable Logs + Prior Paid Retainer Bank Trail + GST RCM
                      </td>
                      <td className="py-3 px-4 font-bold text-emerald-700">
                        High (Fixed Periodic Sum)
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Enforce notice-period lock-in &amp; undisputed monthly slabs; verify whether firm holds MSME Udyam registration for non-advocate IP/advisory entities.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Unquoted / Open-Ended Appearance or Advisory Time-Sheets
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Indian Contract Act s.70 (Quantum Meruit) + Preceding Paid Invoices Establishing Rate
                      </td>
                      <td className="py-3 px-4 font-bold text-amber-700">
                        Moderate (Risk of Leave to Defend)
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Route via Commercial Court s.12A Mediation + Ordinary Commercial Recovery Suit rather than pure Order XXXVII if rate was never accepted in writing.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
                <strong>Important Tax &amp; MSME Distinction:</strong> Legal services rendered by an individual advocate, senior advocate, or partnership firm of advocates to a business entity (turnover above GST threshold) attract <strong>GST under Reverse Charge Mechanism (RCM)</strong> per Notification No. 13/2017-CT(R)—meaning the corporate client pays GST directly to the exchequer rather than to the firm. By contrast, non-advocate corporate IP consulting companies or registered patent-agent firms billing under forward charge may additionally evaluate{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="font-bold text-amber-900 underline underline-offset-2 hover:text-[#DC2626]"
                >
                  MSME Delayed Payment Interest (3x RBI Bank Rate)
                </Link>{" "}
                where Udyam registration predated the engagement contract.
              </div>
            </section>

            {/* Section 8 — Worked Financial Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Recovery Ledger: ₹28.4L Litigation &amp; Patent Arrears
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a real-world commercial dispute where a mid-sized Mumbai/Delhi IP &amp; Commercial Litigation Law Firm represented a pharmaceutical company across a High Court patent infringement suit and 11 PCT national-phase filings. Two weeks before final arguments, the company switches Vakalatnamas leaving ₹28,40,000 unpaid. Here is how structuring the claim into legally watertight heads unlocks rapid settlement:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                      Illustrative Creditor Statement of Account
                    </p>
                    <p className="text-base sm:text-lg font-extrabold text-white">
                      Total Crystallized Claim: ₹28,40,000 + Statutory Interest
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                    Forum: Commercial Court (s.12A &rarr; Order XXXVII)
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-700 text-slate-300">
                        <th className="py-2.5 pr-4 font-bold">Claim Head</th>
                        <th className="py-2.5 pr-4 font-bold">Primary Evidence Anchor</th>
                        <th className="py-2.5 text-right font-bold">Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      <tr>
                        <td className="py-2.5 pr-4 text-slate-100 font-semibold">
                          1. Official IPO National-Phase &amp; Excess Claim Govt Fees (11 Filings)
                        </td>
                        <td className="py-2.5 pr-4 text-slate-300">
                          Written Filing Emails + 11 Official IPO CBR Receipts + Bank Debit Trail
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-emerald-400">
                          ₹9,60,000
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 text-slate-100 font-semibold">
                          2. High Court Interim &amp; Trial Appearance Memos (16 Effective Hearings @ ₹75,000)
                        </td>
                        <td className="py-2.5 pr-4 text-slate-300">
                          Signed Engagement Schedule + 16 Certified HC Order-Sheets + Order III R.4(2) Record
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-emerald-400">
                          ₹12,00,000
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 text-slate-100 font-semibold">
                          3. Settled Written Submissions, Replication &amp; Affidavits of Evidence
                        </td>
                        <td className="py-2.5 pr-4 text-slate-300">
                          Court Filing Stamps + Email Approval from General Counsel + Form 26AS 194J Entry
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-emerald-400">
                          ₹4,80,000
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 text-slate-100 font-semibold">
                          4. Reimbursable Senior Counsel Briefing &amp; Court Fee Stamps Advanced
                        </td>
                        <td className="py-2.5 pr-4 text-slate-300">
                          e-Stamp Court Fee Receipts + Approved Conference Memos
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-emerald-400">
                          ₹2,00,000
                        </td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="py-3 pr-4 font-extrabold text-white">
                          Principal Unpaid Arrears (Zero Contingency Component)
                        </td>
                        <td className="py-3 pr-4 text-slate-300">
                          100% Liquidated &amp; BCI Rule 20 Compliant
                        </td>
                        <td className="py-3 text-right font-mono font-black text-white">
                          ₹28,40,000
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 text-amber-300 font-semibold">
                          Pre-Suit Commercial Interest @ 12% p.a. (14 Months Overdue, Interest Act 1978 s.3 / CPC s.34)
                        </td>
                        <td className="py-2.5 pr-4 text-slate-300">
                          Contractual Interest Clause / Written Demand Notice Trigger
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-amber-300">
                          ₹3,97,600
                        </td>
                      </tr>
                      <tr className="border-t-2 border-[#DC2626]">
                        <td className="py-3 pr-4 font-black text-red-400">
                          Total Demand Notice &amp; Summary Suit Valuation
                        </td>
                        <td className="py-3 pr-4 text-slate-300">
                          Backed by BSA 2023 s.63 Electronic Certificate + Order III R.4(2) Discharge Order
                        </td>
                        <td className="py-3 text-right font-mono font-black text-red-400 text-base">
                          ₹32,37,600
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 9 — Debtor Defense Pre-Emption Table */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Debtor Defense Pre-Emption Matrix for Corporate Fee Suits
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Corporate legal teams and defaulting promoters rely on six predictable defenses when served with a law firm&rsquo;s fee demand notice. Neutralizing each defense upfront inside your external recovery notice prevents the debtor from obtaining unconditional leave to defend under Order XXXVII Rule 3(5) CPC.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold">Corporate Debtor&rsquo;s Excuse</th>
                      <th className="py-3 px-4 font-bold">Why It Fails Under Indian Law</th>
                      <th className="py-3 px-4 font-bold">Pre-Emptive Creditor Counter-Proof</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;We lost the interim stay / adverse court order means poor service.&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Advocacy is a best-efforts professional obligation, not a guarantee of judicial outcome (indeed, outcome-linked fees are illegal under BCI Rule 20).
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Cite certified Court Order-Sheets showing regular diligent appearances, written submissions filed on time, and zero contemporaneous quality objection emails.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;You gave an NOC / discharged Vakalatnama, so old bills stand waived.&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Under <em>R.D. Saxena</em> &amp; <em>A.K. Saxena</em>, returning files and stepping aside is a mandatory ethical duty—never an implied waiver under Contract Act s.63.
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Exhibit the Handover Inventory + Order III Rule 4(2) Court Discharge Order explicitly preserving civil recovery rights for quantified arrears.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;No formal stamped fee agreement was signed by the Board.&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Email acceptance of a fee schedule plus accepted appearances establishes a binding written contract—and Contract Act s.70 bars enjoying non-gratuitous services for free.
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Attach signed Vakalatnama / Form 26, email tariff trail, prior cleared invoices at identical rates, and Form 26AS s.194J TDS credits.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;The instructing law firm (not our company) engaged the Senior Counsel.&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Under Contract Act s.230 &amp; s.70, where a disclosed corporate principal receives Senior Counsel&rsquo;s representation in open court, liability cannot vanish between principal and agent.
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Send joint notice to both General Counsel and instructing firm annexing conference emails copying the client and Court Order-Sheets recording appearance for the company.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;Earlier appearance memos from 2023 are time-barred.&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Written email acknowledgments, part-payments, or audited Balance Sheet provisions reset limitation under Sections 18 &amp; 19 of the Limitation Act (<em>Bishal Jaiswal</em>).
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Trace part-payments against running ledger, MCA AOC-4 payables, and latest email promises to clear consolidated account.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        &ldquo;We will file a Bar Council complaint for professional misconduct.&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Retaliatory BCI complaints fail instantly when files were returned cleanly without lien, client confidences are protected, and recovery is handled through lawful civil process.
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Instruct independent external counsel to issue an objective, non-threatening demand notice strictly excluding privileged case strategy communications.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10 — Evidence Checklist & Cluster Links */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Vakalatnama, Appearance Sheets &amp; BSA 2023 s.63 Proof Kit
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Because modern corporate engagements, fee approvals, e-Courts appearance orders, and IPO filing receipts are predominantly electronic, every digital exhibit must be bundled with a compliant <strong>Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> certificate (replacing Section 65B Evidence Act) before instituting pre-litigation mediation or an Order XXXVII suit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "1. Mandate & Authority Proof",
                    detail:
                      "Signed Vakalatnama, Board Resolution authorizing litigation, Engagement Letter / Email Fee Tariff, or signed IPO Form 26 / TMR Form TM-48 Power of Authority.",
                  },
                  {
                    title: "2. Independent Judicial & Registry Proof",
                    detail:
                      "Certified / downloaded e-Courts Daily Order-Sheets listing counsel's appearance, NCLT/Tribunal attendance memos, and Official IPO/TMR CBR receipts for every government fee paid.",
                  },
                  {
                    title: "3. Clean Exit & R.D. Saxena Shield",
                    detail:
                      "Itemized File Handover Receipt (signed or RPAD/courier delivered), NDOH deadline reminder email, and certified copy of CPC Order III Rule 4(2) Discharge Order.",
                  },
                  {
                    title: "4. Tax, Ledger & BSA s.63 Anchors",
                    detail:
                      "Form 26AS / AIS showing Section 194J TDS credits, historical paid invoice bank trail, unobjected email reminders, and a signed BSA 2023 s.63 Hash/Device Certificate.",
                  },
                ].map((box) => (
                  <div
                    key={box.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">{box.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{box.detail}</p>
                  </div>
                ))}
              </div>

              {/* Mandatory Internal Cross-Links Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-3">
                  Connected IND-23 Professional Recovery Guides, Tools &amp; Templates
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <Link
                    href="/industries/ca-architects-consultants-professional-fee-recovery"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors"
                  >
                    <span className="font-bold text-slate-900 block">
                      Professional Services Fee Recovery Pillar Hub &rarr;
                    </span>
                    <span className="text-slate-600 text-xs">
                      Parent IND-23 hub for CAs, Law Firms, Architects, Engineers &amp; Advisory mandates.
                    </span>
                  </Link>
                  <Link
                    href="/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors"
                  >
                    <span className="font-bold text-slate-900 block">
                      CA Unpaid Audit Fee &amp; ICAI Clause (8) Recovery &rarr;
                    </span>
                    <span className="text-slate-600 text-xs">
                      How Chartered Accountants apply R.D. Saxena &amp; ICAI Chapter VII without holding books.
                    </span>
                  </Link>
                  <Link
                    href="/architect-interior-consultant-stage-fee-gfc-drawing-copyright-recovery"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors"
                  >
                    <span className="font-bold text-slate-900 block">
                      Architect Stage Fees &amp; GFC Drawing Copyright &rarr;
                    </span>
                    <span className="text-slate-600 text-xs">
                      COA Regulation 2(1)(xii) NOC protocol and Copyright Act s.51/s.59 remedies.
                    </span>
                  </Link>
                  <Link
                    href="/recovery/consultancy-fees"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors"
                  >
                    <span className="font-bold text-slate-900 block">
                      Consultancy &amp; Advisory Retainer Recovery &rarr;
                    </span>
                    <span className="text-slate-600 text-xs">
                      End-to-end pre-litigation legal notice workflow for B2B professional fee arrears.
                    </span>
                  </Link>
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors"
                  >
                    <span className="font-bold text-slate-900 block">
                      IP &amp; Copyright Ownership Before Full Payment &rarr;
                    </span>
                    <span className="text-slate-600 text-xs">
                      Statutory boundaries on creative/drafting copyright vs client-owned filings.
                    </span>
                  </Link>
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors"
                  >
                    <span className="font-bold text-slate-900 block">
                      Advocate Legal Notice &amp; Reply Workspace &rarr;
                    </span>
                    <span className="text-slate-600 text-xs">
                      Interactive P1 template studio plus{" "}
                      <span className="underline">MSME Delayed Payment Notice</span> formats.
                    </span>
                  </Link>
                </div>
                <p className="mt-3 text-xs text-slate-600">
                  For non-advocate corporate IP consulting firms registered under Udyam, also check our{" "}
                  <Link
                    href="/templates/msme-delayed-payment-demand-notice"
                    className="text-[#DC2626] font-semibold underline underline-offset-2"
                  >
                    MSME Delayed Payment Demand Notice Template
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="text-[#DC2626] font-semibold underline underline-offset-2"
                  >
                    Order 37 Summary Suit Money Recovery Guide
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 11 — Dual-Track CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Initiate an Ethics-Safe Counsel Fee Notice or Law Firm Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Instructing independent external recovery counsel creates an immediate institutional buffer: your managing partners and arguing counsel never have to personally spar with defaulting promoters over overdue bills, while the corporate Board receives a crisp, <em>R.D. Saxena</em>-compliant demand citing Order III Rule 4(2) discharge records, IPO CBR disbursements, and Order XXXVII CPC summary escalation.
              </p>

              <LawFirmFeeCTA />
            </section>

            {/* Section 12 — Practitioner FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  FAQs: R.D. Saxena, Vakalatnama NOC &amp; Order 37 Fee Suits
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="list-none flex items-center justify-between gap-4 cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-mono text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 13 — Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  13
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutes, BCI Rules &amp; Official Judicial Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li
                    key={source.title}
                    className="flex items-start gap-2.5 text-slate-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2 font-medium"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-5 pt-4 border-t border-slate-100 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                <strong>Editorial &amp; Statutory Note:</strong> This practitioner commentary is curated for Indian law firm managing partners, arguing counsel chambers, and registered patent/trademark attorneys from creditor-side statutory provisions in force as of November 2026. Specific High Court Original Side Rules governing advocate discharge and fee taxation vary by jurisdiction; always verify local rules prior to filing an Order III Rule 4(2) discharge motion.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
