import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import LesseeSaleTableOfContents from "./LesseeSaleTableOfContents";
import LesseeSaleScenarioTabs from "./LesseeSaleScenarioTabs";
import LesseeSaleCTA from "./LesseeSaleCTA";

export const revalidate = 86400;

const PAGE_PATH =
  "/lessee-pledged-or-sold-rented-machinery-criminal-recovery-court-receiver";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

// Verbatim PDF / JSON H1 (163 chars) — kept identical to ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "Two Ultimate Protections for Equipment Lessors: (1) Voiding Illegal Third-Party Sales (*Nemo Dat* s.27) & (2) Why IBC Moratorium Excludes Third-Party Owned Assets!";

// Tightened from 63ch PDF draft to 56ch for Screaming Frog 30-60ch compliance
const META_TITLE = "Lessee Sold Rented Machine or Entered NCLT? Recovery Law";

// Tightened from 187ch PDF draft to 154ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Lessee sold your crane or entered NCLT? Under Sale of Goods s.27, buyers get zero title; under IBC s.18 Explanation, the RP cannot keep your leased asset.";

const OG_IMAGE_ALT = formatAltText(
  "Equipment Lessor Recovery Law: Nemo Dat s.27 and IBC s.18 Asset Exclusion"
);

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "lessee sold or pledged rented machinery bns 316 court receiver",
    "third party buyer gets no title nemo dat rented machine section 27",
    "ex parte court receiver order 40 rule 1 gps tracking seizure",
    "section 497 503 bnss superdari release of stolen rented equipment",
    "operating lease asset outside ibc moratorium section 18 explanation",
    "recovering leased machinery from nclt cirp corporate debtor",
  ],
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
        alt: OG_IMAGE_ALT,
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

