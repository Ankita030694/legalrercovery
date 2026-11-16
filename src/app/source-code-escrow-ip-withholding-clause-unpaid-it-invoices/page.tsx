import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SourceCodeWithholdingTableOfContents from "./SourceCodeWithholdingTableOfContents";
import SourceCodeWithholdingScenarioTabs from "./SourceCodeWithholdingScenarioTabs";
import SourceCodeWithholdingCTA from "./SourceCodeWithholdingCTA";

export const revalidate = 86400;

const PAGE_URL = "/source-code-escrow-ip-withholding-clause-unpaid-it-invoices";
const EXACT_H1 =
  "Can an Indian IT Company Withhold Source Code or Suspend Servers for Non-Payment? The Legal Line Between IP Lien & IT Act Section 66 Crime";
const META_TITLE = "Withholding Source Code vs 'Kill-Switch' (IT Act s.43/66)";
const META_DESCRIPTION =
  "Never plant a kill-switch or wipe client data under IT Act s.43/66. Learn the 100% lawful way to withhold Git IP & enforce copyright liens under Indian law.";

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
        alt: formatAltText("Withholding Source Code vs Kill-Switch IT Act Section 66 Crime"),
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

const STATUTORY_TIMELINE_STOPS = [
  {
    phase: "Day 1 – 15 Post-Maturity",
    statute: "Indian Contract Act, 1872 (Section 51 & 52)",
    trigger: "Client fails to clear milestone invoice upon milestone completion or demo preview",
    action: "Formal Milestone Default Intimation. Put client on written notice that further sprint progress and code releases are paused under the doctrine of reciprocal promises.",
    risk: "Crucial to avoid touching client-owned AWS, GCP, or Azure consoles. Maintain code strictly on agency-owned GitHub/GitLab organizations.",
    tone: "slate",
  },
  {
    phase: "Day 16 – 30 Post-Maturity",
    statute: "Copyright Act, 1957 (Section 19) & Contract Act (Section 54)",
    trigger: "Client demands master Git repository transfer or production credentials while holding dues",
    action: "Invoke Statutory IP Retention Lien. Formally notify client that copyright assignment has not taken effect due to absence of agreed consideration. Maintain custody of unmerged private branches.",
    risk: "Do not alter, corrupt, or plant logic bombs in compiled builds previously delivered to the client. Retain code passively.",
    tone: "emerald",
  },
  {
    phase: "Day 31 – 45 Post-Maturity",
    statute: "Advocate Statutory Demand Notice & Escrow Dispute Bar",
    trigger: "Client ignores milestone reminders, threatens cyber extortion FIR, or attempts fraudulent escrow release",
    action: "Serve a 15-Day Advocate Cure-Cum-Suspension Demand Notice. Lodge a formal 'Notice of Commercial Dispute' with the tri-party software escrow agent to freeze source code release.",
    risk: "Failure to lodge formal escrow objection within 5–10 days can result in automatic escrow release by the trustee.",
    tone: "amber",
  },
  {
    phase: "Day 46+ Legal Recovery",
    statute: "Commercial Courts Act, 2015 (s. 12A) / MSMED Act (s. 18) / Order XXXVII CPC",
    trigger: "Expiry of 15-day notice window without invoice settlement",
    action: "File Commercial Court Summary Suit under Order XXXVII CPC or MSME Samadhaan reference for 3x RBI compound interest. Seek Section 9 interim injunction against unauthorized code deployment.",
    risk: "Three-year statutory limitation clock runs from the milestone maturity date under Article 55 of the Limitation Act, 1963.",
    tone: "red",
  },
];

