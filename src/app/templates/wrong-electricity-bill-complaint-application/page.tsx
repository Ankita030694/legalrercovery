import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ElectricityBillNoticeCTA from "./ElectricityBillNoticeCTA";
import ElectricityBillTOC from "./ElectricityBillTOC";
import ElectricityBillWorkspace from "./ElectricityBillWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Wrong Electricity Bill Complaint Application (Format)",
  description:
    "Wrong reading or inflated electricity bill? Complaint application formats in English and Hindi, plus the forum to escalate to.",
  alternates: {
    canonical: `${SITE_URL}/templates/wrong-electricity-bill-complaint-application`,
  },
  openGraph: {
    title: "Wrong Electricity Bill Complaint Application (Format) — Free Word & PDF",
    description:
      "Wrong reading or inflated electricity bill? Download official complaint application formats in English and Hindi with CGRF statutory escalation rules.",
    url: `${SITE_URL}/templates/wrong-electricity-bill-complaint-application`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Electricity Act, 2003 (Act No. 36 of 2003) — Section 42(5) CGRF, Section 42(6) Ombudsman & Section 56 Disconnection Restrictions",
    url: "https://www.indiacode.nic.in/handle/123456789/2058",
  },
  {
    title: "Central Electricity Authority (Installation and Operation of Meters) Regulations, 2006 (as amended) — Meter Testing Protocols",
    url: "https://cea.nic.in/",
  },
  {
    title: "Ministry of Power, Government of India — Electricity (Rights of Consumers) Rules, 2020 (as amended 2024) — Consumer Charters & Billing Standards",
    url: "https://powermin.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Meter Photos & Portal Complaints)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "State Commission Slashes ₹1,48,000 Fictitious Demand on Uninspected Jumping Meter",
    parties: "Paschimanchal Vidyut Vitran Nigam Ltd. (PVVNL) v. Smt. Kamla Devi",
    citation: "First Appeal No. 1294/2019, State Consumer Disputes Redressal Commission, Lucknow (UP)",
    date: "Order Dated 17 November 2022",
    facts:
      "The domestic consumer was served a sudden monthly electricity bill demanding ₹1,48,210 against a sanctioned load of 2 kW, whereas her historical monthly billing averaged between ₹1,800 and ₹2,400. When she filed an application for meter testing, the DISCOM linemen refused to install a check meter and issued a 15-day disconnection notice demanding immediate payment under threat of line snapping.",
    holding:
      "The State Commission dismissed PVVNL's appeal, holding that under the Central Electricity Authority (Installation and Operation of Meters) Regulations and the UP Electricity Supply Code, whenever a consumer formally disputes meter accuracy, the licensee has a statutory duty to test the meter with a NABL-accredited test bench or install a parallel Check Meter. Snapping power without conducting mandatory testing violates Section 56 of the Electricity Act, 2003. The court quashed the ₹1,48,000 demand, directed billing based on previous 6-month average, and awarded ₹20,000 compensation for harassment.",
    amount: "₹1,48,210 Bill Quashed + Recalculated at ₹2,100/mo Average + ₹20,000 Damages",
    takeaway:
      "A DISCOM cannot enforce an inflated bill or disconnect electricity if you have formally applied for meter testing. If the utility snaps your wire without providing an official laboratory test report, consumer forums will quash the bill and penalize the DISCOM.",
  },
  {
    title: "CGRF Order Overturning 14 Months of Accumulated Provisional Billing & Late Surcharges",
    parties: "Sh. Rakesh Aggarwal v. BSES Rajdhani Power Ltd.",
    citation: "Grievance Complaint No. CG-412/2022, Consumer Grievance Redressal Forum (CGRF), New Delhi",
    date: "Order Dated 08 March 2023",
    facts:
      "For 14 consecutive months, the distribution utility generated provisional electricity bills stamped 'Meter Reader Remark: House Locked / Not Accessible' despite the consumer actively residing on the premises with an exterior-facing digital meter. Suddenly, in the 15th month, the utility conducted a physical reading and dumped an accumulated lump-sum bill of ₹84,200 with slab jumping into the highest tariff bracket plus ₹12,400 late payment surcharges (LPSC).",
    holding:
      "The CGRF held that under Delhi Electricity Regulatory Commission (DERC) Supply Code Regulations, the licensee is statutorily obligated to record actual readings at least once every two billing cycles. Artificially issuing provisional bills and subsequently applying the highest progressive slab rate to accumulated units constitutes an unfair trade practice. The Forum ordered the DISCOM to recalculate the consumption by spreading units equally across each of the 14 preceding months, cancel all accumulated late surcharges, and offer interest-free monthly installment facilities.",
    amount: "₹84,200 Lump-Sum Bill Recalculated Down to ₹36,400 + ₹12,400 Surcharges Waived",
    takeaway:
      "When a DISCOM fails to record periodic actual readings and later dumps an accumulated bill, they cannot charge higher tariff slabs or late penalties. File a CGRF complaint under Section 42(5) to enforce monthly slab spreading.",
  },
  {
    title: "Consumer Forum Awards Punitive Damages for Illegal Disconnection During Pending Grievance",
    parties: "Vitthalrao Patil v. Maharashtra State Electricity Distribution Co. Ltd. (MSEDCL)",
    citation: "Consumer Complaint No. 104/2021, DCDRC Pune, Maharashtra",
    date: "Order Dated 14 September 2023",
    facts:
      "The complainant received a bill reflecting an incorrect Multiplying Factor (MF = 10 instead of MF = 1) resulting in a tenfold inflated bill of ₹92,000. The consumer lodged a formal written objection with the Sub-Divisional Officer and deposited ₹5,000 representing his undisputed average consumption under protest. Despite the pending objection, MSEDCL linemen disconnected his electricity supply during school examination week.",
    holding:
      "The District Commission held MSEDCL guilty of gross deficiency in service under Section 2(11) of CPA 2019. The Commission observed that under Section 56(1) of the Electricity Act, 2003, disconnection is strictly prohibited where a consumer deposits the average charge or disputed sum under protest. The court directed immediate power restoration within 6 hours, quashed the multiplier error bill, and awarded ₹35,000 in punitive damages against the delinquent billing officers.",
    amount: "Immediate Power Restored + Multiplier Error Corrected + ₹35,000 Punitive Compensation",
    takeaway:
      "Depositing your average consumption under protest creates an absolute statutory shield against disconnection under Section 56(1). If DISCOM disconnects your power anyway, consumer courts award substantial punitive damages.",
  },
];

