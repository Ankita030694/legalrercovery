import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BitumenTableOfContents from "./BitumenTableOfContents";
import BitumenScenarioTabs from "./BitumenScenarioTabs";
import BitumenNoticeCTA from "./BitumenNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/bitumen-aggregates-fly-ash-road-material-highway-contractor-recovery";
const EXACT_H1 =
  "Highway Contractor Finishing the Stretch & Packing Up the Hot-Mix Plant Without Paying Your Bitumen & Crusher Bills? Act Before Demobilization!";
const META_TITLE = "Bitumen, Stone Crusher & Road Material Supplier Recovery";
const META_DESCRIPTION =
  "Once a road EPC contractor demobilizes its hot-mix camp, recovery stalls. Use Mining e-Ravanna, weighbridge slips & Order XXXVIII Rule 5 attachment.";

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
        alt: formatAltText(META_TITLE),
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
    title: "The Code of Civil Procedure, 1908 (Order XXXVIII Rule 5 — Attachment Before Judgment & Order XXI Rule 46 — Garnishee Attachment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 12A — Urgent Interim Relief Exemption From Pre-Institution Mediation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "The Sale of Goods Act, 1930 (Sections 37, 41 & 42 — Delivery, Examination & Deemed Acceptance Upon Consumption) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of State Mining e-Ravanna, GST E-Way Bills & Weighbridge Printouts) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 45-Day Cap & 3x RBI Compound Interest) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138 & 143A — Dishonoured Security Cheques & 20% Interim Compensation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Bureau of Indian Standards — IS 73:2013 (Paving Bitumen Specifications) & MoRTH Specifications for Road and Bridge Works",
    url: "https://www.bis.gov.in/",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Urgent Interim Relief Bypassing Section 12A Mediation",
    parties: "Patil Automation Private Limited v. Rakheja Engineers Private Limited",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    facts:
      "Commercial plaintiffs filed recovery suits without pre-institution mediation under Section 12A of the Commercial Courts Act, 2015, raising the critical question of when urgent interim relief excuses mediation.",
    holding:
      "The Supreme Court held that while Section 12A is mandatory for ordinary commercial suits of ₹3 Lakh and above, a suit that genuinely contemplates urgent interim relief—such as Order XXXVIII Rule 5 attachment before judgment of plant and machinery about to be dismantled—is statutorily exempt from pre-suit mediation.",
    amount: "Immediate Commercial Court Filing Without 3–5 Month Mediation Delay",
    takeaway:
      "When an out-of-state road EPC contractor begins dismantling its hot-mix plant or shifting tippers, suppliers can approach the Commercial Court immediately for pre-demobilization attachment.",
  },
  {
    title: "Supreme Court on Sham 'Pre-Existing Disputes' Under IBC Section 8 & 9",
    parties: "Mobilox Innovations Private Limited v. Kirusa Software Private Limited",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    facts:
      "An operational creditor issued an IBC Section 8 demand notice for unpaid invoices. The corporate debtor attempted to stall NCLT admission by raising an uncorroborated quality objection after default.",
    holding:
      "The Supreme Court ruled that a 'dispute' under Section 8(2)(a) must be a genuine pre-existing dispute raised before receipt of the demand notice—not a 'moonshine defense' or patently feeble assertion unsupported by contemporaneous evidence.",
    amount: "Defeats Belated Aggregate Moisture & Bitumen Viscosity Excuses",
    takeaway:
      "Once a highway contractor lays your GSB/WMM aggregates or VG-30 bitumen into the carriageway and bills NHAI/PWD, any post-demand quality email is rejected as a moonshine defense.",
  },
  {
    title: "Supreme Court on MSMED 3x RBI Compound Interest Overriding PO Bars",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation & Anr.",
    citation: "2021 SCC OnLine SC 439, Supreme Court of India",
    facts:
      "Large institutional buyers and EPC contractors inserted 'zero interest on delayed bills' or 'pay-when-paid' clauses in purchase orders to block statutory interest claims by Micro and Small suppliers.",
    holding:
      "The Supreme Court affirmed that the MSMED Act, 2006 has overriding statutory effect under Section 24. Once a stone crusher, emulsion processor, or fly-ash supplier holds Udyam registration on the supply date, Section 16 mandates 3x RBI Bank Rate monthly compound interest regardless of contrary PO terms.",
    amount: "Mandatory 3x RBI Compound Interest Overrides EPC 'Pay-When-Paid' Clauses",
    takeaway:
      "Highway sub-contractors cannot hide behind NHAI/PWD billing delays to starve Udyam-registered crushers and bitumen processors of statutory interest.",
  },
  {
    title: "Supreme Court on Security Cheques Crystallizing Into Section 138 Liability",
    parties: "Sripati Singh (Since Deceased) Through His Son Gaurav Singh v. State of Jharkhand",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    facts:
      "A debtor argued that post-dated cheques handed over as 'security' at the start of supply could not trigger criminal prosecution under Section 138 NI Act when dishonoured upon default.",
    holding:
      "The Supreme Court held that a security cheque is not a mere piece of paper; once the underlying supply debt crystallizes and becomes payable on the date of presentation, dishonour triggers full Section 138 criminal liability and Section 143A interim compensation.",
    amount: "Section 138 Criminal Prosecution + Up to 20% Interim Deposit (s.143A)",
    takeaway:
      "If the out-of-state EPC contractor gave PDCs or security cheques at camp setup, dishonour allows you to prosecute its directors in your home-bank jurisdiction.",
  },
];