const STATUTORY_TIMELINES = [
  {
    window: "Day 0 – Day 3",
    milestone: "GPS Telematics Snapshot & BNS s.316 Police Intimation",
    statute: "BNS 2023 ss.314, 316 & 317 • BSA 2023 s.63",
    action:
      "Lock IoT/GPS logs with a Section 63 BSA certificate, issue formal Lease Termination & Asset Recall Notice, and lodge a police complaint naming both the lessee and any third-party scrap/financier possessor.",
  },
  {
    window: "Day 4 – Day 15",
    milestone: "Nemo Dat Title Notice & Ex-Parte Court Receiver Petition",
    statute: "Sale of Goods Act s.27 • CPC Order XL Rule 1 / Arb. Act s.9",
    action:
      "Serve the rogue buyer with original OEM invoices and Lease Deed proving zero title transfer; simultaneously move the Commercial Court or High Court for an ex-parte Court Receiver to seize and seal the machinery.",
  },
  {
    window: "Day 7 – Day 21",
    milestone: "Magistrate Superdari Release of Seized Machinery",
    statute: "BNSS 2023 ss.497 & 503 (erstwhile CrPC ss.451 & 457)",
    action:
      "Once police seize the crane, DG set, or shuttering from a scrap yard, apply for interim Superdari custody under Sunderbhai Ambalal Desai principles so the asset returns to productive deployment immediately.",
  },
  {
    window: "Within 7–14 Days of CIRP",
    milestone: "IBC Section 18 Explanation (a) Exclusion Demand to IRP/RP",
    statute: "IBC 2016 s.18 Expl.(a), s.36(4)(a)(iv) & CIRP Reg. 31",
    action:
      "Serve the Insolvency Resolution Professional with title proofs segregating operating-lease assets from the debtor's estate, and file Form B strictly for pre-CIRP unpaid rental arrears.",
  },
  {
    window: "Within 3 Years",
    milestone: "Statutory Limitation for Conversion, Detinue & Rent Arrears",
    statute: "Limitation Act 1963 Articles 55, 68, 69 & 91(b)",
    action:
      "Enforce civil recovery of converted/detained movable property and accrued lease rentals within 3 years from the date the lessor first learns of wrongful possession or default.",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Immediate Superdari Release of Seized Vehicles & Machinery",
    parties: "Sunderbhai Ambalal Desai v. State of Gujarat",
    citation: "(2002) 10 SCC 283, Supreme Court of India",
    holding:
      "The Supreme Court laid down mandatory guidelines under CrPC Section 451/457 (now BNSS Sections 497 and 503) directing Magistrates to pass prompt orders releasing seized vehicles and commercial machinery on Superdari to the rightful owner upon executing a bond and taking photographs/panchnama—preventing valuable assets from deteriorating in police compounds.",
    takeaway:
      "Once police intercept your sold crane, excavator, or DG set from a scrap dealer under BNS s.316/317, your counsel should immediately file a BNSS s.497/503 Superdari application citing Sunderbhai Ambalal Desai to bring the asset back to your yard within weeks.",
  },
  {
    title: "Supreme Court on NCLT/RP Jurisdiction Limits Over Third-Party Assets",
    parties: "Embassy Property Developments Pvt. Ltd. v. State of Karnataka",
    citation: "(2020) 13 SCC 308, Supreme Court of India",
    holding:
      "The Supreme Court held that the jurisdiction of the NCLT under Section 60(5) of the IBC and the authority of a Resolution Professional under Section 18 cannot extend to creating or usurping substantive property rights that never belonged to the Corporate Debtor.",
    takeaway:
      "An IRP/RP cannot use Section 14 Moratorium as a shield to confiscate third-party leased machinery or include it in a Resolution Plan's asset pool when ownership unequivocally vests in the equipment lessor.",
  },
  {
    title: "Supreme Court on Bailment Title & Pledge Validity Boundaries",
    parties: "Morvi Mercantile Bank Ltd. v. Union of India",
    citation: "AIR 1965 SC 1954, Supreme Court of India",
    holding:
      "Clarifying the legal incidents of bailment and pledge under the Indian Contract Act, the Supreme Court affirmed that a bailee or mercantile agent cannot confer a higher title or valid security interest over bailed goods than what the bailor expressly authorized.",
    takeaway:
      "When a defaulting contractor pledges your rented piling rig or medical C-Arm to a local financier, the financier holds zero enforceable security under Contract Act s.178A because a simple operating lessee has no voidable ownership title.",
  },
  {
    title: "Supreme Court on Interim Asset Preservation & Receiver Appointment",
    parties: "Firm Ashoka Traders v. Gurumukh Das Saluja",
    citation: "(2004) 3 SCC 155, Supreme Court of India",
    holding:
      "The Supreme Court affirmed that courts exercising interim jurisdiction under Section 9 of the Arbitration and Conciliation Act, 1996 possess wide equitable powers—mirroring CPC Order XL Rule 1—to appoint a Receiver and preserve disputed commercial assets from dissipation pending arbitral adjudication.",
    takeaway:
      "If your Equipment Lease Agreement contains an arbitration clause, a Section 9 petition before the Commercial Court enables rapid appointment of a Court Receiver without waiting for a full civil trial.",
  },
];

