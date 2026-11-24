import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CylinderLienTableOfContents from "./CylinderLienTableOfContents";
import CylinderLienScenarioTabs from "./CylinderLienScenarioTabs";
import CylinderLienCTA from "./CylinderLienCTA";

export const revalidate = 86400;

const PAGE_URL = "/printing-cylinders-dies-plates-ownership-and-lien-law-packaging";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const META_TITLE = "Can a Packaging Converter Hold Gravure Cylinders for Dues?";
const META_DESCRIPTION =
  "FMCG brand demanding 8-colour copper gravure cylinders while owing ₹18 Lakh for laminates? Know your Contract Act s.170/s.171 lien & title rights.";
const EXACT_H1 =
  "Rotogravure Cylinders, Flexo Plates & Cutting Dies: Ownership vs General-Lien Rights When a Brand Demands Handover Without Clearing Pouch Invoices";

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
          "Rotogravure cylinder ownership and general lien law for packaging converters"
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

const PRIMARY_SOURCES = [
  {
    title:
      "The Indian Contract Act, 1872 (Sections 73, 148, 151, 170 & 171 — Bailment, Particular Lien & Contractual General Lien)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 19, 44, 46, 47 & 55 — Passing of Property, Buyer Storage Liability & Unpaid Seller Lien)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Copyright Act, 1957 (Section 17 — Ownership of Commissioned Packaging Artwork vs Physical Printing Base)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title:
      "The Trade Marks Act, 1999 (Section 29 — Infringement Boundary Requiring Brand Artwork Erasure / De-Chroming Before Scrap)",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–19 — 45-Day Cap, 3x RBI Interest & 75% Pre-Deposit)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income-tax Act, 1961 (Section 43B(h) — Statutory Disallowance of Unpaid Micro & Small Packaging Converter Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/2435",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Proof Certificate for WhatsApp Artwork Approvals, POs & ERP Stock Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Commercial Courts Act, 2015 (Sections 2(1)(c) & 12A — Mandatory Pre-Institution Mediation & Commercial Suit Threshold)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Strict Statutory Boundary of Section 171 General Lien & Role of Express Contract",
    parties: "Board of Trustees of the Port of Bombay & Ors. v. Sriyanesh Knitters",
    citation: "(1999) 7 SCC 359, Supreme Court of India",
    statute: "Indian Contract Act, 1872 — Section 171",
    facts:
      "A statutory port authority sought to exercise a general lien over unrelated consignments of an importer for past unpaid demurrage/wharfage dues, arguing an automatic right of general retention beyond specific cargo charges.",
    holding:
      "The Supreme Court clarified that statutory general lien under Section 171 applies exclusively to the five enumerated classes (bankers, factors, wharfingers, attorneys of a High Court, and policy-brokers) unless an express contract grants general-lien powers to another commercial bailee. Non-enumerated industrial converters cannot invoke statutory s.171 automatically—they must ground general retention in an express contractual clause.",
    creditorTakeaway:
      "Every flexible packaging quotation, cylinder proforma invoice, and PO acknowledgment must incorporate an explicit Contractual General-Lien & Title-Retention Clause tying handover of cylinders, plates, and dies to full settlement of the running supply ledger.",
  },
  {
    title: "Enforceability of Contractual & Commercial General Lien Against Defaulting Constituents",
    parties: "Syndicate Bank v. Vijay Kumar & Ors.",
    citation: "(1992) 2 SCC 330, Supreme Court of India",
    statute: "Indian Contract Act, 1872 — Section 171 & Commercial Contracts",
    facts:
      "A party sought release of valuable securities deposited for a specific transaction even though independent credit obligations remained unpaid. The holder asserted a general lien covering the entire outstanding commercial balance.",
    holding:
      "The Supreme Court upheld the legal validity of a general lien over securities and commercial assets held in the ordinary course of business where no contract to the contrary restricts retention, confirming that a creditor cannot be compelled to surrender valuable leverage while admitted dues remain unpaid.",
    creditorTakeaway:
      "Once a converter establishes either retained proprietary title (under Sale of Goods Act s.19) or an express contractual general lien covering all running invoices, courts respect the creditor's right to condition release on clearing the full overdue ledger.",
  },
  {
    title: "Bar Against Criminalizing Commercial Payment & Custody Disputes via Police FIRs",
    parties: "Indian Oil Corporation v. NEPC India Ltd. & Ors.",
    citation: "(2006) 6 SCC 736, Supreme Court of India",
    statute: "BNS s.316 (formerly IPC s.406) & Commercial Civil Disputes",
    facts:
      "A corporate claimant attempted to deploy criminal breach of trust and cheating complaints to pressurize a commercial counterparty into surrendering disputed assets arising out of an ongoing supply and credit relationship.",
    holding:
      "The Supreme Court strongly deprecated the growing tendency in commercial India to convert purely civil disputes over unpaid dues, hypothecated assets, or contractual retention into criminal prosecutions under breach-of-trust provisions. Mere refusal to hand over property under a bona fide claim of contractual right or unpaid balance lacks criminal mens rea.",
    creditorTakeaway:
      "When an FMCG brand threatens a BNS s.316 (old IPC s.406) police complaint to bully your factory into releasing copper cylinders without paying pouch bills, immediately serve an advocate reply citing IOC v. NEPC India alongside your unpaid GST ledger and contractual lien terms.",
  },
  {
    title: "Mandatory Pre-Institution Mediation Before Commercial Injunction Suits Unless True Urgency Exists",
    parties: "Patil Automation Pvt. Ltd. & Ors. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    statute: "Commercial Courts Act, 2015 — Section 12A",
    facts:
      "A commercial litigant bypassed statutory pre-institution mediation under Section 12A of the Commercial Courts Act, 2015 and rushed directly into a Commercial Court suit seeking coercive relief against a B2B counterparty.",
    holding:
      "The Supreme Court held that Section 12A pre-institution mediation is mandatory for all commercial suits (specified value ₹3 Lakh and above) not genuinely contemplating urgent interim relief, and a plaint filed in violation is liable to be rejected at the threshold under Order VII Rule 11 CPC.",
    creditorTakeaway:
      "When a brand threatens an overnight Commercial Court mandatory injunction to seize cylinders without clearing your ₹18 Lakh pouch dues, putting a written conditional release offer on record destroys their claim of 'urgent irreparable injury' and forces them into Section 12A mediation or security deposit.",
  },
  {
    title: "Crystallization of Security Cheques Held Against Packaging Credit & Tooling Ledgers",
    parties: "Sripati Singh (Since Deceased) Through Son Gaurav Singh v. State of Jharkhand & Anr.",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    statute: "Negotiable Instruments Act, 1881 — Sections 138 & 141",
    facts:
      "A debtor argued that a cheque handed over at the inception of a commercial relationship as 'security' could not attract criminal prosecution under Section 138 of the NI Act upon subsequent default.",
    holding:
      "The Supreme Court ruled that a cheque issued as security is not a worthless piece of paper; once the underlying commercial debt becomes due and payable on the date of presentation and remains unpaid, the security cheque matures into a legally enforceable debt instrument under Section 138.",
    creditorTakeaway:
      "If your flexible-packaging onboarding kit collected an undated security PDC from the brand alongside the cylinder PO, presenting it after written demand notice gives you parallel criminal leverage under NI Act s.138/141 alongside your cylinder lien.",
  },
];