const FAQS = [
  {
    question:
      "Can a stone crusher or bitumen supplier stop an out-of-state road contractor from shifting its hot-mix plant?",
    answer:
      "You cannot physically blockade trailers on the highway without a court order, as that risks counter-allegations. Instead, file an urgent Commercial Suit (or Order XXXVII summary suit) with an Interlocutory Application under Order XXXVIII Rule 5 CPC (Attachment Before Judgment) before the local District Commercial Court. By attaching geo-tagged photos of crane mobilization, e-Ravanna passes, and unpaid invoices, you invoke the Patil Automation urgent-relief exemption from Section 12A mediation and seek immediate attachment of the hot-mix plant, WMM plant, or equivalent bank security before it leaves the district.",
  },
  {
    question:
      "How do Mining e-Ravanna and Dharamkanta slips prove delivery if the site supervisor never signed our challans?",
    answer:
      "Every mineral tipper moving stone aggregates, GSB, WMM, or murrum requires a statutory State Mining Department e-Ravanna (Royalty Transit Pass) recording vehicle registration, mineral grade, net tonnage, timestamp, and destination. Paired with computerised Dharamkanta weighbridge slips, GST E-Way Bill Part-B logs, and FASTag/GPS transit records—all certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023—courts treat this statutory paper trail as conclusive proof of delivery even when a site clerk withheld signatures.",
  },
  {
    question:
      "Can we attach the road contractor's pending final bill or annuity lying with NHAI, State PWD, or the concessionaire?",
    answer:
      "Yes. Under Order XXXVIII Rule 5 read with Order XXI Rule 46 (Garnishee Proceedings) and Section 151 CPC, you can seek a prohibitory order restraining the principal employer (NHAI PIU, MoRTH, State PWD) or the HAM/BOT concessionaire escrow bank from disbursing the defaulting sub-contractor's final Running Account (RA) bill or 5% retention money to the extent of your unpaid material claim.",
  },
  {
    question:
      "What if the highway sub-contractor says 'Pay-When-Paid' because NHAI has not cleared their RA bill?",
    answer:
      "If your stone crusher, bitumen emulsion unit, or fly-ash business holds valid Micro or Small Udyam registration on the date of supply, Section 15 of the MSMED Act, 2006 caps maximum credit at 45 days regardless of back-to-back 'pay-when-paid' clauses in the contractor's work order. Under Silpi Industries (2021), statutory 3x RBI Bank Rate compound monthly interest overrides private contract deferrals.",
  },
  {
    question:
      "How do bitumen suppliers defeat 'viscosity or penetration failure' claims raised weeks after tanker decanting?",
    answer:
      "Under IS 73:2013 and standard bulk bitumen supply terms, referee samples must be drawn jointly from the tanker manifold before pumping into the contractor's heated storage tank. Once the contractor decants VG-30/VG-40 bitumen into their own tank, blends it with residual stock, and lays the bituminous concrete (BC/DBM) stretch, Section 42 of the Sale of Goods Act, 1930 deems the goods accepted and bars belated quality debit notes.",
  },
  {
    question:
      "Is an IBC Section 8 demand notice effective against a highway EPC company owing ₹90 Lakh?",
    answer:
      "IBC Section 9 requires a minimum operational debt threshold of ₹1 Crore. If your principal is ₹90 Lakh, verify whether your supply contract or MSMED Section 16 statutory interest legitimately takes the crystallised default above ₹1 Crore (or check if interest is contractually payable), OR pursue an Order XXXVII CPC Summary Suit + Order XXXVIII Rule 5 attachment + NI Act Section 138 prosecution, which have no ₹1 Crore floor.",
  },
  {
    question:
      "Can we file Section 138 cheque bounce cases in our local district court even if the EPC company is headquartered in Mumbai or Hyderabad?",
    answer:
      "Yes. Under Section 142(2) of the Negotiable Instruments Act, 1881, criminal complaints for dishonoured account-payee cheques must be filed in the Judicial Magistrate court having jurisdiction over the payee's (supplier's) home bank branch where the cheque was presented for collection—forcing the out-of-state contractor's directors to appear in your local district.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
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
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Recover Unpaid Bitumen, Stone Crusher & Fly-Ash Bills Before Highway Camp Demobilization",
  description:
    "5-stage statutory playbook to lock Mining e-Ravanna proof, attach hot-mix camp machinery under CPC Order XXXVIII Rule 5, and freeze NHAI/PWD escrow payouts.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock e-Ravanna, Weighbridge & BSA s.63 Dossier",
      text: "Export State Mining e-Ravanna passes, Dharamkanta slips, GST E-Way Bills, and refinery bitumen COAs with a Section 63 BSA 2023 electronic certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Document Imminent Camp Demobilization",
      text: "Capture geo-tagged photographs of dismantled hot-mix drum mixers, cranes, and trailer loading to establish intent to remove assets from court jurisdiction.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Urgent Statutory Demand & Garnishee Intimation",
      text: "Dispatch an advocate notice to the EPC contractor with a copy to the NHAI PIU, PWD Division, or Concessionaire Escrow Bank putting them on notice of unpaid material dues.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Move Commercial Court Under Order XXXVIII Rule 5 CPC",
      text: "Invoke the Patil Automation urgent-relief exception to bypass Section 12A mediation and seek conditional attachment of camp machinery or escrow receivables.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Trigger Parallel NI Act s.138 & MSMED / s.43B(h) Pressure",
      text: "Present security cheques in your home-bank jurisdiction under NI Act s.138/143A and enforce 3x RBI compound interest plus Section 43B(h) tax disallowance.",
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
      name: "Chemicals, Steel & Building Materials",
      item: `${SITE_URL}/industries/chemicals-steel-rmc-building-materials-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bitumen, Stone Crusher & Road-Material Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
export default function BitumenHighwayRecoveryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>B2B Highway &amp; Infrastructure Creditor Playbook</span>
              <span>&bull;</span>
              <span>CPC Order XXXVIII Rule 5 &amp; Mining e-Ravanna</span>
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* 40–60 Word Executive Creditor Answer Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              Once an out-of-state highway EPC sub-contractor dismantles its hot-mix camp and crosses state borders, local enforcement becomes 5x harder. Under our{" "}
              <Link
                href="/industries/chemicals-steel-rmc-building-materials-recovery"
                className="text-red-300 hover:text-white underline font-bold"
              >
                Building Materials &amp; Infra Supply Recovery Hub
              </Link>
              , combine State Mining e-Ravanna passes, weighbridge slips, and Order XXXVIII Rule 5 CPC attachment to freeze camp machinery or NHAI/PWD escrow payouts before demobilization.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-7">
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">Order XXXVIII R.5</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Pre-Judgment Camp &amp; Plant Attachment
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">e-Ravanna + s.63</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Statutory Mineral &amp; Weighbridge Proof
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Rate</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  MSMED Compound Interest + s.43B(h)
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">s.12A Exempt</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Urgent Relief Bypasses Mediation Delay
                </p>
              </div>
            </div>

            <BitumenNoticeCTA variant="inline" />
          </div>
        </section>

        {/* Main Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Industries", href: "/industries" },
                {
                  label: "Chemicals, Steel & Building Materials",
                  href: "/industries/chemicals-steel-rmc-building-materials-recovery",
                },
                {
                  label: "Bitumen, Aggregates & Highway Contractor Recovery",
                  href: PAGE_URL,
                },
              ]}
            />
            <p className="text-[11px] text-slate-500 mt-2">
              Reviewed by{" "}
              <span className="font-semibold text-slate-700">
                Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions
              </span>{" "}
              &bull; Updated Nov 2026 &bull; Verified Statutory Playbook
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <BitumenTableOfContents />

            <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1 */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Why Highway EPC Camp Demobilization Trapped ₹90 Lakh Supplier Bills
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Across India&apos;s National Highway (NHAI / MoRTH), Bharatmala, and State PWD corridors, out-of-state EPC contractors and back-to-back sub-contractors establish temporary camp yards housing drum hot-mix plants, Wet Mix Macadam (WMM) pugmills, diesel generators, and tipper fleets. For 12 to 18 months, local stone crushers, VG-30/VG-40 bitumen emulsion processors, and fly-ash/GGBS suppliers extend 30-to-60 day credit on the strength of visible site machinery and ongoing carriageway paving.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The default crisis strikes during the final 10% of the 40-km package. Once the Dense Bituminous Macadam (DBM) and Bituminous Concrete (BC) layers are rolled and the Provisional Completion Certificate (PCC) is imminent, the sub-contractor stops clearing running ledger balances. Within a single weekend, cranes arrive to unbolt the hot-mix plant and shift camp assets 1,200 km away to another state—leaving local quarry owners and bitumen tankers chasing an out-of-state registered office with ₹90 Lakh or more unpaid.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1.5">
                      The Post-Demobilization Trap
                    </p>
                    <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                      If you wait until the camp yard is empty, serving court summons at a distant corporate office takes months, local assets are gone, and the sub-contractor quietly collects its final annuity or retention release without paying local material creditors.
                    </p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1.5">
                      The Pre-Demobilization Counter-Strike
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                      Acting while machinery or NHAI/PWD receivables remain in-district lets you combine our{" "}
                      <Link
                        href="/tools/msme-delayed-payment-interest-calculator"
                        className="font-bold underline text-emerald-900 hover:text-[#DC2626]"
                      >
                        MSME 3x Interest Calculator
                      </Link>{" "}
                      with an urgent{" "}
                      <Link
                        href="/templates/legal-notice-reply-format"
                        className="font-bold underline text-emerald-900 hover:text-[#DC2626]"
                      >
                        Statutory Demand Notice
                      </Link>{" "}
                      and Order XXXVIII Rule 5 CPC attachment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: 5-Stage Decision Tree */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    5-Stage Pre-Demobilization Attachment &amp; Escrow Freeze Flow
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Speed and documentary precision determine whether you recover 100% before the camp vacates or spend years chasing an empty shell. Execute these five sequential stages the moment crane mobilization or delayed RA-bill excuses surface:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                  <svg
                    viewBox="0 0 880 220"
                    width={880}
                    height={220}
                    role="img"
                    aria-label="5-stage highway contractor pre-demobilization attachment and escrow freeze workflow"
                    className="w-full h-auto"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="30" width="152" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="34" cy="54" r="12" fill="#DC2626" />
                    <text x="34" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                    <text x="54" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">e-Ravanna Lock</text>
                    <text x="22" y="84" fill="#CBD5E1" fontSize="10">Export Mining Passes,</text>
                    <text x="22" y="100" fill="#CBD5E1" fontSize="10">Dharamkanta Slips,</text>
                    <text x="22" y="116" fill="#CBD5E1" fontSize="10">E-Way Part-B &amp; COA.</text>
                    <text x="22" y="146" fill="#34D399" fontSize="9.5" fontWeight="bold">BSA 2023 s.63 Cert.</text>

                    <path d="M162 105 L186 105" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="188" y="30" width="152" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="212" cy="54" r="12" fill="#DC2626" />
                    <text x="212" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                    <text x="232" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Camp Proof</text>
                    <text x="200" y="84" fill="#CBD5E1" fontSize="10">Geo-tag dismantling</text>
                    <text x="200" y="100" fill="#CBD5E1" fontSize="10">hot-mix drum, cranes</text>
                    <text x="200" y="116" fill="#CBD5E1" fontSize="10">&amp; trailer loading.</text>
                    <text x="200" y="146" fill="#FBBF24" fontSize="9.5" fontWeight="bold">Proves Asset Flight</text>

                    <path d="M340 105 L364 105" stroke="#DC2626" strokeWidth="2.5" />

                    {/* Stage 3 */}
                    <rect x="366" y="30" width="152" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="390" cy="54" r="12" fill="#DC2626" />
                    <text x="390" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                    <text x="410" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Dual Notice</text>
                    <text x="378" y="84" fill="#CBD5E1" fontSize="10">Serve EPC + copy</text>
                    <text x="378" y="100" fill="#CBD5E1" fontSize="10">NHAI PIU / PWD /</text>
                    <text x="378" y="116" fill="#CBD5E1" fontSize="10">Escrow Concessionaire.</text>
                    <text x="378" y="146" fill="#F87171" fontSize="9.5" fontWeight="bold">48-Hr Ultimatum</text>

                    <path d="M518 105 L542 105" stroke="#DC2626" strokeWidth="2.5" />

                    {/* Stage 4 */}
                    <rect x="544" y="30" width="152" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <circle cx="568" cy="54" r="12" fill="#DC2626" />
                    <text x="568" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                    <text x="588" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Order 38 R.5</text>
                    <text x="556" y="84" fill="#CBD5E1" fontSize="10">Urgent Commercial</text>
                    <text x="556" y="100" fill="#CBD5E1" fontSize="10">Suit (s.12A exempt)</text>
                    <text x="556" y="116" fill="#CBD5E1" fontSize="10">+ Garnishee Restraint.</text>
                    <text x="556" y="146" fill="#34D399" fontSize="9.5" fontWeight="bold">Freeze Plant / Escrow</text>

                    <path d="M696 105 L720 105" stroke="#DC2626" strokeWidth="2.5" />

                    {/* Stage 5 */}
                    <rect x="722" y="30" width="148" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="746" cy="54" r="12" fill="#DC2626" />
                    <text x="746" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                    <text x="766" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">s.138 + 43B(h)</text>
                    <text x="734" y="84" fill="#CBD5E1" fontSize="10">Present PDCs in</text>
                    <text x="734" y="100" fill="#CBD5E1" fontSize="10">home-bank court +</text>
                    <text x="734" y="116" fill="#CBD5E1" fontSize="10">MSMED 3x RBI claim.</text>
                    <text x="734" y="146" fill="#34D399" fontSize="9.5" fontWeight="bold">Full Principal + Int.</text>
                  </svg>
                </div>

                {/* Mobile Stacked Flow Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  {[
                    {
                      n: "1",
                      title: "Lock Mining e-Ravanna & Weighbridge Dossier",
                      desc: "Export State Mining e-Ravanna passes, Dharamkanta slips, E-Way Bill Part-B, and bitumen COAs certified under BSA 2023 s.63.",
                    },
                    {
                      n: "2",
                      title: "Document Camp Dismantling & Asset Flight",
                      desc: "Capture geo-tagged photos of unbolted hot-mix drums, cranes, and trailers to establish imminent removal from district jurisdiction.",
                    },
                    {
                      n: "3",
                      title: "Serve Urgent Notice to Contractor & NHAI/PWD",
                      desc: "Copy the NHAI PIU, PWD Division, or HAM concessionaire escrow bank on your statutory demand before final RA-bill disbursement.",
                    },
                    {
                      n: "4",
                      title: "File Commercial Suit + Order XXXVIII Rule 5 IA",
                      desc: "Invoke Patil Automation urgent-relief exemption from Section 12A mediation and seek conditional attachment of camp machinery or escrow funds.",
                    },
                    {
                      n: "5",
                      title: "Parallel NI Act s.138 & MSMED 3x Compound Interest",
                      desc: "Prosecute dishonoured security cheques in your local bank court while enforcing 3x RBI interest and Section 43B(h) tax disallowance.",
                    },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                        {item.n}
                      </span>
                      <div>
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Matrix: e-Ravanna, Order XXXVIII &amp; NHAI Escrow Garnishee
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Selecting the right statutory track depends on whether the contractor&apos;s camp machinery is still on site, whether NHAI/PWD retention money is awaiting release, and whether you hold Udyam Micro/Small status or dishonoured security cheques:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Legal Remedy / Hook</th>
                        <th className="p-3.5 font-bold">Trigger Condition</th>
                        <th className="p-3.5 font-bold">Asset / Pressure Target</th>
                        <th className="p-3.5 font-bold">Timeline &amp; Jurisdiction</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          CPC Order XXXVIII Rule 5 (Attachment Before Judgment)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Contractor dismantling hot-mix/WMM plant or shifting tippers out of district
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Conditional attachment of site machinery or mandatory bank guarantee
                        </td>
                        <td className="p-3.5 font-semibold text-emerald-700">
                          Immediate (s.12A mediation exempt for urgent relief)
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          Order XXI Rule 46 / s.151 CPC Garnishee Order
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Final RA bill, annuity, or 5% retention pending with NHAI/PWD/SPV
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Restrains principal employer or escrow bank from releasing disputed sum
                        </td>
                        <td className="p-3.5 font-semibold text-slate-800">
                          Interim order in local Commercial Court / Arbitral s.9
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          Order XXXVII CPC Summary Suit
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Written PO, GST invoices, e-Ravanna passes &amp; weighbridge slips
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Contractor barred from defending unless court grants leave with deposit
                        </td>
                        <td className="p-3.5 font-semibold text-slate-800">
                          Fast-track decree (District / Commercial Court)
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          MSMED Act s.15–18 &amp; Income Tax s.43B(h)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Supplier holds Udyam Micro/Small registration on supply date (&gt;45 days overdue)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          3x RBI compound interest + 100% tax disallowance for contractor at FY-end
                        </td>
                        <td className="p-3.5 font-semibold text-amber-700">
                          MSEFC Conciliation (90d) + Statutory Arbitration
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          NI Act s.138 &amp; s.143A
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Dishonoured PDCs or security cheques (&ldquo;Funds Insufficient&rdquo; / &ldquo;Stop Payment&rdquo;)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Criminal liability of directors + up to 20% interim compensation deposit
                        </td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">
                          30-day notice; filed in supplier&apos;s home-bank court
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs + Dual CTA */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Interactive Road-EPC Default &amp; Demobilization Scenarios
                  </h2>
                </div>

                <BitumenScenarioTabs />

                <div className="pt-4 border-t border-slate-200">
                  <BitumenNoticeCTA />
                </div>
              </section>

              {/* Section 5: Worked ₹90 Lakh Ledger */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked ₹90 Lakh Bitumen &amp; Aggregate Claim Ledger
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consider a typical 40-km state highway widening package where an out-of-state sub-contractor leaves ₹90,00,000 unpaid across crushed aggregates and bulk VG-30 bitumen for 180 days beyond the 45-day statutory credit cap:
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700 pb-3">
                    <p className="text-sm sm:text-base font-black text-white">
                      Illustrative Pre-Demobilization Claim Computation (180 Days Overdue)
                    </p>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700">
                      Crosses ₹1 Cr IBC Threshold With Statutory Interest
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                      <p className="font-bold text-slate-200">Supply Principal Breakdown</p>
                      <div className="flex justify-between text-slate-300">
                        <span>Crusher Aggregates (GSB / WMM / 20mm)</span>
                        <span className="font-bold text-white">₹52,00,000</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>VG-30 / VG-40 Bitumen &amp; Emulsion Tankers</span>
                        <span className="font-bold text-white">₹38,00,000</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-2 font-black text-emerald-400">
                        <span>Total Unpaid Principal</span>
                        <span>₹90,00,000</span>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                      <p className="font-bold text-slate-200">Statutory Add-Ons (MSMED s.16 @ 19.5% p.a. Illustrative 3x RBI Rate)</p>
                      <div className="flex justify-between text-slate-300">
                        <span>6-Month Compounded Interest (Approx.)</span>
                        <span className="font-bold text-amber-300">₹9,14,000+</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>s.143A NI Act Interim Deposit (20% of Dishonoured PDC)</span>
                        <span className="font-bold text-red-300">₹18,00,000</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-2 font-black text-white">
                        <span>Section 43B(h) Disallowance Risk to Buyer</span>
                        <span>₹90,00,000 Taxable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Mining e-Ravanna, Weighbridge &amp; BSA 2023 s.63 Evidence Checklist
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before filing an Order XXXVIII Rule 5 attachment application or an Order XXXVII summary suit, assemble these six statutory records with a signed Section 63 Bharatiya Sakshya Adhiniyam, 2023 electronic evidence certificate:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "1. State Mining e-Ravanna / Royalty Passes",
                      body: "Official portal PDFs showing quarry dispatch time, tipper registration, mineral grade (GSB/WMM/10mm/20mm), and net tonnage.",
                    },
                    {
                      title: "2. Dharamkanta Weighbridge & Pond-Ash Slips",
                      body: "Gross, tare, and net weighment printouts paired with thermal plant fly-ash gate passes for embankment/PQC dispatches.",
                    },
                    {
                      title: "3. GST E-Way Bill Part-A & Part-B + GSTR-1",
                      body: "Proves interstate or intrastate highway movement of bitumen tankers and aggregates, plus buyer ITC availment in GSTR-2B.",
                    },
                    {
                      title: "4. Refinery / Importer Bitumen COA & Tanker Seals",
                      body: "IS 73:2013 batch Certificates of Analysis, manifold seal numbers, and tanker unloading slips signed prior to heated storage decanting.",
                    },
                    {
                      title: "5. Geo-Tagged Camp Dismantling Evidence",
                      body: "Timestamped photos/videos of cranes unbolting the hot-mix plant or loading trailers, establishing imminent removal from jurisdiction.",
                    },
                    {
                      title: "6. BSA 2023 Section 63 Hash & Device Certificate",
                      body: "Mandatory electronic-record affidavit certifying server integrity for WhatsApp ledger confirmations, SCADA weighbridge logs, and emails.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                    >
                      <p className="text-xs sm:text-sm font-black text-slate-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7: Precedents + Cross-Links */}
              <section
                id="heading-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Verified Supreme Court &amp; High Court Precedents for Material Suppliers
                  </h2>
                </div>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((item) => (
                    <div
                      key={item.parties}
                      className="relative bg-slate-50 border border-slate-200 rounded-2xl p-5 pl-6 overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h3 className="text-sm sm:text-base font-black text-slate-900">
                          {item.parties}
                        </h3>
                        <span className="text-[11px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200 shrink-0">
                          {item.citation}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-[#DC2626] mb-2">{item.amount}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                        <strong>Holding:</strong> {item.holding}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        <strong>Supplier Application:</strong> {item.takeaway}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Sibling & Core B2B Cross-Link Directory */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <p className="text-xs font-black uppercase tracking-widest text-red-400">
                    Related Building Material &amp; Commercial Recovery Playbooks
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <Link
                      href="/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute"
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <p className="text-xs font-bold text-white">
                        RMC Supplier Cube-Test Dispute Recovery &rarr;
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Defeating bogus 28-day cube failure excuses under IS 456.
                      </p>
                    </Link>
                    <Link
                      href="/tmt-steel-structural-iron-trader-credit-default-recovery-india"
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <p className="text-xs font-bold text-white">
                        TMT Steel &amp; Structural Iron Trader Recovery &rarr;
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Weighbridge slips, MTC &amp; Order XXXVII suits against builders.
                      </p>
                    </Link>
                    <Link
                      href="/industrial-chemicals-solvents-dyes-pigments-invoice-recovery"
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <p className="text-xs font-bold text-white">
                        Industrial Chemicals, Solvents &amp; Dyes Recovery &rarr;
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        COA batch-testing &amp; purity variance dispute rebuttal.
                      </p>
                    </Link>
                    <Link
                      href="/law/order-37-summary-suit-money-recovery"
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <p className="text-xs font-bold text-white">
                        Order 37 CPC Summary Suit Guide &rarr;
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Fast-track money recovery on written invoices &amp; POs.
                      </p>
                    </Link>
                    <Link
                      href="/cheque-bounce-and-civil-suit-together"
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <p className="text-xs font-bold text-white">
                        Cheque Bounce &amp; Civil Suit Together &rarr;
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Parallel NI Act s.138 &amp; Order XXXVII CPC strategy.
                      </p>
                    </Link>
                    <Link
                      href="/recovery/vendor-payments"
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <p className="text-xs font-bold text-white">
                        B2B Vendor &amp; Supplier Payment Recovery &rarr;
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Institutional escalation across commercial contracts.
                      </p>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 8: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    FAQs: Bitumen, Crusher &amp; Fly-Ash Road Contractor Recovery
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all"
                    >
                      <summary className="cursor-pointer list-none p-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 9: Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Authorities &amp; Highway Material Recovery Sources
                  </h2>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="hover:text-[#DC2626] underline decoration-slate-300"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