const DEFENSE_PREEMPTION = [
  {
    excuse: "\"I am a bona fide scrap/machinery buyer for full cash value without notice of your lease.\"",
    rebuttal:
      "Under Sale of Goods Act s.27 (Nemo dat quod non habet), good faith and cash payment do NOT cure absence of title unless the seller falls within narrow statutory exceptions (e.g., mercantile agent under s.27 proviso with owner's consent to sell). Heavy machinery bearing OEM serial plates and lacking an e-Way bill from the true owner puts any buyer on constructive notice.",
    statute: "Sale of Goods Act 1930 s.27 & BNS s.317",
  },
  {
    excuse: "\"The lessee is in NCLT CIRP; Section 14 Moratorium bars you from taking back your machine.\"",
    rebuttal:
      "IBC Section 18 Explanation (a) and Section 36(4)(a)(iv) expressly exclude third-party assets held under bailment or operating lease from both the RP's control and the Liquidation Estate. File an exclusion demand and move NCLT under Section 60(5) if the RP stalls.",
    statute: "IBC 2016 s.18 Expl.(a), s.36(4)(a)(iv) & s.60(5)",
  },
  {
    excuse: "\"This is purely a civil breach of rental contract—police cannot register an FIR.\"",
    rebuttal:
      "While mere non-payment of rent is civil, clandestine sale, dismantling for scrap, unauthorized pledging, or disabling GPS trackers to hide bailed equipment proves dishonest misappropriation/conversion—triggering BNS s.316 Criminal Breach of Trust.",
    statute: "BNS 2023 ss.314 & 316 • Contract Act s.148",
  },
  {
    excuse: "\"We have a mechanic's or sub-contractor's lien over the crane for unpaid site bills.\"",
    rebuttal:
      "A statutory particular lien under Contract Act s.170 applies only when a bailee renders skill/labor improving the specific goods at the owner's request. A sub-contractor hired by a defaulting lessee cannot assert a general lien against the true equipment owner.",
    statute: "Indian Contract Act 1872 ss.170 & 171",
  },
  {
    excuse: "\"Your Equipment Lease Agreement is inadequately stamped, so no Receiver can be appointed.\"",
    rebuttal:
      "Under the 7-Judge Constitution Bench ruling in In Re: Interplay Between Arbitration Agreements and Indian Stamp Act (2023), insufficient stamping is a curable fiscal defect and does not void an arbitration clause or bar Section 9 interim asset protection.",
    statute: "Arbitration Act s.9 • Indian Stamp Act Cure",
  },
];

const FAQS = [
  {
    q: "If my lessee sold my rented crane or DG set to a scrap dealer, can I recover the actual machine or only sue for money?",
    a: "You can recover the physical machine itself. Under Section 27 of the Sale of Goods Act, 1930 (Nemo dat quod non habet), a lessee who holds equipment merely as a bailee has no ownership title to transfer. The scrap dealer or third-party buyer acquires zero legal title—even if they paid cash—and you can compel physical return via BNS s.316/317 police seizure + BNSS s.497/503 Superdari or a CPC Order XL Rule 1 Court Receiver.",
  },
  {
    q: "Does IBC Section 14 Moratorium stop an equipment lessor from recovering leased machinery from a company in NCLT?",
    a: "While Section 14(1)(d) temporarily restricts unilateral self-help repossession of property in the debtor's possession, Section 18 Explanation (a) and Section 36(4)(a)(iv) of the IBC 2016 explicitly exclude third-party owned assets held under bailment or operating lease from the Corporate Debtor's estate. You must serve a formal Section 18 Explanation (a) exclusion notice on the IRP/RP and, if possession is withheld, move the NCLT under Section 60(5) for immediate handover and CIRP-period rent under Regulation 31.",
  },
  {
    q: "What is the difference between an Operating Lease and a Finance Lease under IBC Section 18?",
    a: "In an Operating Lease (pure plant hire / rental), ownership, depreciation, and residual risk remain with the lessor—making it a classic bailment under Contract Act s.148 that is completely excluded from the debtor's estate under IBC s.18 Explanation (a). In a Finance Lease where economic ownership is structured to transfer to the lessee, an RP may argue the asset sits on the debtor's balance sheet; hence your lease agreement and fixed-asset register must clearly document operating-lease ownership.",
  },
  {
    q: "How fast can I get an ex-parte Court Receiver under CPC Order XL Rule 1 or Arbitration Section 9?",
    a: "When you present urgent documentary proof that the lessee has disabled GPS trackers, shifted machinery across sites, or offered it to scrap buyers, Commercial Courts and High Courts routinely hear Section 9 / Order XL Rule 1 applications within 3 to 10 days and can appoint an ex-parte Advocate Commissioner or Court Receiver to seize and seal the asset before it is dismantled.",
  },
  {
    q: "What is Superdari under BNSS Sections 497 and 503, and how does it help equipment lessors?",
    a: "When police seize stolen or dishonestly sold machinery from a third party during a BNS s.316/317 investigation, the equipment would otherwise sit idle in a police station yard. Filing a Superdari application under BNSS Section 497 (pending trial) or Section 503 (upon police report) citing Sunderbhai Ambalal Desai (2002) 10 SCC 283 lets the Magistrate release the machinery directly to the lessor on an indemnity bond.",
  },
  {
    q: "Can a third-party buyer claim 'good faith purchase' under Section 27 or Section 30 of the Sale of Goods Act?",
    a: "Section 27's mercantile agent exception applies only if the true owner entrusted goods to a mercantile agent with authority to sell in the ordinary course of business—which an equipment lessee is not. Section 30 applies to a seller who remains in possession after sale or a buyer in possession after agreeing to buy. An operating lessee with zero option to purchase cannot pass good title under either provision.",
  },
  {
    q: "Should I file Form B in NCLT if I only want my rented machinery back?",
    a: "File Form B (Operational Creditor claim) strictly for your pre-CIRP unpaid monthly rental invoices and damages—while simultaneously writing a separate formal letter under IBC Section 18 Explanation (a) asserting absolute title over the physical machinery and demanding its exclusion from the Information Memorandum and Resolution Plan.",
  },
];

