import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import PackersMoversNoticeCTA from "./PackersMoversNoticeCTA";
import PackersMoversTableOfContents from "./PackersMoversTableOfContents";
import PackersMoversProblemTabs from "./PackersMoversProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Packers and Movers Damaged Goods? Claim & Legal Notice",
  description:
    "Packers and movers damaged or lost goods? Carrier liability, transit insurance, the evidence that matters and a notice to recover.",
  alternates: {
    canonical: `${SITE_URL}/packers-and-movers-damage-claim-legal-notice`,
  },
  openGraph: {
    title: "Packers and Movers Damaged Goods? Claim & Legal Notice",
    description:
      "Packers and movers damaged or lost goods? Carrier liability under Carriage by Road Act 2007, transit insurance claims, and legal notice procedure to recover compensation.",
    url: `${SITE_URL}/packers-and-movers-damage-claim-legal-notice`,
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
    title: "Carriage by Road Act, 2007 (Act No. 41 of 2007) — Section 10 (Notice of Loss/Damage) & Section 13 (Presumption of Carrier Negligence)",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Nath Bros. Exim International Ltd. v. Best Roadways Ltd. (2000) 4 SCC 553 — Supreme Court of India on Strict Common Carrier Liability",
    url: "https://main.sci.gov.in/judgment/judis/16766.pdf",
  },
  {
    title: "Patel Roadways Ltd. v. Birla Yamaha Ltd. (2000) 4 SCC 91 — Supreme Court on Consumer Forum Jurisdiction Over Road Carriers",
    url: "https://main.sci.gov.in/judgment/judis/16591.pdf",
  },
  {
    title: "Bharathi Knitting Co. v. DHL Worldwide Express Courier (1996) 4 SCC 704 — Supreme Court on Consignment Note Liability Exclusions",
    url: "https://main.sci.gov.in/judgment/judis/13354.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Unboxing Videos, WhatsApp Chats & GPS Proofs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Dispute Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Common Carrier Cannot Limit Liability to Nominal Fine-Print Amounts When Negligence Is Manifest",
    parties: "VRL Logistics Ltd. & Anr. v. Suresh C. Sharma",
    citation: "Revision Petition No. 1294 of 2018, National Consumer Disputes Redressal Commission (NCDRC), New Delhi",
    date: "Order Dated 19 November 2019",
    facts:
      "The consumer engaged the logistics mover to transport complete household effects, furniture, and electronic equipment from Bengaluru to Gurugram. Upon arrival, severe water leakage inside the truck container had ruined sofas, wooden cabinets, and television sets. The transport agency denied the damage claim, asserting a printed boilerplate clause on the back of the Lorry Receipt (LR) stating carrier liability was strictly capped at ₹1,000 for any single consignment.",
    holding:
      "The National Commission dismissed the carrier's revision petition with costs, reaffirming the Supreme Court's ratio in Nath Bros. Exim International. The bench held that under the Carriage by Road Act and Consumer Protection Act, a common carrier has absolute liability as a bailee and insurer of goods. Unilateral printed clauses limiting liability to ₹1,000 without conscious bilateral consent are unconscionable and void. The NCDRC directed the logistics mover to pay ₹2,40,000 towards property damage, 9% annual interest, and ₹25,000 litigation expenses.",
    amount: "₹2,40,000 Property Damage + 9% Annual Interest + ₹25,000 Litigation Costs",
    takeaway:
      "Packers and movers cannot hide behind fine-print terms on the back of a consignment note or quotation slip claiming liability is limited to ₹500 or ₹1,000. Consumer forums routinely strike down unilateral liability caps when physical goods are broken or water-damaged during transit.",
  },
  {
    title: "Mover Collecting 3% 'Insurance Charges' Without Policy Schedule Held Guilty of Unfair Trade Practice",
    parties: "Agarwal Packers & Movers (DRS Group) v. Col. R.K. Sharma",
    citation: "First Appeal No. 78 of 2021, State Consumer Disputes Redressal Commission (SCDRC), UT Chandigarh",
    date: "Order Dated 14 September 2022",
    facts:
      "The complainant relocated household effects between cities. The moving company billed ₹4,500 specifically itemized as '3% Transit Insurance Charges'. During transit, high-value crockery, a washing machine, and an antique dining table were severely damaged. When the complainant demanded insurance settlement, the mover claimed that the insurance was merely 'Carrier Risk Cover' with an internal ₹5,000 cap, refusing to furnish an IRDAI-registered insurance policy number.",
    holding:
      "The State Commission held that levying insurance fees without purchasing an underwritten marine cargo policy from an IRDAI-registered general insurance company constitutes an egregious Unfair Trade Practice under Section 2(47) of CPA 2019. The mover having collected insurance premium stepped into the shoes of the underwriter and was held strictly liable for the full appraised loss. The commission awarded ₹1,85,000 compensation, ₹30,000 mental agony damages, and ₹15,000 costs.",
    amount: "₹1,85,000 Property Loss + ₹30,000 Mental Agony Award + ₹15,000 Litigation Costs",
    takeaway:
      "If a mover charges you for transit insurance but refuses to share an IRDAI policy certificate within 48 hours, they have committed 'pocket insurance' fraud. In consumer court, the mover is treated as the direct insurer and ordered to compensate 100% of the damaged articles.",
  },
  {
    title: "Common Carrier Presumed Negligent under Section 13: Complainant Does Not Need to Prove Exact Mishap",
    parties: "Patel Roadways Ltd. v. Birla Yamaha Ltd.",
    citation: "Civil Appeal No. 9071 of 1996, (2000) 4 SCC 91 (Supreme Court 2-Judge Bench)",
    date: "Judgment Dated 28 March 2000",
    facts:
      "Consignments of portable generators entrusted to a road carrier were destroyed in a fire that broke out at the carrier's transit godown. The transport corporation argued that before a consumer forum, the complainant must lead affirmative evidence proving specific mechanical fault or human negligence on the part of the carrier.",
    holding:
      "The Supreme Court settled the law by ruling that the liability of a common carrier under road carriage law is that of an insurer and is absolute. The complainant is only required to establish entrustment of the goods in sound condition and non-delivery or delivery in damaged condition. Under statutory common carrier principles (now codified in Section 13 of the Carriage by Road Act, 2007), the burden is entirely on the carrier to prove absence of negligence or an act of God.",
    amount: "Absolute Statutory Liability Affirmed across All Consumer Commissions",
    takeaway:
      "You do not have to prove how the truck met with an accident or why the movers dropped your refrigerator. Once you prove that the goods were handed over in sound condition and arrived broken, the moving company is legally presumed negligent.",
  },
  {
    title: "Holding Household Goods Hostage at Destination for Extra Charges Is Illegal Coercion",
    parties: "Rameshwar Dayal v. Speed Cargo Movers & Packers",
    citation: "Consumer Complaint No. 114/2023, District Consumer Commission (DCDRC), Pune",
    date: "Order Dated 12 January 2024",
    facts:
      "The mover contracted to shift household items for a lumpsum of ₹32,000. Upon arrival in Pune, the driver parked outside the gated community and refused to unload unless the consumer paid an extra ₹18,000 in cash, citing unreceipted charges for floor elevation and long-distance carrying. The consumer paid under protest and filed a complaint for extortion and deficiency.",
    holding:
      "The District Commission held that once a binding contract with itemized scope is executed, demanding extortionate payments at the destination under threat of withholding personal household belongings constitutes coercion and unfair trade practice. The forum ordered the mover to refund the extorted ₹18,000 with 12% interest, pay ₹40,000 compensation for mental harassment, and ₹10,000 litigation costs.",
    amount: "₹18,000 Refund @ 12% Interest + ₹40,000 Coercion Damages + ₹10,000 Costs",
    takeaway:
      "If a mover refuses to unload until you pay arbitrary extra charges, note 'Paid under protest and physical duress' on the payment receipt or UPI narration. Consumer commissions treat this as unlawful extortion and award punitive compensation.",
  },
];

