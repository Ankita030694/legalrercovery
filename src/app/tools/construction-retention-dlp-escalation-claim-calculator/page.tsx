import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ConstructionRetentionCalculatorClient from "./ConstructionRetentionCalculatorClient";
import ConstructionRetentionTOC from "./ConstructionRetentionTOC";
import ConstructionRetentionCTA from "./ConstructionRetentionCTA";

export const revalidate = 86400;

const PAGE_URL = "/tools/construction-retention-dlp-escalation-claim-calculator";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Construction Retention Money & DLP Interest Calculator";
const PAGE_DESCRIPTION =
  "Calculate construction retention release dates, DLP expiry, 18% statutory interest, and 3-year limitation cutoffs under Limitation Act Arts. 18, 55 & 113.";
const H1_TEXT =
  "Interactive Construction RA Bill, DLP Retention Release Date, Interest & 3-Year Limitation Calculator";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "website",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    question: "When does the 3-year limitation clock begin for claiming construction retention money?",
    answer:
      "Under Article 113 of the Schedule to the Limitation Act, 1963, the limitation clock for recovering retention money begins on the date the 'right to sue accrues'. In construction contracts (CPWD GCC, FIDIC, NHAI, MES), this right accrues only upon the formal expiry of the Defect Liability Period (DLP) plus any contractual grace period (typically 30 to 90 days), or upon the refusal of the Engineer-in-Charge to issue the Final Completion / DLP Clearance Certificate. The limitation clock does NOT run from the date the retention was originally deducted from Running Account (RA) bills or the date of Virtual Completion.",
  },
  {
    question: "How does the limitation clock for an unpaid Final Bill differ from Retention Money?",
    answer:
      "This is the critical 'split limitation clock' recognized under Indian law. Unpaid Final Bills and uncertified measurement work are governed by Article 18 (for the price of work done where no time is fixed for payment) or Article 55 (breach of contract), where the 3-year period runs from the date the work was completed or the final bill was submitted/rejected. Retention money, however, is a contingent deposit governed by Article 113, whose limitation clock starts much later—only upon DLP completion. A contractor whose final bill is approaching the 3-year limit may still have a completely fresh 3-year window to demand retention money.",
  },
  {
    question: "Can an EPC contractor claim 18% interest on overdue RA bills and withheld retention?",
    answer:
      "Yes. Under Section 31(7)(b) of the Arbitration and Conciliation Act, 1996, a sum directed to be paid by an arbitral award carries statutory interest at the rate of 2% higher than the current rate of interest (or 18% per annum if not specified) from the date of the award to realization. Furthermore, under Section 3 and Section 4 of the Interest Act, 1978, serving a formal Advocate Legal Demand Notice specifying an 18% commercial interest rate crystallizes the interest claim from the date of service, establishing the 'Specified Value' for Commercial Court jurisdiction under Section 12 of the Commercial Courts Act, 2015.",
  },
  {
    question: "Does signing a 'No-Claim Certificate' (NDC) extinguish the contractor's right to claim retention?",
    answer:
      "No, provided the contractor signed under financial duress or coercive bargaining. The Supreme Court of India in landmark rulings including National Insurance Co. Ltd. v. Boghara Polyfab Pvt. Ltd. (2009) and Chairman & MD, NTPC Ltd. v. Reshmi Constructions (2004) held that discharge vouchers or No-Claim Certificates extracted by withholding admitted dues or retention money do not bar arbitral adjudication. To preserve claims, contractors must immediately issue a written protest notice citing economic duress and invoking Section 21 of the Arbitration Act.",
  },
  {
    question: "Can a government department or developer set off Liquidated Damages (LD) against retention money?",
    answer:
      "Arbitrary set-offs are legally impermissible without proving actual loss. Under Sections 73 and 74 of the Indian Contract Act, 1872 and the Supreme Court rulings in Kailash Nath Associates v. DDA (2015) and Welspun Specialty Steel Ltd. v. ONGC (2022), Liquidated Damages cannot be automatically deducted as a penalty unless the employer proves that delay was solely attributable to the contractor and resulted in actual financial damage. Where time was put at large through mutual extensions, LD deductions are unlawful and the retention must be refunded with interest.",
  },
  {
    question: "What legal steps protect a contractor from retaliatory Bank Guarantee (PBG) encashment?",
    answer:
      "When demanding unpaid RA bills or retention money, employers frequently threaten to invoke the contractor's Performance Bank Guarantee (PBG). To prevent encashment, contractors must file an urgent petition under Section 9 of the Arbitration and Conciliation Act, 1996 (or Order 39 Rules 1 & 2 CPC) before the Commercial Court or High Court, establishing 'egregious fraud' or 'irretrievable injustice/special equities'—specifically demonstrating that the project has reached Virtual Completion and DLP has expired without unrepaired defect notices.",
  },
  {
    question: "Are civil and infrastructure works contracts eligible for MSME Samadhaan (MSEFC)?",
    answer:
      "Generally no. The Supreme Court in Sterling and Wilson Pvt. Ltd. and Silpi Constructions held that composite, indivisible 'works contracts' involving civil construction, labour, and material installation are excluded from the summary delayed-payment mechanism under Chapter V of the MSMED Act, 2006. EPC contractors must instead pursue statutory recovery through Commercial Court Summary Suits (Order 37 CPC), Section 80 CPC notices against government employers, and institutional arbitration under the Arbitration Act, 1996.",
  },
];