const PRIMARY_SOURCES = [
  {
    title:
      "The Sale of Goods Act, 1930 (Section 27 — Sale by person not the owner / Nemo Dat Quod Non Habet) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Insolvency and Bankruptcy Code, 2016 (Sections 14, 18 Explanation (a), 36(4)(a)(iv) & 60(5)) — IBBI / India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2154",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita, 2023 (Sections 314, 316 Criminal Breach of Trust & 317 Stolen Property) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "Bharatiya Nagarik Suraksha Sanhita, 2023 (Sections 497 & 503 Superdari Interim Custody & Disposal) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20099",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 148–161 Bailment & Section 178A Pledge Boundaries) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Code of Civil Procedure, 1908 (Order XL Rule 1 Appointment of Receivers) & Arbitration Act, 1996 (Section 9) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
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
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/blog_money_recovery.png`,
    },
  },
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  inLanguage: "en-IN",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
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
      name: "Equipment Rental & Leasing Recovery",
      item: `${SITE_URL}/industries/equipment-rental-machinery-leasing-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Nemo Dat s.27 & IBC s.18 Asset Recovery Law",
      item: CANONICAL_URL,
    },
  ],
};

export default function LesseeSoldOrPledgedMachineryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([ARTICLE_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-20 Statutory Deep-Dive</span>
            <span aria-hidden="true">&bull;</span>
            <span>Sale of Goods s.27 &bull; IBC s.18 &bull; BNS s.316</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 word Executive Statutory Summary with Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            A defaulting lessee who sells or pledges rented machinery passes{" "}
            <strong className="text-white">zero title</strong> under Sale of Goods Act s.27 (
            <em>Nemo dat</em>), triggering BNS s.316 FIRs and BNSS s.497 Superdari release. If the
            lessee enters NCLT CIRP, IBC s.18 Explanation (a) excludes your bailed asset from the
            debtor&apos;s estate. See our{" "}
            <Link
              href="/industries/equipment-rental-machinery-leasing-recovery"
              className="text-red-400 hover:text-red-300 underline underline-offset-2 font-bold"
            >
              Equipment Rental &amp; Leasing Recovery Hub
            </Link>
            .
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">0% Title</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Passed to scrap/3rd-party buyers (Sale of Goods s.27)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">IBC s.18(a)</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Excludes 3rd-party leased assets from CIRP &amp; Liquidation
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">7–21 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                BNSS s.497/503 Superdari &amp; Ex-Parte Court Receiver window
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Criminal Breach of Trust for illegal sale, pledge, or GPS cut
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
              {
                label: "Equipment Rental Recovery Hub",
                href: "/industries/equipment-rental-machinery-leasing-recovery",
              },
              {
                label: "Nemo Dat s.27 & IBC s.18 Asset Recovery",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <LesseeSaleTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Equipment Lessors Face Asset Hijack—And Win on Ownership
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  For heavy crane operators, piling rig lessors, DG set rental companies, and
                  corporate IT/medical asset leasing NBFCs, a routine payment default often escalates
                  into an existential asset loss. Instead of returning the equipment on lease
                  expiry, a distressed contractor or corporate lessee either{" "}
                  <strong>sells or pledges the machinery</strong> to a third-party scrap dealer or
                  local financier—or files for insolvency before the National Company Law Tribunal
                  (NCLT), leaving the Resolution Professional (RP) to claim that Section 14
                  Moratorium freezes your ₹2 Crore asset inside the debtor&apos;s yard.
                </p>
                <p>
                  Both scenarios paralyze lessors who treat the dispute as an ordinary{" "}
                  <Link
                    href="/recovery/contractor-payment"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    contractor payment recovery
                  </Link>{" "}
                  matter. Unlike unsecured service vendors, an operating lessor retains{" "}
                  <strong>absolute proprietary title</strong> as a bailor under Sections 148–161 of
                  the Indian Contract Act, 1872. Indian statutory law gives you two decisive weapons
                  that override both rogue third-party buyers and corporate insolvency freezes: (1)
                  voiding unauthorized transfers under <strong>Section 27 of the Sale of Goods
                  Act, 1930</strong> paired with{" "}
                  <Link
                    href="/law/bns-318-cheating-vs-civil-dispute"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    criminal prosecution under BNS
                  </Link>
                  , and (2) compelling asset exclusion under{" "}
                  <strong>Section 18 Explanation (a) of the IBC, 2016</strong>.
                </p>
              </div>
            </section>

            {/* Section 2: Nemo Dat s.27 */}
            <section
              id="heading-nemo-dat"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Voiding Third-Party Sales: Sale of Goods Act Section 27 (Nemo Dat)
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Section 27 of the Sale of Goods Act, 1930 codifies the bedrock common-law maxim{" "}
                  <em>Nemo dat quod non habet</em>: <strong>no one can give what they do not
                  have</strong>. Where goods are sold by a person who is not the owner thereof, and
                  who does not sell them under the authority or with the consent of the owner, the
                  buyer acquires <strong>no better title to the goods than the seller had</strong>.
                </p>
                <p>
                  Because an equipment lessee or plant-hire contractor is strictly a{" "}
                  <strong>bailee</strong> under Section 148 of the Indian Contract Act, 1872, their
                  title is zero. Even if a scrap yard, competing infrastructure contractor, or
                  used-machinery broker pays full market value in cash or RTGS without knowing of
                  your lease, that buyer&apos;s title is <strong>void ab initio</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1.5">
                      Why Narrow s.27 / s.30 Exceptions Fail Buyers
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                      The statutory proviso to Section 27 protects buyers only when the seller is a{" "}
                      <em>mercantile agent</em> entrusted with goods for sale in the ordinary course
                      of business. Similarly, Section 30 applies only to a seller continuing in
                      possession after sale or a buyer in possession under an agreement to sell. A
                      construction contractor hiring a crane or scaffolding has no sale mandate.
                    </p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1.5">
                      Criminal Leverage: BNS ss.316 &amp; 317 + BNSS Superdari
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      Disposing of bailed machinery is <strong>Criminal Breach of Trust</strong>{" "}
                      under BNS s.316 (up to 5 years imprisonment), and the rogue buyer who retains
                      it after receiving your title notice faces prosecution under{" "}
                      <strong>BNS s.317</strong> (dishonestly receiving stolen/misappropriated
                      property). Once seized, BNSS ss.497 &amp; 503 allow rapid Superdari return.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: IBC s.18 Explanation (a) */}
            <section
              id="heading-ibc-exclusion"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why IBC Moratorium Excludes Third-Party Leased Assets (Section 18)
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  When a corporate lessee is admitted into Corporate Insolvency Resolution Process
                  (CIRP) before the NCLT, Interim Resolution Professionals (IRPs) routinely send a
                  blanket email citing <strong>Section 14(1)(d) of the Insolvency and Bankruptcy
                  Code, 2016</strong> to block lessors from demobilizing cranes, chiller plants, or
                  IT workstation fleets. Even experienced corporate counsel sometimes concede
                  possession prematurely.
                </p>
                <p>
                  In reality, Section 14(1)(d) only restricts unilateral recovery of property
                  occupied by or in the possession of the Corporate Debtor—it{" "}
                  <strong>never converts bailed equipment into debtor property</strong>. Under{" "}
                  <strong>Section 18(1)(f) read with Explanation (a) of the IBC, 2016</strong>, the
                  term &ldquo;assets&rdquo; that an IRP/RP is empowered to take control and custody
                  of{" "}
                  <strong>
                    shall NOT include assets owned by a third party in possession of the corporate
                    debtor held under trust or under contractual arrangements including bailment
                  </strong>
                  . Furthermore, if CIRP fails and enters liquidation,{" "}
                  <strong>Section 36(4)(a)(iv)</strong> identically excludes third-party contractual
                  and bailment assets from the Liquidation Estate.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                    Critical Practitioner Rule: Operating Lease vs. Finance Lease
                  </p>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                    To invoke Section 18 Explanation (a) cleanly before the RP and NCLT under
                    Section 60(5), ensure your dossier proves an <strong>Operating Lease /
                    Bailment</strong>: (a) the asset appears on <em>your</em> audited Fixed Asset
                    Register (not the debtor&apos;s), (b) you claim depreciation under the Income Tax
                    Act, (c) OEM tax invoices and GST e-Way bills are in your name, and (d) there is
                    no automatic title-transfer clause at lease end.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Statutory Timelines Table */}
            <section
              id="heading-statutory-timelines"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Timelines, Seizure Windows &amp; Limitation Stops
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Window</th>
                      <th className="p-3.5 font-bold">Statutory Milestone</th>
                      <th className="p-3.5 font-bold">Governing Provision</th>
                      <th className="p-3.5 font-bold">Creditor Execution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_TIMELINES.map((row) => (
                      <tr key={row.milestone} className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-[#DC2626] whitespace-nowrap">
                          {row.window}
                        </td>
                        <td className="p-3.5 font-bold text-slate-900">{row.milestone}</td>
                        <td className="p-3.5 font-medium text-slate-600">{row.statute}</td>
                        <td className="p-3.5 text-slate-700 leading-relaxed">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Dual-Track SVG Escalation Workflow */}
            <section
              id="heading-escalation-svg"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Dual-Track Asset Recovery Flowchart: Rogue Sale vs. NCLT CIRP
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5">
                Select the statutory track matching where your leased crane, DG set, scaffolding, or
                IT/medical fleet is trapped:
              </p>

              {/* Desktop SVG */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  viewBox="0 0 800 240"
                  width="800"
                  height="240"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Dual-track recovery workflow for third-party machinery sales and IBC NCLT exclusions"
                >
                  {/* Root Node */}
                  <rect x="20" y="85" width="160" height="70" rx="10" fill="#DC2626" />
                  <text x="100" y="114" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Asset Hijack Detected
                  </text>
                  <text x="100" y="132" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                    GPS Cut / Sale / CIRP
                  </text>

                  {/* Connector Lines */}
                  <path d="M180 105 L240 55" stroke="#94A3B8" strokeWidth="2" fill="none" />
                  <path d="M180 135 L240 185" stroke="#94A3B8" strokeWidth="2" fill="none" />

                  {/* Track A: Rogue Sale / Pledge */}
                  <rect x="240" y="20" width="165" height="65" rx="10" fill="#1E293B" stroke="#475569" />
                  <text x="322" y="46" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    Track A: Sold / Pledged
                  </text>
                  <text x="322" y="64" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    Nemo Dat s.27 + BNS s.316
                  </text>

                  <path d="M405 52 L445 52" stroke="#94A3B8" strokeWidth="2" fill="none" />

                  <rect x="445" y="20" width="160" height="65" rx="10" fill="#1E293B" stroke="#475569" />
                  <text x="525" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                    Police Seizure / Receiver
                  </text>
                  <text x="525" y="64" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    CPC Order XL R.1 / Arb s.9
                  </text>

                  <path d="M605 52 L640 52" stroke="#10B981" strokeWidth="2" fill="none" />

                  <rect x="640" y="20" width="140" height="65" rx="10" fill="#065F46" stroke="#10B981" />
                  <text x="710" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                    Superdari Release
                  </text>
                  <text x="710" y="64" textAnchor="middle" fill="#D1FAE5" fontSize="10">
                    BNSS ss.497 &amp; 503
                  </text>

                  {/* Track B: NCLT CIRP */}
                  <rect x="240" y="155" width="165" height="65" rx="10" fill="#1E293B" stroke="#475569" />
                  <text x="322" y="181" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">
                    Track B: NCLT CIRP
                  </text>
                  <text x="322" y="199" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    IBC s.18 Expl.(a) Notice
                  </text>

                  <path d="M405 187 L445 187" stroke="#94A3B8" strokeWidth="2" fill="none" />

                  <rect x="445" y="155" width="160" height="65" rx="10" fill="#1E293B" stroke="#475569" />
                  <text x="525" y="181" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                    Form B + s.60(5) IA
                  </text>
                  <text x="525" y="199" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Segregate Title &amp; Rent
                  </text>

                  <path d="M605 187 L640 187" stroke="#10B981" strokeWidth="2" fill="none" />

                  <rect x="640" y="155" width="140" height="65" rx="10" fill="#065F46" stroke="#10B981" />
                  <text x="710" y="181" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                    NCLT Return Order
                  </text>
                  <text x="710" y="199" textAnchor="middle" fill="#D1FAE5" fontSize="10">
                    + CIRP Reg. 31 Rent
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <p className="text-xs font-bold text-red-400 uppercase mb-1">
                    Track A: Sold / Pledged to Third Party
                  </p>
                  <p className="text-xs text-slate-200">
                    1. <em>Nemo Dat</em> s.27 + BNS s.316 FIR &rarr; 2. Order XL Rule 1 Court Receiver
                    &rarr; 3. BNSS s.497/503 Superdari Release.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <p className="text-xs font-bold text-amber-400 uppercase mb-1">
                    Track B: Lessee in NCLT CIRP
                  </p>
                  <p className="text-xs text-slate-200">
                    1. IBC s.18 Expl.(a) Demand to RP &rarr; 2. Form B (Arrears) + NCLT s.60(5) IA
                    &rarr; 3. Asset Handover + CIRP Reg. 31 Rent.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Landmark Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Landmark Supreme Court Precedents Governing Lessor Title
                </h2>
              </div>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative pl-5 border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm sm:text-base font-black text-slate-900">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800">
                        {item.citation}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#DC2626] mb-2">{item.parties}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2.5">
                      {item.holding}
                    </p>
                    <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs text-slate-800">
                      <strong className="text-slate-900">Creditor Takeaway:</strong> {item.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Interactive 4-Scenario Explorer */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Crisis Playbooks: Rogue Buyers, Financiers &amp; NCLT RPs
                </h2>
              </div>

              <LesseeSaleScenarioTabs />
            </section>

            {/* Section 8: Defense Pre-Emption Table */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Pre-Empting Scrap Buyer, Financier &amp; RP Defenses
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Opponent&apos;s Standard Excuse</th>
                      <th className="p-3.5 font-bold">Creditor Statutory Rebuttal</th>
                      <th className="p-3.5 font-bold">Anchor Provision</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {DEFENSE_PREEMPTION.map((row) => (
                      <tr key={row.excuse} className="hover:bg-slate-50">
                        <td className="p-3.5 font-semibold text-slate-900">{row.excuse}</td>
                        <td className="p-3.5 text-slate-700 leading-relaxed">{row.rebuttal}</td>
                        <td className="p-3.5 font-bold text-[#DC2626] whitespace-nowrap">
                          {row.statute}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Worked Asset & Rental Arrears Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Ledger: ₹1.45 Cr Crane Sold to Scrap Broker
                </h2>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong>Illustrative Commercial Fact Pattern:</strong> An infrastructure lessor
                  hires out an 80-Ton Crawler Crane (WDV ₹1.45 Cr) at ₹6.50 Lakh/month + GST. After
                  defaulting for 4 months, the contractor sells the crane to a third-party broker for
                  ₹58 Lakh cash. Here is how the statutory claim splits:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold mb-1">
                      1. Physical Asset Restitution
                    </p>
                    <p className="text-lg font-black text-white">₹1.45 Cr Asset</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Recovered via BNS s.316/317 seizure + BNSS s.497 Superdari; broker&apos;s ₹58L
                      cash claim lies solely against the rogue lessee.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-[11px] uppercase tracking-wider text-amber-400 font-bold mb-1">
                      2. Unpaid Rent + Holding Mesne Profits
                    </p>
                    <p className="text-lg font-black text-white">₹26.00L + 18% p.a.</p>
                    <p className="text-xs text-slate-300 mt-1">
                      4 months accrued hire (₹26L + GST) plus ongoing daily detention charges until
                      Superdari handover.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-[11px] uppercase tracking-wider text-red-400 font-bold mb-1">
                      3. Restoration &amp; GPS Tamper Damages
                    </p>
                    <p className="text-lg font-black text-white">Actual Repair Cost</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Claimed under Contract Act ss.151, 161 &amp; 73 for re-painting, missing
                      boom sections, and IoT re-installation.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-400">
                  Need to compute compound interest or retention/escalation add-ons on a linked EPC
                  project? Try our{" "}
                  <Link
                    href="/tools/construction-retention-dlp-escalation-claim-calculator"
                    className="text-red-400 hover:underline font-semibold"
                  >
                    Construction Retention &amp; Claim Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 10: BSA 2023 s.63 Evidence & Related Guides */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 Section 63 Title &amp; Seizure Evidence Checklist
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-black">&#10003;</span>
                  <span>
                    <strong>OEM Purchase Invoices &amp; Chassis/Engine Plates:</strong> Proves
                    original acquisition by the lessor—essential for both <em>Nemo Dat</em> s.27
                    and IBC s.18 Explanation (a).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-black">&#10003;</span>
                  <span>
                    <strong>Audited Fixed Asset Register &amp; Depreciation Schedule:</strong>{" "}
                    Conclusive proof before the NCLT/RP that the machine is an Operating Lease asset
                    owned by you, not inventory or a finance-leased asset of the debtor.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-black">&#10003;</span>
                  <span>
                    <strong>GST e-Way Bills &amp; Signed Delivery Challans:</strong> Establishes
                    bailment delivery to the lessee&apos;s project site without transfer of title.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-black">&#10003;</span>
                  <span>
                    <strong>BSA 2023 s.63 Certified GPS &amp; WhatsApp Logs:</strong> Admissible
                    electronic proof of last known site coordinates, tracker disconnection, and
                    demands refused by the lessee or scrap buyer.
                  </span>
                </li>
              </ul>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Related Equipment Leasing &amp; Commercial Recovery Resources
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    Unreturned Scaffolding &amp; Shuttering (BNS s.316)
                  </Link>
                  <Link
                    href="/builder-employer-blocking-gate-pass-demobilization-rented-crane-machinery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    Builder Blocking Crane Gate-Pass Recovery
                  </Link>
                  <Link
                    href="/medical-icu-equipment-c-arm-ventilator-hospital-rental-default-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    Medical ICU &amp; C-Arm Equipment Rental Recovery
                  </Link>
                  <Link
                    href="/templates/it-software-saas-msa-payment-default-legal-notice"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    MSA Payment Default Legal Notice Template
                  </Link>
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    Multi-Channel Email + WhatsApp + Speed Post Dispatch
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 11: Dual-Track CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Initiate Asset Recall, Police Intimation or RP Exclusion Now
                </h2>
              </div>

              <LesseeSaleCTA />
            </section>

            {/* Section 12: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Practitioner FAQs: Nemo Dat s.27, Superdari &amp; IBC s.18
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 13: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  13
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Official Citations
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-2 font-medium"
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

      <RelatedRecoveryGuides currentPath={PAGE_PATH} />
    </div>
  );
}
