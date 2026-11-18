import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CineAvRentalTableOfContents from "./CineAvRentalTableOfContents";
import CineAvRentalScenarioTabs from "./CineAvRentalScenarioTabs";
import CineAvRentalCTA from "./CineAvRentalCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/audio-visual-led-wall-camera-cine-gear-production-rental-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Film Line-Producer or Concert Organizer Wrapped the Show—and Defaulted on Your Camera/Lens/LED-Wall Rental (or Returned Rain-Damaged Gear)?";

const META_TITLE = "Cine Camera, Lighting & Event LED/AV Rental Recovery";

const META_DESCRIPTION =
  "Cine & AV rental houses hand out ₹1 Cr of Arri/Sony lenses & P2 LED panels per weekend! Recover unpaid hire sheets & lens/sensor laser-burn damages fast.";

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
    title:
      "The Indian Contract Act, 1872 (Sections 148–161 — Bailment, Standard of Care & Strict Liability for Unauthorized Use)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138 & 143A — Dishonour of Post-Dated Security & Production Cheques)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 — Criminal Breach of Trust for Unauthorized Sub-Renting or Retention)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Section 27 — Nemo Dat Quod Non Habet: Third-Party Sub-Lessee Acquires Zero Title)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 3x RBI Compound Interest on Hire Bills)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of Electronic Call Sheets, QC Videos & WhatsApp Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suit & Order XL Rule 1 Receiver for Unreturned Gear)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const FAQS = [
  {
    question:
      "Can a rental house recover OEM replacement cost if a concert laser burns an Arri or Sony camera sensor?",
    answer:
      "Yes. Under Sections 151, 152, and 154 of the Indian Contract Act, 1872, a lessee/bailee is strictly liable for damage caused by unauthorized exposure or failure to exercise reasonable care. When your Deal Memo prohibits unshielded laser exposure and your Check-Out QC video proves a clean sensor at dispatch, a signed Check-In QC Inspection Challan plus an authorized OEM service estimate legally entitles you to full sensor/module replacement cost plus daily loss-of-hire during repair downtime.",
  },
  {
    question:
      "Who pays for monsoon rain damage to P2.6 indoor LED wall panels—the rental vendor or the event planner?",
    answer:
      "In a dry-hire contract (or where the event planner places indoor-rated IP20/IP30 P2.6 panels in an uncovered outdoor venue against technical specs), the event organizer bears full bailee strict liability under Contract Act s.154. Even in wet-hire setups, if the organizer's site team refused canopy coverage or forced power-on during waterlogging despite written technician warnings, liability shifts to the organizer.",
  },
  {
    question:
      "What legal action applies if a line producer sub-rents our prime lenses or fails to return camera bodies after pack-up?",
    answer:
      "Unauthorized sub-renting, pledging, or retaining bailed cine gear after lease expiry is Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023—not a mere civil billing dispute. Under Sale of Goods Act s.27 (Nemo Dat), any third party holding your sub-rented lenses gets zero title. Dispatching an urgent Advocate Notice with CC to the jurisdictional Police Station (SHO) compels rapid return.",
  },
  {
    question:
      "Is a post-dated security cheque (PDC) from a film production company enforceable under NI Act s.138?",
    answer:
      "Yes. Under settled Supreme Court precedent (Sripati Singh v. State of Jharkhand), a security cheque presented after the rental debt crystallizes upon shoot wrap and invoice issuance is fully enforceable under Negotiable Instruments Act s.138. You must issue a statutory 15-day written demand notice within 30 days of receiving the bank dishonour memo ('Funds Insufficient' or 'Payment Stopped').",
  },
  {
    question:
      "Can an Udyam-registered camera or AV rental house claim 3x RBI Bank Rate interest on unpaid hire sheets?",
    answer:
      "Yes. Leasing and rental of cinema cameras, lighting, grip, LED walls, and concert sound systems without transfer of ownership qualify as 'services' under the MSMED Act, 2006. If your Udyam Registration predates the Deal Memo/Work Order, overdue hire bills attract 3x RBI Bank Rate compound interest after 45 days and trigger Income Tax Section 43B(h) expense disallowance for the corporate production house.",
  },
  {
    question:
      "Can we post a defaulter alert with our regional Cine Equipment Association without risking a defamation suit?",
    answer:
      "Yes, provided the credit alert strictly reports verifiable, undisputed facts (invoice number, overdue amount, bounced cheque memo, or pending legal notice) to bona fide association members under qualified privilege for trade protection—never abusive language or unverified allegations. Pairing a formal Advocate Demand Notice with an association credit intimation creates maximum settlement leverage.",
  },
  {
    question:
      "What is the difference between Dry Hire and Wet Hire when an event agency disputes gear damage?",
    answer:
      "In Dry Hire, you supply only the hardware (cameras, lenses, LED cabinets, line-array stacks) and the agency's own crew operates it; the agency bears 100% custody, transport, weather, and operator-error risk under Contract Act ss.151–154. In Wet Hire, your crew operates the gear, so you must document any organizer-mandated site hazards (unstable truss, wet stage, generator voltage spikes) via WhatsApp/email warnings at the venue to preserve your damage claim.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-18T10:00:00+05:30",
  dateModified: "2026-11-18T10:00:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
  },
  image: `${SITE_URL}/blog_money_recovery.png`,
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Recover Unpaid Cine Camera, Lens & Live-Event LED/AV Gear Rental & Damage Claims",
  description:
    "5-stage statutory escalation workflow for film camera houses and concert AV vendors using Check-Out/Check-In QC challans, Contract Act bailment, BNS s.316, and NI Act s.138.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Check-In QC & Sensor/LED Damage Valuation",
      text: "Document laser-burned sensors, water-logged P2 LED modules, or missing lens cases on the signed Check-In QC Inspection Challan within 24 hours of pack-up and obtain an authorized OEM repair estimate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Compile BSA 2023 s.63 Production & Call-Sheet Packet",
      text: "Bundle the Deal Memo, signed daily Call Sheets, WhatsApp overtime approvals, pre-dispatch QC video, GST invoices, and bounced PDC bank return memos.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Combined Bailee Liability, NI s.138 & s.43B(h) Notice",
      text: "Dispatch an Advocate Demand Notice via Speed Post RPAD, Email, and WhatsApp claiming unpaid hire, OEM damage replacement, repair downtime, and 3x RBI MSMED interest.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Trigger BNS s.316 Police CC for Unreturned or Sub-Rented Gear",
      text: "If lenses, bodies, or amplifiers are withheld or sub-rented post-wrap, mark a formal BNS s.316 Criminal Breach of Trust CC to the jurisdictional SHO alongside serial numbers.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File MSEFC / Order XXXVII Summary Suit / Section 9 Custody",
      text: "Escalate unresolved defaults to MSEFC Samadhaan (for Udyam hire arrears), Commercial Court Order XXXVII summary suit, NI s.138 criminal complaint, or Arbitration s.9 asset seizure.",
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
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Equipment Rental & Machinery Leasing Recovery",
      item: `${SITE_URL}/industries/equipment-rental-machinery-leasing-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Cine Camera & Event AV Rental Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function CineAvRentalRecoveryPage() {
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
            <span>IND-20 · Cine Gear, Camera &amp; Live-Event AV Rental Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + inline Parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/equipment-rental-machinery-leasing-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Equipment Rental &amp; Asset Leasing Recovery Hub
            </Link>
            , cine camera houses and event AV vendors enforce{" "}
            <strong className="text-white">Contract Act ss.148–161 bailee strict liability</strong>{" "}
            using Check-Out/Check-In QC challans to recover unpaid hire sheets, laser-burned sensor or rain-damaged P2 LED replacements,{" "}
            <strong className="text-white">NI Act s.138</strong> PDCs, and{" "}
            <strong className="text-white">BNS s.316</strong> sub-renting FIRs.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">&#8377;15L–&#8377;3 Cr+</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Weekend Camera &amp; LED Package Exposure
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">s.151 / s.154</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Bailee Strict Liability (Laser / Rain)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">15 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                NI Act s.138 PDC Statutory Cure Window
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Sub-Renting &amp; Unreturned Gear FIR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              {
                label: "Equipment Rental & Leasing Recovery",
                href: "/industries/equipment-rental-machinery-leasing-recovery",
              },
              {
                label: "Cine Camera & Event AV Rental Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CineAvRentalTableOfContents />

          {/* Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-post-wrap-default"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Line-Producers &amp; Event Agencies Default After Pack-Up
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Every weekend across Mumbai&apos;s Andheri West rental belt, Hyderabad&apos;s Film Nagar, Chennai&apos;s Kodambakkam, and Delhi-NCR&apos;s Okhla/Noida event warehouses, camera rental houses and concert AV vendors dispatch{" "}
                  <strong>&#8377;50 Lakh to &#8377;3 Crore+</strong> of Arri Alexa 35 bodies, Sony Venice 2 packages, Cooke Anamorphic prime sets, P2.6 indoor/outdoor LED walls, and L-Acoustics line-array rigs—often on a single WhatsApp Deal Memo and a post-dated cheque.
                </p>
                <p>
                  Once the OTT schedule wraps or the corporate/wedding concert finishes, two high-severity defaults hit simultaneously:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>
                    <strong>Post-Wrap Hire &amp; Overtime Refusal:</strong> Fly-by-night line producers and event agencies stall final settlement for 90–180 days, claiming the OTT platform or wedding host has not cleared their milestone, or retroactively disputing extra shift hours and Sunday double-batta.
                  </li>
                  <li>
                    <strong>Catastrophic Technical Damage &amp; Clandestine Sub-Renting:</strong> Gear returns with{" "}
                    <em>permanent laser-burned CMOS sensors</em> from concert beam shows, <em>monsoon rain water-ingress</em> inside indoor-rated LED cabinets, or worse—missing prime lenses quietly sub-rented to another unit.
                  </li>
                </ul>
                <p>
                  Under Indian bailment law (<strong>Indian Contract Act, 1872 Sections 148–161</strong>), a production house or event agency is a <em>bailee for hire</em>. Payment of hire charges is legally independent of the producer&apos;s upstream OTT payout, and any damage outside ordinary wear-and-tear triggers strict financial liability when backed by timestamped{" "}
                  <strong>Check-Out / Check-In QC Inspection Challans</strong>.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage Cine &amp; Event AV Recovery Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Time is critical in production rentals: a line producer&apos;s Special Purpose Vehicle (SPV) often dissolves within 60 days of shoot wrap. Follow this five-stage escalation rail from Check-In QC to court-enforced recovery:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  width={920}
                  height={230}
                  viewBox="0 0 920 230"
                  role="img"
                  aria-label="5-stage cine camera and event AV rental recovery decision tree"
                  className="w-full h-auto"
                >
                  <rect x="0" y="0" width="920" height="230" rx="16" fill="#0F172A" />

                  {/* Step 1 */}
                  <rect x="20" y="34" width="160" height="162" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="44" cy="58" r="12" fill="#DC2626" />
                  <text x="44" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">1</text>
                  <text x="64" y="62" fill="#F87171" fontSize="11" fontWeight="700">HOUR 0–24</text>
                  <text x="32" y="88" fill="#FFFFFF" fontSize="12" fontWeight="700">Check-In QC</text>
                  <text x="32" y="106" fill="#FFFFFF" fontSize="12" fontWeight="700">&amp; OEM Quote</text>
                  <text x="32" y="130" fill="#CBD5E1" fontSize="10">Log sensor burn,</text>
                  <text x="32" y="144" fill="#CBD5E1" fontSize="10">rain ingress, dead</text>
                  <text x="32" y="158" fill="#CBD5E1" fontSize="10">LED pixels + video</text>
                  <text x="32" y="176" fill="#34D399" fontSize="10" fontWeight="700">Contract Act s.151</text>

                  {/* Arrow 1->2 */}
                  <path d="M182 115 L198 115" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="198,110 206,115 198,120" fill="#94A3B8" />

                  {/* Step 2 */}
                  <rect x="206" y="34" width="160" height="162" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="230" cy="58" r="12" fill="#DC2626" />
                  <text x="230" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">2</text>
                  <text x="250" y="62" fill="#F87171" fontSize="11" fontWeight="700">DAY 1–3</text>
                  <text x="218" y="88" fill="#FFFFFF" fontSize="12" fontWeight="700">BSA s.63 Proof</text>
                  <text x="218" y="106" fill="#FFFFFF" fontSize="12" fontWeight="700">&amp; Call Sheets</text>
                  <text x="218" y="130" fill="#CBD5E1" fontSize="10">Deal Memo, Gate</text>
                  <text x="218" y="144" fill="#CBD5E1" fontSize="10">Challan, WhatsApp</text>
                  <text x="218" y="158" fill="#CBD5E1" fontSize="10">overtime &amp; PDCs</text>
                  <text x="218" y="176" fill="#34D399" fontSize="10" fontWeight="700">BSA 2023 s.63</text>

                  {/* Arrow 2->3 */}
                  <path d="M368 115 L384 115" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="384,110 392,115 384,120" fill="#94A3B8" />

                  {/* Step 3 */}
                  <rect x="392" y="34" width="160" height="162" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <circle cx="416" cy="58" r="12" fill="#DC2626" />
                  <text x="416" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">3</text>
                  <text x="436" y="62" fill="#F87171" fontSize="11" fontWeight="700">DAY 4–7</text>
                  <text x="404" y="88" fill="#FFFFFF" fontSize="12" fontWeight="700">Advocate Notice</text>
                  <text x="404" y="106" fill="#FFFFFF" fontSize="12" fontWeight="700">+ NI s.138 / 43B(h)</text>
                  <text x="404" y="130" fill="#CBD5E1" fontSize="10">RPAD + Email + WA</text>
                  <text x="404" y="144" fill="#CBD5E1" fontSize="10">Hire + OEM Repair +</text>
                  <text x="404" y="158" fill="#CBD5E1" fontSize="10">Repair Downtime</text>
                  <text x="404" y="176" fill="#FBBF24" fontSize="10" fontWeight="700">30d PDC Window</text>

                  {/* Arrow 3->4 */}
                  <path d="M554 115 L570 115" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="570,110 578,115 570,120" fill="#94A3B8" />

                  {/* Step 4 */}
                  <rect x="578" y="34" width="160" height="162" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="602" cy="58" r="12" fill="#DC2626" />
                  <text x="602" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">4</text>
                  <text x="622" y="62" fill="#F87171" fontSize="11" fontWeight="700">IF UNRETURNED</text>
                  <text x="590" y="88" fill="#FFFFFF" fontSize="12" fontWeight="700">BNS s.316 SHO</text>
                  <text x="590" y="106" fill="#FFFFFF" fontSize="12" fontWeight="700">&amp; Trade Alert</text>
                  <text x="590" y="130" fill="#CBD5E1" fontSize="10">Sub-rented lenses</text>
                  <text x="590" y="144" fill="#CBD5E1" fontSize="10">or retained bodies:</text>
                  <text x="590" y="158" fill="#CBD5E1" fontSize="10">SHO CC + Blacklist</text>
                  <text x="590" y="176" fill="#F87171" fontSize="10" fontWeight="700">Nemo Dat s.27</text>

                  {/* Arrow 4->5 */}
                  <path d="M740 115 L756 115" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="756,110 764,115 756,120" fill="#94A3B8" />

                  {/* Step 5 */}
                  <rect x="764" y="34" width="136" height="162" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <circle cx="786" cy="58" r="12" fill="#10B981" />
                  <text x="786" y="62" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="700">5</text>
                  <text x="804" y="62" fill="#34D399" fontSize="11" fontWeight="700">FILING</text>
                  <text x="774" y="88" fill="#FFFFFF" fontSize="12" fontWeight="700">MSEFC / O.37</text>
                  <text x="774" y="106" fill="#FFFFFF" fontSize="12" fontWeight="700">/ Sec 9 Seizure</text>
                  <text x="774" y="130" fill="#CBD5E1" fontSize="10">Summary Suit,</text>
                  <text x="774" y="144" fill="#CBD5E1" fontSize="10">s.138 Magistrate,</text>
                  <text x="774" y="158" fill="#CBD5E1" fontSize="10">3x RBI Award</text>
                  <text x="774" y="176" fill="#34D399" fontSize="10" fontWeight="700">100% Recovery</text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "1 · Hour 0–24",
                    title: "Check-In QC & OEM Repair Quote",
                    desc: "Record sensor laser-burn, water ingress, or missing accessories on Check-In QC Challan + obtain OEM estimate.",
                  },
                  {
                    step: "2 · Day 1–3",
                    title: "BSA s.63 Production Proof Packet",
                    desc: "Compile Deal Memo, signed Call Sheets, WhatsApp overtime approvals, and Bank Return Memos for bounced PDCs.",
                  },
                  {
                    step: "3 · Day 4–7",
                    title: "Combined Advocate Notice (NI s.138 + s.43B(h))",
                    desc: "Serve RPAD + Email + WhatsApp demand for unpaid hire, OEM damage replacement, and repair downtime.",
                  },
                  {
                    step: "4 · If Unreturned",
                    title: "BNS s.316 Police CC & Trade Association Alert",
                    desc: "Trigger SHO intimation for sub-rented or retained gear plus factual regional rental association credit alert.",
                  },
                  {
                    step: "5 · Escalation",
                    title: "MSEFC / Order XXXVII / NI s.138 Filing",
                    desc: "File MSEFC Samadhaan (3x RBI interest), Commercial Order XXXVII summary suit, or Section 9 asset seizure.",
                  },
                ].map((c) => (
                  <div key={c.step} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                      {c.step}
                    </p>
                    <p className="text-sm font-bold mb-1">{c.title}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory &amp; Bailee Matrix for Camera &amp; AV Rental Houses
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Every cine camera and live-event AV default spans three distinct legal tracks—<strong>unpaid hire bills</strong>, <strong>technical asset damage</strong>, and <strong>wrongful retention/sub-renting</strong>. Use this matrix to invoke the exact statute for each failure mode:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Default / Damage Trigger</th>
                      <th className="p-3.5 font-bold">Primary Statute</th>
                      <th className="p-3.5 font-bold">Creditor Remedy &amp; Quantum</th>
                      <th className="p-3.5 font-bold">Mandatory Deadline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Concert laser-burned CMOS sensor or rain-damaged P2 LED panels
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act ss.151, 152 &amp; 154 (Bailee Strict Liability)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        100% OEM sensor/module replacement + daily loss-of-hire during repair
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        Check-In QC within 24 hrs of pack-up
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Line producer sub-rented prime lenses or withheld camera bodies
                      </td>
                      <td className="p-3.5 text-slate-700">
                        BNS 2023 s.316 + Sale of Goods Act s.27 (<em>Nemo Dat</em>)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Criminal Breach of Trust FIR + Police Station CC + BNSS Superdari recovery
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        Immediate 48-Hr Recall Notice
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Post-dated security cheque bounced (&quot;Funds Insufficient&quot; / &quot;Stop Payment&quot;)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act 1881 ss.138 &amp; 143A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Up to 2x cheque fine + 20% interim compensation + criminal prosecution
                      </td>
                      <td className="p-3.5 font-semibold text-amber-700">
                        Notice within 30 days of Return Memo
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Unpaid shift invoices &amp; overtime call sheets (&gt; 45 days)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        MSMED Act ss.15–18 + Income Tax s.43B(h)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        3x RBI Bank Rate monthly compound interest + buyer tax disallowance
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        Interest runs from Day 46
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Admitted Deal Memo + GST invoices unpaid by solvent studio/agency
                      </td>
                      <td className="p-3.5 text-slate-700">
                        CPC Order XXXVII Summary Suit / Commercial Courts Act
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Summary decree without full trial unless debtor deposits security
                      </td>
                      <td className="p-3.5 font-semibold text-slate-700">
                        3-Year Limitation (Art. 14/26)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Cine &amp; Live-Event AV Default Scenarios (Interactive Playbook)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your operational failure mode below to inspect the exact producer/agency excuse, the binding statutory counter, and the required QC evidence packet:
              </p>

              <CineAvRentalScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Damage Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Ledger: &#8377;46.8 Lakh Concert &amp; Cine Package Claim
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a typical 10-day Mumbai/Hyderabad live-concert + OTT behind-the-scenes shoot where an event agency defaults on final payment and returns one laser-damaged camera body plus six rain-shorted P2.6 LED cabinets:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-700">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                      Illustrative Creditor Recovery Statement
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white">
                      Arri Alexa 35 + Master Primes + 400 sq.ft P2.6 LED Wall (180 Days Overdue)
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Udyam + Check-In QC Backed
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      1. Unpaid Base Hire &amp; Overtime Call-Sheet Balance (GST Inclusive)
                    </span>
                    <span className="font-bold text-white">&#8377;18,50,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      2. OEM Sensor Block Replacement (Concert Laser Burn — Contract Act s.154)
                    </span>
                    <span className="font-bold text-amber-300">&#8377;14,20,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      3. 6x P2.6 LED Cabinets + Receiving Cards (Monsoon Water Ingress)
                    </span>
                    <span className="font-bold text-amber-300">&#8377;6,40,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      4. Repair Downtime Loss-of-Hire (21 Days @ &#8377;25,000/day OEM Lead Time)
                    </span>
                    <span className="font-bold text-slate-200">&#8377;5,25,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      5. MSMED Act s.16 Compound Interest (3x RBI Bank Rate on &#8377;18.5L for ~135 Days post-45d)
                    </span>
                    <span className="font-bold text-emerald-400">&#8377;2,45,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-sm sm:text-base font-extrabold text-white">
                      Total Enforceable Recovery &amp; Damage Claim
                    </span>
                    <span className="text-lg sm:text-2xl font-black text-emerald-400">
                      &#8377;46,80,000
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                  Note: Figures above are illustrative commercial benchmarks. Actual MSMED interest depends on the prevailing RBI Bank Rate on your invoice date—verify exact compounding using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-300 underline hover:text-white"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6: Check-Out / Check-In QC & BSA s.63 Checklist */}
            <section
              id="heading-qc-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Check-Out / Check-In QC Challan &amp; BSA s.63 Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Line producers and event agencies defeat unprepared rental houses with one line in court: <em>&quot;The sensor pixel burn or LED cabinet dent was pre-existing before our shoot.&quot;</em> Eliminate that defence permanently with this six-point dispatch and return protocol admissible under <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023 Section 63</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Pre-Dispatch Sensor & Dead-Pixel Video",
                    detail:
                      "Record a 30-second continuous smartphone video showing the camera serial number, clean white-wall sensor test frame, and 100% RGB test pattern on LED cabinets before loading.",
                  },
                  {
                    title: "2. Serial-Numbered Check-Out / Check-In QC Challan",
                    detail:
                      "Never release gear on a generic '1 Camera Kit' slip. List body, PL-mount, lens serials, batteries, and flight-case counts, counter-signed by the Production Assistant / Event PM.",
                  },
                  {
                    title: "3. Explicit Dry Hire vs Wet Hire Clause",
                    detail:
                      "State clearly in the Deal Memo whether the lessee's crew operates the rig (Dry Hire = 100% lessee risk) and prohibit unshielded concert lasers or outdoor rain deployment of IP20 panels.",
                  },
                  {
                    title: "4. Daily Signed Call Sheets & Overtime WhatsApp Logs",
                    detail:
                      "Capture daily wrap-time signatures from the Line Producer or 1st AD. Export WhatsApp shift-extension approvals with timestamps for BSA s.63 electronic certification.",
                  },
                  {
                    title: "5. Post-Dated Security Cheque (PDC) & Board Resolution",
                    detail:
                      "Collect a signed PDC covering 100% of the quoted package plus a signed undertaking linking the cheque to the Deal Memo so 'security cheque' defences fail under NI Act s.138.",
                  },
                  {
                    title: "6. 24-Hour Check-In Defect Protest Email",
                    detail:
                      "Within 24 hours of gear return, email high-resolution photos of any laser burn, bent truss, or water ingress to the producer's official domain before signing off the Gate-In slip.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Association Blacklist + Legal Notice */}
            <section
              id="heading-association-blacklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Combining Cine Association Alerts with Legal Notices Safely
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Film and live-event rental ecosystems in Mumbai, Hyderabad, Chennai, and Delhi rely heavily on regional cine equipment associations and event-vendor WhatsApp credit groups. While peer credit warnings deter repeat defaulters from renting from your competitor the next weekend, <strong>informal WhatsApp shaming alone carries defamation risk</strong> if phrased emotionally—and does not stop the 30-day{" "}
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    NI Act s.138 cheque-bounce limitation clock
                  </Link>
                  .
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                  <p className="font-bold uppercase tracking-wider text-amber-800 mb-1">
                    Defamation-Safe Dual Deterrence Rule
                  </p>
                  <p>
                    First serve a formal Advocate Demand Notice via Speed Post RPAD, Email, and WhatsApp. Then circulate only a strictly factual, ledger-verified association intimation (Invoice Date, Overdue Amount, Bounced Cheque Memo Number, and Notice Reference) to bona fide association office-bearers. Never publish personal insults or unverified allegations on public social media.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Launch Your Cine &amp; Event AV Recovery Notice Now
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you are chasing a single &#8377;12 Lakh line-producer default or clearing 40+ aging event-agency ledgers across Mumbai, Hyderabad, Chennai, and Delhi, choose your execution track below:
              </p>

              <CineAvRentalCTA />
            </section>

            {/* Section 9: IND-20 & LegalRecovery Network */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  IND-20 Equipment Rental &amp; B2B Recovery Network
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <Link
                  href="/industries/equipment-rental-machinery-leasing-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Parent Industry Hub (IND-20)
                  </p>
                  <p className="font-bold text-slate-900">
                    Equipment Rental, Cranes, Scaffolding, DG &amp; IT Leasing Recovery &rarr;
                  </p>
                </Link>

                <Link
                  href="/builder-employer-blocking-gate-pass-demobilization-rented-crane-machinery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sibling Spoke · Gate-Pass Lockout
                  </p>
                  <p className="font-bold text-slate-900">
                    Builder Blocking Gate-Pass for Rented Crane / Rig Recovery &rarr;
                  </p>
                </Link>

                <Link
                  href="/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sibling Spoke · BNS s.316 Asset Recovery
                  </p>
                  <p className="font-bold text-slate-900">
                    Unreturned Rented Scaffolding &amp; Formwork Recovery (BNS s.316) &rarr;
                  </p>
                </Link>

                <Link
                  href="/law/bns-318-cheating-vs-civil-dispute"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Criminal vs Civil Boundary
                  </p>
                  <p className="font-bold text-slate-900">
                    BNS Section 318 Cheating vs Civil Breach in Commercial Defaults &rarr;
                  </p>
                </Link>

                <Link
                  href="/templates/msme-delayed-payment-demand-notice"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Notice Workspace (P1)
                  </p>
                  <p className="font-bold text-slate-900">
                    MSME Delayed Payment Demand Notice Template &rarr;
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Multi-Channel Dispatch Engine
                  </p>
                  <p className="font-bold text-slate-900">
                    Bulk Recovery Notice via Email, WhatsApp &amp; Speed Post RPAD &rarr;
                  </p>
                </Link>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-3 text-xs">
                <Link
                  href="/recovery/contractor-payment"
                  className="text-slate-600 hover:text-[#DC2626] underline font-medium"
                >
                  Contractor &amp; Vendor Payment Recovery Guide
                </Link>
                <span className="text-slate-300">|</span>
                <Link
                  href="/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice"
                  className="text-slate-600 hover:text-[#DC2626] underline font-medium"
                >
                  Section 43B(h) Tax Disallowance Notice Format
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: Cine &amp; Event AV Rental Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Bare Acts & Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Bare Acts &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
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
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
