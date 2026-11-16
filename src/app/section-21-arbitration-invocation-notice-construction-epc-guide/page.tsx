import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import Section21NoticeTableOfContents from "./Section21NoticeTableOfContents";
import Section21NoticeScenarioTabs from "./Section21NoticeScenarioTabs";
import Section21NoticeCTA from "./Section21NoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/section-21-arbitration-invocation-notice-construction-epc-guide";
const EXACT_H1 =
  "How to Draft & Serve a Defect-Free Section 21 Arbitration Invocation Notice: Multi-Tier Clause Exhaustion & *Nortel Networks* Limitation Rules";
const META_TITLE = "Section 21 Notice Invoking Arbitration: EPC Checklist";
const META_DESCRIPTION =
  "A demand notice is not a Section 21 notice! Avoid fatal limitation dismissal under BSNL v. Nortel Networks and premature pre-arbitral tier objections.";

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
        alt: formatAltText("Drafting Section 21 Arbitration Invocation Notice for Construction and EPC Contracts"),
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
    title: "Arbitration and Conciliation Act, 1996 (Sections 3, 7, 11, 12, 16, 21, 29A, 34 & 36) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Limitation Act, 1963 (Articles 18, 55 & 137, Sections 14, 18 & 19) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1564",
  },
  {
    title: "Commercial Courts Act, 2015 (Sections 2(1)(c)(vi) Construction & Infrastructure Contracts & Section 12A)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records for Notice Delivery)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Code of Civil Procedure, 1908 (Section 80 Statutory Notice & Order XXI Execution)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Limitation for Section 11 Petitions & Freezing of Underlying Claims",
    parties: "Bharat Sanchar Nigam Ltd. (BSNL) v. Nortel Networks (India) Pvt. Ltd.",
    citation: "(2021) 5 SCC 738, Supreme Court of India (3-Judge Bench)",
    date: "Judgment Dated 10 March 2021",
    facts:
      "Nortel submitted a final claim for turnkey equipment and works. BSNL rejected the claim. Over 5.5 years later, Nortel issued a Section 21 notice invoking arbitration and subsequently filed a Section 11 petition before the High Court. BSNL opposed the referral, contending the claim was barred by limitation.",
    holding:
      "The Supreme Court delineated two distinct limitation clocks: First, the limitation for filing a Section 11 petition under Article 137 of the Limitation Act is 3 years from the date when the cause of action arises (specifically, the expiry of 30 days from the respondent's receipt of the Section 21 notice). Second, the underlying commercial claim itself must be legally alive and not barred by limitation on the date the Section 21 notice is received. If the underlying claim is ex-facie hopelessly time-barred on the date of Section 21 notice receipt, the High Court must dismiss the Section 11 petition at the referral stage itself.",
    amount: "Dual Limitation Rule Established — Article 137 Clock vs Underlying Claim Clock",
    takeaway:
      "A mere money-recovery demand notice does NOT arrest the limitation period for arbitration. Limitation on the underlying EPC contract claim stops ONLY on the date the Section 21 notice is received by the employer.",
  },
  {
    title: "Delhi High Court on Section 21 Notice as Mandatory Condition Precedent to Arbitral Inception",
    parties: "Alupro Building Systems Pvt. Ltd. v. Ozone Overseas Pvt. Ltd.",
    citation: "2017 SCC OnLine Del 7228, High Court of Delhi",
    date: "Judgment Dated 28 February 2017",
    facts:
      "The claimant appointed a sole arbitrator without serving a prior Section 21 notice calling upon the respondent to agree on an appointment. The respondent did not participate, and an ex-parte award was passed. The respondent challenged the award under Section 34 on the ground of non-service of Section 21 notice.",
    holding:
      "The High Court ruled that service of a Section 21 notice is mandatory and constitutes an indispensable jurisdictional condition precedent. Arbitral proceedings cannot commence without a Section 21 notice. Any unilateral appointment or reference without serving such a notice renders the arbitral tribunal coram non judice, vitiating the entire proceedings and rendering any resulting award void ab initio.",
    amount: "Mandatory Inception Jurisprudence — Coram Non Judice Without Section 21 Service",
    takeaway:
      "An EPC contractor cannot skip the Section 21 notice, even if the employer has completely refused all prior communications. Without formal service under Section 21, no High Court Section 11 petition or arbitral award can stand.",
  },
  {
    title: "Supreme Court on Multi-Tier Conciliation Tiers & the Doctrine of Futility",
    parties: "Demerara Distilleries Pvt. Ltd. v. Demerara Distillers Ltd.",
    citation: "(2015) 13 SCC 610, Supreme Court of India",
    date: "Judgment Dated 19 November 2014",
    facts:
      "The dispute resolution clause mandated mutual discussions followed by conciliation between senior management before arbitration could be invoked. The petitioner invited discussions, but the respondent declined to participate meaningfully. The respondent subsequently argued before the Supreme Court that the Section 11 petition was premature.",
    holding:
      "The Supreme Court held that where the conduct of the respondent makes it abundantly clear that mutual discussions or pre-arbitral conciliation would be an empty formality, the multi-tier requirement becomes directory rather than mandatory. Insisting on rigid adherence to a futile pre-arbitral tier when one party refuses to cooperate would unjustly delay dispute resolution.",
    amount: "Futility Doctrine — Multi-Tier Escalation Directory Upon Non-Cooperation",
    takeaway:
      "When a project developer or government department ignores requests for Engineer/DRB hearings, EPC contractors can establish 'futility' in the Section 21 notice after a 15-day guillotine letter, defeating premature invocation defenses.",
  },
  {
    title: "Supreme Court on Scope of Claims & Permissibility of Adding Claims Post-Notice",
    parties: "State of Goa v. Praveen Enterprises",
    citation: "(2012) 12 SCC 581, Supreme Court of India",
    date: "Judgment Dated 05 July 2011",
    facts:
      "The contractor served a Section 21 notice setting out specific unpaid RA bill claims. Before the arbitral tribunal, the contractor submitted a Statement of Claim containing additional claims for idling of machinery, site overheads, and price escalation that were not specifically itemized in the Section 21 notice. The respondent objected to the tribunal's jurisdiction over the new claims.",
    holding:
      "The Supreme Court clarified that a Section 21 notice is intended to invoke arbitration and define the subject matter in dispute generally; it is not a rigid pleading. While the dispute must fall within the scope of the arbitration agreement, the claimant is not barred from raising additional or refined claims in its Statement of Claim before the tribunal, provided those claims are not barred by limitation.",
    amount: "Pleading Breadth Upheld — Section 21 Notice Does Not Bar Post-Notice Claim Expansion",
    takeaway:
      "While contractors should comprehensively enumerate all known heads of claim in the Section 21 notice to eliminate ambiguity, omitting an ancillary head of claim (such as idle machinery or financing costs) does not waive the right to assert it in the formal Statement of Claim.",
  },
  {
    title: "Supreme Court 5-Judge Constitution Bench on Unilateral Panels & Retired Officer Bias",
    parties: "Central Organisation for Railway Electrification (CORE) v. ECI-SPIC-SMO-MCML (JV)",
    citation: "2024 SCC OnLine SC 3169, 5-Judge Constitution Bench, Supreme Court of India",
    date: "Judgment Dated 08 November 2024",
    facts:
      "Public sector and infrastructure contracts frequently featured clauses requiring contractors to choose an arbitrator from a narrow 4-member panel curated exclusively by the employer, consisting solely of its own retired officers. A 3-Judge bench ruling in 2019 had upheld such panels, creating severe conflict with the Perkins Eastman doctrine.",
    holding:
      "A unanimous 5-Judge Constitution Bench overruled the 2019 CORE judgment. The Court held that an employer cannot curate a captive panel of its own retired officers or affiliates and force the contractor to select an arbitrator from that panel. Such clauses violate the fundamental principle of equal treatment of parties under Section 18 and conflict with Section 12(5) of the Arbitration Act. Any appointment mechanism where one party holds dominant control over tribunal constitution is invalid.",
    amount: "Landmark 5-Judge Ruling — Captive Employer Arbitrator Panels Struck Down",
    takeaway:
      "In a Section 21 notice, contractors can legitimately reject the employer's captive panel of retired engineers or officers, nominate independent former judges, and move the High Court under Section 11(6) for neutral judicial appointment.",
  },
  {
    title: "Supreme Court on Bilateral Negotiations Failing to Extend Limitation",
    parties: "Geo Miller & Co. Pvt. Ltd. v. Rajasthan Vidyut Utpadan Nigam Ltd.",
    citation: "(2020) 19 SCC 643, Supreme Court of India",
    date: "Judgment Dated 01 October 2019",
    facts:
      "The contractor completed water treatment works in 1989. For over a decade, the parties exchanged letters, reconciliation statements, and internal committee memos. The contractor finally issued a Section 21 notice in 2002 and filed a Section 11 petition. The High Court dismissed the application as barred by limitation.",
    holding:
      "The Supreme Court affirmed dismissal. The Court held that mere exchange of letters, repeated reminders, or participation in bilateral settlement discussions do not extend the 3-year limitation period under Article 137. The 'break off point' occurs when the debtor explicitly rejects the claim or fails to pay within a reasonable contractual timeline. Continued negotiations without a formal written acknowledgment of debt under Section 18 of the Limitation Act cannot toll limitation.",
    amount: "Settlement Talks Defense Nullified — Letters Do Not Toll Article 137",
    takeaway:
      "EPC contract managers must never let reconciliation meetings drag beyond 24 months from final bill rejection. A Section 21 invocation notice must be served well before the 36-month threshold regardless of ongoing verbal discussions.",
  },
];

