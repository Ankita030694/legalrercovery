import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CopyrightFreelancerNoticeCTA from "./CopyrightFreelancerNoticeCTA";
import CopyrightFreelancerTableOfContents from "./CopyrightFreelancerTableOfContents";
import CopyrightFreelancerScenarioTabs from "./CopyrightFreelancerScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Client Didn't Pay? Your Copyright May Not Have Transferred",
  description:
    "Under the Copyright Act, assignment terms and payment matter. How unpaid designers, writers and developers can use copyright to get paid.",
  alternates: {
    canonical: `${SITE_URL}/copyright-not-transferred-until-paid-freelancer`,
  },
  openGraph: {
    title: "Unpaid Freelancer? How Section 17 & 19 Copyright Law Forces Clients to Pay",
    description:
      "Statutory guide for Indian freelancers, designers, software developers, and creators on using Section 17 first ownership and Section 19 copyright assignment rules to recover unpaid invoices.",
    url: `${SITE_URL}/copyright-not-transferred-until-paid-freelancer`,
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
    title: "The Copyright Act, 1957 (Act No. 14 of 1957) — Section 17 (First Owner of Copyright), Section 18 & Section 19 (Mode of Assignment), Section 51 (Infringement), Section 55 (Civil Remedies) & Section 57 (Author's Special Rights)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Pine Labs Pvt. Ltd. v. Gemalto Terminals India Pvt. Ltd. & Ors., FAO (OS) 635/2009, 2011 SCC OnLine Del 3186 — Delhi High Court Division Bench on Independent Contractor Software Ownership & Section 19(5)/(6)",
    url: "https://indiankanoon.org/doc/148622854/",
  },
  {
    title: "Gee Pee Films Pvt. Ltd. v. Pratik Chowdhury & Ors., 2001 SCC OnLine Cal 547 / (2002) 24 PTC 392 — Calcutta High Court on Contract FOR Service vs Contract OF Service under Section 17",
    url: "https://indiankanoon.org/doc/1467812/",
  },
  {
    title: "Amar Nath Sehgal v. Union of India, 2005 (30) PTC 253 (Del) — Delhi High Court on Author's Moral Rights under Section 57 of the Copyright Act",
    url: "https://indiankanoon.org/doc/1990693/",
  },
  {
    title: "The Indian Contract Act, 1872 — Section 10 (Valid Agreements), Section 39 (Refusal to Perform Promise), Section 70 (Quantum Meruit) & Section 73 (Damages for Breach)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Sections 15 & 16 (45-Day Payment Rule & 3x RBI Bank Rate Compound Interest for Udyam-Registered Freelancers)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 — Rule 3(1)(d) & Section 79(3)(b) IT Act, 2000 (Platform Takedown of Copyright-Infringing Content)",
    url: "https://www.meity.gov.in/content/information-technology-intermediary-guidelines-and-digital-media-ethics-code-rules-2021",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records: Figma Logs, Git Commits, WhatsApp Chats & Email Trails)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const CASE_CITATIONS = [
  {
    title: "Independent Software Contractor Retains Ownership Absent Explicit Section 19 Assignment",
    parties: "Pine Labs Pvt. Ltd. v. Gemalto Terminals India Pvt. Ltd. & Ors.",
    citation: "FAO (OS) 635/2009, 2011 SCC OnLine Del 3186 (Division Bench, Delhi High Court)",
    date: "Judgment Dated 03 August 2011",
    facts:
      "Pine Labs, an independent software vendor, was commissioned to develop custom software for a fleet card program. A commercial dispute arose over whether full copyright in the source code and software vested automatically in the commissioning client or remained with the developer, and whether an undated/unspecified assignment clause transferred perpetual worldwide rights.",
    holding:
      "The Division Bench of the Delhi High Court held that an independent developer or agency working under a 'contract for service' (and not as a salaried employee under a 'contract of service' under Section 17(c)) is the statutory first owner of copyright under Section 17 of the Copyright Act, 1957. Furthermore, where an agreement fails to specify the exact duration and territorial extent of assignment, Sections 19(5) and 19(6) mandatorily cap any assignment to 5 years and within India.",
    amount: "Section 17 First Ownership & Section 19(5)/(6) Statutory Reversion Affirmed",
    takeaway:
      "If you develop code, web applications, or digital products as an independent freelancer or studio, your client does not automatically become the first owner of copyright. Without a compliant written assignment and paid consideration under Section 19, ownership stays with you.",
  },
  {
    title: "Commissioning Work Does Not Make the Client the First Owner Under Section 17(c)",
    parties: "Gee Pee Films Pvt. Ltd. v. Pratik Chowdhury & Ors.",
    citation: "G.A. No. 2756 of 2001 / C.S. No. 356 of 2001, (2002) 24 PTC 392 (Calcutta High Court)",
    date: "Judgment Dated 23 August 2001",
    facts:
      "A production company commissioned independent creators to write lyrics and compose musical works, paying advance sums and bearing production costs. When a dispute arose, the company claimed it was the first owner of copyright under Section 17(b) and 17(c) merely because it commissioned and financed the project.",
    holding:
      "The Calcutta High Court dismissed the commissioning party's claim, ruling that Section 17 Proviso (b) is strictly restricted to photographs, paintings, portraits, engravings, and cinematograph films—it does not cover literary, musical, dramatic, or general artistic/software works. Moreover, Section 17(c) applies strictly to master-servant employment ('contract of service'), not independent freelancers ('contract for service'). Absent a written assignment under Section 19, copyright remained with the creators.",
    amount: "Injunction Refused Against Creators; Freelancer Ownership Upheld",
    takeaway:
      "Clients frequently claim 'we paid the advance and briefed you, so it is work-for-hire.' Under Indian law, 'work-for-hire' does not automatically apply to independent freelancers outside narrow Section 17(b) categories—and never without full payment and a signed Section 19 instrument.",
  },
  {
    title: "Strict Compliance With Section 19 Writing & Consideration Mandate Is Non-Negotiable",
    parties: "Saregama India Ltd. v. Suresh Jindal & Ors.",
    citation: "2005 SCC OnLine Cal 609 / AIR 2006 Cal 340 (Calcutta High Court)",
    date: "Judgment Dated 16 December 2005",
    facts:
      "In a commercial dispute over copyright transfer and exploitation rights in creative works, the court examined whether informal correspondence or unfulfilled consideration terms could constitute a valid, irrevocable assignment of copyright against the creator.",
    holding:
      "The High Court held that Section 19 of the Copyright Act, 1957 is couched in mandatory negative language ('No assignment of the copyright in any work shall be valid unless...'). Any purported transfer must be in writing, signed by the assignor, clearly identify the work and rights assigned, and specify the royalty or consideration payable under Section 19(3). Ambiguous clauses or failure to pay consideration defeat the assignee's claim to title.",
    amount: "Mandatory Section 19(1) & 19(3) Assignment Standard Enforced",
    takeaway:
      "When a client ghosts on your final invoice, Section 19(1) and Section 19(3) prevent them from claiming valid title to your work. Even if you emailed the final files, handing over a digital file is not a signed written assignment of copyright.",
  },
  {
    title: "Creator's Moral Rights of Attribution and Integrity Survive Under Section 57",
    parties: "Amar Nath Sehgal v. Union of India",
    citation: "2005 (30) PTC 253 (Del) / 117 (2005) DLT 717 (Delhi High Court)",
    date: "Judgment Dated 21 February 2005",
    facts:
      "An artist was commissioned to create a massive bronze sculpture mural. Years later, the commissioning client dismantled and damaged the artwork without informing or obtaining consent from the creator, arguing that having commissioned the work, it could deal with it as it pleased.",
    holding:
      "The Delhi High Court held that under Section 57 of the Copyright Act, 1957, the author's special moral rights—the right to claim authorship (paternity) and the right to restrain distortion, mutilation, or modification prejudicial to honour or reputation—are independent of economic copyright and survive even after assignment. The Court awarded ₹5,00,000 in damages and vested the physical remnants back in the creator.",
    amount: "₹5,00,000 Damages Awarded + Return of Work Under Section 57",
    takeaway:
      "If an unpaid client strips your creator credit, removes your watermark, or hands your unfinished source files to a cheap replacement vendor who mutilates your design or code, you have an independent statutory cause of action under Section 57.",
  },
];