const FAQS = [
  {
    question:
      "Can a flexible packaging converter legally refuse to hand over copper rotogravure cylinders if the brand has not paid pouch or laminate invoices?",
    answer:
      "Yes, provided you structure your legal stand on either of two pillars rather than relying blindly on Section 170 of the Contract Act. First, if the buyer only paid a subsidised 'Cylinder Development / Origination Contribution' rather than full asset purchase price under HSN 8442, legal title to the steel-base copper shell never transferred under Section 19 of the Sale of Goods Act, 1930. Second, if your quotation, PO acknowledgment, or tax invoice contains an Express Contractual General-Lien Clause, Indian law (as clarified in Board of Trustees of the Port of Bombay v. Sriyanesh Knitters and Syndicate Bank v. Vijay Kumar) allows you to lawfully retain the cylinders until the entire running pouch and laminate ledger is cleared.",
  },
  {
    question:
      "Who owns printing cylinders when the buyer paid a partial 'Cylinder Development Charge' or 'Maintenance Fee'?",
    answer:
      "Under Section 19 of the Sale of Goods Act, 1930, ownership (property in goods) passes only when the contracting parties intend it to pass. Where a converter bills ₹8,000–₹12,000 per cylinder as a 'Cylinder Development Contribution', 'Engraving Origination Charge', or 'Die-Maintenance Fee' while subsidising the remaining cost of the MS steel base, dynamic balancing, copper electroplating, and chrome layer against future laminate tonnage, full title remains with the converter. The buyer acquires only an exclusive printing usage right for its artwork—not an absolute right to demand physical export of the cylinders to a competitor without paying the unamortised balance and clearing all open invoices.",
  },
  {
    question:
      "Does the FMCG brand's copyright or trademark in the pouch artwork give it ownership of the physical copper cylinder?",
    answer:
      "No. Indian intellectual property law draws a strict wall between intangible IP and tangible printing tooling. Under Section 17 of the Copyright Act, 1957 and Section 29 of the Trade Marks Act, 1999, the brand owns the graphic artwork, logo, and FSSAI/brand get-up—meaning the converter can never print or sell branded pouches to any third party. However, IP ownership does NOT extinguish the converter's physical property right in the steel shaft/copper shell or its contractual general lien. Even if the converter exercises a final disposal/re-use right after due notice, the converter simply de-chromes and chemically strips the engraved artwork first so zero trademark infringement occurs.",
  },
  {
    question:
      "What if our old quotation or invoice did NOT contain an explicit general-lien clause under Section 171?",
    answer:
      "Do not panic—and do not blindly surrender the cylinders before getting fact verification. Even without a written s.171 contractual clause, you still have four statutory levers: (1) check whether cylinder invoices themselves remain partly unpaid or billed as 'development contribution' (giving you title retention under Sale of Goods s.19 or unpaid seller's lien under s.47); (2) check whether Section 170 particular lien applies to unpaid cylinder engraving/re-chroming/proofing charges; (3) issue an immediate MSMED Act s.15–18 + Income Tax Section 43B(h) demand notice before offering conditional handover against a bank guarantee or RTGS settlement; and (4) claim Order XXXVIII Rule 5 attachment before judgment in a Commercial Court recovery suit.",
  },
  {
    question:
      "Can a defaulting brand file a Police FIR under BNS Section 316 (old IPC Section 406) against a packaging converter for withholding cylinders or dies?",
    answer:
      "Brands frequently threaten criminal breach of trust (BNS s.316) to scare converters into free release, but such complaints collapse when countered properly. Under the Supreme Court ruling in Indian Oil Corporation v. NEPC India Ltd. (2006) 6 SCC 736, retaining commercial tooling under a bona fide contractual lien or unresolved billing dispute lacks criminal 'dishonest misappropriation'. Serving a documented Advocate Reply enclosing your unpaid GST invoices, E-Way bills, PO terms, and a written offer to release cylinders immediately upon ledger payment neutralizes criminal intimidation.",
  },
  {
    question:
      "How can a converter legally charge rack storage rent and de-chrome/scrap idle cylinders left in the factory for over 2 years?",
    answer:
      "Never scrap or re-engrave idle cylinders silently. Follow the statutory 3-step protocol: (1) pull your ERP cylinder aging log showing 18–24+ months of zero repeat orders; (2) serve a 30-Day Storage-Rent & Final De-Chroming Notice via Speed Post RPAD, Registered Email, and WhatsApp invoking Section 44 of the Sale of Goods Act, 1930 (accruing monthly rack custody rent per cylinder); and (3) if the buyer neither settles overdue bills/storage rent nor lifts the cylinders within 30 days, video-document chemical de-chroming/grinding of the brand artwork (certified under BSA 2023 s.63) to guarantee total IP erasure, issue a final disposal credit note for scrap copper value, and close the liability.",
  },
  {
    question:
      "Does the same lien law apply to digital photopolymer flexo plates, rotary embossing blocks, and corrugated/mono-carton cutting dies?",
    answer:
      "Yes, with an even stronger practical advantage for converters. Laser-cut birchwood punching dies, stripping boards, rotary steel dies, and mounted photopolymer flexo plates are custom-engineered to your specific press cylinder repeat, bed chase, and mounting sleeve—and typically carry a limited impression life (e.g., 100,000–300,000 impressions). Treating them in your PO/quotation terms as 'Non-Transferable Job-Specific Tooling / Maintenance Charges' plus an Express General-Lien Clause gives mono-carton, label, and corrugated plants airtight leverage against defaulting buyers.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T11:15:00+05:30",
  dateModified: "2026-11-19T11:15:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    name: "Rotogravure Cylinder, Flexo Plate & Cutting Die Ownership and General Lien Law in India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Packaging, Printing & Paper Mill Recovery",
      item: `${SITE_URL}/industries/packaging-printing-paper-mill-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Printing Cylinders, Dies & Plates Lien Law",
      item: CANONICAL_URL,
    },
  ],
};

export default function PrintingCylindersLienLawPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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

      {/* DARK GRADIENT HERO */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-22 Annotated Statute &amp; Precedent Deep-Dive</span>
            <span>&bull;</span>
            <span>Contract Act ss.170&ndash;171 &amp; Sale of Goods Act s.19/s.44</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Statutory Answer + Inline Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &middot; Packaging Converter Law
            </span>
            A flexible packaging converter, cylinder engraver, or die maker can lawfully refuse immediate handover of rotogravure cylinders, flexo plates, or cutting dies when either (1) the buyer only paid a partial <strong>&ldquo;Cylinder Development Contribution&rdquo;</strong> (retaining title under Sale of Goods Act s.19), or (2) the quotation/PO carries an <strong>Express Contractual General-Lien Clause</strong> alongside Contract Act s.171. Explore the full sector framework in our{" "}
            <Link
              href="/industries/packaging-printing-paper-mill-recovery"
              className="text-red-300 underline decoration-red-400/70 hover:text-white font-semibold"
            >
              Packaging, Printing &amp; Paper Mill Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.170 vs s.171</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Particular vs Contractual General Lien
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">HSN 8442 / s.19</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Development Fee &ne; Asset Title Transfer
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">45d + 3x RBI</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 &amp; Income Tax s.43B(h) Lock
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">30-Day Notice</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                s.44 Rack Rent &amp; Lawful De-Chroming
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-slate-400">
            <span>
              Authored &amp; Vetted by <strong className="text-slate-200">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
            </span>
            <span>&bull;</span>
            <span>Updated: November 2026</span>
            <span>&bull;</span>
            <span>Jurisdiction: Pan-India Commercial Courts &amp; MSEFC</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SHELL */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Packaging & Printing Recovery",
                href: "/industries/packaging-printing-paper-mill-recovery",
              },
              {
                label: "Printing Cylinders, Dies & Plates Lien Law",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CylinderLienTableOfContents />

          {/* Right Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: OWNERSHIP DOCTRINE */}
            <section
              id="heading-ownership-doctrine"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Development Contribution vs Title Transfer: Who Owns Cylinders?
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Every flexible-packaging factory, rotogravure cylinder engraver, and mono-carton printing house in India sits on thousands of high-value MS-steel shafts electroplated with precision copper and chrome. The flashpoint is universal: an FMCG, spice, dairy, or D2C brand accumulates ₹10 Lakh to ₹45 Lakh in overdue laminated-pouch or folding-carton invoices, silently qualifies a cheaper converter, and abruptly fires off an email demanding immediate handover of its 8-colour rotogravure cylinders, photopolymer flexo plates, and punching dies.
                </p>
                <p>
                  Before invoking any lien, a creditor&rsquo;s counsel must answer the foundational threshold question under <strong>Section 19 of the Sale of Goods Act, 1930</strong>: <em>did full legal ownership (proprietary title) in the physical cylinder ever transfer to the brand in the first place?</em> Under Section 19(1), property in specific or ascertained goods passes to the buyer strictly at the time the parties intend it to pass, ascertained from the terms of the contract, conduct of the parties, and invoicing structure.
                </p>
                <p>
                  In Indian flexible packaging practice across Vapi, Daman, Silvassa, Baddi, Noida, Pune, and Sivakasi, converters routinely subsidise 35% to 60% of true cylinder fabrication costs—absorbing the steel core, dynamic balancing, proofing ink, and machine setup against promised annual laminate tonnage—and raise a partial charge described as a <strong>&ldquo;Cylinder Development Contribution&rdquo;</strong>, <strong>&ldquo;Origination Charge&rdquo;</strong>, or <strong>&ldquo;Die-Maintenance Fee&rdquo;</strong>. Legally, paying a subsidised development contribution buys the brand an exclusive right to have its artwork printed on those cylinders—<strong>not unconditional ownership of the steel-and-copper capital asset</strong>.
                </p>
              </div>

              {/* Ownership Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-700 text-white mb-2.5">
                    Title Retained by Converter (Strongest Shield)
                  </span>
                  <h3 className="text-base font-extrabold text-emerald-950 mb-2">
                    &ldquo;Cylinder Development Contribution / Origination Fee&rdquo;
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-emerald-900">
                    <li>&bull; Invoice billed as service/origination contribution or subsidised below engraver cost.</li>
                    <li>&bull; Steel base shell, shaft journals, and re-copper rights remain converter&rsquo;s fixed/tooling property under s.19.</li>
                    <li>&bull; Buyer cannot demand physical removal to a rival converter without paying unamortised capex + clearing all overdue invoices.</li>
                    <li>&bull; Zero risk of &ldquo;illegal detention of buyer asset&rdquo; because converter holds its own physical chattel.</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-700 text-white mb-2.5">
                    Title Passed to Buyer (Lien Must Be Contractual)
                  </span>
                  <h3 className="text-base font-extrabold text-amber-950 mb-2">
                    &ldquo;Outright Sale of 8 Rotogravure Cylinders (HSN 8442)&rdquo;
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-amber-950">
                    <li>&bull; Full 100% capex billed and paid under HSN 8442 as outright capital tooling sale; buyer capitalised cylinders on its balance sheet.</li>
                    <li>&bull; Converter holds cylinders as a <strong>bailee</strong> under Section 148 of the Indian Contract Act, 1872.</li>
                    <li>&bull; Section 170 particular lien covers ONLY unpaid cylinder engraving/re-chroming bills—NOT separate unpaid laminate invoices.</li>
                    <li>&bull; Holding cylinders for unpaid pouch bills requires an <strong>Express Contractual General-Lien Clause</strong> or court attachment (Order XXXVIII Rule 5).</li>
                  </ul>
                </div>
              </div>

              {/* Desktop SVG Decision Tree + Mobile Cards */}
              <div className="mt-8">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Creditor Legal Decision Tree: Title Audit &rarr; General Lien &rarr; Recovery Enforcement
                </p>

                <div className="hidden md:block bg-slate-900 rounded-2xl p-4 border border-slate-800 overflow-x-auto">
                  <svg
                    width="920"
                    height="300"
                    viewBox="0 0 920 300"
                    className="w-full h-auto"
                    role="img"
                    aria-label="5-stage cylinder ownership and general lien legal decision flowchart for packaging converters"
                  >
                    <defs>
                      <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#EF4444" />
                      </marker>
                    </defs>

                    {/* Step 1 */}
                    <rect x="16" y="34" width="160" height="118" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <rect x="16" y="34" width="160" height="28" rx="12" fill="#DC2626" />
                    <text x="96" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">1. AUDIT HSN 8442</text>
                    <text x="96" y="82" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">Development Fee</text>
                    <text x="96" y="99" textAnchor="middle" fill="#CBD5E1" fontSize="10">vs Outright Sale?</text>
                    <text x="96" y="120" textAnchor="middle" fill="#94A3B8" fontSize="10">Sale of Goods s.19</text>
                    <text x="96" y="136" textAnchor="middle" fill="#94A3B8" fontSize="10">Title Retention Test</text>

                    <line x1="176" y1="93" x2="202" y2="93" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

                    {/* Step 2 */}
                    <rect x="204" y="34" width="160" height="118" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <rect x="204" y="34" width="160" height="28" rx="12" fill="#DC2626" />
                    <text x="284" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">2. LIEN VERIFICATION</text>
                    <text x="284" y="82" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">Check Express Clause</text>
                    <text x="284" y="99" textAnchor="middle" fill="#CBD5E1" fontSize="10">PO / Quote / Invoice</text>
                    <text x="284" y="120" textAnchor="middle" fill="#94A3B8" fontSize="10">Contract Act s.171</text>
                    <text x="284" y="136" textAnchor="middle" fill="#94A3B8" fontSize="10">or Unpaid Seller s.47</text>

                    <line x1="364" y1="93" x2="390" y2="93" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

                    {/* Step 3 */}
                    <rect x="392" y="34" width="160" height="118" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <rect x="392" y="34" width="160" height="28" rx="12" fill="#DC2626" />
                    <text x="472" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">3. COMPOSITE NOTICE</text>
                    <text x="472" y="82" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">15-Day RPAD + Email</text>
                    <text x="472" y="99" textAnchor="middle" fill="#CBD5E1" fontSize="10">Hold + Conditional</text>
                    <text x="472" y="120" textAnchor="middle" fill="#94A3B8" fontSize="10">Release on RTGS +</text>
                    <text x="472" y="136" textAnchor="middle" fill="#94A3B8" fontSize="10">s.44 Rack Rent Start</text>

                    <line x1="552" y1="93" x2="578" y2="93" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

                    {/* Step 4 */}
                    <rect x="580" y="34" width="160" height="118" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <rect x="580" y="34" width="160" height="28" rx="12" fill="#059669" />
                    <text x="660" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">4. STATUTORY SQUEEZE</text>
                    <text x="660" y="82" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">MSMED + s.43B(h)</text>
                    <text x="660" y="99" textAnchor="middle" fill="#CBD5E1" fontSize="10">3x RBI Interest +</text>
                    <text x="660" y="120" textAnchor="middle" fill="#94A3B8" fontSize="10">Tax Disallowance +</text>
                    <text x="660" y="136" textAnchor="middle" fill="#94A3B8" fontSize="10">NI s.138 / Order 37</text>

                    <line x1="740" y1="93" x2="766" y2="93" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

                    {/* Step 5 */}
                    <rect x="768" y="34" width="136" height="118" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                    <rect x="768" y="34" width="136" height="28" rx="12" fill="#0F766E" />
                    <text x="836" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">5. SETTLE / ERASE</text>
                    <text x="836" y="82" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">Full RTGS Release</text>
                    <text x="836" y="99" textAnchor="middle" fill="#CBD5E1" fontSize="10">OR 30d Idle Notice</text>
                    <text x="836" y="120" textAnchor="middle" fill="#94A3B8" fontSize="10">De-Chrome Brand IP</text>
                    <text x="836" y="136" textAnchor="middle" fill="#94A3B8" fontSize="10">&amp; Video BSA s.63</text>

                    {/* Bottom Guardrail Banner */}
                    <rect x="16" y="182" width="888" height="92" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                    <text x="36" y="210" fill="#F87171" fontSize="12" fontWeight="800">
                      MANDATORY CREDITOR GUARDRAIL — ZERO IP INFRINGEMENT &amp; ZERO CRIMINAL EXPOSURE:
                    </text>
                    <text x="36" y="233" fill="#E2E8F0" fontSize="11">
                      1. Never print or sell branded pouches using held cylinders (Trade Marks Act s.29 / Copyright Act s.17 bar).
                    </text>
                    <text x="36" y="254" fill="#E2E8F0" fontSize="11">
                      2. Always put conditional handover in writing (&ldquo;Ready for immediate dispatch upon RTGS clearance&rdquo;) to defeat BNS s.316 FIR threats.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  {[
                    {
                      step: "1. Audit HSN 8442 Invoice",
                      desc: "Verify if billed as 'Cylinder Development Contribution' (converter retains title under Sale of Goods s.19) or outright capital sale.",
                    },
                    {
                      step: "2. Verify Express Lien Clause",
                      desc: "Locate general-lien wording on quotation/PO/invoice (permissible alongside Contract Act s.171) or unpaid seller lien under s.47.",
                    },
                    {
                      step: "3. Dispatch 15-Day Composite Notice",
                      desc: "Send RPAD + Email + WhatsApp notice asserting conditional release upon RTGS + Sale of Goods s.44 monthly rack rent.",
                    },
                    {
                      step: "4. Trigger Statutory Squeeze",
                      desc: "Stack MSMED s.15–18 (3x RBI interest), Income Tax s.43B(h) CFO alert, and security PDC presentation under NI Act s.138.",
                    },
                    {
                      step: "5. Settle or Lawfully De-Chrome",
                      desc: "Release against cleared funds—or after 30-day final disposal notice, chemically de-chrome brand IP on BSA s.63 video before scrap.",
                    },
                  ].map((m) => (
                    <div key={m.step} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                      <p className="text-xs font-extrabold text-red-400 uppercase tracking-wider mb-1">{m.step}</p>
                      <p className="text-xs text-slate-200 leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 2: STATUTORY MATRIX */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Contract Act ss.170&ndash;171, Copyright &amp; Sale of Goods Statutory Map
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Most converters lose cylinder-handover disputes in the very first reply email because they cite <strong>Section 170</strong> (bailee&rsquo;s particular lien) for unpaid laminate supply bills—handing the brand&rsquo;s lawyer an easy courtroom rebuttal. Use this exact annotated statutory matrix to separate particular lien, contractual general lien, title retention, IP boundaries, and MSME tax pressure.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute &amp; Section</th>
                      <th className="p-3.5 font-bold">Scope of Right</th>
                      <th className="p-3.5 font-bold">Applies to Unpaid Pouch Bills?</th>
                      <th className="p-3.5 font-bold">Creditor Action Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Indian Contract Act, 1872 &mdash; Section 170
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Bailee&rsquo;s Particular Lien over bailed goods on which labour/skill was expended
                      </td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded bg-red-50 text-[#DC2626] font-bold text-xs border border-red-200">
                          NO (Tooling Bills Only)
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Valid ONLY for unpaid cylinder engraving, copper-plating, re-chroming, or die-making charges—never rely on s.170 alone for finished pouch bills.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Indian Contract Act, 1872 &mdash; Section 171 + Express Contract
                      </td>
                      <td className="p-3.5 text-slate-700">
                        General Lien securing the entire general balance of account across running invoices
                      </td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                          YES (If Express Clause)
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Statutory s.171 excludes printers, so you MUST enforce an Express General-Lien Clause printed in Quotation / PO Confirmation / Tax Invoice (per SC <em>Sriyanesh Knitters</em>).
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Sale of Goods Act, 1930 &mdash; Sections 19, 46 &amp; 47
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Retention of title until full payment &amp; Unpaid Seller&rsquo;s Lien on tooling/stock in possession
                      </td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                          YES (Title / Unpaid Tooling)
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Prove partial &ldquo;Cylinder Development Contribution&rdquo; never transferred steel-core title, OR exercise s.47 unpaid seller&rsquo;s lien on unpaid cylinder/laminate lots.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Sale of Goods Act, 1930 &mdash; Section 44 &amp; Section 55
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Reasonable godown/rack storage charges &amp; full contract price for custom zero-salvage goods
                      </td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                          YES (Storage + Unlifted Stock)
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Serve formal notice triggering monthly per-cylinder storage rent &amp; 100% recovery on unlifted branded laminate rolls. See our{" "}
                        <Link
                          href="/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery"
                          className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                        >
                          Unlifted Custom Pouches Guide
                        </Link>
                        .
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Copyright Act s.17 &amp; Trade Marks Act s.29
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Separates brand&rsquo;s intangible artwork/logo IP from physical steel/copper cylinder body
                      </td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold text-xs border border-amber-200">
                          GUARDRAIL (No 3rd-Party Use)
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Never print/sell branded pouches externally; chemically de-chrome/strip artwork before scrapping or re-using cores after notice.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act ss.15&ndash;19 &amp; Income Tax Act s.43B(h)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        45-day cap, 3x RBI monthly compound interest, 75% challenge deposit &amp; FY tax disallowance
                      </td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                          YES (Micro/Small Udyam)
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Calculate interest via our{" "}
                        <Link
                          href="/tools/msme-delayed-payment-interest-calculator"
                          className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                        >
                          MSME 3x RBI Calculator
                        </Link>{" "}
                        and copy buyer&rsquo;s CFO on{" "}
                        <Link
                          href="/law/section-43bh-msme-payment-rule"
                          className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                        >
                          Section 43B(h) tax impact
                        </Link>
                        .
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: BARE-ACT TIMELINES & LIMITATION STOPS */}
            <section
              id="heading-bare-act-timelines"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Bare-Act Limitation Stops &amp; Notice Timelines (15d / 30d / 2 Yr)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Precision timing separates an enforceable statutory lien from a stale commercial grievance. Track every mandatory bare-act window below from the moment a pouch invoice turns overdue or a brand emails a cylinder release demand:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    window: "15 Days (No Agreement) / 45 Days Max",
                    statute: "MSMED Act s.15 & Income Tax s.43B(h)",
                    detail:
                      "Absolute statutory payment ceiling for Udyam Micro & Small converters, engravers, and die makers. Unpaid sums beyond March 31 are disallowed from the buyer's taxable business expenses under s.43B(h).",
                    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
                  },
                  {
                    window: "15 Days Cure Window",
                    statute: "Composite Lien & Demand Notice",
                    detail:
                      "Standard notice period granted to the FMCG brand to clear overdue laminate/carton bills + accrued s.16 interest before initiating MSEFC Samadhaan, NI s.138, or Commercial Court s.12A mediation.",
                    badgeClass: "bg-slate-100 text-slate-800 border-slate-300",
                  },
                  {
                    window: "30 Days Cheque Bounce Notice",
                    statute: "NI Act, 1881 — s.138(b) & (c)",
                    detail:
                      "Strict 30-day window from bank return memo to dispatch statutory demand notice on dishonoured bill/security PDCs, followed by a 15-day payment cure window and 30-day Magistrate filing deadline.",
                    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
                  },
                  {
                    window: "30 Days Storage & De-Chroming Notice",
                    statute: "Sale of Goods Act s.44 + Trade Custom",
                    detail:
                      "Mandatory final notice via Speed Post RPAD + Email before accruing godown rack rent or chemically stripping/de-chroming dormant cylinders sitting idle beyond 18–24 months.",
                    badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
                  },
                  {
                    window: "90 Days MSEFC / 3+2 Mo s.12A",
                    statute: "MSMED s.18(5) & Commercial Courts s.12A",
                    detail:
                      "MSME Facilitation Council proceedings carry a 90-day statutory target (plus 75% pre-deposit bar under s.19 on buyer appeals); Commercial Courts require 3-month (+2 month) pre-institution mediation.",
                    badgeClass: "bg-slate-100 text-slate-800 border-slate-300",
                  },
                  {
                    window: "3 Years Limitation Stop",
                    statute: "Limitation Act, 1963 — Arts. 14 / 15 / 55",
                    detail:
                      "Suits for unpaid laminate invoices or unamortised cylinder capex must be filed within 3 years of invoice/credit expiry—resettable via written balance confirmation or part payment under Sections 18–19.",
                    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
                  },
                ].map((item) => (
                  <div
                    key={item.window}
                    className="rounded-xl border border-slate-200 p-4 bg-slate-50/70 flex flex-col justify-between"
                  >
                    <div>
                      <span
                        className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-extrabold border mb-2.5 ${item.badgeClass}`}
                      >
                        {item.window}
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                        {item.statute}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4: VERIFIED SUPREME COURT PRECEDENTS */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Verified Supreme Court &amp; Statutory Precedents on Lien &amp; Custody
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Ground every legal notice, police representation, and Commercial Court reply in settled Supreme Court jurisprudence governing general lien, express contract autonomy, criminalization bars, and pre-institution mediation:
              </p>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((caseItem) => (
                  <div
                    key={caseItem.parties}
                    className="relative bg-slate-50 rounded-xl border border-slate-200 overflow-hidden pl-5 pr-5 py-5"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                        {caseItem.statute}
                      </span>
                      <span className="text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                        {caseItem.citation}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                      {caseItem.parties}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">{caseItem.title}</p>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        <strong className="text-slate-900">Issue:</strong> {caseItem.facts}
                      </p>
                      <p>
                        <strong className="text-slate-900">Verified Holding:</strong> {caseItem.holding}
                      </p>
                      <div className="mt-3 bg-white border border-slate-200 rounded-lg p-3">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-0.5">
                          Converter Application
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 font-medium">
                          {caseItem.creditorTakeaway}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5: INTERACTIVE 4 SCENARIOS */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Cylinder Handover, Flexo Plate &amp; Cutting-Die Dispute Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your exact factory dispute below to inspect the commercial flashpoint, statutory trap, and creditor execution sequence:
              </p>

              <CylinderLienScenarioTabs />
            </section>

            {/* SECTION 6: ARTWORK COPYRIGHT VS PHYSICAL COPPER + WORKED FINANCIAL LEVERAGE */}
            <section
              id="heading-copyright-vs-copper"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Artwork Copyright vs Physical Copper Base: Separating IP &amp; Metal
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  A favourite bluff by FMCG legal counsel is sending a cease-and-desist email claiming: <em>&ldquo;Because our brand owns the trademark and copyright in the pouch artwork, your factory has zero legal right to hold our gravure cylinders.&rdquo;</em> That argument deliberately collapses two legally separate assets into one.
                </p>
                <p>
                  Under <strong>Section 17 of the Copyright Act, 1957</strong> and <strong>Section 29 of the Trade Marks Act, 1999</strong>, the brand owns the <em>intangible artistic work</em>, brand name, barcode layout, and FSSAI trade dress engraved into the top 40&ndash;60 micron copper-chrome skin. That IP ownership entitles the brand to stop you from printing pouches for unauthorised buyers or selling excess stock in the open market. It does <strong>not</strong> confer free title to the physical 45 kg precision-balanced steel shaft, dynamic journals, or base electrolytic copper layer funded by your plant, nor does it override an express contractual general lien.
                </p>
              </div>

              {/* Worked Financial Leverage Ledger */}
              <div className="mt-6 bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-700">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400">
                      Worked Creditor Leverage Ledger (Illustrative)
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white mt-0.5">
                      8-Colour Copper Gravure Set Held Against ₹18.00 Lakh Overdue Laminate Ledger
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                    Udyam Small Converter
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody className="divide-y divide-slate-800">
                      <tr>
                        <td className="py-2.5 text-slate-300">1. Unpaid Printed BOPP/PET Laminate Invoices (90 Days Past Due)</td>
                        <td className="py-2.5 text-right font-bold text-white">₹18,00,000</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-slate-300">2. Unamortised Balance on 8-Colour Rotogravure Cylinder Set (8 &times; ₹10,500)</td>
                        <td className="py-2.5 text-right font-bold text-white">₹84,000</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-slate-300">3. MSMED Act s.16 Monthly Compound Interest (3x RBI Bank Rate &asymp; 19.5% p.a., 45d+ overdue)</td>
                        <td className="py-2.5 text-right font-bold text-emerald-400">₹1,19,200+</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-slate-300">4. Sale of Goods Act s.44 Rack Custody Rent (8 Cylinders &times; ₹750/mo &times; 3 mo)</td>
                        <td className="py-2.5 text-right font-bold text-amber-300">₹18,000</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-slate-300">5. Buyer&rsquo;s Income Tax s.43B(h) Corporate Disallowance Shock (25.17% on ₹18L if unpaid by Mar 31)</td>
                        <td className="py-2.5 text-right font-bold text-red-400">₹4,53,060 Tax Hit</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="py-3 px-2 font-extrabold text-white">
                          Total Economic Pain Inflicted on Defaulting Brand (Excl. 21-Day Re-Engraving Shutdown)
                        </td>
                        <td className="py-3 px-2 text-right font-black text-emerald-400 text-base">
                          ₹24,74,260+
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
                  Note: Interest figures vary with notified RBI Bank Rate and exact invoice acceptance dates. Verify live monthly compounding using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-300 underline hover:text-white font-semibold"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* SECTION 7: IDLE CYLINDER STORAGE RENT & DE-CHROMING PROTOCOL */}
            <section
              id="heading-dechroming-storage"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Idle Cylinder Storage Rent (s.44) &amp; De-Chroming Notice Protocol
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Thousands of flexible-packaging plants and mono-carton units lose valuable warehouse space and fire-insurance capacity storing dormant cylinders, flexo plates, and cutting dies for SKUs discontinued 2 to 5 years ago. Under <strong>Section 44 of the Sale of Goods Act, 1930</strong>, once a buyer neglects or refuses to lift goods/tooling within a reasonable time after formal request, the buyer becomes statutorily liable for a <em>reasonable charge for the care and custody</em> of the property.
              </p>

              {/* Model Contractual General Lien & 2-Year De-Chroming Clause */}
              <div className="bg-slate-50 border-l-4 border-slate-900 rounded-r-xl p-5 mb-6">
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  Model Quotation / PO Acknowledgment Clause (Adopt Across All Future Packaging Orders)
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-mono leading-relaxed">
                  &ldquo;CYLINDER, PLATE &amp; DIE OWNERSHIP, GENERAL LIEN &amp; DORMANCY CLAUSE: Amounts billed toward Rotogravure Cylinder Development / Origination, Flexo Photopolymer Plates, or Cutting/Punching Dies represent a non-transferable origination contribution unless expressly invoiced as &lsquo;Outright Capital Tooling Sale (100% Paid)&rsquo;. Notwithstanding title, the Buyer hereby grants the Converter an irrevocable Contractual General Lien (in the nature of Section 171 of the Indian Contract Act, 1872) over all cylinders, plates, dies, and unlifted stock in custody to secure payment of the entire running ledger across all POs. Any cylinder/die lying idle without repeat print orders for 24 consecutive months shall attract rack storage rent under Section 44 of the Sale of Goods Act, 1930, and may be chemically de-chromed/stripped of brand artwork and scrapped after a 30-day written notice via Email/RPAD.&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-slate-200 rounded-xl p-4">
                  <span className="text-xs font-extrabold text-[#DC2626] uppercase">Phase 1 &middot; Audit &amp; BSA s.63 Log</span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1 mb-1.5">Isolate 24-Month Dormant Racks</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Export ERP last-print-date logs, cylinder serial numbers, engraving proofs, and original HSN 8442 invoices, paired with a Section 63 BSA electronic evidence certificate.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4">
                  <span className="text-xs font-extrabold text-[#DC2626] uppercase">Phase 2 &middot; 30-Day RPAD + Email</span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1 mb-1.5">Serve Statutory Disposal Notice</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Give a clear 30-day final window to clear overdue invoices + s.44 monthly storage rent and collect cylinders—failing which chemical de-chroming will execute automatically.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4">
                  <span className="text-xs font-extrabold text-[#DC2626] uppercase">Phase 3 &middot; Erasure Proof</span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1 mb-1.5">Video-Record Artwork De-Chroming</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Record date-stamped video/photos of acid stripping or diamond turning removing every brand logo and FSSAI code so zero Trade Marks Act s.29 exposure survives.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: BRAND DEFENSE PRE-EMPTION TABLE */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Brand Defense Pre-Emption Table: Rebutting Criminal &amp; Civil Threats
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Defaulting FMCG and D2C procurement teams deploy five predictable legal intimidation tactics the moment you refuse cylinder handover. Prepare your statutory counter-weapon in advance:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Brand / Buyer Legal Threat</th>
                      <th className="p-3.5 font-bold">Hidden Weakness in Buyer&rsquo;s Claim</th>
                      <th className="p-3.5 font-bold">Converter&rsquo;s Pre-Emptive Counter-Move</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;We will file a Police FIR for Criminal Breach of Trust (BNS s.316 / IPC s.406).&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Zero &lsquo;dishonest misappropriation&rsquo; exists where custody is openly disclosed and tied to unpaid GST invoices.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Serve immediate Advocate Reply citing <em>IOC v. NEPC India</em> (2006) 6 SCC 736 + offer conditional release against RTGS clearance or court deposit.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;Section 170 does not let you hold cylinders for unpaid pouch invoices.&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Assumes buyer owns full title AND ignores express contractual general-lien terms or unpaid seller&rsquo;s lien.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Anchor retention on Sale of Goods s.19 (&lsquo;Development Contribution&rsquo; never passed title) + Express Contractual General-Lien Clause per <em>Sriyanesh Knitters</em>.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;We are filing an urgent Commercial Court mandatory injunction tomorrow.&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Mandatory injunctions require clean hands; defaulting on ₹18L admitted invoices bars equitable relief, and s.12A mediation is compulsory.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Invoke <em>Patil Automation</em> (2022) 10 SCC 1 (mandatory s.12A mediation) and file an instant counterclaim / Order XXXVIII Rule 5 security demand.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;Your last 3 pouch lots had GSM / delamination / shade variation — we owe nothing.&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Retrospective pretext manufactured only after cylinder handover demand; buyer already packed &amp; sold finished goods in those pouches.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Invoke Sale of Goods Act s.42 (commercial consumption = irrevocable acceptance) &amp; BSA s.63 Pantone approval logs. See our{" "}
                        <Link
                          href="/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery"
                          className="text-[#DC2626] font-semibold underline"
                        >
                          GSM &amp; BF Dispute Playbook
                        </Link>
                        .
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;We paid 100% of cylinder invoice 18 months ago; handover is unconditional.&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Even if title passed, buyer remains exposed to MSMED 3x RBI interest, s.43B(h) tax disallowance, and Order 37 summary decree.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Trigger{" "}
                        <Link
                          href="/templates/msme-delayed-payment-demand-notice"
                          className="text-[#DC2626] font-semibold underline"
                        >
                          MSME Demand Notice
                        </Link>{" "}
                        + s.43B(h) CFO alert + Order XXXVIII Rule 5 attachment before releasing tooling.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: DUAL-TRACK B2B CTA + RELATED IND-22 INTERNAL LINKS */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Serve a Cylinder-Lien Demand Notice or Batch Converter CSV
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Never send an informal WhatsApp refusal that a brand&rsquo;s counsel can twist into an illegal-detention allegation. Put a fact-verified statutory lien, MSME Section 43B(h), and Section 44 storage notice on the legal record immediately:
              </p>

              <CylinderLienCTA />

              {/* Cross-Cluster IND-22 Resources */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Essential Packaging, Printing &amp; MSME Recovery Resources (IND-22 Cluster)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <Link
                    href="/industries/packaging-printing-paper-mill-recovery"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="block font-bold text-slate-900">
                      Packaging, Printing &amp; Paper Mill Recovery Hub &rarr;
                    </span>
                    <span className="text-xs text-slate-600">
                      Parent IND-22 playbook covering flexible laminates, cartons, rigid moulds &amp; paper mills.
                    </span>
                  </Link>
                  <Link
                    href="/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="block font-bold text-slate-900">
                      Unlifted Custom-Printed Pouches &amp; Artwork Changes &rarr;
                    </span>
                    <span className="text-xs text-slate-600">
                      Recover 100% contract price under Sale of Goods s.55 + s.44 godown rent for zero-salvage stock.
                    </span>
                  </Link>
                  <Link
                    href="/rigid-plastic-pet-preform-hdpe-drum-glass-bottle-mould-recovery"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="block font-bold text-slate-900">
                      PET Preform, HDPE Drum &amp; Custom Blow-Mould Lien &rarr;
                    </span>
                    <span className="text-xs text-slate-600">
                      Parallel tooling-lien &amp; MSME recovery strategies for rigid plastic and glass bottle makers.
                    </span>
                  </Link>
                  <Link
                    href="/kraft-paper-duplex-board-mill-dealer-converter-credit-recovery"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="block font-bold text-slate-900">
                      Kraft Paper &amp; Duplex Mill Converter Credit Recovery &rarr;
                    </span>
                    <span className="text-xs text-slate-600">
                      Defeating post-slitting reel complaints via trade custom, NI s.138 &amp; IBC s.8.
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 10: FAQS */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  FAQs: Rotogravure Cylinder Ownership, General Lien &amp; De-Chroming
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    open={idx === 0}
                    className="group border border-slate-200 rounded-xl bg-slate-50/60 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white text-slate-700 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 11: PRIMARY STATUTORY SOURCES */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Bare Acts, IP Statutes &amp; Judicial Reference Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 hover:decoration-[#DC2626] transition-colors"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                <strong>Legal Disclaimer:</strong> This statutory deep-dive is authored for B2B creditors, flexible-packaging converters, cylinder engravers, and die makers for informational and pre-litigation planning purposes under Indian law. Exact lien enforceability depends on your specific HSN 8442 invoice wording, PO general-lien clauses, and Udyam registration status. Consult an advocate before scrapping or re-engraving third-party branded tooling.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