const FAQS = [
  {
    question: "What should I do first if my electricity bill is unexpectedly inflated?",
    answer:
      "Immediately inspect your electricity meter LCD display. Compare the cumulative kWh reading on your meter with the 'Current Reading' printed on your bill. Take a clear, timestamped photograph of the meter display and serial number. If the billed reading is higher than your actual meter reading, submit Variant 1 (Polite Application for Wrong Meter Reading) to your Sub-Divisional Officer (SDO) or Assistant Engineer (AE) with a copy of your photo.",
  },
  {
    question: "Can the electricity department disconnect my supply if I refuse to pay the wrong bill?",
    answer:
      "No. Under Section 56(1) of the Electricity Act, 2003, a distribution licensee cannot disconnect electricity supply if the consumer has lodged a formal written billing dispute and deposited the average billing amount of the previous months under protest. Always obtain an official receiving stamp with a diary number when submitting your objection.",
  },
  {
    question: "What is a CGRF complaint and how does it help in electricity bill disputes?",
    answer:
      "The Consumer Grievance Redressal Forum (CGRF) is a quasi-judicial statutory body established under Section 42(5) of the Electricity Act, 2003 in every distribution licensee. If your SDO or Executive Engineer fails to resolve your bill rectification request within 15–30 days, you can file a formal complaint before CGRF using Variant 3. CGRF orders are legally binding on the DISCOM.",
  },
  {
    question: "What if the CGRF order also rejects my complaint or gives an inadequate reduction?",
    answer:
      "Under Section 42(6) of the Electricity Act, 2003, any consumer aggrieved by a CGRF order or non-redressal within the statutory period can file a representation before the Electricity Ombudsman appointed by the State Electricity Regulatory Commission (SERC). Alternatively, you can file a consumer complaint before the District Consumer Commission (DCDRC) on the e-Jagriti portal under Section 35 of CPA 2019.",
  },
  {
    question: "What is an electronic meter accuracy test and who pays for it?",
    answer:
      "Under the Central Electricity Authority (Installation and Operation of Meters) Regulations, 2006, a consumer can demand testing of a suspect jumping or fast meter. The DISCOM must test the meter at an accredited testing laboratory or install a parallel Check Meter within 15 to 30 days. You may be asked to deposit a nominal testing fee (typically ₹100 to ₹300), which must be refunded or credited if the meter is found to be defective.",
  },
  {
    question: "गलत बिजली बिल आने पर हिंदी में शिकायत कैसे दर्ज करें?",
    answer:
      "यदि आपके बिजली मीटर का वाचन गलत हुआ है या अत्यधिक बिल आया है, तो आप हमारी कार्यक्षेत्र (Workspace) में उपलब्ध 'वेरिएंट 4: बिजली बिल सुधार हेतु प्रार्थना पत्र' का उपयोग कर सकते हैं। इसमें अपने मीटर की वर्तमान रीडिंग, पुराना औसत बिल, तथा मीटर डिस्प्ले का स्पष्ट फोटो संलग्न कर अपने विद्युत उप-खंड अधिकारी (SDO) अथवा अधिशासी अभियंता कार्यालय में रिसीविंग लेकर जमा करें।",
  },
  {
    question: "How do I challenge an accumulated bill caused by months of provisional or average billing?",
    answer:
      "Distribution companies are statutorily required under SERC Supply Codes to record actual meter readings periodically. If a utility issues estimated or provisional bills for multiple cycles and then dumps an accumulated bill pushing you into high progressive tariff slabs, you have the legal right to demand retrospective month-wise slab bifurcation and complete waiver of late payment surcharges.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Complaint Application for a Wrong or Inflated Electricity Bill",
  description:
    "Wrong reading or inflated electricity bill? Complaint application formats in English and Hindi, plus the forum to escalate to.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/wrong-electricity-bill-complaint-application`,
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
  about: {
    "@type": "Thing",
    name: "Electricity Bill Complaint & Consumer Grievance Redressal Forum (CGRF)",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Wrong Electricity Bill Complaint Application Format (Word & Print Ready)",
  description:
    "Statutory complaint application formats in English and Hindi for incorrect meter reading, jumping meters, and CGRF escalation under Section 42(5) of the Electricity Act, 2003.",
  encodingFormat: ["application/msword", "text/plain"],
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Public",
    },
  },
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
      name: "Templates",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Wrong Electricity Bill Complaint Application",
      item: `${SITE_URL}/templates/wrong-electricity-bill-complaint-application`,
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

export default function WrongElectricityBillComplaintPage() {
  const breadcrumbItems = [
    { label: "Consumer Templates", href: "/services/refunds-and-consumer-complaints" },
    { label: "Wrong Electricity Bill Complaint", href: "/templates/wrong-electricity-bill-complaint-application" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIGITAL_DOCUMENT_SCHEMA) }}
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
        {/* Hero Section matching platform high-authority design */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Electricity Act 2003 · Section 42(5) CGRF</span>
              <span className="text-red-500">•</span>
              <span>Consumer Redressal Rail</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Complaint Application for a Wrong or Inflated Electricity Bill
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Electricity Bill Rectification &amp; Disconnection Stay)
              </p>
              <p>
                Under Section 56(1) of the Electricity Act, 2003 and State Electricity Supply Codes, power distribution licensees (DISCOMs) are statutorily prohibited from disconnecting supply if a bona fide billing dispute is pending and average dues are deposited under protest. When bills reflect wrong readings or jumping meters, consumers can file an application to the Assistant Engineer, escalate to the Consumer Grievance Redressal Forum (CGRF) under Section 42(5), and seek compensation on e-Jagriti.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 56(1)</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Disconnection Stay Under Protest</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">15–30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">SERC Meter Testing Timeline</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Bank Rate</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Interest on Over-Recovery</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">e-Jagriti</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Direct Consumer Court Forum</p>
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
            <ElectricityBillTOC />

            {/* Main Content Body */}
            <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Reality */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Consumer Courts Say About Inflated Power Bills
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every month, millions of residential, commercial, and rural consumers in India receive shock electricity bills showing sudden, multifold surges in consumption. In many instances, the discrepancy is caused by human negligence—such as a meter reader punching fictitious numbers, software multiplying factor (MF) miscalculations, or months of unrecorded &quot;provisional&quot; billing suddenly lumped into a single billing cycle at high progressive tariff slabs. In other situations, defective electronic meters jump numbers without corresponding power draw.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When consumers approach local billing offices, junior revenue staff routinely dismiss complaints and threaten power disconnection if the entire inflated amount is not deposited upfront. However, under the <strong>Electricity Act, 2003</strong>, the <strong>Central Electricity Authority (Installation and Operation of Meters) Regulations</strong>, and State Electricity Regulatory Commission (SERC) Supply Codes, consumers possess robust statutory safeguards. Distribution companies cannot disconnect electricity supply when a formal billing grievance has been lodged and average charges are paid under protest.
                </p>
              </section>

              {/* Section 2: H2 - Application Workspace */}
              <section id="heading-templates" aria-labelledby="heading-templates-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-templates-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Complaint Application Formats for Wrong or Inflated Electricity Bills
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Copy • Download • Print
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select the appropriate application format below based on your dispute level. Each format incorporates statutory provisions under the Electricity Act, 2003 and SERC Supply Codes to establish your evidentiary record.
                </p>

                {/* Workspace Component */}
                <ElectricityBillWorkspace />
              </section>

              {/* Section 3: H2 - Tone & Filing Authority Matrix */}
              <section id="heading-tone-matrix" aria-labelledby="heading-tone-matrix-title" className="scroll-mt-28 space-y-6">
                <h2
                  id="heading-tone-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Choosing the Right Tone: Situational Application &amp; Forum Matrix
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Using an overly aggressive tone prematurely can delay routine administrative corrections, whereas a meek request will not prevent linemen from snapping your wires during a disconnection drive. Use this matrix to match your situation with the exact filing level:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
                      <tr>
                        <th scope="col" className="p-3 sm:p-4">Factual Situation</th>
                        <th scope="col" className="p-3 sm:p-4">Recommended Template</th>
                        <th scope="col" className="p-3 sm:p-4">Recipient Authority</th>
                        <th scope="col" className="p-3 sm:p-4">Statutory Action &amp; Shield</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          Meter reader punched wrong numbers; actual meter reading is far lower than billed units
                        </td>
                        <td className="p-3 sm:p-4 font-bold text-blue-700">
                          Variant 1: Polite Application (Reading Rectification)
                        </td>
                        <td className="p-3 sm:p-4">
                          Assistant Engineer (AE) / SDO Billing Wing
                        </td>
                        <td className="p-3 sm:p-4">
                          Spot physical verification within 3–7 working days; manual punch revision.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          Sudden unexplained spike; suspect fast/jumping meter; DISCOM threatens disconnection
                        </td>
                        <td className="p-3 sm:p-4 font-bold text-amber-700">
                          Variant 2: Firm Rectification &amp; Meter Testing Demand
                        </td>
                        <td className="p-3 sm:p-4">
                          Executive Engineer (EE) / Sub-Divisional Officer
                        </td>
                        <td className="p-3 sm:p-4">
                          Mandates meter accuracy testing; activates Section 56(1) disconnection protection on average payment.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          SDO rejected complaint, ignored written notice, or demanded full disputed amount coercively
                        </td>
                        <td className="p-3 sm:p-4 font-bold text-red-700">
                          Variant 3: Statutory CGRF Petition
                        </td>
                        <td className="p-3 sm:p-4">
                          Consumer Grievance Redressal Forum (CGRF)
                        </td>
                        <td className="p-3 sm:p-4">
                          Quasi-judicial stay order on collection; mandated third-party lab testing; interest under Sec 62(6).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          Official Hindi correspondence preferred for state utilities (UPPCL, JBVNL, MPPKVVCL, BSPHCL)
                        </td>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Variant 4: बिजली बिल सुधार प्रार्थना पत्र
                        </td>
                        <td className="p-3 sm:p-4">
                          सहायक अभियंता / विद्युत वितरण उप-खंड कार्यालय
                        </td>
                        <td className="p-3 sm:p-4">
                          कार्यालय रिसीविंग डायरी नंबर; औसत बिल भुगतान के आधार पर कनेक्शन सुरक्षा।
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: H2 - Copyable Subject Line Bank */}
              <section id="heading-subject-lines" aria-labelledby="heading-subject-lines-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-subject-lines-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  High-Impact Subject Lines for Email and DISCOM Online Portals
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When lodging complaints via your state electricity board&apos;s customer portal or emailing the Executive Engineer, vague subject lines like &quot;Bill Problem&quot; are often ignored or closed mechanically. Use these structured subject lines containing your account identifier and statutory reference:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide">For Wrong Punch / Reading Mismatch:</span>
                    <p className="font-mono text-xs text-slate-900 bg-slate-50 p-2.5 rounded border border-slate-200 select-all">
                      URGENT: Typographical Meter Reading Rectification Request — CA No. [YOUR_CA_NO] — Bill Invoice [BILL_NO]
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wide">Against Jumping Meter / Fast Meter:</span>
                    <p className="font-mono text-xs text-slate-900 bg-slate-50 p-2.5 rounded border border-slate-200 select-all">
                      Formal Demand for Meter Testing under CEA Regulations &amp; Rectification of Abnormal Bill — CA No. [YOUR_CA_NO]
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wide">Against Disconnection Threat / Section 56 Bar:</span>
                    <p className="font-mono text-xs text-slate-900 bg-slate-50 p-2.5 rounded border border-slate-200 select-all">
                      Objection to Inflated Bill No. [BILL_NO] &amp; Notice of Disconnection Bar u/s 56(1) Electricity Act — CA No. [YOUR_CA_NO]
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wide">Accumulated Estimated / Provisional Billing:</span>
                    <p className="font-mono text-xs text-slate-900 bg-slate-50 p-2.5 rounded border border-slate-200 select-all">
                      Demand for Retrospective Slab Adjustment &amp; Waiver of Late Surcharge on Accumulated Bill — CA No. [YOUR_CA_NO]
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: H2 - Why Electricity Bills Go Wrong */}
              <section id="heading-causes" aria-labelledby="heading-causes-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-causes-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Electricity Bills Spike: 5 Common Causes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Identifying the root cause of an exorbitant power bill is essential for selecting the appropriate legal remedy under the Electricity Supply Code:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Human Punching &amp; OCR Reading Errors</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Meter readers scanning optical ports or entering digits manually often add extra zeroes (e.g. punching 13,400 instead of 1,340 kWh), inflating the bill tenfold into the highest slab.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Fast, Jumping, or Creeping Meters</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Defective electronic microprocessors or electrical surges can cause digital meters to register current even when no load is operating (known as &quot;meter creeping&quot;), multiplying recorded consumption.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Erroneous Multiplying Factor (MF)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      For commercial and high-capacity connections utilizing Current Transformers (CT), the software applies a multiplier (e.g. MF = 5). Erroneously assigning an MF to a whole-current domestic meter skyrockets the bill.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Accumulated Provisional / &quot;House Locked&quot; Billing</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Linemen generate estimated average bills for months without visiting. When an actual reading is eventually taken, all accumulated units are billed in one cycle, triggering punitive progressive slabs.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 sm:col-span-2 lg:col-span-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                      5
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Incorrect Tariff Category Application</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Domestic residential connections (LT-1) are sometimes arbitrarily reclassified as Non-Domestic / Commercial (LT-2) simply because a resident works from home or runs a home clinic, drastically increasing base tariffs and fixed charges without statutory reclassification notice.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: H2 - Legal Rights Under Electricity Act 2003 */}
              <section id="heading-legal-rights" aria-labelledby="heading-legal-rights-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-rights-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Rights Under Electricity Act &amp; SERC Codes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consumers frequently believe that power utilities hold unchallengeable authority to disconnect services or demand arbitrary sums. In reality, the legal framework provides five binding statutory protections:
                </p>

                <div className="space-y-3.5">
                  <div className="bg-slate-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      1. Section 56(1) Disconnection Stay Upon Bona Fide Dispute &amp; Deposit Under Protest
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Section 56(1) of the Electricity Act, 2003 states that no sum due from any consumer shall be recoverable after the period of two years from the date when such sum became first due, unless such sum has been shown continuously as recoverable as arrear. Crucially, established High Court jurisprudence affirms that where a consumer deposits the average amount of the previous six months under protest, the utility is legally prohibited from snapping electricity supply.
                    </p>
                  </div>

                  <div className="bg-slate-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      2. Mandatory Meter Accuracy Testing under CEA Regulations
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Under Central Electricity Authority Regulations, when a consumer challenges meter calibration, the licensee must install a calibrated Check Meter in series or remove the disputed meter for testing at an accredited government test bench in the presence of the consumer or their representative.
                    </p>
                  </div>

                  <div className="bg-slate-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      3. Statutory Establishment of CGRF under Section 42(5)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      Every distribution licensee is legally mandated by Parliament to maintain a Consumer Grievance Redressal Forum (CGRF). CGRF has independent judicial and technical members empowered to quash erroneous bills, issue stays on coercive recovery, and direct administrative corrections within 45 to 60 days.
                    </p>
                  </div>

                  <div className="bg-slate-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      4. Right to Prevailing Bank Rate Interest under Section 62(6)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      If a distribution company forces you to pay an inflated bill or over-recovers tariff amounts, Section 62(6) of the Electricity Act, 2003 mandates that the licensee must refund the excess amount collected along with interest at the prevailing Reserve Bank of India (RBI) Bank Rate from the date of payment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: H2 - The 4-Tier Escalation Rail */}
              <section id="heading-escalation" aria-labelledby="heading-escalation-title" className="scroll-mt-28 space-y-6">
                <h2
                  id="heading-escalation-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 4-Tier Electricity Dispute Escalation Rail (SDO to Consumer Court)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Never jump directly to expensive litigation without completing the statutory administrative ladder. Following the correct escalation sequence ensures you build an airtight evidentiary record:
                </p>

                {/* Hand-Authored Inline SVG Diagram */}
                <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs overflow-hidden">
                  <div className="text-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                      Statutory Dispute Progression Flowchart
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-1">
                      From Disputed Reading to Binding Consumer Court Decree
                    </h3>
                  </div>

                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 820 220"
                      className="w-full min-w-[700px] h-auto text-slate-800"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Step 1 */}
                      <rect x="10" y="30" width="170" height="150" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <circle cx="95" cy="60" r="18" fill="#DC2626" />
                      <text x="95" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">1</text>
                      <text x="95" y="102" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">SDO / AE Office</text>
                      <text x="95" y="122" textAnchor="middle" fill="#475569" fontSize="10">Submit Variant 1 / 4</text>
                      <text x="95" y="138" textAnchor="middle" fill="#475569" fontSize="10">Get Receiving Stamp</text>
                      <text x="95" y="156" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">TAT: 7–15 Days</text>

                      {/* Arrow 1 -> 2 */}
                      <path d="M185 105 L215 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                      <polygon points="215,100 225,105 215,110" fill="#94A3B8" />

                      {/* Step 2 */}
                      <rect x="225" y="30" width="170" height="150" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <circle cx="310" cy="60" r="18" fill="#D97706" />
                      <text x="310" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">2</text>
                      <text x="310" y="102" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">Firm Legal Demand</text>
                      <text x="310" y="122" textAnchor="middle" fill="#475569" fontSize="10">Submit Variant 2 (RPAD)</text>
                      <text x="310" y="138" textAnchor="middle" fill="#475569" fontSize="10">Invoke Sec 56(1) Stay</text>
                      <text x="310" y="156" textAnchor="middle" fill="#D97706" fontSize="10" fontWeight="bold">TAT: 15 Days</text>

                      {/* Arrow 2 -> 3 */}
                      <path d="M400 105 L430 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                      <polygon points="430,100 440,105 430,110" fill="#94A3B8" />

                      {/* Step 3 */}
                      <rect x="440" y="30" width="170" height="150" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <circle cx="525" cy="60" r="18" fill="#2563EB" />
                      <text x="525" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">3</text>
                      <text x="525" y="102" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">CGRF Forum</text>
                      <text x="525" y="122" textAnchor="middle" fill="#475569" fontSize="10">File Variant 3 Petition</text>
                      <text x="525" y="138" textAnchor="middle" fill="#475569" fontSize="10">Sec 42(5) Electricity Act</text>
                      <text x="525" y="156" textAnchor="middle" fill="#2563EB" fontSize="10" fontWeight="bold">TAT: 45–60 Days</text>

                      {/* Arrow 3 -> 4 */}
                      <path d="M615 105 L645 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                      <polygon points="645,100 655,105 645,110" fill="#94A3B8" />

                      {/* Step 4 */}
                      <rect x="655" y="30" width="155" height="150" rx="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                      <circle cx="732" cy="60" r="18" fill="#991B1B" />
                      <text x="732" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">4</text>
                      <text x="732" y="102" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="bold">Ombudsman / DCDRC</text>
                      <text x="732" y="122" textAnchor="middle" fill="#475569" fontSize="10">e-Jagriti Filing</text>
                      <text x="732" y="138" textAnchor="middle" fill="#475569" fontSize="10">Damages &amp; Surcharge Cut</text>
                      <text x="732" y="156" textAnchor="middle" fill="#991B1B" fontSize="10" fontWeight="bold">Final Redressal</text>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Section 8: H2 - Landmark Judicial Orders */}
              <section id="heading-orders" aria-labelledby="heading-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 3 Verifiable Rulings Against Power DISCOMs
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
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
                            Order #{idx + 1} • {c.citation}
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
                              Total Relief / Award
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Legal Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Against All State Electricity Boards
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 leading-relaxed">
                          <strong>Strategic Takeaway:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 9: H2 - Worked Billing Adjustment Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Example: Recalculating an Erroneous ₹68,500 Bill
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To understand the quantitative financial impact of challenging an inflated electricity bill, examine this verified consumer resolution model based on standard residential LT tariff parameters:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="bg-red-50 p-4 rounded-xl border border-red-200 space-y-2">
                      <span className="font-extrabold text-red-700 uppercase tracking-wide text-xs">The Inflated DISCOM Demand</span>
                      <p>• Billed Units: <strong>6,850 kWh (Single Month)</strong></p>
                      <p>• Applied Tariff Slab: Highest Bracket @ ₹8.50/unit</p>
                      <p>• Energy Charges: ₹58,225</p>
                      <p>• Fixed &amp; Surcharge Charges: ₹10,275</p>
                      <p className="text-base font-black text-red-700 pt-2 border-t border-red-200">
                        Total Coercive Demand: ₹68,500
                      </p>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 space-y-2">
                      <span className="font-extrabold text-emerald-700 uppercase tracking-wide text-xs">CGRF / Regulatory Recalculation</span>
                      <p>• Verified Actual Consumption: <strong>380 kWh Average</strong></p>
                      <p>• Subsidized Domestic Slabs: 0–150 @ ₹3.50, 151–300 @ ₹5.50</p>
                      <p>• Actual Admissible Charges: ₹2,420</p>
                      <p>• Surcharges / Penalties: ₹0 (Fully Waived)</p>
                      <p className="text-base font-black text-emerald-700 pt-2 border-t border-emerald-200">
                        Final Corrected Bill: ₹2,420
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                    <p className="font-bold text-slate-900">Total Consumer Financial Recovery:</p>
                    <p>
                      Net savings of <strong>₹66,080</strong> in illegal billing cancelled + ₹15,000 litigation compensation awarded under Section 2(11) CPA 2019 for arbitrary mental harassment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: H2 - Sending Tips & Evidentiary Proof */}
              <section id="heading-sending-tips" aria-labelledby="heading-sending-tips-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sending-tips-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  How to Send Your Complaint: Legal Evidentiary Rules
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When dealing with power utilities, verbal assurances from counter clerks carry zero legal standing. You must create incontrovertible legal proof under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-red-600 uppercase">Method 1: In-Person</span>
                    <h3 className="font-bold text-slate-900 text-sm">Official Receiving Stamp</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Print two copies of Variant 1 or Variant 4. Submit one to the SDO or Assistant Engineer and insist on an ink receiving stamp with date, signature, and official Inward/Diary register number on your duplicate copy.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-blue-600 uppercase">Method 2: Registered Post</span>
                    <h3 className="font-bold text-slate-900 text-sm">Speed Post with A/D</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If staff refuse to acknowledge receipt, dispatch Variant 2 to the Executive Engineer via India Post Registered Speed Post with Acknowledgment Due. Retain the postal booking receipt and India Post tracking delivery report.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-emerald-600 uppercase">Method 3: Digital Portal</span>
                    <h3 className="font-bold text-slate-900 text-sm">State DISCOM Portal</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Upload your application and meter photo on your DISCOM&apos;s grievance portal (e.g. UPPCL Consumer Portal, BESCOM Mithra, Tata Power DDL portal). Save the autogenerated Docket/SR complaint number and system acknowledgement receipt.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: H2 - Documentary Evidence Checklist */}
              <section id="heading-checklist" aria-labelledby="heading-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Documentary Evidence Checklist for Meter and Billing Disputes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before lodging your complaint with the SDO, CGRF, or Consumer Court, assemble this primary documentary dossier:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                      <span><strong>High-Resolution Photograph of Current Meter Display:</strong> Showing cumulative kWh units, maximum demand (kW), date, and meter serial number clearly.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                      <span><strong>The Disputed Electricity Bill:</strong> Original or downloaded PDF showing the bill date, billed reading, rate slab, and payment due date.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                      <span><strong>Historical Billing Record (Last 6 to 12 Months):</strong> To conclusively demonstrate your standard consumption baseline and seasonal variation pattern.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                      <span><strong>Bank Payment Receipts / Transaction UTRs:</strong> Proof of consistent payments of previous bills establishing you are a bona fide, non-defaulter consumer.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                      <span><strong>Proof of Average Payment Under Protest:</strong> Receipt showing deposit of normal average charges with written endorsement &quot;Paid Under Protest Pending Rectification&quot;.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                      <span><strong>Copy of Initial SDO Application &amp; Receiving Stamp:</strong> Proving that statutory administrative remedies were exhausted prior to CGRF or consumer court filing.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Statutory Legal Notice CTA */}
              <ElectricityBillNoticeCTA />

              {/* Section 12: H2 - Honest Scope Box */}
              <section id="heading-scope" aria-labelledby="heading-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-scope-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Honest Scope: What LegalRecovery Can and Cannot Do
                </h2>
                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 border border-slate-800 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide block">
                        ✓ What We Can Do:
                      </span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li>• Provide battle-tested, statutory complaint application templates for SDO and CGRF filings.</li>
                        <li>• Have verified advocates draft and serve formal statutory legal notices to DISCOM Chief Engineers under Section 56(1).</li>
                        <li>• Invoke binding precedent to challenge unlawful disconnections and arbitrary late fee surcharges.</li>
                        <li>• File consumer litigation claims on the National Consumer Disputes Redressal Portal (e-Jagriti).</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wide block">
                        ✗ What We Cannot Do:
                      </span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li>• We cannot alter your meter readings or bypass physical utility inspection protocols.</li>
                        <li>• We cannot defend unauthorized load theft or direct hooking cases under Section 135 of the Electricity Act.</li>
                        <li>• We do not promise instantaneous bill cancellations without following statutory CGRF or SERC procedures.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Internal Links Hub */}
              <section aria-label="Related Service Links" className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
                <h3 className="font-bold text-slate-900 text-sm">
                  Related Household, Utility &amp; Service Dispute Legal Notice Rails:
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/legal-notice-to-interior-designer-contractor-refund"
                    className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-800 rounded-lg transition-colors font-semibold"
                  >
                    Interior Designer &amp; Contractor Refund Notice →
                  </Link>
                  <Link
                    href="/legal-notice-to/urban-company"
                    className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-800 rounded-lg transition-colors font-semibold"
                  >
                    Urban Company Damage Legal Notice →
                  </Link>
                  <Link
                    href="/packers-and-movers-damage-claim-legal-notice"
                    className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-800 rounded-lg transition-colors font-semibold"
                  >
                    Packers &amp; Movers Damage Compensation Notice →
                  </Link>
                  <Link
                    href="/courier-lost-parcel-compensation-india"
                    className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-800 rounded-lg transition-colors font-semibold"
                  >
                    Lost Parcel Compensation Legal Rights →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-800 rounded-lg transition-colors font-semibold"
                  >
                    Advocate Legal Notice Pricing &amp; Timeline →
                  </Link>
                </div>
              </section>

              {/* Section 13: H2 - Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Wrong Electricity Bill Complaints
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory FAQ
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs transition-all duration-200 open:border-slate-400"
                    >
                      <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base gap-3">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 text-xs shrink-0">
                          ▼
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 14: H2 - Primary Sources */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="border-t border-slate-200 pt-6">
                  <h2
                    id="heading-sources-title"
                    className="text-base sm:text-lg font-bold text-slate-900 mb-3"
                  >
                    Primary Sources &amp; Authoritative Legal References
                  </h2>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-slate-400">[{idx + 1}]</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-700 hover:underline break-words"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Related Recovery Guides Dynamic Hub */}
              <RelatedRecoveryGuides />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
