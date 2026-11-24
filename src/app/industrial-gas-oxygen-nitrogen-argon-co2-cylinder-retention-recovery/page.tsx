import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import GasCylinderTableOfContents from "./GasCylinderTableOfContents";
import GasCylinderScenarioTabs from "./GasCylinderScenarioTabs";
import GasCylinderCTA from "./GasCylinderCTA";

export const revalidate = 86400;

const PAGE_URL = "/industrial-gas-oxygen-nitrogen-argon-co2-cylinder-retention-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const H1_TEXT =
  "Factory or Hospital Holding 300 PESO-Embossed Oxygen/Argon Cylinders Without Paying Gas Bills or Cylinder Rent? BNS s.316 & PESO Recovery";

const META_TITLE = "Industrial Gas Cylinder Retention & Rent Recovery (PESO)";
const META_DESCRIPTION =
  "Recover ₹7k–₹14k PESO-embossed O2/Argon/CO2 cylinders, daily rent & gas arrears via Gas Cylinders Rules 2016, BNS s.316 & Order 37 CPC.";

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
          "Industrial gas supplier PESO embossed cylinder retention and rent recovery playbook"
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

const STATUTORY_MATRIX = [
  {
    statute: "Gas Cylinders Rules, 2016 (PESO)",
    provision: "Rules 18, 22, 35 & Owner Identification Mark Norms",
    trigger:
      "Customer retains neck-ring embossed cylinders or sends them to a rival/grey-market plant for unauthorized refilling.",
    remedy:
      "Strict statutory bar on filling another owner's stamped cylinders without written consent; PESO license suspension risk forces immediate return.",
    timeline: "7-Day Cease & Desist + PESO Circle Escalation",
  },
  {
    statute: "Bharatiya Nyaya Sanhita (BNS), 2023",
    provision: "Section 316 (Criminal Breach of Trust) & Section 317",
    trigger:
      "Defaulting factory, foundry, or hospital refuses to return bailed cylinders after formal written recall or diverts them.",
    remedy:
      "Criminal prosecution for dishonest misappropriation of bailed steel vessels (up to 5 years imprisonment + fine) and recovery via BNSS seizure.",
    timeline: "7–15 Days Post Recall Notice",
  },
  {
    statute: "Indian Contract Act, 1872",
    provision: "Sections 148, 160, 161 & 73–74 (Bailment & Demurrage)",
    trigger:
      "Cylinder rotation exceeds the 15-day or 30-day free holding window specified in the supply agreement or delivery challan.",
    remedy:
      "Accrual of daily cylinder holding rent (demurrage), liquidated replacement value (₹7,000–₹14,000/unit), and unpaid gas invoices.",
    timeline: "Continuous Daily Accrual",
  },
  {
    statute: "Code of Civil Procedure, 1908",
    provision: "Order XXXVII (Summary Suit) & Order XXXVIII Rule 5",
    trigger:
      "Confirmed gas invoices, signed challans, and dishonored cheques remain unpaid while the debtor factory strips assets.",
    remedy:
      "Fast-track money decree without full trial plus pre-judgment attachment of plant receivables, bank accounts, or scrap inventory.",
    timeline: "4–9 Months (Summary Track)",
  },
  {
    statute: "MSMED Act, 2006 & IT Act s.43B(h)",
    provision: "Sections 15–18 (MSEFC) & 3x RBI Compound Interest",
    trigger:
      "Udyam-registered gas filler or distributor faces payment delay beyond 45 days from a corporate buyer or hospital.",
    remedy:
      "Statutory 3x RBI bank rate interest compounded monthly plus Income Tax disallowance on the buyer's year-end balance sheet.",
    timeline: "45-Day Statutory Cap / 90-Day MSEFC",
  },
  {
    statute: "Negotiable Instruments Act, 1881",
    provision: "Section 138 read with Section 141 (Director Liability)",
    trigger:
      "Security PDCs or gas bill cheques issued by the fabrication plant or hospital bounce for insufficient funds or stop-payment.",
    remedy:
      "Personal criminal liability against Managing Directors and authorized signatories; 20% interim compensation under Section 143A.",
    timeline: "15-Day Notice + 30-Day Filing",
  },
];

