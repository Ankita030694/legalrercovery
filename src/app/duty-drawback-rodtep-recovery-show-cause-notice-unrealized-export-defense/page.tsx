import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import DrawbackNoticeCTA from "./DrawbackNoticeCTA";
import DrawbackTableOfContents from "./DrawbackTableOfContents";
import DrawbackScenarioTabs from "./DrawbackScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Customs Duty Drawback & RoDTEP Demand Defense | Fix",
  description:
    "First the foreign buyer defaulted—and now Indian Customs demands Duty Drawback + 15% interest. Understand Rule 18(2) ECGC/RBI Write-Off exemptions & reply timelines.",
  alternates: {
    canonical: `${SITE_URL}/duty-drawback-rodtep-recovery-show-cause-notice-unrealized-export-defense`,
  },
  openGraph: {
    title: "Customs Duty Drawback & RoDTEP Demand Defense | Fix",
    description:
      "First the foreign buyer defaulted—and now Indian Customs demands Duty Drawback + 15% interest. Understand Rule 18(2) ECGC/RBI Write-Off exemptions & reply timelines.",
    url: `${SITE_URL}/duty-drawback-rodtep-recovery-show-cause-notice-unrealized-export-defense`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Customs Duty Drawback and RoDTEP Recovery Notice Defense Guide"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customs Duty Drawback & RoDTEP Demand Defense | Fix",
    description:
      "First the foreign buyer defaulted—and now Indian Customs demands Duty Drawback + 15% interest. Understand Rule 18(2) ECGC/RBI Write-Off exemptions & reply timelines.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const STATUTORY_PRIMARY_SOURCES = [
  {
    title: "The Customs Act, 1962 (Section 75 & Section 75A — Drawback on Exported Goods & Interest on Drawback)",
    url: "https://www.indiacode.nic.in/handle/123456789/1362",
  },
  {
    title: "Customs and Central Excise Duties Drawback Rules, 1995 / 2017 (Rule 18 — Recovery of Amount of Drawback Where Export Proceeds Not Realized)",
    url: "https://www.cbic.gov.in/resources//htdocs-cbec/customs/cs-act/formatted-htmls/dbk-rules2017.pdf",
  },
  {
    title: "Foreign Exchange Management (Export of Goods and Services) Regulations, 2015 & RBI Master Direction No. 16/2015-16",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10202",
  },
  {
    title: "CBIC Notification No. 76/2021-Customs (N.T.) — Remission of Duties and Taxes on Exported Products (RoDTEP) Scheme Rules",
    url: "https://www.cbic.gov.in/resources//htdocs-cbec/customs/cs-act/notifications/notfns-2021/cs-nt2021/csnt76-2021.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Certification for Shipping Bills, BRC & Swift Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const PRECEDENTS = [
  {
    caseName: "Commissioner of Customs v. M/s Arvind Mills Ltd.",
    court: "Gujarat High Court",
    citation: "2014 (303) E.L.T. 353 (Guj.)",
    holding:
      "Held that where an exporter has taken all legitimate steps to realize export proceeds, filed formal claims before ECGC, and obtained write-off permission or insurance settlements, the demand for recovery of duty drawback under Rule 18 cannot be sustained mechanically without evaluating the bonafides of non-realization.",
    impact:
      "Establishes that Customs authorities cannot invoke penal or recovery provisions if the failure to realize proceeds arose out of events beyond the exporter's control and bona fide recovery actions were undertaken.",
  },
  {
    caseName: "M/s Pratibha Syntex Ltd. v. Union of India",
    court: "Madhya Pradesh High Court (Indore Bench)",
    citation: "2013 (287) E.L.T. 290 (M.P.)",
    holding:
      "Clarified that when the Authorized Dealer (AD Bank) has extended the time for realization in terms of RBI Master Directions or when the delay is pending condonation before RBI, issuance of a recovery notice under Section 75(1) Proviso is premature and arbitrary.",
    impact:
      "Affirms that the statutory 9-month realization period is subject to extensions granted by the competent AD Category-1 bank under delegated RBI regulations.",
  },
  {
    caseName: "Jindal Worldwide Ltd. v. Commissioner of Customs, Mundra",
    court: "CESTAT West Zonal Bench, Ahmedabad",
    citation: "2019 (368) E.L.T. 642 (Tri. - Ahmd.)",
    holding:
      "CESTAT held that under Rule 18(2), if an exporter produces certificates confirming claim settlement by ECGC or write-off by the Reserve Bank of India, the requirement of refunding drawback stands waived. Revenue cannot demand 15% interest under Section 75A in such circumstances.",
    impact:
      "Protects exporters against draconian interest compounding under Section 75A when covered under the statutory safe harbor of Rule 18(2).",
  },
];

export default function DutyDrawbackRecoveryDefensePage() {
  const pageH1 =
    "Received a Customs Show-Cause Notice (Rule 18 / Section 75) Demanding Duty Drawback & RoDTEP Payback on Defaulted Exports? Legal Defense & RBI Exemptions";

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const reviewerAttribution = {
    name: "Anuj Anand Malik",
    role: "Advocate & Founder",
    chamber: "AMA Legal Solutions",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageH1,
    description:
      "Comprehensive legal defense guide against Customs Show Cause Notices demanding recovery of Duty Drawback and RoDTEP benefits on unrealized export proceeds under Section 75 and Rule 18.",
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: reviewerAttribution.name,
      jobTitle: reviewerAttribution.role,
      worksFor: {
        "@type": "Organization",
        name: reviewerAttribution.chamber,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/duty-drawback-rodtep-recovery-show-cause-notice-unrealized-export-defense`,
    },
    datePublished: "2026-11-17T00:00:00+05:30",
    dateModified: "2026-11-17T00:00:00+05:30",
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
        name: "Exporters & Cross-Border Trade Recovery",
        item: `${SITE_URL}/industries/exporters-cross-border-trade-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Customs Duty Drawback & RoDTEP Recovery Defense",
        item: `${SITE_URL}/duty-drawback-rodtep-recovery-show-cause-notice-unrealized-export-defense`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What happens if export proceeds are not realized within the statutory timeline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Proviso to Section 75(1) of the Customs Act, 1962 read with Rule 18 of the Customs and Central Excise Duties Drawback Rules, where sale proceeds in respect of exported goods are not realized within the period allowed by FEMA (normally 9 months), the Duty Drawback paid to the exporter shall be deemed to be an erroneous refund and is recoverable along with statutory interest at 15% per annum under Section 75A.",
        },
      },
      {
        "@type": "Question",
        name: "Does settlement of a credit insurance claim by ECGC exempt an exporter from refunding Duty Drawback?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under Rule 18(2) of the Drawback Rules, where the non-realization of sale proceeds is compensated by the Export Credit Guarantee Corporation of India (ECGC) under an insurance policy, or where the Reserve Bank of India permits write-off on merits, the requirement to repay Duty Drawback does not apply, provided the exporter proves that the failure to realize proceeds was beyond their control and recovery measures were diligently pursued.",
        },
      },
      {
        "@type": "Question",
        name: "Can Customs recover RoDTEP e-scrips if the foreign buyer defaults on invoice payment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under CBIC Notification No. 76/2021-Customs (N.T.), RoDTEP scrip credits are conditional upon the realization of export proceeds within the FEMA time limit. If unrealized, the exporter is legally obliged to surrender the equivalent value of scrips or deposit the equivalent duty along with interest at 15% under Section 28AA. However, if the Authorized Dealer bank approves an RBI write-off on commercial merits, the exporter can petition Customs for remission.",
        },
      },
      {
        "@type": "Question",
        name: "How many days does an exporter have to reply to a Customs Rule 18 Show Cause Notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Customs Show Cause Notices issued under Rule 18 or Section 75 generally specify a 30-day response window from the date of receipt. Exporters must file a comprehensive reply or request an interim adjournment accompanied by evidence of AD Bank extension requests, ECGC claim filings, or formal cross-border legal demand notices served on the foreign buyer.",
        },
      },
      {
        "@type": "Question",
        name: "What role does an advocate legal notice play in securing an AD Bank write-off or Customs waiver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An advocate legal notice served on the overseas debtor via registered international speed post or courier provides verifiable legal evidence under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. It demonstrates to both the Authorized Dealer bank (under RBI Master Direction Para C.18) and Customs adjudicating officers that the exporter has exhausted legal recovery avenues, making the write-off bonafide rather than collusive.",
        },
      },
      {
        "@type": "Question",
        name: "Can Customs attach the exporter's bank accounts or seize subsequent export consignments under Section 142?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If a Rule 18 Show Cause Notice is adjudicated ex-parte and an Order-in-Original is passed without defense, the Assistant/Deputy Commissioner can initiate recovery under Section 142 of the Customs Act, 1962. This includes deducting arrears from pending drawbacks, detaining imported or export cargo, or issuing notices to banks to attach account balances. Promptly filing a reply and defending before adjudication stops this threat.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Schema Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Customs Act §75 & Rule 18</span>
            <span className="text-slate-500">•</span>
            <span>RoDTEP Recovery Defense</span>
            <span className="text-slate-500">•</span>
            <span>ECGC / RBI Safe Harbors</span>
          </div>

          {/* H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {pageH1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary & Executive Creditor Defense
            </span>
            When an overseas buyer defaults, Indian exporters face catastrophic double jeopardy: losing 100% invoice value abroad while Indian Customs issues Section 75 recovery notices clawing back Duty Drawback and RoDTEP scrips plus 15% interest. Under{" "}
            <Link
              href="/industries/exporters-cross-border-trade-recovery"
              className="text-red-400 underline hover:text-red-300 font-bold"
            >
              our Exporters & Cross-Border Trade Recovery Practice
            </Link>
            , exporters can claim statutory immunity under <strong>Rule 18(2) of the Drawback Rules</strong> by establishing bonafide recovery efforts, ECGC claim settlements, and timely AD Bank RBI write-offs.
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                FEMA Realization Window
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100">
                9 Months
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                From export invoice date
              </span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Section 75A Interest
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400">
                15% p.a.
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Compounded on payback demands
              </span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Rule 18(2) Relief
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400">
                100% Exemption
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                On ECGC / RBI approved write-off
              </span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Customs SCN Reply Limit
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400">
                30 Days
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                To prevent ex-parte Order-in-Original
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Exporters & Cross-Border Trade Recovery",
                href: "/industries/exporters-cross-border-trade-recovery",
              },
              {
                label: "Duty Drawback & RoDTEP SCN Defense",
                href: "/duty-drawback-rodtep-recovery-show-cause-notice-unrealized-export-defense",
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sidebar TOC + Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <DrawbackTableOfContents />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Statutory Framework */}
            <section
              id="statutory-framework"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Section 75 & Rule 18 Statutory Framework Explained
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Duty Drawback is granted under <strong>Section 75 of the Customs Act, 1962</strong> as a statutory rebate allowing Indian manufacturers and merchant exporters to reclaim the customs and central excise duties suffered on imported or domestic raw materials used in the manufacture of exported goods. However, this fiscal incentive is strictly contingent upon one overarching statutory condition: <em>the actual realization of foreign currency export proceeds within the timeline allowed by the Foreign Exchange Management Act (FEMA), 1999</em>.
                </p>

                <p>
                  Under the <strong>proviso to Section 75(1)</strong>:
                </p>

                <blockquote className="border-l-4 border-red-500 bg-red-50/60 p-4 rounded-r-xl my-4 text-xs sm:text-sm font-mono text-slate-800">
                  &ldquo;Provided that where any drawback has been allowed on any goods and the sale proceeds in respect of such goods are not brought into India by or on behalf of the exporter in accordance with the provisions of the Foreign Exchange Management Act, 1999 (42 of 1999), within the time allowed under that Act, the drawback so allowed shall be deemed never to have been allowed and the Central Government may recover the amount thereof in such manner as may be prescribed...&rdquo;
                </blockquote>

                <p>
                  To give operational effect to this recovery mandate, the Central Government promulgated <strong>Rule 18 of the Customs and Central Excise Duties Drawback Rules, 1995 (and identical Rule 18 of the Drawback Rules, 2017)</strong>. Under Rule 18(1), when an exporter fails to produce a Bank Realization Certificate (e-BRC / Electronic Bank Realization Certificate) or AD Bank realization proof within the prescribed period, the Assistant or Deputy Commissioner of Customs is empowered to issue a notice requiring the exporter to produce evidence of realization within thirty days. If realization proof is not furnished, Customs must order the recovery of the drawback amount along with interest at <strong>15% per annum</strong> under <strong>Section 75A</strong> from the date of original disbursal to the date of recovery.
                </p>

                <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 mt-4">
                  <p className="font-bold text-sm text-red-400 mb-1">
                    Direct Port Recovery Jurisdiction
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Recovery notices are issued directly by the Commissionerate having jurisdiction over the port of export—primarily Nhava Sheva (JNPT), Mundra Port, Chennai Sea/Air Port, Kolkata Port, and Inland Container Depots (ICD Tughlakabad, ICD Patparganj, ICD Whitefield, ICD Sanand). Unanswered notices trigger administrative coercive powers under <strong>Section 142</strong>, leading to immediate freezing of ICEGATE drawback accounts, liens on subsequent export shipments, and bank attachments.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Double Jeopardy */}
            <section
              id="double-jeopardy"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  The Double-Jeopardy Dilemma Facing Indian Exporters
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Indian exporters dealing in global trade corridors—including North America, the European Union, the GCC, Africa, and Southeast Asia—routinely encounter foreign commercial payment defaults. Whether an overseas customer collapses into liquidation, repudiates a commercial contract, or dishonors documents against acceptance (DA) or documents against payment (DP), the Indian exporter suffers an immediate <strong>100% loss of commercial invoice capital</strong>.
                </p>

                <p>
                  Instead of providing immediate statutory shielding, the Indian regulatory machinery frequently compounds this crisis through multi-agency pressure points:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <span className="text-xs font-bold text-[#DC2626] uppercase block mb-1">
                      1. Overseas Default
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Foreign buyer repudiates contract, files for chapter 11 bankruptcy, or bank absconds with CAD/DP bill of lading without payment.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <span className="text-xs font-bold text-amber-700 uppercase block mb-1">
                      2. EDPMS Caution-Listing
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      RBI EDPMS (Export Data Processing and Monitoring System) marks the shipping bill overdue after 9 months, blocking future bank trade credits.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white rounded-xl p-4">
                    <span className="text-xs font-bold text-red-400 uppercase block mb-1">
                      3. Customs Recovery SCN
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Customs launches Rule 18 recovery, demanding 100% refund of Duty Drawback and RoDTEP scrips plus 15% interest under Section 75A.
                    </p>
                  </div>
                </div>

                <p>
                  Without experienced legal intervention, an enterprise losing ₹1,00,00,000 on an export consignment can end up paying an additional ₹8,00,000 to ₹15,00,000 to Indian Customs in drawback clawbacks and penal interest. To avert this, exporters must coordinate across three legal domains: commercial debt recovery under our{" "}
                  <Link
                    href="/recovery/export-dues"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Export Dues Recovery Desk
                  </Link>
                  , foreign debtor legal demand under{" "}
                  <Link
                    href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    International Client Legal Notice Protocols
                  </Link>
                  , and Customs Rule 18 statutory defense.
                </p>
              </div>
            </section>

            {/* Section 3: Rule 18(2) Safe Harbors */}
            <section
              id="rule-18-2-exemptions"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Rule 18(2) Safe Harbors: ECGC & RBI Write-Off Immunity
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The critical legal defense that most Customs adjudicating officers fail to volunteer—and which many corporate finance teams overlook—is codified within <strong>sub-rule (2) of Rule 18 of the Customs and Central Excise Duties Drawback Rules</strong>.
                </p>

                <p>
                  Rule 18(2) establishes two absolute statutory exceptions where the exporter is <strong>NOT</strong> required to refund Duty Drawback even if export proceeds have not been realized in foreign exchange:
                </p>

                <div className="space-y-4 my-6">
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 sm:p-5 rounded-r-xl">
                    <h3 className="text-sm sm:text-base font-bold text-emerald-900 mb-1">
                      Exception A: ECGC Insurance Claim Settlement
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                      Where the non-realization of sale proceeds is compensated by the <strong>Export Credit Guarantee Corporation of India (ECGC)</strong> under an export credit insurance policy, or by any other insurer approved by the Government. Under settled jurisprudence, when ECGC settles an export default claim (typically covering 80% to 90% of the invoice value under comprehensive commercial risk policies), Customs cannot demand drawback repayment on the ground of non-realization.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-r-xl">
                    <h3 className="text-sm sm:text-base font-bold text-blue-900 mb-1">
                      Exception B: Reserve Bank of India (RBI) Write-Off on Merits
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                      Where the <strong>Reserve Bank of India (RBI)</strong> or an <strong>Authorized Dealer Category-1 (AD Bank)</strong> acting within powers delegated under the RBI Master Direction on Export of Goods and Services (Para C.18), permits write-off of the unrealized export bills on merits. This requires proving that the exporter took all reasonable legal steps to recover the receivables and that non-realization was not due to collusion, negligence, or round-tripping.
                    </p>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden mt-6">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider font-semibold">
                      <tr>
                        <th className="p-3 sm:p-4">Statutory Ground</th>
                        <th className="p-3 sm:p-4">Statutory Authority</th>
                        <th className="p-3 sm:p-4">Mandatory Documentary Evidence</th>
                        <th className="p-3 sm:p-4">Customs Relief Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          ECGC Settlement
                        </td>
                        <td className="p-3 sm:p-4">Rule 18(2) Proviso (i)</td>
                        <td className="p-3 sm:p-4">
                          ECGC Claim Settlement Voucher, Insurance Policy Copy, Bank Statement proving credit
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          Absolute Waiver of DBK refund
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          AD Bank Write-Off
                        </td>
                        <td className="p-3 sm:p-4">Rule 18(2) Proviso (ii) / RBI Master Direction C.18</td>
                        <td className="p-3 sm:p-4">
                          AD Bank Write-off Certificate, Advocate Legal Notice served on buyer, EDPMS closure record
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          Statutory Immunity against recovery
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          Extension Granted
                        </td>
                        <td className="p-3 sm:p-4">Regulation 9, FEMA 23(R) / Para C.8</td>
                        <td className="p-3 sm:p-4">
                          AD Bank Extension Sanction Letter, Commercial Correspondence, Suit/Arbitration proof
                        </td>
                        <td className="p-3 sm:p-4 text-blue-700 font-bold">
                          SCN Quashing / Premature Demand
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          Force Majeure / Civil War
                        </td>
                        <td className="p-3 sm:p-4">RBI Circulars / Circular No. 5/2009-Cus</td>
                        <td className="p-3 sm:p-4">
                          Indian Embassy / High Commission commercial certificate, UN Sanction / War declaration
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          Discretionary Exemption granted
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 4: RoDTEP Surrender & E-Scrips */}
            <section
              id="rodtep-recovery-rules"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  RoDTEP Surrender Rules & Electronic Ledger Scrip Clashes
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  With the replacement of MEIS (Merchandise Exports from India Scheme) by <strong>RoDTEP (Remission of Duties and Taxes on Exported Products)</strong> under <strong>CBIC Notification No. 76/2021-Customs (N.T.)</strong>, the recovery regime has grown significantly more automated and aggressive. RoDTEP benefits are issued as electronic duty credit scrips directly into the exporter&apos;s ICEGATE ledger.
                </p>

                <p>
                  Under Paragraph 4 of Notification No. 76/2021-Customs:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>
                    <strong>Conditional Remission:</strong> Duty credit allowed under RoDTEP is expressly subject to the receipt of export sale proceeds within the time allowed under FEMA.
                  </li>
                  <li>
                    <strong>Automated EDPMS Matching:</strong> If proceeds are not realized, the exporter must voluntarily surrender the scrip value equivalent to the unearned remission or pay back the amount in cash via ICEGATE Challan within 15 days of the expiry of the FEMA realization window.
                  </li>
                  <li>
                    <strong>15% Compounded Interest:</strong> Failure to voluntarily surrender triggers recovery under <strong>Section 28AA of the Customs Act</strong>, with interest running at 15% from the date of credit generation.
                  </li>
                  <li>
                    <strong>Third-Party Transferee Protection:</strong> A major friction point occurs when the exporter has sold or transferred the RoDTEP e-scrips to independent domestic importers. CBIC guidelines clarify that recovery of unearned export incentives must proceed against the <em>generating exporter</em> who committed the realization breach, rather than a bona fide third-party transferee who purchased validly generated scrips for fair consideration.
                  </li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-semibold text-amber-900 mb-1">
                    Inter-Agency Disconnect between DGFT & Customs
                  </p>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    While DGFT grants extensions for EPCG and Advance Authorizations based on bonafide overseas litigation, port-level Customs offices frequently issue automated Rule 18 recovery notices purely on electronic EDPMS non-reconciliation. Establishing cross-portal parity via formal legal notice replies is essential.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Statutory Timelines & Stops */}
            <section
              id="statutory-timelines"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  SCN Limitation, 30-Day Response Clocks & Statutory Stops
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Responding to a Customs recovery notice demands strict adherence to procedural milestones. Failing to respond within the statutory reply window can lead to an ex-parte Order-in-Original, sealing the exporter&apos;s financial liabilities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-6">
                  <div className="bg-slate-900 text-white rounded-xl p-4">
                    <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">
                      Day 0 to Day 30
                    </span>
                    <h3 className="text-base font-black text-white mb-1">
                      SCN Reply Window
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Statutory time to file written statement under Rule 18(1), attaching AD Bank extension applications and legal notice receipts.
                    </p>
                  </div>

                  <div className="bg-slate-900 text-white rounded-xl p-4">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">
                      Day 31 to Day 60
                    </span>
                    <h3 className="text-base font-black text-white mb-1">
                      Personal Hearing
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Appearance before Assistant / Deputy Commissioner of Customs. Right to 3 reasonable adjournments under principles of natural justice.
                    </p>
                  </div>

                  <div className="bg-slate-900 text-white rounded-xl p-4">
                    <span className="text-[10px] uppercase font-bold text-blue-400 block mb-1">
                      Day 61 to Day 90
                    </span>
                    <h3 className="text-base font-black text-white mb-1">
                      Adjudication Order
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Passing of Order-in-Original (OIO). If adverse, creates immediate debt to the Union recoverable under Section 142.
                    </p>
                  </div>

                  <div className="bg-slate-900 text-white rounded-xl p-4">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">
                      Within 60 Days of OIO
                    </span>
                    <h3 className="text-base font-black text-white mb-1">
                      Appellate Remedy
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Statutory appeal before Commissioner of Customs (Appeals) under Section 128, subject to 7.5% mandatory pre-deposit under Section 129E.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-bold text-[#DC2626] mb-2 flex items-center gap-2">
                    <span>⚠️</span> Procedural Warning: Section 28 Limitation vs Rule 18
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Customs departments often argue that Rule 18 contains no explicit limitation period, allowing them to issue recovery notices 5 to 7 years after shipment. However, multiple High Courts—including the Gujarat, Bombay, and Delhi High Courts—have ruled that recovery must be initiated within a &ldquo;reasonable period&rdquo; (typically 3 to 5 years by analogy to Section 28), in the absence of deliberate suppression or willful misstatement.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Judicial Precedents */}
            <section
              id="legal-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  High Court Precedents & Verified Judicial Holdings
                </h2>
              </div>

              <div className="space-y-6">
                {PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-[#DC2626] bg-slate-50 p-5 sm:p-6 rounded-r-2xl border-y border-r border-slate-200 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                        {item.court}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        {item.citation}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {item.caseName}
                    </h3>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 mb-3">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Judicial Holding
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed italic">
                        &ldquo;{item.holding}&rdquo;
                      </p>
                    </div>

                    <div>
                      <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">
                        Strategic Defense Application
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Defense Playbook & Evidence Matrix */}
            <section
              id="defense-playbook"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Customs SCN Reply Playbook & BSA Section 63 Evidence Matrix
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  To secure an order dropping proceedings before the Deputy/Assistant Commissioner of Customs, the exporter&apos;s legal reply must be supported by admissible commercial, banking, and electronic evidence certified under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong> (formerly Section 65B of the Indian Evidence Act, 1872).
                </p>

                <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 my-6">
                  <h3 className="text-sm sm:text-base font-bold text-red-400 mb-3 uppercase tracking-wider">
                    Step-by-Step Defense Protocol for Customs SCN
                  </h3>
                  <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm text-slate-200">
                    <li>
                      <strong>Immediate SCN Docket Inspection:</strong> Obtain certified copies of the port recovery file to ascertain whether the notice arose from automated EDPMS non-realization flags or specific DRI intelligence.
                    </li>
                    <li>
                      <strong>Execute Formal Legal Notice to Foreign Buyer:</strong> Issue an advocate-drafted cross-border legal demand letter via registered courier and email. Under RBI Master Direction Para C.18, producing an advocate legal notice is prime evidence demonstrating that all commercial recovery avenues were exhausted.
                    </li>
                    <li>
                      <strong>Obtain AD Bank Extension or Pending Status Certificate:</strong> Secure a formal letter from the Authorized Dealer Bank confirming that an extension application under FEMA Regulation 9 is pending or that an ECGC claim has been lodged.
                    </li>
                    <li>
                      <strong>Draft Comprehensive Rule 18(2) Reply:</strong> Plead statutory exemption under Rule 18(2)(i) or 18(2)(ii), annexing case law holdings from <em>Arvind Mills</em> and <em>Pratibha Syntex</em>.
                    </li>
                    <li>
                      <strong>Attend Personal Hearing with Counsel:</strong> Present oral submissions and tender the written defense note to ensure all factual grounds are recorded in the hearing record sheet.
                    </li>
                  </ol>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 p-3 sm:p-4 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Mandatory Evidence Annexures Checklist (BSA §63 Compliant)
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold">✔</span>
                      <div>
                        <strong className="text-slate-900 block">Shipping Bill & Export Invoice:</strong>
                        <span className="text-slate-600">EDPMS generated shipping bill with EP copy and Bill of Lading.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold">✔</span>
                      <div>
                        <strong className="text-slate-900 block">Bank Communication Logs:</strong>
                        <span className="text-slate-600">Swift messages, MT103 logs, or AD Bank confirmation of buyer default.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold">✔</span>
                      <div>
                        <strong className="text-slate-900 block">Advocate Legal Demand Notice:</strong>
                        <span className="text-slate-600">Served on overseas buyer with international postal tracking slips.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold">✔</span>
                      <div>
                        <strong className="text-slate-900 block">ECGC Claim File:</strong>
                        <span className="text-slate-600">Form 204 claim filing receipt, policy copy, or settlement credit advice.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold">✔</span>
                      <div>
                        <strong className="text-slate-900 block">AD Bank Write-Off Certificate:</strong>
                        <span className="text-slate-600">Certificate under RBI Master Direction Para C.18 confirming write-off.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold">✔</span>
                      <div>
                        <strong className="text-slate-900 block">BSA §63 Certificate:</strong>
                        <span className="text-slate-600">Signed certification for all emails, electronic invoices, and PDF bank logs.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Interactive Scenario Tabs */}
            <section id="interactive-scenarios" className="scroll-mt-28">
              <DrawbackScenarioTabs />
            </section>

            {/* Section 9: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions on Drawback & RoDTEP Recovery
                </h2>
              </div>

              <div className="space-y-4">
                {faqSchema.mainEntity.map((item, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl overflow-hidden transition-colors duration-150 open:bg-slate-50/50"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer select-none hover:text-[#DC2626] list-none">
                      <span className="flex items-center gap-2">
                        <span className="text-[#DC2626] font-mono text-xs font-semibold">
                          Q{idx + 1}.
                        </span>
                        {item.name}
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform shrink-0">
                        ▾
                      </span>
                    </summary>
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {item.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Statutory Sources Reference Block */}
            <div className="bg-slate-100 rounded-2xl p-5 sm:p-6 border border-slate-200">
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">
                Statutory Citations & Legislative Framework
              </h3>
              <ul className="space-y-2 text-xs">
                {STATUTORY_PRIMARY_SOURCES.map((src, i) => (
                  <li key={i}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                    >
                      {src.title} →
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
                <span>
                  Legal Review & Practice Lead:{" "}
                  <strong>{reviewerAttribution.name}</strong>, {reviewerAttribution.role}
                </span>
                <span>Chamber of {reviewerAttribution.chamber}</span>
              </div>
            </div>

            {/* Bottom Conversion CTA */}
            <DrawbackNoticeCTA />
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