const DEFENSE_PREEMPTIONS = [
  {
    objection: "Mere Commercial Demand Notice Asserted as Section 21 Notice",
    trap: "The contractor sends a strongly worded advocate notice demanding payment within 15 days, threatening 'civil, criminal, and arbitral proceedings', but fails to explicitly invoke the arbitration clause or propose arbitrator names.",
    remedy:
      "Under Alupro Building Systems, a notice of demand is not a notice of arbitration. The notice must explicitly state: (1) invocation of Section 21; (2) reference to the specific arbitration agreement clause number; and (3) proposal of arbitrator names or a call upon the respondent to agree on appointment within 30 days.",
    authority: "Alupro Building Systems (2017 SCC OnLine Del 7228) & Section 21 A&C Act",
  },
  {
    objection: "Premature Invocation: Non-Exhaustion of Engineer / DRB Pre-Arbitral Tiers",
    trap: "The employer claims the Section 21 notice is premature because the contractor did not refer the matter to the Engineer-in-Charge or Dispute Review Board (DRB) under FIDIC / CPWD multi-tier dispute mechanisms.",
    remedy:
      "Pre-empt by issuing a 15-day 'Curative Pre-Arbitral Notice'. If the Engineer fails to decide within contractual limits (typically 30–60 days) or refuses to convene, plead the Demerara Distilleries and Ravindra Kumar Verma 'futility doctrine' directly in the Section 21 notice, proving non-cooperation.",
    authority: "Demerara Distilleries (2015) 13 SCC 610 & Ravindra Kumar Verma (2014 SCC OnLine Del 6602)",
  },
  {
    objection: "Limitation Expiry: 3-Year Clock from Accrual of Cause of Action",
    trap: "The employer argues that more than 3 years have elapsed since the final bill was submitted or rejected, rendering the underlying claim and subsequent Section 11 petition time-barred under Article 137.",
    remedy:
      "Pinpoint the exact 'break off point' under Geo Miller. Detail written acknowledgments of debt under Section 18 Limitation Act (joint measurement sheets, audit observations, part-payments, tax TDS credits in Form 26AS). Formally record that limitation was arrested on the date the Section 21 notice was received.",
    authority: "BSNL v. Nortel Networks (2021) 5 SCC 738 & Geo Miller (2020) 19 SCC 643",
  },
  {
    objection: "Contractual Unilateral Panel Trap / MD's Exclusive Discretion",
    trap: "The employer asserts that under the contract, only its Managing Director or Chairman can appoint the sole arbitrator, or that the contractor must choose from a 3-name department panel.",
    remedy:
      "Explicitly plead the statutory ineligibility under Section 12(5) read with the Seventh Schedule and cite the 5-Judge Constitution Bench ruling in CORE (2024) and Perkins Eastman (2020). Propose 3 independent retired judges; upon expiry of 30 days, file Section 11(6) in the High Court.",
    authority: "CORE 5-Judge Constitution Bench (2024) & Perkins Eastman (2020) 20 SCC 760",
  },
  {
    objection: "Full & Final Accord and Satisfaction (Signed No-Claim Certificate)",
    trap: "The employer produces an unconditional No-Dues Certificate or No-Claim Undertaking signed by the contractor as a precondition to receiving partial final bill payment or releasing bank guarantees.",
    remedy:
      "Plead that the NDC was executed under extreme economic coercion, financial duress, and unequal bargaining power. Cite prior or contemporaneous protest letters and caveat endorsements. Under Ambica Construction and Boghara Polyfab, the issue of duress is an arbitrable dispute for the tribunal under Section 16.",
    authority: "Ambica Construction (2006) 13 SCC 475 & Boghara Polyfab (2009) 1 SCC 267",
  },
  {
    objection: "Non-Service or Defective Delivery Challenge under Section 3",
    trap: "The employer denies receiving the Section 21 notice, claiming it was delivered to a regional site office rather than the registered corporate headquarters, or that email delivery was not acknowledged.",
    remedy:
      "Serve the notice simultaneously via Speed Post RPAD to the registered office and corporate headquarters, and via registered corporate email with electronic read-receipts. Secure India Post tracking with 'Item Delivered' certificate and attach a Section 63 BSA electronic evidence certificate.",
    authority: "Arbitration Act Section 3(1) & Bharatiya Sakshya Adhiniyam 2023 Section 63",
  },
];

