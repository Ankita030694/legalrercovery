import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PbgInvocationTableOfContents from "./PbgInvocationTableOfContents";
import PbgInvocationScenarioTabs from "./PbgInvocationScenarioTabs";
import PbgInvocationCTA from "./PbgInvocationCTA";

export const revalidate = 86400;

const PAGE_URL = "/wrongful-performance-bank-guarantee-pbg-invocation-stay-recovery";
const EXACT_H1 =
  "When a Buyer Retaliates by Invoking Your Performance Bank Guarantee (PBG): Urgent Section 9 Stay Standards & Post-Encashment Recovery";
const META_TITLE = "Wrongful Bank Guarantee Invocation: Injunction & Restitution";
const META_DESCRIPTION =
  "Buyer retaliated by invoking your PBG? Learn how to obtain a Section 9 stay under egregious fraud or special equities, plus post-encashment restitution.";

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
        alt: formatAltText("Wrongful Bank Guarantee Invocation Injunction & Restitution Guide"),
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

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T12:00:00+05:30",
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

const FAQ_ITEMS = [
  {
    question: "Can an Indian court grant an injunction against the encashment of an unconditional bank guarantee?",
    answer:
      "Yes, but the statutory threshold is extraordinarily high. The Supreme Court in landmark judgments including U.P. State Sugar Corporation v. Sumac International Ltd. and Standard Chartered Bank v. Heavy Engineering Corporation established that courts will only injunct an unconditional bank guarantee under two strict exceptions: (1) egregious fraud of which the bank has notice, vitiating the entire underlying transaction, or (2) special equities where encashment would result in irretrievable injustice or irreparable harm that cannot be remedied by a subsequent award of damages.",
  },
  {
    question: "What is the critical legal difference between a conditional and unconditional bank guarantee?",
    answer:
      "An unconditional bank guarantee obligates the issuing bank to pay immediately on first demand without protest, demur, or reference to disputes under the underlying commercial contract. In contrast, a conditional bank guarantee requires the beneficiary to fulfill specific contractual conditions precedent before invocation—such as issuing a formal notice specifying the contractor's breach or presenting an Independent Engineer or Architect's certificate. Under the Supreme Court's ruling in Hindustan Construction Co. Ltd. v. State of Bihar, if an invocation letter fails to fulfill the exact conditional terms of the guarantee, the bank has no authority to pay and courts readily grant an interim stay.",
  },
  {
    question: "What urgent legal step should a manufacturer take in the first 24 hours of a retaliatory PBG invocation?",
    answer:
      "First, conduct an immediate forensic textual audit of the bank guarantee wording to determine if it contains conditional triggers. Second, deliver a formal written protest letter and legal caveat to the issuing bank branch manager citing Hindustan Construction (1999) 8 SCC 436, putting the bank on written notice that the invocation is defective or fraudulent. Third, file an emergency petition under Section 9 of the Arbitration and Conciliation Act, 1996 before the Commercial Division of the High Court or District Commercial Court seeking an ad-interim ex-parte stay against encashment before SWIFT/NEFT funds debit occurs.",
  },
  {
    question: "What can a supplier do if the bank has already encashed the Performance Bank Guarantee?",
    answer:
      "Once encashed, an injunction cannot be granted because the act is complete. However, the manufacturer is entitled to statutory Restitution under Section 144 of the Code of Civil Procedure, 1908 (CPC) and Section 31(7) of the Arbitration and Conciliation Act, 1996. The supplier should immediately file an application under Section 9(1)(ii)(b) or Section 17 before the Arbitral Tribunal seeking an order directing the buyer to deposit the encashed funds into court escrow, and claim full restitution of the principal amount together with 18% per annum commercial penal interest from the date of debit.",
  },
  {
    question: "Can an Advance Bank Guarantee (ABG) be invoked for its full original value after progressive supply deliveries?",
    answer:
      "No. Invoking the full face value of an Advance Bank Guarantee when the buyer has already adjusted portions of that advance against running account invoices constitutes egregious fraud on the face of the record. The Supreme Court in Gangotri Enterprises Ltd. v. Union of India established that guarantees cannot be encashed for unliquidated damages or sums already liquidated through contractual adjustments. Manufacturers can secure Section 9 injunctions restricting invocation strictly to the unrecovered advance balance.",
  },
  {
    question: "Can an MSME supplier recover a wrongly encashed PBG through the MSME Samadhaan portal?",
    answer:
      "Yes. If the manufacturer holds a valid Udyam Registration (as a Micro or Small Enterprise) dated prior to the contract, an arbitrary or retaliatory encashment of a PBG constitutes an unlawful deduction from the total price of goods supplied under Section 15 of the MSMED Act, 2006. The supplier can file an MSEFC Reference claiming the encashed sum as unpaid principal, triggering statutory monthly compounding interest at three times the RBI Bank Rate under Section 16.",
  },
  {
    question: "What evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 to prove wrongful PBG invocation?",
    answer:
      "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (replacing Section 65B of the Indian Evidence Act), you must provide a signed certificate validating electronic records, accompanied by: joint commissioning reports, Factory Acceptance Test (FAT) sign-offs, email records with full RFC 822 headers proving the buyer accepted the machinery into commercial production, SCADA telemetry logs proving machine operation, and the exact timestamped bank invocation communication.",
  },
  {
    question: "Can a buyer encash a Performance Bank Guarantee to satisfy claims arising under a completely different contract?",
    answer:
      "No. In Gangotri Enterprises Ltd. v. Union of India (2016) 11 SCC 720, the Supreme Court unequivocally held that a bank guarantee furnished for the due performance of Contract 'A' cannot be encashed by the beneficiary to satisfy an unadjudicated claim or alleged breach arising out of a separate and distinct Contract 'B'. Such an invocation is illegal, contrary to the terms of the guarantee, and subject to an immediate Section 9 stay.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Manufacturing & Heavy Machinery Recovery",
      item: `${SITE_URL}/industries/manufacturing-machinery-oem-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "PBG Invocation Stay & Restitution",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

const STATUTORY_TIMELINE_STOPS = [
  {
    phase: "Hour 0 – 12: Invocation Alert",
    statute: "Forensic BG Instrument Audit",
    trigger: "Buyer lodges sudden invocation letter with the issuing bank branch",
    action: "Extract original BG instrument from bank records. Scrutinize every word to determine whether the BG is strictly unconditional or contains conditional breach triggers or certificate requirements.",
    risk: "Assuming the BG is unconditional without reading the operative covenants can cause your legal team to miss open-and-shut contractual defects under the *Hindustan Construction* doctrine.",
    tone: "slate",
  },
  {
    phase: "Hour 12 – 24: Formal Bank Caveat",
    statute: "Notice of Defective Invocation",
    trigger: "Issuing bank prepares internal debit voucher against your credit facility",
    action: "Serve an immediate formal written protest and legal caveat on the issuing bank branch manager. Quote Supreme Court precedents warning the bank of tortious liability if it honors an invocation that departs from the BG covenants.",
    risk: "Banks generally operate on automated processing; without a formal written caveat hand-delivered and emailed to the branch head, payment will be released via RTGS/NEFT within 24–48 hours.",
    tone: "emerald",
  },
  {
    phase: "Hour 24 – 48: Section 9 Injunction",
    statute: "Arbitration & Conciliation Act s.9",
    trigger: "Beneficiary refuses to withdraw invocation and bank signals imminent payout",
    action: "File an emergency petition under Section 9 of the Arbitration and Conciliation Act, 1996 before the High Court Commercial Division. Seek an ad-interim ex-parte stay or an order directing proceeds to be frozen in an escrow account.",
    risk: "Must provide prima facie proof of egregious fraud or special equities (e.g., buyer admitted full commercial commissioning, or buyer is insolvent / moving assets out of jurisdiction).",
    tone: "amber",
  },
  {
    phase: "Day 3 – 15: Post-Encashment Restitution",
    statute: "CPC Section 144 & Arbitration Act s.17 / s.31(7)",
    trigger: "Bank encashed the PBG before a court stay could be obtained",
    action: "Plead Section 144 Restitution before the Arbitral Tribunal or Commercial Court. Demand full refund of encashed principal plus 18% per annum commercial penal interest from the precise date of bank debit.",
    risk: "Delaying notice allows the buyer to absorb the encashed funds into working capital. File Section 9/17 security applications to attach buyer plant assets or bank accounts under Order XXXVIII Rule 5 CPC.",
    tone: "red",
  },
];

const DEBTOR_DEFENSE_MATRIX = [
  {
    defense: "\"A Bank Guarantee is an independent contract between the bank and beneficiary; the court cannot examine the underlying contract.\"",
    reality:
      "While a bank guarantee is technically independent, the Supreme Court in *U.P. State Sugar Corp.* and *Standard Chartered* established two absolute exceptions: Egregious Fraud and Special Equities. When an invocation is infected with established fraud or where encashment would cause irretrievable injustice, courts possess full equitable jurisdiction to restrain encashment.",
    preemption:
      "Present contemporary evidence showing that the buyer accepted the machinery, issued commercial production logs, or timed the invocation in direct retaliation to a statutory overdue payment demand notice.",
  },
  {
    defense: "\"The guarantee says 'on first demand without demur'; the bank has zero right to verify whether a breach actually occurred.\"",
    reality:
      "Under *Hindustan Construction Co. Ltd. v. State of Bihar*, even if a guarantee contains 'without demur' boilerplate, if the operative clause requires the beneficiary to declare or certify that the supplier committed a breach, the bank is legally barred from honoring a bare demand that lacks the mandatory statement.",
    preemption:
      "Audit the buyer's invocation letter against the bank guarantee instrument. If the letter merely says 'encash PBG' without the precise covenant recital required by the BG text, the invocation is void ab initio.",
  },
  {
    defense: "\"The guarantee was encashed yesterday; you cannot obtain an injunction against an already executed transaction.\"",
    reality:
      "While an injunction cannot lie against an encashed guarantee, the beneficiary does NOT obtain unassailable title to the funds. Under Section 144 of the Code of Civil Procedure and Section 31(7) of the Arbitration Act, wrongful encashment triggers immediate restitution orders and penal interest at 18% per annum.",
    preemption:
      "File an immediate application under Section 9(1)(ii)(b) for deposit of the encashed sum into an interest-bearing court fixed deposit, or seek security under Section 17 before the Arbitral Tribunal.",
  },
  {
    defense: "\"We invoked the 100% Advance Bank Guarantee because components are pending, even though 80% goods were delivered.\"",
    reality:
      "Under *Gangotri Enterprises Ltd. v. Union of India*, an Advance BG cannot be converted into an unliquidated damages slush fund. Where the buyer has already adjusted ₹40 Lakh of mobilization advance against progressive invoices, demanding the full ₹50 Lakh ABG constitutes fraud on the face of the record.",
    preemption:
      "Place on record all supply invoices showing explicit 'Mobilization Advance Recovery' credit entries, proving the unliquidated advance is only a fraction of the guarantee face value.",
  },
  {
    defense: "\"The supplier cannot file an MSME Samadhaan reference because this is a bank guarantee dispute, not a goods sale.\"",
    reality:
      "The Supreme Court in *Silpi Industries* affirmed that the MSMED Act has overriding effect over other statutes under Section 24. Unjustified PBG encashment is an illegal deduction from the total contract consideration, fully actionable before the MSEFC for 3x RBI compound interest.",
    preemption:
      "Ensure Udyam registration predates the contract date and file an MSEFC Reference treating the encashed PBG as an overdue operational debt under Section 15 of the MSMED Act.",
  },
];

export default function WrongfulPbgInvocationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Inject Structured Data */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Hero Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            Statute &amp; Precedent Deep-Dive &bull; IND-06 Manufacturing, Heavy Engineering &amp; OEMs
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words with parent hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Summary &bull; Creditor Legal Defense
            </span>
            When an industrial buyer retaliates against your overdue retention bill by invoking a Performance Bank Guarantee (PBG), you must immediately distinguish between conditional and unconditional guarantees under Supreme Court precedents like <em>Hindustan Construction</em>. For unconditional instruments, establish &lsquo;Egregious Fraud&rsquo; or &lsquo;Special Equities&rsquo; under Section 9 of the Arbitration Act, or enforce post-encashment Section 144 CPC restitution with 18% penal interest. Access our authoritative{" "}
            <Link
              href="/industries/manufacturing-machinery-oem-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline decoration-red-400/60 underline-offset-2"
            >
              Manufacturing &amp; Machinery OEM Debt Recovery Hub
            </Link>{" "}
            for complete industrial creditor strategies.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Urgent Injunction Window</p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-red-400">
                24–72 Hours
              </p>
              <p className="text-[11px] text-slate-300">Before Bank SWIFT Debit</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Conditional BG Defect</p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-emerald-400">
                Near 100% Stay
              </p>
              <p className="text-[11px] text-slate-300">Hindustan Construction Rule</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Unconditional BG Bar</p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100">
                Fraud / Equities
              </p>
              <p className="text-[11px] text-slate-300">U.P. State Sugar Doctrine</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Restitution Recovery</p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-amber-400">
                18% Interest
              </p>
              <p className="text-[11px] text-slate-300">CPC s.144 / Arb Act s.31(7)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Component */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              {
                label: "Manufacturing & Heavy Machinery",
                href: "/industries/manufacturing-machinery-oem-recovery",
              },
              {
                label: "Wrongful PBG Invocation Stay & Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <PbgInvocationTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Retaliatory PBG Trap */}
            <section
              id="heading-retaliatory-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  The Retaliatory PBG Trap: How Industrial Buyers Weaponize Guarantees
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  In the Indian capital goods, special purpose machinery (SPM), heavy engineering, and automotive OEM sectors, contractual arrangements routinely demand that the manufacturer furnish a Performance Bank Guarantee (PBG), typically valued at 5% to 10% of total contract value. Simultaneously, buyers routinely withhold a final 10% to 20% milestone retention payment until successful commercial trial runs or expiry of a 12-month Defect Liability Period (DLP).
                </p>
                <p>
                  A catastrophic commercial pattern occurs when the manufacturer completes installation, assists in factory commissioning, and demands release of the final milestone and retention dues. Instead of releasing the withheld funds, the corporate buyer—often facing liquidity constraints or seeking an artificial discount—threatens or executes an immediate invocation of the manufacturer&apos;s PBG. By presenting an invocation letter to the issuing bank, the buyer effectively converts a legitimate billing dispute into an immediate liquidity raid, draining the manufacturer&apos;s working capital and impairing their banking limits.
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-xl my-4">
                  <p className="font-bold text-red-900 text-sm mb-1">
                    The Legal Reality of Autonomous Bank Guarantees in India
                  </p>
                  <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                    Under Section 126 of the Indian Contract Act, 1872, a bank guarantee is an autonomous, independent contract between the issuing bank and the beneficiary. The landmark principle laid down by the Supreme Court is that banks are not concerned with underlying disputes between the buyer and seller. However, this autonomy is not absolute. Indian law provides powerful judicial mechanisms—specifically through urgent Section 9 petitions under the Arbitration and Conciliation Act, 1996 and post-encashment Section 144 CPC restitution—to defeat abusive, retaliatory invocations.
                  </p>
                </div>
                <p>
                  Understanding whether your guarantee is <em>conditional</em> or <em>unconditional</em>, recognizing the precise evidentiary threshold for &lsquo;Egregious Fraud&rsquo; and &lsquo;Special Equities&rsquo;, and initiating prompt post-encashment recovery with commercial penal interest represent the difference between enterprise solvency and crippling working-capital distress.
                </p>
              </div>
            </section>

            {/* Section 2: Conditional vs Unconditional BGs */}
            <section
              id="heading-conditional-vs-unconditional"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Conditional vs Unconditional BGs: The Vital Contractual Distinction
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  The first and most critical legal mistake made by engineering CFOs and commercial managers is assuming that every bank guarantee is completely unconditional. While master purchase orders often state that the vendor must provide an &ldquo;unconditional bank guarantee,&rdquo; the actual text drafted by the issuing bank often contains specific conditional covenants.
                </p>
                <p>
                  Under Indian jurisprudence, the terms of the <strong>Bank Guarantee instrument itself govern strictly</strong>, regardless of conflicting clauses in the underlying purchase agreement. If the bank guarantee requires a specific declaration of breach or an independent certificate, an invocation letter that omits these precise terms is legally ineffective.
                </p>

                {/* Comparison Table */}
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden border border-slate-200">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Covenant Parameter</th>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Unconditional Bank Guarantee</th>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Conditional Bank Guarantee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Operative Verbiage</td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          &ldquo;Payable on first demand without demur, contestation, or reference to the supplier.&rdquo;
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          &ldquo;Payable upon the beneficiary certifying that the supplier has failed to fulfill contractual clause X.&rdquo;
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Bank&apos;s Verification Duty</td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Zero duty to verify breach; bank must pay immediately upon receiving a demand letter.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 font-medium text-emerald-800">
                          Strict fiduciary duty to verify that the exact condition precedent is recited in the demand letter.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Judicial Stay Bar</td>
                        <td className="p-3 sm:p-4 text-slate-700 font-medium text-red-700">
                          Sky-high: Injunction granted only upon proving Egregious Fraud or Irretrievable Injustice.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 font-medium text-emerald-700">
                          Near 100% stay if the invocation letter fails to recite the exact contractual condition precedent.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Governing Precedent</td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          <em>U.P. State Sugar Corp.</em> (1997) 1 SCC 568
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          <em>Hindustan Construction Co. Ltd.</em> (1999) 8 SCC 436
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                  <p className="font-bold text-emerald-900 text-sm mb-1">
                    The Hindustan Construction Doctrine: Inspect Every Syllable
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    In <em>Hindustan Construction Co. Ltd. v. State of Bihar</em> (1999) 8 SCC 436, the Supreme Court held that where a bank guarantee stipulated that payment would be made &ldquo;in the event that the obligations under the contract have not been fulfilled,&rdquo; an invocation letter that merely requested encashment without specifying the non-fulfillment of obligations was defective. The bank had no jurisdiction to honor the invocation, and an injunction was granted. Always check whether the buyer&apos;s letter complies strictly with the BG covenants!
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Section 9 Arbitration Act Standards */}
            <section
              id="heading-section-9-standards"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Section 9 Arbitration Act: Injunction Standards for Bank Guarantees
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  When commercial negotiations collapse and an abusive buyer issues an invocation letter, the manufacturer&apos;s primary statutory remedy is an emergency application under <strong>Section 9 of the Arbitration and Conciliation Act, 1996</strong> before the Commercial Division of the High Court or the District Commercial Court.
                </p>
                <p>
                  Under Section 9(1)(ii)(b) and Section 9(1)(ii)(e), the court has comprehensive interim powers to secure the amount in dispute and grant interim injunctions. However, because bank guarantees underpin international and domestic commerce, Indian courts apply a strict tripartite test before restraining encashment:
                </p>
                <ol className="list-decimal pl-5 space-y-2 font-medium text-slate-800">
                  <li>
                    <strong>Prima Facie Case:</strong> The applicant must demonstrate that the invocation is either textually defective under the terms of the guarantee, or tainted by fraud of an egregious nature.
                  </li>
                  <li>
                    <strong>Irreparable Injury / Irretrievable Injustice:</strong> The applicant must prove that allowing encashment would inflict extraordinary commercial injury that cannot be compensated later through money damages (e.g., buyer&apos;s admitted insolvency, flight of capital, or financial ruin).
                  </li>
                  <li>
                    <strong>Balance of Convenience:</strong> The court weighs whether maintaining the status quo or securing the proceeds in court escrow causes less prejudice than permitting immediate cash dissipation by an abusive buyer.
                  </li>
                </ol>

                {/* Hand-Authored SVG Decision Tree */}
                <div className="my-8 bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 text-white">
                  <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-4">
                    Statutory Decision Architecture &bull; Section 9 Injunction vs Restitution
                  </p>
                  <div className="w-full overflow-x-auto flex justify-center">
                    <svg
                      width="760"
                      height="340"
                      viewBox="0 0 760 340"
                      className="max-w-full h-auto"
                      aria-label="PBG Injunction vs Post-Encashment Restitution Decision Matrix"
                    >
                      {/* Flow Node 1 */}
                      <rect x="260" y="15" width="240" height="48" rx="8" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                      <text x="380" y="44" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                        Buyer Issues PBG Invocation
                      </text>

                      {/* Connecting Line Down */}
                      <line x1="380" y1="63" x2="380" y2="95" stroke="#94A3B8" strokeWidth="2" />

                      {/* Condition Check Diamond */}
                      <polygon points="380,95 480,140 380,185 280,140" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                      <text x="380" y="136" fill="#93C5FD" fontSize="11" fontWeight="bold" textAnchor="middle">
                        Is Guarantee Text
                      </text>
                      <text x="380" y="152" fill="#93C5FD" fontSize="11" fontWeight="bold" textAnchor="middle">
                        Conditional?
                      </text>

                      {/* Branch YES (Left) */}
                      <line x1="280" y1="140" x2="150" y2="140" stroke="#10B981" strokeWidth="2" />
                      <line x1="150" y1="140" x2="150" y2="185" stroke="#10B981" strokeWidth="2" />
                      <text x="210" y="132" fill="#34D399" fontSize="10" fontWeight="bold">YES (Covenants)</text>

                      <rect x="50" y="185" width="200" height="60" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                      <text x="150" y="210" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">
                        Audit Invocation Notice
                      </text>
                      <text x="150" y="228" fill="#ECFDF5" fontSize="10" textAnchor="middle">
                        Hindustan Construction Rule:
                      </text>
                      <text x="150" y="242" fill="#ECFDF5" fontSize="10" textAnchor="middle">
                        Missing recital = 100% Stay
                      </text>

                      {/* Branch NO (Right) */}
                      <line x1="480" y1="140" x2="610" y2="140" stroke="#EF4444" strokeWidth="2" />
                      <line x1="610" y1="140" x2="610" y2="185" stroke="#EF4444" strokeWidth="2" />
                      <text x="525" y="132" fill="#F87171" fontSize="10" fontWeight="bold">NO (Unconditional)</text>

                      <rect x="510" y="185" width="200" height="60" rx="8" fill="#450A0A" stroke="#EF4444" strokeWidth="1.5" />
                      <text x="610" y="210" fill="#FECACA" fontSize="11" fontWeight="bold" textAnchor="middle">
                        U.P. State Sugar Bar
                      </text>
                      <text x="610" y="228" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                        Must prove Egregious Fraud
                      </text>
                      <text x="610" y="242" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                        or Special Equities
                      </text>

                      {/* Bottom Decision: Encashment Status */}
                      <line x1="150" y1="245" x2="150" y2="280" stroke="#94A3B8" strokeWidth="1.5" />
                      <line x1="610" y1="245" x2="610" y2="280" stroke="#94A3B8" strokeWidth="1.5" />
                      <line x1="150" y1="280" x2="610" y2="280" stroke="#94A3B8" strokeWidth="1.5" />
                      <line x1="380" y1="280" x2="380" y2="295" stroke="#94A3B8" strokeWidth="2" />

                      <rect x="230" y="295" width="300" height="40" rx="8" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                      <text x="380" y="318" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">
                        If Encashed: CPC s.144 Restitution + 18% Interest
                      </text>
                    </svg>
                  </div>
                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    Figure 1: Statutory Injunction vs Post-Encashment Restitution Decision Matrix (Commercial Courts Act / Arbitration Act)
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: The Two Exceptions */}
            <section
              id="heading-fraud-special-equities"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  The Two Exceptions: Proving Egregious Fraud and Special Equities
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  In the landmark case of <em>U.P. State Sugar Corporation v. Sumac International Ltd.</em> (1997) 1 SCC 568, the Supreme Court of India codified the two narrow, exclusive exceptions to the rule against injuncting unconditional bank guarantees:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {/* Card 1: Egregious Fraud */}
                  <div className="bg-red-50/60 border border-red-200 rounded-xl p-5 shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                      <h3 className="text-sm font-bold uppercase tracking-wider text-red-950">
                        Exception 1: Egregious Fraud
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      The fraud must be of an &ldquo;egregious nature as to vitiate the entire underlying transaction,&rdquo; and the beneficiary must be seeking to take advantage of the fraud. Crucially, the fraud must be known to the bank, or established with unimpeachable documentary evidence.
                    </p>
                    <p className="text-[11px] font-semibold text-red-900 bg-red-100/80 p-2 rounded-lg">
                      Example: Beneficiary invokes an Advance BG for ₹1 Crore when signed accounts confirm ₹90 Lakh of advance was already adjusted against delivered machinery.
                    </p>
                  </div>

                  {/* Card 2: Special Equities & Irretrievable Injustice */}
                  <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-5 shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-950">
                        Exception 2: Special Equities
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      Encashment would result in &ldquo;irretrievable injustice&rdquo; of the most exceptional nature. Mere financial hardship or commercial inconvenience does not suffice; the applicant must prove that it would be virtually impossible to recover the money later from the beneficiary.
                    </p>
                    <p className="text-[11px] font-semibold text-amber-900 bg-amber-100/80 p-2 rounded-lg">
                      Example: Buyer is in active NCLT insolvency, faces winding-up, or has admitted in writing that the machinery operates flawlessly while liquidating corporate assets.
                    </p>
                  </div>
                </div>

                <p>
                  In <em>BSES Ltd. (Now Reliance Infrastructure Ltd.) v. Fenner India Ltd.</em> (2006) 2 SCC 728, the Supreme Court clarified that ordinary contractual disputes—such as whether equipment achieved 98% efficiency versus 95% efficiency—do not satisfy the test of fraud. Therefore, applications under Section 9 must never merely re-argue the commercial breach; they must frame the invocation itself as a fraudulent extortion tactic.
                </p>
              </div>
            </section>

            {/* Section 5: Interactive Scenarios */}
            <section
              id="heading-interactive-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Interactive Scenarios: Responding to Threat of Bank Guarantee Breach
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Explore four authentic commercial scenarios where capital goods manufacturers, EPC contractors, and OEM suppliers face wrongful bank guarantee encashment. Click each scenario to view the buyer&apos;s pretext, statutory reality, stay feasibility, and tactical recovery steps.
              </p>

              {/* Client Scenario Component */}
              <PbgInvocationScenarioTabs />
            </section>

            {/* Section 6: Critical 72-Hour Emergency Action Timeline */}
            <section
              id="heading-emergency-timeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  6
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Critical 72-Hour Emergency Action Timeline Before Bank Encashment
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700 mb-6">
                <p>
                  Once an invocation letter hits the bank&apos;s trade finance desk, the operational window before funds leave your credit facility is typically 24 to 72 hours. Managing this window with military precision determines whether you prevent wrongful debit or transition immediately into restitution proceedings.
                </p>
              </div>

              {/* Timeline Cards */}
              <div className="space-y-4">
                {STATUTORY_TIMELINE_STOPS.map((stop, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs hover:border-slate-300 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px] font-mono">
                          {idx + 1}
                        </span>
                        {stop.phase}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {stop.statute}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm">
                      <p className="text-slate-600">
                        <strong className="text-slate-800">Trigger:</strong> {stop.trigger}
                      </p>
                      <p className="text-slate-700">
                        <strong className="text-slate-900">Required Action:</strong> {stop.action}
                      </p>
                      <div className="bg-red-50 border-l-2 border-red-500 p-2.5 rounded-r-lg text-[11px] text-red-900">
                        <strong>Operational Risk:</strong> {stop.risk}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: The Post-Encashment Recovery Playbook */}
            <section
              id="heading-post-encashment-restitution"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  7
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  The Post-Encashment Recovery Playbook: Restitution Under Section 144
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  Industrial manufacturers often give up in despair once the bank informs them that funds have been debited and remitted to the buyer. A widespread misconception is that an encashed guarantee is a closed chapter. Under Indian law, nothing could be further from the truth.
                </p>
                <p>
                  The moment a buyer encashes a Performance Bank Guarantee wrongfully, they become subject to the <strong>Doctrine of Restitution</strong>, codified in Section 144 of the Code of Civil Procedure, 1908 and inherent in the powers of an Arbitral Tribunal under Section 31(7) and Section 31A of the Arbitration and Conciliation Act, 1996.
                </p>
                <div className="bg-slate-900 text-white rounded-xl p-5 my-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-2">
                    The Restitution Mandate: The Abusive Buyer Cannot Keep the Benefit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                    Restitution rests on the equitable principle that no party may obtain an unjust benefit through premature or wrongful enforcement of security. In arbitration, when the tribunal finds that the supplier was not in material breach, the tribunal issues a mandatory award directing:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-300">
                    <li>Immediate refund of 100% of the encashed bank guarantee proceeds.</li>
                    <li>
                      <strong>Commercial Penal Interest at 18% per annum</strong> from the exact date of bank debit to the date of actual realization.
                    </li>
                    <li>Compensation for bank guarantee commission fees, margin money lock-in costs, and collateral interest.</li>
                    <li>Full indemnification of legal and arbitral costs under Section 31A of the Arbitration Act.</li>
                  </ul>
                </div>
                <p>
                  Furthermore, under Section 9(1)(ii)(b) or Section 17, an applicant can seek an interim order compelling the beneficiary to deposit the encashed sum into court registry escrow or furnish solvent counter-security, preventing the buyer from siphoning the money during the pendency of arbitral hearings.
                </p>
              </div>
            </section>

            {/* Section 8: Worked Restitution Ledger */}
            <section
              id="heading-worked-financial-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  8
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Worked Restitution Ledger: ₹50L PBG Encashment + 18% Penal Interest
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  Consider an industrial engineering manufacturer that supplied a ₹5 Crore automated packaging plant. The buyer withheld a ₹50 Lakh (10%) retention milestone and, upon receiving the manufacturer&apos;s demand notice, retaliated by invoking the ₹50 Lakh Performance Bank Guarantee. The bank debited the manufacturer&apos;s CC account on November 15, 2025.
                </p>
                <p>
                  The manufacturer initiated emergency Section 9 proceedings and invoked arbitration under Section 21. Below is the financial restitution ledger awarded against the buyer after a 14-month arbitration proceeding:
                </p>

                {/* Restitution Financial Table */}
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden border border-slate-200">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Claim Head &bull; Statutory Authority</th>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Computation Basis</th>
                        <th className="p-3 sm:p-4 font-bold border-b border-slate-800 text-right">Awarded Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Principal PBG Restitution
                          <span className="block text-[11px] font-normal text-slate-500">CPC s.144 / Arbitration s.31(7)</span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          100% refund of wrongfully encashed performance security
                        </td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-slate-900 text-right">
                          ₹50,00,000
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          18% Commercial Penal Interest
                          <span className="block text-[11px] font-normal text-slate-500">Arbitration Act s.31(7)(b)</span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          18% p.a. simple interest on ₹50L across 14 months (425 days)
                        </td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-emerald-700 text-right">
                          ₹10,47,945
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Bank Charges &amp; Collateral Loss
                          <span className="block text-[11px] font-normal text-slate-500">Contract Act s.73 Direct Loss</span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Issuance commission, CC interest spike, and FD lien lock-in costs
                        </td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-slate-900 text-right">
                          ₹2,40,000
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Underlying Retention Milestone
                          <span className="block text-[11px] font-normal text-slate-500">Sale of Goods Act s.55 Action for Price</span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Withheld 10% commissioning balance recovered with 12% interest
                        </td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-slate-900 text-right">
                          ₹57,00,000
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Legal &amp; Arbitral Cost Indemnity
                          <span className="block text-[11px] font-normal text-slate-500">Arbitration Act s.31A &lsquo;Costs Follow the Event&rsquo;</span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Tribunal fees, High Court Section 9 advocate representation
                        </td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-slate-900 text-right">
                          ₹4,50,000
                        </td>
                      </tr>
                      <tr className="bg-slate-900 text-white font-bold">
                        <td className="p-3 sm:p-4 text-white">Total Recoverable Decree</td>
                        <td className="p-3 sm:p-4 text-slate-300">Enforceable under Commercial Courts Act / CPC s.36</td>
                        <td className="p-3 sm:p-4 text-emerald-400 font-mono text-base text-right">
                          ₹1,24,37,945
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                  <p className="font-bold text-emerald-900 text-sm mb-1">
                    Calculate Statutory Compounding Interest Online
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    If your manufacturing firm is registered under the MSMED Act as a Micro or Small enterprise, your claim carries statutory monthly compound interest at three times the RBI Bank Rate under Section 16. Run your exact invoice and retention dates through our free{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="font-bold text-emerald-900 underline decoration-emerald-600 hover:text-emerald-700"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>{" "}
                    to audit your total claim ledger.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: BSA 2023 Section 63 Evidence Checklist */}
            <section
              id="heading-evidence-bsa63"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  9
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  BSA 2023 Section 63 Evidence Checklist to Prove Wrongful Invocation
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  To secure an urgent injunction under Section 9 or prevail in a Section 144 restitution claim, the manufacturer must place electronic evidence before the court that withstands scrutiny under <strong>Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced Section 65B of the Indian Evidence Act, 1872.
                </p>
                <p>
                  Your counsel must assemble an exhaustive forensic dossier containing the following verified electronic exhibits:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      1. Commissioning &amp; Acceptance Logs
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Signed Factory Acceptance Test (FAT) protocol certificates.</li>
                      <li>Site Acceptance Test (SAT) sign-offs and trial run minutes.</li>
                      <li>Provisional Acceptance Certificate (PAC) or joint punch-list closures.</li>
                      <li>SCADA / PLC telemetry logs demonstrating commercial runtime without breakdown.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      2. Retaliation &amp; Demand Nexus Logs
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Email communications with full RFC 822 internet headers proving dates.</li>
                      <li>Advocate Demand Notice demanding release of final retention milestone.</li>
                      <li>Buyer&apos;s invocation letter issued within days of receiving your statutory demand.</li>
                      <li>Written admissions from buyer production managers praising machine output.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      3. Bank Guarantee Forensic Audit File
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Original Bank Guarantee text and all formal amendment SFMS messages.</li>
                      <li>Beneficiary&apos;s invocation demand letter stamped by the issuing bank branch.</li>
                      <li>Comparison chart demonstrating omitted conditional covenants.</li>
                      <li>Written caveat and legal protest served on the branch manager.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      4. Financial &amp; GST Reconciliation
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>GST e-Invoices and GSTR-2B ITC reconciliation proving buyer claimed input tax.</li>
                      <li>Bank statement proving debit of PBG funds and margin money interest loss.</li>
                      <li>Progressive supply invoices showing advance adjustments for ABGs.</li>
                      <li>Section 63 BSA compliance certificate signed by Systems Administrator.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Pre-Emption Matrix */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  10
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Pre-Emption Matrix: Defeating 5 Common Buyer and Bank Defenses
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700 mb-6">
                <p>
                  When manufacturers challenge a bank guarantee invocation, buyers and banks deploy predictable procedural defenses to defeat injunctions. Below is our practitioner playbook for dismantling each defense:
                </p>
              </div>

              {/* Defense Pre-emption Cards */}
              <div className="space-y-4">
                {DEBTOR_DEFENSE_MATRIX.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Buyer/Bank Defense {idx + 1}: {item.defense}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm mt-3">
                      <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg">
                        <strong className="block text-slate-700 text-[11px] uppercase tracking-wider mb-1">
                          Judicial &amp; Statutory Reality
                        </strong>
                        <p className="text-slate-600 leading-relaxed">{item.reality}</p>
                      </div>

                      <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
                        <strong className="block text-emerald-800 text-[11px] uppercase tracking-wider mb-1">
                          Creditor Pre-Emptive Counter-Action
                        </strong>
                        <p className="text-emerald-900 font-medium leading-relaxed">
                          {item.preemption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 11: Verified Supreme Court Precedents */}
            <section
              id="heading-judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  11
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Verified Supreme Court Precedents on Bank Guarantee Injunctions
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700 mb-6">
                <p>
                  Citing unverified case law or general civil injunction principles in a bank guarantee dispute is fatal. Commercial court judges require strict adherence to landmark Supreme Court authorities:
                </p>
              </div>

              {/* Precedent Cards with bg-[#DC2626] left accent bars */}
              <div className="space-y-4">
                {/* Precedent 1 */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs border-l-4 border-l-[#DC2626]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      U.P. State Sugar Corporation v. Sumac International Ltd. (1997) 1 SCC 568
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-800">
                      Landmark Bench &bull; Unconditional BG Exceptions
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Authoritative Holding:</strong> The Supreme Court established that courts must not restrain the encashment of an unconditional bank guarantee unless one of two strict exceptions is established: (1) fraud of an egregious nature of which the bank has notice, and which vitiates the very foundation of the guarantee, or (2) special equities where irretrievable injustice or irreparable harm would occur to the applicant.
                  </p>
                </div>

                {/* Precedent 2 */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs border-l-4 border-l-[#DC2626]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Hindustan Construction Co. Ltd. v. State of Bihar (1999) 8 SCC 436
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Conditional BG &bull; Strict Covenant Adherence
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Authoritative Holding:</strong> Where a bank guarantee contains conditional clauses—such as requiring the beneficiary to state that the contractor failed to fulfill obligations—an invocation letter that merely demands payment without reciting the exact breach condition is defective and invalid. The issuing bank has no authority to make payment, and the court will readily grant an injunction.
                  </p>
                </div>

                {/* Precedent 3 */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs border-l-4 border-l-[#DC2626]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Standard Chartered Bank v. Heavy Engineering Corporation Ltd. (2020) 13 SCC 574
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-800">
                      Bank Autonomy &bull; Strict Construction of Terms
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Authoritative Holding:</strong> Reaffirmed that while the bank is not concerned with disputes under the parent agreement, the bank&apos;s commitment to pay is strictly conditioned upon the invocation letter complying to the letter with the covenants of the guarantee. Invocations that deviate from the stipulated format must be dishonored.
                  </p>
                </div>

                {/* Precedent 4 */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs border-l-4 border-l-[#DC2626]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Gangotri Enterprises Ltd. v. Union of India (2016) 11 SCC 720
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      Cross-Contract Bar &bull; Unliquidated Sums
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Authoritative Holding:</strong> The beneficiary cannot encash a Performance Bank Guarantee submitted under Contract &lsquo;A&rsquo; to satisfy unliquidated damages or claims arising out of a completely separate Contract &lsquo;B&rsquo;. Such an invocation constitutes an illegal diversion of security and is liable to be stayed under Section 9.
                  </p>
                </div>

                {/* Precedent 5 */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs border-l-4 border-l-[#DC2626]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      BSES Ltd. (Reliance Infrastructure) v. Fenner India Ltd. (2006) 2 SCC 728
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-800">
                      Special Equities &bull; Exceptional Threshold
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Authoritative Holding:</strong> Clarified that &lsquo;irretrievable injustice&rsquo; must be of an exceptional nature which would make it impossible for the guarantor/contractor to reimburse itself if it ultimately succeeds. Mere commercial difficulty or potential insolvency without proof of asset flight does not satisfy the test.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Dual-Track B2B Action Funnel */}
            <section className="scroll-mt-28">
              <PbgInvocationCTA />
            </section>

            {/* Section 13: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  12
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Frequently Asked Questions on Wrongful PBG Invocation &amp; Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all duration-200 open:bg-white open:border-slate-300"
                  >
                    <summary className="flex items-center justify-between gap-3 font-semibold text-xs sm:text-sm text-slate-900 cursor-pointer list-none">
                      <span className="flex items-start gap-2.5">
                        <span className="text-[#DC2626] font-bold text-sm shrink-0 mt-0.5">
                          Q{idx + 1}.
                        </span>
                        <span>{faq.question}</span>
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed pl-6">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 14: Primary Statutory Statutes & Bare Act Citations */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  13
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Primary Statutory Statutes, Regulations &amp; Bare Act Citations
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-3 text-slate-700">
                <p>
                  Every commercial pleading, emergency stay petition, and restitution application drafted by our legal recovery team strictly adheres to authoritative Indian statutes and judicial portals:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 text-xs">Arbitration &amp; Conciliation Act, 1996</p>
                    <p className="text-[11px] text-slate-600">
                      Sections 9 (Interim Injunctions), 17 (Tribunal Relief), 21 (Invocation Notice), 31(7) (18% Commercial Interest) &amp; 31A (Cost Regime).
                    </p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1978"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[11px] font-bold text-[#DC2626] hover:underline mt-1 inline-block"
                    >
                      India Code: Act No. 26 of 1996 &rarr;
                    </a>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 text-xs">Code of Civil Procedure, 1908 (CPC)</p>
                    <p className="text-[11px] text-slate-600">
                      Section 144 (Doctrine of Restitution), Order XXXVIII Rule 5 (Attachment Before Judgment), Order XXXIX Rules 1 &amp; 2 (Temporary Injunctions).
                    </p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2191"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[11px] font-bold text-[#DC2626] hover:underline mt-1 inline-block"
                    >
                      India Code: Act No. 05 of 1908 &rarr;
                    </a>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 text-xs">Indian Contract Act, 1872</p>
                    <p className="text-[11px] text-slate-600">
                      Sections 126 (Bank Guarantee Contract), 128 (Co-extensive Surety Liability), 70 (Quantum Meruit) &amp; 73 (Damages for Breach).
                    </p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[11px] font-bold text-[#DC2626] hover:underline mt-1 inline-block"
                    >
                      India Code: Act No. 09 of 1872 &rarr;
                    </a>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 text-xs">Bharatiya Sakshya Adhiniyam, 2023 (BSA)</p>
                    <p className="text-[11px] text-slate-600">
                      Section 63 (Admissibility of Electronic Records &amp; Mandatory Hash Verification Certificates for PLC/SCADA &amp; Emails).
                    </p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/21199"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[11px] font-bold text-[#DC2626] hover:underline mt-1 inline-block"
                    >
                      India Code: Act No. 47 of 2023 &rarr;
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-800 mb-2">
                    Related Industrial Recovery Guides &amp; Spoke Playbooks:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link
                      href="/industries/manufacturing-machinery-oem-recovery"
                      className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                    >
                      &larr; Manufacturing &amp; OEM Pillar Hub
                    </Link>
                    <Link
                      href="/custom-industrial-machinery-balance-withheld-after-installation-recovery"
                      className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                    >
                      Machinery Commissioning Balance Recovery
                    </Link>
                    <Link
                      href="/auto-ancillary-oem-arbitrary-debit-note-tooling-cost-recovery"
                      className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                    >
                      Auto-Ancillary Debit Note &amp; Tooling Recovery
                    </Link>
                    <Link
                      href="/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options"
                      className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                    >
                      Medium Enterprise Recovery Options
                    </Link>
                    <Link
                      href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                      className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                    >
                      MSME Samadhaan vs Legal Notice
                    </Link>
                    <Link
                      href="/msme-odr-portal-delayed-payment-guide"
                      className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                    >
                      MSME ODR Portal Delayed Payment Guide
                    </Link>
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                    >
                      3x RBI Interest Calculator
                    </Link>
                  </div>
                </div>
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