const FAQS = [
  {
    question: "Who owns the copyright in freelance work in India if there is no written contract?",
    answer:
      "The freelancer owns 100% of the copyright. Under Section 17 of the Indian Copyright Act, 1957, the author (creator) of a literary, artistic, musical, or dramatic work—including software code, UI/UX designs, logos, copywriting, and illustrations—is the statutory first owner of copyright. Because a freelancer works under a 'contract for service' (independent contractor) rather than a salaried 'contract of service' (employment under Section 17(c)), and because Section 19(1) states that no copyright assignment is valid unless signed in writing by the creator, the absence of a written contract guarantees that copyright has never transferred to your client.",
  },
  {
    question: "Can a client legally use my graphic design, website code, or content without paying my final invoice?",
    answer:
      "No. Under Section 19(3) of the Copyright Act, 1957, a valid assignment must specify the consideration payable to the author. When you share drafts, staging links, or final files during a project, the client at best holds a conditional implied licence to review the work, strictly contingent upon full payment of your agreed fee. Once the client defaults or refuses to pay your invoice, you can formally revoke that implied licence via a legal notice. Any continued commercial display or deployment thereafter constitutes actionable copyright infringement under Section 51.",
  },
  {
    question: "What does Section 19 of the Copyright Act require for a valid copyright transfer?",
    answer:
      "Section 19 lays down four mandatory statutory conditions for any copyright assignment in India: (1) Under Section 19(1), it must be in writing and signed by the assignor (the creator) or their authorised agent; (2) Under Section 19(2), it must identify the specific work and specify the exact rights assigned, duration, and territorial extent; (3) Under Section 19(3), it must specify the amount of royalty or consideration payable; and (4) Under Sections 19(5) and 19(6), if duration or territory are omitted, the transfer is statutorily limited to 5 years and restricted to India.",
  },
  {
    question: "Can I send a DMCA or copyright takedown notice to Instagram, YouTube, Shopify, or Google if a client hasn't paid?",
    answer:
      "Yes, provided you are the statutory copyright owner (no unconditional written assignment was signed transferring title prior to payment). Under Section 51 of the Copyright Act read with Section 79(3)(b) of the Information Technology Act, 2000 and Rule 3(1)(d) of the IT (Intermediary Guidelines) Rules, 2021, digital platforms, web hosts, and app stores are required to disable access to infringing content upon receiving a formal infringement notice. In practice, serving the client with an advocate Cease-and-Desist & Payment Demand Notice attaching a ready-to-file takedown draft compels rapid settlement because businesses cannot afford to have their live website or ad account suspended.",
  },
  {
    question: "What if my freelance contract has a 'work-for-hire' or IP assignment clause, but the client didn't pay?",
    answer:
      "If your contract states that intellectual property transfers 'upon full and final payment of all invoices,' copyright has not passed at all until the last rupee is paid. Even if a client-drafted agreement contains an immediate assignment clause, non-payment of the agreed consideration constitutes a fundamental breach under Sections 39 and 51–54 of the Indian Contract Act, 1872, and entitles you to seek revocation of assignment under Section 19A of the Copyright Act alongside suit recovery for the unpaid invoice.",
  },
  {
    question: "Is copyright infringement by an unpaid client a criminal offence in India?",
    answer:
      "Yes. Under Section 63 of the Copyright Act, 1957, any person who knowingly infringes or abets the infringement of the copyright in a work commits a cognizable, non-bailable offence punishable with imprisonment for 6 months to 3 years and a fine between ₹50,000 and ₹2,00,000. Once a formal advocate Cease-and-Desist Notice informs the client that their licence is revoked for non-payment and that copyright vests in you under Sections 17 and 19, any continued commercial exploitation becomes 'knowing infringement.'",
  },
  {
    question: "Client bina payment kiye mera freelance design ya video use kar raha hai toh legal notice kaise bheje?",
    answer:
      "Agar client aapka final payment roke hue hai aur aapka banaya logo, website code, graphic design ya video social media/website par use kar raha hai, toh Copyright Act 1957 ki Section 17 aur 19 ke tehat us kaam ka malikana haq (copyright) aapke paas hi rehta hai. LegalRecovery.in ke madhyam se verified advocate client ko 'Cease-and-Desist cum Payment Demand Notice' Speed Post, Email aur WhatsApp par bhejte hain—jismein 7 se 15 din mein payment na karne par copyright infringement (Section 51/63) aur platform takedown ki kanooni chetawani di jati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Unpaid Freelancer? Use Copyright Law as Leverage",
  description:
    "Under the Copyright Act, assignment terms and payment matter. How unpaid designers, writers and developers can use copyright to get paid.",
  datePublished: "2026-11-04T11:30:00+05:30",
  dateModified: "2026-11-04T11:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/copyright-not-transferred-until-paid-freelancer`,
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
    name: "Section 17 and Section 19 Copyright Act 1957 Freelancer Payment Recovery",
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
      name: "Freelancer Payment Recovery",
      item: `${SITE_URL}/freelancer-payment-recovery-legal-options-india`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Copyright Leverage for Unpaid Freelancers (s.19)",
      item: `${SITE_URL}/copyright-not-transferred-until-paid-freelancer`,
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

export default function CopyrightNotTransferredFreelancerPage() {
  const breadcrumbItems = [
    { label: "Freelancer Payment Recovery", href: "/freelancer-payment-recovery-legal-options-india" },
    { label: "Copyright Leverage (s.19)", href: "/copyright-not-transferred-until-paid-freelancer" },
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
        {/* Hero Section strictly matching irctc & cheque-bounce-case-against-company-directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Sections 17, 19 &amp; 51 Copyright Act, 1957</span>
              <span className="text-red-500">•</span>
              <span>Freelancer &amp; Creator IP Leverage Guide</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Unpaid Freelancer? Use Copyright Law as Leverage
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Sections 17, 19 &amp; 51 Copyright Act, 1957)
              </p>
              <p>
                Under Section 17 of the Copyright Act, 1957, independent freelancers (working under a contract <em>for</em> service) are the first owners of copyright in their designs, code, writing, and creatives. Under Section 19(1) and 19(3), copyright never transfers to a client without a signed written assignment and paid consideration. If a client uses your work without paying, serve a Cease-and-Desist cum Demand Notice to revoke their licence, trigger platform takedowns, and recover 100% of your invoice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 17 &amp; 19</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Creator Owns Unpaid Work</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Writing Only</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">No Oral IP Transfer (s.19(1))</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">36 Hours</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">IT Rules Platform Takedown Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Sec 51 / 63</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Civil &amp; Criminal Infringement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Sticky Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar (Archetype G6) */}
            <CopyrightFreelancerTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Deep Statutory Explainer on Section 17 & Section 19 */}
              <section id="heading-section17-19" aria-labelledby="heading-section17-19-title" className="scroll-mt-28 space-y-5">
                <h2
                  id="heading-section17-19-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Clients Do Not Own Your Work Until They Pay
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Yes—under Indian law, delivering final design files, source code, copywriting, or video renders to a client does <strong>not</strong> transfer copyright ownership unless the statutory requirements of Sections 17, 18, and 19 of the Copyright Act, 1957 are satisfied. When a client ghosts on your final milestone invoice and deploys your work on their website, app, or social media ads, they are not merely delaying a commercial bill—they are committing actionable copyright infringement under Section 51 of the Copyright Act.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Most Indian freelancers, graphic designers, software developers, and boutique agencies treat an unpaid invoice purely as a slow civil debt. However, combining traditional debt recovery (<Link href="/freelancer-payment-recovery-legal-options-india" className="text-blue-700 underline font-semibold">freelancer payment recovery legal options in India</Link>) with statutory copyright leverage flips the power dynamic overnight: instead of you chasing the client for money, the client must urgently clear your invoice to prevent their live website, mobile app, packaging, or marketing campaign from being legally taken down.
                </p>

                <div className="grid grid-cols-1 gap-4 pt-2">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      1.1 Section 17 First Ownership: &quot;Contract FOR Service&quot; vs &quot;Contract OF Service&quot;
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under <strong>Section 17 of the Copyright Act, 1957</strong>, the author of a work is the statutory <strong>first owner of the copyright</strong> therein. Clients routinely assume that because they briefed you or paid an initial 25% advance, your output is &quot;work made for hire.&quot; That is a US legal concept that does not apply broadly to Indian freelancers. In India, automatic employer ownership under <strong>Section 17 Proviso (c)</strong> applies only when a work is made in the course of employment under a <em>&quot;contract of service&quot;</em> (a salaried employee on payroll with PF, TDS under Section 192, and disciplinary control). Independent freelancers, consultants, and agencies work under a <em>&quot;contract for service&quot;</em> (where TDS, if any, is deducted under Section 194J or 194C). Therefore, for software code, UI/UX layouts, graphic designs, logos, brand guidelines, articles, scripts, and musical compositions created by a freelancer, the freelancer remains the first owner of copyright.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      1.2 Section 19 Mandatory Conditions: Why Oral or Unpaid Transfers Fail
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      For a client to acquire copyright from an independent freelancer, there must be a valid assignment under <strong>Section 18 and Section 19 of the Copyright Act, 1957</strong>. Section 19 imposes strict statutory safeguards to protect creators:
                    </p>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1.5 pl-1">
                      <li>
                        <strong>Section 19(1) — Signed Written Instrument Mandatory:</strong> <em>&quot;No assignment of the copyright in any work shall be valid unless it is in writing signed by the assignor or by his duly authorised agent.&quot;</em> If you worked on a WhatsApp brief, email thread, or unsigned proposal, zero copyright has transferred to the client.
                      </li>
                      <li>
                        <strong>Section 19(2) &amp; 19(3) — Explicit Rights &amp; Consideration:</strong> The written assignment must identify the work, specify the rights assigned, and state the exact amount of consideration or royalty payable to the author during the currency of the assignment.
                      </li>
                      <li>
                        <strong>Section 19(5) &amp; 19(6) — 5-Year &amp; India-Only Default Cap:</strong> Even if a written contract assigns copyright but fails to mention the duration or territorial scope, the law restricts the assignment to <strong>5 years</strong> (`s.19(5)`) and <strong>within India only</strong> (`s.19(6)`).
                      </li>
                      <li>
                        <strong>Section 19A — Revocation for Non-Payment / Harsh Terms:</strong> Where an assignee fails to pay the agreed consideration or exercise rights according to the terms, the Commercial Court / High Court is empowered to revoke the assignment upon complaint.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      1.3 Conditional Licence Revocation: Turning File Delivery Into Infringement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      What if you already sent the Google Drive folder, Figma link, or GitHub push to the client before they stopped responding? Handing over digital files for review or milestone delivery creates, at most, a revocable, conditional implied licence contingent upon full payment of the agreed fee. Even in the narrow categories under <strong>Section 17 Proviso (b)</strong> (photographs, paintings, portraits, engravings, or cinematograph films made on commission), the statute explicitly states that the work must be made <em>&quot;for valuable consideration.&quot;</em> When the client refuses to pay the consideration, the statutory condition precedent fails, and you can formally revoke permission to use the work by serving a statutory legal notice.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Data Table — Copyright Ownership & Leverage Matrix by Creative Discipline */}
              <section id="heading-discipline-matrix" aria-labelledby="heading-discipline-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-discipline-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Copyright Ownership Matrix by Creative Discipline
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Copyright Act, 1957, different freelance deliverables fall into distinct statutory classifications (`literary`, `artistic`, `musical`, `dramatic`, or `cinematograph` works). Use this table to identify your exact statutory hook and takedown target before sending a legal notice:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[660px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Freelancer Copyright Ownership and Takedown Matrix by Creative Discipline</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Freelance Deliverable</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Copyright Act Category</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">First Owner (No Signed s.19)</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Primary Takedown / Leverage Target</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Logos, Brand Identity, Illustrations &amp; UI/UX Wireframes
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Artistic Work — Sec 2(c) &amp; Sec 14(c)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">Freelancer / Designer (Sec 17)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Website host (Cloudflare/Shopify), Instagram/Meta Ads, App Store listing, Trademark objection</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Website Code, SaaS Software, Mobile Apps &amp; APIs
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Literary Work (Computer Program) — Sec 2(o) &amp; Sec 14(b)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">Freelance Developer (Sec 17; Pine Labs)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">GitHub/GitLab DMCA, AWS/Vercel/DigitalOcean abuse desk, Google Play &amp; Apple App Store</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          SEO Articles, Copywriting, Scripts, Whitepapers &amp; Books
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Literary Work — Sec 2(o) &amp; Sec 14(a)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">Freelance Writer (Sec 17)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Google Search DMCA de-indexing (removes client URL from Google SERPs), CMS/hosting takedown</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Commercial Photography, Product Shoots &amp; Video Reels
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Artistic / Cinematograph Work — Sec 2(f), 2(s) &amp; 17(b)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">Creator Until &quot;Valuable Consideration&quot; Paid</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">YouTube Copyright Strike, Instagram/Meta IP Reporting Portal, Amazon/Myntra listing removal</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Music Production, Jingles, Voiceovers &amp; Sound Design
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">Musical Work / Sound Recording — Sec 2(p), 2(xx) &amp; 17</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-extrabold">Composer / Producer (Sec 17; Gee Pee Films)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Spotify/Apple Music distributor takedown, YouTube Content ID / Strike, Broadcast ad injunction</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Archetype G6 SVG Figure — 5-Stage Copyright Leverage & Recovery Flow */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  5-Stage Escalation Flow for Unpaid Invoices
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Unlike a passive payment reminder that a shameless client can ignore for months, a copyright-backed escalation threatens the client&apos;s live revenue channels at every step:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Client Uses Work Without Paying</h3>
                    <p className="text-xs text-slate-200 mt-1">Invoice overdue; client deploys design, code, or video without a paid Sec 19 assignment.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Lock BSA Sec 63 Evidence</h3>
                    <p className="text-xs text-amber-900 mt-1">Archive native source files (Figma/Git/RAW) + timestamped proof of client&apos;s live commercial use.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">Advocate Cease-and-Desist + Demand</h3>
                    <p className="text-xs text-red-900 mt-1">Revoke implied licence; give 7–15 days to pay invoice or face Sec 51/63 infringement action.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">Platform Takedown &amp; Agency Impleading</h3>
                    <p className="text-xs text-slate-700 mt-1">Serve IT Rules Rule 3(1)(d) / DMCA takedown on host/app store/Meta &amp; notify end-client brand.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Full Invoice Settlement or Suit</h3>
                    <p className="text-xs text-emerald-900 mt-1">Client settles principal + interest to restore IP licence, or face Commercial Court / MSME ODR.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram wrapped in semantic <figure> per Archetype G6 */}
                <figure className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Copyright Leverage Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 265"
                    width="840"
                    height="265"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Freelancer Copyright Leverage and Unpaid Invoice Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="copyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="copyAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="copySucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#copyGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Unpaid Deployment</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Invoice Overdue</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">No Paid s.19 Assignment</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">BSA s.63 Audit</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Lock Native Source</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Screenshot Live Usage</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="url(#copyAlert)" />
                    <text x="420" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Cease &amp; Desist</text>
                    <text x="420" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Revoke Implied Licence</text>
                    <text x="420" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">7–15 Day Cure Demand</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Platform Takedown</text>
                    <text x="590" y="82" fill="#334155" fontSize="10" textAnchor="middle">IT Rules / DMCA Notice</text>
                    <text x="590" y="98" fill="#475569" fontSize="9" textAnchor="middle">Host / Meta / App Store</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#copySucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">100% Settlement</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Invoice Paid + s.19 Sign</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Sec 55 / MSME Suit</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="88" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="168" fill="#0F172A" fontWeight="bold" fontSize="11">WHY COPYRIGHT LEVERAGE OUTPERFORMS ORDINARY PAYMENT REMINDERS:</text>
                    <text x="25" y="190" fill="#475569" fontSize="10">• Statutory First Ownership (Sec 17): Independent creator owns work until a signed written assignment (Sec 19(1)) &amp; full payment (Sec 19(3))</text>
                    <text x="25" y="206" fill="#475569" fontSize="10">• Intermediary Takedown Mandate: Under Rule 3(1)(d) IT Rules 2021 &amp; DMCA, platforms disable infringing URLs/ads upon valid owner notice</text>
                    <text x="25" y="222" fill="#475569" fontSize="10">• Dual Civil &amp; Criminal Exposure: Sec 55 injunction + damages, Sec 63 criminal infringement (up to 3 yrs jail), plus MSME 3x interest</text>
                  </svg>
                  <figcaption className="text-[11px] sm:text-xs text-slate-500 mt-3 pt-2 border-t border-slate-100">
                    Figure 1: Statutory escalation pathway combining Copyright Act Sections 17, 19, and 51 licence revocation with Contract Act / MSMED Act invoice recovery.
                  </figcaption>
                </figure>
              </section>

              {/* Section 4: Landmark High Court Precedents Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    High Court Judgments on Section 19 &amp; Creator Rights
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Records
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
                              Core Legal Rule / Binding Standard
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Across Indian Commercial Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your unpaid invoice:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook + Forum Comparison Table */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook for Copyright Takedowns &amp; Notices
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Never resort to illegal self-help such as defacing a client&apos;s live website or planting malicious code (which could expose you to liability under Section 43/66 of the IT Act). Instead, execute this clean, high-impact statutory escalation protocol that puts the legal risk squarely on the defaulting client:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Verify Your Contract Clause &amp; Section 19 Status
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Check whether you signed any written agreement. If there is no signed contract, Section 19(1) guarantees that copyright never left you. If you signed an agreement with an IP clause, verify whether assignment was conditional upon full payment, or whether the client&apos;s failure to pay the invoice constitutes a repudiatory breach under Section 39 of the Indian Contract Act.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Capture Timestamped Proof of Live Commercial Infringement
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Before alerting the client that you intend to invoke copyright law, record full-page screenshots, URLs, Wayback Machine archives, Meta Ad Library links, or app screens showing the client actively using your unpaid work. Pair this with your dated native creation files (`.fig`, `.psd`, `.ai`, `.prproj`, or Git commit history) and see our full{" "}
                        <Link href="/freelancer-evidence-checklist-payment-recovery-india" className="text-blue-700 underline font-semibold">
                          freelancer evidence checklist for payment recovery
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve an Advocate Cease-and-Desist cum Payment Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Have an advocate serve a formal statutory notice via Registered Speed Post, official email, and WhatsApp. The notice performs three legal acts simultaneously: (a) <strong>revokes any implied licence</strong> to use the delivered files; (b) puts the client and its directors on notice of civil and criminal copyright infringement under <strong>Sections 51, 55, and 63 of the Copyright Act</strong>; and (c) grants a strict 7-to-15-day cure window to pay the full invoice amount (plus 18% commercial interest or 3x RBI compound interest if Udyam-registered) in exchange for a formal Section 19 release. Read our step-by-step guide on{" "}
                        <Link href="/how-freelancer-can-send-legal-notice-to-client-india" className="text-blue-700 underline font-semibold">
                          how a freelancer can send a legal notice to a client in India
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Implead the End-Client Brand &amp; File Platform Takedown Notices
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If an agency or studio hired you to create assets for a larger corporate brand and withheld your payout, serve a copy of the Copyright Cease-and-Desist Notice directly on the <strong>end-client brand&apos;s Legal &amp; Compliance Officer</strong>. No corporate brand will risk an injunction on its product launch because its agency failed to pay a ₹50,000 or ₹3,00,000 creator bill. If the cure period expires unpaid, lodge formal copyright takedowns on Meta, YouTube, Shopify, GitHub, Cloudflare, or Google Search. (For creator brand-deal disputes, also see our guide on{" "}
                        <Link href="/influencer-brand-deal-payment-not-received" className="text-blue-700 underline font-semibold">
                          influencer brand deal payment not received
                        </Link>{" "}
                        and{" "}
                        <Link href="/upwork-fiverr-client-not-paying-india" className="text-blue-700 underline font-semibold">
                          Upwork or Fiverr client not paying in India
                        </Link>.)
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Escalate to MSME ODR, Order 37 Summary Suit, or Commercial Court IP Action
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the client ceases using the work or continues in defiance without paying, escalate to the appropriate statutory forum: file an online delayed-payment reference on the MSME ODR Portal (if you hold Udyam registration—see{" "}
                        <Link href="/msme-act-freelancer-payment-recovery" className="text-blue-700 underline font-semibold">
                          MSME Act freelancer payment recovery
                        </Link>), institute a fast-track summary suit under Order XXXVII CPC for the unpaid invoice, or file a Section 55 copyright infringement &amp; rendition-of-accounts action before the District Court / Commercial Court (where Section 62(2) allows you to sue in the court where <em>you</em> reside or carry on business!).
                      </p>
                    </div>
                  </li>
                </ol>

                {/* Forum & Statutory Benchmarks Table */}
                <div className="pt-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                    Statutory Forum &amp; Jurisdiction Advantage for Unpaid Creators
                  </h3>
                  <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                    <table className="w-full min-w-[600px] text-left text-xs sm:text-sm text-slate-700">
                      <caption className="sr-only">Comparison of Legal Forums for Unpaid Freelancer Copyright and Invoice Recovery</caption>
                      <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                        <tr>
                          <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery / Enforcement Route</th>
                          <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute</th>
                          <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Where Can You File? (Jurisdiction)</th>
                          <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Typical Timeline &amp; Relief</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr className="hover:bg-slate-50/80">
                          <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                            Advocate Cease-and-Desist + Payment Demand Notice
                          </th>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Secs 17, 19, 51 Copyright Act + Sec 73 Contract Act</td>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Pan-India &amp; Overseas (Speed Post + Email)</td>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">7–15 Day Cure Window; highest pre-suit settlement rate</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80">
                          <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                            Intermediary / Platform Copyright Takedown
                          </th>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sec 79(3)(b) IT Act; Rule 3(1)(d) IT Rules 2021; DMCA</td>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Online Grievance Officer / IP Portal</td>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">24h acknowledgment; 36h–14d removal of infringing URL/ad</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80">
                          <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                            Civil Copyright Infringement &amp; Injunction Suit
                          </th>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sections 55 &amp; 62(2) Copyright Act, 1957</td>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Freelancer&apos;s Own Home City Court (Sec 62(2))</td>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Ex-parte interim injunction + damages + rendition of profits</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80">
                          <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                            MSME ODR / MSEFC Reference (Udyam Freelancers)
                          </th>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sections 15, 16 &amp; 18 MSMED Act, 2006</td>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Freelancer&apos;s Location Online (Sec 18(4))</td>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Principal + 3x RBI Bank Rate monthly compound interest</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500 italic mt-2">
                    <strong>Pro Tip on Section 62(2) Copyright Act:</strong> In an ordinary civil money suit, you often have to sue the client where the client resides or where the cause of action arose. Under <strong>Section 62(2) of the Copyright Act, 1957</strong>, a copyright owner has the special statutory privilege to file suit in the District Court where the <strong>creator actually and voluntarily resides or carries on business</strong>—forcing a distant client in Mumbai, Bengaluru, or Delhi to come defend themselves in your hometown court!
                  </p>
                </div>
              </section>

              {/* Section 6: Interactive Scenario Picker */}
              <section id="heading-scenario-picker" aria-labelledby="heading-scenario-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Select Your Unpaid Freelance Scenario: Legal Basis &amp; Tactical Fix
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Choose Your Creative Deliverable or Contract Situation to See the Exact Section 17/19 Remedy
                  </p>
                </div>

                <CopyrightFreelancerScenarioTabs />
              </section>

              {/* Section 7: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Designer Recovers ₹3,40,000 via Notice
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Freelancer Recovery Case Study
                    </span>
                    <span className="text-xs text-slate-400">Pune Independent UI/UX Designer vs Bengaluru FinTech Startup</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Project &amp; Default:</strong> Aarav Kulkarni, an independent product designer based in Pune, was engaged by a Bengaluru-based FinTech startup (KredVance Technologies Pvt. Ltd.) to redesign their 42-screen mobile app UI, custom icon set, and onboarding illustrations for a total fee of ₹4,80,000. The startup paid an initial ₹1,40,000 advance via NEFT based on an email scope proposal, without executing a formal signed copyright assignment deed. After Aarav shared the final Figma design system and exported SVG assets for developer handoff, the startup stopped replying to his final invoice of ₹3,40,000. Three weeks later, KredVance launched the redesigned app on the Google Play Store and Apple App Store and ran paid LinkedIn and Instagram ads featuring Aarav&apos;s illustrations.
                    </p>
                    <p>
                      <strong>The Statutory Strategy:</strong> Instead of sending another polite invoice reminder, Aarav initiated action through LegalRecovery.in. A verified advocate audited the email chain, preserved Section 63 BSA-compliant screenshots of the live Play Store listing and Figma version history, and drafted a composite <strong>Copyright Cease-and-Desist cum Statutory Payment Demand Notice</strong> addressed to KredVance Technologies Pvt. Ltd. and its two co-founder directors.
                    </p>
                    <p>
                      <strong>The Legal Leverage Applied:</strong> The notice cited: (1) <strong>Section 17 of the Copyright Act, 1957</strong> and <em>Pine Labs v. Gemalto</em> (2011 Del HC), establishing that Aarav was the statutory first owner of all artistic works and UI layouts; (2) <strong>Section 19(1) &amp; 19(3)</strong>, proving that zero copyright had transferred due to the absence of a signed assignment and non-payment of ₹3,40,000 consideration; (3) immediate revocation of any implied licence; (4) warning of a <strong>Section 62(2)</strong> infringement suit in Pune District Court alongside a <strong>Google Play Store &amp; Apple App Store copyright takedown</strong> if dues were not cleared within 7 calendar days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome (Settled in 6 Days):</strong>
                      Because the startup was in the middle of a seed-funding due diligence round and could not afford an IP infringement cloud or an App Store takedown of its flagship product, KredVance&apos;s legal counsel contacted Aarav&apos;s advocate on Day 4. On Day 6, the startup wired the entire ₹3,40,000 principal plus ₹15,000 towards legal notice and delay costs via RTGS, upon which Aarav executed a formal Section 19 copyright assignment deed.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Evidence Checklist + Archetype G6 Key Takeaways Box (<aside>) + Honest Scope */}
              <section id="heading-evidence-takeaways" aria-labelledby="heading-evidence-takeaways-title" className="scroll-mt-28 space-y-6">
                <h2
                  id="heading-evidence-takeaways-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidence Checklist &amp; Key Takeaways for Unpaid Creators
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Before serving a Copyright Cease-and-Desist &amp; Payment Demand Notice, assemble these 6 digital records admissible under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Native Creation &amp; Source Files:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Dated `.fig`, `.ai`, `.psd`, `.prproj`, `.blend` files, RAW camera EXIF metadata, or local Git commit logs proving authorship.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Timestamped Proof of Client&apos;s Commercial Use:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Full-screen recordings and URLs of the client&apos;s live website, app store page, Meta/YouTube ads, or printed packaging.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Scope Proposal, Contract &amp; Email/WhatsApp Trail:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">All messages showing fee agreement, delivery handoff, client approval (&quot;looks great!&quot;), and subsequent ghosting.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Unpaid Invoices &amp; Part-Payment Bank/UPI Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proforma/GST invoices, advance payment UTRs, and Form 26AS / AIS if the client deducted TDS under Sec 194J/194C without paying.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Client Corporate &amp; End-Brand Details:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Company CIN/GSTIN, registered office address, director names, and (if subcontracted via an agency) the end-brand&apos;s details.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Udyam Registration Certificate (If Applicable):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Enables claiming 3x RBI Bank Rate monthly compound interest under Section 16 MSMED Act and Section 43B(h) tax disallowance.</p>
                    </div>
                  </div>
                </div>

                {/* Archetype G6 Mandatory Element: Key Takeaways Box (<aside>) */}
                <aside
                  aria-label="Key Takeaways on Freelancer Copyright Leverage"
                  className="bg-amber-50/90 border-l-4 border-amber-600 rounded-r-2xl p-5 sm:p-6 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-amber-950 tracking-tight">
                      Key Takeaways: 5 Golden Rules to Protect Your Copyright &amp; Get Paid
                    </h3>
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-200/80 text-amber-900">
                      Creator Summary
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                    <li>
                      <strong>1. File delivery is not copyright transfer:</strong> Sending a Google Drive link, Figma file, or GitHub push never transfers ownership unless a written assignment is signed under <strong>Section 19(1)</strong> and paid for under <strong>Section 19(3)</strong>.
                    </li>
                    <li>
                      <strong>2. Add a one-line IP retention clause on every invoice &amp; proposal:</strong> Include this exact sentence on all quotes and invoices: <em>&quot;Pursuant to Sections 17 and 19 of the Copyright Act, 1957, all copyright and intellectual property rights in deliverables remain the exclusive property of the Creator until 100% of all invoices are paid in full.&quot;</em>
                    </li>
                    <li>
                      <strong>3. Revoke implied licence in writing before filing takedowns:</strong> Serving a formal advocate Cease-and-Desist Notice revokes any implied review permission and turns the client&apos;s continued usage into <strong>knowing infringement under Sections 51 and 63</strong>.
                    </li>
                    <li>
                      <strong>4. Use Section 62(2) hometown jurisdiction:</strong> Unlike ordinary debt suits, copyright infringement suits can be filed in the District Court where <em>you</em> reside or work.
                    </li>
                    <li>
                      <strong>5. Never sabotage client servers—use lawful takedowns:</strong> Never delete client databases or inject kill-switches; use statutory Cease-and-Desist notices and Intermediary Rules / DMCA takedowns instead.
                    </li>
                  </ul>
                </aside>

                {/* Honest Scope Block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 sm:p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-emerald-950">
                      ✓ What LegalRecovery.in Can Do for You
                    </h3>
                    <ul className="text-xs sm:text-sm text-emerald-900 space-y-1.5 leading-relaxed">
                      <li>• Draft and serve a dual-statutory Advocate Cease-and-Desist &amp; Payment Demand Notice under the Copyright Act, Contract Act, and MSMED Act.</li>
                      <li>• Formally revoke the client&apos;s implied licence and put both the agency and the end-client brand on copyright infringement notice.</li>
                      <li>• Prepare compliant platform takedown notices (IT Rules 2021 Rule 3(1)(d) / DMCA) and negotiate full invoice settlement plus formal Section 19 IP release upon payment.</li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 bg-slate-100 border border-slate-200 rounded-2xl space-y-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      ✕ Honest Scope &amp; Legal Boundaries
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 leading-relaxed">
                      <li>• If you were a full-time salaried employee on payroll (contract <em>of</em> service under Section 17(c)), copyright vests in the employer; your remedy is unpaid salary/FnF recovery under the Code on Wages, not copyright takedown.</li>
                      <li>• If the client never used or published your rejected draft at all, copyright takedown threats will not pressure them—your primary remedy is breach of contract / quantum meruit recovery under Sections 70 and 73 of the Contract Act.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 9: FAQs (Single Accordion on Page per Archetype G6) */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Freelancer Copyright &amp; Section 19 Work
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Statutory Answers Grounded in the Indian Copyright Act, 1957 and High Court Precedents
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

              {/* Section 10: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Judicial Authorities &amp; Official References
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
                  Last updated: 4 November 2026 • Statutory verification status: All provisions verified against the Copyright Act, 1957 (India Code), reported High Court judgments, and the Information Technology (Intermediary Guidelines) Rules, 2021.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Send a Copyright Cease-and-Desist Demand Notice
                </h2>
                <CopyrightFreelancerNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Freelancer, Creator &amp; Agency Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/freelancer-payment-recovery-legal-options-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Freelancer Payment Recovery Legal Options India →
                  </Link>
                  <Link
                    href="/how-freelancer-can-send-legal-notice-to-client-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    How a Freelancer Can Send a Legal Notice to a Client →
                  </Link>
                  <Link
                    href="/msme-act-freelancer-payment-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME Act Freelancer Payment Recovery (3x Interest) →
                  </Link>
                  <Link
                    href="/freelancer-evidence-checklist-payment-recovery-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Freelancer Evidence Checklist for Payment Recovery →
                  </Link>
                  <Link
                    href="/influencer-brand-deal-payment-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Influencer Brand Deal Payment Not Received →
                  </Link>
                  <Link
                    href="/upwork-fiverr-client-not-paying-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Upwork or Fiverr Client Not Paying India →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Schedule →
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