const FAQS = [
  {
    question:
      "Can a defaulting factory legally refill our PESO-embossed cylinders at another gas plant?",
    answer:
      "No. Under the Gas Cylinders Rules, 2016 framed under the Explosives Act, 1884, every high-pressure seamless cylinder carries a permanent neck-ring embossing and serial number registered to its owner. No competing gas filler is permitted to fill a cylinder bearing another owner's identification mark without written authorization and PESO compliance. Serving a joint cease-and-desist notice citing PESO rules on both the buyer and the rival refiller exposes the rival plant to license suspension and BNS Section 317 liability.",
  },
  {
    question:
      "Can we file BNS Section 316 Criminal Breach of Trust for unreturned oxygen or argon cylinders?",
    answer:
      "Yes. High-pressure gas cylinders supplied on a returnable basis constitute commercial bailment under Sections 148 and 160 of the Indian Contract Act, 1872—only the gas is sold, while title to the steel cylinder remains with the gas supplier. Once you serve a formal recall notice and the buyer refuses to return the serial-numbered cylinders or diverts them to a third party, the retention crosses from civil default into dishonest misappropriation under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023.",
  },
  {
    question:
      "How do we recover daily cylinder holding rent (demurrage) if the buyer only signed delivery challans?",
    answer:
      "Signed empty/filled cylinder delivery challans that print the free holding window (typically 15 to 30 days) and the per-day demurrage rate (₹10 to ₹35 per cylinder per day) form a binding written commercial term when accepted without protest across multiple deliveries. Combined with GST invoices, monthly cylinder reconciliation statements, and a Section 63 BSA 2023 certificate for WhatsApp/email reminders, demurrage is recoverable alongside gas arrears in an Order XXXVII Summary Suit or MSEFC claim.",
  },
  {
    question:
      "What if a private hospital claims emergency patient care to withhold 150 medical oxygen cylinders?",
    answer:
      "Emergency medical use does not extinguish a hospital's obligation to pay for supplied oxygen, pay agreed holding rent, or return empty and surplus standby cylinders. To remain legally bulletproof, conduct a documented manifold audit separating empty/surplus cylinders from active ICU units, issue a 10-day phased replacement/return schedule, and invoke MSMED Act Section 16 (3x RBI compound interest) alongside Income Tax Act Section 43B(h) disallowance pressure.",
  },
  {
    question:
      "How do cryogenic liquid tank (VIE) lessors recover installations when plant security blocks gate entry?",
    answer:
      "Cryogenic Vacuum Insulated Evaporator (VIE) tanks, vaporizers, and manifolds remain the lessor's capital equipment under the facility lease and PESO site license. If a defaulting factory locks its gates to block crane decommissioning, the lessor should immediately file an urgent petition under Section 9 of the Arbitration and Conciliation Act, 1996 (or Order 39/40 CPC) seeking appointment of a Court Receiver or Advocate Commissioner with police assistance to safely purge and lift the vessel.",
  },
  {
    question:
      "What evidence is required under BSA 2023 to prove ownership of 300 unreturned cylinders?",
    answer:
      "You need six core records: (1) PESO cylinder manufacturing test certificates (Form F / Bureau of Indian Standards IS 7285 records) linking serial numbers to your company's neck-ring mark; (2) latest periodic hydro-test certificates; (3) signed delivery/empty-return challans tracking net cylinder balance; (4) GST tax invoices for gas and cylinder rent; (5) ledger reconciliation emails or WhatsApp confirmations supported by a Section 63 BSA 2023 electronic evidence certificate; and (6) bounced security cheques, if any.",
  },
];