const FAQS = [
  {
    question: "What should I do if packers and movers deliver damaged household goods or broken appliances?",
    answer:
      "Immediately record high-resolution unboxing video footage and take timestamped photographs of each damaged item before the delivery crew leaves your premises. Never sign a clean delivery acknowledgment on the Lorry Receipt (LR) or Consignment Note; instead, endorse it with 'Received in severely damaged condition, subject to full unpacking verification'. Under Section 10 of the Carriage by Road Act, 2007, you must issue a written notice of loss or damage to the carrier within 180 days of delivery before filing a formal claim or legal notice.",
  },
  {
    question: "Can packers and movers limit their liability to ₹500 or ₹1,000 based on fine print in the quotation?",
    answer:
      "No. The Supreme Court of India in Nath Bros. Exim International Ltd. v. Best Roadways Ltd. and the National Consumer Commission (NCDRC) in VRL Logistics v. Suresh C. Sharma have repeatedly held that unilateral boilerplate terms printed on consignment notes limiting carrier liability without conscious negotiation are unconscionable and void. Under Section 12 and 13 of the Carriage by Road Act, 2007, a common carrier is strictly liable for loss or damage caused by negligence, and negligence is statutorily presumed against the carrier.",
  },
  {
    question: "What is the difference between Transit Insurance and Carrier Risk?",
    answer:
      "Genuine 'Transit Insurance' is an underwritten Marine Cargo policy issued by an IRDAI-registered general insurance company (such as Tata AIG, ICICI Lombard, or New India Assurance) with a dedicated 16-digit policy certificate covering comprehensive accidental transit perils up to the declared invoice value. 'Carrier Risk' is an unregulated internal marketing term used by rogue movers to collect 3% to 5% fees without purchasing any insurance policy, allowing them to pocket the premium and arbitrarily reject damage claims. If a mover charges insurance fees, demand the official IRDAI policy schedule within 48 hours of booking.",
  },
  {
    question: "What legal action can I take if movers hold my household goods hostage and demand extra money at destination?",
    answer:
      "Holding consumer goods hostage to extort money beyond the agreed quotation constitutes an Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019, as well as criminal extortion and cheating under Sections 308 and 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS). You should immediately call the police helpline (112) for wrongful restraint, preserve all WhatsApp/call extortion demands, and if forced to transfer funds to retrieve essentials, add the remark 'Paid under protest and duress' in the bank transfer. Follow this immediately with an advocate statutory legal demand notice.",
  },
  {
    question: "How long do I have to send a legal notice to packers and movers for broken or lost items?",
    answer:
      "Under Section 10 of the Carriage by Road Act, 2007, a mandatory notice of loss or damage must be served on the common carrier within 180 days from the date of booking or knowledge of loss. For filing a consumer complaint before the District Consumer Disputes Redressal Commission (DCDRC) under Section 35 of the Consumer Protection Act, 2019, the limitation period is 2 years from the date of the cause of action (delivery of damaged goods or claim rejection). Serving an advocate legal notice within 30 to 60 days of delivery ensures compliance with both statutory windows.",
  },
  {
    question: "Do I have to prove that the truck driver or movers were negligent in handling my goods?",
    answer:
      "No. Under Section 13 of the Carriage by Road Act, 2007, in any claim against a common carrier for loss or damage to goods, the consumer is not required to prove that such loss or damage was caused by negligence or criminal act of the carrier or its agents. The legal presumption is that the carrier was negligent, and the statutory burden of proof rests entirely on the moving company to prove that the damage occurred due to an Act of God or inherent vice in the goods.",
  },
  {
    question: "How much compensation can I claim from packers and movers in Consumer Court (e-Jagriti)?",
    answer:
      "You can claim: (1) 100% replacement or repair value of all broken, dented, or missing articles supported by purchase invoices or authorized service centre estimates; (2) Refund of the transportation charges or fraudulent insurance fees; (3) Statutory interest ranging from 9% to 12% per annum from the date of loss; (4) Punitive damages for mental agony and harassment (routinely awarded between ₹20,000 and ₹50,000); and (5) Actual litigation costs.",
  },
  {
    question: "Packers and movers ne saman tod diya ya kho diya toh legal notice kaise bheje?",
    answer:
      "Agar packers and movers ne aapka TV, fridge, furniture ya crockery tod di hai ya boxes gayab kar diye hain, toh sabse pehle unboxing video aur photos capture karein. Consignment note par 'Received in damaged condition' likhein. Fir Carriage by Road Act, 2007 ke Section 10 aur Consumer Protection Act, 2019 ke Section 2(11) ke tehat 180 din ke andar advocate ke madhyam se Registered Speed Post aur email se 15 din ka formal statutory legal notice bhejein, jismein full compensation aur damages ki demand ki jaati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Packers and Movers Damaged Goods? Claim & Legal Notice",
  description:
    "Packers and movers damaged or lost goods? Carrier liability, transit insurance, the evidence that matters and a notice to recover.",
  datePublished: "2026-11-06T14:00:00+05:30",
  dateModified: "2026-11-06T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/packers-and-movers-damage-claim-legal-notice`,
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
    "@type": "Service",
    name: "Packers and Movers Damage Claim Legal Notice",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Home & Everyday Services",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Packers & Movers Damage Claim",
      item: `${SITE_URL}/packers-and-movers-damage-claim-legal-notice`,
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

export default function PackersMoversDamageClaimPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Home & Everyday Services", href: "/services/refunds-and-consumer-complaints" },
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
        {/* Hero Section matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Carriage by Road Act 2007</span>
              <span className="text-red-500">•</span>
              <span>Consumer Protection Act 2019</span>
              <span className="text-red-500">•</span>
              <span>Movers Damage Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Movers Broke or Lost Your Things: How to Claim Compensation
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Common Carrier Strict Liability Mandate)
              </p>
              <p>
                Under Section 10, 12, and 13 of the Carriage by Road Act, 2007 and Section 2(11) of the Consumer Protection Act, 2019, packers and movers bear strict common carrier liability for lost or damaged goods. Negligence is statutorily presumed against the mover. Consumers must serve a written claim notice within 180 days of delivery, invalidate unilateral liability caps, and issue a 15-day statutory advocate legal notice before filing on e-Jagriti.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">180 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Notice of Loss Window (s.10)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Strict</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Carrier Negligence Presumed (s.13)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">100% Value</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Unilateral Liability Caps Struck Down</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹1,85,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sample Mover Awards in Forum Orders</p>
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
            <PackersMoversTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Carrier Liability Overview */}
              <section id="heading-carrier-liability" aria-labelledby="heading-carrier-liability-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-carrier-liability-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Carrier Liability Law: Why Packers and Movers Are Accountable
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every year, thousands of Indian families relocating across cities encounter broken television screens, fractured teakwood beds, soaked mattresses, or missing cartons. When consumers contact customer care or the moving supervisor, they are routinely brushed off with boilerplate excuses: <em>&quot;Goods travel at owner&apos;s risk&quot;</em>, <em>&quot;You did not take all-risk insurance&quot;</em>, or <em>&quot;Our maximum liability on the lorry receipt is capped at ₹500&quot;</em>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian jurisprudence provides robust, statutory protection against these carrier defenses. Under the <strong>Carriage by Road Act, 2007 (Act No. 41 of 2007)</strong> and the <strong>Consumer Protection Act, 2019</strong>, any professional moving agency operating goods vehicles is classified as a <em>common carrier</em>. The Supreme Court of India in <em>Nath Bros. Exim International Ltd. v. Best Roadways Ltd.</em> and <em>Patel Roadways Ltd. v. Birla Yamaha Ltd.</em> established that a common carrier&apos;s liability is identical to that of an insurer: absolute, strict, and non-negotiable. Except for unforeseen Acts of God or war, the carrier is legally answerable for delivering every single item intact.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Furthermore, Section 13 of the Carriage by Road Act removes the burden of proof from the consumer. You do not need to prove that the truck driver was speeding, or that the loaders mishandled your boxes. The moment goods are delivered broken or cartons go missing, the statutory presumption of negligence attaches to the mover.
                </p>
              </section>

              {/* Section 2: Court Precedents Digest (4 verified orders as <article> tags) */}
              <section id="heading-court-orders" aria-labelledby="heading-court-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Precedents: Rulings Against Packers and Road Carriers
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
                              Total Judicial Relief / Award
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Scope
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across District &amp; State Consumer Commissions
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your claim:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: Winning Packers and Movers Claims in Court
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  An empirical analysis of successful compensation judgments against major logistics firms (Agarwal Packers, VRL Logistics, Gati, Porter, and local movers) shows clear evidentiary factors that compel consumer commissions to grant 100% relief:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Explicit Endorsement on the Consignment Note (Lorry Receipt):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Never sign a blank or clean receipt. Complainants who noted <em>&quot;Goods received in shattered / water-damaged condition, full assessment subject to unpacking&quot;</em> directly on the delivery copy completely disarmed the mover&apos;s primary defense of clean delivery.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unbroken Section 63 BSA Digital Video &amp; Photo Audit Trail:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Continuous video footage showing delivery boys carrying battered cartons, removing torn tape, and revealing broken LED panels or fractured legs provides unimpeachable evidence under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Mandatory Statutory Notice Served Within 180 Days:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 10 of the Carriage by Road Act, 2007, serving a formal written notice of loss within 180 days of booking or delivery is a condition precedent. Cases where the consumer complied with this requirement survived all technical dismissal petitions.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Exposing &quot;Pocket Insurance&quot; &amp; Naming Underwriters:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When the mover collected 3% insurance premium but produced no IRDAI policy certificate, complainants pleaded Unfair Trade Practice under Section 2(47) CPA. Courts held the mover directly liable as an unauthorized insurer, awarding full market value.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Authorized Repair Estimates &amp; Original Invoices:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Submitting authorized brand service centre inspection reports (e.g., Sony/Samsung repair estimate stating &quot;panel cracked internally, beyond repair, replacement cost ₹65,000&quot;) established exact pecuniary loss, eliminating arbitrary forum deductions.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Escalation Architecture: From Transit Damage to Compensation
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to dismantle mover deflection, enforce carrier liability, and recover your funds:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Delivery Inspection &amp; Endorsement</h3>
                    <p className="text-xs text-slate-200 mt-1">Endorse LR copy with damage remarks; record continuous unboxing video.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Written Notice of Loss (s.10)</h3>
                    <p className="text-xs text-amber-900 mt-1">Serve formal written notice within 180 days under Carriage by Road Act.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Expose Insurance Scam / Quotation Fraud</h3>
                    <p className="text-xs text-slate-700 mt-1">Demand IRDAI policy schedule or establish unfair trade practice.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory notice dispatched via Registered Speed Post + BSA Email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">e-Jagriti Consumer Court Filing</h3>
                    <p className="text-xs text-emerald-900 mt-1">Claim 100% replacement cost, 9%–12% interest, and harassment damages.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Packers and Movers Damage Claim Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="moverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="moverAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="moverSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#moverGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Damage Inward</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Endorse LR Slip</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Record Unboxing Video</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Section 10 Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Written Loss Intimation</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Within 180 Days Window</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Insurance Audit</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">IRDAI Policy or Fraud</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Demand Claim Surveyor</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#moverAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Final Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + BSA Email</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#moverSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Direct Settlement</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Petition</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIME LIMITS &amp; PROCEDURAL RULES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Section 10 Carriage by Road Act: Written notice to common carrier within 180 days of booking / delivery</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Section 35 Consumer Protection Act 2019: District Commission filing within 2 years from date of damage / denial</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Pre-Litigation Legal Notice Demand: 15 Calendar Days statutory cure period before instituting litigation</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook Against Packers &amp; Movers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Synthesized directly from winning consumer commission verdicts, this 5-step playbook neutralizes mover deflection and builds an unshakeable recovery file:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Endorse the Delivery Document &amp; Capture Continuous Video Proof
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        At the moment of delivery, never allow the unloading crew to rush you into signing a clean delivery sheet. Inspect high-value electronics and glass items on the spot. Write clearly in ink across the driver&apos;s Lorry Receipt (LR) or electronic delivery tab: <em>&quot;Goods received damaged; full inventory pending unpacking&quot;</em>. Record continuous video footage showing box seals, serial numbers, cracked screens, and broken timber under Section 63 BSA.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve Statutory Notice of Loss Under Section 10 Carriage by Road Act
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Within 180 days (ideally within 7 days of delivery), issue a formal written intimation to the moving company via email and registered communication. Itemize each broken article, reference the consignment number, and attach photographic proof. This fulfills the statutory condition precedent under Section 10 of the Carriage by Road Act, 2007, barring the carrier from seeking dismissal on notice grounds.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Audit Insurance Legitimacy &amp; Secure Brand Repair Invoices
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the mover billed you for &quot;Transit Insurance&quot;, demand the 16-digit IRDAI underwritten policy certificate. If they fail to provide an official insurance policy from a recognized underwriter, document this as an Unfair Trade Practice under Section 2(47) CPA 2019. In parallel, obtain written damage assessments and repair estimates from authorized OEM service centres (e.g., Samsung, LG, Sony, or certified carpenters).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When customer support stalls or offers a derisory compensation token (like ₹1,000 for a ₹70,000 television), instruct a verified advocate to draft and dispatch a statutory legal notice. Served on the registered corporate office and directors via Registered Speed Post and electronic mail under Section 63 BSA, the notice establishes strict carrier liability under Sections 12 &amp; 13 Carriage by Road Act, invalidates printed liability caps, and demands full replacement value with 18% interest within 15 days.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        For disputes involving uncompleted home services, compare our guide on <Link href="/legal-notice-to-interior-designer-contractor-refund" className="text-blue-700 underline">legal notices to interior contractors</Link> or understand the overall <Link href="/how-to-send-a-legal-notice-for-recovery-of-money-in-india" className="text-blue-700 underline">money recovery notice process</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File a Consumer Petition on e-Jagriti with Punitive Damages Claim
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the mover fails to settle within the 15-day notice period, file an online consumer complaint on the Ministry of Consumer Affairs&apos; <a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">e-Jagriti portal</a> under Section 35 of CPA 2019. Since consumer jurisdiction lies where the complainant resides, you can file at your local District Commission (DCDRC up to ₹50 Lakhs limit), claiming complete property loss, statutory interest, ₹25,000 to ₹50,000 harassment damages, and litigation expenses.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Facts Table of Carrier Liability & Deadlines */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Carriers Law vs Consumer Reality: Liability and Timelines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Rogue packers and movers capitalize on consumer unfamiliarity with road transport statutes. Here is how statutory benchmarks overturn mover fine-print:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Packers and Movers Statutory Liability &amp; Deadlines Benchmark</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Element</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Mover Fine-Print Claim</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Legal Reality</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Binding Statute / Authority</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Liability for Broken Goods
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-semibold">&quot;Limited to ₹500 or ₹1,000&quot;</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">100% Replacement / Repair Value</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 12 Carriage by Road Act 2007</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Burden of Proof (Negligence)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">&quot;Customer must prove accident&quot;</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Carrier Presumed Negligent</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 13 Carriage by Road Act 2007</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Notice of Loss Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">&quot;Report within 24 hours only&quot;</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">180 Days from Delivery / Booking</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 10 Carriage by Road Act 2007</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pocket Insurance (Unissued Policy)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">&quot;Internal carrier risk, no refund&quot;</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Mover Liable as Direct Insurer</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 2(47) CPA 2019 Unfair Trade Practice</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Demanding Extra Cash at Delivery
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">&quot;Mandatory handling / stair fee&quot;</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Illegal Coercion / Extortion</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sections 308 &amp; 318 BNS 2023</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Consumer Court Limitation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">&quot;Claim expired after 30 days&quot;</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">2 Years from Cause of Action</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 69 Consumer Protection Act 2019</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under India Code statutes and Supreme Court common-carrier judgments. For other consumer disputes involving platforms or delivery, see our guide on <Link href="/how-to-file-consumer-complaint-india" className="text-blue-700 underline">filing a consumer complaint in India</Link>.
                </p>
              </section>

              {/* Section 7: Problem Picker Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Packers and Movers Disputes: Legal Grounds and Solutions
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock Applicable Statutes and the Precise Recovery Roadmap
                  </p>
                </div>

                <PackersMoversProblemTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovering ₹1,85,000 for Transit Damaged Goods
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru to Hyderabad Relocation</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Vikram S. engaged a reputed national moving agency to transport his 3BHK household goods from Whitefield, Bengaluru to Gachibowli, Hyderabad for an agreed lumpsum of ₹42,000, which included ₹3,200 billed specifically as &quot;Transit Insurance Charges&quot;. Upon delivery, the moving crew unloaded a 65-inch LG OLED TV with a severely shattered panel and a 6-seater solid teakwood dining table with two fractured load-bearing legs.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Vikram endorsed the delivery slip with damage notes and filed an immediate claim. The moving company&apos;s escalation manager repudiated the claim after 3 weeks, stating: <em>&quot;As per Clause 14 of our Consignment Note, our liability is restricted to ₹1,000 for electronic goods. The insurance was transit risk only, which does not cover glass or internal panel cracking.&quot;</em> The mover refused to provide an IRDAI insurance policy number or claim surveyor.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Vikram engaged LegalRecovery.in. An advocate drafted and served a comprehensive statutory demand notice on the moving agency&apos;s managing director and regional head office. The notice invoked Sections 10, 12, and 13 of the Carriage by Road Act, 2007, cited the Supreme Court rulings in <em>Nath Bros.</em> and <em>VRL Logistics</em> invalidating liability caps, and pleaded Unfair Trade Practice under Section 2(47) CPA for pocket insurance fraud. The notice attached an authorized LG service estimate of ₹84,000 and a carpentry appraisal of ₹45,000, demanding ₹1,29,000 plus ₹50,000 compensation within 15 calendar days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Faced with impending consumer litigation on e-Jagriti and regulatory scrutiny over unissued insurance policies, the moving company&apos;s legal division contacted Vikram on Day 9 of the notice window. The company executed a formal compromise agreement, wiring ₹1,45,000 directly to Vikram&apos;s bank account (covering 100% of TV panel replacement and furniture restoration plus a refund of the freight charges) along with an unconditional written apology.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Packers & Movers Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Critical Records to Build Your Claim
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital media are fully admissible in court. Assemble these 6 critical evidentiary items:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Quotation &amp; Itemized Packing Inventory List:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Original quote showing agreed price, insurance surcharge, and origin packing list with carton counts and item descriptions.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Endorsed Lorry Receipt (LR) / Consignment Note:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Delivery copy bearing your written ink endorsement: &quot;Received damaged / short delivery&quot; with driver or supervisor signature.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Continuous Unboxing Video &amp; Timestamped Photos:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Video footage cutting open bubble wrap, displaying damaged structural joints, broken glass, or dented appliance bodies.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">OEM Repair Estimates or Original Purchase Invoices:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Official service centre quotation (Sony, LG, Samsung, etc.) stating repair or panel replacement costs, or original retail tax bills.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Notice of Loss Sent Within 180 Days:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copy of statutory notice email or letter served under Section 10 Carriage by Road Act detailing the damage within the 180-day window.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">WhatsApp Communications &amp; Payment Records:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Exported WhatsApp chat history with coordinators, driver call logs, and bank/UPI UTR receipts proving freight and insurance payments.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Key Takeaways Box (<aside>) */}
              <aside id="heading-key-takeaways" aria-labelledby="heading-key-takeaways-title" className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-5 sm:p-7 shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <h3 id="heading-key-takeaways-title" className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                    Key Legal Takeaways for Packers &amp; Movers Damage Claims
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-slate-200">
                  <div className="space-y-1">
                    <strong className="text-emerald-400 block">Absolute Common Carrier Liability:</strong>
                    <span>Under the Carriage by Road Act, 2007, common carriers have insurer-level liability. Boilerplate printed caps (₹500 / ₹1,000) are unconscionable and legally void.</span>
                  </div>
                  <div className="space-y-1">
                    <strong className="text-emerald-400 block">Presumption of Negligence:</strong>
                    <span>Section 13 eliminates the need for consumers to prove negligence. The carrier is presumed at fault once goods are delivered in damaged condition.</span>
                  </div>
                  <div className="space-y-1">
                    <strong className="text-amber-400 block">Strict 180-Day Notice Mandate:</strong>
                    <span>Section 10 requires written notice of loss to the carrier within 180 days of booking/delivery before initiating formal court proceedings.</span>
                  </div>
                  <div className="space-y-1">
                    <strong className="text-sky-400 block">Pocket Insurance Unfair Trade Practice:</strong>
                    <span>Charging insurance fees without delivering an IRDAI underwritten policy renders the mover personally liable as the de facto insurer under Section 2(47) CPA.</span>
                  </div>
                </div>
              </aside>

              {/* Section 11: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Packers &amp; Movers Damage Claims
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Carriage by Road Act 2007, Consumer Protection Act 2019 &amp; Supreme Court Rulings
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

              {/* Section 12: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Authorities, Primary Acts &amp; Judicial References
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
                  Statutory verification status: All provisions verified against the Carriage by Road Act, 2007 (India Code), Consumer Protection Act, 2019, Supreme Court of India precedents, and e-Jagriti consumer commission guidelines as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice to Packers and Movers
                </h2>
                <PackersMoversNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Service &amp; Property Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-to-interior-designer-contractor-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Interior Designer &amp; Contractor Refund Notice →
                  </Link>
                  <Link
                    href="/how-to-file-consumer-complaint-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Consumer Forum Filing Guide (e-Jagriti) →
                  </Link>
                  <Link
                    href="/how-to-send-a-legal-notice-for-recovery-of-money-in-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    How to Send a Money Recovery Legal Notice →
                  </Link>
                  <Link
                    href="/how-to-draft-a-legal-notice-for-recovery-of-money"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Drafting Format &amp; Checklist →
                  </Link>
                  <Link
                    href="/flipkart-return-refund-complaint"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    E-Commerce Delivery &amp; Return Complaint Hub →
                  </Link>
                  <Link
                    href="/services/refunds-and-consumer-complaints"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    All Consumer Dispute &amp; Refund Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
