import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ArchitectRecoveryTableOfContents from "./ArchitectRecoveryTableOfContents";
import ArchitectRecoveryScenarioTabs from "./ArchitectRecoveryScenarioTabs";
import ArchitectRecoveryCTA from "./ArchitectRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/architect-interior-consultant-stage-fee-gfc-drawing-copyright-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (149 chars) — kept verbatim in BOTH <h1> and ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "Developer Got Municipal Sanction & GFC Drawings—Then Replaced Your Firm to Dodge Final Architectural Fees? COA Regulation 2(1)(xii) & Copyright Guide";

// 57 chars — tightened from 70ch PDF draft for Screaming Frog 30–60ch limit while preserving primary keyword
const META_TITLE = "Builder Constructing From Drawings? Unpaid Architect Fees";

// 152 chars — tightened from 182ch PDF draft for Screaming Frog 120–155ch limit while keeping every statutory hook
const META_DESCRIPTION =
  "Under Copyright Act s.13/17, CAD/BIM & GFC drawings remain the Architect's IP. Invoke COA Reg. 2(1)(xii) & Commercial Courts s.2(1)(c)(xvii) to recover.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "architect unpaid design fee builder constructing from drawings copyright",
    "developer took municipal sanction gfc drawings fired architect unpaid",
    "council of architecture coa scale of charges professional conduct",
    "architectural copyright section 13 artistic work injunction",
    "appointing new architect without coa noc unpaid fees regulation",
    "stage wise architectural fee recovery legal notice",
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
      "The Copyright Act, 1957 (Sections 2(b), 2(c), 13(1)(a), 14(c), 17, 19, 51, 55, 57 & 59 — Architectural Drawings as Artistic Work, Ownership, Infringement & Remedies)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title:
      "The Architects Act, 1972 & Architects (Professional Conduct) Regulations, 1989 (Section 30 & Regulation 2(1)(xii) — Mandatory Prior-Architect Intimation & Misconduct)",
    url: "https://www.coa.gov.in/",
  },
  {
    title:
      "The Commercial Courts Act, 2015 (Sections 2(1)(c)(vi), 2(1)(c)(xvii) & 12A — IPR Disputes, Construction Consultancy & Urgent Interim Relief)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 70 & 73 — Quantum Meruit for Non-Gratuitous Services & Damages for Wrongful Mandate Termination)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 & 24 — 45-Day Payment Ceiling & 3x RBI Compound Interest for Udyam Studios)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 — Section 43B(h) (Corporate Tax Disallowance for Unpaid Micro/Small Architectural Consultancy Invoices Beyond 45 Days)",
    url: "https://www.incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Evidence Admissibility for CAD/BIM Metadata, Email Transmittals & Municipal Portal Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "Does a developer automatically own copyright in our CAD, BIM, and GFC drawings after paying for Concept and Municipal Sanction stages?",
    a: "No. Under Section 17 read with Section 13(1)(a) and Section 14(c) of the Copyright Act, 1957, an independent architectural or interior design firm is the first owner of copyright in all sketches, 3D renders, CAD (.dwg), Revit (.rvt), and Good For Construction (GFC) drawings. Paying partial stage fees grants only a conditional, revocable license to execute the project on that specific plot subject to full fee settlement. Unless you executed a written, signed assignment under Section 19 transferring IP unconditionally, ownership stays 100% with your studio.",
  },
  {
    q: "Can another COA-registered architect take over our sanctioned project if the developer has not paid our pending stage bills?",
    a: "No—doing so exposes the incoming architect to disciplinary action. Under Regulation 2(1)(xii) of the Architects (Professional Conduct) Regulations, 1989 framed under the Architects Act, 1972, no registered architect may supplant another architect or accept a commission previously entrusted to another architect without informing the outgoing architect in writing and verifying that the prior engagement has been duly terminated. Serving a formal written intimation copying the incoming architect and reserving a COA Section 30 complaint stops ethical practitioners immediately.",
  },
  {
    q: "Why is Section 59 of the Copyright Act critical when seeking an injunction against a builder constructing from our drawings?",
    a: "Section 59(1) of the Copyright Act, 1957 states that once the construction of a building or structure that infringes architectural copyright has already commenced, the copyright owner is not entitled to an injunction restraining completion or ordering demolition. However, Section 59 does not bar an urgent pre-commencement injunction before excavation or plinth casting, nor does it restrict injunctions against unauthorised copying, distribution, or commercial exploitation of CAD/GFC sets across additional towers or phases, nor does it limit full statutory damages, unpaid stage fees, and account of profits under Section 55.",
  },
  {
    q: "Can our studio withdraw its Architect-on-Record supervision before the Municipal Corporation or RERA when fired unpaid?",
    a: "Yes—in fact, formally notifying the Municipal Authority (BMC, DDA, BBMP, PMC, HMDA, etc.) and State RERA authority is both a vital risk shield and powerful commercial leverage. Under COA norms and municipal building bye-laws, an architect cannot remain liable for structural safety or unauthorized deviations executed by a replacement draftsman. Filing a factual Termination of Architectural Supervision Intimation protects your professional license while putting the promoter on statutory notice before Plinth, Occupancy, or RERA Form-1 certifications.",
  },
  {
    q: "What if an HNI bungalow owner hires an unregistered local interior contractor instead of a COA architect to build from our working drawings?",
    a: "COA disciplinary rules bind only registered architects, so an unregistered turnkey contractor falls outside COA jurisdiction—but both the homeowner and the contractor remain fully liable under Section 51 and Section 55 of the Copyright Act, 1957 for unauthorized 2D-to-3D reproduction of your artistic works and interior joinery drawings, alongside Indian Contract Act Section 70 (quantum meruit) and Order XXXVII CPC summary recovery for unpaid stage bills.",
  },
  {
    q: "Are architecture, urban design, and interior design studios eligible for 45-day payment protection and Section 43B(h) under the MSMED Act?",
    a: "Yes. Architectural and engineering activities (NIC 7110) and specialized interior design services (NIC 7410) qualify as Micro or Small service enterprises upon Udyam registration. When your client is a corporate real estate developer, hotel company, or audited LLP, unpaid stage invoices crossing 45 days trigger monthly-compounded interest at 3x the RBI bank rate under MSMED Section 16 and full corporate tax disallowance under Section 43B(h) of the Income Tax Act if unpaid past March 31.",
  },
  {
    q: "Should an architect ever delete municipal portal uploads or sabotage ongoing site safety to force fee payment?",
    a: "Never. Tampering with government portals or endangering site stability violates the Architects (Professional Conduct) Regulations, 1989 and invites criminal and IT Act counter-proceedings. The lawful, dignified, and far more effective creditor mechanism is a coordinated Advocate Statutory Notice combining Copyright License Revocation, COA Regulation 2(1)(xii) Intimation, formal Municipal/RERA Supervision Withdrawal, and Commercial Court / Order XXXVII / MSEFC recovery.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T11:45:00+05:30",
  dateModified: "2026-11-19T11:45:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  image: `${SITE_URL}/blog_money_recovery.png`,
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
    name: "Architectural Stage Fee, GFC Drawing Copyright & COA Regulation 2(1)(xii) Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Stage Architectural Fee & GFC Drawing Copyright Recovery Playbook",
  description:
    "Step-by-step COA-compliant statutory escalation protocol for registered architects, interior designers, and urban planners to recover unpaid stage fees and enforce Copyright Act ss.13/17/51 against defaulting developers.",
  totalTime: "P30D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Native CAD/BIM Files & Archive BSA s.63 Transmittal Metadata",
      text: "Suspend release of editable .dwg/.rvt source models and preserve dated drawing transmittal registers, municipal sanction upload acknowledgments, and client email/WhatsApp stage approvals with a BSA 2023 s.63 certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve Advocate Copyright License Revocation & Stage-Fee Demand Notice",
      text: "Issue a 15-day statutory demand notice via Email, WhatsApp, and Speed Post RPAD revoking the conditional construction license over unpaid GFC/Sanction drawings under Copyright Act ss.13, 17 & 51 and demanding settled stage fees plus s.43B(h)/MSME interest.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Dispatch COA Reg. 2(1)(xii) Intimation to Incoming Architect & Notify Municipal/RERA Authority",
      text: "Formally notify any replacement COA architect in writing of subsisting unpaid fees and non-issuance of NOC under Regulation 2(1)(xii), and file a factual Termination of Supervision Intimation with the Municipal Corporation and RERA.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "File Urgent Commercial IPR Suit Under s.2(1)(c)(xvii) Before Construction Commences",
      text: "Where excavation or tower replication is imminent, move the Commercial Court immediately for an ex-parte Order XXXIX injunction (exempt from s.12A pre-institution mediation under Yamini Manohar) before Copyright Act s.59 bars demolition.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Enforce Parallel Order XXXVII Summary Suit, MSEFC Samadhaan or NI Act s.138",
      text: "Recover full certified stage fees, extra redesign quantum meruit (Contract Act s.70), and 3x RBI compound interest via MSEFC (for Udyam studios), Commercial Court Order XXXVII summary suit, or NI Act s.138 if cheques dishonour.",
    },
  ],
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
      name: "CA, Architects & Consultants Recovery",
      item: `${SITE_URL}/industries/ca-architects-consultants-professional-fee-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Architect Stage-Fee & GFC Copyright Recovery",
      item: CANONICAL_URL,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function ArchitectGfcCopyrightRecoveryPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-23 &middot; Architects &amp; Interior Consultants</span>
            <span className="text-red-500/70">|</span>
            <span>COA Reg. 2(1)(xii) &amp; Copyright Act s.13/17</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 Word Executive Creditor Answer Box + Inline Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under Sections 13(1)(a) and 17 of the Copyright Act, 1957, architectural CAD, BIM, and GFC drawings remain your firm&apos;s exclusive intellectual property until expressly assigned in writing. Pairing Copyright License Revocation with COA Regulation 2(1)(xii) Incoming-Architect Intimation and Commercial Court s.2(1)(c)(xvii) filings compels unpaid fee settlement—detailed inside our{" "}
            <Link
              href="/industries/ca-architects-consultants-professional-fee-recovery"
              className="text-red-300 underline decoration-red-400/70 hover:text-white font-semibold"
            >
              CA, Architects &amp; Consultants Fee Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-slate-100">100% IP</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Copyright in CAD/BIM/GFC Stays With Architect (s.17)
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-emerald-400">Reg. 2(1)(xii)</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Bars Replacement COA Architect Without Written Notice
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-amber-400">s.2(1)(c)(xvii)</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Commercial Court Fast-Track IPR &amp; Fee Jurisdiction
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-red-400">45d / 3x RBI</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                MSME &amp; s.43B(h) Tax Trigger for Udyam Design Firms
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "CA, Architects & Consultants Recovery",
                href: "/industries/ca-architects-consultants-professional-fee-recovery",
              },
              {
                label: "Architect Stage-Fee & GFC Copyright Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <ArchitectRecoveryTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The GFC Extraction Trap */}
            <section
              id="heading-gfc-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Why Builders Extract GFC Drawings &amp; Fire Architects Before Billing
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s real estate, hospitality, and luxury bungalow sectors, registered architects, urban designers, landscape principals, and luxury interior studios confront a calculated fee-evasion pattern. A developer or HNI promoter pays the initial 15%&ndash;25% retainer during Concept Design and Schematic layouts, applies relentless schedule pressure to clear Municipal Corporation / Development Authority sanctions, and obtains complete <strong>Good For Construction (GFC) working drawings</strong>, door-window schedules, MEP coordination sets, and detailed BOQs.
                </p>
                <p>
                  Once roughly 85%&ndash;90% of the firm&apos;s intellectual, regulatory, and FSI-optimization value has been extracted, the promoter stalls stage invoices—inventing excuses like &ldquo;RERA cash-flow squeeze,&rdquo; &ldquo;value-engineering redesign,&rdquo; or &ldquo;investor restructuring&rdquo;—and abruptly terminates the mandate. Behind closed doors, the developer hands your PDF/CAD set to a low-cost site draftsman or an unethical replacement architect to build the towers or interiors while dodging ₹15 lakh to ₹1.5 crore in unpaid fees.
                </p>
              </div>

              {/* COA Stage-Wise Value vs Fee Extraction Table */}
              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold">COA Design Stage</th>
                      <th className="py-3 px-4 font-bold">Typical Fee %</th>
                      <th className="py-3 px-4 font-bold">Key Deliverables Extracted</th>
                      <th className="py-3 px-4 font-bold">Default Risk &amp; Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">1. Concept &amp; Schematic</td>
                      <td className="py-3 px-4 font-mono font-semibold">10% &ndash; 20%</td>
                      <td className="py-3 px-4 text-slate-700">Massing, FSI feasibility, 3D concept renders, master layout</td>
                      <td className="py-3 px-4 text-emerald-700 font-medium">Low default; usually paid as mobilization</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">2. Municipal Sanction</td>
                      <td className="py-3 px-4 font-mono font-semibold">15% &ndash; 20%</td>
                      <td className="py-3 px-4 text-slate-700">AutoDCR / Building Plan approval, NOC coordination, RERA layout</td>
                      <td className="py-3 px-4 text-amber-700 font-medium">High leverage: Architect-on-Record sign-off</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">3. Working / GFC Set</td>
                      <td className="py-3 px-4 font-mono font-semibold">35% &ndash; 45%</td>
                      <td className="py-3 px-4 text-slate-700">Detailed CAD/BIM, sections, joinery, facade &amp; tender BOQ</td>
                      <td className="py-3 px-4 text-[#DC2626] font-bold">Peak bypass zone — builder fires firm here</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">4. Site Supervision &amp; OC</td>
                      <td className="py-3 px-4 font-mono font-semibold">15% &ndash; 25%</td>
                      <td className="py-3 px-4 text-slate-700">Periodic site visits, RERA Form-1, Completion / OC sign-off</td>
                      <td className="py-3 px-4 text-slate-700 font-medium">Blocked via formal Supervision Withdrawal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2: Copyright Act s.13, s.17, s.51 & s.59 */}
            <section
              id="heading-copyright-law"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Copyright Act s.13, s.17, s.51 &amp; the Crucial s.59 Timing Rule
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Developers routinely assume that because they paid ₹10 lakh toward early stage invoices, they have &ldquo;bought&rdquo; the architectural drawings outright. Indian intellectual property law flatly rejects that presumption. Under <strong>Section 2(c)</strong> and <strong>Section 13(1)(a)</strong> of the Copyright Act, 1957, architectural drawings, plans, elevations, interior millwork blueprints, 3D renders, and BIM models qualify as protected original <em>artistic works</em>.
                </p>
                <p>
                  Under <strong>Section 17</strong>, the independent architect or design partnership—not the commissioning developer—is the statutory <em>first owner of copyright</em>. Unlike a salaried employee under a contract of service (Section 17(c)), a consulting studio operates under a contract <em>for</em> services. Under <strong>Section 19</strong>, no assignment of copyright is valid unless executed in writing and signed by the assignor specifying the rights assigned and royalty/fee consideration. As detailed in our cross-sector guide on{" "}
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="text-[#DC2626] font-semibold underline decoration-red-300 hover:text-[#B91C1C]"
                  >
                    IP and copyright retention until full payment
                  </Link>
                  , paying partial milestones creates only an implied, conditional construction license that terminates upon material fee default.
                </p>
                <p>
                  Executing construction from unpaid 2D/3D drawings without a valid license constitutes direct 2D-to-3D copyright infringement under <strong>Section 14(c)(i)(B)</strong> and <strong>Section 51</strong>, triggering civil remedies under <strong>Section 55</strong> (injunction, statutory damages, account of profits) plus <strong>Section 57 Moral Rights</strong> against unauthorized distortion of your design by a draftsman.
                </p>
              </div>

              {/* Critical Statutory Caveat & Verified Precedent Cards */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative pl-4 border-l-4 border-[#DC2626] bg-amber-50/70 border-y border-r border-amber-200 rounded-r-xl p-4">
                  <span className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1">
                    Critical Statutory Warning &middot; Copyright Act s.59(1)
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                    Why You Must Act BEFORE Plinth Construction Starts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Section 59(1)</strong> bars a court from ordering demolition or stopping completion of an infringing building <em>once its construction has commenced</em>. Acting immediately upon unpaid GFC extraction—before site excavation or replication onto Phase-2 towers—preserves pre-commencement injunction power alongside full Section 55 licensing damages and unpaid fee recovery.
                  </p>
                </div>

                <div className="relative pl-4 border-l-4 border-[#DC2626] bg-slate-50 border-y border-r border-slate-200 rounded-r-xl p-4">
                  <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                    Supreme Court Precedent &middot; Commercial Courts s.12A
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                    Yamini Manohar (2024) &amp; Patil Automation (2022)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    In <em>Patil Automation</em> (2022), the Supreme Court held Section 12A pre-institution mediation mandatory for ordinary commercial money suits. In <em>Yamini Manohar v. T.K.D. Keerthi</em> (2024), the Court clarified that suits genuinely contemplating <strong>urgent interim IPR injunction relief</strong> (such as restraining unauthorized GFC execution or multi-tower copying) can bypass s.12A mediation and seek immediate Order XXXIX relief.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: COA Regulation 2(1)(xii) & RERA/Municipal Protocol */}
            <section
              id="heading-coa-reg"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  COA Regulation 2(1)(xii) &amp; Incoming-Architect NOC Protocol
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Unlike unregulated contractors, registered architects hold a unique statutory shield under the <strong>Architects Act, 1972</strong> and the <strong>Architects (Professional Conduct) Regulations, 1989</strong>. Specifically, <strong>Regulation 2(1)(xii)</strong> prohibits any registered architect from supplanting another architect or accepting a commission for a project previously entrusted to another architect without first informing the outgoing architect in writing and verifying that the prior mandate has been properly terminated.
                </p>
                <p>
                  In commercial real estate projects requiring Municipal Corporation clearances (BMC, DDA, BBMP, PMC, HMDA, GDA) and <strong>RERA Form-1 Architect Certificates</strong> under Section 4(2)(l)(D) of RERA, 2016, a developer cannot legally obtain Commencement Certificates (CC), Plinth Certificates, or Occupancy Certificates (OC) using an unregistered draftsman alone. When your external litigation counsel serves a simultaneous triad—(1) a formal <strong>Reg. 2(1)(xii) Intimation</strong> to any incoming COA architect, (2) a factual <strong>Withdrawal of Design &amp; Site Supervision Responsibility</strong> to the Municipal Town Planning Officer and State RERA, and (3) a <strong>Copyright &amp; Fee Demand Notice</strong> to the developer—every compliant replacement architect refuses to sign until your unpaid stage fees are cleared.
                </p>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                <strong className="font-extrabold text-emerald-800 block mb-1">
                  Council-Ethics-Safe Recovery Guardrail:
                </strong>
                Never publicly defame a client, falsify portal status, or withhold emergency life-safety structural data already paid for. Having external litigation advocates issue all statutory demands, COA Reg. 2(1)(xii) notices, and municipal supervision withdrawals protects your COA standing while restoring full negotiating dignity.
              </div>
            </section>

            {/* Section 4: 5-Stage Recovery Flowchart (SVG + Mobile Cards) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  5-Stage Architectural Fee &amp; Drawing Copyright Recovery Flowchart
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Follow this strict chronological escalation sequence the moment a developer or HNI client freezes stage invoices after taking Municipal Sanction or GFC drawings:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-950 rounded-2xl p-5 border border-slate-800">
                <svg
                  width="960"
                  height="380"
                  viewBox="0 0 960 380"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-stage architectural fee and GFC drawing copyright recovery decision flowchart"
                >
                  <defs>
                    <marker
                      id="arch-arrow"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#EF4444" />
                    </marker>
                  </defs>

                  {/* Top Row: Stages 1, 2, 3 */}
                  <rect x="20" y="25" width="280" height="135" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="20" y="25" width="280" height="30" rx="14" fill="#DC2626" />
                  <text x="36" y="45" fill="#FFFFFF" fontSize="12" fontWeight="800">STAGE 1 · DAY 1–3: LOCK IP &amp; EVIDENCE</text>
                  <text x="36" y="78" fill="#F8FAFC" fontSize="12" fontWeight="700">Freeze Native .DWG / .RVT Files</text>
                  <text x="36" y="98" fill="#CBD5E1" fontSize="11">Archive transmittal registers, AutoDCR</text>
                  <text x="36" y="114" fill="#CBD5E1" fontSize="11">uploads &amp; stage sign-offs under BSA s.63.</text>
                  <text x="36" y="136" fill="#34D399" fontSize="10.5" fontWeight="700">Preserve pre-construction timestamps</text>

                  <line x1="300" y1="92" x2="335" y2="92" stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#arch-arrow)" />

                  <rect x="340" y="25" width="280" height="135" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="340" y="25" width="280" height="30" rx="14" fill="#DC2626" />
                  <text x="356" y="45" fill="#FFFFFF" fontSize="12" fontWeight="800">STAGE 2 · DAY 4–7: ADVOCATE NOTICE</text>
                  <text x="356" y="78" fill="#F8FAFC" fontSize="12" fontWeight="700">Revoke Construction License (s.51)</text>
                  <text x="356" y="98" fill="#CBD5E1" fontSize="11">15-day RPAD + Email + WhatsApp demand</text>
                  <text x="356" y="114" fill="#CBD5E1" fontSize="11">citing Copyright s.13/17 &amp; IT s.43B(h).</text>
                  <text x="356" y="136" fill="#FBBF24" fontSize="10.5" fontWeight="700">Copy CFO, Promoter &amp; Statutory Auditor</text>

                  <line x1="620" y1="92" x2="655" y2="92" stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#arch-arrow)" />

                  <rect x="660" y="25" width="280" height="135" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="660" y="25" width="280" height="30" rx="14" fill="#DC2626" />
                  <text x="676" y="45" fill="#FFFFFF" fontSize="12" fontWeight="800">STAGE 3 · DAY 8–14: COA &amp; RERA SHIELD</text>
                  <text x="676" y="78" fill="#F8FAFC" fontSize="12" fontWeight="700">Reg. 2(1)(xii) &amp; Supervision Exit</text>
                  <text x="676" y="98" fill="#CBD5E1" fontSize="11">Serve formal written notice to incoming</text>
                  <text x="676" y="114" fill="#CBD5E1" fontSize="11">COA architect + Municipal / RERA office.</text>
                  <text x="676" y="136" fill="#34D399" fontSize="10.5" fontWeight="700">Blocks unauthorized CC / Form-1 sign-off</text>

                  {/* Connector down */}
                  <path d="M 800 160 L 800 192 L 240 192 L 240 218" fill="none" stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#arch-arrow)" />

                  {/* Bottom Row: Stages 4 & 5 */}
                  <rect x="80" y="222" width="380" height="135" rx="14" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <rect x="80" y="222" width="380" height="30" rx="14" fill="#B45309" />
                  <text x="96" y="242" fill="#FFFFFF" fontSize="12" fontWeight="800">STAGE 4 · URGENT PRE-PLINTH IPR INJUNCTION</text>
                  <text x="96" y="275" fill="#F8FAFC" fontSize="12" fontWeight="700">Commercial Court s.2(1)(c)(xvii) + Order XXXIX</text>
                  <text x="96" y="295" fill="#CBD5E1" fontSize="11">Bypass s.12A mediation (Yamini Manohar) if builder is</text>
                  <text x="96" y="311" fill="#CBD5E1" fontSize="11">about to excavate or replicate drawings on new phases.</text>
                  <text x="96" y="335" fill="#FBBF24" fontSize="10.5" fontWeight="700">Beat Copyright Act s.59(1) post-commencement bar</text>

                  <line x1="460" y1="290" x2="500" y2="290" stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#arch-arrow)" />

                  <rect x="505" y="222" width="380" height="135" rx="14" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <rect x="505" y="222" width="380" height="30" rx="14" fill="#047857" />
                  <text x="521" y="242" fill="#FFFFFF" fontSize="12" fontWeight="800">STAGE 5 · PARALLEL FEE &amp; INTEREST RECOVERY</text>
                  <text x="521" y="275" fill="#F8FAFC" fontSize="12" fontWeight="700">MSEFC (3x RBI) · Order XXXVII · NI Act s.138</text>
                  <text x="521" y="295" fill="#CBD5E1" fontSize="11">Claim 100% certified stage bills + extra redesign fees</text>
                  <text x="521" y="311" fill="#CBD5E1" fontSize="11">(Contract Act s.70) + Copyright s.55 licensing damages.</text>
                  <text x="521" y="335" fill="#34D399" fontSize="10.5" fontWeight="700">Enforce full ledger + costs + statutory interest</text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    stage: "Stage 1 · Days 1–3",
                    title: "Lock Native CAD/BIM Files & Archive BSA s.63 Evidence",
                    desc: "Hold editable .dwg/.rvt files; preserve AutoDCR uploads, drawing transmittal logs, and client approvals.",
                  },
                  {
                    stage: "Stage 2 · Days 4–7",
                    title: "Serve Advocate Copyright Revocation & Fee Demand Notice",
                    desc: "Dispatch 15-day RPAD + Email + WhatsApp notice revoking unpaid GFC license and flagging s.43B(h) tax impact.",
                  },
                  {
                    stage: "Stage 3 · Days 8–14",
                    title: "COA Reg. 2(1)(xii) Intimation & Municipal/RERA Supervision Exit",
                    desc: "Put any replacement COA architect on formal misconduct notice and withdraw statutory site supervision.",
                  },
                  {
                    stage: "Stage 4 · Urgent IPR Track",
                    title: "Commercial Court s.2(1)(c)(xvii) Pre-Plinth Injunction",
                    desc: "Seek urgent Order XXXIX injunction before construction starts to beat Copyright Act s.59(1) limits.",
                  },
                  {
                    stage: "Stage 5 · Parallel Recovery",
                    title: "MSEFC Samadhaan, Order XXXVII Suit or NI Act s.138",
                    desc: "Enforce certified stage fees, extra redesign quantum meruit (s.70), s.55 damages, and 3x RBI compound interest.",
                  },
                ].map((item) => (
                  <div key={item.stage} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="text-[11px] font-mono font-extrabold uppercase text-[#DC2626]">
                      {item.stage}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Statutory Remedy Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Statutory Matrix: Stage Fees, Copyright &amp; Municipal Remedies
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold">Legal Remedy / Track</th>
                      <th className="py-3 px-4 font-bold">Governing Statute</th>
                      <th className="py-3 px-4 font-bold">Best Trigger Scenario</th>
                      <th className="py-3 px-4 font-bold">Commercial Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">IPR Injunction &amp; Damages Suit</td>
                      <td className="py-3 px-4 font-mono text-xs">Copyright Act ss.13, 17, 51, 55, 57 + Commercial Courts s.2(1)(c)(xvii)</td>
                      <td className="py-3 px-4 text-slate-700">Builder using unpaid GFC/BIM drawings or replicating design on Phase 2</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Pre-plinth stay, delivery-up of drawings, licensing damages</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">COA Incoming-Architect Bar</td>
                      <td className="py-3 px-4 font-mono text-xs">Architects Act s.30 + Professional Conduct Reg. 2(1)(xii)</td>
                      <td className="py-3 px-4 text-slate-700">Developer appoints 2nd COA architect without your NOC / fee settlement</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Deters replacement architect via COA disciplinary risk</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">Municipal / RERA Supervision Exit</td>
                      <td className="py-3 px-4 font-mono text-xs">Local Building Bye-Laws + RERA Act s.4(2)(l)(D) Form-1</td>
                      <td className="py-3 px-4 text-slate-700">Sanctioned plan misused after unpaid termination</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Shields your liability &amp; stalls Plinth / OC / RERA draws</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">MSME Samadhaan + s.43B(h)</td>
                      <td className="py-3 px-4 font-mono text-xs">MSMED Act ss.15–18, 24 + Income Tax Act s.43B(h)</td>
                      <td className="py-3 px-4 text-slate-700">Udyam studio (NIC 7110/7410) unpaid &gt;45 days by corporate builder</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">3x RBI monthly compound interest + 25.17% buyer tax shock</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">Summary Recovery Suit</td>
                      <td className="py-3 px-4 font-mono text-xs">Order XXXVII CPC + Indian Contract Act ss.70 &amp; 73</td>
                      <td className="py-3 px-4 text-slate-700">Signed fee agreement, accepted stage bills or HNI villa client</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Fast-track decree without automatic leave to defend</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-slate-900">Cheque Bounce Prosecution</td>
                      <td className="py-3 px-4 font-mono text-xs">NI Act, 1881 ss.138, 141 &amp; 143A</td>
                      <td className="py-3 px-4 text-slate-700">Stage fee or mobilization cheque dishonoured</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Criminal summons to Directors + 20% interim deposit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Interactive 4-Scenario Explorer */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  4 Architectural &amp; Interior Fee Default Scenarios: Legal Playbooks
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Select the exact commercial bypass your studio is facing to inspect the statutory counter-strike and 3-step recovery protocol:
              </p>

              <ArchitectRecoveryScenarioTabs />
            </section>

            {/* Section 7: Worked Financial & s.43B(h) Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Worked ₹42.5L Fee Ledger: Sanction, GFC &amp; s.43B(h) Tax Impact
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider an Udyam-registered Small architectural partnership (NIC 7110) mandated on a 2.5 lakh sq. ft. residential tower in Pune/NCR at a total professional fee of <strong>₹80.00 lakh</strong> (+ 18% GST). The developer paid ₹20 lakh across Concept &amp; Preliminary stages, received Municipal Sanction and full Working/GFC drawings (cumulative 75% milestone = ₹60 lakh), and abruptly stopped payments—leaving <strong>₹40.00 lakh</strong> unpaid principal (plus ₹2.50 lakh approved FSI redesign extra = <strong>₹42.50 lakh</strong> taxable arrears) overdue by 180 days past the 45-day MSME ceiling:
              </p>

              <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                    Illustrative Architectural Recovery &amp; Corporate Tax Leverage Computation
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                    Udyam Small Studio &middot; 180 Days Overdue
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Certified Sanction &amp; GFC Stage Balance</span>
                      <span className="font-mono font-bold text-white">&#8377;40,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Documented Post-Approval FSI Redesign (s.70)</span>
                      <span className="font-mono font-bold text-white">&#8377;2,50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">18% GST Already Remitted (GSTR-1 Filed)</span>
                      <span className="font-mono font-bold text-amber-300">&#8377;7,65,000</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-700 pt-2">
                      <span className="font-bold text-slate-100">Total Unpaid Invoice Value</span>
                      <span className="font-mono font-black text-emerald-400">&#8377;50,15,000</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">MSMED s.16 Interest (~19.5% p.a. Monthly Comp., 6 mo)</span>
                      <span className="font-mono font-bold text-emerald-400">&#8377;5,10,900*</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Developer Extra Corporate Tax (s.43B(h) @ 25.17%)</span>
                      <span className="font-mono font-bold text-red-400">&#8377;10,69,725</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">CGST s.16(2) 180-Day ITC Reversal Exposure</span>
                      <span className="font-mono font-bold text-amber-300">&#8377;7,65,000</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-700 pt-2">
                      <span className="font-bold text-slate-100">Total Claim + Compliance Pressure</span>
                      <span className="font-mono font-black text-white">&#8377;55.26L + &#8377;18.35L Tax Hit</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  *Illustrative computation assuming RBI Bank Rate 6.50% (3x = 19.50% p.a. compounded monthly under MSMED s.16) on ₹50.15L invoice value; verify exact live RBI rate and day-count using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-300 underline hover:text-white font-semibold"
                  >
                    MSME 3x RBI Compound Interest Calculator
                  </Link>
                  . Additional Section 55 Copyright licensing damages apply separately where unauthorized construction proceeds.
                </p>
              </div>
            </section>

            {/* Section 8: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  CAD/BIM Metadata, Transmittals &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Before issuing your Advocate Notice or filing a Commercial IPR / Order XXXVII suit, assemble this 4-quadrant evidentiary file so the developer cannot raise a sham &ldquo;incomplete drawings&rdquo; defense:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Mandate, COA Credentials & Fee Schedule",
                    items: [
                      "Signed Architectural / Interior Fee Proposal or Letter of Appointment specifying COA stage %",
                      "Valid Council of Architecture (COA) Registration Certificate & Udyam Certificate (NIC 7110/7410)",
                      "Explicit Copyright Reservation clause on title blocks ('All drawings are copyright property of Studio')",
                    ],
                  },
                  {
                    title: "2. Drawing Transmittals & Municipal Sanction Proof",
                    items: [
                      "Chronological Drawing Issue Register showing Concept, Sanction, Tender & GFC sheet numbers",
                      "Municipal AutoDCR / Town Planning submission receipts & approved Sanction Plan bearing your stamp",
                      "RERA portal project architect appointment confirmation & structural/MEP consultant coordination emails",
                    ],
                  },
                  {
                    title: "3. Infringement & Site Execution Proof",
                    items: [
                      "Timestamped site photographs / drone images showing construction matching your GFC elevations/layouts",
                      "RERA marketing brochures, sales floor plans, or 3D renders published by developer using your IP",
                      "Copy of municipal change-of-architect filing or incoming architect's communication (for Reg. 2(1)(xii))",
                    ],
                  },
                  {
                    title: "4. Accounting, GST & BSA 2023 s.63 Electronic Dossier",
                    items: [
                      "Stage-wise GST Tax Invoices, GSTR-1 filings, and proof buyer availed GSTR-2B ITC without dispute",
                      "Native AutoCAD (.dwg) / Revit (.rvt) / BIM360 creation timestamps & revision audit logs",
                      "Exported WhatsApp & email client approvals backed by a signed BSA 2023 Section 63 Certificate",
                    ],
                  },
                ].map((quad) => (
                  <div
                    key={quad.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{quad.title}</h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {quad.items.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span className="text-[#DC2626] font-bold mt-0.5">&#10003;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Dual-Track B2B Conversion CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Launch a ₹999 Architect Fee Notice or Multi-Project Studio Desk
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Protect your firm&apos;s drawings, COA standing, and earned stage fees through external litigation counsel—choose single-project enforcement or a dedicated multi-project practice desk:
              </p>

              <ArchitectRecoveryCTA />
            </section>

            {/* Section 10: Hub, Tools, Templates & Sibling IND-23 Guides */}
            <section
              id="heading-related"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Professional Fee Hub, Calculators &amp; Sibling IND-23 Playbooks
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  {
                    label: "CA, Architects, Engineers & Advisory Fee Recovery Hub",
                    href: "/industries/ca-architects-consultants-professional-fee-recovery",
                    tag: "IND-23 Parent Hub",
                  },
                  {
                    label: "Consultancy & Professional Retainer Fee Recovery Guide",
                    href: "/recovery/consultancy-fees",
                    tag: "Live Seed Guide",
                  },
                  {
                    label: "Copyright Not Transferred Until Paid (IP Ownership Law)",
                    href: "/copyright-not-transferred-until-paid-freelancer",
                    tag: "IP Law Seed",
                  },
                  {
                    label: "Order XXXVII CPC Summary Suit for Written Fee Contracts",
                    href: "/law/order-37-summary-suit-money-recovery",
                    tag: "Summary Suit",
                  },
                  {
                    label: "MSME Delayed Payment 3x RBI Compound Interest Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    tag: "T1 Calculator",
                  },
                  {
                    label: "Construction Retention & Milestone Claim Calculator",
                    href: "/tools/construction-retention-dlp-escalation-claim-calculator",
                    tag: "T1 Calculator",
                  },
                  {
                    label: "Retainer & Copyright Takedown Legal Notice Workspace",
                    href: "/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice",
                    tag: "P1 Template",
                  },
                  {
                    label: "Construction RA Bill & Arbitration Notice Template",
                    href: "/templates/construction-ra-bill-retention-money-arbitration-notice",
                    tag: "P1 Template",
                  },
                  {
                    label: "CA Unpaid Audit, Tax & Retainer Fee Recovery (ICAI NOC)",
                    href: "/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc",
                    tag: "IND-23 Sibling",
                  },
                  {
                    label: "Structural, MEP, PMC & Geotechnical Consultant Bill Recovery",
                    href: "/structural-mep-pmc-geotechnical-engineering-consultant-bill-recovery",
                    tag: "IND-23 Sibling",
                  },
                  {
                    label: "Investment Banker & DSA Mandate Success-Fee Circumvention",
                    href: "/investment-banker-debt-syndication-dsa-mandate-success-fee-circumvention",
                    tag: "IND-23 Sibling",
                  },
                  {
                    label: "Bulk B2B Recovery Desk (10 to 10,000+ Overdue Accounts)",
                    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                    tag: "Institutional CSV",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between gap-2 p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="font-semibold text-slate-900">{item.label}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                      {item.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  FAQs: Architectural Stage Fees, COA Reg. 2(1)(xii) &amp; Copyright
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl p-4 open:bg-slate-50 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] text-lg font-black shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Primary Statutory Authorities, COA Regulations &amp; Court Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&rsaquo;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-slate-500">
                <span>
                  Authored &amp; Vetted by{" "}
                  <strong className="text-slate-800">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                </span>
                <span>Updated: 19 November 2026 &middot; IND-23 / B2B-263</span>
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