export default function ConstructionRetentionCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${CANONICAL_URL}#webapp`,
        name: "Interactive Construction RA Bill, DLP Retention Release Date, Interest & 3-Year Limitation Calculator",
        url: CANONICAL_URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "All (Web Browser)",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        description: PAGE_DESCRIPTION,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
        featureList: [
          "Defect Liability Period (DLP) 12/24/36 months expiry date computation",
          "Dual split 3-year limitation clock calculation under Limitation Act Arts. 18 & 113",
          "18% statutory commercial interest accrual under Sec 31(7) Arbitration Act",
          "Specified Value determination under Section 12 Commercial Courts Act 2015",
          "Joint Measurement Book (MB) & uncertified final bill ledger reconciliation",
          "Copyable Contractor Claim Summary Sheet formatted for Section 21 legal notices",
        ],
        author: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${CANONICAL_URL}#software`,
        name: "Construction Retention & Limitation Calculator",
        applicationCategory: "LegalTechApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
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
            name: "Tools",
            item: `${SITE_URL}/tools`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Construction Retention & DLP Calculator",
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B-099 &bull; Archetype T1</span>
            <span>&bull;</span>
            <span>Section 6.7 IND-07 Infrastructure &amp; EPC Desk</span>
            <span>&bull;</span>
            <span>Limitation Act 1963 Arts. 18 &amp; 113</span>
          </div>

          {/* Exact H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Split Limitation Architecture
            </span>
            Civil contractors and EPC project directors operating under our{" "}
            <Link
              href="/industries/construction-epc-contractor-recovery"
              className="text-red-400 underline font-bold hover:text-red-300"
            >
              Infrastructure &amp; EPC Contractor Recovery Hub
            </Link>{" "}
            frequently forfeit crores in retention money because quantity surveyors conflate the 3-year limitation clock of the <strong>Unpaid Final Bill (Article 18 / 55)</strong> with the separate 3-year clock of the <strong>Post-DLP Retention Tranche (Article 113)</strong>. Under Indian contract law, retention money is a contingent performance deposit whose right to sue accrues only upon the formal expiry of the Defect Liability Period (DLP) plus contractual grace, carrying statutory 18% commercial interest under Section 31(7) of the Arbitration Act, 1996 and the Interest Act, 1978.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-10">
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Split Limitation Clocks
              </p>
              <p className="text-lg sm:text-2xl font-black text-slate-100 mt-1">
                Art. 18 vs 113
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                3 Yrs from Final Bill vs DLP
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Statutory Commercial Interest
              </p>
              <p className="text-lg sm:text-2xl font-black text-emerald-400 mt-1">
                18% p.a.
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Sec 31(7) Arbitration Act
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Specified Value Threshold
              </p>
              <p className="text-lg sm:text-2xl font-black text-amber-400 mt-1">
                &ge; &rupee;3 Lakhs
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Commercial Courts Act s.12
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Standard DLP Window
              </p>
              <p className="text-lg sm:text-2xl font-black text-red-400 mt-1">
                12 &ndash; 24 Mo.
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                CPWD / FIDIC Red Book
              </p>
            </div>
          </div>

          {/* Interactive Calculator Island Directly in Hero Viewport */}
          <div id="calculator-tool" className="scroll-mt-32">
            <ConstructionRetentionCalculatorClient />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Tools", href: "/tools" },
              {
                label: "Construction Retention & DLP Calculator",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column: Sticky TOC Sidebar */}
          <ConstructionRetentionTOC />

          {/* Right Column: Editorial Body & Authoritative Sections */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Liquidity Crisis */}
            <section
              id="liquidity-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  01
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  The Construction Retention &amp; Final Bill Liquidity Crisis in India
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In the Indian infrastructure, civil construction, and MEP contracting ecosystem, cash flow is systematically choked at the tail end of project execution. While contractors maintain disciplined weekly billing cycles through Running Account (RA) bills, employers—ranging from tier-1 private real estate developers to state PWDs and municipal corporations—consistently withhold between <strong>5% and 10% of gross certified bill values as &quot;Retention Money&quot;</strong>. On an ₹80 Crore EPC contract, this retention holdback locks up ₹4 Crore to ₹8 Crore in liquid working capital.
                </p>
                <p>
                  Under standard industry practices governed by the Central Public Works Department General Conditions of Contract (CPWD GCC), the Federation Internationale des Ingenieurs-Conseils (FIDIC Red Book), and private developer Work Orders, retention is structured in two distinct tranches:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold uppercase text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Tranche 1: Virtual Completion Release (50%)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Due within 30 to 60 days of the issuance of the Taking Over Certificate (TOC) or Virtual Completion Certificate by the Project Management Consultant (PMC) or Engineer-in-Charge.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold uppercase text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Tranche 2: Post-DLP Final Clearance (50%)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Due within 30 to 90 days after the formal conclusion of the Defect Liability Period (DLP)—typically 12, 24, or 36 months post-handover—subject to punch-list rectification.
                    </p>
                  </div>
                </div>
                <p>
                  The fundamental operational failure occurs because billing engineers and commercial directors juggle 10 to 30 project sites simultaneously. When a developer defaults on the Final Bill, the contractor becomes embroiled in endless reconciliation meetings and joint measurement reviews. During this administrative drag, contractors routinely make two catastrophic legal errors: they assume retention money is tied to the Final Bill&apos;s aging, or they allow the 3-year statutory limitation clock to run out without serving an enforceable statutory demand notice.
                </p>
              </div>
            </section>

            {/* Section 3: Split Limitation Clocks */}
            <section
              id="split-limitation-clocks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  02
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Split Limitation Clocks: Article 18 vs Article 113 (Limitation Act)
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The cornerstone of construction litigation in India is the judicial doctrine of <strong>Split Limitation Clocks</strong> under the Schedule to the Limitation Act, 1963. A contractor cannot treat an overdue final account as a single monolithic claim. The law divides the financial ledger into two legally independent rights of action:
                </p>

                {/* Comparative Table */}
                <div className="overflow-x-auto my-6 not-prose">
                  <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 border-b border-slate-800 font-bold uppercase tracking-wider">
                          Statutory Criterion
                        </th>
                        <th className="p-3.5 border-b border-slate-800 font-bold uppercase tracking-wider text-red-400">
                          Clock 1: Unpaid Final Bill &amp; Variations
                        </th>
                        <th className="p-3.5 border-b border-slate-800 font-bold uppercase tracking-wider text-emerald-400">
                          Clock 2: Retention Money Tranche
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Limitation Act Article</td>
                        <td className="p-3.5 font-semibold text-slate-800">Article 18 &amp; Article 55</td>
                        <td className="p-3.5 font-semibold text-slate-800">Article 113 (Residuary Article)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Trigger / Starting Point</td>
                        <td className="p-3.5 text-slate-700">
                          Date work is completed or final bill is submitted / rejected by employer.
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Date Defect Liability Period (DLP) expires + contractual grace period.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Limitation Window</td>
                        <td className="p-3.5 text-slate-700">Strictly 3 Years from Completion / Submission.</td>
                        <td className="p-3.5 text-slate-700">Strictly 3 Years from DLP Expiry Date.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Nature of Obligation</td>
                        <td className="p-3.5 text-slate-700">Earned remuneration for physical work executed.</td>
                        <td className="p-3.5 text-slate-700">Contingent performance guarantee deposit.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Landmark Precedent</td>
                        <td className="p-3.5 text-slate-700">
                          <em>State of Gujarat v. Kothari and Associates</em> (2016) 14 SCC 761
                        </td>
                        <td className="p-3.5 text-slate-700">
                          <em>Union of India v. Chatha Rice Mills</em> &amp; FIDIC Dispute Jurisprudence
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Strategic Implication</td>
                        <td className="p-3.5 text-red-700 font-medium bg-red-50/50">
                          Expires rapidly if employer stalls Joint Measurement verification.
                        </td>
                        <td className="p-3.5 text-emerald-800 font-medium bg-emerald-50/50">
                          Remains legally actionable for 3 full years AFTER DLP ends!
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-900 text-xs sm:text-sm">
                  <p className="font-bold mb-1">
                    Practitioner Warning: Do Not Conflate the Limitation Clocks
                  </p>
                  <p>
                    If an EPC contractor completed physical works in January 2023 with a 24-month DLP ending in January 2025:
                    the limitation period for recovering the Final Bill under Article 18 expires in <strong>January 2026</strong>. However, the limitation period for recovering the 50% post-DLP retention tranche under Article 113 does not expire until <strong>January 2028</strong>! Many contractors abandon retention claims believing the entire contract is time-barred, forfeiting massive recoverable balances.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: DLP Mechanics */}
            <section
              id="dlp-mechanics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  03
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Defect Liability Period (DLP): Virtual Completion vs Final Clearance
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The contractual lifecycle of retention money hinges on the distinction between the <strong>Taking Over Certificate (TOC)</strong> and the <strong>Final Completion Certificate (FCC)</strong>. Employers frequently exploit ambiguities in these certificates to indefinitely postpone retention releases.
                </p>
                <div className="space-y-4 not-prose my-5">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      1. Virtual Completion &amp; Deemed Handover (TOC)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Virtual Completion occurs when the works are substantially completed and fit for their intended commercial occupancy, leaving only minor snag-list or de minimis defects. Under Clause 48 of FIDIC and Clause 17 of CPWD GCC, once the employer takes possession of the asset or issues a partial occupancy certificate, the Defect Liability Period automatically commences. Employers cannot defer DLP commencement merely by withholding the physical paper certificate.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      2. Defect Liability Period Rectification Window (6 to 36 Months)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      During the DLP, the contractor bears the contractual obligation to repair defects arising from faulty materials, workmanship, or engineering design. Crucially, the employer must serve written notice of specific defects within the DLP. If no formal defect notice is issued before DLP expiry, the employer is legally precluded from fabricating post-facto repair charges to set off retention money.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      3. Final Defect Clearance &amp; Retention Release Trigger
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Upon expiry of the DLP and rectification of notified defects, the Engineer-in-Charge is contractually obligated to issue the Final Completion Certificate within 14 to 28 days. Once issued—or upon the lapse of the contractual review period—the retention money becomes an undisputed, mature debt. Withholding it past the grace period constitutes a breach of contract under Section 73 of the Indian Contract Act, 1872.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Accrued Interest Rules */}
            <section
              id="accrued-interest-rules"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  04
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Accrued Interest Jurisprudence: Section 31(7) &amp; Interest Act, 1978
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  When employers retain retention funds post-DLP, they enjoy interest-free capital at the contractor&apos;s expense. Indian statutory law and commercial arbitration jurisprudence establish robust mechanisms to award heavy commercial interest on withheld construction dues:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose">
                  <div className="p-4 rounded-xl bg-slate-900 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                      Arbitration &amp; Conciliation Act, 1996
                    </span>
                    <h3 className="text-sm font-bold text-white mb-2">
                      Section 31(7)(b) Statutory Mandate
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Unless the arbitral tribunal otherwise directs, an arbitral award carries statutory interest at the rate of <strong>2% higher than the current rate of interest</strong> (defined as the highest prime lending rate of State Bank of India), or <strong>18% per annum</strong> from the date of the award to the date of payment. In <em>Executive Engineer, Dhenkanal v. N.C. Budharaj</em> (2001) 2 SCC 721, the Supreme Court confirmed that tribunals possess inherent jurisdiction to award pre-reference, pendente lite, and post-award interest.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                      Interest Act, 1978
                    </span>
                    <h3 className="text-sm font-bold text-white mb-2">
                      Section 3 &amp; 4 Notice Rule
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Where a contract does not contain an express interest clause, serving a formal Advocate Legal Demand Notice under Section 3(1)(b) of the Interest Act, 1978 formally puts the debtor on notice that commercial interest (at prevailing bank lending rates or 18% p.a.) will be claimed from the date of notice demand until realization. This demand legally establishes the accrued claim value.
                    </p>
                  </div>
                </div>
                <p>
                  Crucially, under Section 12(1)(a) of the Commercial Courts Act, 2015, the &quot;Specified Value&quot; that determines court jurisdiction includes both the <strong>principal debt AND the accrued interest calculated up to the date of filing</strong>. On long-delayed retention tranches, accrued interest at 18% often expands the claim by 30% to 50%, elevating the dispute from subordinate civil courts into the High Court Commercial Division.
                </p>
              </div>
            </section>

            {/* Section 6: Worked Financial Example */}
            <section
              id="worked-financial-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  05
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Financial Example: ₹8.5 Crore EPC Contract Ledger Breakdown
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  To understand how split limitation clocks, retention holdbacks, and 18% commercial interest interact in practice, review this empirical simulation of an actual commercial EPC dispute:
                </p>

                {/* Ledger Breakdown Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 not-prose my-6">
                  <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-800 gap-2">
                    <div>
                      <p className="text-xs text-red-400 font-bold uppercase tracking-wider">
                        Case Simulation &bull; EPC Turnkey MEP Package
                      </p>
                      <p className="text-base sm:text-lg font-black text-white">
                        Contract Value: ₹8,50,00,000 | Retention: 5% (₹42,50,000)
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-950 text-red-300 border border-red-800">
                      DLP: 12 Months
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <p className="text-slate-400 mb-1">Virtual Completion (TOC)</p>
                      <p className="text-sm font-bold text-white">15 September 2024</p>
                      <p className="text-[11px] text-slate-400 mt-1">Tranche 1 (50%): ₹21,25,000 Paid</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <p className="text-slate-400 mb-1">DLP Expiry (12 Mo.)</p>
                      <p className="text-sm font-bold text-white">15 September 2025</p>
                      <p className="text-[11px] text-slate-400 mt-1">Release Due: 15 October 2025</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <p className="text-slate-400 mb-1">Unpaid Final Bill Balance</p>
                      <p className="text-sm font-bold text-white">₹72,00,000</p>
                      <p className="text-[11px] text-slate-400 mt-1">Submitted: 30 September 2024</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 text-xs space-y-2.5">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-red-400">
                      Financial Claim Schedule As Of November 2026 (400 Days Overdue)
                    </p>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">1. Unpaid Final Bill Principal:</span>
                      <span className="font-bold text-white">₹72,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">2. Withheld Tranche 2 Retention (50%):</span>
                      <span className="font-bold text-white">₹21,25,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">3. Approved Price Escalation (CPWD 10CC):</span>
                      <span className="font-bold text-white">₹14,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">Total Claim Principal:</span>
                      <span className="font-bold text-white">₹1,07,75,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60 text-emerald-400 font-semibold">
                      <span>Accrued 18% Commercial Interest (400 Days):</span>
                      <span>+₹21,25,479</span>
                    </div>
                    <div className="flex justify-between pt-2 text-sm font-black text-white">
                      <span>Total Specified Value (Section 12 Commercial Courts Act):</span>
                      <span className="text-red-400">₹1,29,00,479</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-2">
                    <span>
                      Clock 1 (Final Bill Art. 18): <strong className="text-white">318 Days Left</strong> (Expires Sept 2027)
                    </span>
                    <span>
                      Clock 2 (Retention Art. 113): <strong className="text-emerald-400">700 Days Left</strong> (Expires Oct 2028)
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Defeating Employer Traps */}
            <section
              id="employer-traps-ld-ndc"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  06
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Defeating Employer Traps: Wrongful LD Set-Offs &amp; Coerced NDC Waivers
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  When contractors demand the release of mature retention tranches, employers routinely deploy two coercive defense strategies to avoid liquidity outflows:
                </p>

                <div className="space-y-4 not-prose my-5">
                  {/* Trap 1 */}
                  <div className="p-4 rounded-xl bg-red-50/60 border border-red-200">
                    <h3 className="text-xs font-bold text-red-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Trap 1: Arbitrary 10% Liquidated Damages (LD) Deductions
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      Employers often levy the contractual maximum 10% LD set-off against pending RA bills and retention funds, alleging project delay. Under Indian law, this set-off is illegal unless the employer proves two statutory prerequisites established in <em>Kailash Nath Associates v. DDA</em> (2015) 4 SCC 136:
                    </p>
                    <ul className="text-xs text-slate-700 list-disc list-inside space-y-1.5 pl-2">
                      <li>
                        <strong>Proof of Sole Contractor Default:</strong> If the employer contributed to delay (delayed site handover, drawing revisions, uncertified variations, delayed client-procured materials), time is &quot;at large&quot; and LD cannot be levied.
                      </li>
                      <li>
                        <strong>Proof of Actual Financial Loss:</strong> Under Sections 73 and 74 of the Contract Act, liquidated damages cannot be recovered as a punitive windfall without proving genuine economic injury.
                      </li>
                    </ul>
                  </div>

                  {/* Trap 2 */}
                  <div className="p-4 rounded-xl bg-red-50/60 border border-red-200">
                    <h3 className="text-xs font-bold text-red-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Trap 2: Coerced &quot;No-Claim Certificates&quot; (NDC) Under Financial Duress
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      Employers frequently condition the release of undisputed final bill payments or Performance Bank Guarantees on the contractor executing an unconditional &quot;No-Claim Certificate&quot; or &quot;Full and Final Discharge Voucher&quot;.
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      In <em>Chairman &amp; MD, NTPC Ltd. v. Reshmi Constructions</em> (2004) 2 SCC 663 and <em>National Insurance Co. Ltd. v. Boghara Polyfab Pvt. Ltd.</em> (2009) 1 SCC 267, the Supreme Court ruled that an NDC executed under economic duress—where the contractor was forced to sign to secure vital liquidity—does not extinguish arbitrable claims. Contractors should issue a contemporaneous protest letter stating that the document was executed under financial coercion without prejudice to outstanding retention claims.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Statutory Escalation Roadmap */}
            <section
              id="statutory-escalation-roadmap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  07
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Escalation: Section 80 CPC, Sec 21 Notice to Execution
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Recovering withheld construction retention and unpaid RA bills requires a structured statutory escalation path calibrated to the employer&apos;s legal persona:
                </p>

                {/* 4-Step Escalation Pathway */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                        1
                      </span>
                      <p className="text-xs font-bold uppercase text-slate-900">
                        Section 80 CPC Statutory Notice (PSUs / Govt)
                      </p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      For NHAI, CPWD, Railways, or State PWDs, serve a mandatory 60-day notice under{" "}
                      <Link
                        href="/law/section-80-cpc-notice-to-government"
                        className="text-[#DC2626] font-semibold underline"
                      >
                        Section 80 CPC
                      </Link>
                      . Crystalizes the claim schedule, sets the 18% interest clock, and enables writ or commercial court action upon non-settlement.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                        2
                      </span>
                      <p className="text-xs font-bold uppercase text-slate-900">
                        Section 21 Arbitration Invocation Notice
                      </p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under the Arbitration and Conciliation Act, 1996, serving a defect-free Section 21 notice formally commences arbitral proceedings and permanently stops the 3-year limitation clock under Article 137 / <em>BSNL v. Nortel Networks</em>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                        3
                      </span>
                      <p className="text-xs font-bold uppercase text-slate-900">
                        Section 9 Interim Stay on PBG Encashment
                      </p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Move the High Court or Commercial Court under Section 9 for an ex-parte interim injunction restraining the employer from invoking your Performance Bank Guarantee while retention and final bills remain unpaid.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                        4
                      </span>
                      <p className="text-xs font-bold uppercase text-slate-900">
                        Commercial Suit / Section 36 Award Execution
                      </p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Execute arbitral awards as civil court decrees under CPC Order XXI. Freeze the employer&apos;s project escrow accounts via Garnishee Orders (Rule 46) or initiate corporate insolvency under IBC Section 9 for admitted dues exceeding ₹1 Crore.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <ConstructionRetentionCTA />
                </div>
              </div>
            </section>

            {/* Section 9: FAQ Accordions */}
            <section
              id="frequently-asked-questions"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  08
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions on Construction Retention &amp; Limitation
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all duration-200 open:bg-white open:shadow-xs"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer flex justify-between items-center list-none select-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-[#DC2626] font-bold text-lg group-open:rotate-180 transition-transform duration-200 shrink-0">
                        ▾
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory References & Precedents */}
            <section
              id="statutory-references-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  09
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory References, Standard Contract Conditions &amp; Court Precedents
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  This interactive tool and statutory guide are grounded in established bare acts, standard infrastructure contract forms, and binding Supreme Court of India precedents:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 not-prose">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold uppercase text-slate-900 mb-2">
                      Primary Statutory Bare Acts
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>
                        <strong>Limitation Act, 1963:</strong> Articles 18, 55, 113 &amp; 137 (3-Year Statutory Clocks).
                      </li>
                      <li>
                        <strong>Arbitration &amp; Conciliation Act, 1996:</strong> Sections 9, 11, 21, 29A, 31(7) &amp; 36.
                      </li>
                      <li>
                        <strong>Commercial Courts Act, 2015:</strong> Sections 2(1)(c)(vi), 12, 12A &amp; 19.
                      </li>
                      <li>
                        <strong>Indian Contract Act, 1872:</strong> Sections 55, 73 &amp; 74 (Breach &amp; Liquidated Damages).
                      </li>
                      <li>
                        <strong>Interest Act, 1978:</strong> Sections 3 &amp; 4 (Statutory Notice Demanding Interest).
                      </li>
                      <li>
                        <strong>Code of Civil Procedure, 1908:</strong> Section 80 (60-Day Notice) &amp; Order XXI (Execution).
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold uppercase text-slate-900 mb-2">
                      Binding Supreme Court Precedents
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>
                        <em>State of Gujarat v. Kothari and Associates</em> (2016) 14 SCC 761 — Limitation for final bill vs retention tranches.
                      </li>
                      <li>
                        <em>BSNL v. Nortel Networks India Pvt. Ltd.</em> (2021) 5 SCC 738 — Limitation trigger under Section 21 notice.
                      </li>
                      <li>
                        <em>Chairman &amp; MD, NTPC Ltd. v. Reshmi Constructions</em> (2004) 2 SCC 663 — No-Claim Certificate under duress.
                      </li>
                      <li>
                        <em>Kailash Nath Associates v. DDA</em> (2015) 4 SCC 136 — Pre-requisites for Liquidated Damages forfeiture.
                      </li>
                      <li>
                        <em>Welspun Specialty Steel Ltd. v. ONGC</em> (2022) 2 SCC 382 — Time at large invalidating arbitrary LD.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Editorial and Legal Panel Attribution */}
                {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-700">
                      Editorial Review &amp; Statutory Verification:
                    </p>
                    <p>
                      Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions &bull; High Court of Delhi &amp; Commercial Arbitration Panel.
                    </p>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Published: November 2026 &bull; Version 2.4 (App Router)
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom Dual CTA Card */}
            <ConstructionRetentionCTA />
          </div>
        </div>
      </main>

      {/* Footer Related Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