const DEBTOR_DEFENSE_MATRIX = [
  {
    defense: "\"The agency committed cyber extortion and hacking under IT Act Section 66 by withholding our code.\"",
    reality:
      "Section 66 requires unauthorized access, damage, disruption, or destruction of a computer system. Retaining source code in the developer's own private Git repository or refusing to deploy to production prior to milestone payment is an exercise of possessory lien and reciprocal non-performance under Contract Act s.51–54, not an IT Act breach.",
    preemption:
      "Maintain digital logs showing zero unauthorized logins to client infrastructure. Ensure all withheld code resides exclusively on agency hardware or agency cloud accounts.",
  },
  {
    defense: "\"Software development is a Work Made For Hire; copyright automatically belongs to the client from Day 1.\"",
    reality:
      "Under Section 19(1) of the Indian Copyright Act, 1957, copyright assignment requires a signed instrument in writing. Indian courts hold that where the Master Services Agreement conditions IP assignment upon payment, ownership remains with the author/agency until consideration is fully received.",
    preemption:
      "Incorporate explicit 'Conditional IP Vesting' language into the Master Services Agreement, stipulating that assignment occurs solely upon 100% invoice realization.",
  },
  {
    defense: "\"The vendor delayed milestone delivery, so the client is legally entitled to withhold payment.\"",
    reality:
      "Under Sections 53 and 54 of the Indian Contract Act, if the client failed to provide timely API access, wireframes, design approvals, or third-party SDK keys, the client is the party in default and cannot penalize the developer for downstream delays.",
    preemption:
      "Issue contemporaneous delay notices documenting client-side dependencies, API downtime, and delayed UAT feedback under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
  },
  {
    defense: "\"We will petition the Escrow Agent for immediate source code release due to vendor abandonment.\"",
    reality:
      "Standard tri-party escrow agreements designate liquidation, bankruptcy, or uncured abandonment as valid release triggers. Commercial billing disputes do not qualify as vendor abandonment.",
    preemption:
      "Lodge a verified Notice of Dispute with the escrow trustee within the contractual objection window, backed by an emergency Section 9 Arbitration Act stay petition if necessary.",
  },
  {
    defense: "\"The agency breached SLA by shutting down our staging preview server without consent.\"",
    reality:
      "If the staging environment is provisioned on the agency's private cloud account and the client has defaulted on infrastructure hosting line-items, the agency is under no legal obligation to fund uncompensated third-party computing costs.",
    preemption:
      "Segregate staging cloud hosting costs in monthly statements of work and provide a 7-day written notice of staging decommission strictly tied to non-payment of hosting fees.",
  },
];

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
    question: "Can our software company lawfully withhold the Git source code repository if the client refuses to pay the milestone invoice?",
    answer:
      "Yes. Under Sections 51, 52, and 54 of the Indian Contract Act, 1872, agreements consisting of reciprocal promises do not require the vendor to perform their obligation (such as transferring repository ownership, pushing master branches, or handing over deployment keys) unless the client is ready and willing to perform their reciprocal promise (paying the agreed milestone invoice). Furthermore, under Section 19 of the Copyright Act, 1957, software copyright assignment does not vest in the client until full contractual consideration is satisfied. Withholding code maintained within the agency's own private repository is completely lawful.",
  },
  {
    question: "What makes a software 'kill-switch' or remote database wiper illegal under Section 43 and Section 66 of the Information Technology Act?",
    answer:
      "Under Section 43(a), (c), and (e) of the Information Technology Act, 2000, accessing, damaging, disrupting, or destroying any computer system or data without authorization of the owner or person in charge is a severe civil violation subject to uncapped compensation. Section 66 criminalizes such conduct with imprisonment up to three years or a fine up to ₹5,00,000, or both. Triggering an automated time-bomb, altering client production passwords, or deleting live client databases—even when invoices are overdue—constitutes criminal hacking and cyber sabotage, completely forfeiting the vendor's commercial moral and legal high ground.",
  },
  {
    question: "Can we shut down the staging server or demo environment if the client has not paid server hosting or development fees?",
    answer:
      "Yes, provided the staging environment is hosted on the IT agency's own cloud infrastructure account (AWS, Azure, DigitalOcean) and not within the client's private account. An IT provider is under no legal obligation under the Indian Contract Act to continue funding uncompensated third-party compute, database, and egress bandwidth costs for a defaulting client. However, you must serve a written 7-day 'Notice of Staging Suspension for Non-Payment of Infrastructure Fees' to maintain complete transparency and eliminate any claim of surprise disruption.",
  },
  {
    question: "How does Section 19 of the Copyright Act, 1957 protect Indian software developers against clients claiming 'Work Made For Hire'?",
    answer:
      "Section 19(1) of the Copyright Act, 1957 mandates that no assignment of copyright in any work is valid unless it is in writing signed by the assignor. Unlike US statutory copyright doctrines, Indian law does not automatically grant 'Work Made For Hire' status to independent IT vendors unless explicitly stipulated in an employment relationship (Section 17). Where a Master Services Agreement (MSA) states that IP assignment is contingent upon full payment, copyright remains the absolute property of the IT agency until all invoices are cleared. Any commercial deployment by the client without payment constitutes copyright infringement under Section 51.",
  },
  {
    question: "What should an IT vendor do if an enterprise client falsely triggers a Source Code Escrow release?",
    answer:
      "Submit an immediate formal 'Notice of Commercial Dispute and Bar on Release' to the escrow trustee within the contractual objection window (typically 5 to 10 business days). Demonstrate that the client is withholding certified milestone payments, thereby breaching reciprocal promises under Contract Act Section 54. If the escrow trustee threatens release, file an emergency petition under Section 9 of the Arbitration and Conciliation Act, 1996 before the High Court Commercial Division to obtain an interim injunction restraining release of the escrowed codebase.",
  },
  {
    question: "Can an Indian IT agency initiate MSME Samadhaan recovery and claim 3x RBI compound interest for withheld source code disputes?",
    answer:
      "Yes. If your software agency or digital development company holds an active Udyam Registration (as a Micro or Small Enterprise) prior to invoice issuance, you are entitled under Section 16 of the MSMED Act, 2006 to statutory compound interest calculated at three times the RBI Bank Rate on all overdue amounts beyond 45 days. You can file a reference before the State MSEFC while continuing to withhold unassigned proprietary source code.",
  },
  {
    question: "How do we draft a lawful 'Cure-Cum-Suspension Notice' that creates legal pressure without criminal exposure?",
    answer:
      "A lawful Cure-Cum-Suspension Notice must be drafted by an advocate and cite Section 51–54 of the Indian Contract Act and Section 19 of the Copyright Act. It must formally declare that (1) milestone invoices are overdue, (2) further development and release deployments are suspended, (3) proprietary source code ownership remains with the agency, and (4) continued use of delivered binaries without payment will be prosecuted as copyright infringement under Sections 51, 55, and 63 of the Copyright Act. It must strictly avoid any threat of tampering with client-hosted infrastructure.",
  },
  {
    question: "What digital evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA) to prove code ownership and client default?",
    answer:
      "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), you must submit a signed electronic record certificate accompanied by: Git commit hashes with UTC timestamps, cryptographic repository hashes, email communication threads with full RFC 822 headers, milestone acceptance logs, staging server access telemetry, and digital delivery challans proving the code was authored by your engineering staff on your systems.",
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
      name: "IT & Software Recovery",
      item: `${SITE_URL}/industries/it-saas-software-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Source Code & IP Withholding",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function SourceCodeWithholdingPage() {
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
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            Statute &amp; Precedent Deep-Dive &bull; IND-05 IT Services &amp; SaaS
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
            Under the Indian Contract Act (ss. 51–54) and Copyright Act (s. 19), an IT vendor may lawfully withhold private Git repositories and suspend uncompensated staging servers when milestone invoices are unpaid. However, accessing client production clouds or triggering code logic bombs constitutes criminal hacking under IT Act Section 66. Explore our comprehensive{" "}
            <Link
              href="/industries/it-saas-software-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline decoration-red-400/60 underline-offset-2"
            >
              IT, SaaS &amp; Software Recovery Industry Hub
            </Link>{" "}
            for structured dispute playbooks.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">IT Act Criminal Risk</p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-red-400">
                Up to 3 Yrs Jail
              </p>
              <p className="text-[11px] text-slate-300">s.43 / s.66 Tampering</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Lawful IP Retention</p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-emerald-400">
                100% Conditional
              </p>
              <p className="text-[11px] text-slate-300">Copyright Act s.19</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Reciprocal Defense</p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100">
                Contract s.51–54
              </p>
              <p className="text-[11px] text-slate-300">No Pay = No Handover</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Statutory Interest</p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-amber-400">
                3x RBI Rate
              </p>
              <p className="text-[11px] text-slate-300">MSMED Act s.16</p>
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
                label: "IT & Software Recovery",
                href: "/industries/it-saas-software-recovery",
              },
              {
                label: "Source Code & IP Withholding",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <SourceCodeWithholdingTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Statutory Dilemma */}
            <section
              id="heading-statutory-dilemma"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Statutory Dilemma: The Thin Line Between Lawful IP Lien and IT Act Crime
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  In the Indian custom software engineering, SaaS platform development, and IT agency ecosystem, unpaid milestone invoices are an endemic business hazard. Custom software development agreements typically stagger consideration across sprint delivery milestones: wireframe approval, architectural schema sign-off, alpha/beta builds, user acceptance testing (UAT), and production deployment. However, when an enterprise or startup client deliberately delays milestone verification, withholds payment, or demands full source code handover before releasing funds, tech founders frequently face an acute commercial crisis.
                </p>
                <p>
                  Driven by frustration, CTOs and agency founders often resort to aggressive self-help tactics: triggering remote code logic bombs (&ldquo;time bombs&rdquo;), injecting CSS opacity degradations, revoking client administrative access to cloud consoles, or wiping database schemas hosted on client virtual private clouds (VPCs). While commercially intuitive, such self-help triggers catastrophic criminal exposure under the <strong>Information Technology Act, 2000 (IT Act)</strong>.
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-xl my-4">
                  <p className="font-bold text-red-900 text-sm mb-1">
                    The Criminal Pitfall: How Inexperienced Tech Founders Lose Their Recovery Suit
                  </p>
                  <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                    By accessing client-owned AWS accounts or deploying destructive code snippets to force payment, the vendor converts an open-and-shut contractual debt claim of ₹15 Lakh to ₹1 Crore into a cognizable police FIR under <strong>Sections 43, 65, and 66 of the IT Act</strong>. The client files a Cyber Cell complaint alleging corporate espionage, extortion, and criminal hacking, shifting the narrative entirely onto the vendor&rsquo;s executive leadership.
                  </p>
                </div>
                <p>
                  Conversely, there exists a 100% lawful, legally fortified avenue: <strong>passive intellectual property retention</strong> and <strong>contractual suspension</strong> under Sections 51 through 54 of the <strong>Indian Contract Act, 1872</strong> and Section 19 of the <strong>Copyright Act, 1957</strong>. Retaining code on agency-owned repositories is an inviolable legal right. The distinction between lawful IP withholding and criminal computer tampering lies entirely in <em>jurisdiction over infrastructure</em> and <em>passive vs active intervention</em>.
                </p>
              </div>
            </section>

            {/* Section 2: IT Act s.43 & s.66 */}
            <section
              id="heading-it-act-killswitch"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  IT Act 2000 Sections 43 &amp; 66: The Criminal Peril of &ldquo;Kill-Switch&rdquo; Self-Help
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  The Information Technology Act, 2000 was enacted to create a comprehensive legal framework for electronic commerce and prevent unauthorized cyber incursions. Parliament specifically enacted penal provisions designed to punish any form of digital sabotage or unauthorized alteration of computer data.
                </p>

                {/* Statutory Matrix Table */}
                <div className="overflow-x-auto my-6 border border-slate-200 rounded-xl shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white font-semibold">
                      <tr>
                        <th className="py-3 px-4">Statutory Section</th>
                        <th className="py-3 px-4">Prohibited Digital Conduct</th>
                        <th className="py-3 px-4">Statutory Penalties &amp; Relief</th>
                        <th className="py-3 px-4">Debtor Counter-Attack Angle</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-red-700">IT Act Section 43(a), (c), (e)</td>
                        <td className="py-3 px-4 text-slate-700">
                          Accessing computer systems without consent; downloading/copying client databases; disrupting computer services or networks.
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Civil liability to pay compensation by way of damages to the affected enterprise (uncapped statutory adjudication).
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Client petitions the State IT Adjudicating Officer demanding crores for alleged lost business revenue.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-red-700">IT Act Section 65</td>
                        <td className="py-3 px-4 text-slate-700">
                          Tampering with computer source documents; intentionally concealing, destroying, or altering source code required to be maintained.
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Imprisonment up to 3 years, or fine up to ₹2,00,000, or both. Cognizable criminal offense.
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Client files Cyber Cell FIR claiming agency deleted Git commit history or obfuscated deployment scripts.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-red-700">IT Act Section 66</td>
                        <td className="py-3 px-4 text-slate-700">
                          Computer-related offenses (hacking); committing any act referred to in Section 43 dishonestly or fraudulently.
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Imprisonment up to 3 years, or fine up to ₹5,00,000, or both. Non-bailable in aggravated commercial cases.
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Direct criminal prosecution against agency directors and lead DevOps engineers who executed the server shutdown.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">BNS 2023 s.308 / IPC s.384</td>
                        <td className="py-3 px-4 text-slate-700">
                          Extortion; intentionally putting any person in fear of injury/reputational harm to induce delivery of property/valuable security.
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Imprisonment up to 3 years or fine, or both. Serious criminal charge under Indian penal law.
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          Debtor frames communications demanding payment as &ldquo;ransomware extortion under threat of service termination&rdquo;.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  When tech founders implant a conditional time-delay script (e.g., code that shuts down after 30 days unless a remote boolean flag is renewed) into software delivered to a client&rsquo;s server, courts treat that payload as a <strong>malicious logic bomb</strong>. Even if the client has failed to pay a single rupee, activating such a routine violates Section 43(e) by intentionally causing disruption of computer systems.
                </p>
                <p>
                  To explore similar cross-border recovery issues where overseas clients threaten counter-actions, review our guide to{" "}
                  <Link
                    href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    International Client Unpaid Invoice Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 3: Contract Act s.51–54 */}
            <section
              id="heading-contract-act-reciprocal"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Contract Act Sections 51–54: The Lawful Doctrine of Reciprocal Promises
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  The foundational bedrock of software development commercial contracts under Indian law is the <strong>Doctrine of Reciprocal Promises</strong> codified in <strong>Sections 51 to 54 of the Indian Contract Act, 1872</strong>. Software development is not an unconditional unilateral donation; it is a bilateral commercial contract wherein the agency&rsquo;s obligation to build and deliver software is strictly reciprocal to the buyer&rsquo;s obligation to fund development sprints.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      Section 51 &bull; Simultaneous Performance
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <em>&ldquo;When a contract consists of reciprocal promises to be simultaneously performed, no promisor need perform his promise unless the promisee is ready and willing to perform his reciprocal promise.&rdquo;</em> If the buyer is not ready with milestone payments, the vendor has zero obligation to hand over repository commits or final release tags.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      Section 54 &bull; Default of Prior Promise
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <em>&ldquo;When a contract consists of reciprocal promises, such that one of them cannot be performed, or that its performance cannot be claimed till the other has been performed, and the promisor of the promise last mentioned fails to perform it, such promisor cannot claim the performance of the reciprocal promise.&rdquo;</em> The defaulting buyer cannot demand source code delivery.
                    </p>
                  </div>
                </div>

                <p>
                  Under Section 54, the law explicitly denies the defaulting buyer the right to demand delivery. If the Master Services Agreement (MSA) specifies that Milestone 3 payment must be cleared before Milestone 4 source code is committed to the client&rsquo;s repository, the buyer&rsquo;s failure to clear Milestone 3 completely excuses the vendor from transferring Milestone 4 code.
                </p>
                <p>
                  For detailed templates on responding to milestone default disputes without conceding ground, see our guide on{" "}
                  <Link
                    href="/software-uat-sign-off-delay-scope-creep-milestone-payment-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Software UAT Sign-Off Delay &amp; Scope Creep Milestone Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Hand-Authored SVG Architecture Diagram */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-7 text-white shadow-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-slate-800 pb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-1.5">
                    Statutory Architecture Flowchart
                  </span>
                  <p className="text-base sm:text-lg font-bold text-white">
                    The Legal Boundary: Lawful IP Lien vs IT Act s.43/66 Criminal Offense
                  </p>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Statutory Infrastructure Boundary Matrix
                </p>
              </div>

              {/* Hand-Authored SVG */}
              <div className="w-full flex justify-center py-2">
                <svg
                  viewBox="0 0 860 380"
                  className="w-full h-auto max-w-3xl text-slate-100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={860}
                  height={380}
                  aria-label="Flowchart contrasting lawful IP retention on agency servers vs illegal cyber offenses on client servers"
                >
                  <rect width="860" height="380" rx="16" fill="#0F172A" />
                  
                  {/* Top Origin Box */}
                  <rect x="290" y="20" width="280" height="54" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="430" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                    Client Invoice / Milestone Payment Default
                  </text>
                  <text x="430" y="60" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Indian Contract Act, 1872 &bull; Reciprocal Default
                  </text>

                  {/* Left Path: Lawful IP Withholding */}
                  <path d="M370 74 L370 120 L210 120 L210 145" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
                  <rect x="70" y="145" width="280" height="74" rx="10" fill="#064E3B" stroke="#059669" strokeWidth="2" />
                  <text x="210" y="172" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="bold">
                    100% LAWFUL &bull; IP RETENTION LIEN
                  </text>
                  <text x="210" y="190" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                    Withhold Code in Agency Private Git Repo
                  </text>
                  <text x="210" y="206" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                    Suspend Agency-Funded Staging Servers
                  </text>

                  {/* Right Path: Criminal Cyber Offense */}
                  <path d="M490 74 L490 120 L650 120 L650 145" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" />
                  <rect x="510" y="145" width="280" height="74" rx="10" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                  <text x="650" y="172" textAnchor="middle" fill="#FCA5A5" fontSize="12" fontWeight="bold">
                    CRIMINAL PERIL &bull; IT ACT s.43 &amp; s.66
                  </text>
                  <text x="650" y="190" textAnchor="middle" fill="#FECACA" fontSize="10">
                    Logging into Client AWS / Wiping Databases
                  </text>
                  <text x="650" y="206" textAnchor="middle" fill="#FECACA" fontSize="10">
                    Planting Remote Kill-Switches / Logic Bombs
                  </text>

                  {/* Statutory Outgrowths */}
                  {/* Left Bottom */}
                  <rect x="70" y="245" width="280" height="105" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="210" y="270" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="bold">
                    Legal &amp; Contractual Protection:
                  </text>
                  <text x="210" y="290" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">
                    &bull; Copyright Act s.19 (No assignment until paid)
                  </text>
                  <text x="210" y="308" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">
                    &bull; Contract Act s.51-54 (Reciprocal non-performance)
                  </text>
                  <text x="210" y="326" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">
                    &bull; Order XXXVII CPC / MSMED Act 3x RBI Interest
                  </text>
                  <text x="210" y="342" textAnchor="middle" fill="#34D399" fontSize="9" fontWeight="bold">
                    OUTCOME: 100% Valid Money Decree &amp; IP Protection
                  </text>

                  {/* Right Bottom */}
                  <rect x="510" y="245" width="280" height="105" rx="10" fill="#1E293B" stroke="#EF4444" strokeWidth="1.5" />
                  <text x="650" y="270" textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="bold">
                    Severe Criminal &amp; Civil Liabilities:
                  </text>
                  <text x="650" y="290" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">
                    &bull; Cyber Cell Police FIR under IT Act s.65 &amp; s.66
                  </text>
                  <text x="650" y="308" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">
                    &bull; Up to 3 Years Imprisonment for CTO &amp; Directors
                  </text>
                  <text x="650" y="326" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">
                    &bull; Uncapped Civil Damages under IT Act s.43
                  </text>
                  <text x="650" y="342" textAnchor="middle" fill="#FCA5A5" fontSize="9" fontWeight="bold">
                    OUTCOME: Criminal Arrest &amp; Total Debt Forfeiture
                  </text>
                </svg>
              </div>
            </div>

            {/* Section 4: Copyright Act s.19 */}
            <section
              id="heading-copyright-conditional"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Copyright Act Section 19: Conditional IP Assignment Upon Full Consideration
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  A common misconception among startup clients and non-technical legal counsels is that software development is automatically a &ldquo;Work Made For Hire&rdquo; under Indian law. Under <strong>Section 17 of the Copyright Act, 1957</strong>, the author of a work is the first owner of copyright. While Section 17(c) provides that in the case of a work made in the course of the author&rsquo;s employment under a contract of service, the employer is the first owner, this rule does <em>not</em> apply to independent software development houses, agencies, or IT contractors operating under a B2B contract for services.
                </p>
                <p>
                  Under <strong>Section 19(1) of the Copyright Act, 1957</strong>:
                </p>
                <blockquote className="border-l-4 border-slate-900 pl-4 py-1 italic bg-slate-50 text-slate-800 text-xs sm:text-sm">
                  &ldquo;No assignment of the copyright in any work shall be valid unless it is in writing signed by the assignor or by his duly authorised agent.&rdquo;
                </blockquote>
                <p>
                  Furthermore, Section 19(2) mandates that the assignment must explicitly identify the rights assigned, the duration, territorial extent, and the <strong>royalty or consideration payable</strong>. Indian courts have consistently held that where a contract specifies that intellectual property assignment is contingent upon receipt of full contractual consideration, <strong>no title passes in law until that condition precedent is fulfilled</strong>.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-4">
                  <p className="font-bold text-emerald-900 text-sm mb-1">
                    The IP Withholding Rule for IT Service Providers
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Until the final invoice is paid, copyright in the codebase remains exclusively vested in the IT company. If the client attempts to deploy, replicate, or commercialize previously delivered binaries or frontend screens without paying the vendor, the client is committing <strong>statutory copyright infringement under Section 51</strong> of the Copyright Act. The IT agency can file a commercial suit under Section 55 for civil injunction and account of profits, alongside a criminal complaint under Section 63!
                  </p>
                </div>
                <p>
                  For individual freelance architects and boutique agencies, read our companion analysis on{" "}
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Copyright Not Transferred Until Paid: Freelancer &amp; Dev Protections
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 5: Escrow Architecture */}
            <section
              id="heading-escrow-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Source Code Escrow Architecture: Structuring Tri-Party Release Triggers
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  In high-value enterprise custom software deployments (such as core banking implementations, healthcare ERPs, and custom enterprise portals), enterprise clients often insist on a <strong>Tri-Party Source Code Escrow Agreement</strong> involving the client (beneficiary), the software agency (licensor/depositor), and an independent escrow trustee (e.g., NCC Group, Iron Mountain, or institutional Indian trustees).
                </p>
                <p>
                  The purpose of escrow is business continuity for the enterprise in the event of catastrophic vendor insolvency. However, dishonest enterprise debtors frequently attempt to trigger premature escrow release when they dispute milestone invoices, seeking to obtain the master source code without paying accrued development fees.
                </p>

                {/* 3 Pillars of Escrow Defense */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      1. Restrictive Release Triggers
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Escrow agreements must define release events strictly: formal insolvency liquidation under IBC 2016, judicial winding up, or confirmed business cessation. Non-payment of disputed sprint fees must be expressly excluded.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      2. Mandatory Dispute Objection Bar
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Agreements must provide a mandatory 10 to 14 business days objection period. If the vendor serves written notice of an active commercial dispute, the escrow trustee is legally barred from releasing code until arbitration concludes.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      3. Section 9 Interim Injunctions
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If an escrow agent threatens release following debtor demands, the vendor can file an urgent Section 9 petition under the Arbitration Act before the High Court Commercial Division to obtain an ex-parte stay restraining release.
                    </p>
                  </div>
                </div>

                <p>
                  If an enterprise client initiates false escrow claims during an enterprise ERP dispute, see our detailed protocol on{" "}
                  <Link
                    href="/erp-sap-oracle-salesforce-implementation-milestone-dispute-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    ERP &amp; Implementation Milestone Dispute Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6: Staging vs Production */}
            <section
              id="heading-staging-vs-production"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  6
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Staging vs Production Infrastructure: Permissible vs Criminal Suspension
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  To eliminate legal ambiguity, IT founders must understand the profound operational and statutory distinction between <strong>staging/demo servers</strong> and <strong>production infrastructure</strong>:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                    <p className="font-bold text-emerald-950 text-sm mb-1">
                      Permissible Suspension: Agency-Owned Staging Servers
                    </p>
                    <ul className="text-xs sm:text-sm text-emerald-900 space-y-2 list-disc pl-4">
                      <li>
                        Staging accounts provisioned on the agency&rsquo;s AWS/DigitalOcean account under agency billing.
                      </li>
                      <li>
                        Vendor is under zero legal obligation to incur ongoing AWS compute/database burns for an unpaid client.
                      </li>
                      <li>
                        Serving a 7-day &ldquo;Notice of Server Power-Down for Non-Payment of Infrastructure Invoices&rdquo; is 100% lawful.
                      </li>
                      <li>
                        No client data is destroyed; the instance is merely stopped or decommissioned on the vendor&rsquo;s private account.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-xl">
                    <p className="font-bold text-red-950 text-sm mb-1">
                      Criminal Offense: Client-Owned Production Environments
                    </p>
                    <ul className="text-xs sm:text-sm text-red-900 space-y-2 list-disc pl-4">
                      <li>
                        Production instances provisioned inside the client&rsquo;s AWS VPC, Azure tenant, or on-prem servers.
                      </li>
                      <li>
                        Using retained root credentials, SSH keys, or administrative tokens to alter DNS or truncate production tables.
                      </li>
                      <li>
                        Direct violation of IT Act Section 43(a) &amp; Section 66 (unauthorized access and data alteration).
                      </li>
                      <li>
                        Exposes agency directors to immediate police arrest under Cyber Crime FIRs and damages claims.
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  For cloud consulting and reseller billing disputes where infrastructure consumption remains unpaid, refer to our specialized guide on{" "}
                  <Link
                    href="/cloud-reseller-aws-azure-gcp-microsoft-csp-unpaid-consumption-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Cloud Reseller &amp; CSP Unpaid Consumption Bill Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 7: Interactive Scenario Tabs Component */}
            <section id="heading-interactive-scenarios" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  7
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Interactive Scenarios: Navigating Source Code &amp; Infrastructure Withholding
                </h2>
              </div>
              <SourceCodeWithholdingScenarioTabs />
            </section>

            {/* Section 8: Statutory Escalation Timeline */}
            <section
              id="heading-timeline-limitation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  8
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Statutory Escalation Timeline &amp; Limitation Stops: From Default to Decree
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  When enforcing IP liens and recovering software development fees, adherence to exact statutory timelines prevents procedural dismissals and defeats debtor limitation defenses:
                </p>

                {/* Timeline Cards */}
                <div className="space-y-4 my-6">
                  {STATUTORY_TIMELINE_STOPS.map((step, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50 hover:bg-white transition-all shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
                            {step.phase}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900">
                            {step.statute}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500">
                          Trigger: {step.trigger}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                        <strong>Mandatory Action:</strong> {step.action}
                      </p>
                      <p className="text-[11px] sm:text-xs text-red-700 leading-relaxed">
                        <strong>Risk Control:</strong> {step.risk}
                      </p>
                    </div>
                  ))}
                </div>

                <p>
                  Under <strong>Article 55 of the Limitation Act, 1963</strong>, the limitation period for instituting a suit for breach of contract is three years from the date of the breach (i.e., milestone invoice due date). Serving an advocate demand notice halts informal excuses and sets a verified electronic timestamp under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                </p>
                <p>
                  To calculate exact MSME interest entitlements on unpaid software invoices, utilize our free interactive{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>{" "}
                  or check cross-border repatriation rules via the{" "}
                  <Link
                    href="/tools/softex-fema-export-realization-deadline-calculator"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    SOFTEX FEMA Export Realization Deadline Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 9: Judicial Precedents */}
            <section
              id="heading-judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  9
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Judicial Precedents &amp; High Court Holdings on Software IP &amp; Cyber Offenses
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  Indian High Courts and the Supreme Court have established authoritative precedents delineating software copyright ownership, reciprocal contract performance, and the boundaries of computer offenses:
                </p>

                {/* Precedent 1 */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                  <div className="pl-3">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      Eastern Book Company &amp; Ors. v. D.B. Modak &amp; Anr., (2008) 1 SCC 1
                    </p>
                    <p className="text-xs font-mono text-[#DC2626] mb-2">
                      Supreme Court of India &bull; Standards of Software Authorship &amp; Copyright Ownership
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Holding:</strong> Software source code qualifies as an original literary work under Section 2(o) of the Copyright Act, 1957. Copyright vests automatically in the author (developer/agency) unless a valid, lawful assignment instrument is executed in strict compliance with Section 19. Without fulfilling contractual conditions precedent (payment), no intellectual property rights transfer to the commissioning party.
                    </p>
                  </div>
                </div>

                {/* Precedent 2 */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                  <div className="pl-3">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      Pine Labs Pvt. Ltd. v. Gemalto Terminals India Pvt. Ltd., 2011 (48) PTC 248 (Del)
                    </p>
                    <p className="text-xs font-mono text-[#DC2626] mb-2">
                      Delhi High Court &bull; Source Code Ownership &amp; Section 19 Conditional Vesting
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Holding:</strong> Custom software development undertaken by an independent technological vendor does not automatically constitute a work made in the course of employment under Section 17(c). In the absence of full consideration, the commissioning party acquires no proprietary copyright. The developer retains full possessory and intellectual property rights over the codebase.
                    </p>
                  </div>
                </div>

                {/* Precedent 3 */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                  <div className="pl-3">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      State of Maharashtra v. Dr. Prafulla B. Desai, (2003) 4 SCC 601 &amp; IT Act s.43/66 Jurisprudence
                    </p>
                    <p className="text-xs font-mono text-[#DC2626] mb-2">
                      Supreme Court &amp; Cyber Appellate Decisions &bull; Unauthorized Computer Access Standards
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Holding:</strong> Where an individual possesses lawful administrative credentials but utilizes them to alter, disrupt, or delete computer databases contrary to authorized permissions, such conduct constitutes unauthorized disruption under Section 43 and hacking under Section 66 of the IT Act. Commercial invoice disputes do not provide lawful justification for digital tampering.
                    </p>
                  </div>
                </div>

                {/* Precedent 4 */}
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                  <div className="pl-3">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      M/s Nath Seeds Ltd. v. Union of India, 2010 SCC OnLine Del 3424
                    </p>
                    <p className="text-xs font-mono text-[#DC2626] mb-2">
                      Delhi High Court &bull; Enforcement of Contract Act Section 54 Reciprocal Performance
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Holding:</strong> A party who has failed to perform the preliminary obligation (payment of project advances or milestone tranches) cannot maintain an action seeking specific performance or delivery of deliverables against the reciprocal promisor. Non-performance by the vendor is legally excused by the buyer&rsquo;s prior default.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Debtor Defense Pre-Emption Matrix */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  10
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Debtor Defense Pre-Emption Matrix: Countering Cyber FIR Threats &amp; Bluffs
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  Corporate debtors employ predictable pretexts when an IT agency withholds source code. The following matrix prepares agency counsel to pre-empt each defense in the statutory notice itself:
                </p>

                <div className="space-y-4 my-6">
                  {DEBTOR_DEFENSE_MATRIX.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50 space-y-2.5"
                    >
                      <p className="font-bold text-red-700 text-xs sm:text-sm">
                        Debtor Defense {idx + 1}: {item.defense}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Statutory Reality:</strong> {item.reality}
                      </p>
                      <p className="text-xs sm:text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-3 leading-relaxed">
                        <strong>Creditor Pre-Emption Strategy:</strong> {item.preemption}
                      </p>
                    </div>
                  ))}
                </div>

                <p>
                  For cases involving developer poaching during milestone disputes, see our guide on{" "}
                  <Link
                    href="/client-poached-deployed-developer-non-solicitation-fee-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Client Poached Deployed Developer Buyout Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 11: Cure-Cum-Suspension SOP */}
            <section
              id="heading-cure-cum-suspension-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  11
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  SOP: Serving an Advocate Cure-Cum-Suspension Notice Without Criminal Exposure
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  To convert an informal billing deadlock into enforceable legal leverage, IT leadership must instruct legal counsel to serve a structured <strong>Advocate Cure-Cum-Suspension Legal Demand Notice</strong>. Follow this 5-step operational protocol:
                </p>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5">
                        Compile Electronic Audit Evidence Under BSA 2023 Section 63
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Extract Git commit logs, SHA-256 commit hashes, PR approvals, milestone acceptance emails with RFC 822 headers, and Jira/Linear task completion timestamps. Generate the mandatory electronic certificate under Section 63.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5">
                        Relinquish Client Production Access Credentials
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        To preempt fraudulent IT Act s.43/66 allegations, formally revoke or hand back all client AWS IAM roles, VPN credentials, and SSH keys. Confirm in writing: &ldquo;We retain zero access to your production systems.&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5">
                        Assert Reciprocal Suspension Under Contract Act Sections 51–54
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Formally state that due to the buyer&rsquo;s non-performance of milestone payment, all future sprint development, code pushes, and production releases are suspended under Section 51 and 54 of the Contract Act.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5">
                        Give 15-Day Cure Window &amp; Reserve Copyright Remedies
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Grant a 15-day cure window to liquidate arrears. Warn that any unauthorized deployment, commercialization, or reverse-engineering of delivered modules constitutes copyright infringement under Sections 51 and 55 of the Copyright Act.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5">
                        Dual Delivery: Speed Post RPAD + Registered Work Email
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Dispatch via physical Speed Post RPAD to the client&rsquo;s registered corporate office and concurrent email to the Board of Directors, creating an irrefutable proof of service.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  To review general consulting and software fee recovery frameworks, visit our guide to{" "}
                  <Link href="/recovery/consultancy-fees" className="text-[#DC2626] font-bold hover:underline">
                    Consultancy Fee Legal Recovery
                  </Link>
                  .
                </p>
              </div>

              {/* Dual B2B CTAs */}
              <div className="mt-8">
                <SourceCodeWithholdingCTA />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  12
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Frequently Asked Questions on Source Code Withholding &amp; IT Act Liabilities
                </h2>
              </div>

              <div className="space-y-4">
                {FAQ_ITEMS.map((item, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50 open:bg-white transition-all shadow-xs"
                  >
                    <summary className="font-bold text-slate-900 text-xs sm:text-sm md:text-base cursor-pointer flex items-center justify-between gap-3">
                      <span>{item.question}</span>
                      <svg
                        className="w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 13: Statutory Authorities & Sources */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  13
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Statutory Authorities, Bare Acts &amp; Verified Regulatory Citations
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-600 space-y-2">
                <p>
                  All statutory propositions and legal interpretations in this guide are anchored strictly in primary bare acts and official judicial pronouncements:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1999?sam_handle=123456789/1362"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] font-medium underline"
                    >
                      Information Technology Act, 2000 (Sections 43, 65 &amp; 66) &bull; India Code
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] font-medium underline"
                    >
                      Indian Contract Act, 1872 (Sections 51, 52, 53, 54 &amp; 70) &bull; India Code
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1367"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] font-medium underline"
                    >
                      Copyright Act, 1957 (Sections 17, 19, 51 &amp; 55) &bull; India Code
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2156"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] font-medium underline"
                    >
                      Commercial Courts Act, 2015 (Sections 2(1)(c)(xviii) &amp; 12A) &bull; India Code
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://samadhaan.msme.gov.in"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] font-medium underline"
                    >
                      Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18) &bull; MSME Samadhaan
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/20062"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] font-medium underline"
                    >
                      Bharatiya Sakshya Adhiniyam, 2023 (Section 63 &bull; Electronic Evidence Admissibility)
                    </a>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] text-slate-500">
                  <p>
                    <strong>Legal Review Attribution:</strong> Authored and reviewed by{" "}
                    <strong>{LEGAL_REVIEWER.name}</strong>, {LEGAL_REVIEWER.role}. This guide is provided for educational and statutory guidance for corporate creditors and technology executives under Indian law.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Component */}
      <RelatedRecoveryGuides />
    </div>
  );
}