const FAQS = [
  {
    question: "Why is a regular legal demand notice insufficient to invoke arbitration under Indian law?",
    answer:
      "Under Section 21 of the Arbitration and Conciliation Act, 1996, arbitral proceedings commence on the specific date on which a request for that dispute to be referred to arbitration is received by the respondent. In Alupro Building Systems Pvt. Ltd. v. Ozone Overseas Pvt. Ltd. (2017), the Delhi High Court established that a conventional money demand notice—even if drafted by an advocate—does NOT constitute a Section 21 notice unless it expressly invokes the arbitration clause, defines the disputes, and calls upon the recipient to concur on an arbitrator. Consequently, a mere demand notice fails to arrest the 3-year statutory limitation period.",
  },
  {
    question: "How does the Supreme Court ruling in BSNL v. Nortel Networks define arbitration limitation?",
    answer:
      "In BSNL v. Nortel Networks (India) Pvt. Ltd. (2021) 5 SCC 738, a 3-Judge Bench resolved conflicting jurisprudence by establishing two distinct limitation frameworks: (1) The limitation period for filing an application under Section 11 before the High Court is 3 years from the date of default, which arises upon the expiry of 30 days from the receipt of the Section 21 invocation notice; (2) However, the underlying substantive claim itself must be legally enforceable and within the 3-year limitation period (under Article 55 or 137 of the Limitation Act) on the exact date the Section 21 notice is received by the respondent. If the underlying claim is already barred by limitation when the Section 21 notice is served, the court must reject the Section 11 petition at the threshold.",
  },
  {
    question: "What happens if an EPC contract has a mandatory multi-tier dispute clause and the employer ignores the pre-arbitral tier?",
    answer:
      "Many EPC, FIDIC, and CPWD contracts require disputes to be first submitted to the Engineer-in-Charge or a Dispute Review Board (DRB) within 30 to 60 days before arbitration can be initiated. If the employer or Engineer deliberately delays or fails to render a decision within the contractual period, the contractor is not required to wait indefinitely. Under the Supreme Court ruling in Demerara Distilleries Pvt. Ltd. (2015) and Delhi High Court in Ravindra Kumar Verma v. BPTP Ltd., multi-tier clauses are directory when adhering to them would be an 'exercise in futility'. The contractor should issue a 15-day default notice and proceed with the Section 21 notice.",
  },
  {
    question: "Can an employer still insist on appointing a sole arbitrator from its own curated panel post-2024?",
    answer:
      "No. On 8 November 2024, a 5-Judge Constitution Bench of the Supreme Court in Central Organisation for Railway Electrification (CORE) v. ECI-SPIC-SMO-MCML (JV) definitively overruled earlier decisions and struck down captive employer-curated panels. The Court held that forcing a contractor to choose an arbitrator from a narrow list of retired departmental officers or affiliates violates the principle of party equality under Section 18 and Section 12(5) of the Act. In your Section 21 notice, you can reject the captive panel and nominate independent former judges.",
  },
  {
    question: "Does omitting a specific claim in the Section 21 notice waive the right to claim it before the arbitrator?",
    answer:
      "No. In State of Goa v. Praveen Enterprises (2012) 12 SCC 581, the Supreme Court ruled that a Section 21 notice is not a formal pleading. Its primary purpose is to invoke arbitration and set the arbitral mechanism in motion. A claimant or counter-claimant is entitled to elaborate, quantify, and introduce additional claims in the formal Statement of Claim submitted to the arbitral tribunal under Section 23, provided that such claims fall within the scope of the arbitration agreement and were not barred by limitation on the date of arbitration commencement.",
  },
  {
    question: "How should a Section 21 notice be served to comply with Section 3 of the Arbitration Act and BSA 2023?",
    answer:
      "Under Section 3 of the Arbitration and Conciliation Act, 1996, a written communication is deemed to have been received if it is delivered to the addressee personally or at their place of business, habitual residence, or mailing address. For institutional safety, contractors must serve the notice simultaneously via Speed Post RPAD (with tracking and proof of delivery from India Post) and via official corporate email. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), generate a contemporaneous electronic record certificate verifying the email dispatch, server logs, and tracking delivery confirmation.",
  },
  {
    question: "What is the exact countdown from receipt of Section 21 notice to filing a Section 11 petition in the High Court?",
    answer:
      "Under Section 11(6) of the Arbitration Act, the respondent has exactly 30 calendar days from the date of physical or electronic receipt of the Section 21 notice to concur with the proposed arbitrator or follow the contractual appointment procedure. If the respondent fails to respond, rejects the proposed names, or insists on an illegal unilateral appointment within those 30 days, the appointment mechanism fails. On Day 31, the contractor's right to file an Arbitration Petition under Section 11(6) before the High Court crystallizes.",
  },
  {
    question: "Can retention money and uncertified RA bills be claimed together in a single Section 21 notice?",
    answer:
      "Yes. A single Section 21 notice can and should aggregate all distinct dispute heads arising out of the contract—including unpaid Running Account (RA) bills, uncertified measurement variations, withheld defect liability retention money, price escalation, and machinery idling damages. Aggregating all claims in a single notice ensures that the limitation clock is arrested simultaneously for all heads of claim under Section 21.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
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
    name: "Section 21 Arbitration Invocation Notice for Construction and EPC Contracts",
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Construction & EPC Recovery",
      item: `${SITE_URL}/industries/construction-epc-contractor-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Section 21 Arbitration Notice Guide",
      item: `${SITE_URL}${PAGE_URL}`,
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

export default function Section21ArbitrationNoticeGuidePage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    { label: "Construction & EPC Recovery", href: "/industries/construction-epc-contractor-recovery" },
    { label: "Section 21 Arbitration Notice Guide", href: PAGE_URL },
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Hero Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Arbitration Act 1996 s.21 &amp; s.11(6)</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-07 EPC &amp; Infrastructure</span>
              <span className="text-red-500">&bull;</span>
              <span>Limitation Law Deep-Dive</span>
            </div>

            {/* Single Page H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (under H1) */}
            <div
              aria-label="Executive Statutory Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &middot; Statutory Limitation Warning
              </span>
              <p>
                In Indian infrastructure, civil engineering, and EPC dispute practice under our{" "}
                <Link
                  href="/industries/construction-epc-contractor-recovery"
                  className="text-red-300 hover:text-white underline font-semibold transition-colors"
                >
                  Construction &amp; EPC Contractor Recovery Hub
                </Link>
                , serving a standard money demand notice DOES NOT stop the 3-year statutory limitation clock under Article 137 of the Limitation Act, 1963. Under the Supreme Court&apos;s authoritative 3-Judge Bench ruling in <em>BSNL v. Nortel Networks</em> and Delhi High Court in <em>Alupro Building Systems</em>, limitation for substantive claims freezes ONLY when a formal notice under Section 21 of the Arbitration and Conciliation Act, 1996 is received by the employer. Failure to explicitly invoke the arbitration agreement and propose an arbitrator within 36 months of final bill rejection results in total claim forfeiture.
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Section 21</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Sole Trigger Freezing Claim Limitation</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">30 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Statutory Response Window Prior to s.11</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Article 137</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">3-Year Clock from Accrual to Notice</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">CORE 2024</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">5-Judge Bench Struck Down PSU Panels</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          {/* Legal Reviewer Attribution Strip */}
          <div className="mb-8 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                LR
              </span>
              <div>
                <span className="font-bold text-slate-900">{LEGAL_REVIEWER.name}</span>
                <span className="text-slate-400 mx-1.5">&bull;</span>
                <span className="text-slate-600">{LEGAL_REVIEWER.role}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
              <span>Annotated Indian Precedent Deep-Dive</span>
              <span>&bull;</span>
              <span>Updated Nov 2026</span>
            </div>
          </div>

          {/* 2-Column Split: Left Sticky TOC + Right Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <Section21NoticeTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* SECTION 1: Mere Demand Notice vs Section 21 Notice */}
              <section
                id="heading-demand-vs-section21"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    01
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Statutory Distinctions &amp; Jurisdictional Inception
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  The Fatal Commercial Blunder: Why a Demand Notice Never Freezes Limitation
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  In multi-crore infrastructure and civil engineering contracts, the single most devastating procedural error committed by commercial directors and billing heads is serving an ordinary commercial demand notice or advocate legal notice and believing that the 3-year limitation clock has been safely halted. It has not.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  Under Section 21 of the Arbitration and Conciliation Act, 1996, arbitral proceedings in respect of a particular dispute commence on the date on which a <em>request for that dispute to be referred to arbitration</em> is received by the respondent. If the communication merely demands payment of overdue Running Account bills under threat of legal action without explicitly invoking the arbitration agreement and calling for arbitrator appointment, Indian courts hold that no arbitration has commenced.
                </p>

                {/* Comparison Card: Money Demand vs Section 21 Notice */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 sm:p-5 rounded-xl bg-red-50/70 border border-red-200">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-red-900 text-white mb-2">
                      Fatal Flaw &middot; Demand Notice
                    </span>
                    <h3 className="text-base font-bold text-red-950 mb-2">
                      Standard Advocate Legal Notice
                    </h3>
                    <ul className="text-xs sm:text-sm text-red-900 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-black mt-0.5">&#10005;</span>
                        <span>States: &ldquo;Pay ₹14.5 Crore within 15 days or face civil and criminal litigation.&rdquo;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-black mt-0.5">&#10005;</span>
                        <span>Fails to cite the specific arbitration agreement clause or propose arbitrator names.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-black mt-0.5">&#10005;</span>
                        <span><strong>Limitation Impact:</strong> Article 137 clock continues running uninterrupted until 3-year bar extinguishes the claim.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-emerald-900 text-white mb-2">
                      SOP Standard &middot; Section 21 Notice
                    </span>
                    <h3 className="text-base font-bold text-emerald-950 mb-2">
                      Statutory Arbitration Invocation Notice
                    </h3>
                    <ul className="text-xs sm:text-sm text-emerald-950 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 font-black mt-0.5">&#10003;</span>
                        <span>States: &ldquo;Notice under Section 21 invoking Clause 25 of the EPC Contract.&rdquo;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 font-black mt-0.5">&#10003;</span>
                        <span>Itemizes specific dispute heads and nominates 3 neutral sole arbitrator candidates.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-700 font-black mt-0.5">&#10003;</span>
                        <span><strong>Limitation Impact:</strong> Arrests claim limitation on date of receipt; triggers 30-day window for Section 11(6).</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  As affirmed by the High Court of Delhi in <em>Alupro Building Systems Pvt. Ltd. v. Ozone Overseas Pvt. Ltd.</em>, a Section 21 notice is a mandatory, non-waivable statutory requirement. Without it, an arbitral tribunal lacks jurisdiction, and any unilateral appointment or ex-parte award is rendered void ab initio. To test your exact limitation cut-off, consult our{" "}
                  <Link
                    href="/tools/limitation-period-calculator"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Statutory Limitation Period Calculator
                  </Link>
                  .
                </p>
              </section>

              {/* SECTION 2: Nortel Networks Limitation Rules */}
              <section
                id="heading-nortel-limitation"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    02
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Limitation Act 1963 &amp; Supreme Court Jurisprudence
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  The *BSNL v. Nortel Networks* Dual Limitation Architecture
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  For decades, Indian arbitration was plagued by confusion regarding whether the 3-year limitation period under Article 137 of the Limitation Act, 1963 applied to the underlying contractual claim, the Section 21 invocation notice, or the Section 11 petition filed before the High Court.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  The landmark 3-Judge Bench judgment in <em>Bharat Sanchar Nigam Ltd. (BSNL) v. Nortel Networks (India) Pvt. Ltd.</em> (2021) 5 SCC 738 authoritatively established the <strong>Dual Limitation Doctrine</strong> governing Indian commercial arbitrations:
                </p>

                {/* Hand-Authored Escalation Architecture SVG */}
                <div className="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white overflow-hidden">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-400">
                      Figure 1: Statutory Escalation Pipeline &middot; Accrual to Section 11(6)
                    </span>
                    <span className="text-[10px] text-slate-400">A&amp;C Act 1996 s.21 &amp; s.11</span>
                  </div>

                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 800 240"
                      width="800"
                      height="240"
                      className="w-full h-auto min-w-[650px] text-xs font-sans"
                    >
                      {/* Step 1 */}
                      <rect x="10" y="30" width="160" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                      <text x="90" y="55" fill="#F87171" fontWeight="bold" textAnchor="middle" fontSize="11">STEP 1: ACCRUAL</text>
                      <text x="90" y="75" fill="#E2E8F0" textAnchor="middle" fontSize="10">Final Bill / RA Bill</text>
                      <text x="90" y="92" fill="#E2E8F0" textAnchor="middle" fontSize="10">Explicit Rejection</text>
                      <text x="90" y="108" fill="#94A3B8" textAnchor="middle" fontSize="9">Cause of Action Accrues</text>

                      {/* Arrow 1 */}
                      <line x1="170" y1="75" x2="215" y2="75" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                      {/* Step 2 */}
                      <rect x="215" y="30" width="170" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                      <text x="300" y="55" fill="#FBBF24" fontWeight="bold" textAnchor="middle" fontSize="11">STEP 2: PRE-ARBITRAL</text>
                      <text x="300" y="75" fill="#E2E8F0" textAnchor="middle" fontSize="10">Engineer / DRB Tier</text>
                      <text x="300" y="92" fill="#E2E8F0" textAnchor="middle" fontSize="10">30–60 Day Decision Window</text>
                      <text x="300" y="108" fill="#94A3B8" textAnchor="middle" fontSize="9">Futility Notice if Stalled</text>

                      {/* Arrow 2 */}
                      <line x1="385" y1="75" x2="430" y2="75" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                      {/* Step 3 */}
                      <rect x="430" y="20" width="180" height="110" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                      <text x="520" y="45" fill="#4ADE80" fontWeight="bold" textAnchor="middle" fontSize="11">STEP 3: SECTION 21</text>
                      <text x="520" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle" fontSize="10">Invocation Notice Served</text>
                      <text x="520" y="82" fill="#E2E8F0" textAnchor="middle" fontSize="9.5">Receipt Freezes Limitation</text>
                      <text x="520" y="98" fill="#F87171" textAnchor="middle" fontSize="9.5">30-Day Response Starts</text>
                      <text x="520" y="115" fill="#94A3B8" textAnchor="middle" fontSize="8.5">Must be within 3 yrs of Step 1</text>

                      {/* Arrow 3 */}
                      <line x1="610" y1="75" x2="655" y2="75" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                      {/* Step 4 */}
                      <rect x="655" y="30" width="135" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                      <text x="722" y="55" fill="#60A5FA" fontWeight="bold" textAnchor="middle" fontSize="11">STEP 4: S.11(6)</text>
                      <text x="722" y="75" fill="#E2E8F0" textAnchor="middle" fontSize="10">High Court Petition</text>
                      <text x="722" y="92" fill="#E2E8F0" textAnchor="middle" fontSize="10">Day 31 onwards</text>
                      <text x="722" y="108" fill="#94A3B8" textAnchor="middle" fontSize="9">3-Yr Article 137 Window</text>

                      {/* Bottom Bracket for Step 1 to Step 3 */}
                      <path d="M 90 145 L 90 165 L 520 165 L 520 145" fill="none" stroke="#F87171" strokeWidth="1.5" strokeDasharray="4,4" />
                      <text x="305" y="185" fill="#FCA5A5" textAnchor="middle" fontSize="10" fontWeight="bold">
                        Underlying Claim Limitation: Max 3 Years from Cause of Action to Section 21 Receipt
                      </text>

                      {/* Bottom Bracket for Step 3 to Step 4 */}
                      <path d="M 520 200 L 520 220 L 722 220 L 722 145" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4,4" />
                      <text x="621" y="235" fill="#93C5FD" textAnchor="middle" fontSize="9.5" fontWeight="bold">
                        Section 11(6) Clock: 3 Years from 30d Default
                      </text>

                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Rule 1: Underlying Claim Limitation (Article 55 / 137)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      The substantive claim (e.g., unpaid Running Account bills, defect liability retention money, or compensation for idle machinery) must be enforceable within 3 years of breach or accrual of cause of action. <strong>Receipt of the Section 21 notice stops this clock permanently.</strong>
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Rule 2: Section 11(6) Referral Limitation (Article 137)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Once the Section 21 notice is received by the employer, the employer has 30 days to respond. If the employer fails to agree on an arbitrator within 30 days, the appointment mechanism fails on Day 31. Under <em>BSNL v. Nortel Networks</em>, the limitation period to file a Section 11 petition in the High Court is 3 years commencing from this 31st day.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950">
                    <h3 className="text-sm font-bold text-amber-900 mb-1">
                      Statutory Trap: Settlement Talks Do Not Extend Limitation
                    </h3>
                    <p className="text-xs sm:text-sm">
                      Under the Supreme Court ruling in <em>Geo Miller &amp; Co. Pvt. Ltd. v. Rajasthan Vidyut Utpadan Nigam Ltd.</em> (2020) 19 SCC 643, continuous commercial correspondence, friendly meetings, and joint verification sessions DO NOT extend the 3-year limitation clock unless the debtor executes an express, signed acknowledgment of liability under Section 18 of the Limitation Act, 1963.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: Multi-Tier Dispute Clause Exhaustion */}
              <section
                id="heading-multi-tier-exhaustion"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    03
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Contractual Escalation Ladder &amp; Futility Doctrine
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Multi-Tier Clause Exhaustion: Engineering the Futility Exception
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  Standard form construction contracts—including FIDIC Red and Yellow Books (Sub-Clause 20), CPWD GCC (Clauses 25 and 25A), MES, Railways, and NHAI EPC concession agreements—invariably incorporate multi-tier dispute resolution clauses. Typically, disputes must progress through:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block mb-1">Tier 1</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">Engineer / PMC Determination</p>
                    <p className="text-[11px] text-slate-500 mt-1">30–60 Days Window</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block mb-1">Tier 2</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">Dispute Review Board / MD</p>
                    <p className="text-[11px] text-slate-500 mt-1">Conciliation / Mediation</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-[10px] font-extrabold uppercase text-[#DC2626] block mb-1">Tier 3</span>
                    <p className="text-xs sm:text-sm font-bold text-[#DC2626]">Arbitration Invocation (s.21)</p>
                    <p className="text-[11px] text-slate-500 mt-1">Independent Adjudication</p>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  Public employers and recalcitrant developers frequently exploit these multi-tier clauses as a stalling tactic. When a contractor submits a reference to the Engineer-in-Charge or requests conciliation, the employer sits on the file for months without passing an order. If the contractor invokes Section 21, the employer files a preliminary objection before the High Court alleging that the petition is premature because pre-arbitral tiers were not exhausted.
                </p>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white my-6">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 block mb-1.5">
                    Judicial Solution &middot; The Futility Exception
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    How the Supreme Court Neutralized Pre-Arbitral Stalling
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    In <em>Demerara Distilleries Pvt. Ltd. v. Demerara Distillers Ltd.</em> (2015) 13 SCC 610 and Delhi High Court in <em>Ravindra Kumar Verma v. BPTP Ltd.</em>, Indian courts laid down that pre-arbitral conciliation tiers are directory, not mandatory, where one party demonstrates complete recalcitrance or refusal to engage. The contractor can bypass stalled tiers by establishing that further waiting would be an &ldquo;empty formality and an exercise in futility.&rdquo;
                  </p>
                  <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700 text-xs text-slate-200 space-y-1.5">
                    <p className="font-semibold text-red-300">Contractor&apos;s 15-Day Guillotine Protocol:</p>
                    <p>1. Issue a registered &lsquo;Curative Notice&rsquo; recording the Engineer&apos;s failure to decide within the contractual window.</p>
                    <p>2. Give a peremptory 15-day window for the employer to convene the Dispute Board or schedule conciliation.</p>
                    <p>3. Explicitly state that failure to act by Day 15 will be treated as abandonment of the pre-arbitral tier under Demerara Distilleries.</p>
                    <p>4. On Day 16, issue the formal Section 21 Notice invoking arbitration directly.</p>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  For contractors facing stalled final billing where the developer has stopped certifying measurement books, consult our specialized analysis on{" "}
                  <Link
                    href="/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Recovering Uncertified RA Bills &amp; Countering Measurement Stalling
                  </Link>
                  .
                </p>
              </section>

              {/* SECTION 4: Statutory Deadlines Matrix Table */}
              <section
                id="heading-statutory-timelines"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    04
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Bare-Act Timeline &amp; Statutory Stops
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Statutory Deadlines Matrix: The 10d, 15d, 30d, 60d &amp; 3-Year Windows
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  Arbitration under the Arbitration and Conciliation Act, 1996 and the Limitation Act, 1963 is governed by non-negotiable statutory timelines. Missing a deadline by a single day can extinguish remedies or subject the contractor to premature dismissal.
                </p>

                {/* Dark-Header Statutory Matrix Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="py-3.5 px-4 font-bold uppercase text-[11px] tracking-wider">Statutory Window</th>
                        <th className="py-3.5 px-4 font-bold uppercase text-[11px] tracking-wider">Legal Hook &amp; Section</th>
                        <th className="py-3.5 px-4 font-bold uppercase text-[11px] tracking-wider">Trigger Event</th>
                        <th className="py-3.5 px-4 font-bold uppercase text-[11px] tracking-wider">Contractor Protection / Risk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-extrabold text-slate-900">10 Days</td>
                        <td className="py-3.5 px-4 text-slate-700 font-mono text-xs">Section 12(1) / Fifth Sched.</td>
                        <td className="py-3.5 px-4 text-slate-600">Arbitrator Disclosure of Interest</td>
                        <td className="py-3.5 px-4 text-slate-700">Contractor can challenge arbitrator impartiality within 15 days of disclosure.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-amber-50/30">
                        <td className="py-3.5 px-4 font-extrabold text-amber-800">15 Days</td>
                        <td className="py-3.5 px-4 text-slate-700 font-mono text-xs">Pre-Arbitral Guillotine SOP</td>
                        <td className="py-3.5 px-4 text-slate-600">Curative Default Notice to Employer</td>
                        <td className="py-3.5 px-4 text-slate-700">Puts employer in formal default; establishes &lsquo;futility&rsquo; under Demerara Distilleries.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-extrabold text-[#DC2626]">30 Days</td>
                        <td className="py-3.5 px-4 text-slate-700 font-mono text-xs">A&amp;C Act Section 11(6)</td>
                        <td className="py-3.5 px-4 text-slate-600">Receipt of Section 21 Notice</td>
                        <td className="py-3.5 px-4 text-slate-700">Statutory window for employer concurrence. On Day 31, Section 11(6) High Court route opens.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-extrabold text-slate-900">60 Days</td>
                        <td className="py-3.5 px-4 text-slate-700 font-mono text-xs">CPC Section 80(1)</td>
                        <td className="py-3.5 px-4 text-slate-600">Notice to Govt / PSU Entity</td>
                        <td className="py-3.5 px-4 text-slate-700">
                          Mandatory prior notice if filing a civil suit against Government departments (see our{" "}
                          <Link href="/law/section-80-cpc-notice-to-government" className="text-[#DC2626] font-semibold hover:underline">
                            Section 80 CPC Guide
                          </Link>
                          ; note: s.80 CPC does not bar s.9 or s.11 arbitration applications).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-emerald-50/40">
                        <td className="py-3.5 px-4 font-extrabold text-emerald-800">3 Years (Max)</td>
                        <td className="py-3.5 px-4 text-slate-700 font-mono text-xs">Limitation Act Art. 137</td>
                        <td className="py-3.5 px-4 text-slate-600">Date of Rejection / Default</td>
                        <td className="py-3.5 px-4 text-slate-700">
                          Underlying claim limitation. Must be arrested via Section 21 service before Month 36.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-extrabold text-blue-800">12 Months</td>
                        <td className="py-3.5 px-4 text-slate-700 font-mono text-xs">A&amp;C Act Section 29A</td>
                        <td className="py-3.5 px-4 text-slate-600">Completion of Pleadings</td>
                        <td className="py-3.5 px-4 text-slate-700">Tribunal must deliver final arbitral award; extendable by 6 months with consent.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  For subcontractors seeking recovery against main EPC contractors who plead &ldquo;pay-when-paid&rdquo; defenses, inspect our detailed guidance on{" "}
                  <Link
                    href="/subcontractor-payment-recovery-india"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Subcontractor Payment Recovery &amp; Neutralizing Back-to-Back Clauses
                  </Link>
                  .
                </p>
              </section>

              {/* SECTION 5: Landmark Case Law & Judicial Holdings */}
              <section
                id="heading-precedents-analysis"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    05
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Supreme Court &amp; High Court Rulings
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Verified Judicial Precedents Governing Section 21 &amp; Section 11(6)
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Every paragraph in a Section 21 notice must be anchored in verified Supreme Court and High Court jurisprudence. Below are the authoritative precedents with exact legal holdings:
                </p>

                {/* Precedent Cards with Crimson Left-Accent Bars */}
                <div className="space-y-6">
                  {COURT_PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-[#DC2626] bg-slate-50/80 rounded-r-2xl p-5 sm:p-6 border-y border-r border-slate-200 shadow-xs"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                          Precedent {idx + 1} &middot; {item.citation}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">{item.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        {item.parties}
                      </h3>
                      <p className="text-xs text-slate-500 font-semibold mb-3">
                        Subject: {item.title}
                      </p>

                      <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                          <strong className="text-slate-900">Facts: </strong>
                          {item.facts}
                        </p>
                        <p>
                          <strong className="text-slate-900">Judicial Holding: </strong>
                          {item.holding}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold bg-white text-slate-800 border border-slate-200">
                          {item.amount}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                          Takeaway: {item.takeaway}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 6: Employer Defense Pre-Emption Table */}
              <section
                id="heading-defense-preemption"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    06
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Litigation Shield &amp; Preliminary Objections
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Employer Defense Pre-Emption Table: Neutralizing Preliminary Objections
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  When faced with an arbitration invocation, institutional debtors and government agencies deploy standardized procedural defenses to obtain summary dismissal at the Section 11 stage. A defect-free Section 21 notice pre-empts every objection on paper:
                </p>

                {/* Pre-emption Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="py-3.5 px-4 font-bold uppercase text-[11px] tracking-wider w-1/4">
                          Employer Objection
                        </th>
                        <th className="py-3.5 px-4 font-bold uppercase text-[11px] tracking-wider w-1/4">
                          Procedural Trap
                        </th>
                        <th className="py-3.5 px-4 font-bold uppercase text-[11px] tracking-wider w-1/3">
                          Contractor Pre-Emption Strategy
                        </th>
                        <th className="py-3.5 px-4 font-bold uppercase text-[11px] tracking-wider">
                          Authority
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {DEFENSE_PREEMPTIONS.map((dp, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-slate-900 align-top">
                            {dp.objection}
                          </td>
                          <td className="py-3.5 px-4 text-red-800 text-xs align-top">
                            {dp.trap}
                          </td>
                          <td className="py-3.5 px-4 text-slate-700 text-xs sm:text-sm align-top leading-relaxed">
                            {dp.remedy}
                          </td>
                          <td className="py-3.5 px-4 font-mono text-[11px] text-slate-500 align-top">
                            {dp.authority}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  For contractors disputing withheld defect liability deposits post-completion, read our specialized practitioner guide on{" "}
                  <Link
                    href="/retention-money-recovery-after-defect-liability-period-dlp-expiry"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Retention Money Recovery After Defect Liability Period (DLP) Expiry
                  </Link>
                  .
                </p>
              </section>

              {/* SECTION 7: Drafting Anatomy of a Defect-Free Section 21 Notice */}
              <section
                id="heading-drafting-anatomy"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    07
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Advocate Drafting Protocol
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  The 8-Part Anatomy of an Advocate-Settled Section 21 Notice
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  To ensure complete immunity against Section 11 preliminary challenges, an institutional Section 21 notice must adhere to an 8-part architectural structure:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white inline-flex items-center justify-center text-xs font-bold mr-2 mb-2">
                      1
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Parties &amp; Contract Recital
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Exact legal names, CIN, registered addresses of employer and contractor, date of LOA/Contract execution, total contract price, and scope of works.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white inline-flex items-center justify-center text-xs font-bold mr-2 mb-2">
                      2
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Exact Reproduction of Arbitration Clause
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Quote the arbitration agreement verbatim (e.g., Clause 25/67), highlighting governing law, seat/place of arbitration, and language of proceedings.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white inline-flex items-center justify-center text-xs font-bold mr-2 mb-2">
                      3
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Chronological Factual Matrix &amp; Breaches
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Detailed narration of contractor&apos;s mobilization, milestone completion, submission of RA bills, employer&apos;s measurement delays, non-issuance of work fronts, and unlawful withholding.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white inline-flex items-center justify-center text-xs font-bold mr-2 mb-2">
                      4
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Exhaustion of Multi-Tier Tiers / Futility Recital
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Evidence of previous submissions to the Engineer-in-Charge or DRB, noting date of expiry of decision window and invoking <em>Demerara Distilleries</em>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white inline-flex items-center justify-center text-xs font-bold mr-2 mb-2">
                      5
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Itemized Statement of Claims
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Segregated heads: (a) Unpaid certified &amp; uncertified RA bills; (b) Retention money post-DLP; (c) Extra/variation items; (d) Plant &amp; machinery idling; (e) 18% commercial interest under Section 31(7).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white inline-flex items-center justify-center text-xs font-bold mr-2 mb-2">
                      6
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Explicit Section 21 Statutory Invocation
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The operative clause: &ldquo;The Claimant hereby invokes Section 21 of the Arbitration &amp; Conciliation Act, 1996, and calls upon the Respondent to concur on arbitrator appointment.&rdquo;
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white inline-flex items-center justify-center text-xs font-bold mr-2 mb-2">
                      7
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Neutral Arbitrator Panel Nomination
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Proposing 3 neutral retired High Court / Supreme Court Judges or institutional administration, citing <em>Perkins Eastman</em> and <em>CORE (2024)</em> to reject unilateral panels.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white inline-flex items-center justify-center text-xs font-bold mr-2 mb-2">
                      8
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      30-Day Section 11(6) Default Notice
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Explicit warning that failure to concur within 30 days of receipt entitles the contractor to file a Section 11(6) petition in the competent High Court at the employer&apos;s cost and consequence.
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-6">
                  If you have received an adverse legal notice from an employer threatening termination or liquidated damages, adapt our advocate-vetted{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Legal Notice Reply Format &amp; Pre-Emption Template
                  </Link>
                  .
                </p>
              </section>

              {/* SECTION 8: Interactive Practice Scenarios Tabs */}
              <section
                id="heading-scenario-explorer"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    08
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Interactive Commercial Playbook
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  EPC Failure Modes &amp; Action Rails: Interactive Strategy Explorer
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Examine how the Section 21 notice strategy adapts across real-world commercial failure modes in construction contracting:
                </p>

                {/* Scenario Tabs Subcomponent */}
                <Section21NoticeScenarioTabs />
              </section>

              {/* SECTION 9: Service & BSA 2023 Section 63 Evidence Checklist */}
              <section
                id="heading-service-evidence"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    09
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Service Protocol &amp; Electronic Evidence
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Service Proof Protocol &amp; BSA 2023 Section 63 Evidentiary Dossier
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  Because the 3-year limitation clock under <em>BSNL v. Nortel Networks</em> stops on the date the Section 21 notice is <strong>received</strong>, proving conclusive delivery is as crucial as the drafting itself. Under Section 3 of the Arbitration and Conciliation Act, 1996, delivery to the registered office or principal place of business creates a statutory presumption of receipt.
                </p>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 my-5">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Mandatory Dual-Channel Service Protocol
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        1
                      </span>
                      <div>
                        <strong className="text-slate-900">Speed Post RPAD via India Post: </strong>
                        Dispatched to the employer&apos;s registered corporate office, site office, and Chairman/Managing Director. Secure postal receipts and download official India Post consignment tracking reports confirming &lsquo;Item Delivered&rsquo;.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        2
                      </span>
                      <div>
                        <strong className="text-slate-900">Corporate Email with Read-Receipts: </strong>
                        Sent simultaneously to official designated email IDs of the Engineer, Managing Director, and Legal Department with complete PDF annexures.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        3
                      </span>
                      <div>
                        <strong className="text-slate-900">BSA 2023 Section 63 Certificate: </strong>
                        Execute a statutory electronic certificate under Bharatiya Sakshya Adhiniyam, 2023 (replacing former Section 65B of the Indian Evidence Act) verifying email logs, cryptographic hashes, and server delivery logs to eliminate debtor denial in the High Court.
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  For contractors with works contracts excluded from MSEFC jurisdiction under <em>Shree Gee</em> and <em>Sterling and Wilson</em> rulings, examine our statutory analysis on{" "}
                  <Link
                    href="/works-contract-excluded-from-msme-samadhaan-contractor-alternatives"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Works Contracts Excluded from MSME Samadhaan: The Commercial Arbitration Remedy
                  </Link>
                  .
                </p>
              </section>

              {/* SECTION 10: Dual-Track B2B Call to Action */}
              <section className="bg-transparent">
                <Section21NoticeCTA />
              </section>

              {/* SECTION 11: Frequently Asked Questions (FAQ) */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    10
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Contractor &amp; Legal Counsel Questions
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Frequently Asked Questions (FAQ) on Section 21 Invocation
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Authoritative answers to critical operational, statutory, and limitation dilemmas in EPC arbitration invocation:
                </p>

                {/* FAQ Accordions using details/summary */}
                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 open:border-slate-300 open:shadow-xs"
                    >
                      <summary className="flex items-center justify-between p-4 sm:p-5 bg-slate-50 hover:bg-slate-100/80 cursor-pointer font-bold text-slate-900 text-sm sm:text-base transition-colors select-none">
                        <span className="pr-4">{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:bg-[#DC2626] group-open:text-white">
                          &#9660;
                        </span>
                      </summary>
                      <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 12: Primary Statutory Sources */}
              <section
                id="heading-statutory-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    11
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Primary Statutory Authorities &amp; Legislative Acts
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                  Statutory References &amp; Official Legislation
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  Consult the authoritative primary legislation governing arbitration invocation, limitation enforcement, and evidence rules:
                </p>

                <div className="space-y-3">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {source.title}
                      </span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-xs text-[#DC2626] font-bold hover:underline shrink-0"
                      >
                        View Official Text &rarr;
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
                  <p>
                    <strong>Statutory Disclaimer:</strong> This guide provides practitioner commentary for EPC contractors, infrastructure developers, and commercial counsel under the Arbitration and Conciliation Act, 1996 and Indian Limitation Act, 1963. It does not constitute formal legal counsel. For specific multi-crore infrastructure dispute escalation, consult an advocate empaneled under the Advocates Act, 1961.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Outside / Below Main */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