const PRIMARY_SOURCES = [
  {
    title:
      "Petroleum and Explosives Safety Organisation (PESO) — Gas Cylinders Rules, 2016 & Explosives Act, 1884 Portal",
    url: "https://peso.gov.in",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 Criminal Breach of Trust & Section 317) — IndiaCode",
    url: "https://www.indiacode.nic.in",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5 Attachment) — IndiaCode",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18) — MSME Samadhaan",
    url: "https://samadhaan.msme.gov.in",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 Electronic Evidence Certificate) — IndiaCode",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
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
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Industrial Gas Suppliers Recover Unreturned PESO Cylinders & Rent",
  description:
    "Step-by-step statutory recovery workflow using Gas Cylinders Rules 2016 (PESO), BNS Section 316, daily demurrage ledgers, and Order 37 CPC.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock PESO Serial & Challan Ledger",
      text: "Reconcile filled vs. empty cylinder challans against your PESO neck-ring embossing register and hydro-test certificates.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve Dual PESO + BNS s.316 Recall Notice",
      text: "Dispatch a tri-channel Fact-Verified Notice (RPAD, Email, WhatsApp) demanding 7-day cylinder return, daily rent, and unpaid gas bills—copying any suspected rogue refiller.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Trigger Order 37 CPC, Section 138 NI Act & MSEFC",
      text: "Escalate unpaid gas + demurrage + ₹7,000–₹14,000/cylinder replacement value via Order 37 Summary Suit, Order 38 Rule 5 attachment, or MSEFC Samadhaan.",
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
      name: "Mining, Fuel & Commodity Recovery",
      item: `${SITE_URL}/industries/mining-minerals-fuel-scrap-commodity-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Industrial Gas Cylinder Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function IndustrialGasCylinderRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-25 Creditor Playbook</span>
            <span>&bull;</span>
            <span>PESO Gas Cylinders Rules 2016</span>
            <span>&bull;</span>
            <span>BNS s.316 &amp; Demurrage</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* 40-60 Word Statutory Summary Box with Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Returnable O2, N2, Argon, DA, and CO2 cylinders remain your company&apos;s capital asset under the Gas Cylinders Rules, 2016. Refusing return or refilling PESO-embossed vessels at rival plants triggers BNS s.316 criminal breach of trust, daily demurrage, and{" "}
            <Link
              href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              IND-25 industrial &amp; commodity recovery remedies
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                &#8377;7k&ndash;&#8377;14k
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Replacement Cost Per Steel Cylinder (10x Gas Value)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                PESO 2016
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Strict Bar on Refilling Third-Party Embossed Cylinders
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                BNS s.316
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Criminal Breach of Trust (Up to 5 Yrs + Asset Seizure)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                3x RBI Rate
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                MSMED s.16 Compound Interest + Daily Holding Rent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Mining, Fuel & Commodity Recovery",
                href: "/industries/mining-minerals-fuel-scrap-commodity-recovery",
              },
              {
                label: "Industrial Gas Cylinder Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <GasCylinderTableOfContents />

          {/* Right Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Why Unreturned Gas Cylinders Cost 10x More Than Gas Bills
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For industrial air-separation plants, medical oxygen fillers, and CO2/argon distributors, the real working-capital crisis is rarely the ₹350–₹900 worth of gas inside a cylinder. A single seamless high-pressure steel cylinder (47-litre water capacity / 7 cum) or dissolved acetylene (DA) vessel costs between <strong>₹7,000 and ₹14,000</strong>—often 10 to 20 times the margin on one refill. When a fabrication yard, rolling mill, or private hospital stops ordering gas after running up 90-day arrears, retaining 250 to 300 cylinders silently locks up <strong>₹25 Lakh to ₹42 Lakh</strong> of your fleet capital.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Worse still, defaulting plants routinely divert your returnable cylinder bank to grey-market or rival gas fillers who refill your vessels without paying cylinder rental or capital cost. Treating this purely as a routine{" "}
                <Link
                  href="/recovery/unpaid-invoices"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  unpaid invoice recovery
                </Link>{" "}
                matter leaves you stuck in multi-year civil litigation while your fleet circulates elsewhere. Instead, industrial gas creditors must weaponize two overlapping statutory levers: <strong>PESO&apos;s Gas Cylinders Rules, 2016</strong> (which prohibit any third party from filling cylinders bearing your permanent neck-ring embossing) and <strong>Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023</strong> (criminal breach of trust over bailed assets).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1">
                    Capital Fleet Bleed
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    300 unreturned cylinders at ₹10,500/unit equals ₹31.50 Lakh in trapped steel assets—forcing suppliers to buy new cylinders just to service paying customers.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                    Grey-Market Refilling Risk
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Rogue plants refilling your cylinders skip periodic hydro-testing, creating catastrophic explosion liability tied back to your embossed owner mark.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1">
                    Dual Civil + Criminal Lever
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Separating gas bills from bailed cylinder title lets you pursue criminal recall under BNS s.316 while claiming daily rent and replacement cost in civil court.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Decision Tree: Cylinder Retrieval vs BNS s.316 &amp; Demurrage
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before filing a commercial suit, classify the debtor&apos;s behavior at Day 30–60 of retention. If the cylinders are sitting idle inside a defaulting plant, a 7-day BNS s.316 recall notice triggers rapid return. If intelligence shows your cylinders are being refilled by a competing gas plant, immediately serve a dual-addressee PESO Rules cease-and-desist.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-4 border border-slate-800">
                <svg
                  width="780"
                  height="290"
                  viewBox="0 0 780 290"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Industrial gas cylinder retention recovery decision tree"
                  className="mx-auto max-w-full h-auto"
                >
                  {/* Root Node */}
                  <rect x="240" y="14" width="300" height="48" rx="10" fill="#DC2626" />
                  <text x="390" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    30+ Days Overdue &amp; Cylinders Unreturned
                  </text>
                  <text x="390" y="50" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                    Audit PESO Neck-Ring Serials + Delivery Challans
                  </text>

                  {/* Connector Lines */}
                  <path d="M390 62 V88 M130 88 H650 M130 88 V112 M390 88 V112 M650 88 V112" stroke="#64748B" strokeWidth="2" />

                  {/* Branch 1 */}
                  <rect x="20" y="112" width="220" height="72" rx="10" fill="#1E293B" stroke="#475569" />
                  <text x="130" y="133" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">
                    Track A: Factory / Hospital Hoarding
                  </text>
                  <text x="130" y="150" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    7-Day BNS s.316 Recall Notice +
                  </text>
                  <text x="130" y="165" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    Daily Demurrage + Gas Arrears
                  </text>

                  {/* Branch 2 */}
                  <rect x="280" y="112" width="220" height="72" rx="10" fill="#1E293B" stroke="#475569" />
                  <text x="390" y="133" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">
                    Track B: Rogue Refiller Suspected
                  </text>
                  <text x="390" y="150" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    Joint Notice to Buyer &amp; Rival Plant:
                  </text>
                  <text x="390" y="165" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    PESO Gas Cylinders Rules + BNS s.317
                  </text>

                  {/* Branch 3 */}
                  <rect x="540" y="112" width="220" height="72" rx="10" fill="#1E293B" stroke="#475569" />
                  <text x="650" y="133" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700">
                    Track C: Cryogenic VIE / Tank Lockout
                  </text>
                  <text x="650" y="150" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    Revoke Site License + Arbitration s.9
                  </text>
                  <text x="650" y="165" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    Court Receiver for Safe De-Rigging
                  </text>

                  {/* Downward Arrows to Escalation */}
                  <path d="M130 184 V212 M390 184 V212 M650 184 V212 M130 212 H650 M390 212 V226" stroke="#64748B" strokeWidth="2" />

                  {/* Final Box */}
                  <rect x="140" y="226" width="500" height="50" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="390" y="247" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    If Unreturned After 7 Days: Order 37 CPC + Order 38 Rule 5 + s.138 NI Act + MSEFC
                  </text>
                  <text x="390" y="264" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Claim = Unpaid Gas + Daily Rent + ₹7k–₹14k/Cylinder Replacement + 3x RBI Interest
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-xs font-bold text-red-400 uppercase mb-1">
                    Track A: Factory / Hospital Hoarding
                  </p>
                  <p className="text-xs text-slate-200">
                    Serve 7-Day BNS s.316 Recall Notice + Daily Demurrage + Gas Arrears Ledger.
                  </p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-xs font-bold text-amber-400 uppercase mb-1">
                    Track B: Rogue Competitor Refilling
                  </p>
                  <p className="text-xs text-slate-200">
                    Serve Joint Cease &amp; Desist on Buyer + Rival Plant citing PESO Gas Cylinders Rules 2016 &amp; BNS s.317.
                  </p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-xs font-bold text-emerald-400 uppercase mb-1">
                    Track C: Cryogenic VIE Tank Lockout
                  </p>
                  <p className="text-xs text-slate-200">
                    Revoke PESO Site Authorization + File Section 9 Arbitration / Order 40 CPC for Court Receiver de-installation.
                  </p>
                </div>
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
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Statutory Matrix: Gas Cylinders Rules 2016, BNS s.316 &amp; CPC
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Industrial gas recovery succeeds fastest when your legal notice cites exact statutory penalties rather than generic payment reminders. Use the matrix below to match each default pattern to its strongest statutory remedy.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Rules</th>
                      <th className="p-3.5 font-bold">Key Provision</th>
                      <th className="p-3.5 font-bold">Operational Trigger</th>
                      <th className="p-3.5 font-bold">Creditor Remedy &amp; Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 align-top">
                        <td className="p-3.5 font-bold text-slate-900">{row.statute}</td>
                        <td className="p-3.5 text-slate-700 font-medium">{row.provision}</td>
                        <td className="p-3.5 text-slate-600">{row.trigger}</td>
                        <td className="p-3.5 text-slate-700">
                          <span className="block mb-1">{row.remedy}</span>
                          <span className="inline-block px-2 py-0.5 rounded bg-red-50 text-[#DC2626] text-[11px] font-bold">
                            {row.timeline}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4 Cylinder Retention &amp; Rogue Refilling Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select your exact commercial failure mode below to inspect the statutory leverage and 3-step enforcement playbook for fabrication plants, rogue competitor refillers, hospitals, and cryogenic VIE tank installations.
              </p>

              <GasCylinderScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Worked Ledger: 300-Cylinder Asset, Rent &amp; Demurrage Claim
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many gas distributors under-claim by demanding only their unpaid gas invoices. When a defaulting fabrication plant withholds 300 high-pressure Oxygen and Argon cylinders for 180 days beyond the 30-day free rotation period, your total legally recoverable claim is structured across four distinct heads:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <p className="text-sm sm:text-base font-bold text-white">
                    Illustrative Claim Breakdown: 300 Unreturned O2/Argon Cylinders (180 Days Overdue)
                  </p>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                    Asset + Rent + Gas + MSMED Interest
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">
                      1. Unpaid Gas Supply Invoices (300 refills @ ₹450 avg + 18% GST)
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;1,59,300</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">
                      2. Cylinder Demurrage / Holding Rent (300 units &times; 180 excess days &times; ₹15/day + GST)
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;9,55,800</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">
                      3. Alternative Cylinder Replacement Value if Unreturned (300 units &times; ₹10,500)
                    </span>
                    <span className="font-bold text-amber-400 shrink-0">&#8377;31,50,000</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">
                      4. MSMED s.16 Statutory Interest (3x RBI Bank Rate on Gas + Rent Arrears)
                    </span>
                    <span className="font-bold text-emerald-400 shrink-0">~&#8377;1,08,000+</span>
                  </div>
                  <div className="flex justify-between gap-4 pt-2 text-sm sm:text-base">
                    <span className="font-black text-white">
                      Total Aggregate Demand (Physical Return + Arrears OR Full Replacement)
                    </span>
                    <span className="font-black text-emerald-400 shrink-0">&#8377;43,73,100</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900">
                <strong>Negotiation Advantage:</strong> Once the defaulting director sees a ₹43.73 Lakh aggregate demand backed by PESO serial numbers and BNS s.316 liability, returning the 300 empty cylinders within 7 days to knock ₹31.50 Lakh off the claim becomes their immediate priority—while you still enforce the ₹12.23 Lakh gas, rent, and interest ledger via{" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-emerald-800 font-bold underline"
                >
                  Order 37 Summary Suit
                </Link>{" "}
                or{" "}
                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="text-emerald-800 font-bold underline"
                >
                  Section 138 NI Act director prosecution
                </Link>
                .
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
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  PESO Neck-Ring Serial &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To prevent a defaulting plant from claiming &ldquo;these cylinders belong to our own inventory&rdquo; or disputing challan signatures, compile this 6-point evidentiary pack before dispatching your legal notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. PESO Owner Mark & Form F Certificates",
                    desc: "Original cylinder manufacturer test certificates and PESO approval letters linking your registered neck-ring embossing code to the specific serial numbers.",
                  },
                  {
                    title: "2. Periodic Hydro-Test & Valve Records",
                    desc: "5-year / 10-year statutory hydro-stretch test logs proving continuous ownership, maintenance, and PESO compliance of your cylinder fleet.",
                  },
                  {
                    title: "3. Signed Empty & Filled Delivery Challans",
                    desc: "Gate-stamped delivery slips showing cylinder quantity dispatched, empty units returned, running closing balance, and printed demurrage terms.",
                  },
                  {
                    title: "4. Monthly Cylinder Reconciliation & Rent Bills",
                    desc: "GST tax invoices for gas supply and separate debit notes or monthly invoices for excess cylinder holding rent beyond the free rotation window.",
                  },
                  {
                    title: "5. BSA 2023 s.63 Digital Audit Certificate",
                    desc: "Statutory Section 63 certificate authenticating WhatsApp dispatch confirmations, ERP cylinder-tracking exports, and email balance acknowledgments.",
                  },
                  {
                    title: "6. Security Deposit & PDC Dishonor Memo",
                    desc: "Copy of the customer onboarding form, refundable cylinder security ledger (if any), and bank return memos for dishonored security or bill cheques.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Dual-Track CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Serve a PESO &amp; BNS s.316 Cylinder Recovery Notice Today
                </h2>
              </div>

              <GasCylinderCTA />
            </section>

            {/* Section 8: Hub, Calculators, Templates & Guides */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Commodity Hub, Calculators, Templates &amp; Recovery Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">
                    Parent Industry Hub (IND-25)
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Mining, Minerals, Fuel, Scrap &amp; Gas Recovery Hub
                  </p>
                </Link>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-emerald-700 mb-1">
                    Interactive Calculator (T1)
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    MSME 3x RBI Delayed Payment Interest Calculator
                  </p>
                </Link>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-slate-600 mb-1">
                    Notice Workspace (P1)
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Ready-to-Use Commercial Notice &amp; Reply Template
                  </p>
                </Link>
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-slate-600 mb-1">
                    Statutory Deep-Dive (L1)
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Order XXXVII CPC Summary Suit Money Recovery
                  </p>
                </Link>
                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-slate-600 mb-1">
                    Director Liability
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Section 138 NI Act Case Against Company Directors
                  </p>
                </Link>
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">
                    Enterprise Batch Desk
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Bulk CSV Legal Notice &amp; Institutional Recovery
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: Gas Cylinder &amp; Rent Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
              <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
                Reviewed for statutory accuracy by{" "}
                <strong className="text-slate-700">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions.
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
